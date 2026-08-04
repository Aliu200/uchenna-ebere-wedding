"use client";

import { useState } from "react";

import WelcomeScreen from "@/components/WelcomeScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Story from "@/components/Story";
import WeddingDetails from "@/components/WeddingDetails";
import Gallery from "@/components/Gallery";
import RSVP from "@/components/RSVP";
import Footer from "@/components/Footer";
import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);

  return (
    <>
      {!isInvitationOpen && (
        <WelcomeScreen
          onOpen={() => setIsInvitationOpen(true)}
        />
      )}

      {isInvitationOpen && (
        <>
          <MusicPlayer />
          <Navbar />
          <Hero />
          <Countdown />
          <Story />
          <WeddingDetails />
          <Gallery />
          <RSVP />
          <Footer />
        </>
      )}
    </>
  );
}