"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTag = createTag;
exports.createComment = createComment;
exports.createMetaTag = createMetaTag;
function createTag(tag, text, attrs, selfClosing = false) {
    const attributes = attrs
        ? Object.entries(attrs)
            .map(([key, value]) => (value ? `${key}="${value}"` : key))
            .join(" ")
        : "";
    const openTag = attributes ? `<${tag} ${attributes}>` : `<${tag}>`;
    if (selfClosing) {
        return openTag.replace(/>$/, "/>");
    }
    return text !== undefined ? `${openTag}${text}</${tag}>` : openTag;
}
function createComment(text) {
    return `<!-- ${text} -->`;
}
function createMetaTag(name, content, isProperty = false) {
    return createTag("meta", undefined, {
        [isProperty ? "property" : "name"]: name,
        content,
    }, true);
}
