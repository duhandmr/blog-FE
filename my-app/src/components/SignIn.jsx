import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
      console.log(isLoggedIn);
      setMessage("Hoşgeldiniz!");
      setTimeout(() => {
        navigate("/home");
      }, 1500);
    } else {
      console.log(user);
      setMessage("Kullanıcı adı veya şifre hatalı. Tekrar deneyiniz!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 border p-4 rounded w-72"
      >
        <h2 className="text-xl font-bold text-center">Giriş Yap</h2>
        <input
          type="email"
          placeholder="E-posta"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setMessage("");
          }}
          className="w-full p-2 border rounded"
        />

        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setMessage("");
          }}
          className="w-full p-2 border rounded"
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

export default SignIn;
