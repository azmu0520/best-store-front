import React from 'react';
import { ThemeProvider } from './Theme';

export default function MainProvider({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
