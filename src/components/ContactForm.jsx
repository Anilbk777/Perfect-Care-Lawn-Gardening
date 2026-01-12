import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import { WhatsAppSender } from "../services/WhatsAppSender";
import { BUSINESS_INFO } from "../utils/constants";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [status, setStatus] = useState({
        submitting: false,
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
                error: true,
                message: "Please fill in all required fields.",
            });
            return;
        }

        // Phone validation (exactly 10 digits if provided)
        if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
            setStatus({
                submitting: false,
                error: true,
                message: "Phone number must be exactly 10 digits (e.g., 0211234567).",
            });
            return;
        }

        setStatus({ submitting: true, error: false, message: "" });

        try {
            const sender = new WhatsAppSender(BUSINESS_INFO.whatsapp);
            await sender.send(formData);

            setStatus({
                submitting: false,
                error: false,
                message: "", // No success message needed as it typically opens a new tab immediately
            });

            // Optional: Reset form or keep it filled? usually better to keep it filled in case they come back.
            // But for a "Sent" feeling, let's reset or just leave it. 
            // In a redirection flow, it's safer to leave the data or clear it. Let's clear it to indicate action taken.
            setFormData({
                name: "",
                email: "",
                phone: "",
                message: "",
            });

        } catch (error) {
            console.error("Submission Error:", error);
            setStatus({
                submitting: false,
                error: true,
                message: error.message || "Failed to open WhatsApp.",
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
                <p className="text-xs text-gray-500 mt-1 flex items-center">
                    <MessageCircle size={12} className="mr-1" />
                    If you have photos, you can attach them in the WhatsApp chat after clicking send.
                </p>
            </div>

            {/* Status Messages */}
            {status.message && (
                <div
                    className={`p-4 rounded-md flex items-start space-x-2 ${status.error
                        ? "bg-red-50 text-red-800 border border-red-200"
                        : "bg-green-50 text-green-800 border border-green-200"
                        }`}
                >
                    <span>{status.message}</span>
                </div>
            )}

            {/* Submit Button */}
            <button
                type="submit"
                disabled={status.submitting}
                className={`w-full py-3 px-6 rounded-md font-semibold text-white transition shadow-md hover:shadow-lg flex items-center justify-center ${status.submitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#25D366] hover:bg-[#128C7E]"
                    }`}
            >
                <MessageCircle className="w-5 h-5 mr-2" />
                {status.submitting ? "Opening WhatsApp..." : "Send via WhatsApp"}
            </button>

            <p className="text-sm text-gray-500 text-center">
                We'll respond to your message on WhatsApp as soon as possible.
            </p>
        </form>
    );
};

export default ContactForm;
