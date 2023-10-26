"use client";

import Button from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Color, Size } from "@/types";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import Filter from "./filter";

export default function MobileFilters({
  sizes,
  colors,
}: {
  sizes: Size[];
  colors: Color[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="flex items-center gap-x-2 lg:hidden">
            Filters <PlusIcon size={20} />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <Filter valueKey="sizeId" name="Sizes" data={sizes} />
          <Filter valueKey="colorId" name="Colors" data={colors} />
        </DialogContent>
      </Dialog>
    </>
  );
}
