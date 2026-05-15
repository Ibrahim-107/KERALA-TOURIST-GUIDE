export interface KeralaPlace {
  id: string;
  name: string;
  description: string;
  location: string;
  category: "beach" | "hill-station" | "waterfall" | "backwater" | "temple";
  rating: number;
  bestTimeToVisit: string;
  activities: string[];
  travelTips: string[];
  imageKey: string;
}

export const keralaPlaces: KeralaPlace[] = [
  // Beaches
  {
    id: "kovalam-beach",
    name: "Kovalam Beach",
    description: "One of Kerala's most famous beaches, Kovalam features three crescent-shaped beaches separated by rocky outcroppings. The lighthouse beach offers stunning sunset views and is perfect for swimming and surfing.",
    location: "Thiruvananthapuram",
    category: "beach",
    rating: 4.6,
    bestTimeToVisit: "September to March",
    activities: ["Swimming", "Surfing", "Lighthouse visit", "Ayurvedic spa", "Sunset watching"],
    travelTips: ["Visit early morning to avoid crowds", "Carry sunscreen", "Try local seafood at beach shacks"],
    imageKey: "kovalam"
  },
  {
    id: "varkala-cliff",
    name: "Varkala Cliff Beach",
    description: "Unique cliff-top beach with dramatic red laterite cliffs overlooking the Arabian Sea. Known for its mineral water springs and the ancient Janardhana Swamy Temple nearby.",
    location: "Varkala, Thiruvananthapuram",
    category: "beach",
    rating: 4.7,
    bestTimeToVisit: "October to February",
    activities: ["Cliff-top walks", "Paragliding", "Yoga retreats", "Temple visit", "Shopping at cliff market"],
    travelTips: ["Stay at clifftop resorts for best views", "Visit Papanasam beach for holy dip"],
    imageKey: "varkala"
  },
  {
    id: "marari-beach",
    name: "Marari Beach",
    description: "A pristine, secluded beach in Alleppey known for its golden sands and peaceful atmosphere. Perfect for those seeking a quiet, less commercialized beach experience.",
    location: "Mararikulam, Alappuzha",
    category: "beach",
    rating: 4.5,
    bestTimeToVisit: "November to February",
    activities: ["Relaxation", "Village walks", "Fishing with locals", "Bird watching"],
    travelTips: ["Ideal for couples and solo travelers", "Try coconut toddy from local shops"],
    imageKey: "marari"
  },
  // Hill Stations
  {
    id: "munnar",
    name: "Munnar",
    description: "A breathtaking hill station at 1,600m altitude, famed for its endless rolling tea plantations, misty mountains, and cool climate. Once a summer retreat for the British, Munnar is now Kerala's most popular hill destination.",
    location: "Idukki",
    category: "hill-station",
    rating: 4.8,
    bestTimeToVisit: "September to May",
    activities: ["Tea plantation tour", "Trekking", "Eravikulam National Park", "Mattupetty Dam", "Photo walks"],
    travelTips: ["Carry warm clothing", "Book hotels in advance during peak season", "Try fresh tea from plantations"],
    imageKey: "wayanad"
  },
  {
    id: "wayanad",
    name: "Wayanad",
    description: "A lush green district in the Western Ghats with ancient caves, pristine waterfalls, and wildlife sanctuaries. Known for its spice plantations and bamboo forests.",
    location: "Wayanad",
    category: "hill-station",
    rating: 4.6,
    bestTimeToVisit: "October to May",
    activities: ["Edakkal Caves", "Bamboo rafting", "Wildlife safari", "Spice garden tour", "Zipline at Wayanad Adventure Park"],
    travelTips: ["Best explored by car", "Visit Chembra Peak for the heart-shaped lake"],
    imageKey: "munnar"
  },
  // Waterfalls
  {
    id: "athirappilly",
    name: "Athirappilly Falls",
    description: "Known as the 'Niagara of India', this majestic 80-foot waterfall cascades through dense tropical forest. It was featured in several Bollywood films including Bahubali.",
    location: "Thrissur",
    category: "waterfall",
    rating: 4.7,
    bestTimeToVisit: "June to September (monsoon) for full flow",
    activities: ["Trekking", "Photography", "Nature walks", "Bird watching", "Visiting Vazhachal Falls nearby"],
    travelTips: ["Wear sturdy shoes", "Visit during monsoon for the most dramatic views", "Carry rain gear"],
    imageKey: "athirappilly"
  },
  {
    id: "soochipara",
    name: "Soochipara Falls",
    description: "A stunning three-tiered waterfall plunging 200 meters through dense forest in Wayanad. Also known as Sentinel Rock Waterfalls.",
    location: "Wayanad",
    category: "waterfall",
    rating: 4.4,
    bestTimeToVisit: "July to October",
    activities: ["Trekking through forest", "Natural pool swimming", "Photography"],
    travelTips: ["Steep trek of about 1km to reach falls", "Not recommended during heavy rain"],
    imageKey: "soochipara"
  },
  // Backwaters
  {
    id: "alleppey-backwaters",
    name: "Alleppey Backwaters",
    description: "The jewel of Kerala tourism — a vast network of lagoons, lakes, and canals stretching over 900km. Experience life on the water aboard a traditional kettuvallam houseboat.",
    location: "Alappuzha",
    category: "backwater",
    rating: 4.9,
    bestTimeToVisit: "August to March",
    activities: ["Houseboat stay", "Canoe rides", "Village tours", "Snake boat race viewing", "Fishing"],
    travelTips: ["Book houseboats in advance", "August to see Nehru Trophy boat race", "Try karimeen fish on board"],
    imageKey: "alleppey"
  },
  {
    id: "kumarakom",
    name: "Kumarakom",
    description: "A cluster of small islands on Vembanad Lake, offering serene backwater experiences and a renowned bird sanctuary attracting migratory birds from across the world.",
    location: "Kottayam",
    category: "backwater",
    rating: 4.6,
    bestTimeToVisit: "November to February",
    activities: ["Bird watching", "Houseboat cruise", "Fishing", "Ayurvedic treatments", "Village walks"],
    travelTips: ["Visit early morning for bird watching", "Combine with Alleppey backwaters trip"],
    imageKey: "kumarakom"
  },
  // Temples & Culture
  {
    id: "padmanabhaswamy",
    name: "Padmanabhaswamy Temple",
    description: "One of the richest and most sacred temples in the world, dedicated to Lord Vishnu. The temple's Dravidian architecture with its towering gopuram is awe-inspiring.",
    location: "Thiruvananthapuram",
    category: "temple",
    rating: 4.8,
    bestTimeToVisit: "Year-round, festivals in March-April",
    activities: ["Temple worship", "Architecture appreciation", "Cultural photography", "Nearby palace visit"],
    travelTips: ["Dress code strictly enforced", "Non-Hindus cannot enter inner sanctum", "Visit early to avoid queues"],
    imageKey: "padmanabhaswamy"
  },
  {
    id: "fort-kochi",
    name: "Fort Kochi",
    description: "A historic waterfront area showcasing Kerala's multicultural heritage — Portuguese churches, Dutch palaces, Jewish synagogues, and iconic Chinese fishing nets all in one neighborhood.",
    location: "Ernakulam",
    category: "temple",
    rating: 4.7,
    bestTimeToVisit: "October to March, Kochi-Muziris Biennale (Dec-Mar)",
    activities: ["Chinese fishing nets", "Mattancherry Palace", "Jewish Synagogue", "Street art walk", "Kathakali show"],
    travelTips: ["Explore on foot or bicycle", "Visit during Biennale for art installations"],
    imageKey: "fortkochi"
  }
];

export const getPlacesByCategory = (category: KeralaPlace["category"]) =>
  keralaPlaces.filter((p) => p.category === category);

export const getPlaceById = (id: string) =>
  keralaPlaces.find((p) => p.id === id);
