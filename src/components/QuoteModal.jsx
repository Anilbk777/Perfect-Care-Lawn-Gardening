import { useState, useEffect } from "react";
import { X, FileText } from "lucide-react";

const QuoteModal = ({ isOpen, onClose }) => {
    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div
                className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col relative overflow-hidden animate-in fade-in zoom-in-95 duration-200"
                role="dialog"
                aria-modal="true"
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-white z-10">
                    <div className="flex items-center space-x-3">
                        <div className="bg-brand/10 p-2 rounded-lg">
                            <FileText className="text-brand w-6 h-6" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-gray-900">
                                Request a Detailed Quote
                            </h2>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
                        aria-label="Close dialog"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Body / Iframe Container */}
                <div className="flex-1 overflow-y-auto w-full bg-gray-50/50">
                    <div className="w-full flex justify-center py-6 px-2">
                        <iframe
                            src="https://docs.google.com/forms/d/e/1FAIpQLSdkJs-n7XbprT-EYShqqvsS44SCdfry_nrrZ1GZQG617yT_6A/viewform?embedded=true&hl=en"
                            width="640"
                            height="2159"
                            frameBorder="0"
                            marginHeight="0"
                            marginWidth="0"
                            className="w-full max-w-[640px] bg-transparent"
                            title="Detailed Quote Request Form"
                        >
                            Loading…
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuoteModal;
