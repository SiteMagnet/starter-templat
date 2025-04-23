import { useState } from "react";

const ContractAgreement = ({ onAccept }) => {
  const [isAccepted, setIsAccepted] = useState(false);

  const handleAccept = () => {
    setIsAccepted(true);
    onAccept(); // This would update brand_stage to 5 or trigger a signing flow
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Site Magnet Website Design Agreement</h2>

      <div className="h-96 overflow-y-scroll border p-4 rounded bg-gray-50 text-sm space-y-4">
        <p>This Website Design Agreement ("Agreement") is made between Site Magnet ("Designer") and the Client identified below.</p>

        <p><strong>1. Project Overview</strong><br />
        Site Magnet agrees to design and develop a custom website for the Client based on the intake form, design preferences, and consultation session.</p>

        <p><strong>2. Deliverables</strong><br />
        One custom-designed website, up to 5 core pages, responsive design, SEO basics, and two rounds of revisions.</p>

        <p><strong>3. Timeline</strong><br />
        Starts after contract + deposit. Estimated 2–3 weeks. Timeline depends on client responsiveness.</p>

        <p><strong>4. Payment Terms</strong><br />
        50% deposit up front, 50% due upon final approval before site launch or delivery.</p>

        <p><strong>5. Client Responsibilities</strong><br />
        Provide content, attend consultations, give timely feedback.</p>

        <p><strong>6. Ownership & Rights</strong><br />
        Client owns site after full payment. Site Magnet may use project in portfolio.</p>

        <p><strong>7. Revisions & Maintenance</strong><br />
        Two revisions included. Extra changes may incur cost. Maintenance not included unless agreed.</p>

        <p><strong>8. Cancellation</strong><br />
        Client cancels = no refund on deposit. Designer cancels = full refund of deposit.</p>

        <p><strong>9. Legal</strong><br />
        Governed by the laws of [Insert State]. Disputes settled in [Insert City].</p>

        <p><strong>10. Signature</strong><br />
        By clicking “I Agree,” the Client agrees to the terms above.</p>
      </div>

      <button
        onClick={handleAccept}
        className="btn btn-primary w-full mt-4"
        disabled={isAccepted}
      >
        {isAccepted ? "Accepted ✔" : "I Agree & Continue"}
      </button>
    </div>
  );
};

export default ContractAgreement;
