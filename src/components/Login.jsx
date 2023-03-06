import React from "react";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Login = ({ round, setRound, ApiKey,setLogin}) => {
  const [formData, setFormData] = useState({});

  const checkUser = async () => {
    const res = await axios(
      `https://63f2206c4f17278c9a20b961.mockapi.io` + "/" + ApiKey
    );
    let data = res.data;
    const { email, password } = formData;
    let userInfo = data.filter(
      (u) => u.email === email && u.password === password
    );
    if (userInfo[0]) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
      Toast.fire({
        icon: "success",
        title: "Giriş Başarili",
      });
      localStorage.setItem('userData',JSON.stringify(userInfo[0]))
      setLogin(true)
    } else {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
      Toast.fire({
        icon: "error",
        title: "Griş Başarisiz",
      });
    }
  };

  const loginUser = (event) => {
    event.preventDefault();
    checkUser();
    event.target.reset();
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const displaySignup = () => {
    setRound(round + 1);
  };

  return (
    <div
      id="login"
      className="flex flex-col h-[350px] w-[480px] absolute border-2 border-orange-600 rounded-xl"
    >
      <h1 className="text-center text-4xl font-light my-3 text-orange-500">
        Login
      </h1>
      <form
        onSubmit={loginUser}
        className="grid gap-5 grid-cols-2 container mx-auto p-5"
      >
        <input
          onChange={handleInputChange}
          className="border-2 focus:border-orange-500 transition-colors px-3 py-1 w-full mx-auto col-span-2 outline-none rounded-md"
          type="email"
          name="email"
          id="email"
          required
          placeholder="Email"
        />
        <input
          onChange={handleInputChange}
          className="border-2 focus:border-orange-500 transition-colors px-3 py-1 w-full mx-auto col-span-2 outline-none rounded-md"
          type="password"
          name="password"
          id="password"
          required
          placeholder="Password"
        />
        <div className="col-span-2 text-center">
          <button className="rounded-lg text-white bg-orange-400 hover:bg-orange-500 px-5 py-1 transition-colors">
            Login
          </button>
        </div>
      </form>
      <div className="grow flex items-end justify-center">
        <button
          onClick={displaySignup}
          className="w-[50%] uppercase border-2 my-2 border-orange-600 rounded-lg text-orange-600 hover:bg-orange-600 hover:text-white transition-colors"
        >
          sign up
        </button>
      </div>
    </div>
  );
};

export default Login;
