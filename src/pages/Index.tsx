import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { MapPin, Mountain, Droplets, Waves, Landmark, ChevronRight } from "lucide-react";
import { getPlacesByCategory } from "@/data/keralaPlaces";

// Kerala landmark images
import munnarTea from "@/assets/kerala/munnar-tea.jpg";
import alleppeyBackwaters from "@/assets/kerala/alleppey-backwaters.jpg";
import varkalaCliff from "@/assets/kerala/varkala-cliff.jpg";
import kovalamBeach from "@/assets/kerala/kovalam-beach.jpg";
import athirappillyFalls from "@/assets/kerala/athirappilly-falls.jpg";
import fortKochi from "@/assets/kerala/fort-kochi.jpg";
import padmanabhaswamyTemple from "@/assets/kerala/padmanabhaswamy-temple.jpg";

const heroSlides = [
  { name: "Munnar Tea Plantations", tagline: "Where clouds meet the tea gardens", image: munnarTea },
  { name: "Alleppey Backwaters", tagline: "Venice of the East", image: alleppeyBackwaters },
  { name: "Varkala Cliff Beach", tagline: "Where cliffs embrace the sea", image: varkalaCliff },
  { name: "Kovalam Beach", tagline: "Tropical paradise by the lighthouse", image: kovalamBeach },
  { name: "Athirappilly Falls", tagline: "The Niagara of India", image: athirappillyFalls },
  { name: "Fort Kochi", tagline: "Heritage at the harbour", image: fortKochi },
  { name: "Padmanabhaswamy Temple", tagline: "Ancient grandeur of devotion", image: padmanabhaswamyTemple },
];

const categories = [
  { key: "beach" as const, icon: Waves, label: "explore.beaches", color: "text-accent" },
  { key: "hill-station" as const, icon: Mountain, label: "explore.hillStations", color: "text-primary" },
  { key: "waterfall" as const, icon: Droplets, label: "explore.waterfalls", color: "text-accent" },
  { key: "backwater" as const, icon: Waves, label: "explore.backwaters", color: "text-primary" },
  { key: "temple" as const, icon: Landmark, label: "explore.temples", color: "text-accent" },
];

const Index = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [currentSlide, setCurrentSlide] = React.useState(0);

  return (
    <div className="min-h-screen bg-background">
      {/* Language Switcher */}
      <div className="absolute top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>

      {/* Hero Carousel */}
      <div className="relative h-screen overflow-hidden">
        <Carousel
          plugins={[plugin.current]}
          className="w-full h-screen"
          opts={{ loop: true }}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          setApi={(api) => {
            api?.on("select", () => setCurrentSlide(api.selectedScrollSnap()));
          }}
        >
          <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="relative h-screen">
                  <img
                    src={slide.image}
                    alt={slide.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                    width={1920}
                    height={1080}
                  />
                  <div className="absolute inset-0 bg-gradient-overlay" />

                  <div className="relative z-10 flex items-center justify-center h-full px-4">
                    <div className="text-center animate-fade-in-up">
                      <h1 className="text-5xl md:text-7xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
                        {t('nav.exploreKerala')}
                      </h1>
                      <p className="text-lg md:text-2xl text-foreground/90 mb-2 font-light">
                        {t('hero.tagline')}
                      </p>
                      <p className="text-base md:text-lg text-foreground/70 mb-8 max-w-xl mx-auto">
                        {t('hero.welcomeMessage')}
                      </p>
                      <Button
                        onClick={() => navigate('/districts')}
                        size="lg"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-4 text-lg font-semibold shadow-glow rounded-full"
                      >
                        {t('hero.startJourney')}
                      </Button>
                    </div>
                  </div>

                  {/* Slide place name overlay */}
                  <div className="absolute bottom-24 left-8 z-10">
                    <p className="text-foreground/60 text-sm uppercase tracking-widest">{slide.tagline}</p>
                    <p className="text-foreground text-2xl font-semibold">{slide.name}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 bg-background/30 border-none text-foreground hover:bg-background/50" />
          <CarouselNext className="right-4 bg-background/30 border-none text-foreground hover:bg-background/50" />
        </Carousel>

        {/* Indicator dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, i) => (
            <div
              key={i}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === currentSlide ? "bg-primary w-8" : "bg-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            { count: t('stats.districtsCount'), label: t('stats.districts') },
            { count: t('stats.touristPlacesCount'), label: t('stats.touristPlaces') },
            { count: t('stats.hotelsCount'), label: t('stats.hotels') },
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 bg-gradient-card rounded-xl shadow-card">
              <div className="text-4xl font-bold text-primary mb-1">{stat.count}</div>
              <div className="text-foreground/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Explore Categories */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            {t('explore.title')}
          </h2>
          <div className="grid md:grid-cols-5 gap-4">
            {categories.map((cat) => {
              const places = getPlacesByCategory(cat.key);
              const Icon = cat.icon;
              return (
                <Card
                  key={cat.key}
                  className="group cursor-pointer p-6 bg-gradient-card hover:shadow-glow transition-all duration-300 hover:scale-105 text-center"
                  onClick={() => {
                    const el = document.getElementById(`cat-${cat.key}`);
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <Icon className={`w-10 h-10 mx-auto mb-3 ${cat.color} group-hover:scale-110 transition-transform`} />
                  <h3 className="font-semibold text-foreground text-sm">{t(cat.label)}</h3>
                  <p className="text-muted-foreground text-xs mt-1">{places.length} places</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Category Sections */}
      {categories.map((cat) => {
        const places = getPlacesByCategory(cat.key);
        const Icon = cat.icon;
        return (
          <section key={cat.key} id={`cat-${cat.key}`} className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Icon className={`w-7 h-7 ${cat.color}`} />
                {t(cat.label)}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {places.map((place) => (
                  <Card
                    key={place.id}
                    className="overflow-hidden bg-gradient-card hover:shadow-glow transition-all duration-300 cursor-pointer group"
                    onClick={() => navigate(`/place/${place.id}`)}
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={getImageForPlace(place.imageKey)}
                        alt={place.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        width={640}
                        height={360}
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-foreground">{place.name}</h3>
                        <span className="text-primary text-sm font-medium">★ {place.rating}</span>
                      </div>
                      <p className="text-muted-foreground text-sm line-clamp-2 mb-3">{place.description}</p>
                      <div className="flex items-center text-accent text-sm">
                        <MapPin className="w-3 h-3 mr-1" />
                        {place.location}
                        <ChevronRight className="w-4 h-4 ml-auto text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

/* Map imageKey to imported images */
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
function getImageForPlace(key: string) {
  return imageMap[key] || munnar;
}

export default Index;
