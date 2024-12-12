import express from 'express';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';

// Get the current directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());

// Serve static assets from the .nuxt/dist/client/_nuxt/ folder
app.use(express.static(path.join(__dirname, '.output/public/_nuxt')));

// Start the server
const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Microfrontend running on http://localhost:${PORT}`);
});
