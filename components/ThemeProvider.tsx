'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let initialTheme: Theme = 'dark';
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const queryTheme = urlParams.get('theme') as Theme | null;
      if (queryTheme === 'light' || queryTheme === 'dark') {
        initialTheme = queryTheme;
        localStorage.setItem('mn-theme', queryTheme);
      } else {
        const savedTheme = localStorage.getItem('mn-theme') as Theme | null;
        if (savedTheme === 'light' || savedTheme === 'dark') {
          initialTheme = savedTheme;
        }
      }
    } catch {
      // fallback
    }

    setTheme(initialTheme);
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('mn-theme', nextTheme);
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
