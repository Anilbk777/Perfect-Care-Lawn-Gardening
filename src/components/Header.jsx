

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CTAButton from "./CTAButton.jsx";
import { BUSINESS_INFO } from "../utils/constants";

const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" },
];

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { pathname } = useLocation();

    const closeMobileMenu = () => setMobileMenuOpen(false);
    const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <nav
                className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center"
                aria-label="Main navigation"
            >
                {/* Brand */}
                <Link to="/" className="flex items-center gap-2 text-lg md:text-xl font-bold text-brand transition-transform duration-300 hover:scale-[1.02]">
                    <img
                        src="/images/perfect_care_lawn_&_gardening.jpg"
                        alt="Perfect Care Lawn & Gardening Logo"
                        className="h-10 w-auto object-contain"
                    />
                    <span>Perfect Care Lawn & Gardening</span>
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden md:flex space-x-6 font-medium">
                    {navLinks.map(({ path, label }) => (
                        <li key={path}>
                            <Link
                                to={path}
                                className={`relative py-1 transition-colors duration-300 ${pathname === path
                                    ? "text-brand font-semibold after:w-full"
                                    : "text-gray-700 hover:text-brand after:w-0 hover:after:w-full"
                                    } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-brand after:transition-all after:duration-300`}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <CTAButton
                        href={`tel:${BUSINESS_INFO.phone}`}
                        label="Call Now"
                        variant="primary"
                    />
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700 hover:text-brand focus:outline-none"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                    aria-expanded={mobileMenuOpen}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4">
                    <ul className="space-y-3">
                        {navLinks.map(({ path, label }) => (
                            <li key={path}>
                                <Link
                                    to={path}
                                    className={`block py-2 transition ${pathname === path
                                        ? "text-brand font-semibold"
                                        : "text-gray-700 hover:text-brand"
                                        }`}
                                    onClick={closeMobileMenu}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-4 space-y-2">
                        <CTAButton
                            href={`mailto:${BUSINESS_INFO.email}`}
                            label="Email Us"
                            variant="secondary"
                            className="w-full justify-center"
                        />
                        <CTAButton
                            href={`tel:${BUSINESS_INFO.phone}`}
                            label="Call Now"
                            variant="primary"
                            className="w-full justify-center"
                        />
                        <CTAButton
                            href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
                            label="Message on WhatsApp"
                            variant="secondary"
                            className="w-full justify-center"
                        />
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;