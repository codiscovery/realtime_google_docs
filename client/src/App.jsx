import { useRef, useEffect, useState } from "react";
import socketIO from "socket.io-client";
import Navigation from "./Navigation";
import Page from "./Page";

const App = () => {
  const [users, setUsers] = useState([]); // [{ mouseX, mouseY, username }, { mouseX, mouseY, username }]
  const [text, setText] = useState("");
  const socketRef = useRef(null);

  useEffect(() => {
    const socketURL =
      window.location.hostname === "localhost"
        ? `http://localhost:${import.meta.env.VITE_PORT}/`
        : null;

    socketRef.current = socketIO(socketURL);

    socketRef.current.on("onMouseMove", (users) => {
      // console.log("socketRef.current.id", socketRef.current.id);
      // console.log("users", users);
      // console.log(username, mouseX, mouseY);

      const usersWithoutMe = users.filter(
        (user) => user.socketId !== socketRef.current.id
      );

      setUsers(usersWithoutMe);
    });

    socketRef.current.on("onChangeText", ({ text }) => {
      console.log(">> socket onChangeText");
      setText(text);
    });

    window.addEventListener("mousemove", (evt) => {
      // console.log("window onmousemove");
      socketRef.current.emit("onMouseMove", {
        mouseX: evt.clientX,
        mouseY: evt.clientY,
      });
    });
  }, []);

  const onChange = (content) => {
    setText(content);
    socketRef.current.emit("onChangeText", { text: content });
  };

  // console.log("users", users.length);

  return (
    <div className="flex flex-col h-screen bg-base-200">
      <Navigation />
      <main className="h-full grow flex justify-center items-center">
        <div className="h-full py-10 px-3 w-full md:w-3/4 xl:w-1/2">
          <Page text={text} onChange={onChange} />
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
