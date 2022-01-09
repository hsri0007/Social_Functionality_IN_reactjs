import "./styles.css";
import PostComp from "./post";

export default function App() {
  const users = [
    {
      id: 1,
      name: "hari"
    },
    {
      id: 2,
      name: "haris"
    },
    {
      id: 3,
      name: "hariss"
    }
  ];
  const posts = [
    {
      id: 1,
      user: 1,
      text: "sdsd",
      comments: [{ id: 2, text: "hello", user: 2 }],
      likes: [{ id: 2, user: 2 }]
    },
    {
      id: 2,
      user: 2,
      text: "sdsd2",
      comments: [{ id: 1, text: "hello", user: 3 }],
      likes: [{ id: 2, user: 3 }]
    },
    {
      id: 3,
      user: 3,
      text: "sdsd3",
      comments: [{ id: 1, text: "hello", user: 1 }],
      likes: [{ id: 2, user: 1 }]
    }
  ];

  const logged = {
    id: 1,
    name: "hari"
  };
  return (
    <div className="App">
      {posts.map((post) => (
        <PostComp key={post.id} posts={post} />
      ))}
      sd
    </div>
  );
}
