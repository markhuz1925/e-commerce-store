import { Color } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

/**
 * Retrieves a list of colors from the server.
 *
 * @return {Promise<Color[]>} A promise that resolves to an array of Color objects representing the retrieved colors.
 */

export default async function getColors(): Promise<Color[]> {
  const res = await fetch(URL);

  return res.json();
}
