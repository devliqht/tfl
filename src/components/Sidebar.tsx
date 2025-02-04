"use client";

import { useIsMobile } from "./helpers/isMobile";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "./NavLink";

const navItems = [
  { to: "/", label: "Overview" },
  { to: "/grant-of-license", label: "Grant of License" },
  { to: "/copyright-infringement", label: "Copyright Infringement" },
  { to: "/restrictions-of-usage", label: "Restrictions of Usage" },
  { to: "/warranty-disclaimer", label: "Warranty Disclaimer" },
  { to: "/limitation-of-liability", label: "Limitation of Liability" },
  { to: "/related-agreements", label: "Related Agreements" },
  { to: "/governing-law", label: "Governing Law" },
  { to: "/term-and-termination", label: "Term and Termination" },
];

export function Sidebar() {
const isMobile = useIsMobile();
const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    {!isMobile && (
        <aside className="w-64 h-fit bg-gray-200 text-white flex flex-col justify-between mx-6 p-8 rounded-b-xl">
        <div className="flex flex-col items-start">
            <h1 className="text-3xl font-bold tracking-tight mb-6 bg-gradient-to-b from-[#e11f37] via-[#cc0129] to-[#b3011b] bg-clip-text text-transparent">
            Adobe EULA Analysis
            </h1>
            <nav className={`${isMobile ? "w-full" : ""}`}>
                <div className="flex flex-col">
                    {navItems.map((item) => (
                        <NavLink
                            to={item.to}
                            label={item.label}
                        />
                    ))}
                </div>
            </nav>
        </div>
        <footer className="text-sm text-gray-500 mt-4 sm:mt-6">
            <img src="/1.svg" className="h-auto w-24" />
            <p className="text-sm">© {new Date().getFullYear()} Group Adobe. <br />GE-TFL <br />Submitted to <br />Ms. Mary Rose Loquinario</p>
        </footer>
        </aside>
        )}
        {isMobile && (
            <div className="z-50">
                <div className="fixed top-0 left-0 w-full bg-white flex items-center justify-between px-6 py-4 z-50">
                    <button
                    className="text-black text-3xl transition-transform duration-300"
                    onClick={() => setIsOpen(true)}
                    >
                    <Menu />
                    </button>
                    <h1 className="text-xl font-bold bg-gradient-to-b from-[#e11f37] via-[#cc0129] to-[#b3011b] bg-clip-text text-transparent">
                    Adobe EULA Analysis
                    </h1>
                </div>
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetContent side="left" className="w-72 text-white max-h-screen overflow-y-auto ">
                        <div className="flex flex-col space-y-6 py-4 px-2">
                            <div className="flex justify-between items-center">
                            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-b from-[#e11f37] via-[#cc0129] to-[#b3011b] bg-clip-text text-transparent">
                                Adobe EULA Analysis
                            </h1>
                                <button
                                    className={`text-black text-2xl transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <X />
                                </button>
                            </div>
                            <nav className="flex flex-col space-y-2">
                                {navItems.map((item) => (
                                    <NavLink key={item.to} to={item.to} label={item.label} onClick={() => setIsOpen(false)} mobile={true}/>
                                ))}
                            </nav>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        )}
    </>
  );
}