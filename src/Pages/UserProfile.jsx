import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserProfile = ({ ApiKey }) => {
  const [userCardData, setUserCardData] = useState({});
  const { id } = useParams();

  const findUser = async () => {
    const { data } = await axios(
      `https://63f2206c4f17278c9a20b961.mockapi.io/${ApiKey}/${id}`
    );
    setUserCardData({
      userName: data.userName,
      email: data.email,
      profileImage: data.profileImage,
      posts: data.posts,
      about: data.about,
    });
  };

  useEffect(() => {
    findUser();
  }, []);

  return (
    <div className="h-[81vh] flex justify-center items-center">
      <div className="relative w-96 group break-words border shadow-2xl bg-slate-800 border-gray-700 rounded-xl">
        <div className="pb-6">
          <div className="flex flex-wrap justify-center">
            <div className="flex justify-center w-full">
              <img
                src={userCardData.profileImage}
                className="w-36 h-36 border-slate-800 rounded-full border-8 absolute -top-20 "
              />
            </div>
          </div>
          <div className=" mt-16 text-center">
            <h3 className="mb-1 text-3xl font-bold leading-normal text-gray-700 dark:text-gray-300">
              {userCardData.userName}
            </h3>
            <h4 className="font-light text-white">{userCardData.email}</h4>
          </div>
          <div className="pt-6 mx-6 mt-4 text-center border-t border-gray-200 dark:border-gray-700/50">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-6">
                <p className="mb-4 font-light leading-relaxed text-gray-600 dark:text-gray-400">
                  {userCardData.about}
                </p>
              </div>
            </div>
          </div>
          <div className="relative h-6 overflow-hidden translate-y-6 rounded-b-xl">
            <div className="absolute flex -space-x-12 rounded-b-2xl">
              <div className="w-36 h-8 transition-colors duration-200 delay-75 transform skew-x-[35deg] bg-blue-400/90 group-hover:bg-blue-600/90 z-10" />
              <div className="w-28 h-8 transition-colors duration-200 delay-100 transform skew-x-[35deg] bg-blue-300/90 group-hover:bg-blue-500/90 z-20" />
              <div className="w-28 h-8 transition-colors duration-200 delay-150 transform skew-x-[35deg] bg-blue-200/90 group-hover:bg-blue-400/90 z-30" />
              <div className="w-28 h-8 transition-colors duration-200 delay-200 transform skew-x-[35deg] bg-blue-100/90 group-hover:bg-blue-300/90 z-40" />
              <div className="w-28 h-8 transition-colors duration-200 delay-300 transform skew-x-[35deg] bg-blue-50/90 group-hover:bg-blue-200/90 z-50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
