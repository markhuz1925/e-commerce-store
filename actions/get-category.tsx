import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

/**
 * Retrieves a category by its ID.
 *
 * @param {string} id - The ID of the category to retrieve.
 * @return {Promise<Category>} A promise that resolves to the retrieved category.
 */

export default async function getCategory(id: string): Promise<Category> {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
}
