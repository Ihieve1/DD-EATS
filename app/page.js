import Link from "next/link";
import { 
  HomeIcon, 
  MagnifyingGlassIcon, 
  ShoppingCartIcon, 
  UserIcon, 
  ClipboardDocumentListIcon // Updated icon
} from '@heroicons/react/24/solid';

export default function Page() {
  return (
    <div className=" flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-orange-800 mb-4">Welcome to DD EATS</h1>
        <p className="text-lg mb-8 text-orange-900">Delicious meal at your fingertips</p>
        <div className="flex space-x-4">
          <Link href="/menu" className="px-6 py-2 bg-blue-800 text-white rounded hover:bg-blue-900">
            Menu
          </Link>
          <Link href="/cart" className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-900">
            Cart
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-pink-50 text-pink-900 text-center py-4">
        <div className="flex justify-center space-x-8">
          <Link href="/" className="hover:text-blue-700">
            <HomeIcon className="h-8 w-8" />
          </Link>
          <Link href="/search" className="hover:text-blue-700">
            <MagnifyingGlassIcon className="h-8 w-8" />
          </Link>
          <Link href="/cart" className="hover:text-blue-700">
            <ShoppingCartIcon className="h-8 w-8" />
          </Link>
          <Link href="/orders" className="hover:text-blue-700">
            <ClipboardDocumentListIcon className="h-8 w-8" />
          </Link>
          <Link href="/account" className="hover:text-blue-700">
            <UserIcon className="h-8 w-8" />
          </Link>
        </div>
      </footer>
    </div>
  );
}
