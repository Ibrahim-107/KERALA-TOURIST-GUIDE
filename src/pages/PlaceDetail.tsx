import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowLeft, MapPin, Calendar, Star, Plus } from "lucide-react";
import { getPlaceById } from "@/data/keralaPlaces";
import { toast } from "@/hooks/use-toast";
import StarRating from "@/components/StarRating";

// Image imports
import munnar from "@/assets/kerala/munnar-tea.jpg";
import alleppey from "@/assets/kerala/alleppey-backwaters.jpg";
import varkala from "@/assets/kerala/varkala-cliff.jpg";
import kovalam from "@/assets/kerala/kovalam-beach.jpg";
import athirappilly from "@/assets/kerala/athirappilly-falls.jpg";
import fortkochi from "@/assets/kerala/fort-kochi.jpg";
import padmanabhaswamy from "@/assets/kerala/padmanabhaswamy-temple.jpg";

const imageMap: Record<string, string> = {
  munnar, alleppey, varkala, kovalam, athirappilly, fortkochi, padmanabhaswamy,
};

const PlaceDetail = () => {
  const { placeId } = useParams();
  const navigate = useNavigate();
  const place = getPlaceById(placeId || "");

  if (!place) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Place not found</h1>
          <Button onClick={() => navigate("/")}>Go Home</Button>
        </div>
      </div>
    );
  }

  const image = imageMap[place.imageKey] || munnar;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="relative h-[50vh] overflow-hidden">
        <img src={image} alt={place.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="relative z-10 flex flex-col justify-end h-full p-6 max-w-5xl mx-auto">
          <Button variant="ghost" size="sm" onClick={() => navigate(-1)} className="self-start mb-4 text-foreground/80 hover:text-foreground">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">{place.name}</h1>
          <div className="flex items-center gap-4 text-foreground/80">
            <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {place.location}</span>
            <span className="flex items-center gap-1"><Star className="w-4 h-4 text-primary" /> {place.rating}</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
        {/* Add to itinerary */}
        <div className="flex justify-end">
          <Button
            onClick={() => toast({ title: "Added to Itinerary!", description: `${place.name} has been added to your travel plan.` })}
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
          >
            <Plus className="w-4 h-4 mr-2" /> Add to Itinerary
          </Button>
        </div>

        {/* Description */}
        <Card className="p-6 bg-gradient-card">
          <h2 className="text-xl font-semibold text-foreground mb-3">About</h2>
          <p className="text-foreground/80 leading-relaxed">{place.description}</p>
        </Card>

        {/* Best time */}
        <Card className="p-6 bg-gradient-card">
          <h2 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-accent" /> Best Time to Visit
          </h2>
          <p className="text-foreground/80">{place.bestTimeToVisit}</p>
        </Card>

        {/* Activities */}
        <Card className="p-6 bg-gradient-card">
          <h2 className="text-xl font-semibold text-foreground mb-3">Things to Do</h2>
          <div className="flex flex-wrap gap-2">
            {place.activities.map((a, i) => (
              <Badge key={i} variant="secondary" className="bg-primary/15 text-primary">{a}</Badge>
            ))}
          </div>
        </Card>

        {/* Travel Tips */}
        <Card className="p-6 bg-gradient-card">
          <h2 className="text-xl font-semibold text-foreground mb-3">Travel Tips</h2>
          <ul className="space-y-2">
            {place.travelTips.map((tip, i) => (
              <li key={i} className="text-foreground/80 flex items-start gap-2">
                <span className="text-primary mt-1">•</span> {tip}
              </li>
            ))}
          </ul>
        </Card>

        {/* Rating */}
        <Card className="p-6 bg-gradient-card text-center">
          <h2 className="text-xl font-semibold text-foreground mb-3">Rate this Place</h2>
          <StarRating rating={place.rating} size="lg" />
        </Card>
      </div>
    </div>
  );
};

export default PlaceDetail;
