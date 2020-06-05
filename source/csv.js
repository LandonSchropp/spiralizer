import { parse } from "json2csv";

/**
 * Converts a JavaScript object into CSV.
 * @param data The object to convert.
 * @return The object as a CSV string.
 */
export function toCSV(data) {
  return parse(data, { header: false });
}
