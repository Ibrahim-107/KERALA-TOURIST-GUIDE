import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Utensils, Calendar, Building, Bus } from "lucide-react";
import StarRating from "@/components/StarRating";
import keralaFood from "@/assets/kerala/fort-kochi.jpg";

interface Place {
  name: string;
  description: string;
  rating: number;
  timing?: string;
  entryFee?: string;
}

interface Hotel {
  name: string;
  rating: number;
  price: string;
  amenities: string[];
}

const TrivandrumFeatures = () => {
  const navigate = useNavigate();

  const places: Place[] = [
    {
      name: "Padmanabhaswamy Temple",
      description: "Ancient Hindu temple dedicated to Lord Vishnu, known for its intricate architecture",
      rating: 4.8,
      timing: "3:30 AM - 12:00 PM, 5:00 PM - 8:00 PM",
      entryFee: "Free"
    },
    {
      name: "Kovalam Beach",
      description: "Famous crescent-shaped beach perfect for surfing and sunbathing",
      rating: 4.6,
      timing: "24 hours",
      entryFee: "Free"
    },
    {
      name: "Napier Museum",
      description: "Historic art and natural history museum with Indo-Saracenic architecture",
      rating: 4.3,
      timing: "10:00 AM - 5:00 PM (Closed Mondays)",
      entryFee: "₹20"
    },
    {
      name: "Kuthira Malika Palace",
      description: "Traditional Kerala palace with horse-themed architecture",
      rating: 4.4,
      timing: "8:30 AM - 5:30 PM",
      entryFee: "₹20"
    }
  ];

  const foods = [
    {
      name: "Boli Payasam",
      description: "Traditional sweet dessert made with jaggery and coconut milk",
      rating: 4.9
    },
    {
      name: "Karimeen Curry",
      description: "Spicy fish curry made with pearl spot fish",
      rating: 4.7
    },
    {
      name: "Appam with Stew",
      description: "Fermented rice pancake served with coconut milk stew",
      rating: 4.6
    },
    {
      name: "Puttu and Kadala",
      description: "Steamed rice cake served with black chickpea curry",
      rating: 4.5
    }
  ];

  const culture = [
    {
      name: "Onam Festival",
      description: "Kerala's harvest festival celebrated with flower carpets and traditional dance",
      timing: "August-September",
      rating: 4.9
    },
    {
      name: "Kathakali Performance",
      description: "Classical dance-drama with elaborate costumes and makeup",
      timing: "Year-round at various venues",
      rating: 4.8
    },
    {
      name: "Theyyam Ritual",
      description: "Traditional ritual art form and religious ceremony",
      timing: "October-May",
      rating: 4.7
    }
  ];

  const hotels: Hotel[] = [
    {
      name: "Taj Green Cove Resort & Spa",
      rating: 4.8,
      price: "₹15,000/night",
      amenities: ["Spa", "Pool", "Beach Access", "Restaurant"]
    },
    {
      name: "The Leela Kovalam",
      rating: 4.7,
      price: "₹12,000/night",
      amenities: ["Ocean View", "Ayurveda Center", "Multi-cuisine Restaurant"]
    },
    {
      name: "Vivanta Trivandrum",
      rating: 4.5,
      price: "₹8,000/night",
      amenities: ["City Center", "Business Center", "Fitness Center"]
    },
    {
      name: "Hotel Residency Tower",
      rating: 4.2,
      price: "₹3,500/night",
      amenities: ["Free WiFi", "Restaurant", "Room Service"]
    }
  ];

  const busStands = [
    {
      name: "Thiruvananthapuram Central Bus Station",
      location: "Thampanoor",
      services: "Interstate & Local buses",
      rating: 4.1
    },
    {
      name: "East Fort Bus Station",
      location: "Fort area",
      services: "Local & nearby districts",
      rating: 3.9
    },
    {
      name: "Kovalam Bus Stand",
      location: "Kovalam Beach",
      services: "Beach route buses",
      rating: 4.0
    },
    {
      name: "Kazhakoottam Bus Stand",
      location: "IT Corridor",
      services: "Tech park & university routes",
      rating: 3.8
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => navigate('/districts')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Kerala
          </Button>
          <h1 className="text-2xl font-bold text-foreground">Thiruvananthapuram Guide</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Feature Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <Card className="p-6 text-center bg-gradient-card hover:shadow-glow transition-all cursor-pointer group">
            <MapPin className="w-8 h-8 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-foreground">Places to Visit</h3>
          </Card>
          <Card className="p-6 text-center bg-gradient-card hover:shadow-glow transition-all cursor-pointer group">
            <Utensils className="w-8 h-8 text-accent mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-foreground">Food Exploration</h3>
          </Card>
          <Card className="p-6 text-center bg-gradient-card hover:shadow-glow transition-all cursor-pointer group">
            <Calendar className="w-8 h-8 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-foreground">Culture & Traditions</h3>
          </Card>
          <Card className="p-6 text-center bg-gradient-card hover:shadow-glow transition-all cursor-pointer group">
            <Building className="w-8 h-8 text-accent mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-foreground">Hotels</h3>
          </Card>
          <Card className="p-6 text-center bg-gradient-card hover:shadow-glow transition-all cursor-pointer group">
            <Bus className="w-8 h-8 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-foreground">Bus Stands</h3>
          </Card>
        </div>

        {/* Places to Visit */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
            <MapPin className="w-8 h-8 text-primary" />
            Places to Visit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {places.map((place, index) => (
              <Card key={index} className="p-6 bg-gradient-card hover:shadow-glow transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-foreground">{place.name}</h3>
                  <StarRating rating={place.rating} size="sm" />
                </div>
                <p className="text-foreground/80 mb-4">{place.description}</p>
                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="text-primary font-medium">Timing: </span>
                    <span className="text-foreground/70">{place.timing}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-primary font-medium">Entry Fee: </span>
                    <span className="text-foreground/70">{place.entryFee}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Food Exploration */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Utensils className="w-8 h-8 text-accent" />
            Food Exploration
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {foods.map((food, index) => (
                  <Card key={index} className="p-4 bg-gradient-card hover:shadow-glow transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{food.name}</h3>
                      <StarRating rating={food.rating} size="sm" />
                    </div>
                    <p className="text-foreground/80 text-sm">{food.description}</p>
                  </Card>
                ))}
              </div>
            </div>
            <div className="lg:col-span-1">
              <Card className="overflow-hidden bg-gradient-card">
                <img 
                  src={keralaFood} 
                  alt="Kerala Traditional Food" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Traditional Kerala Feast</h3>
                  <p className="text-foreground/80 text-sm">Experience authentic Kerala flavors on banana leaf</p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Culture & Traditions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Calendar className="w-8 h-8 text-primary" />
            Culture & Traditions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {culture.map((item, index) => (
              <Card key={index} className="p-6 bg-gradient-card hover:shadow-glow transition-all">
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
            <Building className="w-8 h-8 text-accent" />
            Hotels
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hotels.map((hotel, index) => (
              <Card key={index} className="p-6 bg-gradient-card hover:shadow-glow transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-foreground">{hotel.name}</h3>
                  <StarRating rating={hotel.rating} size="sm" />
                </div>
                <div className="text-2xl font-bold text-primary mb-4">{hotel.price}</div>
                <div className="flex flex-wrap gap-2">
                  {hotel.amenities.map((amenity, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {amenity}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Bus Stands */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Bus className="w-8 h-8 text-primary" />
            Bus Stands
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {busStands.map((stand, index) => (
              <Card key={index} className="p-6 bg-gradient-card hover:shadow-glow transition-all">
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

export default TrivandrumFeatures;