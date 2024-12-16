# README Files for Base App and Micro Apps

### Base Application

#### Introduction
The Base Application serves as the main host for the micro frontends. It provides a shared layout, authentication system, and dynamically integrates micro apps for seamless navigation and functionality.

#### Installation and Setup

1. **Install Dependencies:**
   ```bash
   cd base-app
   npm install
   ```

2. **Configure Environment Variables:**
   Create a `.env` file (`.env.local` for local development) in the root directory and configure the following:
   ```env
   REMOTE_MICROFRONTEND1_URL=http://localhost:3001/remoteEntry.js
   REMOTE_MICROFRONTEND2_URL=http://localhost:3002/remoteEntry.js
   ```

3. **Run the Application:**
   ```bash
   npm run dev
   ```

#### Key Features
- Dynamically integrates micro frontends.
- Provides authentication and shared UI components.
- Supports modular development using module federation.