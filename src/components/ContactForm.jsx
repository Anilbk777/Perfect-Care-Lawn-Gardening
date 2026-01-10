import { useState, useRef } from "react";
import { Upload, X, Image as ImageIcon } from "lucide-react";

const ContactForm = () => {
    const fileInputRef = useRef(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [selectedImages, setSelectedImages] = useState([]);
    const [previews, setPreviews] = useState([]);

    const [status, setStatus] = useState({
        submitting: false,
        success: false,
        error: false,
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        if (files.length + selectedImages.length > 5) {
            setStatus({
                ...status,
                error: true,
                message: "Maximum 5 images allowed.",
            });
            return;
        }

        // Clear any previous image errors
        if (status.message === "Maximum 5 images allowed." || status.message.includes("is too large")) {
            setStatus({ ...status, error: false, message: "" });
        }

        const validFiles = files.filter(file => {
            if (file.size > 5 * 1024 * 1024) {
                setStatus({
                    ...status,
                    error: true,
                    message: `Image ${file.name} is too large. Max 5MB allowed.`,
                });
                return false;
            }
            return true;
        });

        const newImages = [...selectedImages, ...validFiles];
        setSelectedImages(newImages);

        const newPreviews = validFiles.map(file => URL.createObjectURL(file));
        setPreviews([...previews, ...newPreviews]);
    };

    const removeImage = (index) => {
        const newImages = [...selectedImages];
        newImages.splice(index, 1);
        setSelectedImages(newImages);

        const newPreviews = [...previews];
        URL.revokeObjectURL(newPreviews[index]);
        newPreviews.splice(index, 1);
        setPreviews(newPreviews);

        // Clear sticky image/count errors when removing
        if (status.message === "Maximum 5 images allowed." || status.message.includes("is too large")) {
            setStatus({ ...status, error: false, message: "" });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            setStatus({
                submitting: false,
                success: false,
                error: true,
                message: "Please fill in all required fields.",
            });
            return;
        }

        // Phone validation (exactly 10 digits if provided)
        if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
            setStatus({
                submitting: false,
                success: false,
                error: true,
                message: "Phone number must be exactly 10 digits (e.g., 0211234567).",
            });
            return;
        }

        setStatus({ submitting: true, success: false, error: false, message: "" });

        try {
            const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

            const submitData = new FormData();
            submitData.append("name", formData.name);
            submitData.append("email", formData.email);
            if (formData.phone) submitData.append("phone", formData.phone);
            submitData.append("message", formData.message);

            selectedImages.forEach((image) => {
                submitData.append("images", image);
            });

            const response = await fetch(`${apiBaseUrl}/api/v1/contact`, {
                method: "POST",
                body: submitData,
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.detail || "Failed to send message.");
            }

            setStatus({
                submitting: false,
                success: true,
                error: false,
                message: "Thank you! Your message and images have been sent successfully.",
            });

            // Reset form
            setFormData({
                name: "",
                email: "",
                phone: "",
                message: "",
            });
            setSelectedImages([]);
            previews.forEach(url => URL.revokeObjectURL(url));
            setPreviews([]);

            // Clear success message after 5 seconds
            setTimeout(() => {
                setStatus({ submitting: false, success: false, error: false, message: "" });
            }, 5000);

        } catch (error) {
            console.error("Submission Error:", error);
            setStatus({
                submitting: false,
                success: false,
                error: true,
                message: error.message || "Sorry, something went wrong. Please try again or call us directly.",
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand focus:border-transparent transition outline-none"
                    placeholder="John Smith"
                />
            </div>

            {/* Email */}
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand focus:border-transparent transition outline-none"
                    placeholder="john@example.com"
                />
            </div>

            {/* Phone */}
            <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number (10 digits)
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand focus:border-transparent transition outline-none"
                    placeholder="0211234567"
                />
            </div>

            {/* Message */}
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message <span className="text-red-500">*</span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand focus:border-transparent transition resize-none outline-none"
                    placeholder="Tell us about your lawn care needs..."
                />
            </div>

            {/* Image Upload */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Attach Images (Optional)
                </label>
                <div
                    onClick={() => fileInputRef.current.click()}
                    className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-brand transition bg-gray-50"
                >
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleImageChange}
                        multiple
                        accept="image/*"
                        className="hidden"
                    />
                    <div className="flex flex-col items-center">
                        <Upload className="w-8 h-8 text-gray-400 mb-2" />
                        <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                        <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 5MB (Max 5 images)</p>
                    </div>
                </div>

                {/* Previews */}
                {previews.length > 0 && (
                    <div className="grid grid-cols-5 gap-2 mt-4">
                        {previews.map((url, index) => (
                            <div key={index} className="relative aspect-square rounded-md overflow-hidden border border-gray-200 group">
                                <img src={url} alt={`Preview ${index}`} className="w-full h-full object-cover" />
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        removeImage(index);
                                    }}
                                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition"
                                >
                                    <X size={12} />
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Status Messages */}
            {status.message && (
                <div
                    className={`p-4 rounded-md flex items-start space-x-2 ${status.success
                        ? "bg-green-50 text-green-800 border border-green-200"
                        : "bg-red-50 text-red-800 border border-red-200"
                        }`}
                >
                    <div className="mt-0.5">
                        {status.success ? <ImageIcon size={18} /> : <X size={18} />}
                    </div>
                    <span>{status.message}</span>
                </div>
            )}

            {/* Submit Button */}
            <button
                type="submit"
                disabled={status.submitting}
                className={`w-full py-3 px-6 rounded-md font-semibold text-white transition shadow-md hover:shadow-lg ${status.submitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-brand hover:bg-brand-dark"
                    }`}
            >
                {status.submitting ? "Sending Request..." : "Send Message"}
            </button>

            <p className="text-sm text-gray-500 text-center">
                We'll get back to you with a free quote within 24 hours.
            </p>
        </form>
    );
};

export default ContactForm;
