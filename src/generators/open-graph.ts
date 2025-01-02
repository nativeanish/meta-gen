import { MetaGeneratorOptions } from "../types/interfaces";
import { createMetaTag, createComment } from "../utils/tag-builder";

export function generateOpenGraph(options: MetaGeneratorOptions): string[] {
  const tags: string[] = [];

  if (options.comments) {
    tags.push(createComment(options.og_comment || "Open Graph"));
  }

  tags.push(createMetaTag("og:type", options.type || "website", true));

  if (options.url) {
    tags.push(createMetaTag("og:url", options.url, true));
  }

  if (options.site_name) {
    tags.push(createMetaTag("og:site_name", options.site_name, true));
  }

  tags.push(createMetaTag("og:locale", options.locale || "en_US", true));

  if (options.og_title || options.title) {
    tags.push(
      createMetaTag("og:title", options.og_title || options.title!, true)
    );
  }

  if (options.og_desc || options.desc) {
    tags.push(
      createMetaTag("og:description", options.og_desc || options.desc!, true)
    );
  }

  if (options.og_image || options.img) {
    tags.push(
      createMetaTag("og:image", options.og_image || options.img!, true)
    );
  }

  return tags;
}
