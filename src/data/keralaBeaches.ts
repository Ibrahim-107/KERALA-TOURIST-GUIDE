// Beach images
import kovalam from "@/assets/beaches/kovalam.jpg";
import varkala from "@/assets/beaches/varkala.jpg";
import shankumugham from "@/assets/beaches/shankumugham.jpg";
import poovar from "@/assets/beaches/poovar.jpg";
import alappuzhaImg from "@/assets/beaches/alappuzha.jpg";
import marari from "@/assets/beaches/marari.jpg";
import cherai from "@/assets/beaches/cherai.jpg";
import fortKochiBeach from "@/assets/beaches/fort-kochi-beach.jpg";
import snehatheeram from "@/assets/beaches/snehatheeram.jpg";
import kozhikodeImg from "@/assets/beaches/kozhikode.jpg";
import kappad from "@/assets/beaches/kappad.jpg";
import beypore from "@/assets/beaches/beypore.jpg";
import muzhappilangad from "@/assets/beaches/muzhappilangad.jpg";
import payyambalam from "@/assets/beaches/payyambalam.jpg";
import bekal from "@/assets/beaches/bekal.jpg";
import valiyaparamba from "@/assets/beaches/valiyaparamba.jpg";
import kadalundi from "@/assets/beaches/kadalundi.jpg";
import ponnani from "@/assets/beaches/ponnani.jpg";
import kollamImg from "@/assets/beaches/kollam.jpg";
import thirumullavaram from "@/assets/beaches/thirumullavaram.jpg";
import poolEstuary from "@/assets/beaches/pool-estuary.jpg";
import poolFishing from "@/assets/beaches/pool-fishing.jpg";
import poolCove from "@/assets/beaches/pool-cove.jpg";

export interface Beach {
  id: string;
  name: string;
  district: string;
  description: string;
  image: string;
}

export const keralaBeaches: Beach[] = [
  // Thiruvananthapuram
  { id: "kovalam", name: "Kovalam Beach", district: "Thiruvananthapuram", image: kovalam,
    description: "Iconic crescent-shaped beach with the Vizhinjam lighthouse, perfect for surfing and sunset views." },
  { id: "varkala", name: "Varkala Beach", district: "Thiruvananthapuram", image: varkala,
    description: "Dramatic red laterite cliffs overlooking the Arabian Sea — Kerala's only cliff beach." },
  { id: "shankumugham", name: "Shankumugham Beach", district: "Thiruvananthapuram", image: shankumugham,
    description: "Trivandrum's city beach famous for its giant Sagarakanyaka mermaid sculpture and sunsets." },
  { id: "poovar", name: "Poovar Beach", district: "Thiruvananthapuram", image: poovar,
    description: "Secluded golden sandbar where the Neyyar river meets the sea." },
  { id: "veli", name: "Veli Beach", district: "Thiruvananthapuram", image: poolEstuary,
    description: "Peaceful lagoon beach with a floating bridge and paddleboats at the river mouth." },
  { id: "thumba", name: "Thumba Beach", district: "Thiruvananthapuram", image: poolFishing,
    description: "Quiet fishing beach near the famous Thumba rocket launching station." },
  { id: "perumathura", name: "Perumathura Beach", district: "Thiruvananthapuram", image: poolEstuary,
    description: "Long, quiet beach beside an estuary with casuarina groves and fishing nets." },
  { id: "kappil-tvm", name: "Kappil Beach", district: "Thiruvananthapuram", image: poolCove,
    description: "Untouched golden beach with rocky outcrops near Varkala." },

  // Kollam
  { id: "kollam", name: "Kollam Beach", district: "Kollam", image: kollamImg,
    description: "Long sandy stretch in Kollam city, popular for evening walks and pier views." },
  { id: "thirumullavaram", name: "Thirumullavaram Beach", district: "Kollam", image: thirumullavaram,
    description: "Horseshoe-shaped sandy cove with shallow turquoise waters and rocky islets." },
  { id: "thanni", name: "Thanni Beach", district: "Kollam", image: poolFishing,
    description: "Secluded fishermen's beach lined with traditional wooden boats." },
  { id: "azheekal-kollam", name: "Azheekal Beach", district: "Kollam", image: poolEstuary,
    description: "Estuary mouth meeting the sea, home to a busy fishing harbour." },
  { id: "mundakkal", name: "Mundakkal Beach", district: "Kollam", image: kollamImg,
    description: "Urban beach near Kollam city with casuarina trees and lighthouse views." },
  { id: "pozhikara", name: "Pozhikara Beach", district: "Kollam", image: poolEstuary,
    description: "Narrow strip of land between backwaters and the Arabian Sea." },
  { id: "thekkumbhagam", name: "Thekkumbhagam Beach", district: "Kollam", image: poolFishing,
    description: "Calm village beach with a backwater inlet and fishing canoes." },

  // Alappuzha
  { id: "alappuzha", name: "Alappuzha Beach", district: "Alappuzha", image: alappuzhaImg,
    description: "Famous for the 150-year-old wooden pier ruins extending into the sea and a vintage lighthouse." },
  { id: "marari", name: "Marari Beach", district: "Alappuzha", image: marari,
    description: "Pristine palm-fringed beach with traditional fishing catamarans on white sand." },
  { id: "arthunkal", name: "Arthunkal Beach", district: "Alappuzha", image: poolFishing,
    description: "Quiet beach beside the historic St Andrew's Basilica pilgrimage site." },
  { id: "andhakaranazhi", name: "Andhakaranazhi Beach", district: "Alappuzha", image: poolEstuary,
    description: "Where backwaters meet the sea — a sandbar dotted with fishing nets." },
  { id: "thottappally", name: "Thottappally Beach", district: "Alappuzha", image: poolFishing,
    description: "Long, deserted beach beside the Thottappally spillway and casuarina forest." },
  { id: "pallana", name: "Pallana Beach", district: "Alappuzha", image: poolEstuary,
    description: "Small local beach near the Pallana river mouth with coconut palms." },
  { id: "thumpoly", name: "Thumpoly Beach", district: "Alappuzha", image: marari,
    description: "Calm, clean beach with shallow waters and a peaceful palm-lined shore." },

  // Ernakulam
  { id: "cherai", name: "Cherai Beach", district: "Ernakulam", image: cherai,
    description: "Long golden beach on Vypin island, often visited by dolphins offshore." },
  { id: "fort-kochi-beach", name: "Fort Kochi Beach", district: "Ernakulam", image: fortKochiBeach,
    description: "Iconic Chinese cantilever fishing nets silhouetted against unforgettable sunsets." },
  { id: "kuzhupilly", name: "Kuzhupilly Beach", district: "Ernakulam", image: poolFishing,
    description: "Secluded clean beach on Vypin island with golden sand and casuarina trees." },
  { id: "puthuvype", name: "Puthuvype Beach", district: "Ernakulam", image: poolFishing,
    description: "Beach with a modern lighthouse tower and views of ships entering Kochi port." },
  { id: "munambam", name: "Munambam Beach", district: "Ernakulam", image: poolEstuary,
    description: "Fishing harbour beach at the mouth of the Periyar river." },
  { id: "chellanam", name: "Chellanam Beach", district: "Ernakulam", image: poolFishing,
    description: "Village beach with seawall and a vibrant fishing community." },
  { id: "vypin", name: "Vypin Beach", district: "Ernakulam", image: cherai,
    description: "Long Vypin island beach lined with palms and fishing boats." },

  // Thrissur
  { id: "snehatheeram", name: "Snehatheeram Beach", district: "Thrissur", image: snehatheeram,
    description: "The 'Love Beach' — landscaped gardens, sculptures, and a perfect family sunset." },
  { id: "chavakkad", name: "Chavakkad Beach", district: "Thrissur", image: poolFishing,
    description: "Sandy beach near Guruvayur with fishing boats and a serene palm grove." },
  { id: "munakkal", name: "Munakkal Beach", district: "Thrissur", image: poolEstuary,
    description: "Beach near Azheekode estuary with a sandbar and fishing nets." },

  // Malappuram
  { id: "padinjarekkara", name: "Padinjarekkara Beach", district: "Malappuram", image: poolEstuary,
    description: "Beach where the Bharathapuzha river meets the Arabian Sea — twin water views." },
  { id: "tanur", name: "Tanur Beach", district: "Malappuram", image: poolFishing,
    description: "Historic fishing beach with traditional dhows and a calm shoreline." },
  { id: "ponnani", name: "Ponnani Beach", district: "Malappuram", image: ponnani,
    description: "Estuary beach beside the old Ponnani port with traditional fishing boats." },
  { id: "kadalundi-nagaram", name: "Kadalundi Nagaram Beach", district: "Malappuram", image: kadalundi,
    description: "Estuary beach with a famous bird sanctuary, mangroves, and migratory birds." },

  // Kozhikode
  { id: "kozhikode", name: "Kozhikode Beach", district: "Kozhikode", image: kozhikodeImg,
    description: "Calicut's famous beach with old lighthouse and twin pier ruins extending into the sea." },
  { id: "kappad", name: "Kappad Beach", district: "Kozhikode", image: kappad,
    description: "Historic beach where Vasco da Gama landed in 1498 — a stone monument marks the spot." },
  { id: "beypore", name: "Beypore Beach", district: "Kozhikode", image: beypore,
    description: "Beach beside the Beypore port, famous for traditional Uru wooden ship building." },
  { id: "kadalundi", name: "Kadalundi Beach", district: "Kozhikode", image: kadalundi,
    description: "Estuary beach with mangroves and seasonal flocks of migratory birds." },
  { id: "payyoli", name: "Payyoli Beach", district: "Kozhikode", image: muzhappilangad,
    description: "Long, unspoilt golden beach with casuarina trees and calm Arabian Sea." },

  // Kannur
  { id: "muzhappilangad", name: "Muzhappilangad Beach", district: "Kannur", image: muzhappilangad,
    description: "Asia's longest drive-in beach — drive your car for miles on hard golden sand." },
  { id: "payyambalam", name: "Payyambalam Beach", district: "Kannur", image: payyambalam,
    description: "Wide landscaped beach with gardens and sculptures — Kannur's favourite sunset spot." },
  { id: "meenkunnu", name: "Meenkunnu Beach", district: "Kannur", image: poolCove,
    description: "Untouched golden crescent beach with rocky outcrops and palm grove." },
  { id: "dharmadam", name: "Dharmadam Beach", district: "Kannur", image: poolCove,
    description: "Beach with a small private island just offshore, accessible at low tide." },
  { id: "ezhara", name: "Ezhara Beach", district: "Kannur", image: poolFishing,
    description: "Quiet village beach with traditional fishing boats and coconut palms." },
  { id: "kizhunna", name: "Kizhunna Beach", district: "Kannur", image: poolCove,
    description: "Secluded twin beach separated by a rocky cliff with turquoise water." },

  // Kasaragod
  { id: "bekal", name: "Bekal Beach", district: "Kasaragod", image: bekal,
    description: "Beach beside the massive 17th-century Bekal Fort — laterite walls overlooking the sea." },
  { id: "kappil-kasaragod", name: "Kappil Beach", district: "Kasaragod", image: poolCove,
    description: "Secluded beach with a hillock viewpoint over the Arabian Sea." },
  { id: "pallikere", name: "Pallikere Beach", district: "Kasaragod", image: bekal,
    description: "Family-friendly beach near Bekal fort with shallow waters and palm trees." },
  { id: "valiyaparamba", name: "Valiyaparamba Beach", district: "Kasaragod", image: valiyaparamba,
    description: "Backwater beach dotted with islands, palm fringes and houseboats." },
  { id: "chandragiri", name: "Chandragiri Beach", district: "Kasaragod", image: poolEstuary,
    description: "Beach at the Chandragiri river mouth with an old hilltop fort nearby." },
  { id: "chembirika", name: "Chembirika Beach", district: "Kasaragod", image: poolFishing,
    description: "Quiet golden beach with casuarina trees and traditional fishing boats." },
];

export const getBeachesByDistrict = (district: string) =>
  keralaBeaches.filter((b) => b.district.toLowerCase() === district.toLowerCase());

export const getFeaturedBeaches = (n = 3) =>
  [keralaBeaches[0], keralaBeaches[1], keralaBeaches[22]].slice(0, n); // Kovalam, Varkala, Cherai
