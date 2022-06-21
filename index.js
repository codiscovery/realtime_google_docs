import dotenv from "dotenv";
import Fastify from "fastify";
import fastifySocketIO from "fastify-socket.io";

dotenv.config();

const fastify = Fastify({
  logger: true,
});

fastify.register(fastifySocketIO, {
  cors: {
    origin: "*",
  },
});

let users = [];

fastify.get("/", async (request, response) => {
  return { name: "GDocs collaboratif" };
});

fastify.ready((err) => {
  if (err) {
    fastify.log.error(err);
    throw err;
  }

  fastify.io.on("connection", (socket) => {
    fastify.log.info(`a user connected ${socket.id}`);

    // Listen to a user moving its mouse
    socket.on("onMouseMove", ({ mouseX, mouseY }) => {
      // update mouse position
      users = users.filter((user) => user.username !== socket.id);
      users.push({ username: socket.id, mouseX, mouseY });
      // send newPosition to all users except sender
      socket.broadcast.emit("onMouseMove", users);
    });
  });
});

const start = async () => {
  try {
    await fastify.listen(parseInt(process.env.PORT));
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
