import "./body.css";
import Images from "../image/image";
import { useState, useRef, useEffect } from "react";
import React from "react";
import BodyPost from "./bodyPost.jsx";
import { forwardRef } from "react";

const Body = forwardRef((props, ref) => {
  const [words, setWords] = useState("");
  const [altTab, setAltTab] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const wordsRef = useRef(null);
  const selectionRef = useRef(null);

  const Picker = React.lazy(() => import("emoji-picker-react"));

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
      postmessage:
        "hello guys what's up. fkdjflka jdflk jalkkdjflkkaj lkfkjsdlkjfkla jdflkdjfk ajdlkfjkla di",
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
      postmessage:
        "hello guys what's up. fadf dfk lkdjfk ajdflkj akdfj  lkakjdflkkad jflkkdadkf jakldjfk adjflk lkjdf",
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
      postmessage:
        "hello guys what's up. fjadkf dajflk ajdflkkjalkdfjjlkl jdfkjdlkklfj adjfljdfj jlkdfjlk kdjflkdjf jdflklj lkdfj",
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
      postmessage:
        "hello guys what's up.this is where i would like to say thai i have done it and i want to continue doing it ohhhhhhhh i was meant to love you jakdfjlkakjdflkjdfljadlkfjlkasdjfjlkasjsdflkjadlkfjlkasdjflksjdflkjsasdflkjjj f adkf jkdjffffffffffffffffffffffffffffffffffffffrf  ahdfajsdhfjahdfkajdshfueihauiehfiefoijadfdfhdfjkhadfhakdsjsjfhkjnccccccccccccccccccccccccccccccccccccccccccccccccccccccccf fajdfhhffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdjjjjjjjjjjjj",
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
      postmessage:
        "hello guys what's up fdadjfka jdfkjdkfj alkdkjflka sdsjdflka jdlkf jdfdjl;ka djdflkasda jlkf jsadlkkfj lakadkjfla sdd.",
      time: "6h",
    },
    {
      img: <Images path="/general/noAvatar.png" w={40} h={40} />,
      name: "rabin",
      username: "@whatever",
      postmessage:
        "hello guys what's up. 123 3232333 uuuuuuu f44444444 Dissanayakes presidency marks a shift in Sri Lankas politics, breaking from decades of right-wing rule. But his biggest challenge? Navigating the tightrope between India and China while safeguarding Sri Lankas sovereignty. Can he strike the perfect balance Dissanayake’s presidency marks a shift in Sri Lanka’s politics, breaking from decades of right-wing rule. But his biggest challenge? Navigating the tightrope between India and China while safeguarding Sri Lanka’s sovereignty. Can he strike the perfect balance? Dissanayake’s presidency marks a shift in Sri Lanka’s politics, breaking from decades of right-wing rule. But his biggest challenge? Navigating the tightrope between India and China while safeguarding Sri Lanka’s sovereignty. Can he strike the perfect balance? Dissanayake’s presidency marks a shift in Sri Lanka’s politics, breaking from decades of right-wing rule. But his biggest challenge? Navigating the tightrope between India and China while safeguarding Sri Lanka’s sovereignty. Can he strike the perfect balance?Dissanayake’s presidency marks a shift in Sri Lanka’s politics, breaking from decades of right-wing rule. But his biggest challenge? Navigating the tightrope between India and China while safeguarding Sri Lanka’s sovereignty. Can he strike the perfect balance?Dissanayake’s presidency marks a shift in Sri Lanka’s politics, breaking from decades of right-wing rule. But his biggest challenge? Navigating the tightrope between India and China while safeguarding Sri Lanka’s sovereignty. Can he strike the perfect balance?Dissanayake’s presidency marks a shift in Sri Lanka’s politics, breaking from decades of right-wing rule. But his biggest challenge? Navigating the tightrope between India and China while safeguarding Sri Lanka’s sovereignty. Can he strike the perfect balance?Dissanayake’s presidency marks a shift in Sri Lanka’s politics, breaking from decades of right-wing rule. But his biggest challenge? Navigating the tightrope between India and China while safeguarding Sri Lanka’s sovereignty. Can he strike the perfect balance?Dissanayake’s presidency marks a shift in Sri Lanka’s politics, breaking from decades of right-wing rule. But his biggest challenge? Navigating the tightrope between India and China while safeguarding Sri Lanka’s sovereignty. Can he strike the perfect balance?                                                                                                                        Dissanayake’s presidency marks a shift in Sri Lanka’s politics, breaking from decades of right-wing rule. But his biggest challenge? Navigating the tightrope between India and China while safeguarding Sri Lanka’s sovereignty. Can he strike the perfect balance?",
      time: "6h",
    },
  ];

  useEffect(() => {
    if (!wordsRef) return;

    if (!altTab && !words.trim()) {
      wordsRef.current.classList.add("placeholder");
      wordsRef.current.textContent = "";
    } else {
      wordsRef.current.classList.remove("placeholder");
    }
  }, [words, altTab]);

  function handleFocus() {
    setAltTab(true);
  }

  function handleBlur() {
    setAltTab(false);
  }

  useEffect(() => {
    const handleAltTabBug = () => {
      if (document.hidden) {
        setAltTab(false);
      }
      if (!altTab && !words.trim()) {
        wordsRef.current.classList.add("placeholder");
      }
    };

    document.addEventListener("visibilitychange", handleAltTabBug);

    return () => {
      document.removeEventListener("visibilitychange", handleAltTabBug);
    };
  }, []);

  function handleEmojiClick(e) {
    const selection = window.getSelection();

    if (selection.rangeCount > 0) {
      selectionRef.current = selection.getRangeAt(0);
    }

    setShowEmojiPicker(!showEmojiPicker);
    e.stopPropagation();
  }

  function handleEmojiSelect(emojiObject, event) {
    const selection = window.getSelection();

    if (selectionRef.current) {
      selection.removeAllRanges();
      selection.addRange(selectionRef.current);
    }

    if (selectionRef === 0) return;

    const range = selection.getRangeAt(0);

    const textNode = document.createTextNode(emojiObject.emoji);
    range.insertNode(textNode);

    range.setStartAfter(textNode);
    range.setEndAfter(textNode);

    selection.removeAllRanges();
    selection.addRange(range);

    setWords((prev) => prev + emojiObject.emoji);
    setShowEmojiPicker(false);
    wordsRef.current.focus();
  }

  return (
    <div className="body" ref={ref}>
      <div className="userProfilePost">
        <div className="writeDiv">
          <div>{data.img}</div>

          <span
            contentEditable="true"
            onInput={(e) => setWords(e.currentTarget.innerText)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={`edit ${words.trim() === "" ? "placeholder" : ""}`}
            suppressContentEditableWarning={true}
            ref={wordsRef}
          ></span>
        </div>
        <div className="postBtn">
          <div className="iconBar">
            <Images
              path="/general/image-blue.svg"
              h={20}
              w={20}
              className="glow"
            />
            <div className="emojiWrapper">
              <Images
                path="/general/emoji-blue.svg"
                h={20}
                w={20}
                className="glow emojiG"
                onclick={handleEmojiClick}
              />
              {showEmojiPicker && (
                <React.Suspense fallback={null}>
                  <div className="emojiPicker">
                    <Picker
                      onEmojiClick={handleEmojiSelect}
                      pickerStyle={{ width: "300px", height: "300px" }}
                      lazyLoadEmojis={true}
                      previewConfig={{ showPreview: false }}
                    />
                  </div>
                </React.Suspense>
              )}
            </div>
            <Images path="/general/gif.png" h={20} w={20} className="glow" />
          </div>
          <button className={words.trim() === "" ? "grey" : "white"}>
            post
          </button>
        </div>
      </div>
      <div className="userPost">
        <BodyPost data={data} />
      </div>
    </div>
  );
});

export default Body;
