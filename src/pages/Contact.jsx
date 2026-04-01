import { useState, useRef, useEffect } from "react";
import SEOHead from "../components/SEOHead.jsx";
import MapSection from "../components/MapSection.jsx";
import { SEO_CONFIG } from "../utils/seo";
import { BUSINESS_INFO, BUSINESS_HOURS } from "../utils/constants";
import { Phone, MessageCircle, Mail, MapPin, CheckCircle2, Smartphone } from "lucide-react";

const Contact = () => {
    const [formLoadCount, setFormLoadCount] = useState(0);
    const formContainerRef = useRef(null);

    useEffect(() => {
        // When formLoadCount is 2, it means the form was just submitted.
        // We smooth-scroll to the top of the form container so the "Thank You" message is visible.
        if (formLoadCount >= 2 && formContainerRef.current) {
            formContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [formLoadCount]);

    return (
        <>
            <SEOHead
                title={SEO_CONFIG.contact.title}
                description={SEO_CONFIG.contact.description}
                keywords={SEO_CONFIG.contact.keywords}
            />

            <section className="px-4 py-16 max-w-7xl mx-auto">
                {/* Page Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Get Your Free Quote Today
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Ready to transform your lawn and garden? Contact us for a free, no-obligation quote.
                        We typically respond within 24 hours.
                    </p>
                </div>

                {/* Contact Information Cards - 3 Column Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {/* Quick Contact Methods */}
                    <div className="bg-brand text-white p-6 md:p-8 rounded-lg shadow-lg flex flex-col h-full hover:shadow-xl transition-shadow">
                        <h2 className="text-2xl font-bold mb-6">
                            Prefer to Call or Text?
                        </h2>

                        <div className="space-y-4">
                            <a
                                href={`tel:${BUSINESS_INFO.phone}`}
                                className="flex items-start p-4 bg-white/10 hover:bg-white/20 rounded-lg transition group"
                            >
                                <Phone className="w-6 h-6 mr-4 mt-1" />
                                <div>
                                    <div className="font-semibold mb-1">Call Us</div>
                                    <div className="text-gray-100 group-hover:underline">
                                        {BUSINESS_INFO.phone}
                                    </div>
                                </div>
                            </a>

                            <a
                                href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start p-4 bg-white/10 hover:bg-white/20 rounded-lg transition group"
                            >
                                <MessageCircle className="w-6 h-6 mr-4 mt-1" />
                                <div>
                                    <div className="font-semibold mb-1">WhatsApp</div>
                                    <div className="text-gray-100 group-hover:underline">
                                        Message us anytime
                                    </div>
                                </div>
                            </a>

                            <a
                                href={`mailto:${BUSINESS_INFO.email}`}
                                className="flex items-start p-4 bg-white/10 hover:bg-white/20 rounded-lg transition group"
                            >
                                <Mail className="w-6 h-6 mr-4 mt-1" />
                                <div>
                                    <div className="font-semibold mb-1">Email</div>
                                    <div className="text-gray-100 group-hover:underline break-all">
                                        {BUSINESS_INFO.email}
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Business Info */}
                    <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md border border-gray-100 flex flex-col h-full hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                            Service Area
                        </h3>
                        <div className="flex items-start mb-4">
                            <MapPin className="w-6 h-6 mr-3 text-brand mt-1 flex-shrink-0" />
                            <div>
                                <p className="text-gray-700 font-medium">
                                    {BUSINESS_INFO.location}
                                </p>
                                <p className="text-gray-600 text-sm mt-2">
                                    We serve the following areas:
                                </p>
                                <ul className="mt-2 space-y-1">
                                    {BUSINESS_INFO.serviceAreas.map((area, index) => (
                                        <li key={index} className="text-gray-700 text-sm flex items-center">
                                            <CheckCircle2 className="text-brand w-4 h-4 mr-2 flex-shrink-0" />
                                            {area}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="mt-auto pt-4 border-t border-gray-200">
                            <p className="text-gray-600 text-sm">
                                Don't see your area? Contact us anyway - we're always expanding!
                            </p>
                        </div>
                    </div>

                    {/* Business Hours */}
                    <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md border border-gray-100 flex flex-col h-full hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                            Business Hours
                        </h3>
                        <div className="space-y-3 text-gray-700">
                            <p className="flex justify-between border-b border-gray-200 pb-2">
                                <span>Monday - Friday</span>
                                <span className="font-medium">7:00 AM - 6:00 PM</span>
                            </p>
                            <p className="flex justify-between border-b border-gray-200 pb-2">
                                <span>Saturday</span>
                                <span className="font-medium">8:00 AM - 4:00 PM</span>
                            </p>
                            <p className="flex justify-between pb-2">
                                <span>Sunday</span>
                                <span className="font-medium text-gray-500">Closed</span>
                            </p>
                        </div>
                        <div className="mt-auto pt-4 border-t border-gray-200">
                            <p className="text-sm text-gray-600 flex items-start">
                                <Smartphone size={16} className="mr-2 text-brand mt-0.5 flex-shrink-0" />
                                Call or message anytime - we'll get back to you as soon as possible
                            </p>
                        </div>
                    </div>
                </div>

                {/* Google Form Section - Centered */}
                <div className="max-w-3xl mx-auto">
                    <div ref={formContainerRef} className="bg-white p-4 md:p-8 rounded-lg shadow-xl border border-gray-100">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
                            Request a Detailed Quote
                        </h2>
                        <p className="text-gray-600 text-center mb-8">
                            Fill out the form below and we will get back to you with an accurate estimate.
                        </p>
                        <div className="w-full flex justify-center overflow-hidden">
                            <iframe 
                                src="https://docs.google.com/forms/d/e/1FAIpQLSdkJs-n7XbprT-EYShqqvsS44SCdfry_nrrZ1GZQG617yT_6A/viewform?embedded=true&hl=en" 
                                width="100%" 
                                height={formLoadCount >= 2 ? "350" : "2002"} 
                                frameBorder="0" 
                                marginHeight="0" 
                                marginWidth="0"
                                onLoad={() => setFormLoadCount(prev => prev + 1)}
                                className="w-full max-w-[640px] transition-all duration-500 ease-in-out"
                            >
                                Loading…
                            </iframe>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="mt-16">
                    <MapSection />
                </div>

                {/* FAQ Section */}
                <div className="mt-16 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                                How quickly can you provide a quote?
                            </h3>
                            <p className="text-gray-700">
                                We typically respond to quote requests within 24 hours. For urgent requests,
                                call or WhatsApp us directly for a faster response.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                                Do you offer one-off services or only regular maintenance?
                            </h3>
                            <p className="text-gray-700">
                                We offer both! Whether you need ongoing weekly care or a one-time tidy-up,
                                we're happy to help with no long-term commitment required.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                                What if I'm not home when you visit?
                            </h3>
                            <p className="text-gray-700">
                                No problem! Most of our clients aren't home during service. As long as we
                                can access your lawn and garden, we can complete the work. We'll update you
                                when we're done.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                                Do you bring your own equipment?
                            </h3>
                            <p className="text-gray-700">
                                Yes! We bring all professional-grade equipment needed for the job, including
                                mowers, trimmers, and tools. You don't need to provide anything.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
