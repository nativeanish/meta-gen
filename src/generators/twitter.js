"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTwitter = generateTwitter;
const tag_builder_1 = require("../utils/tag-builder");
function generateTwitter(options) {
    const tags = [];
    if (options.comments) {
        tags.push((0, tag_builder_1.createComment)(options.twitter_comment || "Twitter"));
    }
    tags.push((0, tag_builder_1.createMetaTag)("twitter:card", options.twitter_card_type || "summary"));
    if (options.twitter_handle) {
        tags.push((0, tag_builder_1.createMetaTag)("twitter:site", `@${options.twitter_handle}`));
        tags.push((0, tag_builder_1.createMetaTag)("twitter:creator", `@${options.creator_handle || options.twitter_handle}`));
    }
    if (options.url) {
        tags.push((0, tag_builder_1.createMetaTag)("twitter:url", options.url));
    }
    if (options.twitter_title || options.title) {
        tags.push((0, tag_builder_1.createMetaTag)("twitter:title", options.twitter_title || options.title));
    }
    if (options.twitter_desc || options.desc) {
        tags.push((0, tag_builder_1.createMetaTag)("twitter:description", options.twitter_desc || options.desc));
    }
    if (options.twitter_image || options.img) {
        tags.push((0, tag_builder_1.createMetaTag)("twitter:image", options.twitter_image || options.img));
    }
    return tags;
}
