import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

// Import state landmark images
import tajMahal from "@/assets/states/uttar-pradesh-taj-mahal.jpg";
import gateway from "@/assets/states/maharashtra-gateway.jpg";
import keralaBackwaters from "@/assets/states/kerala-backwaters.jpg";
import redFort from "@/assets/states/delhi-red-fort.jpg";
import goldenTemple from "@/assets/states/punjab-golden-temple.jpg";
import mysorePalace from "@/assets/states/karnataka-mysore-palace.jpg";
import hawaMahal from "@/assets/states/rajasthan-hawa-mahal.jpg";
import victoriaMemorial from "@/assets/states/west-bengal-victoria-memorial.jpg";

// States data with landmarks
const indianStatesLandmarks = [
  { state: "Uttar Pradesh", landmark: "Taj Mahal", image: tajMahal },
  { state: "Maharashtra", landmark: "Gateway of India", image: gateway },
  { state: "Kerala", landmark: "Backwaters", image: keralaBackwaters },
  { state: "Delhi", landmark: "Red Fort", image: redFort },
  { state: "Punjab", landmark: "Golden Temple", image: goldenTemple },
  { state: "Karnataka", landmark: "Mysore Palace", image: mysorePalace },
  { state: "Rajasthan", landmark: "Hawa Mahal", image: hawaMahal },
  { state: "West Bengal", landmark: "Victoria Memorial", image: victoriaMemorial },
  // Using existing images for remaining states
  { state: "Tamil Nadu", landmark: "Meenakshi Temple", image: mysorePalace },
  { state: "Gujarat", landmark: "Rann of Kutch", image: hawaMahal },
  { state: "Andhra Pradesh", landmark: "Charminar", image: redFort },
  { state: "Telangana", landmark: "Golconda Fort", image: tajMahal },
  { state: "Bihar", landmark: "Mahabodhi Temple", image: goldenTemple },
  { state: "Odisha", landmark: "Jagannath Temple", image: victoriaMemorial },
  { state: "Madhya Pradesh", landmark: "Khajuraho Temples", image: mysorePalace },
  { state: "Assam", landmark: "Kamakhya Temple", image: keralaBackwaters },
  { state: "Jharkhand", landmark: "Betla National Park", image: gateway },
  { state: "Haryana", landmark: "Kurukshetra", image: hawaMahal },
  { state: "Himachal Pradesh", landmark: "Shimla", image: tajMahal },
  { state: "Uttarakhand", landmark: "Valley of Flowers", image: keralaBackwaters },
  { state: "Chhattisgarh", landmark: "Chitrakoot Falls", image: redFort },
  { state: "Goa", landmark: "Basilica of Bom Jesus", image: gateway },
  { state: "Arunachal Pradesh", landmark: "Tawang Monastery", image: goldenTemple },
  { state: "Manipur", landmark: "Loktak Lake", image: keralaBackwaters },
  { state: "Meghalaya", landmark: "Living Root Bridges", image: victoriaMemorial },
  { state: "Mizoram", landmark: "Vantawng Falls", image: mysorePalace },
  { state: "Nagaland", landmark: "Hornbill Festival", image: hawaMahal },
  { state: "Sikkim", landmark: "Kanchenjunga", image: tajMahal },
  { state: "Tripura", landmark: "Ujjayanta Palace", image: redFort },
];

const Index = () => {
  const navigate = useNavigate();
  
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with States Carousel */}
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-overlay" />
        
        {/* States Carousel */}
        <Carousel
          plugins={[plugin.current]}
          className="w-full h-screen"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {indianStatesLandmarks.map((item, index) => (
              <CarouselItem key={index}>
                <div className="relative h-screen">
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-overlay" />
                  
                  <div className="relative z-10 flex items-center justify-center h-full px-4">
                    <div className="text-center">
                      <h1 className="text-4xl md:text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
                        {item.landmark}
                      </h1>
                      <p className="text-2xl md:text-3xl text-foreground/90 mb-8">
                        {item.state}
                      </p>
                      <Button 
                        onClick={() => navigate('/states')}
                        variant="default"
                        size="lg"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg font-semibold shadow-glow"
                      >
                        Explore {item.state}
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
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