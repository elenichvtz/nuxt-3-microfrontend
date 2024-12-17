# Nuxt 3 Microfrontend Integration

### Project Overview
This project demonstrates a modular architecture using micro frontends, enabling the development and deployment of distinct applications that are seamlessly integrated into a central base application. The architecture promotes scalability, code reusability, and separation of concerns.

#### Key Highlights
- **Base Application**: Serves as the host and orchestrator, providing shared layout, routing, and authentication.
- **Micro App 1 & Micro App 2**: Two standalone micro frontends with unique functionalities and sidebars, dynamically integrated into the Base Application via module federation.
- **Dynamic Sidebar Integration**: The Base Application dynamically loads and displays sidebars specific to each microfrontend, ensuring consistent user experience.

#### Attention Points
- **Module Federation Setup**: Verify the configuration of `@originjs/vite-plugin-federation` in each app's build system for proper integration.
- **Environment Variables**: Accurate configuration in the `.env` file is essential for inter-application communication.
- **Port Management**: Each micro app must run on its designated port to avoid conflicts and ensure smooth operation.
- **Vue Dependency Management**: Ensure consistent Vue versions across all apps to avoid runtime issues.
- **Shared Components**: Components like sidebars are exposed dynamically; observe how they are loaded conditionally based on routing context.

The applications provide detailed setup instructions in their respective **README.md** files.

### Installation and Setup
**Clone the Repository:**
   ```bash
   git clone https://github.com/elenichvtz/nuxt-3-microfrontend.git
   ```

### Notes
- Make sure all apps are running on their respective ports as configured in the `.env` files and remote module federation settings.
- Ensure Vue versions are compatible across all apps to avoid runtime conflicts.