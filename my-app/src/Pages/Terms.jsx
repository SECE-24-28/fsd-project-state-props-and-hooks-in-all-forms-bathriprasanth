import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const sections = [
    {
        title: '1. Booking Policy',
        content: 'All bookings are subject to availability. A confirmation email will be sent upon successful booking. Full payment or a deposit may be required to confirm the reservation. Aspire Holidays reserves the right to cancel bookings in case of non-payment.'
    },
    {
        title: '2. Cancellation Policy',
        content: 'Cancellations made 30+ days before departure receive a full refund. Cancellations within 15–29 days incur a 25% cancellation charge. Cancellations within 14 days of departure are non-refundable unless special circumstances apply.'
    },
    {
        title: '3. Refund Policy',
        content: 'Eligible refunds are processed within 7–14 business days to the original payment method. Refund amounts depend on the package terms and supplier policies. Processing fees are non-refundable.'
    },
    {
        title: '4. Privacy Policy',
        content: 'We collect personal information solely for booking, communication, and service improvement. Your data is never sold to third parties. We may share data with service providers strictly for fulfilling your booking.'
    },
    {
        title: '5. User Responsibilities',
        content: 'You are responsible for maintaining valid travel documents including passports, visas, and permits. Aspire Holidays is not liable for any denied entry or missed travel caused by incomplete or incorrect documentation.'
    },
    {
        title: '6. Travel Insurance Information',
        content: 'We strongly recommend purchasing comprehensive travel insurance covering medical emergencies, trip cancellations, and baggage loss. Aspire Holidays is not responsible for losses that would have been covered by travel insurance.'
    },
    {
        title: '7. Data Protection Policy',
        content: 'All personal data is stored securely in compliance with applicable data protection regulations. You have the right to request access, correction, or deletion of your data at any time by contacting our support team.'
    }
];

function Terms() {
    const navigate = useNavigate();

    return (
        <div style={{ background: '#f8fafc', minHeight: '100vh', padding: '50px 0' }}>
            <div className="container" style={{ maxWidth: '800px' }}>

                {/* Header */}
                <div className="text-center mb-5">
                    <h2 style={{ color: '#2c5f7a', fontWeight: 700 }}>Terms &amp; Conditions</h2>
                    <p className="text-muted">Aspire Holidays Tourism India Pvt Ltd</p>
                    <hr style={{ borderColor: '#f4845f', borderWidth: '2px', width: '80px', margin: '10px auto 0' }} />
                </div>

                {/* Policy Cards */}
                {sections.map((sec, i) => (
                    <div key={i} className="card mb-3 border-0 shadow-sm">
                        <div className="card-body p-4">
                            <h6 className="fw-bold mb-2" style={{ color: '#2c5f7a' }}>{sec.title}</h6>
                            <p className="text-muted mb-0" style={{ fontSize: '14px', lineHeight: '1.8' }}>{sec.content}</p>
                        </div>
                    </div>
                ))}

                {/* Back Button — goes to whichever page the user came from */}
                <div className="text-center mt-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="btn fw-semibold px-4 py-2"
                        style={{ background: '#f4845f', color: 'white', borderRadius: '8px' }}
                    >
                        ← Go Back
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Terms;
