"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  function handleLogin() {
    if (email === "admin@test.com" && password === "123456") {
      localStorage.setItem("auth", "true");
      router.push("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="bg-gray-950 border border-gray-800 p-8 w-[360px] rounded-2xl shadow-xl space-y-5">
        
       
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-bold">Lead Dashboard</h1>
          <p className="text-sm text-gray-400">Admin Login</p>
        </div>

       
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-3 text-sm text-gray-300">
          <p><span className="text-gray-400">Demo Email:</span> admin@test.com</p>
          <p><span className="text-gray-400">Demo Password:</span> 123456</p>
        </div>

        
        <div className="space-y-3">
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-black border border-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:border-gray-500"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full bg-black border border-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:border-gray-500"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

       
        <button
          onClick={handleLogin}
          className="w-full bg-white text-black font-medium py-2 rounded-lg hover:bg-gray-200 transition"
        >
          Login
        </button>

       
        <p className="text-xs text-center text-gray-500">
          Secure admin access · Demo project
        </p>
      </div>
    </div>
  );
}
