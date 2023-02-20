import React from 'react';
import { AuthProvider } from './Auth';
import { ThemeProvider } from './Theme';

export default function MainProvider({ children }) {
  return (
    <ThemeProvider>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  );
}
