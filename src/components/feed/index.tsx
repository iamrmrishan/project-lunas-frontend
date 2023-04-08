import React from "react";
import Post from "../post";
import data from 'posts.json';

type Props = {
  topic?: string;
};
function Feed({ topic }: Props) {
 

 
  const posts: Post[] =  data?.posts;
  // console.log("Posts:", posts);

  return (
    <div className="mt-5 space-y-4 max-w-5xl mx-auto flex-1">
      {posts?.map((post) => (
        <Post key={1} topic={"dsds"} posts={[post]} />
      ))}
    </div>
  );
}

export default Feed;