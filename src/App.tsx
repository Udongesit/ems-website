import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import TrustBar from './sections/TrustBar';
import Services from './sections/Services';
import HowItWorks from './sections/HowItWorks';
import Stats from './sections/Stats';
import Booking from './sections/Booking';
import Testimonials from './sections/Testimonials';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Errand Management Services | Your Time Matters</title>
        <meta
          name="description"
          content="Professional errand running and personal assistant services for individuals, families, and businesses across Nigeria. Book today."
        />
        <meta property="og:title" content="Errand Management Services" />
        <meta
          property="og:description"
          content="Your time is valuable. Let us handle the errands."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <TrustBar />
          <Services />
          <HowItWorks />
          <Stats />
          <Booking />
          <Testimonials />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
