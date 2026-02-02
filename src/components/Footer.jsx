import { Link } from "react-router-dom";
import { BUSINESS_INFO, SOCIAL_MEDIA } from "../utils/constants";
import { Phone, Mail, MessageCircle, MapPin, Facebook } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-brand text-white mt-16">
            <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">

                {/* Business Info */}
                <div>
                    <h3 className="font-bold text-xl mb-4 text-white">
                        Perfect Care Lawn & Gardening
                    </h3>
                    <p className="text-gray-100 leading-relaxed">
                        Reliable lawn mowing and gardening services across {BUSINESS_INFO.location}.
                        Quality work, honest service, and free quotes for all your lawn care needs.
                    </p>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="font-bold text-lg mb-4 text-white">Contact Us</h4>
                    <ul className="space-y-3">
                        <li>
                            <div className="flex items-center group">
                                <Phone size={18} className="mr-3 text-brand-light" />
                                <a
                                    href={`tel:${BUSINESS_INFO.phone}`}
                                    className="text-white hover:text-brand-light transition-colors"
                                >
                                    {BUSINESS_INFO.phone}
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center group">
                                <Mail size={18} className="mr-3 text-brand-light" />
                                <a
                                    href={`mailto:${BUSINESS_INFO.email}`}
                                    className="text-white hover:text-brand-light transition-colors"
                                >
                                    {BUSINESS_INFO.email}
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center group">
                                <MessageCircle size={18} className="mr-3 text-brand-light" />
                                <a
                                    href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
                                    className="text-white hover:text-brand-light transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    WhatsApp
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <MapPin size={18} className="mr-3 text-brand-light" />
                                <span className="text-gray-100">{BUSINESS_INFO.location}</span>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-bold text-lg mb-4 text-white">Quick Links</h4>
                    <ul className="space-y-3">
                        <li>
                            <Link to="/" className="text-white hover:text-brand-light transition-colors">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-white hover:text-brand-light transition-colors">About Us</Link>
                        </li>
                        <li>
                            <Link to="/services" className="text-white hover:text-brand-light transition-colors">Our Services</Link>
                        </li>
                        <li>
                            <Link to="/gallery" className="text-white hover:text-brand-light transition-colors">Gallery</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="text-white hover:text-brand-light transition-colors">Get a Free Quote</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="text-center py-6 border-t border-brand-dark mt-4">
                <div className="flex justify-center space-x-6 mb-4">
                    <a
                        href={SOCIAL_MEDIA.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-brand-light transition-colors p-2 rounded-full bg-white/10 hover:bg-white/20"
                        title="Follow us on Facebook"
                    >
                        <Facebook size={24} />
                    </a>
                    <a
                        href={SOCIAL_MEDIA.tiktok}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-brand-light transition-colors p-2 rounded-full bg-white/10 hover:bg-white/20"
                        title="Follow us on TikTok"
                    >
                        {/* Custom SVG for TikTok if not in lucide-react or just using a placeholder if needed */}
                        <svg
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-6 h-6"
                        >
                            <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                        </svg>
                    </a>
                </div>
                <p className="text-gray-200">© {new Date().getFullYear()} Perfect Care Lawn & Gardening. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
