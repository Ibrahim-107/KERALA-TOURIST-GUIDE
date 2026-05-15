import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { MapPin, Mountain, Droplets, Waves, Landmark, ChevronRight } from "lucide-react";
import { getPlacesByCategory } from "@/data/keralaPlaces";
import { keralaBeaches } from "@/data/keralaBeaches";

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

  // Cinematic slideshow: zoom-in then fade-to-black, then next image
  const SLIDE_DURATION = 6000; // total per slide (ms)
  const FADE_DURATION = 1200;  // black fade in/out (ms)
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [phase, setPhase] = React.useState<"in" | "hold" | "out">("in");

  React.useEffect(() => {
    // fade in -> hold -> fade out -> next
    setPhase("in");
    const inTimer = setTimeout(() => setPhase("hold"), FADE_DURATION);
    const outTimer = setTimeout(() => setPhase("out"), SLIDE_DURATION - FADE_DURATION);
    const nextTimer = setTimeout(() => {
      setCurrentSlide((s) => (s + 1) % heroSlides.length);
    }, SLIDE_DURATION);
    return () => {
      clearTimeout(inTimer);
      clearTimeout(outTimer);
      clearTimeout(nextTimer);
    };
  }, [currentSlide]);

  const blackoutOpacity = phase === "in" ? 0 : phase === "out" ? 1 : 0;

  return (
    <div className="min-h-screen bg-background">
      {/* Language Switcher */}
      <div className="absolute top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>

      {/* Cinematic Hero Slideshow */}
      <div className="relative h-screen overflow-hidden bg-black">
        {heroSlides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={index}
              className="absolute inset-0"
              style={{
                opacity: isActive ? 1 : 0,
                transition: "opacity 600ms ease-in-out",
                zIndex: isActive ? 1 : 0,
              }}
              aria-hidden={!isActive}
            >
              <img
                src={slide.image}
                alt={slide.name}
                className={`absolute inset-0 w-full h-full object-cover ${isActive ? "animate-ken-burns" : ""}`}
                loading={index === 0 ? "eager" : "lazy"}
                width={1920}
                height={1080}
                style={{ willChange: "transform" }}
              />
              {/* Image tint: subtle teal/green wash + dark gradient for readability */}
              <div className="absolute inset-0 bg-primary/15 mix-blend-multiply" />
              <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-overlay" />
              <div className="absolute inset-0 bg-black/25" />
            </div>
          );
        })}

        {/* Foreground content */}
        <div className="relative z-20 flex items-center justify-center h-full px-4 pointer-events-none">
          <div className="text-center animate-fade-in-up pointer-events-auto">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4 drop-shadow-2xl">
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

        {/* Slide caption */}
        <div
          className="absolute bottom-24 left-8 z-20 transition-opacity duration-700"
          style={{ opacity: phase === "hold" ? 1 : 0 }}
        >
          <p className="text-foreground/70 text-sm uppercase tracking-widest">{heroSlides[currentSlide].tagline}</p>
          <p className="text-foreground text-2xl md:text-3xl font-semibold">{heroSlides[currentSlide].name}</p>
        </div>

        {/* Blackout overlay for cinematic transition (behind foreground text) */}
        <div
          className="absolute inset-0 bg-black z-10 pointer-events-none"
          style={{
            opacity: blackoutOpacity,
            transition: `opacity ${FADE_DURATION}ms ease-in-out`,
          }}
        />

        {/* Indicator dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === currentSlide ? "bg-primary w-8" : "bg-foreground/30 w-2.5 hover:bg-foreground/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
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
        const Icon = cat.icon;

        // Beaches section: featured 3 from full beaches list + See All
        if (cat.key === "beach") {
          const featuredBeaches = [
            keralaBeaches.find((b) => b.id === "kovalam")!,
            keralaBeaches.find((b) => b.id === "varkala")!,
            keralaBeaches.find((b) => b.id === "cherai")!,
          ];
          return (
            <section key={cat.key} id={`cat-${cat.key}`} className="py-12 px-4">
              <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                    <Icon className={`w-7 h-7 ${cat.color}`} />
                    {t(cat.label)}
                  </h2>
                  <Button
                    variant="ghost"
                    onClick={() => navigate("/beaches")}
                    className="text-primary hover:text-primary hover:bg-primary/10"
                  >
                    See All <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredBeaches.map((beach) => (
                    <Card
                      key={beach.id}
                      className="overflow-hidden bg-gradient-card hover:shadow-glow transition-all duration-300 cursor-pointer group"
                      onClick={() => navigate("/beaches")}
                    >
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={beach.image}
                          alt={beach.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          width={1024}
                          height={640}
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-foreground mb-2">{beach.name}</h3>
                        <p className="text-muted-foreground text-sm line-clamp-2 mb-3">{beach.description}</p>
                        <div className="flex items-center text-accent text-sm">
                          <MapPin className="w-3 h-3 mr-1" />
                          {beach.district}
                          <ChevronRight className="w-4 h-4 ml-auto text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          );
        }

        const places = getPlacesByCategory(cat.key);
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
import wayanad from "@/assets/kerala/wayanad.jpg";
import soochipara from "@/assets/kerala/soochipara.jpg";
import kumarakom from "@/assets/kerala/kumarakom.jpg";
import marari from "@/assets/beaches/marari.jpg";

const imageMap: Record<string, string> = {
  munnar, alleppey, varkala, kovalam, athirappilly, fortkochi, padmanabhaswamy,
  wayanad, soochipara, kumarakom, marari,
};
function getImageForPlace(key: string) {
  return imageMap[key] || munnar;
}

export default Index;
