export interface DistrictPlace {
  name: string;
  description: string;
  rating: number;
  timing?: string;
  entryFee?: string;
}

export interface DistrictFood {
  name: string;
  description: string;
  rating: number;
}

export interface DistrictCulture {
  name: string;
  description: string;
  timing: string;
  rating: number;
}

export interface DistrictHotel {
  name: string;
  rating: number;
  price: string;
  amenities: string[];
}

export interface DistrictBusStand {
  name: string;
  location: string;
  services: string;
  rating: number;
}

export interface DistrictInfo {
  name: string;
  tagline: string;
  places: DistrictPlace[];
  foods: DistrictFood[];
  culture: DistrictCulture[];
  hotels: DistrictHotel[];
  busStands: DistrictBusStand[];
}

export const districtData: Record<string, DistrictInfo> = {
  thiruvananthapuram: {
    name: "Thiruvananthapuram",
    tagline: "The Evergreen City of India",
    places: [
      { name: "Padmanabhaswamy Temple", description: "Ancient Hindu temple dedicated to Lord Vishnu, known for its intricate Dravidian architecture and legendary underground vaults", rating: 4.8, timing: "3:30 AM - 12:00 PM, 5:00 PM - 8:00 PM", entryFee: "Free" },
      { name: "Kovalam Beach", description: "Famous crescent-shaped beach with three adjoining beaches, popular for surfing and lighthouse views", rating: 4.6, timing: "24 hours", entryFee: "Free" },
      { name: "Napier Museum", description: "Historic art and natural history museum with stunning Indo-Saracenic architecture", rating: 4.3, timing: "10:00 AM - 5:00 PM (Closed Mondays)", entryFee: "₹20" },
      { name: "Kuthira Malika Palace", description: "18th-century royal palace with 122 carved wooden horses and traditional Kerala architecture", rating: 4.4, timing: "8:30 AM - 5:30 PM", entryFee: "₹20" },
    ],
    foods: [
      { name: "Boli Payasam", description: "Traditional sweet dessert made with jaggery and coconut milk", rating: 4.9 },
      { name: "Karimeen Curry", description: "Spicy fish curry made with pearl spot fish in coconut gravy", rating: 4.7 },
      { name: "Appam with Stew", description: "Fermented rice pancake served with coconut milk vegetable stew", rating: 4.6 },
      { name: "Puttu and Kadala", description: "Steamed rice cake layered with coconut, served with black chickpea curry", rating: 4.5 },
    ],
    culture: [
      { name: "Onam Festival", description: "Kerala's grand harvest festival with flower carpets (Pookalam), boat races, and Onasadya feast", timing: "August-September", rating: 4.9 },
      { name: "Kathakali Performance", description: "Classical dance-drama with elaborate costumes, facial makeup, and mythological stories", timing: "Year-round at various venues", rating: 4.8 },
      { name: "Theyyam Ritual", description: "Ancient ritual art form combining dance, music, and religious ceremony", timing: "October-May", rating: 4.7 },
    ],
    hotels: [
      { name: "Taj Green Cove Resort & Spa", rating: 4.8, price: "₹15,000/night", amenities: ["Spa", "Pool", "Beach Access", "Restaurant"] },
      { name: "The Leela Kovalam", rating: 4.7, price: "₹12,000/night", amenities: ["Ocean View", "Ayurveda Center", "Multi-cuisine"] },
      { name: "Vivanta Trivandrum", rating: 4.5, price: "₹8,000/night", amenities: ["City Center", "Business Center", "Fitness"] },
      { name: "Hotel Residency Tower", rating: 4.2, price: "₹3,500/night", amenities: ["Free WiFi", "Restaurant", "Room Service"] },
    ],
    busStands: [
      { name: "Thampanoor Central Bus Station", location: "Thampanoor", services: "Interstate & Local buses", rating: 4.1 },
      { name: "East Fort Bus Station", location: "Fort area", services: "Local & nearby districts", rating: 3.9 },
      { name: "Kovalam Bus Stand", location: "Kovalam Beach", services: "Beach route buses", rating: 4.0 },
      { name: "Kazhakoottam Bus Stand", location: "IT Corridor", services: "Tech park & university routes", rating: 3.8 },
    ],
  },

  alappuzha: {
    name: "Alappuzha",
    tagline: "Venice of the East",
    places: [
      { name: "Alleppey Backwaters", description: "Iconic network of lagoons, canals, and lakes stretching over 900 km — best experienced on a traditional kettuvallam houseboat", rating: 4.9, timing: "24 hours", entryFee: "Houseboat from ₹6,000" },
      { name: "Alappuzha Beach", description: "Historic beach with a 137-year-old pier, lighthouse, and beautiful sunset views over the Arabian Sea", rating: 4.4, timing: "24 hours", entryFee: "Free" },
      { name: "Marari Beach", description: "Pristine and secluded golden sand beach, ideal for a peaceful and less commercialized experience", rating: 4.5, timing: "24 hours", entryFee: "Free" },
      { name: "Krishnapuram Palace", description: "18th-century palace with Kerala's largest mural painting depicting Gajendra Moksham", rating: 4.2, timing: "9:30 AM - 4:30 PM", entryFee: "₹25" },
    ],
    foods: [
      { name: "Karimeen Pollichathu", description: "Pearl spot fish marinated in spices, wrapped in banana leaf and grilled to perfection", rating: 4.9 },
      { name: "Duck Roast (Tharavu Roast)", description: "Slow-cooked spicy duck curry, a famous Kuttanad specialty", rating: 4.7 },
      { name: "Kallappam", description: "Fermented rice hoppers served with spicy coconut egg curry", rating: 4.5 },
      { name: "Toddy Shop Fish Curry", description: "Fiery red fish curry served in toddy shops with tapioca", rating: 4.6 },
    ],
    culture: [
      { name: "Nehru Trophy Boat Race", description: "World-famous snake boat race on Punnamada Lake with massive participation", timing: "Second Saturday of August", rating: 4.9 },
      { name: "Champakulam Moolam Boat Race", description: "Oldest boat race in Kerala held at Champakulam village", timing: "June-July", rating: 4.6 },
      { name: "Chettikulangara Bharani Festival", description: "Spectacular temple festival with Kuthiyottam rituals and vibrant processions", timing: "February-March", rating: 4.7 },
    ],
    hotels: [
      { name: "Marari Beach Resort (CGH Earth)", rating: 4.8, price: "₹14,000/night", amenities: ["Beach Access", "Ayurveda", "Pool", "Organic Dining"] },
      { name: "Lake Palace Resort", rating: 4.5, price: "₹7,000/night", amenities: ["Lake View", "Houseboat Rides", "Restaurant"] },
      { name: "Ramada by Wyndham Alleppey", rating: 4.4, price: "₹5,500/night", amenities: ["Pool", "Free WiFi", "Restaurant", "Spa"] },
      { name: "Pagoda Resorts", rating: 4.1, price: "₹3,000/night", amenities: ["Backwater View", "Restaurant", "Room Service"] },
    ],
    busStands: [
      { name: "Alappuzha KSRTC Bus Station", location: "Town center", services: "Interstate & district buses", rating: 4.0 },
      { name: "Cherthala Bus Stand", location: "Cherthala town", services: "Local & Kochi-bound routes", rating: 3.8 },
      { name: "Haripad Bus Stand", location: "Haripad", services: "Southern Kerala routes", rating: 3.7 },
      { name: "Kayamkulam Bus Stand", location: "Kayamkulam", services: "Kollam & Kottayam routes", rating: 3.8 },
    ],
  },

  ernakulam: {
    name: "Ernakulam",
    tagline: "Queen of the Arabian Sea",
    places: [
      { name: "Fort Kochi", description: "Historic waterfront area with Portuguese churches, Dutch palaces, Jewish synagogues, and iconic Chinese fishing nets", rating: 4.7, timing: "24 hours", entryFee: "Free" },
      { name: "Mattancherry Palace", description: "16th-century Dutch Palace with stunning Kerala murals depicting Hindu mythology", rating: 4.5, timing: "10:00 AM - 5:00 PM (Closed Fridays)", entryFee: "₹10" },
      { name: "Marine Drive", description: "Scenic waterfront promenade along Vembanad Lake, ideal for evening walks and boat rides", rating: 4.4, timing: "24 hours", entryFee: "Free" },
      { name: "Cherai Beach", description: "Beautiful beach at the northern tip of Vypin Island, known for dolphins and golden sand", rating: 4.3, timing: "24 hours", entryFee: "Free" },
    ],
    foods: [
      { name: "Kochi Biryani", description: "Fragrant rice dish with a unique coastal twist using coconut milk and fresh spices", rating: 4.7 },
      { name: "Malabar Parotta with Beef Fry", description: "Layered flaky flatbread paired with spicy Kerala-style beef fry", rating: 4.8 },
      { name: "Prawn Moilee", description: "Mild coconut milk prawn curry with a hint of turmeric and green chili", rating: 4.6 },
      { name: "Ela Ada", description: "Sweet steamed rice parcels filled with coconut and jaggery, wrapped in banana leaf", rating: 4.4 },
    ],
    culture: [
      { name: "Kochi-Muziris Biennale", description: "India's largest contemporary art exhibition, transforming Fort Kochi into an art gallery", timing: "December-March (biennial)", rating: 4.9 },
      { name: "Cochin Carnival", description: "10-day New Year celebration with parades, music, and the famous burning of Pappanji effigy", timing: "December 25 - January 1", rating: 4.7 },
      { name: "Thrissur-style Kathakali at See India Foundation", description: "Nightly Kathakali performances with pre-show makeup demonstrations", timing: "Year-round, evenings", rating: 4.6 },
    ],
    hotels: [
      { name: "Taj Malabar Resort & Spa", rating: 4.8, price: "₹18,000/night", amenities: ["Harbour View", "Spa", "Pool", "Heritage Wing"] },
      { name: "Grand Hyatt Kochi Bolgatty", rating: 4.7, price: "₹12,000/night", amenities: ["Marina", "Golf", "Spa", "Multiple Restaurants"] },
      { name: "Crowne Plaza Kochi", rating: 4.5, price: "₹8,500/night", amenities: ["Pool", "Gym", "Business Center", "Restaurant"] },
      { name: "OYO Townhouse Kochi", rating: 4.0, price: "₹2,500/night", amenities: ["Free WiFi", "AC", "Breakfast"] },
    ],
    busStands: [
      { name: "Ernakulam KSRTC Bus Station", location: "Near South Railway Station", services: "Interstate & long-distance", rating: 4.2 },
      { name: "Ernakulam Private Bus Stand (Kaloor)", location: "Kaloor", services: "Private operators to all Kerala", rating: 3.9 },
      { name: "Fort Kochi Bus Terminal", location: "Fort Kochi", services: "Local & island routes", rating: 3.7 },
      { name: "Aluva Bus Stand", location: "Aluva", services: "Northern Kerala & hill routes", rating: 3.8 },
    ],
  },

  idukki: {
    name: "Idukki",
    tagline: "Spice Garden of Kerala",
    places: [
      { name: "Munnar", description: "Hill station at 1,600m with endless rolling tea plantations, misty mountains, and cool climate — Kerala's most popular hill destination", rating: 4.8, timing: "24 hours", entryFee: "Free" },
      { name: "Idukki Arch Dam", description: "Asia's first arch dam built between two mountains, Kuravan and Kurathi, with a stunning reservoir", rating: 4.5, timing: "9:00 AM - 5:00 PM", entryFee: "₹25" },
      { name: "Eravikulam National Park", description: "Home to the endangered Nilgiri Tahr, with stunning shola grasslands and Anamudi peak — South India's highest", rating: 4.7, timing: "7:00 AM - 4:00 PM", entryFee: "₹125" },
      { name: "Mattupetty Dam", description: "Beautiful dam surrounded by tea gardens and shola forests, popular for boating and elephant rides", rating: 4.4, timing: "9:00 AM - 5:00 PM", entryFee: "₹30" },
    ],
    foods: [
      { name: "Cardamom Tea", description: "Freshly brewed tea with locally grown cardamom from Idukki's spice plantations", rating: 4.8 },
      { name: "Bamboo Chicken", description: "Chicken marinated with spices and slow-cooked inside bamboo shoots over fire", rating: 4.7 },
      { name: "Wild Honey with Pathiri", description: "Locally harvested forest honey served with rice flatbread", rating: 4.5 },
      { name: "Kappa Biriyani", description: "Unique tapioca-based biryani popular in the hilly regions", rating: 4.4 },
    ],
    culture: [
      { name: "Thekkady Tribal Heritage", description: "Learn about Mannan and Paliyan tribal communities, their traditions and forest livelihoods", timing: "Year-round", rating: 4.5 },
      { name: "Spice Plantation Tours", description: "Walk through cardamom, pepper, and cinnamon plantations learning traditional cultivation", timing: "Year-round, mornings best", rating: 4.7 },
      { name: "Mangala Devi Temple Festival", description: "Annual festival at the ancient hilltop temple on the Tamil Nadu border", timing: "April (Chithirai)", rating: 4.4 },
    ],
    hotels: [
      { name: "Spice Tree Munnar", rating: 4.8, price: "₹12,000/night", amenities: ["Mountain View", "Infinity Pool", "Spa", "Restaurant"] },
      { name: "Windermere Estate", rating: 4.7, price: "₹9,000/night", amenities: ["Plantation Stay", "Trekking", "Organic Food"] },
      { name: "Taj Kumarakom (Thekkady Branch)", rating: 4.6, price: "₹10,000/night", amenities: ["Lakeside", "Ayurveda", "Nature Walks"] },
      { name: "Greenwoods Thekkady", rating: 4.2, price: "₹3,500/night", amenities: ["Spice Garden", "Restaurant", "Free WiFi"] },
    ],
    busStands: [
      { name: "Munnar Bus Stand", location: "Munnar town center", services: "Kochi, Madurai, Coimbatore routes", rating: 3.9 },
      { name: "Thodupuzha Bus Stand", location: "Thodupuzha town", services: "Kochi & Kottayam routes", rating: 4.0 },
      { name: "Thekkady Bus Stand", location: "Kumily", services: "Madurai, Kottayam, Kochi routes", rating: 3.8 },
      { name: "Adimali Bus Stand", location: "Adimali", services: "Munnar & Kochi routes", rating: 3.7 },
    ],
  },

  kannur: {
    name: "Kannur",
    tagline: "Land of Looms and Lores",
    places: [
      { name: "St. Angelo Fort", description: "16th-century Portuguese fort overlooking the Arabian Sea with stunning views and rich history", rating: 4.5, timing: "8:00 AM - 6:00 PM", entryFee: "₹20" },
      { name: "Muzhappilangad Drive-in Beach", description: "India's longest drive-in beach stretching 4 km where you can drive along the shore", rating: 4.6, timing: "24 hours", entryFee: "Free" },
      { name: "Payyambalam Beach", description: "Clean and spacious town beach with a beautiful sculpture garden and calm waters", rating: 4.3, timing: "24 hours", entryFee: "Free" },
      { name: "Parassinikadavu Snake Park & Temple", description: "Famous Muthappan temple with daily Theyyam performances and adjacent snake park", rating: 4.4, timing: "6:00 AM - 8:00 PM", entryFee: "₹15 (snake park)" },
    ],
    foods: [
      { name: "Thalassery Biryani", description: "Legendary biryani made with kaima rice, unique spice blend, and slow-cooked meat", rating: 4.9 },
      { name: "Kallummakkaya Nirachathu", description: "Stuffed mussels filled with spiced rice and deep fried — a Malabar coastal delicacy", rating: 4.7 },
      { name: "Unnakkaya", description: "Sweet banana fritter stuffed with cashew, raisins, and sugar — a Malabar snack", rating: 4.6 },
      { name: "Arikkadukka", description: "Stuffed mussels with shallots, coconut, and spices, steamed to perfection", rating: 4.5 },
    ],
    culture: [
      { name: "Theyyam Performances", description: "Ancient ritual art form with spectacular costumes, face painting, and divine possession dances", timing: "October-May at various temples", rating: 4.9 },
      { name: "Kannur Handloom Weaving", description: "Visit traditional handloom factories producing world-famous Kannur cotton textiles", timing: "Year-round", rating: 4.5 },
      { name: "Kolkali & Duffmuttu", description: "Traditional folk art forms with rhythmic stick dances and drum performances", timing: "Festival seasons", rating: 4.4 },
    ],
    hotels: [
      { name: "The Cliff Resort", rating: 4.6, price: "₹8,000/night", amenities: ["Cliff View", "Pool", "Ayurveda", "Restaurant"] },
      { name: "Mascot Beach Resort", rating: 4.4, price: "₹5,500/night", amenities: ["Beach Access", "Pool", "Multi-cuisine"] },
      { name: "Kamala International Hotel", rating: 4.2, price: "₹3,200/night", amenities: ["City Center", "Restaurant", "Free WiFi"] },
      { name: "Costa Malabari", rating: 4.5, price: "₹6,000/night", amenities: ["Beachfront", "Heritage Stay", "Local Cuisine"] },
    ],
    busStands: [
      { name: "Kannur KSRTC Bus Station", location: "City center", services: "Interstate & all-Kerala routes", rating: 4.1 },
      { name: "Thalassery Bus Stand", location: "Thalassery town", services: "Local & Wayanad routes", rating: 3.9 },
      { name: "Payyanur Bus Stand", location: "Payyanur", services: "Kasaragod & Mangalore routes", rating: 3.7 },
      { name: "Iritty Bus Stand", location: "Iritty", services: "Interior & Wayanad routes", rating: 3.6 },
    ],
  },

  kasaragod: {
    name: "Kasaragod",
    tagline: "Land of Gods and Forts",
    places: [
      { name: "Bekal Fort", description: "Kerala's largest and best-preserved fort with circular structure offering panoramic sea views", rating: 4.7, timing: "8:00 AM - 5:30 PM", entryFee: "₹25" },
      { name: "Bekal Beach", description: "Pristine beach adjacent to Bekal Fort with golden sands and calm waters", rating: 4.5, timing: "24 hours", entryFee: "Free" },
      { name: "Ananthapura Lake Temple", description: "Kerala's only lake temple, believed to be the original seat of Ananthapadmanabha", rating: 4.4, timing: "5:30 AM - 12:30 PM, 5:30 PM - 8:00 PM", entryFee: "Free" },
      { name: "Ranipuram (Madathumala)", description: "Mini-Ooty of Kerala — a hilltop with shola grasslands and trekking trails at 750m altitude", rating: 4.3, timing: "6:00 AM - 6:00 PM", entryFee: "₹20" },
    ],
    foods: [
      { name: "Kori Rotti", description: "Crispy rice wafers served with spicy chicken curry — a Tulu-Kannada influence", rating: 4.7 },
      { name: "Pothichoru", description: "Rice and curry wrapped in banana or teak leaf — a traditional packed meal", rating: 4.5 },
      { name: "Malabar Fish Curry", description: "Tangy red fish curry with kudampuli (Malabar tamarind) and coconut", rating: 4.6 },
      { name: "Kadambattu", description: "Steamed rice dumplings served with spicy chicken or fish curry", rating: 4.4 },
    ],
    culture: [
      { name: "Theyyam of North Malabar", description: "Kasaragod hosts some of the most elaborate and ancient Theyyam rituals in Kerala", timing: "November-May", rating: 4.9 },
      { name: "Yakshagana", description: "Traditional Kannada dance-drama performed with elaborate costumes and storytelling", timing: "November-May", rating: 4.6 },
      { name: "Poorakkali", description: "Ritualistic folk art performed during temple festivals with group choreography", timing: "December-April", rating: 4.4 },
    ],
    hotels: [
      { name: "Taj Bekal Resort & Spa", rating: 4.8, price: "₹16,000/night", amenities: ["Beach View", "Spa", "Pool", "Ayurveda"] },
      { name: "Lalit Resort & Spa Bekal", rating: 4.6, price: "₹11,000/night", amenities: ["Backwater Villas", "Spa", "Restaurant"] },
      { name: "Neeleshwar Hermitage", rating: 4.7, price: "₹10,000/night", amenities: ["Beach Cottages", "Yoga", "Ayurveda"] },
      { name: "Hotel City Tower", rating: 3.9, price: "₹2,200/night", amenities: ["City Center", "Restaurant", "Free WiFi"] },
    ],
    busStands: [
      { name: "Kasaragod KSRTC Bus Station", location: "Town center", services: "Interstate (Karnataka) & Kerala routes", rating: 3.9 },
      { name: "Kanhangad Bus Stand", location: "Kanhangad town", services: "Mangalore & Kannur routes", rating: 3.8 },
      { name: "Bekal Bus Stop", location: "Pallikkere, Bekal", services: "Fort & beach routes", rating: 3.5 },
      { name: "Uppala Bus Stand", location: "Uppala", services: "Border town routes to Karnataka", rating: 3.6 },
    ],
  },

  kollam: {
    name: "Kollam",
    tagline: "Gateway to the Backwaters",
    places: [
      { name: "Ashtamudi Lake", description: "The second largest estuarine lake in Kerala with eight arms ('Ashta-mudi'), offering scenic houseboat rides", rating: 4.7, timing: "24 hours", entryFee: "Boat from ₹2,000" },
      { name: "Thirumullavaram Beach", description: "Secluded and clean beach with shallow waters, perfect for swimming and relaxation", rating: 4.4, timing: "24 hours", entryFee: "Free" },
      { name: "Jatayu Earth's Center", description: "World's largest bird sculpture atop a hill with adventure activities and a mythological theme park", rating: 4.6, timing: "10:00 AM - 5:30 PM", entryFee: "₹400" },
      { name: "Palaruvi Waterfalls", description: "A 300-foot waterfall cascading down through dense forest, meaning 'stream of milk'", rating: 4.5, timing: "8:00 AM - 5:00 PM", entryFee: "₹15" },
    ],
    foods: [
      { name: "Cashew Curry", description: "Creamy curry made with Kollam's world-famous cashew nuts", rating: 4.6 },
      { name: "Meen Mulakittathu", description: "Spicy red fish curry cooked in earthen pot with kudampuli", rating: 4.7 },
      { name: "Kozhikkode Halwa (Kollam variant)", description: "Rich and chewy sweet made from maida, coconut oil, and sugar", rating: 4.4 },
      { name: "Avial", description: "Mixed vegetable curry with coconut paste and curry leaves — Onam feast staple", rating: 4.5 },
    ],
    culture: [
      { name: "Kollam Pooram", description: "Vibrant temple festival with elephant processions, fireworks, and traditional orchestras", timing: "April", rating: 4.7 },
      { name: "Cashew Industry Heritage", description: "Visit cashew processing factories — Kollam is India's cashew capital", timing: "Year-round", rating: 4.3 },
      { name: "President's Trophy Boat Race", description: "Prestigious boat race held on Ashtamudi Lake", timing: "November", rating: 4.5 },
    ],
    hotels: [
      { name: "Raviz Ashtamudi Resort", rating: 4.6, price: "₹8,000/night", amenities: ["Lake View", "Ayurveda", "Pool", "Restaurant"] },
      { name: "Fragrant Nature Backwater Resort", rating: 4.5, price: "₹7,000/night", amenities: ["Backwater View", "Spa", "Multi-cuisine"] },
      { name: "Hotel Sudarsan", rating: 4.1, price: "₹2,500/night", amenities: ["City Center", "Restaurant", "Free WiFi"] },
      { name: "Nani Hotel", rating: 3.9, price: "₹1,800/night", amenities: ["Budget", "AC Rooms", "Parking"] },
    ],
    busStands: [
      { name: "Kollam KSRTC Bus Station", location: "Chinnakkada", services: "Interstate & all-Kerala routes", rating: 4.0 },
      { name: "Punalur Bus Stand", location: "Punalur town", services: "Shencottah & Tamil Nadu routes", rating: 3.7 },
      { name: "Paravur Bus Stand", location: "Paravur", services: "Thiruvananthapuram routes", rating: 3.6 },
      { name: "Karunagappally Bus Stand", location: "Karunagappally", services: "Alappuzha & southern routes", rating: 3.7 },
    ],
  },

  kottayam: {
    name: "Kottayam",
    tagline: "Land of Letters, Latex and Lakes",
    places: [
      { name: "Kumarakom Bird Sanctuary", description: "6-hectare bird sanctuary on Vembanad Lake attracting migratory birds like Siberian cranes", rating: 4.6, timing: "6:00 AM - 6:00 PM", entryFee: "₹50" },
      { name: "Kumarakom Backwaters", description: "Serene cluster of islands on Vembanad Lake offering peaceful houseboat experiences", rating: 4.7, timing: "24 hours", entryFee: "Houseboat from ₹5,000" },
      { name: "Ettumanoor Mahadeva Temple", description: "Ancient Shiva temple known for its stunning murals and the annual Arattu festival", rating: 4.5, timing: "4:00 AM - 12:00 PM, 5:00 PM - 8:30 PM", entryFee: "Free" },
      { name: "Illikkal Kallu", description: "A massive mushroom-shaped rock formation atop a hill offering breathtaking panoramic views", rating: 4.4, timing: "6:00 AM - 5:00 PM", entryFee: "Free" },
    ],
    foods: [
      { name: "Kottayam Fish Curry (Meen Vevichathu)", description: "Fiery red fish curry with raw mango and kudampuli — distinctly Central Kerala style", rating: 4.8 },
      { name: "Beef Fry (Erachi Olathiyathu)", description: "Dry-roasted spiced beef with coconut pieces and curry leaves", rating: 4.7 },
      { name: "Palappam with Mutton Stew", description: "Soft, lacy rice pancakes with fragrant coconut mutton stew", rating: 4.6 },
      { name: "Achappam", description: "Rose-shaped crispy snack made from rice flour and coconut milk during Christmas", rating: 4.4 },
    ],
    culture: [
      { name: "Ettumanoor Ezharaponnana", description: "Famous display of seven-and-a-half golden elephants during the temple festival", timing: "February-March", rating: 4.7 },
      { name: "Kottayam Literature Festival", description: "Kottayam is known as the newspaper capital of Kerala with a rich literary tradition", timing: "Year-round events", rating: 4.4 },
      { name: "Syrian Christian Heritage", description: "Explore centuries-old churches and the unique Kerala Christian cultural traditions", timing: "Year-round", rating: 4.5 },
    ],
    hotels: [
      { name: "Kumarakom Lake Resort", rating: 4.8, price: "₹15,000/night", amenities: ["Lake View", "Infinity Pool", "Ayurveda", "Heritage"] },
      { name: "Coconut Lagoon (CGH Earth)", rating: 4.7, price: "₹12,000/night", amenities: ["Heritage Villas", "Butterfly Garden", "Restaurant"] },
      { name: "Taj Kumarakom Resort & Spa", rating: 4.7, price: "₹14,000/night", amenities: ["Spa", "Pool", "Lake View", "Multi-cuisine"] },
      { name: "Hotel Windsor Castle", rating: 4.1, price: "₹2,800/night", amenities: ["City Center", "Restaurant", "Free WiFi", "Parking"] },
    ],
    busStands: [
      { name: "Kottayam KSRTC Bus Station", location: "Town center", services: "All-Kerala & interstate routes", rating: 4.1 },
      { name: "Changanassery Bus Stand", location: "Changanassery", services: "Southern & central Kerala routes", rating: 3.9 },
      { name: "Pala Bus Stand", location: "Pala town", services: "Idukki & Ernakulam routes", rating: 3.8 },
      { name: "Ettumanoor Bus Stand", location: "Ettumanoor", services: "Local & temple routes", rating: 3.7 },
    ],
  },

  kozhikode: {
    name: "Kozhikode",
    tagline: "City of Spices",
    places: [
      { name: "Kozhikode Beach", description: "Iconic beach with two piers, a marine aquarium, and the historic lighthouse area", rating: 4.4, timing: "24 hours", entryFee: "Free" },
      { name: "Kappad Beach", description: "Historic beach where Vasco da Gama landed in 1498, marking European arrival in India", rating: 4.5, timing: "24 hours", entryFee: "Free" },
      { name: "Mananchira Square", description: "Beautiful town square built around an ancient swimming pool of the Zamorin kings", rating: 4.3, timing: "24 hours", entryFee: "Free" },
      { name: "Thusharagiri Waterfalls", description: "Three-tiered waterfalls surrounded by virgin forest — meaning 'curtain of snow'", rating: 4.5, timing: "8:00 AM - 5:00 PM", entryFee: "₹20" },
    ],
    foods: [
      { name: "Kozhikode Halwa", description: "World-famous chewy sweet made with maida, ghee, and sugar — best from SM Street", rating: 4.9 },
      { name: "Kozhikodan Biryani", description: "Fragrant biryani with short-grain kaima rice, ghee, and Malabar spice blend", rating: 4.8 },
      { name: "Chattipathiri", description: "Layered pastry with sweet or savory filling — Malabar's answer to lasagna", rating: 4.6 },
      { name: "Sulaimani (Malabar Tea)", description: "Aromatic black tea with cardamom and lemon — the signature Kozhikode welcome drink", rating: 4.7 },
    ],
    culture: [
      { name: "SM Street (Mittai Theruvu)", description: "Iconic sweet street famous for Kozhikode Halwa shops and traditional Malabar treats", timing: "Year-round", rating: 4.8 },
      { name: "Zamorin Heritage", description: "Explore the legacy of the Zamorin dynasty that ruled Calicut for centuries", timing: "Year-round at Mananchira", rating: 4.4 },
      { name: "Malabar Theyyam Traditions", description: "Witness spectacular Theyyam rituals in the villages around Kozhikode", timing: "October-April", rating: 4.7 },
    ],
    hotels: [
      { name: "The Raviz Calicut", rating: 4.6, price: "₹7,500/night", amenities: ["Sea View", "Pool", "Spa", "Multi-cuisine"] },
      { name: "Hycinth by Sparsa", rating: 4.5, price: "₹5,500/night", amenities: ["City Center", "Restaurant", "Gym", "Business Center"] },
      { name: "Kadavu Resort", rating: 4.4, price: "₹4,500/night", amenities: ["Riverside", "Ayurveda", "Restaurant"] },
      { name: "Hotel Maharani", rating: 4.0, price: "₹2,000/night", amenities: ["Central", "Restaurant", "Free WiFi"] },
    ],
    busStands: [
      { name: "Kozhikode KSRTC Bus Station", location: "Palayam", services: "Interstate & all-Kerala routes", rating: 4.2 },
      { name: "Kozhikode New Bus Stand (Mofussil)", location: "Palayam", services: "Private operators", rating: 3.8 },
      { name: "Vadakara Bus Stand", location: "Vadakara", services: "Kannur & Wayanad routes", rating: 3.7 },
      { name: "Kunnamangalam Bus Stand", location: "Kunnamangalam", services: "University & suburban routes", rating: 3.6 },
    ],
  },

  malappuram: {
    name: "Malappuram",
    tagline: "Cultural Capital of Malabar",
    places: [
      { name: "Kottakkunnu", description: "Historic hillock in the heart of the city with a beautiful park, viewpoint, and heritage structures", rating: 4.3, timing: "6:00 AM - 8:00 PM", entryFee: "Free" },
      { name: "Nilambur Teak Museum", description: "India's first teak museum showcasing the history of world's oldest teak plantation", rating: 4.4, timing: "10:00 AM - 5:00 PM (Closed Mondays)", entryFee: "₹20" },
      { name: "Thirunavaya Navamukunda Temple", description: "Ancient temple on the banks of Bharathapuzha, historically significant for Mamankam festival", rating: 4.5, timing: "5:00 AM - 12:00 PM, 5:00 PM - 8:00 PM", entryFee: "Free" },
      { name: "Adyanpara Waterfalls", description: "Scenic waterfall in the foothills of the Western Ghats near Nilambur", rating: 4.3, timing: "8:00 AM - 5:00 PM", entryFee: "₹10" },
    ],
    foods: [
      { name: "Malappuram Biryani", description: "Rich biryani with specially blended spices unique to Malappuram region", rating: 4.7 },
      { name: "Pathiri (Rice Roti)", description: "Thin, soft rice flatbread traditionally served with meat curry", rating: 4.6 },
      { name: "Chattipathiri", description: "Multi-layered sweet pastry with egg and sugar filling, a festive Malabar special", rating: 4.7 },
      { name: "Neychoru with Chicken", description: "Ghee rice served with rich, spicy chicken preparation", rating: 4.5 },
    ],
    culture: [
      { name: "Mamankam Heritage", description: "Historic Mamankam festival was once the grandest gathering in Kerala at Thirunavaya", timing: "Historical significance", rating: 4.5 },
      { name: "Oppana Dance", description: "Traditional Malabar Muslim wedding dance performed by women with clapping and singing", timing: "Wedding seasons", rating: 4.6 },
      { name: "Nercha Festivals", description: "Grand mosque festivals with elaborate food distribution and community celebrations", timing: "Various months", rating: 4.4 },
    ],
    hotels: [
      { name: "Highway Castle", rating: 4.3, price: "₹3,500/night", amenities: ["Restaurant", "Banquet Hall", "Free WiFi", "Parking"] },
      { name: "Dunes Continental", rating: 4.1, price: "₹2,800/night", amenities: ["City Center", "Multi-cuisine", "AC Rooms"] },
      { name: "Blue Nile Hotel", rating: 4.0, price: "₹2,200/night", amenities: ["Central Location", "Restaurant", "Room Service"] },
      { name: "Hotel Nesto", rating: 4.2, price: "₹3,000/night", amenities: ["Modern Rooms", "Restaurant", "Free WiFi"] },
    ],
    busStands: [
      { name: "Malappuram KSRTC Bus Station", location: "Town center", services: "All-Kerala & interstate routes", rating: 3.9 },
      { name: "Manjeri Bus Stand", location: "Manjeri", services: "Nilambur & Kozhikode routes", rating: 3.8 },
      { name: "Tirur Bus Stand", location: "Tirur", services: "Coastal & Thrissur routes", rating: 3.7 },
      { name: "Perinthalmanna Bus Stand", location: "Perinthalmanna", services: "Palakkad & Coimbatore routes", rating: 3.7 },
    ],
  },

  palakkad: {
    name: "Palakkad",
    tagline: "Gateway of Kerala",
    places: [
      { name: "Palakkad Fort (Tipu's Fort)", description: "Well-preserved 18th-century granite fort built by Hyder Ali and used by Tipu Sultan", rating: 4.4, timing: "8:00 AM - 5:00 PM", entryFee: "₹15" },
      { name: "Silent Valley National Park", description: "One of the last undisturbed tropical rainforests in India with rare lion-tailed macaques", rating: 4.7, timing: "8:00 AM - 4:00 PM", entryFee: "₹150" },
      { name: "Malampuzha Dam & Garden", description: "Popular dam with a beautiful garden featuring a ropeway, rock garden, and Japanese garden", rating: 4.5, timing: "9:00 AM - 5:00 PM", entryFee: "₹20" },
      { name: "Nelliyampathy Hills", description: "Scenic hill station at 1,572m with orange and tea estates, winding mountain roads, and misty views", rating: 4.5, timing: "24 hours", entryFee: "Free" },
    ],
    foods: [
      { name: "Palakkadan Matta Rice Dishes", description: "Traditional dishes made from the famous Palakkad red rice variety", rating: 4.6 },
      { name: "Kuzhalappam", description: "Crispy, tubular snack made from rice and coconut — a classic Palakkad savory", rating: 4.5 },
      { name: "Thari Kanji", description: "Broken wheat porridge served with coconut chutney and pickles", rating: 4.3 },
      { name: "Ela Sadya", description: "Elaborate banana-leaf feast with 24+ dishes — Palakkad Iyer style", rating: 4.8 },
    ],
    culture: [
      { name: "Chinakkathoor Pooram", description: "Spectacular temple festival with 30+ caparisoned elephants and traditional percussion", timing: "February-March", rating: 4.7 },
      { name: "Palakkad Iyer Culture", description: "Experience the unique Palakkad Tamil Brahmin cultural traditions and cuisine", timing: "Year-round", rating: 4.3 },
      { name: "Kalpathi Ratholsavam", description: "200-year-old chariot festival at Kalpathi Sree Visalakshi Temple (Dakshin Kashi)", timing: "November", rating: 4.8 },
    ],
    hotels: [
      { name: "Kadavu Resort Palakkad", rating: 4.5, price: "₹5,000/night", amenities: ["Riverside", "Pool", "Ayurveda", "Restaurant"] },
      { name: "Indus Valley Ayurvedic Centre", rating: 4.6, price: "₹8,000/night", amenities: ["Ayurveda", "Yoga", "Organic Food", "Nature"] },
      { name: "Fort Palace Hotel", rating: 4.2, price: "₹3,200/night", amenities: ["Near Fort", "Restaurant", "Business Center"] },
      { name: "Hotel Gazala", rating: 3.9, price: "₹1,800/night", amenities: ["Budget", "Restaurant", "Free WiFi"] },
    ],
    busStands: [
      { name: "Palakkad KSRTC Bus Station", location: "Town center", services: "Coimbatore, Chennai & all-Kerala routes", rating: 4.1 },
      { name: "Ottapalam Bus Stand", location: "Ottapalam", services: "Thrissur & Shoranur routes", rating: 3.8 },
      { name: "Chittur Bus Stand", location: "Chittur", services: "Tamil Nadu border routes", rating: 3.7 },
      { name: "Mannarkkad Bus Stand", location: "Mannarkkad", services: "Silent Valley & Nilambur routes", rating: 3.7 },
    ],
  },

  pathanamthitta: {
    name: "Pathanamthitta",
    tagline: "Pilgrim Capital of Kerala",
    places: [
      { name: "Sabarimala Ayyappa Temple", description: "One of India's most visited pilgrimage sites, nestled in dense forest atop the Sabari Hills", rating: 4.8, timing: "Mandala-Makaravilakku season (Nov-Jan) & monthly", entryFee: "Free" },
      { name: "Gavi", description: "Pristine eco-tourism destination with cardamom plantations, wildlife, and breathtaking landscapes", rating: 4.6, timing: "6:00 AM - 6:00 PM", entryFee: "₹300 (package)" },
      { name: "Perunthenaruvi Waterfalls", description: "Beautiful waterfalls with rock pools, meaning 'river of honey' — ideal for swimming", rating: 4.4, timing: "8:00 AM - 5:00 PM", entryFee: "₹15" },
      { name: "Aranmula Parthasarathy Temple", description: "Ancient Krishna temple famous for Aranmula Kannadi (metal mirror) and snake boat race", rating: 4.5, timing: "5:00 AM - 12:00 PM, 5:00 PM - 8:00 PM", entryFee: "Free" },
    ],
    foods: [
      { name: "Aranmula Sadya", description: "Traditional feast served during Onam in Aranmula with unique local preparations", rating: 4.7 },
      { name: "Kumbilappam", description: "Steamed rice and coconut sweet wrapped in turmeric leaf", rating: 4.5 },
      { name: "Vazhayila", description: "Banana fritters deep-fried in coconut oil — a popular temple food", rating: 4.3 },
      { name: "Meen Curry with Kachampuli", description: "Tangy fish curry unique to the region with a special souring agent", rating: 4.6 },
    ],
    culture: [
      { name: "Sabarimala Pilgrimage", description: "Millions visit the Ayyappa temple after 41 days of vratha (fasting and austerity)", timing: "November-January (peak)", rating: 4.9 },
      { name: "Aranmula Boat Race (Uthrattadhi Vallamkali)", description: "Sacred boat race held during Onam with snake boats and devotional singing", timing: "August-September", rating: 4.8 },
      { name: "Aranmula Kannadi Making", description: "Ancient craft of making metal alloy mirrors — a protected geographical indication", timing: "Year-round workshops", rating: 4.5 },
    ],
    hotels: [
      { name: "Greenwoods Resort Thekkady", rating: 4.4, price: "₹4,500/night", amenities: ["Nature View", "Restaurant", "Trekking"] },
      { name: "Abad Green Forest", rating: 4.3, price: "₹3,800/night", amenities: ["Forest Setting", "Ayurveda", "Restaurant"] },
      { name: "Hotel Aida", rating: 4.0, price: "₹2,200/night", amenities: ["City Center", "Restaurant", "Free WiFi"] },
      { name: "KTDC Ayyappa Bhavan", rating: 3.8, price: "₹1,500/night", amenities: ["Pilgrim Facility", "Canteen", "Parking"] },
    ],
    busStands: [
      { name: "Pathanamthitta KSRTC Bus Station", location: "Town center", services: "All-Kerala & Tamil Nadu routes", rating: 4.0 },
      { name: "Adoor Bus Stand", location: "Adoor", services: "Kollam & southern routes", rating: 3.8 },
      { name: "Ranni Bus Stand", location: "Ranni", services: "Sabarimala base camp routes", rating: 3.7 },
      { name: "Thiruvalla Bus Stand", location: "Thiruvalla", services: "Kottayam & Alappuzha routes", rating: 3.9 },
    ],
  },

  thrissur: {
    name: "Thrissur",
    tagline: "Cultural Capital of Kerala",
    places: [
      { name: "Vadakkunnathan Temple", description: "Ancient Shiva temple at the heart of Thrissur city, a classic example of Kerala temple architecture", rating: 4.7, timing: "3:00 AM - 11:00 AM, 5:00 PM - 8:30 PM", entryFee: "Free" },
      { name: "Athirappilly Falls", description: "Kerala's largest waterfall at 80 feet, known as the 'Niagara of India', featured in Bahubali", rating: 4.8, timing: "8:00 AM - 5:00 PM", entryFee: "₹40" },
      { name: "Cheruthuruthy (Kerala Kalamandalam)", description: "Deemed university for performing arts — the birthplace of institutionalized Kathakali training", rating: 4.5, timing: "By appointment", entryFee: "₹50" },
      { name: "Shakthan Thampuran Palace", description: "Historic palace with Kerala-Dutch architecture housing an archaeology museum", rating: 4.3, timing: "10:00 AM - 5:00 PM (Closed Mondays)", entryFee: "₹20" },
    ],
    foods: [
      { name: "Thrissur Pooram Special Feast", description: "Elaborate feast with over 20 dishes served during the Pooram festival season", rating: 4.8 },
      { name: "Chemmeen Varuthathu", description: "Crispy fried prawns with a coating of rice flour and spices — Thrissur street food", rating: 4.6 },
      { name: "Kozhi Porichathu", description: "Thrissur-style fried chicken marinated in traditional spices", rating: 4.7 },
      { name: "Vellayappam with Egg Curry", description: "Fluffy fermented rice pancakes served with rich egg curry", rating: 4.5 },
    ],
    culture: [
      { name: "Thrissur Pooram", description: "Kerala's grandest temple festival with 30+ elephants, spectacular fireworks, and Kudamattam umbrella display", timing: "April-May", rating: 4.9 },
      { name: "Kerala Kalamandalam Performances", description: "Watch authentic Kathakali, Mohiniyattam, and Koodiyattam at the prestigious performing arts university", timing: "Year-round", rating: 4.8 },
      { name: "Onam Celebrations (Thrissur Style)", description: "Grand Pulikali (tiger dance) parade through the streets of Thrissur during Onam", timing: "August-September", rating: 4.7 },
    ],
    hotels: [
      { name: "Hyatt Regency Thrissur", rating: 4.6, price: "₹8,000/night", amenities: ["Pool", "Spa", "Multi-cuisine", "Fitness"] },
      { name: "Joys Palace", rating: 4.3, price: "₹4,000/night", amenities: ["City Center", "Rooftop Restaurant", "Business Center"] },
      { name: "Casino Hotel Thrissur", rating: 4.4, price: "₹5,500/night", amenities: ["Pool", "Restaurant", "Banquet", "Gym"] },
      { name: "Hotel Luciya Palace", rating: 4.0, price: "₹2,200/night", amenities: ["Central", "Restaurant", "Free WiFi"] },
    ],
    busStands: [
      { name: "Thrissur KSRTC Bus Station (Sakthan Nagar)", location: "City center", services: "Interstate & all-Kerala routes", rating: 4.2 },
      { name: "Thrissur Private Bus Stand (North)", location: "Swaraj Round North", services: "Private operators to all Kerala", rating: 3.9 },
      { name: "Chalakudy Bus Stand", location: "Chalakudy", services: "Athirappilly & Kochi routes", rating: 3.8 },
      { name: "Guruvayur Bus Stand", location: "Guruvayur", services: "Temple town routes", rating: 4.0 },
    ],
  },

  wayanad: {
    name: "Wayanad",
    tagline: "Green Paradise of Kerala",
    places: [
      { name: "Edakkal Caves", description: "Prehistoric rock shelters with Neolithic petroglyphs dating back to 6000 BCE — a history lover's dream", rating: 4.7, timing: "9:30 AM - 4:30 PM", entryFee: "₹30" },
      { name: "Chembra Peak", description: "Wayanad's highest peak at 2,100m with the famous heart-shaped lake (Hridayathadakam) en route", rating: 4.6, timing: "7:00 AM - 2:00 PM", entryFee: "₹500 (trekking permit)" },
      { name: "Banasura Sagar Dam", description: "India's largest earth dam surrounded by mountains, offering scenic boat rides and trekking", rating: 4.5, timing: "9:00 AM - 5:00 PM", entryFee: "₹20" },
      { name: "Wayanad Wildlife Sanctuary", description: "Part of the Nilgiri Biosphere Reserve with elephants, tigers, and diverse flora", rating: 4.5, timing: "7:00 AM - 5:00 PM", entryFee: "₹50" },
    ],
    foods: [
      { name: "Wayanadan Porotta & Beef", description: "Flaky layered parotta with rich spicy beef curry — the quintessential Wayanad meal", rating: 4.8 },
      { name: "Bamboo Rice Payasam", description: "Sweet pudding made from rare bamboo rice harvested by tribal communities", rating: 4.6 },
      { name: "Wild Honey", description: "Pure forest honey collected by Paniya and Kuruma tribal people from the Western Ghats", rating: 4.7 },
      { name: "Chakkakuru Curry (Jackfruit Seed)", description: "Earthy curry made from jackfruit seeds with coconut paste and spices", rating: 4.4 },
    ],
    culture: [
      { name: "Tribal Heritage Tours", description: "Visit Paniya, Kuruma, and Kattunaicka tribal settlements to learn about their ancient forest culture", timing: "Year-round", rating: 4.6 },
      { name: "Valliyoorkavu Temple Festival", description: "Grand temple festival with traditional art forms and large community participation", timing: "March-April", rating: 4.5 },
      { name: "Spice & Coffee Plantation Heritage", description: "Tour historic coffee, pepper, and cardamom plantations learning colonial-era cultivation methods", timing: "Year-round, Oct-Feb best", rating: 4.7 },
    ],
    hotels: [
      { name: "Vythiri Resort", rating: 4.7, price: "₹10,000/night", amenities: ["Treehouse", "Pool", "Ayurveda", "Nature Trails"] },
      { name: "Banasura Hill Resort", rating: 4.6, price: "₹8,000/night", amenities: ["Earth Lodge", "Infinity Pool", "Organic Farm"] },
      { name: "Edakkal Hermitage", rating: 4.5, price: "₹6,500/night", amenities: ["Mountain View", "Trek Access", "Restaurant"] },
      { name: "PPS Tourist Home", rating: 4.0, price: "₹1,800/night", amenities: ["Kalpetta Center", "Restaurant", "Free WiFi"] },
    ],
    busStands: [
      { name: "Kalpetta Bus Stand (KSRTC)", location: "Kalpetta town center", services: "Kozhikode, Mysore, Bangalore routes", rating: 4.0 },
      { name: "Sulthan Bathery Bus Stand", location: "Sulthan Bathery", services: "Mysore & Ooty routes", rating: 3.8 },
      { name: "Mananthavady Bus Stand", location: "Mananthavady", services: "Kannur & Coorg routes", rating: 3.7 },
      { name: "Meppadi Bus Stop", location: "Meppadi", services: "Chembra Peak & local routes", rating: 3.5 },
    ],
  },
};

export const getDistrictBySlug = (slug: string): DistrictInfo | undefined => {
  return districtData[slug];
};

export const getDistrictSlug = (districtName: string): string => {
  return districtName.toLowerCase().replace(/\s+/g, '');
};
