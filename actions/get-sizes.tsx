import { Size } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

/**
 * Retrieves the sizes by making a network request to the specified URL.
 *
 * @return {Promise<Size[]>} A promise that resolves to an array of sizes.
 */

export default async function getSizes(): Promise<Size[]> {
  const res = await fetch(URL);

  return res.json();
}
