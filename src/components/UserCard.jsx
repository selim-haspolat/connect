import React from 'react'

const UserCard = ({userName,email,profileImage,posts}) => {
  return (
    <li className="py-3 sm:py-4">
    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img className="w-10 h-10 rounded-full" src={profileImage} alt={userName} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium  truncate text-white">
          {userName}
        </p>
        <p className="text-sm truncate text-gray-400">
          {email}
        </p>
      </div>
      <div className="inline-flex items-center text-base font-semibold text-white">
        {posts.length}
      </div>
    </div>
  </li>
  )
}

export default UserCard