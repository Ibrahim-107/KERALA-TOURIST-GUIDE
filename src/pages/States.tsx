import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

const States = () => {
  const navigate = useNavigate();

  const handleStateClick = (state: string) => {
    if (state === "Kerala") {
      navigate('/kerala');
    } else {
      // For demo purposes, other states show alert
      alert(`${state} page coming soon! Currently showing Kerala as example.`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <h1 className="text-2xl font-bold text-foreground">Select a State</h1>
        </div>
      </div>

      {/* States Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {indianStates.map((state, index) => (
            <Card key={state} className="group cursor-pointer transition-all duration-300 hover:shadow-glow hover:scale-105">
              <div
                onClick={() => handleStateClick(state)}
                className="p-6 bg-gradient-card rounded-lg h-full flex items-center justify-center text-center"
              >
                <div>
                  <div className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {state}
                  </div>
                  {state === "Kerala" && (
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

      {/* Featured State */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <Card className="bg-gradient-card p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Featured: Kerala - God's Own Country
            </h2>
            <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
              Experience the serene backwaters, lush hill stations, exotic wildlife, 
              ayurvedic treatments and tropical beaches of Kerala.
            </p>
            <Button 
              onClick={() => navigate('/kerala')}
              variant="default"
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Explore Kerala Now
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default States;