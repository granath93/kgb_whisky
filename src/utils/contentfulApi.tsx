const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

export const getAllWhiskeysInStock = async () => {
  return await client.getEntries({
    content_type: "whiskey",
    "fields.inStock": "true",
  });
};

export const getBoardMembers = async () => {
  return await client.getEntries({
    content_type: "boardMembers",
  });
};
