### Micro App 1

#### Introduction
Micro App 1 is a standalone microfrontend integrated into the Base Application. It includes specific features and a dedicated sidebar to enhance modularity.

#### Installation and Setup

1. **Install Dependencies:**
   Ensure you have [Node.js](https://nodejs.org/) (version 16 or later) and npm installed on your system. Then run:
   ```bash
   cd microfrontend-app
   npm install
   ```

2. **Build the Application:**
   ```bash
   npm run build
   ```

4. **Run the Application:**
   ```bash
   node server.js
   ```

#### Key Features
- Provides specific functionality and UI for modular integration.
- Exposes `App` and `Sidebar` components for dynamic usage.

### Notes
- Don't forget to expose the `App`, `Router` and `Sidebar` in `nuxt.config.js`.