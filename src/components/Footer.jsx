import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail, Globe } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-auto bg-gray-900 text-gray-300 py-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* BRAND + DESCRIPTION */}
        <div className="flex flex-col items-start gap-4">
          <Link href="/" className="flex gap-2 items-center">
            <Image
              src="/logo.png"
              alt="The Eagle's Daily News Logo"
              width={50}
              height={50}
            />
            <h2 className="text-xl font-bold italic font-serif leading-tight">
              Eagle's <br />
              Daily News
            </h2>
          </Link>

          <p className="text-sm leading-6">
            Stay informed with reliable, up-to-date news from around the world.
            We bring stories that matter — unbiased, fast, and verified.
          </p>
        </div>

        {/* POPULAR TOPICS */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Popular Topics</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/categories/politics" className="hover:text-white">Politics</Link></li>
            <li><Link href="/categories/technology" className="hover:text-white">Technology</Link></li>
            <li><Link href="/categories/sports" className="hover:text-white">Sports</Link></li>
            <li><Link href="/categories/entertainment" className="hover:text-white">Entertainment</Link></li>
          </ul>
        </div>

        {/* SOCIAL + LANGUAGE */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Follow Us</h3>

          <div className="flex space-x-4 mb-4">
            <Link href="#" className="hover:text-white"><Facebook size={20} /></Link>
            <Link href="#" className="hover:text-white"><Twitter size={20} /></Link>
            <Link href="#" className="hover:text-white"><Instagram size={20} /></Link>
            <Link href="#" className="hover:text-white"><Mail size={20} /></Link>
          </div>

          <p className="text-sm flex items-center gap-2">
            <Globe size={16} /> English Edition
          </p>
        </div>

      </div>

      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Eagle’s Daily News. All rights reserved.
      </div>
    </footer>
  );
}