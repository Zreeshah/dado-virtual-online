'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

type DiceToolProps = {
  defaultDiceCount?: number;
  defaultSides?: number;
  customModeDefault?: boolean;
};

type HistoryEntry = {
  id: number;
  results: number[];
  sides: number;
  total: number;
};

const quickDiceCounts = [1, 2, 3, 4, 5, 6];
const sideOptions = [3, 4, 5, 6, 8, 9, 10, 12, 20, 22];
const maxHistory = 8;

function safeRandomInt(max: number) {
  if (typeof crypto === 'undefined' || !crypto.getRandomValues) {
    return Math.floor(Math.random() * max) + 1;
  }

  const range = 0xffffffff;
  const limit = Math.floor(range / max) * max;
  const value = new Uint32Array(1);

  do {
    crypto.getRandomValues(value);
  } while (value[0] >= limit);

  return (value[0] % max) + 1;
}

function clampNumber(value: number, min: number, max: number) {
  if (Number.isNaN(value)) return min;
  return Math.min(Math.max(value, min), max);
}

function initialResults(count: number) {
  return Array.from({ length: count }, () => 1);
}

function Pip({ position }: { position: string }) {
  return <span className={`pip pip-${position}`} aria-hidden="true" />;
}

function StandardDie({ value, rolling }: { value: number; rolling: boolean }) {
  const positions: Record<number, string[]> = {
    1: ['center'],
    2: ['top-left', 'bottom-right'],
    3: ['top-left', 'center', 'bottom-right'],
    4: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
    5: ['top-left', 'top-right', 'center', 'bottom-left', 'bottom-right'],
    6: ['top-left', 'top-right', 'middle-left', 'middle-right', 'bottom-left', 'bottom-right']
  };

  return (
    <div className={`die-face standard-die ${rolling ? 'is-rolling' : ''}`} aria-label={`Resultado ${value}`}>
      {positions[value]?.map((position) => (
        <Pip key={position} position={position} />
      ))}
    </div>
  );
}

function NumberDie({ value, sides, rolling }: { value: number; sides: number; rolling: boolean }) {
  return (
    <div className={`die-face number-die ${rolling ? 'is-rolling' : ''}`} aria-label={`Resultado ${value}`}>
      <span className="number-die-kind">D{sides}</span>
      <strong>{value}</strong>
    </div>
  );
}

function ResultDie({ value, sides, rolling }: { value: number; sides: number; rolling: boolean }) {
  if (sides <= 6) return <StandardDie value={Math.min(value, 6)} rolling={rolling} />;
  return <NumberDie value={value} sides={sides} rolling={rolling} />;
}

export function DiceTool({
  defaultDiceCount = 1,
  defaultSides = 6,
  customModeDefault = false
}: DiceToolProps) {
  const [diceCount, setDiceCount] = useState(() => clampNumber(defaultDiceCount, 1, 20));
  const [sides, setSides] = useState(() => clampNumber(defaultSides, 2, 100));
  const [customMode, setCustomMode] = useState(customModeDefault);
  const [results, setResults] = useState(() => initialResults(clampNumber(defaultDiceCount, 1, 20)));
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [rolling, setRolling] = useState(false);
  const [hasRolled, setHasRolled] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [status, setStatus] = useState('Listo para tirar');
  const timeoutRef = useRef<number | null>(null);

  const total = useMemo(() => results.reduce((sum, result) => sum + result, 0), [results]);
  const resultText = hasRolled
    ? `Resultado: ${results.join(', ')}. Total: ${total}.`
    : 'Elige las opciones y pulsa Tirar dado.';

  const playSound = useCallback(() => {
    if (!soundEnabled || typeof window === 'undefined') return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;

    const audioContext = new AudioContext();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = 'triangle';
    oscillator.frequency.setValueAtTime(420, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(180, audioContext.currentTime + 0.08);
    gain.gain.setValueAtTime(0.08, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.12);
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.12);
  }, [soundEnabled]);

  const rollDice = useCallback(() => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    const selectedSides = clampNumber(sides, 2, 100);
    const selectedDice = clampNumber(diceCount, 1, 20);
    const preview = Array.from({ length: selectedDice }, () => safeRandomInt(selectedSides));
    const finalResults = Array.from({ length: selectedDice }, () => safeRandomInt(selectedSides));

    setRolling(true);
    setResults(preview);
    setStatus('Tirando dados...');
    playSound();

    timeoutRef.current = window.setTimeout(() => {
      const finalTotal = finalResults.reduce((sum, result) => sum + result, 0);
      setResults(finalResults);
      setHistory((entries) => [
        {
          id: Date.now(),
          results: finalResults,
          sides: selectedSides,
          total: finalTotal
        },
        ...entries
      ].slice(0, maxHistory));
      setHasRolled(true);
      setRolling(false);
      setStatus(`Resultado ${finalResults.join(', ')}. Total ${finalTotal}.`);
    }, 280);
  }, [diceCount, playSound, sides]);

  useEffect(() => {
    setResults(initialResults(diceCount));
    setHasRolled(false);
    setStatus('Opciones actualizadas. Listo para tirar.');
  }, [diceCount, sides]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      const tagName = target?.tagName.toLowerCase();
      const isTyping = tagName === 'input' || tagName === 'select' || tagName === 'textarea';
      if (isTyping) return;
      if (event.key === ' ' || event.key === 'Enter') {
        event.preventDefault();
        rollDice();
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [rollDice]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  function selectSides(nextSides: number) {
    setCustomMode(false);
    setSides(nextSides);
  }

  function reset() {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    setResults(initialResults(diceCount));
    setHistory([]);
    setHasRolled(false);
    setRolling(false);
    setStatus('Resultados reiniciados.');
  }

  async function copyResult() {
    const text = hasRolled
      ? `${results.join(', ')} (total ${total}) en Dado Virtual Online`
      : 'Aún no hay resultado para copiar.';

    try {
      await navigator.clipboard.writeText(text);
      setStatus('Resultado copiado.');
    } catch {
      setStatus('No se pudo copiar automáticamente.');
    }
  }

  async function shareResult() {
    const text = `${results.join(', ')} (total ${total})`;
    if (navigator.share && hasRolled) {
      try {
        await navigator.share({
          title: 'Resultado de dados',
          text,
          url: window.location.href
        });
        setStatus('Resultado compartido.');
        return;
      } catch {
        setStatus('No se completó el uso compartido.');
        return;
      }
    }
    await copyResult();
  }

  return (
    <section className="dice-tool" aria-labelledby="dice-tool-title">
      <div className="dice-tool-head">
        <div>
          <h2 id="dice-tool-title">Tirador de dados</h2>
          <p>Configura la tirada y obtiene un resultado aleatorio al instante.</p>
        </div>
        <label className="sound-toggle">
          <input
            type="checkbox"
            checked={soundEnabled}
            onChange={(event) => setSoundEnabled(event.target.checked)}
          />
          <span>{soundEnabled ? 'Sonido activado' : 'Sonido desactivado'}</span>
        </label>
      </div>

      <div className="dice-stage" aria-live="polite" aria-atomic="true">
        <div className="dice-strip" aria-label={resultText}>
          {results.map((result, index) => (
            <ResultDie key={`${index}-${result}-${sides}`} value={result} sides={sides} rolling={rolling} />
          ))}
        </div>
        <div className="result-panel">
          <span className="result-label">{hasRolled ? 'Resultado' : 'Preparado'}</span>
          <strong>{hasRolled ? results.join(' + ') : 'Tira para empezar'}</strong>
          <span>{hasRolled ? `Total: ${total}` : `${diceCount} dado${diceCount === 1 ? '' : 's'} de ${sides} caras`}</span>
        </div>
        <div className="stage-action-row">
          <button type="button" className="primary-button" onClick={rollDice}>
            Tirar dado
          </button>
          <button type="button" className="secondary-button" onClick={rollDice}>
            Tirar de nuevo
          </button>
        </div>
      </div>

      <div className="controls-grid">
        <div className="control-group">
          <label htmlFor="dice-count">Número de dados</label>
          <div className="quick-options" role="group" aria-label="Elegir número de dados">
            {quickDiceCounts.map((count) => (
              <button
                key={count}
                type="button"
                className={diceCount === count ? 'is-selected' : ''}
                onClick={() => setDiceCount(count)}
                aria-pressed={diceCount === count}
              >
                {count}
              </button>
            ))}
          </div>
          <select
            id="dice-count"
            value={diceCount}
            onChange={(event) => setDiceCount(clampNumber(Number(event.target.value), 1, 20))}
          >
            {Array.from({ length: 20 }, (_, index) => index + 1).map((count) => (
              <option key={count} value={count}>
                {count} {count === 1 ? 'dado' : 'dados'}
              </option>
            ))}
          </select>
        </div>

        <div className="control-group">
          <label htmlFor="sides-count">Número de caras</label>
          <div className="quick-options sides-options" role="group" aria-label="Elegir número de caras">
            {sideOptions.map((option) => (
              <button
                key={option}
                type="button"
                className={!customMode && sides === option ? 'is-selected' : ''}
                onClick={() => selectSides(option)}
                aria-pressed={!customMode && sides === option}
              >
                {option}
              </button>
            ))}
            <button
              type="button"
              className={customMode ? 'is-selected' : ''}
              onClick={() => setCustomMode(true)}
              aria-pressed={customMode}
            >
              Otro
            </button>
          </div>
          <input
            id="sides-count"
            type="number"
            min={2}
            max={100}
            value={sides}
            onChange={(event) => {
              setCustomMode(true);
              setSides(clampNumber(Number(event.target.value), 2, 100));
            }}
            aria-label="Número personalizado de caras, entre 2 y 100"
          />
        </div>
      </div>

      <div className="action-row">
        <button type="button" className="ghost-button" onClick={reset}>
          Reiniciar
        </button>
        <button type="button" className="ghost-button" onClick={copyResult}>
          Copiar
        </button>
        <button type="button" className="ghost-button" onClick={shareResult}>
          Compartir
        </button>
      </div>

      <p className="tool-status" aria-live="polite">
        {status}
      </p>

      <div className="history-box">
        <h3>Últimos resultados</h3>
        {history.length > 0 ? (
          <ol>
            {history.map((entry) => (
              <li key={entry.id}>
                <span>{entry.results.join(', ')}</span>
                <strong>Total {entry.total}</strong>
                <small>D{entry.sides}</small>
              </li>
            ))}
          </ol>
        ) : (
          <p>Aún no hay tiradas recientes.</p>
        )}
      </div>
    </section>
  );
}

declare global {
  interface Window {
    webkitAudioContext?: typeof AudioContext;
  }
}
