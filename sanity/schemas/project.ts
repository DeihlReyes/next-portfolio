import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 2,
      description: "Shown on cards and project list",
    }),
    defineField({
      name: "longDescription",
      title: "Overview Paragraphs",
      type: "array",
      of: [{ type: "text", rows: 3 }],
      description: "Each item becomes a paragraph on the project detail page",
    }),
    defineField({
      name: "imagePath",
      title: "Image Path (local)",
      type: "string",
      description:
        "Local path e.g. /assets/projects/satiscript_img2.png — leave blank if using the image field below",
    }),
    defineField({
      name: "image",
      title: "Image (Sanity CDN)",
      type: "image",
      options: { hotspot: true },
      description: "Upload here for new projects. Takes priority over Image Path.",
    }),
    defineField({
      name: "imageAlt",
      title: "Image Alt Text",
      type: "string",
    }),
    defineField({
      name: "techStack",
      title: "Tech Stack",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Full Stack", value: "fullstack" },
          { title: "AI", value: "ai" },
          { title: "Mobile", value: "mobile" },
          { title: "Open Source", value: "open-source" },
          { title: "Client Work", value: "client-work" },
        ],
      },
    }),
    defineField({
      name: "features",
      title: "Key Features",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "disclaimer",
      title: "Disclaimer",
      type: "text",
      rows: 2,
      description: "Shown as a warning note on the detail page",
    }),
    defineField({
      name: "repos",
      title: "Repositories",
      type: "array",
      description:
        'Add one or more repository links. Use labels like "Frontend", "Backend", or "Source Code" for non-monorepo projects.',
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              description: 'e.g. "Source Code", "Frontend", "Backend"',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "url",
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: { title: "label", subtitle: "url" },
          },
        },
      ],
    }),
    defineField({
      name: "demo",
      title: "Live Demo URL",
      type: "url",
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "number",
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first",
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "category", media: "image" },
  },
});
