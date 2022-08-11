# Realtime text editor

![Problème temporaire, veuillez recharger la page pour voir l'image](https://codiscovery-readme-header.herokuapp.com/api/actions/generate-image?title=Realtime%20google%20docs&titleColor=%239be15d,%2300e3ae&iconName=file-signature&technologies=React,Tailwind,socket.io&subtitleLine1=Text%20editor%20that%20can%20be%20edited%20by%20multiple%20people%20at%20once&subtitleLine2=Created%20during%20YouTube%20live%20%286x2%20hours%29)

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

- [x] Create README image
- [x] Fix selection with multiple children
  - [CANCELED] Create a function that defines baseNode which will be relative of the selected node (i.e: div2 inside div1, div1 inside contentRef, then baseNode will be div1)
  - [x] Use the relative parent of the selection
- [x] When clicking on bold, it should be sent to the server and shared across all users
- [x] Toggle styles for bold, italic, underline (can be removed after being added)
- [x] Split textStyle reducer to
  - 1. textStyle
  - 3. textAlign

## TODO

### Backend

- [x] Set up Fastify (Express like) server
  - [x] Run Fastify server
  - [x] .env for server
  - [x] with Socket.io
- [x] Socket handlers
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
- [x] Mouse detection

  - [x] Detect mouse mouvement
  - [x] Send mouse mouvement (mouse position all the time) to server
  - [x] Display mouse cursor (of someone)
  - [x] Fix : prevent display my badge
  - [x] Disconnect/Off socket to avoid memory leaks

- [ ] Design
  - [x] Install Tailwind
  - [x] Install DaisyUI
  - [x] Create pretty CSS structure
  - [x] Add color picker
  - [x] Finalize design
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
    - [x] Manage align left
    - [x] Manage align center
    - [x] Manage align right
    - [x] Manage color selection

## Fix for Replay

- [ ] Prevent passing ref to RTK payload : https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data
- [ ] Compound style (use bold, then underline) on the same selection (and node)

## Bonus

- [ ] Import images
- [ ] Font change and size
