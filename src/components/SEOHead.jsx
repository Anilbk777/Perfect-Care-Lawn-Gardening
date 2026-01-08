import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";
import { SITE_INFO } from "../utils/seo";

const SEOHead = ({ title, description, keywords, image, url }) => {
    const fullTitle = title || "Perfect Care Lawn & Gardening | New Zealand";
    const fullDescription = description || "Professional lawn mowing and gardening services in New Zealand.";
    const fullImage = image || SITE_INFO.defaultImage;
    const fullUrl = url || SITE_INFO.siteUrl;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={fullDescription} />
            {keywords && <meta name="keywords" content={keywords} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={fullDescription} />
            <meta property="og:image" content={fullImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={fullUrl} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={fullDescription} />
            <meta property="twitter:image" content={fullImage} />
        </Helmet>
    );
};

SEOHead.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.string,
    image: PropTypes.string,
    url: PropTypes.string,
};

export default SEOHead;
