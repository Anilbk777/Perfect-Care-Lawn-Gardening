import { useState } from "react";
import PropTypes from "prop-types";

const GalleryCard = ({ image, alt, title }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Gallery Card */}
            <div
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setIsOpen(true)}
            >
                <div className="aspect-square overflow-hidden">
                    <img
                        src={image}
                        alt={alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                    />
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-semibold">
                        View
                    </span>
                </div>
            </div>

            {/* Lightbox Modal */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
                    onClick={() => setIsOpen(false)}
                >
                    <button
                        className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 focus:outline-none"
                        onClick={() => setIsOpen(false)}
                        aria-label="Close lightbox"
                    >
                        ×
                    </button>

                    <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={image}
                            alt={alt}
                            className="w-full h-auto rounded-lg"
                        />
                        {title && (
                            <p className="text-white text-center mt-4 text-lg">{title}</p>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

GalleryCard.propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string,
};

export default GalleryCard;
