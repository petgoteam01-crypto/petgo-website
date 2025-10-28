export interface Breed {
  name: string;
  image: string;
  traits: {
    homeType: string[];
    activityLevel: string[];
    timeCommitment: string[];
    size: string[];
    grooming: string[];
    goodWith: string[];
    aloneTime: string[];
    priorities: string[];
    temperament: string[];
  };
  description: string;
}

export const breedDatabase: Breed[] = [
  {
    name: "Labrador Retriever",
    image: "/labrador-retriever.jpg",
    traits: {
      homeType: ["house", "apartment"],
      activityLevel: ["moderate", "active"],
      timeCommitment: ["medium", "high"],
      size: ["large"],
      grooming: ["minimal"],
      goodWith: ["children", "dogs", "cats"],
      aloneTime: ["short", "medium"],
      priorities: ["easy-train", "friendly", "energetic", "calm"],
      temperament: ["friendly", "gentle"]
    },
    description: "Friendly, outgoing, and active. Great family dogs that are easy to train."
  },
  {
    name: "Golden Retriever",
    image: "/golden-retriever.jpg",
    traits: {
      homeType: ["house"],
      activityLevel: ["moderate", "active"],
      timeCommitment: ["medium", "high"],
      size: ["large"],
      grooming: ["moderate"],
      goodWith: ["children", "dogs", "cats"],
      aloneTime: ["short", "medium"],
      priorities: ["friendly", "energetic", "calm", "easy-train"],
      temperament: ["friendly", "gentle"]
    },
    description: "Intelligent, friendly, and devoted. Excellent with families and children."
  },
  {
    name: "French Bulldog",
    image: "/french-bulldog.jpg",
    traits: {
      homeType: ["apartment", "house"],
      activityLevel: ["sedentary", "light"],
      timeCommitment: ["low", "medium"],
      size: ["small"],
      grooming: ["minimal"],
      goodWith: ["children", "dogs"],
      aloneTime: ["medium", "long"],
      priorities: ["calm", "apartment-friendly", "low-maintenance"],
      temperament: ["friendly", "independent"]
    },
    description: "Adaptable, playful, and smart. Perfect for apartment living."
  },
  {
    name: "German Shepherd",
    image: "/german-shepherd.jpg",
    traits: {
      homeType: ["house", "farm"],
      activityLevel: ["active"],
      timeCommitment: ["high"],
      size: ["large"],
      grooming: ["moderate"],
      goodWith: ["children"],
      aloneTime: ["short"],
      priorities: ["easy-train", "protective", "energetic"],
      temperament: ["protective", "friendly"]
    },
    description: "Confident, courageous, and smart. Excellent working and family dog."
  },
  {
    name: "Poodle (Standard)",
    image: "/poodle.jpg",
    traits: {
      homeType: ["apartment", "house"],
      activityLevel: ["moderate", "active"],
      timeCommitment: ["medium", "high"],
      size: ["medium", "large"],
      grooming: ["high"],
      goodWith: ["children", "dogs"],
      aloneTime: ["short", "medium"],
      priorities: ["easy-train", "hypoallergenic", "energetic"],
      temperament: ["friendly"]
    },
    description: "Exceptionally smart, athletic, and hypoallergenic. Great for active families."
  },
  {
    name: "Cavalier King Charles Spaniel",
    image: "/cavalier-king-charles-spaniel.jpg",
    traits: {
      homeType: ["apartment", "house"],
      activityLevel: ["light", "moderate"],
      timeCommitment: ["medium"],
      size: ["small"],
      grooming: ["moderate"],
      goodWith: ["children", "dogs", "cats"],
      aloneTime: ["short"],
      priorities: ["calm", "friendly", "apartment-friendly"],
      temperament: ["gentle", "friendly"]
    },
    description: "Affectionate, gentle, and graceful. Loves companionship and cuddles."
  },
  {
    name: "Beagle",
    image: "/beagle.jpg",
    traits: {
      homeType: ["house", "farm"],
      activityLevel: ["moderate", "active"],
      timeCommitment: ["medium"],
      size: ["small", "medium"],
      grooming: ["minimal"],
      goodWith: ["children", "dogs"],
      aloneTime: ["medium"],
      priorities: ["friendly", "energetic"],
      temperament: ["friendly"]
    },
    description: "Curious, friendly, and merry. Great with kids and other dogs."
  },
  {
    name: "Bulldog",
    image: "/bulldog.jpg",
    traits: {
      homeType: ["apartment", "house"],
      activityLevel: ["sedentary", "light"],
      timeCommitment: ["low", "medium"],
      size: ["medium"],
      grooming: ["minimal"],
      goodWith: ["children", "dogs"],
      aloneTime: ["medium", "long"],
      priorities: ["calm", "apartment-friendly", "low-maintenance"],
      temperament: ["gentle", "independent"]
    },
    description: "Calm, courageous, and friendly. Great for relaxed households."
  },
  {
    name: "Yorkshire Terrier",
    image: "/yorkshire-terrier.jpg",
    traits: {
      homeType: ["apartment"],
      activityLevel: ["light"],
      timeCommitment: ["low", "medium"],
      size: ["small"],
      grooming: ["high"],
      goodWith: [],
      aloneTime: ["short", "medium"],
      priorities: ["hypoallergenic", "apartment-friendly"],
      temperament: ["protective", "independent"]
    },
    description: "Feisty, affectionate, and bold. Perfect apartment companion."
  },
  {
    name: "Boxer",
    image: "/boxer.jpg",
    traits: {
      homeType: ["house"],
      activityLevel: ["active"],
      timeCommitment: ["high"],
      size: ["large"],
      grooming: ["minimal"],
      goodWith: ["children", "dogs"],
      aloneTime: ["short"],
      priorities: ["energetic", "protective", "friendly"],
      temperament: ["friendly", "protective"]
    },
    description: "Fun-loving, bright, and active. Excellent family protector."
  },
  {
    name: "Shih Tzu",
    image: "/shih-tzu.jpg",
    traits: {
      homeType: ["apartment", "house"],
      activityLevel: ["sedentary", "light"],
      timeCommitment: ["low", "medium"],
      size: ["small"],
      grooming: ["high"],
      goodWith: ["children", "dogs", "cats"],
      aloneTime: ["medium"],
      priorities: ["calm", "apartment-friendly"],
      temperament: ["gentle", "friendly"]
    },
    description: "Affectionate, playful, and outgoing. Great lap dog for any home."
  },
  {
    name: "Border Collie",
    image: "/border-collie.jpg",
    traits: {
      homeType: ["house", "farm"],
      activityLevel: ["active"],
      timeCommitment: ["high"],
      size: ["medium"],
      grooming: ["moderate"],
      goodWith: ["dogs"],
      aloneTime: ["short"],
      priorities: ["easy-train", "energetic"],
      temperament: ["friendly"]
    },
    description: "Remarkably smart, energetic, and hardworking. Needs lots of mental stimulation."
  },
  {
    name: "Australian Shepherd",
    image: "/australian-shepherd.jpg",
    traits: {
      homeType: ["house", "farm"],
      activityLevel: ["active"],
      timeCommitment: ["high"],
      size: ["medium"],
      grooming: ["moderate"],
      goodWith: ["children", "dogs"],
      aloneTime: ["short"],
      priorities: ["easy-train", "energetic", "protective"],
      temperament: ["friendly", "protective"]
    },
    description: "Smart, work-oriented, and exuberant. Thrives with active families."
  },
  {
    name: "Pug",
    image: "/pug.jpg",
    traits: {
      homeType: ["apartment", "house"],
      activityLevel: ["sedentary", "light"],
      timeCommitment: ["low", "medium"],
      size: ["small"],
      grooming: ["minimal"],
      goodWith: ["children", "dogs", "cats"],
      aloneTime: ["medium"],
      priorities: ["calm", "friendly", "apartment-friendly"],
      temperament: ["friendly", "gentle"]
    },
    description: "Charming, mischievous, and loving. Perfect companion for any lifestyle."
  },
  {
    name: "Cocker Spaniel",
    image: "/cocker-spaniel.jpg",
    traits: {
      homeType: ["apartment", "house"],
      activityLevel: ["moderate"],
      timeCommitment: ["medium"],
      size: ["small", "medium"],
      grooming: ["high"],
      goodWith: ["children", "dogs", "cats"],
      aloneTime: ["short", "medium"],
      priorities: ["friendly", "calm"],
      temperament: ["friendly", "gentle"]
    },
    description: "Gentle, smart, and happy. Wonderful family pet with a merry temperament."
  },
  {
    name: "Rottweiler",
    image: "/rottweiler.jpg",
    traits: {
      homeType: ["house", "farm"],
      activityLevel: ["moderate", "active"],
      timeCommitment: ["high"],
      size: ["large"],
      grooming: ["minimal"],
      goodWith: ["children"],
      aloneTime: ["short"],
      priorities: ["protective", "easy-train"],
      temperament: ["protective", "gentle"]
    },
    description: "Loyal, loving, and confident guardian. Excellent with proper training."
  },
  {
    name: "Dachshund",
    image: "/dachshund.jpg",
    traits: {
      homeType: ["apartment", "house"],
      activityLevel: ["light", "moderate"],
      timeCommitment: ["medium"],
      size: ["small"],
      grooming: ["minimal"],
      goodWith: ["children"],
      aloneTime: ["medium"],
      priorities: ["friendly", "apartment-friendly"],
      temperament: ["friendly", "independent"]
    },
    description: "Clever, lively, and courageous. Spunky personality in a small package."
  },
  {
    name: "Pembroke Welsh Corgi",
    image: "/pembroke-welsh-corgi.jpg",
    traits: {
      homeType: ["apartment", "house"],
      activityLevel: ["moderate"],
      timeCommitment: ["medium"],
      size: ["small", "medium"],
      grooming: ["moderate"],
      goodWith: ["children", "dogs"],
      aloneTime: ["medium"],
      priorities: ["easy-train", "friendly", "energetic"],
      temperament: ["friendly"]
    },
    description: "Affectionate, smart, and alert. Big personality in a compact body."
  },
  {
    name: "Great Dane",
    image: "/great-dane.jpg",
    traits: {
      homeType: ["house"],
      activityLevel: ["light", "moderate"],
      timeCommitment: ["medium", "high"],
      size: ["giant"],
      grooming: ["minimal"],
      goodWith: ["children", "dogs"],
      aloneTime: ["short"],
      priorities: ["friendly", "calm"],
      temperament: ["friendly", "gentle"]
    },
    description: "Friendly, patient, and dependable. Gentle giants with loving nature."
  },
  {
    name: "Miniature Schnauzer",
    image: "/miniature-schnauzer.jpg",
    traits: {
      homeType: ["apartment", "house"],
      activityLevel: ["moderate"],
      timeCommitment: ["medium"],
      size: ["small"],
      grooming: ["high"],
      goodWith: ["children", "dogs"],
      aloneTime: ["medium"],
      priorities: ["easy-train", "protective", "apartment-friendly"],
      temperament: ["friendly", "protective"]
    },
    description: "Friendly, smart, and obedient. Alert watchdog with spirited personality."
  },
  {
    name: "Siberian Husky",
    image: "/siberian-husky.jpg",
    traits: {
      homeType: ["house", "farm"],
      activityLevel: ["active"],
      timeCommitment: ["high"],
      size: ["medium", "large"],
      grooming: ["moderate"],
      goodWith: ["children", "dogs"],
      aloneTime: ["short"],
      priorities: ["energetic", "friendly"],
      temperament: ["friendly", "independent"]
    },
    description: "Loyal, mischievous, and outgoing. Needs plenty of exercise and activity."
  },
  {
    name: "Bernese Mountain Dog",
    image: "/bernese-mountain-dog.jpg",
    traits: {
      homeType: ["house", "farm"],
      activityLevel: ["moderate"],
      timeCommitment: ["high"],
      size: ["large", "giant"],
      grooming: ["high"],
      goodWith: ["children", "dogs", "cats"],
      aloneTime: ["short"],
      priorities: ["calm", "friendly"],
      temperament: ["friendly", "gentle"]
    },
    description: "Good-natured, calm, and strong. Affectionate with family members."
  },
  {
    name: "Pomeranian",
    image: "/pomeranian.jpg",
    traits: {
      homeType: ["apartment", "house"],
      activityLevel: ["light", "moderate"],
      timeCommitment: ["medium"],
      size: ["small"],
      grooming: ["high"],
      goodWith: [],
      aloneTime: ["short", "medium"],
      priorities: ["apartment-friendly", "protective"],
      temperament: ["friendly", "independent"]
    },
    description: "Inquisitive, bold, and lively. Big personality in tiny package."
  },
  {
    name: "Boston Terrier",
    image: "/boston-terrier.jpg",
    traits: {
      homeType: ["apartment", "house"],
      activityLevel: ["light", "moderate"],
      timeCommitment: ["low", "medium"],
      size: ["small"],
      grooming: ["minimal"],
      goodWith: ["children", "dogs", "cats"],
      aloneTime: ["medium"],
      priorities: ["friendly", "apartment-friendly", "calm"],
      temperament: ["friendly", "gentle"]
    },
    description: "Friendly, bright, and amusing. The American Gentleman of dogs."
  },
  {
    name: "Havanese",
    image: "/havanese.jpg",
    traits: {
      homeType: ["apartment", "house"],
      activityLevel: ["light", "moderate"],
      timeCommitment: ["medium"],
      size: ["small"],
      grooming: ["high"],
      goodWith: ["children", "dogs", "cats"],
      aloneTime: ["short"],
      priorities: ["friendly", "calm", "apartment-friendly"],
      temperament: ["friendly", "gentle"]
    },
    description: "Intelligent, outgoing, and funny. Perfect companion and family dog."
  },
  {
    name: "English Springer Spaniel",
    image: "/english-springer-spaniel.jpg",
    traits: {
      homeType: ["house", "farm"],
      activityLevel: ["active"],
      timeCommitment: ["high"],
      size: ["medium"],
      grooming: ["moderate"],
      goodWith: ["children", "dogs"],
      aloneTime: ["short"],
      priorities: ["friendly", "energetic", "easy-train"],
      temperament: ["friendly"]
    },
    description: "Friendly, playful, and obedient. Eager to please and very trainable."
  },
  {
    name: "Brittany",
    image: "/brittany.jpg",
    traits: {
      homeType: ["house", "farm"],
      activityLevel: ["active"],
      timeCommitment: ["high"],
      size: ["medium"],
      grooming: ["minimal"],
      goodWith: ["children", "dogs"],
      aloneTime: ["short"],
      priorities: ["energetic", "easy-train", "friendly"],
      temperament: ["friendly"]
    },
    description: "Bright, fun-loving, and upbeat. Excellent hunting and family companion."
  },
  {
    name: "Shetland Sheepdog",
    image: "/shetland-sheepdog.jpg",
    traits: {
      homeType: ["house"],
      activityLevel: ["moderate", "active"],
      timeCommitment: ["high"],
      size: ["small", "medium"],
      grooming: ["high"],
      goodWith: ["children", "dogs"],
      aloneTime: ["short"],
      priorities: ["easy-train", "friendly", "protective"],
      temperament: ["friendly", "protective"]
    },
    description: "Playful, energetic, and bright. Loyal family companion and watchdog."
  },
  {
    name: "Maltese",
    image: "/maltese.jpg",
    traits: {
      homeType: ["apartment", "house"],
      activityLevel: ["light"],
      timeCommitment: ["low", "medium"],
      size: ["small"],
      grooming: ["high"],
      goodWith: ["children", "cats"],
      aloneTime: ["short", "medium"],
      priorities: ["calm", "apartment-friendly", "hypoallergenic"],
      temperament: ["friendly", "gentle"]
    },
    description: "Gentle, playful, and charming. Affectionate toy breed companion."
  },
  {
    name: "Doberman Pinscher",
    image: "/doberman-pinscher.jpg",
    traits: {
      homeType: ["house"],
      activityLevel: ["active"],
      timeCommitment: ["high"],
      size: ["large"],
      grooming: ["minimal"],
      goodWith: ["children"],
      aloneTime: ["short"],
      priorities: ["protective", "easy-train", "energetic"],
      temperament: ["protective", "friendly"]
    },
    description: "Loyal, fearless, and alert. Excellent guardian and companion."
  },
  {
    name: "Shiba Inu",
    image: "/shiba-inu.jpg",
    traits: {
      homeType: ["apartment", "house"],
      activityLevel: ["moderate"],
      timeCommitment: ["medium"],
      size: ["small", "medium"],
      grooming: ["moderate"],
      goodWith: [],
      aloneTime: ["medium", "long"],
      priorities: ["apartment-friendly", "low-maintenance"],
      temperament: ["independent", "protective"]
    },
    description: "Alert, active, and attentive. Independent yet loyal companion."
  },
  {
    name: "Vizsla",
    image: "/vizsla.jpg",
    traits: {
      homeType: ["house", "farm"],
      activityLevel: ["active"],
      timeCommitment: ["high"],
      size: ["medium", "large"],
      grooming: ["minimal"],
      goodWith: ["children", "dogs"],
      aloneTime: ["short"],
      priorities: ["energetic", "friendly", "easy-train"],
      temperament: ["friendly", "gentle"]
    },
    description: "Affectionate, gentle, and energetic. Velcro dog who loves family."
  },
  {
    name: "Weimaraner",
    image: "/weimaraner.jpg",
    traits: {
      homeType: ["house", "farm"],
      activityLevel: ["active"],
      timeCommitment: ["high"],
      size: ["large"],
      grooming: ["minimal"],
      goodWith: ["children", "dogs"],
      aloneTime: ["short"],
      priorities: ["energetic", "easy-train", "friendly"],
      temperament: ["friendly"]
    },
    description: "Friendly, fearless, and alert. Athletic and highly energetic companion."
  },
  {
    name: "Bichon Frise",
    image: "/bichon-frise.jpg",
    traits: {
      homeType: ["apartment", "house"],
      activityLevel: ["light", "moderate"],
      timeCommitment: ["medium"],
      size: ["small"],
      grooming: ["high"],
      goodWith: ["children", "dogs", "cats"],
      aloneTime: ["short", "medium"],
      priorities: ["friendly", "calm", "hypoallergenic", "apartment-friendly"],
      temperament: ["friendly", "gentle"]
    },
    description: "Playful, curious, and peppy. Cheerful companion with hypoallergenic coat."
  },
  {
    name: "Akita",
    image: "/akita.jpg",
    traits: {
      homeType: ["house"],
      activityLevel: ["moderate"],
      timeCommitment: ["high"],
      size: ["large", "giant"],
      grooming: ["moderate"],
      goodWith: [],
      aloneTime: ["medium"],
      priorities: ["protective", "low-maintenance"],
      temperament: ["protective", "independent"]
    },
    description: "Dignified, courageous, and profoundly loyal. Devoted family protector."
  },
  {
    name: "Newfoundland",
    image: "/newfoundland.jpg",
    traits: {
      homeType: ["house", "farm"],
      activityLevel: ["light", "moderate"],
      timeCommitment: ["high"],
      size: ["giant"],
      grooming: ["high"],
      goodWith: ["children", "dogs", "cats"],
      aloneTime: ["short", "medium"],
      priorities: ["calm", "friendly"],
      temperament: ["friendly", "gentle"]
    },
    description: "Sweet, patient, and devoted. Gentle giant and natural lifeguard."
  }
];