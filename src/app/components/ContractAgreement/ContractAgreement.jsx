// pages/contract.js (or your component file)
import { useState, useRef } from "react";
import SignatureCanvas from 'react-signature-canvas';
import { supabase } from "@/lib/supabaseClient";
import { jsPDF } from 'jspdf';

const ContractAgreement = (userId) => {
  const [signatureDataUrl, setSignatureDataUrl] = useState(null);
  const [agreementAccepted, setAgreementAccepted] = useState(false);
  const signatureCanvas = useRef(null);

  const handleSaveSignature = () => {
    if (!signatureCanvas.current) {
      return;
    }
    const dataURL = signatureCanvas.current.toDataURL();
    setSignatureDataUrl(dataURL);
  };

  const handleClearSignature = () => {
    if (signatureCanvas.current) {
      signatureCanvas.current.clear();
      setSignatureDataUrl(null); // Clear the saved data URL as well
    }
  };

  const handleAccept = async () => {
    if (signatureDataUrl) {
      // 1. Generate the PDF with the signature
      const pdf = new jsPDF();
      pdf.text("Site Magnet Website Design Agreement", 10, 10);
      // Add your agreement content to the PDF
      pdf.addImage(signatureDataUrl, 'PNG', 10, 150, 100, 50); // Adjust position and size as needed

      const pdfBytes = pdf.output('arraybuffer'); // Get PDF as bytes

      // 2. Save the PDF to Supabase Storage in the 'contracts' bucket
      try {
        const { data: storageData, error: storageError } = await supabase.storage
          .from('contracts') // Use the correct bucket name here
          .upload(`${Date.now()}_signed_contract.pdf`, pdfBytes, {
            contentType: 'application/pdf',
          });

        if (storageError) {
          console.error("Error uploading PDF to storage:", storageError);
          return;
        }

        const signedContractUrl = `${supabase.storage.from('contracts').getPublicUrl(storageData.path).data.publicUrl}`;

        // 3. Save the URL of the signed PDF to your database
        const { data: dbData, error: dbError } = await supabase
          .from('contract_signatures')
          .insert([
            {
              user_id: userId,
              contract_url: signedContractUrl, // URL to the saved PDF
              signed_at: new Date().toISOString(),
              // ... other relevant data you might want to save
            },
          ]);

        if (dbError) {
          console.error("Error saving contract data to database:", dbError);
          return;
        }

        // 4. Send the PDF via email (you'll need a backend API for this)
        // await fetch('/api/send-email', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({ email: /* User's Email */, pdfUrl: signedContractUrl }),
        // });

        setAgreementAccepted(true);
        // Optionally trigger a callback to indicate completion
        // onAccept();
      } catch (error) {
        console.error("An error occurred:", error);
      }
    } else {
      alert("Please sign the contract.");
    }
  };
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Site Magnet Website Design Agreement</h2>

      <div className="h-96 overflow-y-scroll border p-4 rounded bg-gray-50 text-sm space-y-4">
        {/* Agreement content here... */}
        <p>This Website Design Agreement ("Agreement") is made between Site Magnet ("Designer") and the Client identified below.</p>
        {/* ...all other agreement points... */}
        <p><strong>10. Signature</strong><br />
        Please sign below and click “I Agree.”</p>
      </div>

      <div className="mt-6 border rounded">
        <SignatureCanvas
          ref={signatureCanvas}
          penColor="black"
          canvasProps={{ width: 500, height: 200, className: 'border-dashed border-gray-400' }}
        />
        <div className="flex justify-end p-2 space-x-2">
          <button type="button" className="btn btn-sm" onClick={handleClearSignature}>Clear</button>
          <button type="button" className="btn btn-sm btn-primary" onClick={handleSaveSignature}>Save Signature</button>
        </div>
      </div>

      <button
        onClick={handleAccept}
        className={`btn w-full mt-4 ${signatureDataUrl ? "btn-primary" : "btn-disabled opacity-50 cursor-not-allowed"}`}
        disabled={!signatureDataUrl}
      >
        {signatureDataUrl ? "I Agree & Continue" : "Sign the Contract to Continue"}
      </button>

      {agreementAccepted && (
        <div className="mt-4 text-green-500 font-semibold">
          Agreement accepted! The signed contract has been saved and (will be) sent to your email.
        </div>
      )}
    </div>
  );
};

export default ContractAgreement;
