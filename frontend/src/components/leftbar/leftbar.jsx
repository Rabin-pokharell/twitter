import "./leftbar.css";
import Images from "../image/image";
import { useState, useEffect } from "react";

export default function Leftbar() {
  const data = [
    {
      img: <Images path="/general/noAvatar.png" h={40} w={40} />,
      userName: "@RabinPokharel",
      name: "Rabin Pokharel",
    },
  ];

  function useResizeButton() {
    const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
    });

    useEffect(() => {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
        });
      };

      window.addEventListener("resize", handleResize);

      handleResize();
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    return windowSize;
  }

  const { width } = useResizeButton();
  const laptopScreen = width < 1116;
  return (
    <div className="leftbar">
      <div>
        <div className="logo">
          <Images path="/general/X_logo.jpg" h={40} w={40} color="white" />
        </div>

        <div className="icons">
          <div>
            <Images path="/general/home-white.svg" h={25} w={25} />
            <p className="same">Home</p>
          </div>
          <div>
            <Images path="/general/search-white.svg" h={25} w={25} />
            <p className="same">Explore</p>
          </div>
          <div>
            <Images path="/general/notii-white.svg" h={25} w={25} />
            <p className="same">Notification</p>
          </div>
          <div>
            <Images path="/general/messages-white.svg" h={25} w={25} />
            <p className="same">messages</p>
          </div>
          <div>
            <Images path="/general/community-white.svg" h={25} w={25} />
            <p className="same">communities</p>
          </div>
          <div>
            <Images path="/general/user-white.svg" h={25} w={25} />
            <p className="same">Profile</p>
          </div>
          <div>
            <Images path="/general/settings.svg" h={25} w={25} />
            <p className="same">Setting</p>
          </div>
        </div>
        <div className="btn-div">
          <button className="post-btn">
            {" "}
            {laptopScreen ? (
              <Images path="/general/quill.svg" h={25} w={25} />
            ) : (
              "post"
            )}
          </button>
        </div>
      </div>
      <div className="profileDiv">
        {data.map((d) => (
          <>
            <div className="imgDiv">{d.img}</div>

            <div className="nameDiv">
              <p className="color same">{d.name}</p>
              <p className="offColor same">{d.userName}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
