"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ReactNode } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ open, onClose, children }: Props) {
  const onOpenChange = (open: boolean) => {
    if (!open) onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[calc(100vw-50px)]">
        <div>{children}</div>
      </DialogContent>
    </Dialog>
  );
}
