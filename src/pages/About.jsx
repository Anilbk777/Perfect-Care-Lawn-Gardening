import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead.jsx";
import CTAButton from "../components/CTAButton.jsx";
import { SEO_CONFIG } from "../utils/seo";
import { BUSINESS_INFO } from "../utils/constants";
import { CheckCircle2 } from "lucide-react";

const About = () => {
    return (
        <>
            <SEOHead
                title={SEO_CONFIG.about.title}
                description={SEO_CONFIG.about.description}
                keywords={SEO_CONFIG.about.keywords}
            />

            <section className="px-4 py-16 max-w-7xl mx-auto">
                <div className="max-w-4xl mx-auto">
                    {/* Page Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            About Perfect Care Lawn & Gardening
                        </h1>
                        <p className="text-xl text-gray-600">
                            Your trusted local lawn and garden care specialists in {BUSINESS_INFO.location}
                        </p>
                    </div>

                    {/* Our Story */}
                    <div className="mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            Our Story
                        </h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                Perfect Care Lawn & Gardening was founded with a simple mission: to provide
                                exceptional lawn and garden care services to homeowners and businesses across Tauranga.
                                We understand that your outdoor space is an extension of your home, and it deserves
                                the same level of care and attention.
                            </p>
                            <p>
                                What started as a one-person operation has grown into a trusted name in lawn care,
                                but we've never lost sight of our core values: reliability, quality, and personal
                                service. Every lawn we mow and every garden we tend to receives our full attention
                                and expertise.
                            </p>
                        </div>
                    </div>

                    {/* Our Values */}
                    <div className="mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                            Our Values
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-brand-light p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-brand mb-2">Quality First</h3>
                                <p className="text-gray-700">
                                    We take pride in our work and never cut corners. Your lawn and garden
                                    receive professional-grade care on every visit.
                                </p>
                            </div>

                            <div className="bg-brand-light p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-brand mb-2">Reliability</h3>
                                <p className="text-gray-700">
                                    We show up when we say we will. Consistent, dependable service you
                                    can count on week after week, season after season.
                                </p>
                            </div>

                            <div className="bg-brand-light p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-brand mb-2">Fair Pricing</h3>
                                <p className="text-gray-700">
                                    Transparent, competitive rates with no hidden fees. We believe quality
                                    lawn care should be accessible to everyone.
                                </p>
                            </div>

                            <div className="bg-brand-light p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-brand mb-2">Local Focus</h3>
                                <p className="text-gray-700">
                                    As a local business, we're invested in our community. Your neighbors
                                    are our neighbors, and we treat every property with respect.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Hire a Professional */}
                    <div className="mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            Why Hire a Professional?
                        </h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                While DIY lawn care might seem cost-effective, professional service saves you
                                time, effort, and often money in the long run. Here's why:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>
                                    <strong>Save Your Time:</strong> Spend your weekends doing what you love,
                                    not mowing the lawn
                                </li>
                                <li>
                                    <strong>Professional Equipment:</strong> We use commercial-grade tools that
                                    deliver superior results
                                </li>
                                <li>
                                    <strong>Expertise:</strong> We know the right techniques for your lawn type,
                                    season, and conditions
                                </li>
                                <li>
                                    <strong>Consistency:</strong> Regular professional care keeps your lawn healthy
                                    and beautiful year-round
                                </li>
                                <li>
                                    <strong>Property Value:</strong> A well-maintained lawn enhances your home's
                                    curb appeal and value
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Service Areas */}
                    <div className="mb-12 bg-gray-50 p-6 rounded-lg">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            Areas We Serve
                        </h2>
                        <p className="text-gray-700 mb-3">
                            We proudly serve the following areas in and around {BUSINESS_INFO.location}:
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-gray-700">
                            {BUSINESS_INFO.serviceAreas.map((area, index) => (
                                <div key={index} className="flex items-center">
                                    <CheckCircle2 className="text-brand w-4 h-4 mr-2" />
                                    {area}
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-600 mt-4 text-sm">
                            Don't see your area listed? <Link to="/contact" className="text-brand hover:underline">Contact us</Link> -
                            we're always expanding our service areas!
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="text-center bg-brand text-white p-8 rounded-lg">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Ready to Experience the Difference?
                        </h2>
                        <p className="text-lg mb-6 text-gray-100">
                            Get your free, no-obligation quote today
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <CTAButton
                                href={`tel:${BUSINESS_INFO.phone}`}
                                label="Call Now"
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
                </div>
            </section>
        </>
    );
};

export default About;
