// src/data/places.ts
// --- Add these optional fields to your Place type ---
export type Place = {
  title: string;
  slug: string;
  category: string;
  image: string;
  blurb: string;
  address?: string;
  content?: string[];

  // New optional fields for blog-style sections
  intro?: string; // lead paragraph
  introImage?: string; // first inline image after intro
  features?: { title: string; description: string }[]; // bullet list
  featureImage?: string; // image between features and off-leash blurb
  offLeash?: string; // paragraph about off-leash
  location?: {
    neighbourhood?: string;
    transit?: string;
    parking?: string;
  };
  extraImages?: string[]; // any additional photos to show in a grid
};


export const PLACES: Place[] = [
  // --- Withrow Park (replace your current object with this one) ---
{
  title: "Withrow Park",
  slug: "withrow-park",
  category: "Parks",
  // hero image for the top banner
  image: "/places/withrow-park-hero.jpg",
  address: "725 Logan Ave, Toronto, ON M4K 3B9",
  blurb: "A wide open park perfect for dogs to run free and socialize.",

  // Blog content
  intro:
    "Withrow Park blends active recreation with community charm, making it a favourite spot for families, fitness lovers, dog owners, and anyone seeking a taste of local culture in a relaxed, tree-lined setting.",
  // first inline image after the intro paragraph
  introImage: "/places/withrow-park-meadow.jpg",

  // Key Features & Amenities
  features: [
    {
      title: "Sports Facilities",
      description:
        "Two ball diamonds, a versatile multipurpose field, and two well-maintained outdoor tennis courts offer plenty of space for recreational and competitive play.",
    },
    {
      title: "Winter Activities",
      description:
        "During the colder months, the park features an outdoor artificial ice rink, providing a popular spot for skating and seasonal fun.",
    },
    {
      title: "Family-Friendly Areas",
      description:
        "A spacious playground and a refreshing wading pool make Withrow Park a welcoming destination for families, especially in the warmer seasons.",
    },
    {
      title: "Dog-Friendly Space",
      description:
        "A designated off-leash area allows dogs to run, play, and socialize safely within the park.",
    },
    {
      title: "Expansive Green Spaces",
      description:
        "Open lawns and shaded areas create the perfect setting for picnics, leisurely strolls, or simply unwinding amidst nature.",
    },
  ],

  // image that appears between features and off-leash paragraph
  featureImage: "/places/withrow-park-dogs-offleash.jpg",

  // off-leash paragraph
  offLeash:
    "Withrow Park’s off-leash area welcomes dogs of all sizes together — there’s no separate section for small and large breeds. The park is well-maintained and efficiently rotated, keeping the space fresh and enjoyable for pets and owners alike. It’s especially lively in the early evenings (6–8 PM) on weekdays and afternoons on weekends, with new dogs arriving every couple of minutes, creating a constantly active and social environment.",

  // 📍 Location & Access
  location: {
    neighbourhood: "Located in Toronto’s charming Riverdale community.",
    transit:
      "Conveniently accessible via subway, just a short walk from Chester Station.",
    parking:
      "Street parking is available on the roads surrounding the park.",
  },

  // optional extra photos (flat in /public/places/)
  extraImages: [
    // "/places/withrow-park-path.jpg",
    // "/places/withrow-park-trees.jpg",
  ],
},

  {
    title: "Cafe23",
    slug: "cafe23",
    category: "Pet-Friendly Cafe",
    image: "/places/cafe23-hero.jpg",
    blurb: "Sip a latte and treat your pup to a pup cup.",
    address: "728 Queen St W, Toronto, ON M6J 1E8",
    content: [
      "Cozy Queen West spot with a patio that welcomes four-legged visitors.",
      "Order idea: your latte + a simple whipped-cream pup cup for your co-pilot.",
    ],
  },
  {
    title: "Mildred's Temple Kitchen",
    slug: "mildreds-temple-kitchen",
    category: "Patio Dining",
    image: "/places/mildreds-food.jpg",
    blurb: "Weekend plans: brunch & blueberry pancakes with your pup.",
    address: "85 Hanna Ave #104, Toronto, ON M6K 3S3",
    content: [
      "Liberty Village brunch classic with a relaxed, dog-friendly patio.",
      "Signature bite: the Instagram-famous blueberry pancakes — fluffy and unforgettable.",
    ],
  },
  {
    title: "Rouge National Urban Park",
    slug: "rouge-national-urban-park",
    category: "Trail",
    image: "/places-trail.jpg",
    blurb: "A scenic path with gentle grades and peaceful rest spots.",
    address: "1749 Meadowvale Rd, Toronto, ON M1B 5W8",
    content: [
      "Canada’s first national urban park with mellow, pup-friendly trails.",
      "Keep dogs leashed to protect wildlife; bring water and check trail advisories.",
    ],
  },
];

export function getPlaceBySlug(slug: string) {
  return PLACES.find((p) => p.slug === slug);
}
