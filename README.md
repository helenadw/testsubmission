# Full-stack Coding Test Submission

## Project Overview

This is a full-stack web application built with NestJS (backend) and React/TypeScript/Vite (frontend).

## Tech Stack

- **Backend**: NestJS
- **Frontend**: React with TypeScript, Vite
- **Styling**: CSS Modules

## Project Structure

The project is organized into one repo, with two main directories:

- [backend/](backend/): NestJS application
- [frontend/](frontend/): React application (Vite)

## Getting Started

### Prerequisites

- Node.js 18.18.0
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies for backend and frontend:

```
cd backend
yarn install
```

```
cd frontend
yarn install
```

### Usage

#### Backend

```
cd backend
yarn start      # For production mode
# OR
yarn start:dev  # For development mode with auto-reload
```

The backend will be available at `http://localhost:3000`.

#### Frontend

```
cd frontend
yarn dev        # Starts the Vite dev server
```

The frontend will be available at `http://localhost:5173` (Vite's default port).

## Future Improvements

There are further improvements that could be made to the implementation, given more time. I have left comments in the code to expand further, and will recap here:

- shared project.json file with set up to run the frontend and backend from one command
- fix backend functionality
  - the endpoint can be called with a curl request to receive the expected data, but currently will 404 if called from the browser

```
curl http://localhost:3000/comms/your-next-delivery/ff535484-6880-4653-b06e-89983ecf4ed5
```

- improve styling
  - improve 'free gift tag' to align with design
  - improve mobile view avatar to align with design
  - remove any unused styles
- add tests

---
