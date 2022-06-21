import { useRef, useEffect, useState } from "react";
import socketIO from "socket.io-client";

const App = () => {
  const [users, setUsers] = useState([]); // [{ mouseX, mouseY, username }, { mouseX, mouseY, username }]
  const socketRef = useRef(null);

  useEffect(() => {
    const socketURL =
      window.location.hostname === "localhost"
        ? `http://localhost:${import.meta.env.VITE_PORT}/`
        : null;

    socketRef.current = socketIO(socketURL);

    socketRef.current.on("onMouseMove", (users) => {
      console.log(socketRef.current.id);
      // console.log(username, mouseX, mouseY);

      setUsers(users);
    });

    window.addEventListener("mousemove", (evt) => {
      // console.log("window onmousemove");
      socketRef.current.emit("onMouseMove", {
        mouseX: evt.clientX,
        mouseY: evt.clientY,
      });
    });
  }, []);

  // console.log("users", users.length);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Google docs collaboratif</h1>
      {users.map((user) => {
        return (
          <div
            style={{
              position: "absolute",
              left: user.mouseX,
              top: user.mouseY,
            }}
          >
            <div className="badge badge-info gap-2">{user.username}</div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
