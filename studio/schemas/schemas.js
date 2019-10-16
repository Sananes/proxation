// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import blockContent from "./objects/blockContent";
import blockText from "./objects/blockText";
import category from "./page/category";
import companyInfo from "./page/companyInfo";
import figure from "./figure";
import landingPage from "./page/landingPages";
import pageBuilder from "./objects/pageBuilder";
import mainImage from "./mainImage";
import localeString from "./localeString";
// import navigationSettings from "./navigationSettings";
import button from "./objects/button";
import page from "./page/page";
import pageHome from "./page/pageHome";
import social from "./social";
import sectionColor from "./objects/sectionColor";
import socialList from "./socialList";
import seo from "./objects/seo";
import heroHome from "./heroHome";
import clientsHome from "./clientsHome";
import sectionContact from "./sectionContact";
import clients from "./clients";
import heading from "./objects/heading";
import person from "./person";
import post from "./page/post";
import postAuthor from "./objects/postAuthor";
import textWithImage from "./objects/textWithImage";
import textColumnsWithImageItem from "./objects/textColumnsWithImageItem";
import textColumnsWithImage from "./objects/textColumnsWithImage";
import project from "./project";
import projectMember from "./projectMember";
import siteSettings from "./page/siteSettings";
import slideshow from "./slideshow";

// Homepage sections
import sectionThreeHome from "./sectionThreeHome";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    blockContent,
    blockText,
    category,
    companyInfo,
    seo,
    sectionColor,
    figure,
    landingPage,
    mainImage,
    localeString,
    textColumnsWithImageItem,
    clients,
    heading,

    // SiteSettings
    socialList,
    social,

    // Parts
    textWithImage,

    // Homepage sections
    heroHome,
    pageHome,
    clientsHome,
    sectionThreeHome,
    textColumnsWithImage,
    sectionContact,

    // Misc
    button,
    page,
    person,
    post,
    postAuthor,
    project,
    projectMember,
    siteSettings,
    slideshow

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
});
