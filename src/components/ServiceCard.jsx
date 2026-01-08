import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ServiceCard = ({ title, description, image, icon }) => {
    return (
        <div className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={image}
                    alt={`${title} service`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {icon && (
                    <div className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-md text-brand">
                        {typeof icon === "string" ? (
                            <span className="text-2xl">{icon}</span>
                        ) : (
                            <div className="w-6 h-6">{icon}</div>
                        )}
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>

                <Link
                    to="/contact"
                    className="inline-block text-brand font-semibold hover:text-brand-dark transition group-hover:underline"
                >
                    Get a Free Quote →
                </Link>
            </div>
        </div>
    );
};

ServiceCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    icon: PropTypes.node,
};

export default ServiceCard;
