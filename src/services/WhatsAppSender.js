/**
 * WhatsAppSender Service
 * 
 * Responsible for constructing the WhatsApp URL and redirecting the user.
 * Follows SRP: Only handles message formatting and redirection.
 */
export class WhatsAppSender {
    /**
     * @param {string} phoneNumber - The destination phone number (international format, no +)
     */
    constructor(phoneNumber) {
        if (!phoneNumber) {
            throw new Error("WhatsAppSender requires a phone number.");
        }
        this.phoneNumber = phoneNumber;
    }

    /**
     * Formats the message body from form data.
     * @param {Object} data - The form data
     * @returns {string} - The formatted message
     */
    _formatMessage(data) {
        const { name, email, phone, message } = data;

        return `*New Quote Request from Website* 🌿\n\n` +
            `*Name:* ${name}\n` +
            `*Email:* ${email}\n` +
            `*Phone:* ${phone || "Not provided"}\n\n` +
            `*Message:*\n${message}\n\n` +
            `----------------\n` +
            `*Note:* If you have photos, please attach them here in the chat.`;
    }

    /**
     * Sends the message via WhatsApp Web/App
     * @param {Object} data - The form data
     */
    async send(data) {
        try {
            const text = this._formatMessage(data);
            const encodedText = encodeURIComponent(text);
            const url = `https://wa.me/${this.phoneNumber}?text=${encodedText}`;

            // Open in new tab
            const newWindow = window.open(url, '_blank', 'noopener,noreferrer');

            if (newWindow) {
                newWindow.opener = null;
            } else {
                // Fallback if popup blocked (though usually typically triggered by user action, so okay)
                window.location.href = url;
            }

            return { success: true };
        } catch (error) {
            console.error("WhatsApp Redirection Error:", error);
            throw new Error("Failed to open WhatsApp. Please check your popup blocker settings.");
        }
    }
}
