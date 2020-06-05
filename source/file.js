import { parse } from "json2csv";
import _ from "lodash";
import mkdirp from "mkdirp";

import fs from "fs-extras";

/**
 * Converts a JavaScript object into JSON.
 * @param data The object to convert.
 * @return The object as a JSON string.
 */
export const toJSON = _.partialRight(JSON.stringify, null, 2);

/**
 * Parses a string as JSON.
 * @param source The string to parse.
 * @return The parsed object.
 */
export const fromJSON = _.unary(JSON.parse);

/**
 * Converts a JavaScript object into CSV.
 * @param data The object to convert.
 * @return The object as a CSV string.
 */
export function toCSV(data) {
  return parse(data, { header: false });
}

/**
 * Creates a directory unless it already exists.
 * @param directory The directory to create.
 */
export const mkdirP = _.unary(mkdirp.sync);

/**
 * Reads a file from the disk synchronously.
 * @param path The path of the file to read.
 * @return The contents of the file as a string.
 */
export const readFile = _.curry(fs.readFileSync, 2)(_, "utf8");

/**
 * Writes a file to the disk synchronously.
 * @param path The path of the file to write.
 * @param content The content of the file.
 */
export const writeFile = _.ary(fs.writeFileSync, 2);

/**
 * Reads a file from the disk synchronously and parses it as JSON.
 * @param path The path of the file to read.
 * @return The contents of the file as a JavaScript object.
 */
export const readJSON = _.flow(readFile, fromJSON);

/**
 * Writes an object to the disk synchronously as JSON.
 * @param path The path of the file to write.
 * @param content The object to be written to the file.
 */
export const writeJSON = _.curry((path, content) => writeFile(path, toJSON(content)));

/**
 * Writes an object to the disk synchronously as CSV.
 * @param path The path of the file to write.
 * @param content The object to be written to the file.
 */
export const writeCSV = _.curry((path, content) => writeFile(path, toCSV(content)));

