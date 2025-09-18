import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import keralaBackwaters from "@/assets/kerala-backwaters.jpg";

const keralaDistricts = [
  "Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod",
  "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad",
  "Pathanamthitta", "Thiruvananthapuram", "Thrissur", "Wayanad"
];

const KeralaDistricts = () => {
  const navigate = useNavigate();

  const handleDistrictClick = (district: string) => {
    if (district === "Thiruvananthapuram") {
      navigate('/trivandrum');
    } else {
      // For demo purposes, other districts show alert
      alert(`${district} page coming soon! Currently showing Thiruvananthapuram as example.`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-64 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${keralaBackwaters})` }}
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
        
        <div className="relative z-10 flex items-center h-full px-4">
          <div className="max-w-7xl mx-auto w-full">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate('/states')}
              className="mb-4 text-white/90 hover:text-white"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to States
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Kerala Districts
            </h1>
            <p className="text-white/80 text-lg mt-2">
              Choose a district to explore its unique attractions
            </p>
          </div>
        </div>
      </div>

      {/* Districts Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {keralaDistricts.map((district, index) => (
            <Card key={district} className="group cursor-pointer transition-all duration-300 hover:shadow-glow hover:scale-105">
              <div
                onClick={() => handleDistrictClick(district)}
                className="p-6 bg-gradient-card rounded-lg h-full flex items-center justify-center text-center"
              >
                <div>
                  <div className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {district}
                  </div>
                  {district === "Thiruvananthapuram" && (
                    <div className="text-sm text-accent mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Click to explore →
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Featured District */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <Card className="bg-gradient-card p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Featured: Thiruvananthapuram
            </h2>
            <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
              The capital city of Kerala, known for its historic temples, 
              beautiful beaches, and rich cultural heritage.
            </p>
            <Button 
              onClick={() => navigate('/trivandrum')}
              variant="default"
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Explore Thiruvananthapuram
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default KeralaDistricts;