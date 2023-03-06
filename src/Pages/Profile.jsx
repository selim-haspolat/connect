import React, { useState } from "react";

const Profile = () => {
    const [file, setFile] = useState('');
  
    const handleFileChange = (e) => {
      const selectedFile = e.target.files[0];
      const reader = new FileReader();
  
      reader.onload = (event) => {
        setFile(event.target.result);
      };
  
      reader.readAsDataURL(selectedFile);
    };
  
    return (
      <div>
        <input type="file" onChange={handleFileChange} placeholder='foto'/>
        <img src={file} className="w-44 h-44 rounded-full object-cover object-center border" alt="" />
      </div>
    );
  };

  
  
export default Profile;
