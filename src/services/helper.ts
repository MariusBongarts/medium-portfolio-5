export function encodeObject(object: Object) {
  return encodeURIComponent(JSON.stringify(object));
}
export function decodeObject<T>(stringified: string): T {
  return JSON.parse(decodeURIComponent(stringified));
}
