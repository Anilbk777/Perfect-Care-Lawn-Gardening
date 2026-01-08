import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

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

        setStatus({ submitting: true, success: false, error: false, message: "" });

        try {
            // EmailJS configuration from environment variables
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            // Check if EmailJS is configured
            if (!serviceId || !templateId || !publicKey ||
                serviceId === "your_service_id_here") {
                setStatus({
                    submitting: false,
                    success: false,
                    error: true,
                    message: "Contact form is not configured yet. Please call or WhatsApp us instead.",
                });
                return;
            }

            // Send email via EmailJS
            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                },
                publicKey
            );

            setStatus({
                submitting: false,
                success: true,
                error: false,
                message: "Thank you! We'll get back to you soon.",
            });

            // Reset form
            setFormData({
                name: "",
                email: "",
                phone: "",
                message: "",
            });

            // Clear success message after 5 seconds
            setTimeout(() => {
                setStatus({ submitting: false, success: false, error: false, message: "" });
            }, 5000);

        } catch (error) {
            console.error("EmailJS Error:", error);
            setStatus({
                submitting: false,
                success: false,
                error: true,
                message: "Sorry, something went wrong. Please try calling us instead.",
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand focus:border-transparent transition"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand focus:border-transparent transition"
                    placeholder="john@example.com"
                />
            </div>

            {/* Phone */}
            <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand focus:border-transparent transition"
                    placeholder="+64 21 123 4567"
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
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand focus:border-transparent transition resize-none"
                    placeholder="Tell us about your lawn care needs..."
                />
            </div>

            {/* Status Messages */}
            {status.message && (
                <div
                    className={`p-4 rounded-md ${status.success
                            ? "bg-green-50 text-green-800 border border-green-200"
                            : "bg-red-50 text-red-800 border border-red-200"
                        }`}
                >
                    {status.message}
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
                {status.submitting ? "Sending..." : "Send Message"}
            </button>

            <p className="text-sm text-gray-500 text-center">
                We typically respond within 24 hours
            </p>
        </form>
    );
};

export default ContactForm;
