import axios from "axios";
import React, { useRef } from "react";

const CreatePost = ({ ApiKey, displayPosts, setDisplayPosts }) => {
  let input = useRef(null);

  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const addPost = async (text) => {
    const { id, userName, profileImage } = JSON.parse(
      localStorage.getItem("userData")
    );

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
            idCreator: id,
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
    setDisplayPosts(!displayPosts);
  };

  const habdlePost = (e) => {
    e.preventDefault();
    addPost(input.current.value);
    e.target.reset();
  };

  return (
    <form onSubmit={habdlePost} className="m-7">
      <div className="flex items-center px-3 py-2 rounded-lg">
        <input
          ref={input}
          type="text"
          className="block mx-4 p-2.5 w-full text-sm rounded-lg border bg-gray-800 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="Post"
          required
        />
        <button
          type="submit"
          className="inline-flex justify-center p-2 rounded-full cursor-pointer  text-blue-500 hover:bg-gray-600"
        >
          <svg
            aria-hidden="true"
            className="w-6 h-6 rotate-90"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
          <span className="sr-only">Send message</span>
        </button>
      </div>
    </form>
  );
};

export default CreatePost;
