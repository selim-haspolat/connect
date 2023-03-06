import axios from "axios";
import React, { useRef } from "react";

const CreatePost = ({ ApiKey,displayPosts,setDisplayPosts }) => {
  let input = useRef(null);

  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const addPost = async (text) => {
    const { id,userName,profileImage } = JSON.parse(localStorage.getItem("userData"));

    const { data } = await axios(
      `https://63f2206c4f17278c9a20b961.mockapi.io/${ApiKey}/${id}`
    );

    const posts = data.posts;

    await axios.put(
      `https://63f2206c4f17278c9a20b961.mockapi.io/${ApiKey}/${id}`,
      {
        posts: [
          ...posts,
          {
            postCreator: userName,
            postCreatorImage: profileImage,
            text,
            createdAt: new Date().toISOString(),
            postId: numbers.reduce(
              (acc) => acc + numbers[Math.floor(Math.random() * 10)]
            ),
          },
        ],
      }
    );
    setDisplayPosts(!displayPosts)
  };

  const habdlePost = (e) => {
    e.preventDefault();
    addPost(input.current.value);
    e.target.reset()
  };

  return (
    <form
      onSubmit={habdlePost}
      className="flex justify-center items-center gap-5 m-7"
    >
      <input
        type="text"
        ref={input}
        required
        className="border text-sm rounded-lg p-2.5 w-96 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
      ></input>

      <button
        type="submit"
        className="uppercase outline outline-1 outline-white tracking-widest text-white hover:text-black hover:bg-white transition-colors duration-300 w-28 h-[40px] rounded-lg"
      >
        post
      </button>
    </form>
  );
};

export default CreatePost;
