import { MetaGeneratorOptions } from "../types/interfaces";
import { createMetaTag, createComment } from "../utils/tag-builder";

export function generateTwitter(options: MetaGeneratorOptions): string[] {
  const tags: string[] = [];

  if (options.comments) {
    tags.push(createComment(options.twitter_comment || "Twitter"));
  }

  tags.push(
    createMetaTag("twitter:card", options.twitter_card_type || "summary")
  );

  if (options.twitter_handle) {
    tags.push(createMetaTag("twitter:site", `@${options.twitter_handle}`));
    tags.push(
      createMetaTag(
        "twitter:creator",
        `@${options.creator_handle || options.twitter_handle}`
      )
    );
  }

  if (options.url) {
    tags.push(createMetaTag("twitter:url", options.url));
  }

  if (options.twitter_title || options.title) {
    tags.push(
      createMetaTag("twitter:title", options.twitter_title || options.title!)
    );
  }

  if (options.twitter_desc || options.desc) {
    tags.push(
      createMetaTag(
        "twitter:description",
        options.twitter_desc || options.desc!
      )
    );
  }

  if (options.twitter_image || options.img) {
    tags.push(
      createMetaTag("twitter:image", options.twitter_image || options.img!)
    );
  }

  return tags;
}
