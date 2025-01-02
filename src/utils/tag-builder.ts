export function createTag(
  tag: string,
  text?: string,
  attrs?: Record<string, string>,
  selfClosing = false
): string {
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

export function createComment(text: string): string {
  return `<!-- ${text} -->`;
}

export function createMetaTag(
  name: string,
  content: string,
  isProperty = false
): string {
  return createTag(
    "meta",
    undefined,
    {
      [isProperty ? "property" : "name"]: name,
      content,
    },
    true
  );
}
