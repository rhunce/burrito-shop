import CompanyLogo from '@/app/ui/company-logo';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import { fetchProducts } from './lib/data';
import { Product } from '../app/ui/homepage/products';

export default async function Page() {
  const products = await fetchProducts();

  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flow-root items-end rounded-lg bg-blue-500 p-4">
        <div className="float-left">
          <CompanyLogo />
        </div>
        <div className="float-right">
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-400 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-300 md:text-base"
          >
            <span>Employee Log In</span>
          </Link>
        </div>
      </div>

      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div
          className={`${lusitana} flex flex-col flex-wrap content-center gap-6 rounded-lg bg-gray-200 p-3`}
        >
          <Link
            href="/"
            className="flex w-full rounded-lg bg-blue-400 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-300 md:text-base"
          >
            <span>Burritos</span>
          </Link>
          <Link
            href="/"
            className="flex w-full rounded-lg bg-blue-400 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-300 md:text-base"
          >
            <span>Tacos</span>
          </Link>
          <Link
            href="/"
            className="flex w-full rounded-lg bg-blue-400 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-300 md:text-base"
          >
            <span>Bowls</span>
          </Link>
          <Link
            href="/"
            className="flex w-full rounded-lg bg-blue-400 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-300 md:text-base"
          >
            <span>Drinks</span>
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-10/12 md:px-28 md:py-12">
          {products.map(
            ({ name, description }: { name: string; description: string }) => (
              <Product name={name} description={description} />
            ),
          )}
        </div>
      </div>
    </main>
  );
}
