import React from "react";

const PostCard = ({ postCreator, postCreatorImage,text  }) => {

  return (
      <div className="w-full bg-slate-700 px-5 pt-9 pb-3 rounded-lg text-white relative break-words">
        <img
          src={postCreatorImage}
          className="w-16 h-16 rounded-full absolute -top-2.5 left-5"
          alt={postCreator}
        />
        <span className="absolute top-2 right-3 bg-slate-900 px-3  rounded-xl font-light">
          {postCreator}
        </span>
        <div className="indent-20">{text}</div>
      </div>
  );
};

export default PostCard;
