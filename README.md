# Realtime text editor

## Semaine 1

- [ ] Record "One thing I've learned today"
  - [ ] Maybe Express vs Fastify setup

## TODO

### Backend

- [ ] Set up Fastify (Express like) server
  - [x] Run Fastify server
  - [x] .env for server
  - [x] with Socket.io
- [ ] Socket handlers
  - [x] Dispatch mouseX, mouseY and username(=socket.id)
  - [ ] Fix: on refresh, disconnect previous user
  - [ ] Dispatch textarea data

### Frontend

- [ ] Set up
  - [x] Set up Vite + React
  - [x] Basic connection to server
  - [x] Fix CORS issue (in fastifySocketIO, add `cors:{ origin: '*' }`)
  - [x] .env for frontend
- [ ] Mouse detection
  - [x] Detect mouse mouvement
  - [x] Send mouse mouvement (mouse position all the time) to server
  - [ ] Display mouse cursor (of someone)
  - [ ] Disconnect/Off socket to avoid memory leaks
- [ ] Design
  - [x] Install Tailwind
  - [x] Install DaisyUI
  - [ ] Create pretty CSS structure
  - [ ] Finalize design
- [ ] Text editor
  - [ ] Add invisible textarea
  - [ ] Manage keyboard events
  - [ ] Manage selection
  - [ ] Send state to server
