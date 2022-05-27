require("dotenv").config();
const express = require("express");
const path = require("path");
const contentful = require("contentful");

const app = express();

const port = process.env.PORT || 3001;

const client = contentful.createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

app.get("/whiskeysInStock", async (req, res) => {
  const response = await client.getEntries({
    content_type: "whiskey",
    "fields.inStock": "true",
  });
  return res.send(response);
});

app.get("/boardMembers", async (req, res) => {
  const response = await client.getEntries({
    content_type: "boardMembers",
  });
  return res.send(response);
});

app.get("/nextEvent", async (req, res) => {
  const response = await client.getEntries({
    content_type: "nextTastingEvent",
    limit: 1,
    order: "-sys.createdAt",
  });
  return res.send(response);
});

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "build")));

  // Handle React routing, return all requests to React app
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = {};
