import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DarkModeProvider } from "./context/DarkModeContext";
import { AuthContextProvider } from "./context/AuthContext";

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <DarkModeProvider>
          <AuthContextProvider>
            <Navbar />
            <Outlet />
          </AuthContextProvider>
        </DarkModeProvider>
      </QueryClientProvider>
    </>
  );
}
