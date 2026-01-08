import SEOHead from "../components/SEOHead.jsx";
import ContactForm from "../components/ContactForm.jsx";
import MapSection from "../components/MapSection.jsx";
import { SEO_CONFIG } from "../utils/seo";
import { BUSINESS_INFO, BUSINESS_HOURS } from "../utils/constants";
import { Phone, MessageCircle, Mail, MapPin, CheckCircle2, Smartphone } from "lucide-react";

const Contact = () => {
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

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="order-2 md:order-1">
                        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                Send Us a Message
                            </h2>
                            <ContactForm />
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="order-1 md:order-2">
                        {/* Quick Contact Methods */}
                        <div className="bg-brand text-white p-6 md:p-8 rounded-lg shadow-lg mb-6">
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
                        <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md mb-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Service Area
                            </h3>
                            <div className="flex items-start mb-4">
                                <MapPin className="w-6 h-6 mr-3 text-brand mt-1" />
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
                                                <CheckCircle2 className="text-brand w-4 h-4 mr-2" />
                                                {area}
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="text-gray-600 text-sm mt-3">
                                        Don't see your area? Contact us anyway - we're always expanding!
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Business Hours */}
                        <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Business Hours
                            </h3>
                            <div className="space-y-2 text-gray-700">
                                <p className="flex justify-between">
                                    <span>Monday - Friday</span>
                                    <span className="font-medium">7:00 AM - 6:00 PM</span>
                                </p>
                                <p className="flex justify-between">
                                    <span>Saturday</span>
                                    <span className="font-medium">8:00 AM - 4:00 PM</span>
                                </p>
                                <p className="flex justify-between">
                                    <span>Sunday</span>
                                    <span className="font-medium text-gray-500">Closed</span>
                                </p>
                            </div>
                            <p className="text-sm text-gray-600 mt-4 flex items-center">
                                <Smartphone size={16} className="mr-2 text-brand" />
                                Call or message anytime - we'll get back to you as soon as possible
                            </p>
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
