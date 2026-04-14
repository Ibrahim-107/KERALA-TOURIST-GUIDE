import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, MapPin, Utensils, Calendar, Building, Bus } from "lucide-react";
import StarRating from "@/components/StarRating";
import { getDistrictBySlug } from "@/data/districtData";

const DistrictDetail = () => {
  const navigate = useNavigate();
  const { districtSlug } = useParams<{ districtSlug: string }>();
  const district = districtSlug ? getDistrictBySlug(districtSlug) : undefined;

  if (!district) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">District Not Found</h1>
          <Button onClick={() => navigate('/districts')}>Back to Districts</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={() => navigate('/districts')}>
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Kerala
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-foreground">{district.name}</h1>
            <p className="text-sm text-foreground/60">{district.tagline}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Feature Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {[
            { icon: MapPin, label: "Places to Visit", color: "text-primary" },
            { icon: Utensils, label: "Food", color: "text-accent" },
            { icon: Calendar, label: "Culture", color: "text-primary" },
            { icon: Building, label: "Hotels", color: "text-accent" },
            { icon: Bus, label: "Bus Stands", color: "text-primary" },
          ].map(({ icon: Icon, label, color }) => (
            <Card key={label} className="p-4 text-center bg-gradient-card hover:shadow-glow transition-all cursor-pointer group">
              <Icon className={`w-7 h-7 ${color} mx-auto mb-2 group-hover:scale-110 transition-transform`} />
              <h3 className="font-semibold text-foreground text-sm">{label}</h3>
            </Card>
          ))}
        </div>

        {/* Places to Visit */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
            <MapPin className="w-8 h-8 text-primary" /> Places to Visit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {district.places.map((place, i) => (
              <Card key={i} className="p-6 bg-gradient-card hover:shadow-glow transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-foreground">{place.name}</h3>
                  <StarRating rating={place.rating} size="sm" />
                </div>
                <p className="text-foreground/80 mb-4">{place.description}</p>
                <div className="space-y-2">
                  {place.timing && (
                    <div className="text-sm">
                      <span className="text-primary font-medium">Timing: </span>
                      <span className="text-foreground/70">{place.timing}</span>
                    </div>
                  )}
                  {place.entryFee && (
                    <div className="text-sm">
                      <span className="text-primary font-medium">Entry Fee: </span>
                      <span className="text-foreground/70">{place.entryFee}</span>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Food Exploration */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Utensils className="w-8 h-8 text-accent" /> Food Exploration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {district.foods.map((food, i) => (
              <Card key={i} className="p-4 bg-gradient-card hover:shadow-glow transition-all">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-foreground">{food.name}</h3>
                  <StarRating rating={food.rating} size="sm" />
                </div>
                <p className="text-foreground/80 text-sm">{food.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Culture & Traditions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Calendar className="w-8 h-8 text-primary" /> Culture & Traditions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {district.culture.map((item, i) => (
              <Card key={i} className="p-6 bg-gradient-card hover:shadow-glow transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-foreground">{item.name}</h3>
                  <StarRating rating={item.rating} size="sm" />
                </div>
                <p className="text-foreground/80 mb-4">{item.description}</p>
                <Badge variant="secondary" className="bg-accent/20 text-accent">
                  Best Time: {item.timing}
                </Badge>
              </Card>
            ))}
          </div>
        </section>

        {/* Hotels */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Building className="w-8 h-8 text-accent" /> Hotels
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {district.hotels.map((hotel, i) => (
              <Card key={i} className="p-6 bg-gradient-card hover:shadow-glow transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-foreground">{hotel.name}</h3>
                  <StarRating rating={hotel.rating} size="sm" />
                </div>
                <div className="text-2xl font-bold text-primary mb-4">{hotel.price}</div>
                <div className="flex flex-wrap gap-2">
                  {hotel.amenities.map((amenity, j) => (
                    <Badge key={j} variant="outline" className="text-xs">{amenity}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Bus Stands */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Bus className="w-8 h-8 text-primary" /> Bus Stands
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {district.busStands.map((stand, i) => (
              <Card key={i} className="p-6 bg-gradient-card hover:shadow-glow transition-all">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{stand.name}</h3>
                    <p className="text-foreground/70">{stand.location}</p>
                  </div>
                  <StarRating rating={stand.rating} size="sm" />
                </div>
                <p className="text-foreground/80">{stand.services}</p>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DistrictDetail;
