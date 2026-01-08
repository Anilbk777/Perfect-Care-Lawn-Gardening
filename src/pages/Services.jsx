import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import CTAButton from "../components/CTAButton.jsx";
import { SEO_CONFIG } from "../utils/seo";
import { BUSINESS_INFO } from "../utils/constants";
import { Leaf, Flower2, Scissors, Ban, Sprout, Wind, Calendar, Zap, Gift } from "lucide-react";

const Services = () => {
    const services = [
        {
            title: "Lawn Mowing",
            description: "Professional lawn mowing with precision cutting, clean edges, and grass collection. We offer regular scheduled mowing or one-off services to suit your needs. Your lawn will look pristine with perfectly striped patterns.",
            image: "/images/service-mowing.jpg",
            icon: <Leaf className="w-full h-full" />,
        },
        {
            title: "Garden Maintenance",
            description: "Complete garden care including weeding, deadheading, pruning, mulching, and seasonal planting. We keep your garden beds looking healthy, tidy, and beautiful year-round with regular maintenance visits.",
            image: "/images/service-maintenance.jpg",
            icon: <Flower2 className="w-full h-full" />,
        },
        {
            title: "Hedge Trimming",
            description: "Expert hedge and shrub trimming for a neat, professional appearance. We shape and maintain hedges of all sizes, ensuring clean lines and healthy growth. Perfect for privacy hedges and decorative shrubs.",
            image: "/images/service-trimming.jpg",
            icon: <Scissors className="w-full h-full" />,
        },
        {
            title: "Weed Control",
            description: "Effective weed removal and control for lawns, garden beds, and pathways. We use safe, proven methods to eliminate weeds and prevent them from returning, keeping your outdoor space clean and healthy.",
            image: "/images/weed-control.webp",
            icon: <Ban className="w-full h-full" />,
        },
        {
            title: "Lawn Fertilization",
            description: "Professional lawn fertilization to promote lush, green growth. We use quality fertilizers tailored to your lawn's specific needs and the season, ensuring healthy, vibrant grass all year long.",
            image: "/images/Lawn+Fertilization.webp",
            icon: <Sprout className="w-full h-full" />,
        },
        {
            title: "Seasonal Clean-ups",
            description: "Comprehensive seasonal garden clean-ups including leaf removal, debris clearing, pruning, and preparation for the next season. Keep your property looking its best through every season.",
            image: "/images/seasonal-cleanups.webp",
            icon: <Wind className="w-full h-full" />,
        },
    ];

    return (
        <>
            <SEOHead
                title={SEO_CONFIG.services.title}
                description={SEO_CONFIG.services.description}
                keywords={SEO_CONFIG.services.keywords}
            />

            <section className="px-4 py-16 max-w-7xl mx-auto">
                {/* Page Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Our Lawn & Gardening Services
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Professional lawn care and garden maintenance services in {BUSINESS_INFO.location}.
                        All our services come with a <strong>free quote</strong> - no pricing surprises!
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

                {/* Pricing Information */}
                <div className="bg-brand-light p-8 rounded-lg mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                        How Our Pricing Works
                    </h2>
                    <div className="max-w-3xl mx-auto space-y-4 text-gray-700">
                        <p>
                            We believe in transparent, fair pricing with no hidden fees. Every property is
                            unique, so we provide customized quotes based on:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>The size of your lawn or garden</li>
                            <li>The type of service required</li>
                            <li>The frequency of visits (regular or one-off)</li>
                            <li>Any special requirements or access considerations</li>
                        </ul>
                        <div className="bg-white p-6 rounded-md border-2 border-brand mt-6">
                            <p className="text-center text-lg font-semibold text-brand mb-2">
                                Get Your Free Quote Today
                            </p>
                            <p className="text-center text-gray-600">
                                Call, WhatsApp, or fill out our contact form - we'll provide a clear,
                                competitive quote with no obligation.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Service Packages Info */}
                <div className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                        Flexible Service Options
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center p-6 bg-white rounded-lg shadow-md">
                            <div className="bg-brand-light w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-brand">
                                <Calendar className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Regular Service</h3>
                            <p className="text-gray-600">
                                Weekly, fortnightly, or monthly scheduled visits. Perfect for maintaining
                                your lawn year-round with consistent care.
                            </p>
                        </div>

                        <div className="text-center p-6 bg-white rounded-lg shadow-md">
                            <div className="bg-brand-light w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-brand">
                                <Zap className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">One-Off Service</h3>
                            <p className="text-gray-600">
                                Need a quick tidy-up before an event or after being away? We offer
                                one-off services with no ongoing commitment.
                            </p>
                        </div>

                        <div className="text-center p-6 bg-white rounded-lg shadow-md">
                            <div className="bg-brand-light w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-brand">
                                <Gift className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Custom Packages</h3>
                            <p className="text-gray-600">
                                Combine multiple services for comprehensive care. We'll create a
                                package tailored to your specific needs.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center bg-brand text-white p-8 rounded-lg">
                    <h2 className="text-3xl font-bold mb-4">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl mb-6 text-gray-100">
                        Contact us today for your free, no-obligation quote
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <CTAButton
                            href={`tel:${BUSINESS_INFO.phone}`}
                            label="Call Now"
                            variant="secondary"
                        />
                        <CTAButton
                            href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
                            label="WhatsApp Us"
                            variant="secondary"
                        />
                        <Link to="/contact">
                            <CTAButton
                                href="/contact"
                                label="Get a Free Quote"
                                variant="secondary"
                            />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;
