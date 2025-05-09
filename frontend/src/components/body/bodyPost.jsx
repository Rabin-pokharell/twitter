import "./bodyPost.css";
// import Repost from "../../iconComponent/repost";
import { Repeat2, MessageCircle, Heart } from "lucide-react";
import { Fragment } from "react";

export default function BodyPost({ data }) {
  return (
    <>
      {data.map((data, index) => (
        <Fragment key={index}>
          <div className="wrapper">
            <div className="body-div">
              <div className="user_post">
                <div className="user-div">
                  <div className="body-img">{data.img}</div>
                  <h3 className="body-name">{data.name}</h3>
                  <span className="body-username"> {data.username}</span>
                  <span className="body-time">. {data.time}</span>
                </div>
                <div className="body-message">{data.postmessage}</div>
              </div>
            </div>
            <div className="lucide-icon">
              <div className="messageCircle-div">
                <MessageCircle
                  height={20}
                  width={20}
                  className="messageCircle"
                />{" "}
                <p className="messageCircle-count">5k</p>
              </div>
              <div className="repete-div">
                <Repeat2 className="repete" height={20} width={20} />{" "}
                <p className="repete-count">1k</p>
              </div>
              <div className="heart-div">
                <Heart height={20} width={20} className="heart" />{" "}
                <p className="heart-count">2k</p>
              </div>
            </div>
          </div>
        </Fragment>
      ))}
    </>
  );
}
