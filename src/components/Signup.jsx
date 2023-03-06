import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Signup = ({ round, setRound, ApiKey, setLogin }) => {
  const [formData, setFormData] = useState({});

  const postUser = async () => {
    const { fsname, smail, spassword } = formData;
    await axios.post(
      `https://63f2206c4f17278c9a20b961.mockapi.io` + "/" + ApiKey,
      {
        userName: fsname,
        email: smail,
        password: spassword,
        profileImage:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Prointurpis orci, maximus sed purus a, cursus scelerisque purus.Morbi molestie, odio at sagittis rhoncus, felis massa iaculismi, quis molestie erat ipsum vel risus.",
        accountCreatedAt: `${new Date().toLocaleDateString()}  ${new Date().toLocaleTimeString()}`,
      }
    );
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const res = await axios(
      `https://63f2206c4f17278c9a20b961.mockapi.io` + "/" + ApiKey
    );
    const data = res.data;
    const userChek = data.filter(
      (u) => u.email === formData.smail || u.userName === formData.fsname
    );
    if (userChek.length > 0) {
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
        title: "Kulanici Mevcut",
      });
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
        icon: "success",
        title: "Kayit Başarili",
      });
      await postUser();
      await setUser();
    }
    event.target.reset();
  };

  const setUser = async () => {
    const res = await axios(
      `https://63f2206c4f17278c9a20b961.mockapi.io` + "/" + ApiKey
    );
    let data = res.data;
    let userData = data.filter((u) => u.email === formData.smail);
    localStorage.setItem("userData", JSON.stringify(userData[0]));
    setLogin(true);
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const displayLogin = () => {
    setRound(round + 1);
  };

  return (
    <div
      id="signup"
      className="h-[350px] w-[480px] absolute border-2 border-indigo-600 rounded-xl"
    >
      <h1 className="text-center text-4xl font-light my-3 text-indigo-500">
        Sign up
      </h1>
      <form
        onSubmit={handleFormSubmit}
        className="grid gap-5 grid-cols-2 container mx-auto p-5"
      >
        <input
          onChange={handleInputChange}
          className="border-2 focus:border-indigo-500 transition-colors px-3 py-1 w-full mx-auto outline-none rounded-md col-span-2"
          type="text"
          name="fsname"
          id="fsname"
          required
          placeholder="Username"
        />
        <input
          onChange={handleInputChange}
          className="border-2 focus:border-indigo-500 transition-colors px-3 py-1 w-full mx-auto col-span-2 outline-none rounded-md"
          type="email"
          name="smail"
          id="smail"
          required
          placeholder="Email"
        />
        <input
          onChange={handleInputChange}
          className="border-2 focus:border-indigo-500 transition-colors px-3 py-1 w-full mx-auto col-span-2 outline-none rounded-md"
          type="password"
          name="spassword"
          id="spassword"
          required
          placeholder="Password"
        />
        <div className="col-span-2 text-center">
          <button className="rounded-lg text-white bg-indigo-400 hover:bg-indigo-500 px-5 py-1 transition-colors">
            Sign up
          </button>
        </div>
      </form>
      <div className="text-center">
        <button
          onClick={displayLogin}
          className="w-[50%] uppercase border-2 my-2 border-indigo-600 rounded-lg text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors"
        >
          login
        </button>
      </div>
    </div>
  );
};

export default Signup;
