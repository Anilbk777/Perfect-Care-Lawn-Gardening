import PropTypes from "prop-types";

const CTAButton = ({ href, label, variant = "primary", className = "" }) => {
    const base =
        "inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold transition duration-200 shadow-md hover:shadow-lg";

    const variants = {
        primary: "bg-brand text-white hover:bg-brand-dark hover:text-white",
        secondary: "bg-white text-brand border-2 border-brand hover:bg-brand-light hover:text-brand",
    };

    return (
        <a
            href={href}
            className={`${base} ${variants[variant]} ${className}`}
            aria-label={label}
        >
            {label}
        </a>
    );
};

CTAButton.propTypes = {
    href: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(["primary", "secondary"]),
    className: PropTypes.string,
};

export default CTAButton;
