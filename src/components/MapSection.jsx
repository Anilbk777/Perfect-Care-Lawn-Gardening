const MapSection = () => {
    return (
        <section className="w-full bg-gray-50 py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Find Us Locally
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Based in Tauranga, we serve the wider local community.
                        Check our location on the map below.
                    </p>
                </div>

                <div className="w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg bg-gray-200">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3157.0384090989246!2d176.161257!3d-37.695297000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6ddb7236083a59%3A0xea400e28aa6a1549!2sPerfect%20care%20Lawn%20%26Gardening!5e0!3m2!1sen!2snz!4v1767450083892!5m2!1sen!2snz"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Perfect Care Lawn & Gardening Location"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default MapSection;
