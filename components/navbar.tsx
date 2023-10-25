import getCategories from "@/actions/get-categories";
import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import Link from "next/link";

export default async function Navbar() {
  const categories = await getCategories();
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex items-center h-16">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">STORE</p>
          </Link>
          <MainNav data={categories} />
        </div>
      </Container>
    </div>
  );
}
