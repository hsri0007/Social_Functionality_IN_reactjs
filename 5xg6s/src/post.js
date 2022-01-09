import { useState } from "react";

const PostComp = ({ posts }) => {
  const [data, setdata] = useState(posts);
  const [comments, setComments] = useState(posts.comments);
  const [text, setText] = useState("");
  const [likes, setLikes] = useState(posts.likes);
  const logged = {
    id: 2,
    name: "hari"
  };
  const liked = likes.filter(({ user }) => user === logged.id);
  console.log(liked, "likes");

  const addLike = () => {
    console.log("add like");
    setLikes([...likes, { id: 2, user: 2 }]);
  };

  const removeLike = () => {
    const Rliked = likes.filter(({ user }) => user !== logged.id);
    setLikes(Rliked);
  };

  const handleComment = () => {
    setComments([...comments, { id: 2, text, user: 2 }]);
    setText("");
  };

  return (
    <div className="App">
      <h1>{data?.text}</h1>
      <p>{likes.length} likes</p>
      <div>
        {liked.length > 0 ? (
          <button onClick={() => removeLike()}>Liked</button>
        ) : (
          <button onClick={() => addLike()}>Like</button>
        )}
      </div>
      <div>
        {comments.map(({ text }, i) => (
          <div key={i}>
            <p>{text}</p>
          </div>
        ))}
      </div>
      <div>
        <input
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleComment}>comment</button>
      </div>
    </div>
  );
};

export default PostComp;
