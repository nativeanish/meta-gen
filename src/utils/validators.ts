export function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function isString(value: unknown): value is string {
  return typeof value === "string";
}

export function isValidInput(data: unknown): boolean {
  return isObject(data) && Object.keys(data).length > 0;
}
