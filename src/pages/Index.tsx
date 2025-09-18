import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import indiaHero from "@/assets/india-hero.jpg";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${indiaHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
        
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-6">
              Discover India
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              Your ultimate guide to exploring the incredible diversity of India. 
              From majestic monuments to hidden gems, discover it all.
            </p>
            <Button 
              onClick={() => navigate('/states')}
              variant="default"
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg font-semibold shadow-glow"
            >
              Start Your Journey
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Info Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-card rounded-lg shadow-card">
              <div className="text-4xl font-bold text-primary mb-2">28</div>
              <div className="text-lg text-foreground/80">States & UTs</div>
            </div>
            <div className="text-center p-6 bg-gradient-card rounded-lg shadow-card">
              <div className="text-4xl font-bold text-accent mb-2">1000+</div>
              <div className="text-lg text-foreground/80">Tourist Places</div>
            </div>
            <div className="text-center p-6 bg-gradient-card rounded-lg shadow-card">
              <div className="text-4xl font-bold text-primary mb-2">5000+</div>
              <div className="text-lg text-foreground/80">Hotels & Stays</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;