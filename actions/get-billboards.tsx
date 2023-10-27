import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

/**
 * Retrieves a billboard with the specified ID from the server.
 *
 * @param {string} id - The ID of the billboard to retrieve.
 * @return {Promise<Billboard>} A promise that resolves to the billboard object.
 */

export default async function getBillboards(id: string): Promise<Billboard> {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
}
