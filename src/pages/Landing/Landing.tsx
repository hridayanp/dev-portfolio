import Header from '@/components/Header/Header';
import HomeSection from '../HomeSection/HomeSection';

const Landing = () => {
  return (
    <div className="relative">
      <Header />

      <main>
        <HomeSection />

        <div
          id="about"
          className="h-screen bg-green-100 flex items-center justify-center"
        >
          <h1 className="text-4xl font-bold">About Section</h1>
        </div>

        <div
          id="projects"
          className="h-screen bg-yellow-100 flex items-center justify-center"
        >
          <h1 className="text-4xl font-bold">Projects Section</h1>
        </div>

        <div
          id="contact"
          className="h-screen bg-pink-100 flex items-center justify-center"
        >
          <h1 className="text-4xl font-bold">Contact Section</h1>
        </div>
      </main>
    </div>
  );
};

export default Landing;
