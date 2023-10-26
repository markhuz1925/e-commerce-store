"use client";

import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";
import useCart from "@/hooks/useCart";
import { Product } from "@/types";
import { Trash2Icon } from "lucide-react";
import Image from "next/image";

export default function CartItems({ data }: { data: Product }) {
  const cart = useCart();

  const removeItem = () => {
    cart.removeItem(data.id);
  };

  return (
    <li className="flex py-6">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          src={data.images[0].url}
          fill
          alt=""
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-2 top-2">
          <IconButton
            onClick={removeItem}
            icon={<Trash2Icon color="red" size={15} />}
          />
        </div>
        <div className="flex flex-col items-start justify-between h-full">
          <div className="flex flex-col">
            <p className="text-xl font-semibold">{data.name}</p>
            <p className="text-gray-500">Color: {data.color.name}</p>
            <p className="text-gray-500">Size: {data.size.name}</p>
          </div>
          <p className="text-lg text-slate-700">
            <Currency value={data.price} />
          </p>
        </div>
      </div>
    </li>
  );
}
