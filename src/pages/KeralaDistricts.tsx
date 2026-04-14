import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import alleppeyBackwaters from "@/assets/kerala/alleppey-backwaters.jpg";

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
      alert(`${district} page coming soon! Currently showing Thiruvananthapuram as example.`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="relative h-64 overflow-hidden">
        <img src={alleppeyBackwaters} alt="Kerala Backwaters" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="relative z-10 flex items-center h-full px-4">
          <div className="max-w-7xl mx-auto w-full">
            <Button variant="ghost" size="sm" onClick={() => navigate('/')} className="mb-4 text-foreground/80 hover:text-foreground">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Kerala Districts</h1>
            <p className="text-foreground/70 text-lg mt-2">Choose a district to explore</p>
          </div>
        </div>
      </div>

      {/* Districts Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {keralaDistricts.map((district) => (
            <Card key={district} className="group cursor-pointer transition-all duration-300 hover:shadow-glow hover:scale-105">
              <div onClick={() => handleDistrictClick(district)} className="p-6 bg-gradient-card rounded-lg h-full flex items-center justify-center text-center">
                <div>
                  <div className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{district}</div>
                  {district === "Thiruvananthapuram" && (
                    <div className="text-sm text-accent mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Click to explore →</div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeralaDistricts;
