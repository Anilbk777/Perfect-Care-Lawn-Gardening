import PropTypes from "prop-types";
import CTAButton from "./CTAButton.jsx";
import { BUSINESS_INFO } from "../utils/constants";

const Hero = ({
    title,
    subtitle,
    backgroundImage = "/images/hero-lawn.jpg",
    showCTA = true,
}) => {
    return (
        <section className="relative min-h-[550px] md:h-[600px] flex items-center overflow-hidden">
            {/* Animated Background Container */}
            <div
                className="absolute inset-0 bg-cover bg-center animate-ken-burns"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>

            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
                <div className="max-w-2xl">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
                            {subtitle}
                        </p>
                    )}

                    {showCTA && (
                        <div className="flex flex-col sm:flex-row gap-4">
                            <CTAButton
                                href={`tel:${BUSINESS_INFO.phone}`}
                                label="Call Now"
                                variant="primary"
                                className="text-lg px-8 py-4 w-full sm:w-auto"
                            />
                            <CTAButton
                                href="/contact"
                                label="Get a Free Quote"
                                variant="secondary"
                                className="text-lg px-8 py-4 bg-white text-brand hover:bg-gray-100 w-full sm:w-auto"
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

Hero.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    backgroundImage: PropTypes.string,
    showCTA: PropTypes.bool,
};

export default Hero;
