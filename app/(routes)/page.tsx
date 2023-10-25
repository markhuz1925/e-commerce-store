import getBillboards from "@/actions/get-billboards";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

export default async function HomePage() {
  const billboard = await getBillboards("4e950028-0718-4d42-a27b-e04784107e8e");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
}
