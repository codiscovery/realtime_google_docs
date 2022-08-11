import { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import socketIO from "socket.io-client";
import Navigation from "./Navigation";
import Page from "./Page";
import { setContent, setExternalContent } from "./state/reducers/textStyle";

const App = () => {
  const content = useSelector((state) => state.textStyle.content);
  const externalContent = useSelector(
    (state) => state.textStyle.externalContent
  );
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]); // [{ mouseX, mouseY, username }, { mouseX, mouseY, username }]
  const socketRef = useRef(null);

  useEffect(() => {
    if (socketRef.current) {
      return;
    }
    const socketURL =
      window.location.hostname === "localhost"
        ? `http://localhost:${import.meta.env.VITE_PORT}/`
        : null;

    socketRef.current = socketIO(socketURL);

    socketRef.current.on("onMouseMove", (users) => {
      const usersWithoutMe = users.filter(
        (user) => user.socketId !== socketRef.current.id
      );

      setUsers(usersWithoutMe);
    });

    socketRef.current.on("onChangeText", ({ text }) => {
      // console.log(">> socket onChangeText text.length", text.length);
      // console.log(">> socket onChangeTezefxt socket.id", socketRef.current.id);

      if (text.length === 0) {
        return;
      }
      dispatch(setContent(text));
    });

    window.addEventListener("mousemove", (evt) => {
      socketRef.current.emit("onMouseMove", {
        mouseX: evt.clientX,
        mouseY: evt.clientY,
      });
    });

    console.log(">> useEffect socket");

    return () => {
      console.log("<< socket disconnect #1");
      if (socketRef.current) {
        return;
      }
      console.log("<< socket disconnect #2");
      socketRef.current.disconnect();
      socketRef.current.removeAllListeners();
    };
  }, []);

  const sendCurrentContentToServer = () => {
    socketRef.current.emit("onChangeText", {
      text: externalContent,
      socketId: socketRef.current.id,
    });
  };

  useEffect(() => {
    if (socketRef.current?.id) {
      sendCurrentContentToServer();
    }
  }, [externalContent]);

  return (
    <div className="flex flex-col h-screen bg-base-200">
      <Navigation />
      <main className="h-full grow flex justify-center items-center">
        <div className="h-full py-10 px-3 w-full md:w-3/4 xl:w-1/2">
          <Page />
        </div>
      </main>
      {users.map((user) => {
        return (
          <div
            key={user.socketId}
            style={{
              position: "absolute",
              left: user.mouseX,
              top: user.mouseY,
            }}
          >
            <div className="badge bg-secondary gap-2">{user.username}</div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
