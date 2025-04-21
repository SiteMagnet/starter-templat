"use client";
import "./JourneyTab.css";
import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import BrandStory from "../BrandStory";

const JourneyTab = () => {
  const [fullName, setFullName] = useState(null);
  const [brandStage, setBrandStage] = useState(null);
  const [userId, setUserId] = useState(null); // ← ADD THIS

  useEffect(() => {
    const fetchUserData = async () => {
      const {
        data: { session },
        error: sessionError,
      } = await supabase.auth.getSession();

      if (sessionError || !session?.user) {
        console.error("Session error:", sessionError);
        return;
      }

      const authUserId = session.user.id;
      setUserId(authUserId); // ← SET IT HERE

      const { data: userData, error: userError } = await supabase
        .from("users")
        .select("full_name, brand_stage")
        .eq("id", authUserId)
        .single();

      if (userError) {
        console.error("User fetch error:", userError);
      } else {
        console.log("Fetched userData:", userData);
        setFullName(userData?.full_name);
        setBrandStage(Number(userData?.brand_stage));
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">
        {fullName
          ? `Welcome, ${fullName} — Client Onboarding Journey`
          : "Client Onboarding Journey"}
      </h2>

      {brandStage === 1 && userId ? (
        <BrandStory userId={userId} />
      ) : (
        <p className="text-gray-600">
          {brandStage !== null
            ? "You're past Step 1. Keep an eye out for the next phase of your journey!"
            : "Loading your journey..."}
        </p>
      )}
    </div>
  );
};

export default JourneyTab;
