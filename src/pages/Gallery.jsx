import SEOHead from "../components/SEOHead.jsx";
import GalleryCard from "../components/GalleryCard.jsx";
import CTAButton from "../components/CTAButton.jsx";
import { SEO_CONFIG } from "../utils/seo";

const Gallery = () => {
    // Gallery images - using the available generated images
    // TODO: Replace with real photos of your actual work
    const galleryImages = [
        {
            image: "/images/video1.mp4",
            alt: "Lawn care video demonstration",
            title: "Lawn Care in Action",
            type: "video",
        },
        {
            image: "/images/gallery-01.jpg",
            alt: "Beautifully maintained lawn with perfect stripes in Auckland",
            title: "Perfect Lawn Stripes",
        },
        {
            image: "/images/gallery-02.jpg",
            alt: "Large residential property lawn care in New Zealand",
            title: "Large Property Maintenance",
        },
        {
            image: "/images/service-mowing.jpg",
            alt: "Professional lawn mowing service",
            title: "Precision Lawn Mowing",
        },
        {
            image: "/images/service-maintenance.jpg",
            alt: "Colorful garden bed maintenance",
            title: "Garden Bed Care",
        },
        {
            image: "/images/service-trimming.jpg",
            alt: "Neatly trimmed hedges and shrubs",
            title: "Hedge Trimming",
        },
        {
            image: "/images/hero-lawn.jpg",
            alt: "Lush green lawn care result",
            title: "Healthy Green Lawn",
        },
        {
            image: "/images/image1.jpg",
            alt: "image1",
            title: "image1",
        },
        {
            image: "/images/image2.jpg",
            alt: "image2 ",
            title: "image2",
        },
    ];

    return (
        <>
            <SEOHead
                title={SEO_CONFIG.gallery.title}
                description={SEO_CONFIG.gallery.description}
                keywords={SEO_CONFIG.gallery.keywords}
            />

            <section className="px-4 py-16 max-w-7xl mx-auto">
                {/* Page Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Our Work Gallery
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        See the quality and care we bring to every lawn and garden we maintain.
                        Click on any image to view it larger.
                    </p>
                </div>


                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryImages.map((item, index) => (
                        <GalleryCard
                            key={index}
                            image={item.image}
                            alt={item.alt}
                            type={item.type}
                        />
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center bg-brand-light p-8 rounded-lg">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        Want Your Lawn to Look Like This?
                    </h2>
                    <p className="text-lg text-gray-700 mb-6">
                        Get in touch for a free quote and transform your outdoor space
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <CTAButton
                            href="/contact"
                            label="Get a Free Quote"
                            variant="primary"
                            className="px-8"
                        />
                        <CTAButton
                            href="/services"
                            label="View Our Services"
                            variant="secondary"
                            className="px-8"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Gallery;
