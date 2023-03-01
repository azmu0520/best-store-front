import React from "react";
import { AuthProvider } from "./Auth";
import { CollectionsProvider } from "./Collections";
import { ThemeProvider } from "./Theme";

export default function MainProvider({ children }) {
  return (
    <ThemeProvider>
      <CollectionsProvider>
        <AuthProvider>{children}</AuthProvider>
      </CollectionsProvider>
    </ThemeProvider>
  );
}
