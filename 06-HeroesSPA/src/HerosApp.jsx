import React from "react";
import { AppRouter } from "./router/AppRouter";
import { AuthProvider } from "./context/AuthProvider";

export const HerosApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};
