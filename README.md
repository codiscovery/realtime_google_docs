# Realtime text editor

## Semaine 3

- [ ] Record "One thing I've learned today"
- [ ] Create README image
- [ ] Optimize socket IO and prevent memory leaks
- [x] Look up IntersectionObserver
- [x] Start contentEditable for bold

## Semaine 4

- [ ] Record "One thing I've learned today"
- [ ] Create README image
- [x] Optimize socket IO and prevent memory leaks
- [x] remove onEditableChange?
- [x] Fix the focus when we type:
  - 1. Solution: Pass the focus index in the state manager
  - 2. Solution: Update `state.content (setContent)` only onClick(Bold|Underline|Italic) and wait onChange to update

## Semaine 5

- [ ] Record "One thing I've learned today"
- [ ] Create README image
- [x] Text alignement
- [x] Redo a whole color picker
- [x] [CANCELED] Add toggle for Color Swatches

## Semaine 6

- [ ] Record "One thing I've learned today"
- [ ] Create README image
- [x] Fix selection with multiple children
  - [CANCELED] Create a function that defines baseNode which will be relative of the selected node (i.e: div2 inside div1, div1 inside contentRef, then baseNode will be div1)
  - [x] Use the relative parent of the selection
- [x] When clicking on bold, it should be sent to the server and shared across all users
- [ ] Toggle styles for bold, italic, underline (can be removed after being added)
- [ ] Split textStyle reducer to
  - 1. textStyle
  - 3. textAlign

## TODO

### Backend

- [ ] Set up Fastify (Express like) server
  - [x] Run Fastify server
  - [x] .env for server
  - [x] with Socket.io
- [ ] Socket handlers
  - [x] Dispatch mouseX, mouseY and username(=socket.id)
  - [x] Fix: on refresh, disconnect previous user
  - [x] Dispatch textarea data
  - [x] Detach handler from listener

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
  - [x] Disconnect/Off socket to avoid memory leaks

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
    - [x] Add invisible textarea
    - [x] Manage keyboard events
    - [x] Manage selection
    - [x] Manage bold
    - [x] Manage italic
    - [x] Manage underline
    - [ ] Manage align left
    - [ ] Manage align center
    - [ ] Manage align right
    - [ ] Manage color selection

## Fix for Replay

- [ ] Prevent passing ref to RTK payload : https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data
- [ ] Compound style (use bold, then underline) on the same selection (and node)

## Bonus

- [ ] Import images
- [ ] Font change and size
