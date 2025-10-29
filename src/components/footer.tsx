// FIX: Added React import to resolve 'Cannot find namespace "React"'.
import React from "react";
import Link from "next/link";

function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-muted text-foreground w-full py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4 col-span-2 md:col-span-1">
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
              <MountainIcon className="h-6 w-6" />
              <span className="text-lg font-semibold">PrismUI</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Beautifully designed components that you can copy and paste into your apps.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Components</h4>
            <ul className="space-y-1">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>Buttons</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>Cards</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>Forms</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>Modals</Link></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Resources</h4>
            <ul className="space-y-1">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>Documentation</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>GitHub</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>Changelog</Link></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Legal</h4>
            <ul className="space-y-1">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>Privacy Policy</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} PrismUI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}