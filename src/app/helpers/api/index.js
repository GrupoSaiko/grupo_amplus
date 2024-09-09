/**
 * Check if the response stauts was OK (between 200 and 299)
 * @param {number} status - HTTP status code
 * @param {boolean} isOkay - Indicates if the response was ok
 * @returns {boolean}
 */
export const isOkRes = (status, isOkay) =>
  isOkay && status >= 200 && status <= 299;

export async function oauthToken(code) {
  try {

    const url = `https://${process.env.NEXT_PUBLIC_DOMAIN}/api/auth0/token?code=${code}`;

    

    const tokenRes = await fetch(
      url
    );
    const tokenData = await tokenRes.json();

    console.log(tokenData);
  } catch (error) {}
}
