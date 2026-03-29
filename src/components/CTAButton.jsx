import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CTAButton = ({ href, label, variant = "primary", className = "", ...props }) => {
    const base =
        "inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold transition duration-200 shadow-md hover:shadow-lg";

    const variants = {
        primary: "bg-brand text-white hover:bg-brand-dark hover:text-white",
        secondary: "bg-white text-brand border-2 border-brand hover:bg-brand-light hover:text-brand",
    };

    const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
    const combinedClasses = `${base} ${variants[variant]} ${className}`;

    if (isExternal) {
        return (
            <a
                href={href}
                className={combinedClasses}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                {...props}
            >
                {label}
            </a>
        );
    }

    return (
        <Link
            to={href}
            className={combinedClasses}
            aria-label={label}
            {...props}
        >
            {label}
        </Link>
    );
};

CTAButton.propTypes = {
    href: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(["primary", "secondary"]),
    className: PropTypes.string,
};

export default CTAButton;
