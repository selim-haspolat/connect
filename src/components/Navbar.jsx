import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({}) => {
  const [userImage, setUserImage] = useState("");

  useEffect(() => {
    const { profileImage } = JSON.parse(localStorage.getItem("userData"));
    setUserImage(profileImage);
  }, [localStorage]);

  return (
    <div className="bg-transparent backdrop-brightness-125 backdrop-lg shadow-md  p-5">
      <div className="container mx-auto flex justify-between items-center drop-shadow-xl tracking-wider">
        <div className="text-3xl font-light uppercase text-white tracking-widest">connect</div>
        <ul className="flex items-center gap-10 text-white">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/profile">
              <img
                className="object-cover object-center rounded-full w-10 h-10"
                src={userImage}
                alt=""
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
