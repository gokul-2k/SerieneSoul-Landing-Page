import Hero from '../components/Hero';
import WhySereinsoulSection from '../components/WhySereinsoulSection';
import DifferentSection from '../components/DifferentSection';
import BuiltForYouSection from '../components/BuiltForYouSection';
import CommunityWaitlistSection from '../components/CommunityWaitlistSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <section className="py-10 px-4 -mt-8 pt-16 relative z-30">
        <div 
          className="absolute top-0 left-0 right-0 h-8 backdrop-blur-md"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.1) 10%,rgba(255, 255, 255, 0.23) 20%, rgba(255, 255, 255, 0.41) 40%, rgba(255, 255, 255, 0.6) 60%, rgba(255, 255, 255, 0.87) 80%, rgba(255,255,255,1) 100%)'
          }}
        ></div>
      </section>
      <WhySereinsoulSection />
      <DifferentSection />
      <BuiltForYouSection />
      <CommunityWaitlistSection />
      <Footer />
    </main>
  );
}