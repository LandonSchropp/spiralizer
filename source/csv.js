import _ from "lodash";

import { parse } from "json2csv";

/**
 * Converts a JavaScript object into CSV.
 * @param data The object to convert.
 * @return The object as a CSV string.
 */
export function toCSV(data) {
  return parse(data, { header: true });
}

/**
 * Determines if the value is blank.
 * @value The value to check.
 * @return True if the value is blank and false otherwise.
 */
export function isBlank(value) {
  return _.isNil(value) || /^\s*$/.test(value);
}

export function link(title, url) {
  if (isBlank(title) || isBlank(url)) {
    return null;
  }

  return `=HYPERLINK("${ url }", "${ title.replace(/"/g, '""') }")`;
}
