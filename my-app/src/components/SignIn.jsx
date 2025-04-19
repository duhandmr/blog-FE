import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
      setMessage(`Merhaba, ${user.email}!`);
    } else {
      setMessage("Kullanıcı adı veya şifre hatalı. Tekrar deneyiniz!");
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      const timer = setTimeout(() => {
        navigate("/home");
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="flex flex-col items-center justify-center">
      <form
        className="space-y-4 border p-4 rounded w-72"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-bold text-center">Giriş Yap</h2>

        <input
          type="email"
          placeholder="E-posta"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border focus:border-b-2 focus:border-red-500"
        />

        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border focus:border-b-2 focus:border-red-500"
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded"
        >
          Giriş Yap
        </button>
        {message && <p className="text-sm text-red-700">{message}</p>}
      </form>
    </div>
  );
};

export default Login;
