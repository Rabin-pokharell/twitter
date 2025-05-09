import "./rightbar.css";
import Images from "../image/image.jsx";
import { forwardRef } from "react";

const Rightbar = forwardRef((props, ref) => {
  const data = [
    {
      img: <Images path="/general/noAvatar.png" w={40} h={40} />,
      name: "rabin",
      username: "@whatever",
      postmessage: "hello guys what's up.",
      time: "6h",
    },
    {
      img: <Images path="/general/noAvatar.png" w={40} h={40} />,
      name: "rabin",
      username: "@whatever",
      postmessage: "hello guys what's up.",
      time: "6h",
    },
    {
      img: <Images path="/general/noAvatar.png" w={40} h={40} />,
      name: "rabin",
      username: "@whatever",
      postmessage: "hello guys what's up.",
      time: "6h",
    },
    {
      img: <Images path="/general/noAvatar.png" w={40} h={40} />,
      name: "rabin",
      username: "@whatever",
      postmessage: "hello guys what's up.",
      time: "6h",
    },
    {
      img: <Images path="/general/noAvatar.png" w={40} h={40} />,
      name: "rabin",
      username: "@whatever",
      postmessage: "hello guys what's up.",
      time: "6h",
    },
    {
      img: <Images path="/general/noAvatar.png" w={40} h={40} />,
      name: "rabin",
      username: "@whatever",
      postmessage: "hello guys what's up.",
      time: "6h",
    },
    {
      img: <Images path="/general/noAvatar.png" w={40} h={40} />,
      name: "rabin",
      username: "@whatever",
      postmessage: "hello guys what's up.",
      time: "6h",
    },
  ];
  return (
    <div className="rightbar" ref={ref}>
      {" "}
      {data.map((data) => (
        <div>
          <div>{data.img}</div>

          <div className="rightbar-post">
            <div>
              <h3>{data.name}</h3> <span> {data.username}</span>
              <span>. {data.time}</span>
            </div>
            <div>{data.postmessage}</div>
          </div>
        </div>
      ))}
    </div>
  );
});

export default Rightbar;
