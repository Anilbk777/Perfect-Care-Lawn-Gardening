import { useState } from "react";
import PropTypes from "prop-types";
import { Play } from "lucide-react";

const GalleryCard = ({ image, alt, type = "image" }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Gallery Card */}
            <div
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setIsOpen(true)}
            >
                <div className="aspect-square overflow-hidden bg-gray-100 relative">
                    {type === "video" ? (
                        <>
                            <video
                                src={`${image}#t=0.1`}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                muted
                                preload="metadata"
                                playsInline
                            />
                            <div className="absolute inset-0 flex items-center justify-center z-10 w-full h-full">
                                <div className="bg-white/30 backdrop-blur-sm rounded-full p-4 group-hover:bg-white/50 transition-all duration-300 flex items-center justify-center">
                                    <Play className="w-12 h-12 text-white fill-white" />
                                </div>
                            </div>
                        </>
                    ) : (
                        <img
                            src={image}
                            alt={alt}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            loading="lazy"
                        />
                    )}
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-semibold">
                        {type === "video" ? "Watch Video" : "View"}
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
                        {type === "video" ? (
                            <video
                                src={image}
                                className="max-w-full max-h-[80vh] mx-auto rounded-lg object-contain"
                                controls
                                autoPlay
                            />
                        ) : (
                            <img
                                src={image}
                                alt={alt}
                                className="max-w-full max-h-[80vh] mx-auto rounded-lg object-contain"
                            />
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
    type: PropTypes.oneOf(["image", "video"]),
};

export default GalleryCard;
