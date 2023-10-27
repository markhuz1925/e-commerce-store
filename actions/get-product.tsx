import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

/**
 * Retrieves a product with the specified ID.
 *
 * @param {string} id - The ID of the product to retrieve.
 * @return {Promise<Product>} A promise that resolves to the retrieved product.
 */

export default async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
}
