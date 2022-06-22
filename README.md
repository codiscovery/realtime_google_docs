# Realtime text editor

## Semaine 3

- [ ] Record "One thing I've learned today"
- [ ] Optimize socket IO and prevent memory leaks
- [ ] Look up IntersectionObserver
- [ ] Start contentEditable for bold

## TODO

### Backend

- [ ] Set up Fastify (Express like) server
  - [x] Run Fastify server
  - [x] .env for server
  - [x] with Socket.io
- [ ] Socket handlers
  - [x] Dispatch mouseX, mouseY and username(=socket.id)
  - [x] Fix: on refresh, disconnect previous user
  - [ ] Dispatch textarea data
  - [ ] Detach handler from listener

### Frontend

- [ ] Set up
  - [x] Set up Vite + React
  - [x] Basic connection to server
  - [x] Fix CORS issue (in fastifySocketIO, add `cors:{ origin: '*' }`)
  - [x] .env for frontend
- [ ] Mouse detection

  - [x] Detect mouse mouvement
  - [x] Send mouse mouvement (mouse position all the time) to server
  - [x] Display mouse cursor (of someone)
  - [x] Fix : prevent display my badge
  - [ ] Disconnect/Off socket to avoid memory leaks

- [ ] Design
  - [x] Install Tailwind
  - [x] Install DaisyUI
  - [x] Create pretty CSS structure
  - [ ] Add color picker
  - [ ] Finalize design
- [ ] Text editor
  - [x] Send state to server
  - [x] Textarea
    - [x] Add invisible textarea
    - [x] Manage keyboard
  - [ ] Content editable
    - [ ] Add invisible textarea
    - [ ] Manage keyboard events
    - [ ] Manage selection
    - [ ] Manage bold
    - [ ] Manage italic
    - [ ] Manage underline
    - [ ] Manage align left
    - [ ] Manage align center
    - [ ] Manage align right
    - [ ] Manage color selection

## Bonus

- [ ] Import images
- [ ] Font change and size
