import Leftbar from "./components/leftbar/leftbar";
import Rightbar from "./components/rightbar/rightbar";
import Body from "./components/body/body";
import "./app.css";
import { useEffect, useRef } from "react";

function App() {
  const bodyRef = useRef(null);
  const rightRef = useRef(null);
  const isSyncing = useRef(false);

  useEffect(() => {
    const bodyScroll = bodyRef.current;
    const rightScroll = rightRef.current;

    if (!bodyScroll || !rightScroll) {
      return;
    }

    const handleBodyScroll = () => {
      if (isSyncing.current) return;

      isSyncing.current = true;

      const bodyScrollableHeight =
        bodyScroll.scrollHeight - bodyScroll.clientHeight;
      const rightbarScrollableHeight =
        rightScroll.scrollHeight - rightScroll.clientHeight;

      if (bodyScrollableHeight <= 0 || rightbarScrollableHeight <= 0) {
        isSyncing.current = false;
        return;
      }

      const bodyScrollPercent = bodyScroll.scrollTop / bodyScrollableHeight;

      if (bodyScrollPercent < 1) {
        rightScroll.scrollTop = bodyScroll.scrollTop;
      }

      requestAnimationFrame(() => {
        isSyncing.current = false;
      });
    };

    bodyScroll.addEventListener("scroll", handleBodyScroll);
    return () => bodyScroll.removeEventListener("scroll", handleBodyScroll);
  }, []);

  return (
    <div className="container">
      <Leftbar />

      <div className="scroll">
        <Body ref={bodyRef} />

        <Rightbar ref={rightRef} />
      </div>
    </div>
  );
}

export default App;
