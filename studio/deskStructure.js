import S from "@sanity/desk-tool/structure-builder";
import { MdBusiness, MdSettings } from "react-icons/md";
import { FaFile } from "react-icons/fa";

const hiddenTypes = [
  "category",
  "companyInfo",
  "page",
  "pageHome",
  "person",
  "feature",
  "figure",
  "button",
  "features",
  "navigationSettings",
  "featuresHome",
  "heroHome",
  "landingPage",
  "clients",
  "clientsHome",
  "social",
  "sectionThreeHome",
  "textImageBlock",
  "textColumnsWithImage",
  "textWithImage",
  "imageWithText",
  "textColumnsWithImageItem",
  "post",
  "project",
  "siteSettings",
  "localeString"
];

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site Settings")
        .child(
          S.editor()
            .id("siteSettings")
            .title("Site Settings")
            .schemaType("siteSettings")
            .documentId("siteSettings")
        )
        .icon(MdSettings),
      S.listItem()
        .title("Company Info")
        .child(
          S.editor()
            .id("companyInfo")
            .schemaType("companyInfo")
            .title("Company Info")
            .documentId("companyInfo")
        )
        .icon(MdBusiness),
      S.listItem()
        .title("Navigation")
        .child(
          S.editor()
            .id("navigationSettings")
            .title("Navigation")
            .schemaType("navigationSettings")
            .documentId("navigationSettings")
        )
        .icon(MdBusiness),
      S.listItem()
        .title("Projects")
        .schemaType("project")
        .child(S.documentTypeList("project")),
      S.listItem()
        .title("Blog posts")
        .schemaType("post")
        .child(S.documentTypeList("post").title("Blog posts")),
      S.listItem()
        .title("Pages")
        .child(
          S.list()
            .title("Pages")
            .items([
              S.listItem()
                .title("Homepage")
                .child(
                  S.editor()
                    .title("Homepage")
                    .id("pageHome")
                    .schemaType("pageHome")
                    .documentId("pageHome")
                )
                .icon(FaFile),
              S.listItem()
                .title("Static Pages")
                .schemaType("page")
                .child(S.documentTypeList("page").title("Static Pages")),

              // S.listItem()
              //   .title("Static Pages")
              //   .child(
              //     S.list()
              //       .title("Static Pages")
              //       .items([
              //         S.listItem()
              //           .title("About")
              //           .child(
              //             S.editor()
              //               .id("aboutPage")
              //               .schemaType("page")
              //               .documentId("about")
              //           )
              //           .icon(FaFile),
              //         S.listItem()
              //           .title("Contact")
              //           .child(
              //             S.editor()
              //               .id("contactPage")
              //               .schemaType("page")
              //               .documentId("contact")
              //           )
              //           .icon(FaFile)
              //       ])
              //   ),
              S.listItem()
                .title("Landing Pages")
                .schemaType("landingPage")
                .child(S.documentTypeList("landingPage").title("Landing Pages"))
            ])
        ),
      S.listItem()
        .title("People")
        .schemaType("person")
        .child(S.documentTypeList("person").title("People")),
      S.listItem()
        .title("Categories")
        .schemaType("category")
        .child(S.documentTypeList("category").title("Categories")),
      ...S.documentTypeListItems().filter(listItem => !hiddenTypes.includes(listItem.getId()))
    ]);
