const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const PORT = 4599;
const MIME = {
  ".html": "text/html; charset=utf-8",
  ".webp": "image/webp",
  ".png":  "image/png",
  ".jpg":  "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg":  "image/svg+xml",
  ".js":   "text/javascript; charset=utf-8",
  ".css":  "text/css; charset=utf-8",
  ".xml":  "application/xml; charset=utf-8",
  ".txt":  "text/plain; charset=utf-8"
};

http.createServer((req, res) => {
  let rel = decodeURIComponent(req.url.split("?")[0]);
  // pasta -> index.html dentro dela, igual ao GitHub Pages (/renda/ -> /renda/index.html)
  if (rel.endsWith("/")) rel += "index.html";
  else if (!path.extname(rel)) rel += "/index.html";
  const parts = path.normalize(rel).split("/").filter(p => p && p !== "." && p !== "..");
  const file = path.join(ROOT, ...parts);
  fs.readFile(file, (err, buf) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("404 - nao encontrado");
      return;
    }
    res.writeHead(200, { "Content-Type": MIME[path.extname(file).toLowerCase()] || "application/octet-stream" });
    res.end(buf);
  });
}).listen(PORT, () => console.log("http://localhost:" + PORT));
