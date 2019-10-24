// resolvePreviewURLs.js
const baseURL = "https://infinite-falls-54377.herokuapp.com";

export default function resolvePreviewURLs(document) {
  switch (document._type) {
    case "page":
      return `${baseURL}/${document.slug.current}`;
    case "landingPage":
      return `${baseURL}/${document.slug.current}`;
    case "post":
      return `${baseURL}/post/${document.id}`;
    case "author":
      return `${baseURL}/info/people/${document.slug.current}`;
    default:
      return baseURL;
  }
}
