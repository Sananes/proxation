// resolvePreviewURLs.js
const baseURL = "https://infinite-falls-54377.herokuapp.com";

export default function resolvePreviewURLs(document) {
  switch (document._type) {
    case "page":
      return `${baseURL}/${document.slug.current}`;
    case "landingPage":
      return `${baseURL}/${document.slug.current}`;
    case "post":
      return `${baseURL}/e-commerce-blog/${document.id}`;
    default:
      return baseURL;
  }
}
