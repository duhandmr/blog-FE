import React, { useState } from "react";

const SignUp = ({ setActiveTab }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.find((u) => u.email === email);
    if (exists) {
      setMessage("Bu e-posta zaten sistemde mevcut");
    } else {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const updatedUsers = [...users, { email, password }];
      localStorage.setItem("users", JSON.stringify(updatedUsers));

      setMessage("Kayıt başarılı! Giriş ekranına yönlendiriliyorsunuz");
      setTimeout(() => {
        setActiveTab("signin");
      }, 1500);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 border p-4 rounded w-72"
      >
        <h2 className="text-xl font-bold text-center">Kayıt Ol</h2>

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
          Kayıt Ol
        </button>
        {message && (
          <p className="text-sm text-center text-blue-600">{message}</p>
        )}
      </form>
    </div>
  );
};

export default SignUp;
