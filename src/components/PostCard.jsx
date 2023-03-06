import React from "react";

const PostCard = ({ user, image, post }) => {

  return (
      <div className="w-full bg-slate-700 px-5 pt-9 pb-3 rounded-lg text-white relative">
        <img
          src={image}
          className="w-16 h-16 rounded-full absolute -top-2.5 left-5"
          alt={user}
        />
        <span className="absolute top-2 right-3 bg-slate-900 px-3 rounded-xl font-light">
          {user}
        </span>
        <div className="indent-20">{post.text}</div>
      </div>
  );
};

export default PostCard;
