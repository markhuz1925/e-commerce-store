import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

/**
 * Fetches and returns the list of categories.
 *
 * @return {Promise<Category[]>} A promise that resolves to an array of Category objects.
 */

export default async function getCategories(): Promise<Category[]> {
  const res = await fetch(URL);

  return res.json();
}
