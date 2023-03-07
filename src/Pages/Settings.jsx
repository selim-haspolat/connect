import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";

const Settings = ({ ApiKey }) => {
  const localData = JSON.parse(localStorage.getItem("userData"));
  const { userName, email, profileImage, about, id } = localData;
  const [formData, setFormData] = useState({
    userName: userName,
    email: email,
    profileImage: profileImage,
    about: about,
  });

  const pushChanges = async () => {
    const {data} =await axios(`https://63f2206c4f17278c9a20b961.mockapi.io/${ApiKey}/${id}`)
    
    const updatePosts = data.posts.map(p => ({...p, postCreator: formData.userName,postCreatorImage:formData.profileImage}))

    console.log(updatePosts);

    await axios.put(
      `https://63f2206c4f17278c9a20b961.mockapi.io/${ApiKey}/${id}`,
      {...formData, posts:updatePosts}
    );

  };

  const changeUserData = async (e) => {
    e.preventDefault();
    const { data } = await axios(
      `https://63f2206c4f17278c9a20b961.mockapi.io/${ApiKey}`
    );
    const userChek = data.filter(user => user.userName !== localData.userName).filter(u => u.userName === formData.userName)
    const emailChek = data.filter(user => user.email !== localData.email).filter(u => u.email === formData.email)
    if(userChek.length < 1 && emailChek.length < 1){
      localStorage.setItem(
        "userData",
        JSON.stringify({ ...localData, ...formData })
      );
      pushChanges();
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
        title: "Changes Saved",
      });
    }
    else{
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
        title: "User Exists",
      });
    }
  };

  return (
    <form
      onSubmit={changeUserData}
      className="max-w-[400px] w-[70%] flex flex-col gap-3 p-5 h-96 overflow-auto bg-slate-800 rounded-xl text-slate-800"
    >
      <input
        type="text"
        className="rounded px-2 py-1"
        required
        placeholder="User Name"
        defaultValue={userName}
        onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
      />
      <input
        type="email"
        className="rounded px-2 py-1"
        required
        placeholder="Email"
        defaultValue={email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="url"
        className="rounded px-2 py-1"
        required
        placeholder="Profile Image"
        defaultValue={profileImage}
        onChange={(e) =>
          setFormData({ ...formData, profileImage: e.target.value })
        }
      />
      <textarea
        className="rounded px-2 py-1"
        cols="30"
        rows="10"
        placeholder="About"
        defaultValue={about}
        onChange={(e) => setFormData({ ...formData, about: e.target.value })}
        required
      ></textarea>
      <button className="mt-auto text-gree-500 text-green-500 outline outline-1 outline-green-500 rounded py-1 hover:text-slate-800 hover:bg-green-500 transition-colors">
        Save
      </button>
    </form>
  );
};

export default Settings;
