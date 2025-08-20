"use client"
 
import dynamic from 'next/dynamic';
  
const Hero = dynamic(() => import('./components/Hero'), {
  ssr: false,
  loading: () => <div style={{ height: 300 }} />,  
});
const About = dynamic(() => import('./components/About'), {
  ssr: false,
  loading: () => <div style={{ height: 300 }} />,  
});
const Services = dynamic(() => import('./components/Services'), {
  ssr: false,
  loading: () => <div style={{ height: 300 }} />,
}); 
const PortfolioCarousel = dynamic(() => import('./components/PortfolioCarousel'), {
  ssr: false,
  loading: () => <div style={{ height: 300 }} />,  
});
const CompanyPanel = dynamic(() => import('./components/CompanyPanel'), {
  ssr: false,
  loading: () => <div style={{ height: 300 }} />,
}); 
const Testimonials = dynamic(() => import('./components/Testimonials'), {
  ssr: false,
  loading: () => <div style={{ height: 300 }} />,
}); 
const Achievements = dynamic(() => import('./components/Achievements'), {
  ssr: false,
  loading: () => <div style={{ height: 300 }} />,
});
const Contact = dynamic(() => import('./components/Contact'), {
  ssr: false,
  loading: () => <div style={{ height: 300 }} />,
});


const Home = () => {
  return (
    <div className="max-w-7xl mx-auto  select-none bg-gradient-to-b from-gray-50 to-gray-100 dark:from-[#111111] dark:to-[#000000] flex flex-col transition-colors duration-300 min-h-screen overflow-hidden relative w-full">
      <Hero />
      <About />
      <Services />
      <PortfolioCarousel/>  
      {/* <CompanyPanel /> */}
      <Achievements />
      <Testimonials />
      <Contact/>
    </div>

   
  );
};

export default Home;
