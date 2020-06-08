//  export function flattenMessages(nestedMessages, prefix = "") {
// return Object.keys(nestedMessages).reduce((messages, key) => {
// let value = nestedMessages[key];
// let prefixedKey = prefix ? `${prefix}.${key}` : key;
//
// if (typeof value === "string") {
// messages[prefixedKey] = value;
// } else {
// Object.assign(messages, flattenMessages(value, prefixedKey));
// }
// return messages;
// }, {});
//  }

export const flattenMessages = (nestedMessages, prefix = "") => {
  if (nestedMessages === null) {
    return {};
  }
  return Object.keys(nestedMessages).reduce((messages, key) => {
    const value = nestedMessages[key];
    const prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === "string") {
      Object.assign(messages, { [prefixedKey]: value });
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey));
    }

    return messages;
  }, {});
};