import { MetaGeneratorOptions } from "../types/interfaces";
import { createTag, createMetaTag } from "../utils/tag-builder";

export function generateBasicMeta(options: MetaGeneratorOptions): string[] {
  const tags: string[] = [
    createTag("meta", undefined, { charset: options.charset || "utf-8" }, true),
    createTag(
      "meta",
      undefined,
      { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
      true
    ),
    createTag(
      "meta",
      undefined,
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      true
    ),
  ];

  if (options.title) {
    tags.push(
      createTag("title", options.title),
      createMetaTag("title", options.title)
    );
  }

  if (options.name) {
    tags.push(createMetaTag("author", options.name));
  }

  if (options.desc) {
    tags.push(createMetaTag("description", options.desc));
  }

  if (options.generator) {
    tags.push(createMetaTag("generator", options.generator));
  }

  return tags;
}
