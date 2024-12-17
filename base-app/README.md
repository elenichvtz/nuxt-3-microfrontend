## Base Application

### Introduction
The Base Application serves as the main host for the micro frontends. It provides a shared layout, authentication system, and dynamically integrates micro apps for seamless navigation and functionality.

### Installation and Setup

1. **Install Dependencies:**
   ```bash
   cd base-app
   npm install
   ```

2. **Configure Environment Variables:**
   Create a `.env` file in the root directory and configure the following:
   ```env
   REMOTE_MICROFRONTEND1_URL=http://localhost:3001/remoteEntry.js
   REMOTE_MICROFRONTEND2_URL=http://localhost:3002/remoteEntry.js
   ```

3. **Run the Application:**
   ```bash
   npm run dev
   ```

### Key Features
- Dynamically integrates micro frontends.
- Provides authentication and shared UI components.
- Supports modular development using module federation.

### Adding a new micro app
- Update `nuxt.config.js` to import remote microfrontend app.
- In `plugins/microAppRoutes.js`, add the import of the micro app's Router, to dynamically load the app's routes.
- In `layouts/default.vue`, add the dynamic loading of the micro app's Sidebar component, as well as a button
   and a method to navigate to micro app.