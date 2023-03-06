import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../components/UserCard";
import LoadUserCard from "../components/LoadUserCard";

const Users = ({ ApiKey }) => {
  const [users, setUsers] = useState([]);
  const [load, setLoad] = useState(true)
  let arr = [1,2,3,4,5,6,7,8,9,10]

  const getUsers = async () => {
    const { data } = await axios(
      "https://63f2206c4f17278c9a20b961.mockapi.io/" + ApiKey
    );
    setUsers(data)
    setLoad(false)
  };

  useEffect(() => {getUsers()}, []);

  return (
    <div className="container mx-auto my-10 px-4 border rounded-lg shadow sm:px-8 bg-gray-800 border-gray-700">
        <div className="flex items-center justify-between mb-2 mt-4">
          <h5 className="text-xl font-bold leading-none text-white">Users</h5>
          <p className="font-medium text-blue-500">
            Posts
          </p>
        </div>
        <div className="flow-root">
          <ul role="list" className="divide-y divide-gray-700">
            {
                load ? arr.map(a => <LoadUserCard key={a}/>) : users.map(u => <UserCard key={u.id} {...u}/>)   
            }
          </ul>
        </div>
      </div>
  )
};

export default Users;
