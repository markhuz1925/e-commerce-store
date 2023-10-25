"use client";

import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";
import { Product } from "@/types";
import { ExpandIcon, ShoppingCartIcon } from "lucide-react";
import Image from "next/image";

export default function ProductCard({ data }: { data: Product }) {
  return (
    <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data?.images?.[0]?.url}
          fill
          alt="Image"
          className="aspect-square object-cover rounded-md"
        />
        <div className="absolute bottom-5 opacity-0 group-hover:opacity-100 w-full px-6 transition">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={() => {}}
              icon={<ExpandIcon size={20} className="text-gray-600" />}
            />

            <IconButton
              onClick={() => {}}
              icon={<ShoppingCartIcon size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
}
