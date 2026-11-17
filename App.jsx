import React, { useState } from 'react';
import useSiteEffects from './hooks/useSiteEffects';
import Header from './components/Header';
import Hero from './components/Hero';
import TradeStrip from './components/TradeStrip';
import About from './components/About';
import Verticals from './components/Verticals';
import Approach from './components/Approach';
import Band from './components/Band';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';
import WhatsAppChat from './components/WhatsAppChat';
import ChatBot from './components/ChatBot';
import TopBar from './components/TopBar';

export default function App() {
  useSiteEffects();
  const [activeVertical, setActiveVertical] = useState(0); // shared by Hero + Verticals

  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero onSelectVertical={setActiveVertical} />
        <TradeStrip />
        <About />
        <Verticals selected={activeVertical} setSelected={setActiveVertical} />
        <Approach />
        <Band />
        <Process />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
      <WhatsAppChat/>
      <ChatBot/>
    </>
  );
}