const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const PORT = 3000;

app.prepare().then(() => {
  const server = express();

  // Example API route (Express)
  server.get("/api/hello", (req, res) => {
    res.json({ message: "Hello from Express 🚀" });
  });

  // Let Next.js handle everything else
  server.use((req, res) => {
    return handle(req, res);
  });

  server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});