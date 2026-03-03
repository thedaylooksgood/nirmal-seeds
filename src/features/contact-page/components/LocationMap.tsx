import * as React from "react"

export function LocationMap() {
    return (
        <div className="w-full h-full min-h-[280px] sm:min-h-[320px] md:min-h-[360px] rounded-sm overflow-hidden shadow-md">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14938.8!2d75.3525!3d20.6667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdf8ccb2b2b2b2b%3A0x1234567890abcdef!2sNirmal%20Seeds%20Pvt%20Ltd%2C%20Pachora%2C%20Maharashtra%20424201!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full min-h-[280px] sm:min-h-[320px] md:min-h-[360px] border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nirmal Seeds Pvt. Ltd. Location - Pachora, Jalgaon"
            />
        </div>
    )
}
