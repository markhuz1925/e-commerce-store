"use client";

import Gallery from "@/components/gallery/gallery-tab";
import Modal from "@/components/ui/modal";
import usePreviewModal from "@/hooks/usePreviewModal";
import Info from "./info";

export default function PreviewModal() {
  const previewModal = usePreviewModal();
  const product = usePreviewModal((state) => state.data);

  if (!product) return null;

  return (
    <Modal open={previewModal.isOpen} onClose={previewModal.onClose}>
      <div className="w-full items-start gap-x-6 gap-y-8 grid grid-cols-1 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4 lg:col-span-5">
          <Gallery images={product.images} />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <Info product={product} />
        </div>
      </div>
    </Modal>
  );
}
