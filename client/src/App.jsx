import React from 'react';
import { ConfigProvider, theme, Layout } from 'antd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AgeGate from './components/AgeGate';
import AgencyLogin from './components/AgencyLogin';
import AgencyPricing from './components/AgencyPricing';

const { Footer } = Layout;

import Hero from './components/Hero';
import ScrollyTelling from './components/ScrollyTelling';
import AgencyCTA from './components/AgencyCTA';

// Landing Page for the "Ground Up" rebuild
const LandingPage = () => (
  <div className="min-h-screen bg-[#1A1A1A]">
    <Hero />
    <AgencyCTA />
    <ScrollyTelling />
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
      <Layout className="min-h-screen bg-[#1A1A1A] p-0 m-0">
        <Router>
          <AgeGate />
          <Navbar />

          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/agency-login" element={<AgencyLogin />} />
            <Route path="/agency-pricing" element={<AgencyPricing />} />
            {/* Service Routes will be re-added as we rebuild */}
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
