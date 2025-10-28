"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Item = {
  id: string;
  title: string;
  excerpt: React.ReactNode; // JSX so we can color/bold the first sentence
  img: string;              // path in /public
  href?: string;            // detail page
};

const TABS = [
  { key: "ingredients", label: "Ingredients" },
  { key: "food", label: "Food" },
  { key: "diseases", label: "Diseases" },
  { key: "tests", label: "Tests" },
  { key: "symptoms", label: "Symptoms" },
] as const;

export default function HealthEncyclopediaPage() {
  // Focus on Food first
  const [active, setActive] = useState<(typeof TABS)[number]["key"]>("food");

  const data: Record<(typeof TABS)[number]["key"], Item[]> = useMemo(
    () => ({
      // Fill these later
      ingredients: [],
      diseases: [
  {
    id: "glaucoma",
    title: "Glaucoma",
    excerpt: (
      <p className="text-[#4B5563] leading-relaxed">
        A condition where increased pressure inside the eye damages the optic nerve, potentially leading to blindness. Early treatment is crucial to prevent vision loss.
      </p>
    ),
    img: "/diseases-default.jpg",
    href: "/exclusive-features/health-encyclopedia/diseases/glaucoma",
  },
  {
    id: "pyometra",
    title: "Pyometra",
    excerpt: (
      <p className="text-[#4B5563] leading-relaxed">
        A life-threatening uterine infection in unspayed female dogs. It causes pus buildup and systemic illness, requiring urgent veterinary care and often surgical removal of the uterus.
      </p>
    ),
    img: "/diseases-default.jpg",
    href: "/exclusive-features/health-encyclopedia/diseases/pyometra",
  },
  {
    id: "cryptorchidism",
    title: "Cryptorchidism",
    excerpt: (
      <p className="text-[#4B5563] leading-relaxed">
        A developmental condition where one or both testicles fail to descend into the scrotum. It can increase the risk of infertility and testicular cancer if untreated.
      </p>
    ),
    img: "/diseases-default.jpg",
    href: "/exclusive-features/health-encyclopedia/diseases/cryptorchidism",
  },
  {
    id: "pancreatitis",
    title: "Pancreatitis",
    excerpt: (
      <p className="text-[#4B5563] leading-relaxed">
        Inflammation of the pancreas that disrupts digestion and causes abdominal pain, vomiting, and lethargy. Can become life-threatening if severe or untreated.
      </p>
    ),
    img: "/diseases-default.jpg",
    href: "/exclusive-features/health-encyclopedia/diseases/pancreatitis",
  },
  {
    id: "anal-sac-inflammation",
    title: "Anal Sac Inflammation",
    excerpt: (
      <p className="text-[#4B5563] leading-relaxed">
        Infection or impaction of the anal glands, leading to pain, swelling, scooting, and foul odor. It may require manual expression or antibiotics.
      </p>
    ),
    img: "/diseases-default.jpg",
    href: "/exclusive-features/health-encyclopedia/diseases/anal-sac-inflammation",
  },
  {
    id: "hypothyroidism",
    title: "Hypothyroidism",
    excerpt: (
      <p className="text-[#4B5563] leading-relaxed">
        A hormonal disorder where the thyroid gland produces insufficient hormones, causing weight gain, hair loss, and lethargy. Lifelong medication is usually required.
      </p>
    ),
    img: "/diseases-default.jpg",
    href: "/exclusive-features/health-encyclopedia/diseases/hypothyroidism",
  },
  {
    id: "external-parasites",
    title: "External Parasites",
    excerpt: (
      <p className="text-[#4B5563] leading-relaxed">
        Fleas, ticks, and mites that infest a dog’s skin and coat, causing itching, skin irritation, and potential transmission of diseases.
      </p>
    ),
    img: "/diseases-default.jpg",
    href: "/exclusive-features/health-encyclopedia/diseases/external-parasites",
  },
  {
    id: "malassezia-dermatitis",
    title: "Malassezia Dermatitis",
    excerpt: (
      <p className="text-[#4B5563] leading-relaxed">
        A yeast-related skin condition causing redness, itching, odor, and greasy skin. Often secondary to allergies or weakened immunity.
      </p>
    ),
    img: "/diseases-default.jpg",
    href: "/exclusive-features/health-encyclopedia/diseases/malassezia-dermatitis",
  },
  {
    id: "arthritis",
    title: "Arthritis",
    excerpt: (
      <p className="text-[#4B5563] leading-relaxed">
        Chronic inflammation of the joints, common in older dogs. It leads to stiffness, pain, and reduced mobility.
      </p>
    ),
    img: "/diseases-default.jpg",
    href: "/exclusive-features/health-encyclopedia/diseases/arthritis",
  },
  {
    id: "urolithiasis",
    title: "Urolithiasis",
    excerpt: (
      <p className="text-[#4B5563] leading-relaxed">
        The formation of urinary stones in the bladder or urethra, causing painful urination, blood in urine, and urinary obstruction.
      </p>
    ),
    img: "/diseases-default.jpg",
    href: "/exclusive-features/health-encyclopedia/diseases/urolithiasis",
  },
  {
    id: "oral-tumors",
    title: "Oral Tumors",
    excerpt: (
      <p className="text-[#4B5563] leading-relaxed">
        Abnormal growths in the mouth, which may be benign or malignant. Symptoms include drooling, bad breath, and difficulty eating.
      </p>
    ),
    img: "/diseases-default.jpg",
    href: "/exclusive-features/health-encyclopedia/diseases/oral-tumors",
  },
  {
    id: "esophageal-foreign-body",
    title: "Esophageal Foreign Body",
    excerpt: (
      <p className="text-[#4B5563] leading-relaxed">
        A blockage in the esophagus caused by swallowed objects. It leads to gagging, drooling, and difficulty swallowing, and often requires endoscopic removal.
      </p>
    ),
    img: "/diseases-default.jpg",
    href: "/exclusive-features/health-encyclopedia/diseases/esophageal-foreign-body",
  },
  {
    id: "acute-gastritis",
    title: "Acute Gastritis",
    excerpt: (
      <p className="text-[#4B5563] leading-relaxed">
        Sudden inflammation of the stomach lining, usually due to dietary indiscretion, infections, or toxins. Symptoms include vomiting, nausea, and loss of appetite.
      </p>
    ),
    img: "/diseases-default.jpg",
    href: "/exclusive-features/health-encyclopedia/diseases/acute-gastritis",
  },
  {
    id: "chronic-kidney-disease",
    title: "Chronic Kidney Disease",
    excerpt: (
      <p className="text-[#4B5563] leading-relaxed">
        A progressive loss of kidney function, leading to toxin buildup in the body. Symptoms include increased thirst, frequent urination, and weight loss.
      </p>
    ),
    img: "/diseases-default.jpg",
    href: "/exclusive-features/health-encyclopedia/diseases/chronic-kidney-disease",
  },
  {
    id: "epiphora",
    title: "Epiphora",
    excerpt: (
      <p className="text-[#4B5563] leading-relaxed">
        Excessive tearing from blocked tear ducts or eye irritation. It can cause staining under the eyes and secondary skin issues.
      </p>
    ),
    img: "/diseases-default.jpg",
    href: "/exclusive-features/health-encyclopedia/diseases/epiphora",
  },
  {
    id: "conjunctivitis",
    title: "Conjunctivitis",
    excerpt: (
      <p className="text-[#4B5563] leading-relaxed">
        Inflammation of the conjunctiva (eye membrane), causing redness, discharge, and discomfort. Often linked to allergies, infections, or irritants.
      </p>
    ),
    img: "/diseases-default.jpg",
    href: "/exclusive-features/health-encyclopedia/diseases/conjunctivitis",
  },
  {
    id: "periodontal-disease",
    title: "Periodontal Disease",
    excerpt: (
      <p className="text-[#4B5563] leading-relaxed">
        A bacterial infection of the gums and teeth that leads to inflammation, tooth loss, and systemic infections if untreated.
      </p>
    ),
    img: "/diseases-default.jpg",
    href: "/exclusive-features/health-encyclopedia/diseases/periodontal-disease",
  },
  {
    id: "cataracts",
    title: "Cataracts",
    excerpt: (
      <p className="text-[#4B5563] leading-relaxed">
        Clouding of the eye lens, leading to vision impairment or blindness. Often age-related but may be caused by diabetes or genetics.
      </p>
    ),
    img: "/diseases-default.jpg",
    href: "/exclusive-features/health-encyclopedia/diseases/cataracts",
  },
  {
    id: "rhinitis",
    title: "Rhinitis",
    excerpt: (
      <p className="text-[#4B5563] leading-relaxed">
        Inflammation of the nasal mucosa, causing sneezing, nasal discharge, and breathing difficulties. Often due to allergies or infections.
      </p>
    ),
    img: "/diseases-default.jpg",
    href: "/exclusive-features/health-encyclopedia/diseases/rhinitis",
  },
  {
    id: "kennel-cough",
    title: "Kennel Cough",
    excerpt: (
      <p className="text-[#4B5563] leading-relaxed">
        A contagious respiratory infection causing persistent coughing, sneezing, and throat irritation. Usually mild but can progress in puppies or weak dogs.
      </p>
    ),
    img: "/diseases-default.jpg",
    href: "/exclusive-features/health-encyclopedia/diseases/kennel-cough",
  },
  {
    id: "heartworm-disease",
    title: "Heartworm Disease",
    excerpt: (
      <p className="text-[#4B5563] leading-relaxed">
        A serious parasitic infection transmitted by mosquitoes, where worms grow in the heart and lungs. It can lead to heart failure if untreated.
      </p>
    ),
    img: "/diseases-default.jpg",
    href: "/exclusive-features/health-encyclopedia/diseases/heartworm-disease",
  },
  {
    id: "canine-distemper",
    title: "Canine Distemper",
    excerpt: (
      <p className="text-[#4B5563] leading-relaxed">
        A highly contagious viral disease affecting the respiratory, digestive, and nervous systems. Often fatal, but preventable through vaccination.
      </p>
    ),
    img: "/diseases-default.jpg",
    href: "/exclusive-features/health-encyclopedia/diseases/canine-distemper",
  },
  {
    id: "cushings-syndrome",
    title: "Cushing’s Syndrome",
    excerpt: (
      <p className="text-[#4B5563] leading-relaxed">
        A hormonal disorder caused by excessive cortisol production, leading to increased appetite, thirst, and a pot-bellied appearance.
      </p>
    ),
    img: "/diseases-default.jpg",
    href: "/exclusive-features/health-encyclopedia/diseases/cushings-syndrome",
  },
  {
    id: "diabetes-mellitus",
    title: "Diabetes Mellitus",
    excerpt: (
      <p className="text-[#4B5563] leading-relaxed">
        A metabolic disease caused by insufficient insulin production or resistance, leading to high blood sugar, excessive thirst, and weight changes.
      </p>
    ),
    img: "/diseases-default.jpg",
    href: "/exclusive-features/health-encyclopedia/diseases/diabetes-mellitus",
  },
  {
    id: "parvovirus",
    title: "Parvovirus",
    excerpt: (
      <p className="text-[#4B5563] leading-relaxed">
        A severe, highly contagious viral disease affecting the gastrointestinal tract, causing vomiting, bloody diarrhea, and dehydration — often fatal without prompt treatment.
      </p>
    ),
    img: "/diseases-default.jpg",
    href: "/exclusive-features/health-encyclopedia/diseases/parvovirus",
  },
  {
  id: "canine-herpesvirus",
  title: "Canine Herpesvirus",
  excerpt: (
    <p className="text-[#4B5563] leading-relaxed">
      Canine Herpesvirus contagious viral infection that primarily affects dogs, 
      especially puppies under three weeks old and breeding dogs.
    </p>
  ),
  img: "/diseases-default.jpg",
  href: "/exclusive-features/health-encyclopedia/diseases/canine-herpesvirus",
},
  //add more diseases later on...
],


      tests: [],
      symptoms: [],

      // =========================
      // FOOD (with detail hrefs)
      // =========================
      food: [
        {
          id: "cooked-chicken-bones",
          title: "Cooked Chicken Bones",
          excerpt: (
            <p className="text-[#4B5563] leading-relaxed">
              <span className="font-bold text-red-600">
                Never feed cooked chicken bones to your pet.
              </span>{" "}
              When chewed, cooked bones can splinter into sharp fragments, which
              may injure your pet’s mouth, esophagus, or stomach and cause
              internal bleeding.
            </p>
          ),
          img: "/food-cooked-bones.jpg",
          href: "/exclusive-features/health-encyclopedia/food/cooked-chicken-bones",
        },

        {
          id: "xylitol",
          title: "Xylitol",
          excerpt: (
            <p className="text-[#4B5563] leading-relaxed">
              <span className="font-bold text-red-600">
                Never give xylitol to dogs or cats.
              </span>{" "}
              It is not metabolized by the liver and accumulates in the body,
              causing a rapid and dangerous drop in blood sugar levels. In
              severe cases, it can lead to hypoglycemic shock, seizures, or
              other life-threatening poisoning symptoms.
            </p>
          ),
          img: "/food-xylitol.jpg",
          href: "/exclusive-features/health-encyclopedia/food/xylitol",
        },

        {
          id: "fruit-seeds",
          title: "Fruit Seeds",
          excerpt: (
            <p className="text-[#4B5563] leading-relaxed">
              <span className="font-bold text-red-600">
                Fruit seeds contain substances that can be harmful to pets and
                should never be consumed.
              </span>{" "}
              In particular, apple seeds, peach pits, and cherry pits contain
              cyanide compounds, which can cause poisoning if ingested in large
              amounts.
            </p>
          ),
          img: "/food-fruit-seeds.jpg",
          href: "/exclusive-features/health-encyclopedia/food/fruit-seeds",
        },

        {
          id: "macadamia-nuts",
          title: "Macadamia Nuts",
          excerpt: (
            <p className="text-[#4B5563] leading-relaxed">
              <span className="font-bold text-red-600">
                Never feed macadamia nuts to dogs or cats.
              </span>{" "}
              They are highly toxic to pets and can cause severe poisoning
              symptoms, posing a serious risk to their health.
            </p>
          ),
          img: "/food-macadamia.jpg",
          href: "/exclusive-features/health-encyclopedia/food/macadamia-nuts",
        },

        {
          id: "fried-foods",
          title: "Fried Foods",
          excerpt: (
            <p className="text-[#4B5563] leading-relaxed">
              <span className="font-bold text-red-600">
                Feeding fried foods to dogs or cats is not recommended.
              </span>{" "}
              While the level of risk may vary depending on the ingredients,
              items such as fried shrimp or fish require particular caution.
              Additionally, the batter and oil used in frying can have harmful
              effects on your pet’s health.
            </p>
          ),
          img: "/food-fried.jpg",
          href: "/exclusive-features/health-encyclopedia/food/fried-foods",
        },

        {
          id: "caffeine",
          title: "Caffeine",
          excerpt: (
            <p className="text-[#4B5563] leading-relaxed">
              <span className="font-bold text-red-600">
                Caffeine is extremely dangerous for dogs and cats.
              </span>{" "}
              It stimulates the central nervous system, which can severely
              affect the heart, respiratory system, and blood circulation. In
              addition, caffeine can put stress on the kidneys and impair their
              function.
            </p>
          ),
          img: "/food-caffeine.jpg",
          href: "/exclusive-features/health-encyclopedia/food/caffeine",
        },

        {
          id: "chocolate",
          title: "Chocolate",
          excerpt: (
            <p className="text-[#4B5563] leading-relaxed">
              <span className="font-bold text-red-600">
                Never give chocolate to your pets.
              </span>{" "}
              Chocolate contains caffeine and theobromine, both of which are
              toxic to dogs and cats. These substances can negatively impact
              their central nervous system and may also harm the heart.
            </p>
          ),
          img: "/food-chocolate.jpg",
          href: "/exclusive-features/health-encyclopedia/food/chocolate",
        },

        {
          id: "watermelon",
          title: "Watermelon",
          excerpt: (
            <p className="text-[#4B5563] leading-relaxed">
              <span className="font-bold text-green-600">
                Yes, dogs and cats can safely eat watermelon.
              </span>{" "}
              It has a high water content and is rich in dietary fiber, which
              can aid digestion. Watermelon is also packed with vitamin C and
              beta-carotene, which help boost the immune system.
            </p>
          ),
          img: "/food-watermelon.jpg",
          href: "/exclusive-features/health-encyclopedia/food/watermelon",
        },

        {
          id: "grapes",
          title: "Grapes",
          excerpt: (
            <p className="text-[#4B5563] leading-relaxed">
              <span className="font-bold text-red-600">
                Grapes are extremely dangerous for dogs and cats and can cause
                poisoning.
              </span>{" "}
              They contain toxic substances that can damage kidney function,
              potentially leading to acute kidney failure in severe cases.
            </p>
          ),
          img: "/food-grapes.jpg",
          href: "/exclusive-features/health-encyclopedia/food/grapes",
        },

        {
          id: "alcohol",
          title: "Alcohol",
          excerpt: (
            <p className="text-[#4B5563] leading-relaxed">
              <span className="font-bold text-red-600">
                Alcohol is highly toxic to dogs and cats.
              </span>{" "}
              Because they metabolize alcohol much more slowly than humans,
              ingestion can severely affect their central nervous system, liver,
              and heart. It can also raise blood pressure and lead to serious
              symptoms such as respiratory distress, brain damage,
              unconsciousness, or even cardiac arrest.
            </p>
          ),
          img: "/food-alcohol.jpg",
          href: "/exclusive-features/health-encyclopedia/food/alcohol",
        },

        {
          id: "garlic",
          title: "Garlic",
          excerpt: (
            <p className="text-[#4B5563] leading-relaxed">
              <span className="font-bold text-red-600">
                Garlic can be harmful to dogs and cats
              </span>{" "}
              because it contains organosulfur compounds. These substances can
              damage red blood cells, potentially leading to hemolytic anemia.
              Therefore, feeding garlic to pets is strongly discouraged.
            </p>
          ),
          img: "/food-garlic.jpg",
          href: "/exclusive-features/health-encyclopedia/food/garlic",
        },

        {
          id: "onions",
          title: "Onions",
          excerpt: (
            <p className="text-[#4B5563] leading-relaxed">
              <span className="font-bold text-red-600">
                Dogs and cats should never eat onions.
              </span>{" "}
              All types—yellow, red, and white—are toxic to pets. Onions contain
              a harmful compound called N-propyl disulfide, which can destroy
              red blood cells and cause anemia (hemolytic anemia).
            </p>
          ),
          img: "/food-onions.jpg",
          href: "/exclusive-features/health-encyclopedia/food/onions",
        },

        {
          id: "potatoes",
          title: "Potatoes",
          excerpt: (
            <p className="text-[#4B5563] leading-relaxed">
              <span className="font-bold text-green-600">
                Yes, dogs and cats can eat potatoes.
              </span>{" "}
              They are a good source of carbohydrates and contain nutrients such
              as vitamin C and potassium. However, because potatoes are high in
              sugar, excessive amounts can raise blood sugar levels. It’s best
              to serve them in small portions, boiled, or mashed for easier
              digestion.
            </p>
          ),
          img: "/food-potatoes.jpg",
          href: "/exclusive-features/health-encyclopedia/food/potatoes",
        },

        {
          id: "sweet-potatoes",
          title: "Sweet Potatoes",
          excerpt: (
            <p className="text-[#4B5563] leading-relaxed">
              <span className="font-bold text-green-600">
                Yes, dogs and cats can eat sweet potatoes.
              </span>{" "}
              They are rich in beta-carotene, vitamin C, and calcium, which
              support overall health. Low glycemic index + fiber help digestion
              and blood sugar control.
            </p>
          ),
          img: "/food-sweet-potatoes.jpg",
          href: "/exclusive-features/health-encyclopedia/food/sweet-potatoes",
        },

        {
          id: "eggs",
          title: "Eggs",
          excerpt: (
            <p className="text-[#4B5563] leading-relaxed">
              <span className="font-bold text-green-600">
                Yes, eggs are a highly nutritious food for dogs and cats.
              </span>{" "}
              They are rich in protein, fat, vitamin A, vitamin D, calcium, and
              iron. Protein is an essential nutrient that pets should include in
              their diet.
            </p>
          ),
          img: "/food-eggs.jpg",
          href: "/exclusive-features/health-encyclopedia/food/eggs",
        },

        {
          id: "cheese",
          title: "Cheese",
          excerpt: (
            <p className="text-[#4B5563] leading-relaxed">
              <span className="font-bold text-green-600">
                Yes, cheese can be offered as a tasty treat for dogs and cats.
              </span>{" "}
              It is rich in protein, fat, and calcium, which support overall
              health. Offer in small amounts—some pets are lactose sensitive.
            </p>
          ),
          img: "/food-cheese.jpg",
          href: "/exclusive-features/health-encyclopedia/food/cheese",
        },

        {
          id: "avocado",
          title: "Avocado",
          excerpt: (
            <p className="text-[#4B5563] leading-relaxed">
              <span className="font-bold text-red-600">
                No, dogs and cats should never eat avocado.
              </span>{" "}
              It contains persin, a toxin that can damage certain types of cells
              and affect the heart and respiratory system. Avoid completely.
            </p>
          ),
          img: "/food-avocado.jpg",
          href: "/exclusive-features/health-encyclopedia/food/avocado",
        },

        {
          id: "corn",
          title: "Corn",
          excerpt: (
            <p className="text-[#4B5563] leading-relaxed">
              <span className="font-bold text-green-600">
                Yes, dogs and cats can eat corn
              </span>{" "}
              and it’s rich in fiber, carotene, vitamin C, and B vitamins. Some
              pets may have sensitivities—start with small portions and monitor.
            </p>
          ),
          img: "/food-corn.jpg",
          href: "/exclusive-features/health-encyclopedia/food/corn",
        },

        {
          id: "cucumber",
          title: "Cucumber",
          excerpt: (
            <p className="text-[#4B5563] leading-relaxed">
              <span className="font-bold text-green-600">
                Yes, dogs and cats can eat cucumber.
              </span>{" "}
              High in water and fiber for hydration and digestion; contains
              vitamin C, vitamin K, and potassium. Low in calories—great for
              weight control.
            </p>
          ),
          img: "/food-cucumber.jpg",
          href: "/exclusive-features/health-encyclopedia/food/cucumber",
        },

        {
          id: "broccoli",
          title: "Broccoli",
          excerpt: (
            <p className="text-[#4B5563] leading-relaxed">
              <span className="font-bold text-green-600">
                Yes, dogs and cats can eat broccoli.
              </span>{" "}
              Rich in calcium and vitamins C, K, and A; contains antioxidants
              like sulforaphane and glucosinolates that support immunity.
            </p>
          ),
          img: "/food-broccoli.jpg",
          href: "/exclusive-features/health-encyclopedia/food/broccoli",
        },

        {
          id: "carrots",
          title: "Carrots",
          excerpt: (
            <p className="text-[#4B5563] leading-relaxed">
              <span className="font-bold text-green-600">
                Yes, dogs and cats can eat carrots.
              </span>{" "}
              High in vitamin A, calcium, and fiber—good for eye/skin health and
              digestion; makes a crunchy low-calorie treat.
            </p>
          ),
          img: "/food-carrots.jpg",
          href: "/exclusive-features/health-encyclopedia/food/carrots",
        },

        {
          id: "zucchini",
          title: "Zucchini",
          excerpt: (
            <p className="text-[#4B5563] leading-relaxed">
              <span className="font-bold text-green-600">
                Yes, dogs and cats can eat zucchini.
              </span>{" "}
              Packed with vitamin C, vitamin A, calcium, potassium, and fiber to
              support immunity, skin/eye health, bones, and digestion.
            </p>
          ),
          img: "/food-zucchini.jpg",
          href: "/exclusive-features/health-encyclopedia/food/zucchini",
        },

        {
          id: "eggplant",
          title: "Eggplant",
          excerpt: (
            <p className="text-[#4B5563] leading-relaxed">
              <span className="font-bold text-green-600">
                Dogs and cats can eat eggplant
              </span>{" "}
              in moderate amounts when prepared properly. Provides vitamin C,
              vitamin A, and fiber—introduce slowly and monitor tolerance.
            </p>
          ),
          img: "/food-eggplant.jpg",
          href: "/exclusive-features/health-encyclopedia/food/eggplant",
        },

        {
          id: "bananas",
          title: "Bananas",
          excerpt: (
            <p className="text-[#4B5563] leading-relaxed">
              <span className="font-bold text-green-600">
                Yes, dogs and cats can eat bananas
              </span>{" "}
              but because they contain natural sugars, serve in moderation.
              Provide potassium, vitamin C, vitamin B6, and fiber.
            </p>
          ),
          img: "/food-bananas.jpg",
          href: "/exclusive-features/health-encyclopedia/food/bananas",
        },

        {
          id: "tomatoes",
          title: "Tomatoes",
          excerpt: (
            <p className="text-[#4B5563] leading-relaxed">
              <span className="font-bold text-green-600">
                Ripe red tomatoes are safe
              </span>{" "}
              and provide lycopene, vitamin C, vitamin K, calcium, and fiber.
              (Avoid green tomatoes/plant parts which contain solanine.)
            </p>
          ),
          img: "/food-tomatoes.jpg",
          href: "/exclusive-features/health-encyclopedia/food/tomatoes",
        },

        {
          id: "apples",
          title: "Apples",
          excerpt: (
            <p className="text-[#4B5563] leading-relaxed">
              <span className="font-bold text-green-600">
                Yes, dogs and cats can eat apples.
              </span>{" "}
              Apples are rich in vitamin C, fiber, polyphenols, and calcium.
              Fiber aids digestion; polyphenols provide antioxidant benefits.
            </p>
          ),
          img: "/food-apples.jpg",
          href: "/exclusive-features/health-encyclopedia/food/apples",
        },
      ],
    }),
    []
  );

  return (
    <main className="bg-white">
      {/* ===== Hero ===== */}
      <div
        className="relative bg-cover bg-center bg-no-repeat h-[500px] flex items-center justify-center px-6"
        style={{ backgroundImage: "url('/encyclopedia-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-xl text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
            Health Encyclopedia
          </h1>
          <p className="text-base md:text-lg leading-relaxed">
            Explore essential pet health knowledge in one place. <br />
            Learn which foods are safe and nutritious, understand common
            diseases in plain language, discover the purpose behind veterinary
            tests, and make sense of your pet’s symptoms with clarity and
            confidence.
          </p>
        </div>
      </div>

      {/* ===== Categories + List ===== */}
      <section className="mx-auto max-w-5xl px-4 md:px-6 py-12">
        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {TABS.map((t) => {
            const isActive = t.key === active;
            return (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={[
                  "px-5 py-2 rounded-full text-sm font-medium transition",
                  "border",
                  isActive
                    ? "bg-[#4A321E] text-white border-[#4A321E]"
                    : "bg-white text-[#4A321E] border-[#4A321E] hover:bg-gray-50",
                ].join(" ")}
                aria-pressed={isActive}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Results */}
<ul className="space-y-8">
  {data[active].map((item) => (
    <li
      key={item.id}
      className="flex items-start gap-4 border-b pb-8"
    >
      {/* Text */}
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-black mb-2">
          {item.title}
        </h3>
        {item.excerpt}
        {item.href ? (
          <Link
            href={item.href}
            className="inline-block mt-3 text-sm font-semibold hover:underline underline-offset-4"
            style={{ color: "#000000ff" }}
          >
            Learn more &gt;
          </Link>
        ) : null}
      </div>

      {/* Thumbnail – show only if NOT diseases */}
      {active !== "diseases" && item.img && (
        <div className="relative w-28 h-28 shrink-0 rounded-lg overflow-hidden">
          <Image
            src={item.img}
            alt={item.title}
            fill
            className="object-cover"
            sizes="112px"
          />
        </div>
      )}
    </li>
  ))}
</ul>

      </section>
    </main>
  );
}
