import axios from "axios";

import {
  normalizeWhiskey,
  normalizeBoardMember,
  normalizeNextEvent,
} from "./models";

const client = axios.create();

function normalizeEntries(entries, normalizeFunc) {
  return entries?.items?.map(normalizeFunc);
}

export async function getAllWhiskeysInStock() {
  const entries = await client.get("/whiskeysInStock");
  return normalizeEntries(entries.data, normalizeWhiskey);
}

export async function getAllBoardMembers() {
  const entries = await client.get("/boardMembers");
  return normalizeEntries(entries.data, normalizeBoardMember);
}

export async function getNextEvent() {
  let data;
  const response = await client.get("/nextEvent", {
    validateStatus(status) {
      return status === 200 || status === 404; // default
    },
  });
  if (response.status === 200) {
    data = normalizeEntries(response.data, normalizeNextEvent);
  } else {
    data = { info: "Ingen ny wiskyprovning är planerad ännu." };
  }
  return data;
}

// import { createClient } from "contentful";
// const client = createClient({
//   space: 'mdf5y1o6ko7x',
//   accessToken: 'iLlQWwVeXwZ3GBi20g2r8kWZY7lT_Yxy9-TUeK5cJg8',
// });
// const previewClient = createClient({
//   space: process.env.CONTENTFUL_SPACE_ID,
//   accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
//   host: 'preview.contentful.com',
// })

// const getClient = () => (client)

// function parseAuthor({ fields }) {
//   return {
//     name: fields.name,
//     picture: fields.picture.fields.file,
//   }
// }

// export async function getPreviewPostBySlug(slug) {
//   const entries = await getClient(true).getEntries({
//     content_type: 'post',
//     limit: 1,
//     'fields.slug[in]': slug,
//   })
//   return parsePostEntries(entries)[0]
// }
// export async function getAllMembersWithSlug() {
//   const entries = await client.getEntries({
//     content_type: 'member',
//   })
//   return parsePostEntries(entries, (post) => post.fields)
// }
