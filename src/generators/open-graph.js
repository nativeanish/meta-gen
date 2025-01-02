"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateOpenGraph = generateOpenGraph;
const tag_builder_1 = require("../utils/tag-builder");
function generateOpenGraph(options) {
    const tags = [];
    if (options.comments) {
        tags.push((0, tag_builder_1.createComment)(options.og_comment || "Open Graph"));
    }
    tags.push((0, tag_builder_1.createMetaTag)("og:type", options.type || "website", true));
    if (options.url) {
        tags.push((0, tag_builder_1.createMetaTag)("og:url", options.url, true));
    }
    if (options.site_name) {
        tags.push((0, tag_builder_1.createMetaTag)("og:site_name", options.site_name, true));
    }
    tags.push((0, tag_builder_1.createMetaTag)("og:locale", options.locale || "en_US", true));
    if (options.og_title || options.title) {
        tags.push((0, tag_builder_1.createMetaTag)("og:title", options.og_title || options.title, true));
    }
    if (options.og_desc || options.desc) {
        tags.push((0, tag_builder_1.createMetaTag)("og:description", options.og_desc || options.desc, true));
    }
    if (options.og_image || options.img) {
        tags.push((0, tag_builder_1.createMetaTag)("og:image", options.og_image || options.img, true));
    }
    return tags;
}
