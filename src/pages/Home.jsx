import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead.jsx";
import Hero from "../components/Hero.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import CTAButton from "../components/CTAButton.jsx";
import { SEO_CONFIG } from "../utils/seo";
import { BUSINESS_INFO } from "../utils/constants";
import { Leaf, Flower2, Scissors, Check, BadgeDollarSign, Star } from "lucide-react";

const Home = () => {
    const services = [
        {
            title: "Lawn Mowing",
            description: "Professional lawn mowing with precision cutting and clean edges. Regular or one-off services available.",
            image: "/images/service-mowing.jpg",
            icon: <Leaf className="w-full h-full" />,
        },
        {
            title: "Garden Maintenance",
            description: "Complete garden care including weeding, pruning, mulching, and seasonal planting.",
            image: "/images/service-maintenance.jpg",
            icon: <Flower2 className="w-full h-full" />,
        },
        {
            title: "Hedge Trimming",
            description: "Expert hedge and shrub trimming for a neat, professional appearance year-round.",
            image: "/images/service-trimming.jpg",
            icon: <Scissors className="w-full h-full" />,
        },
    ];

    return (
        <>
            <SEOHead
                title={SEO_CONFIG.home.title}
                description={SEO_CONFIG.home.description}
                keywords={SEO_CONFIG.home.keywords}
            />


            {/* Hero Section */}
            <Hero
                title="Professional Lawn Mowing & Gardening Services in Tauranga"
                subtitle="Transform your outdoor space with our reliable, affordable lawn care and gardening services. Serving Tauranga and surrounding areas."
            />

            {/* Why Choose Us Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why Choose Perfect Care?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            We're committed to delivering exceptional lawn and garden care with a personal touch
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                            <div className="bg-brand-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-brand">
                                <Check className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Reliable & Trustworthy</h3>
                            <p className="text-gray-600">
                                On-time service you can count on. We treat your property with the same care as our own.
                            </p>
                        </div>

                        <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                            <div className="bg-brand-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-brand">
                                <BadgeDollarSign className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Fair Pricing</h3>
                            <p className="text-gray-600">
                                Competitive rates with no hidden fees. Get a free quote before we start any work.
                            </p>
                        </div>

                        <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                            <div className="bg-brand-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-brand">
                                <Star className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Quality Work</h3>
                            <p className="text-gray-600">
                                Professional results every time. Your satisfaction is our top priority.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Preview Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Professional lawn and garden care tailored to your needs
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                title={service.title}
                                description={service.description}
                                image={service.image}
                                icon={service.icon}
                            />
                        ))}
                    </div>

                    <div className="text-center">
                        <Link to="/services">
                            <CTAButton
                                href="/services"
                                label="View All Services"
                                variant="primary"
                            />
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-brand text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready for a Beautiful Lawn?
                    </h2>
                    <p className="text-xl mb-8 text-gray-100">
                        Get your free quote today - no obligation, no hassle
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <CTAButton
                            href={`tel:${BUSINESS_INFO.phone}`}
                            label="Call Now"
                            variant="secondary"
                            className="text-lg px-8 py-4"
                        />
                        <CTAButton
                            href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
                            label="Message on WhatsApp"
                            variant="secondary"
                            className="text-lg px-8 py-4"
                        />
                        <Link to="/contact">
                            <CTAButton
                                href="/contact"
                                label="Get a Free Quote"
                                variant="secondary"
                                className="text-lg px-8 py-4"
                            />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
