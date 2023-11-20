/**
 * Check if the response stauts was OK (between 200 and 299)
 * @param {number} status - HTTP status code
 * @param {boolean} isOkay - Indicates if the response was ok
 * @returns {boolean}
 */
export const isOkRes = (status, isOkay) =>
  isOkay && status >= 200 && status <= 299;
