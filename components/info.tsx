import { Product } from "@/types";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";

export default function Info({ product }: { product: Product }) {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-col gap-y-2">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-lg">{product.category?.name}</p>
      </div>
      <p className="text-2xl font-black">
        <Currency value={product?.price} />
      </p>
      <p className="text-lg font-semibold">
        Size: <span className="font-medium">{product.size?.name}</span>
      </p>
      <div className="flex flex-row items-center gap-x-2">
        <p className="text-lg font-semibold">Colour: </p>
        <div className="flex flex-row items-center gap-x-1">
          <div
            className="h-6 w-6 rounded-full border"
            style={{ backgroundColor: product.color?.value }}
          />
          <p className="font-medium">{product.color?.name}</p>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3 w-full">
        <Button className="w-full">Add to Cart</Button>
      </div>
    </div>
  );
}
