"use client"

import { AuthProvider } from "./context/AuthContext"
import Hero from "./pages/hero/page";

export default function Home() {
  return (
   <AuthProvider>
    <Hero/>
   </AuthProvider>

  );
}
