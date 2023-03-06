import React from 'react'
import { useNavigate } from 'react-router-dom';

const UserCard = ({userName,id,email,profileImage,posts}) => {

  const {userName:localUserName} = JSON.parse(localStorage.getItem('userData') )
  const navigate = useNavigate();
  const displayUser = () => {
    navigate(`/${id}`)
  };

  return (
    <li className="py-3 sm:py-4">
    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img onClick={displayUser} className="w-10 h-10 rounded-full cursor-pointer" src={profileImage} alt={userName} />
      </div>
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-medium  truncate text-white  ${localUserName === userName && '!text-blue-500'}`}>
          {userName}
        </p>
        <p className={`text-sm truncate text-gray-400  ${localUserName === userName && '!text-blue-500'}`}>
          {email}
        </p>
      </div>
      <div className={`inline-flex items-center text-base font-semibold text-white  ${localUserName === userName && '!text-blue-500'}`}>
        {posts.length}
      </div>
    </div>
  </li>
  )
}

export default UserCard