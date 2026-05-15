import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Waves } from "lucide-react";
import { keralaBeaches } from "@/data/keralaBeaches";

const districtOrder = [
  "Thiruvananthapuram", "Kollam", "Alappuzha", "Ernakulam",
  "Thrissur", "Malappuram", "Kozhikode", "Kannur", "Kasaragod",
];

const Beaches = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-4 text-foreground hover:bg-foreground/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back
          </Button>
          <div className="flex items-center gap-3 mb-2">
            <Waves className="w-10 h-10 text-accent" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Beaches of Kerala</h1>
          </div>
          <p className="text-foreground/70 text-lg">
            Explore all {keralaBeaches.length} beaches across Kerala's nine coastal districts.
          </p>
        </div>
      </div>

      {/* Beaches grouped by district */}
      <div className="max-w-6xl mx-auto py-12 px-4 space-y-12">
        {districtOrder.map((district) => {
          const beaches = keralaBeaches.filter((b) => b.district === district);
          if (!beaches.length) return null;
          return (
            <section key={district}>
              <div className="flex items-baseline justify-between mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-primary" />
                  {district}
                </h2>
                <span className="text-muted-foreground text-sm">{beaches.length} beaches</span>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {beaches.map((beach) => (
                  <Card
                    key={beach.id}
                    className="overflow-hidden bg-gradient-card hover:shadow-glow transition-all duration-300 group"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={beach.image}
                        alt={beach.name}
                        loading="lazy"
                        width={1024}
                        height={640}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-foreground mb-1">{beach.name}</h3>
                      <p className="text-muted-foreground text-sm line-clamp-2">{beach.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default Beaches;
