"use client";

import Container from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import useCart from "@/hooks/useCart";
import { useEffect, useState } from "react";
import CartItems from "./components/cart-item";
import Summary from "./components/summary";

export default function CartPage() {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">My Shopping Cart</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {cart.items.length === 0 && (
                <p className="text-gray-500">Your Shopping Cart is empty.</p>
              )}
              <ul>
                {cart.items.map((item) => (
                  <>
                    <CartItems key={item.id} data={item} />
                    {cart.items.length > 1 && <Separator />}
                  </>
                ))}
              </ul>
            </div>
            <Summary />
          </div>
        </div>
      </Container>
    </div>
  );
}
