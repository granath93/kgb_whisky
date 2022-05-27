import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export function normalizeWhisky({ fields }) {
  return {
    name: fields.name,
    image: fields.image?.fields.file || "",
    moreInfo: fields.moreInfo || "",
    price: fields.price || 0,
    finnish: documentToHtmlString(fields.finnish) || "",
    area: fields.area || "",
    volume: fields.volume || "70",
    weight: fields.weight || "0",
    alcohol: fields.alcohol || "0",
    taste: documentToHtmlString(fields.taste) || "",
    nose: documentToHtmlString(fields.nose) || "",
    smokiness: documentToHtmlString(fields.smokiness) || "",
    storage: fields.storage || "",
    distillery: fields.distillery || "",
    inStock: fields.inStock || false,
    distilleryPosition: fields.distilleryPosition || "",
  };
}

export function normalizeBoardMember({ fields }) {
  return {
    name: fields.name,
    image: fields.image?.fields.file || "",
    mainContactMember: fields.mainContactMember || "",
    email: fields.email || "",
    phoneNumber: fields.phoneNumber || "",
  };
}

export function normalizeNextEvent({ fields }) {
  const date = new Date(fields.date);
  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const timeOptions = { hour: "numeric", minute: "numeric" };
  return {
    info: documentToHtmlString(fields.info),
    date: date.toLocaleDateString("sv-SE", dateOptions),
    time: date.toLocaleTimeString(undefined, timeOptions),
    place: fields.place,
  };
}
