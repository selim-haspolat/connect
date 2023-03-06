import axios from "axios";
import { useEffect, useState } from "react";
import CreatePost from "../components/CreatePost";
import LoadPostCard from "../components/LoadPostCard";
import PostCard from "../components/PostCard";

const Main = ({ ApiKey }) => {
  const [userPostData, setUserPostData] = useState([]);
  const [displayPosts, setDisplayPosts] = useState(true);
  const [loadPosts, setLoadPosts] = useState(true);
  const getPost = async () => {
    const { data } = await axios(
      `https://63f2206c4f17278c9a20b961.mockapi.io/${ApiKey}`
    );
    setUserPostData(data);
    setLoadPosts(false);
  };

  let tenArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  useEffect(() => {
    getPost();
  }, [displayPosts]);

  return (
    <div className="">
      <CreatePost
        ApiKey={ApiKey}
        displayPosts={displayPosts}
        setDisplayPosts={setDisplayPosts}
      />
      <div className="container flex flex-col gap-5 mx-auto p-5">
        {loadPosts
          ? tenArr.map((a) => <LoadPostCard key={a} />)
          : userPostData.map((user) =>
              user.posts.map((p) => (
                <PostCard
                  key={p.postId}
                  user={user.userName}
                  image={user.profileImage}
                  post={p}
                />
              ))
            )}
      </div>
    </div>
  );
};

export default Main;
