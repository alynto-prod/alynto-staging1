import React from 'react';
import { ConfigProvider, theme, Layout } from 'antd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ProductGrid from './components/ProductGrid';
import AgeGate from './components/AgeGate';
import AgencyLogin from './components/AgencyLogin';
import AgencyPricing from './components/AgencyPricing';
import AgencyCTA from './components/AgencyCTA';
import ServiceDetail from './components/ServiceDetail';
import ScrollyTelling from './components/ScrollyTelling';

const { Footer } = Layout;

// Wrapper for the main landing page content
const LandingPage = () => (
  <div className="flex flex-col relative w-full bg-[#1A1A1A]">
    <div className="relative z-10"><Hero /></div>
    <div className="relative z-20 bg-[#050505]"><Services /></div>
    <div className="relative z-20 bg-[#1A1A1A]"><AgencyCTA /></div>
    <div className="relative z-20 bg-[#1A1A1A]"><ProductGrid /></div>

    {/* ScrollyTelling content */}
    <div className="relative z-30 bg-[#010101]">
      <ScrollyTelling />
    </div>
  </div>
);

function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: '#B54A3C',
          colorBgBase: '#1A1A1A',
          colorTextBase: '#FFFFFF',
          fontFamily: "'Source Sans Pro', sans-serif",
          borderRadius: 2,
        },
      }}
    >
      <Layout className="min-h-screen bg-[#1A1A1A]">
        {/* Router must handle the navigation context */}
        <Router>
          <AgeGate />
          <Navbar />

          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/agency-login" element={<AgencyLogin />} />
            <Route path="/agency-pricing" element={<AgencyPricing />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
          </Routes>

          <Footer style={{ textAlign: 'center', backgroundColor: '#1A1A1A', borderTop: '1px solid #333', color: '#9CA3AF' }}>
            © 2024 Rusty Oak Armory Clone. All rights reserved.
          </Footer>
        </Router>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
