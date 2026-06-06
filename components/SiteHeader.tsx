'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { navLinks, SITE_NAME } from '@/lib/site';

function LogoIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" className="logo-icon">
      <rect x="5" y="5" width="22" height="22" rx="7" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="20" cy="20" r="2" />
      <circle cx="20" cy="12" r="2" />
      <circle cx="12" cy="20" r="2" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="button-icon">
      <path d="M20 15.4A8.3 8.3 0 0 1 8.6 4a8.5 8.5 0 1 0 11.4 11.4Z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="button-icon">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2.2M12 19.8V22M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M2 12h2.2M19.8 12H22M4.9 19.1l1.6-1.6M17.5 6.5l1.6-1.6" />
    </svg>
  );
}

export function SiteHeader() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const saved = window.localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const nextTheme = saved === 'dark' || (!saved && prefersDark) ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }, []);

  function toggleTheme() {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem('theme', nextTheme);
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand-link" aria-label={`${SITE_NAME}, inicio`}>
          <LogoIcon />
          <span>{SITE_NAME}</span>
        </Link>
        <nav className="site-nav" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="icon-button"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}
          title={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
        >
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </header>
  );
}
