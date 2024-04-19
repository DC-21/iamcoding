export function unStringfy(str: string) {
  try {
    return JSON.parse(str);
  } catch (e) {
    return str;
  }
}

export const DEVENDPOINT: string = "http://localhost:1400";

export const ENDPOINT: string = "https://metabank-server.vercel.app";
