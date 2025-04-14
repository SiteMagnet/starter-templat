// app/components/JourneyTab.tsx
"use client";
import "./JourneyTab.css"
import React from "react";

const JourneyTab = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Client Onboarding Journey</h2>
      <ul className="space-y-4">
        {[
          "Step 1: Brand Story Form",
          "Step 2: Website Design Intake",
          "Step 3: Content Creation Review",
          "Step 4: Website Preview",
          "Step 5: Lead Generation Kickoff",
          "Step 6: Results Tracker",
        ].map((step, idx) => (
          <li
            key={idx}
            className="bg-white rounded-xl shadow-md p-4 border border-gray-200 hover:shadow-lg transition"
          >
            <span className="font-medium">{step}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JourneyTab;
