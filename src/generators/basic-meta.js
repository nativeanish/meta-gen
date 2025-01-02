"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateBasicMeta = generateBasicMeta;
const tag_builder_1 = require("../utils/tag-builder");
function generateBasicMeta(options) {
    const tags = [
        (0, tag_builder_1.createTag)("meta", undefined, { charset: options.charset || "utf-8" }, true),
        (0, tag_builder_1.createTag)("meta", undefined, { "http-equiv": "X-UA-Compatible", content: "IE=edge" }, true),
        (0, tag_builder_1.createTag)("meta", undefined, { name: "viewport", content: "width=device-width, initial-scale=1" }, true),
    ];
    if (options.title) {
        tags.push((0, tag_builder_1.createTag)("title", options.title), (0, tag_builder_1.createMetaTag)("title", options.title));
    }
    if (options.name) {
        tags.push((0, tag_builder_1.createMetaTag)("author", options.name));
    }
    if (options.desc) {
        tags.push((0, tag_builder_1.createMetaTag)("description", options.desc));
    }
    if (options.generator) {
        tags.push((0, tag_builder_1.createMetaTag)("generator", options.generator));
    }
    return tags;
}
