import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

/** ---------- Content Model ---------- */
type FoodDetail = {
  title: string;
  hero: string;
  summary?: string;
  paragraphs?: string[];        // fallback content
  rich?: React.ReactNode;       // optional rich layout for items we’ve polished
};

/** ---------- Styled Building Blocks ---------- */
function SectionCard({
  title,
  children,
  tone = "neutral",
}: {
  title: string;
  children: React.ReactNode;
  tone?: "neutral" | "danger" | "caution" | "safe";
}) {
  const toneClasses =
    tone === "danger"
      ? "border-red-200 bg-red-50/60"
      : tone === "caution"
      ? "border-amber-200 bg-amber-50/60"
      : tone === "safe"
      ? "border-emerald-200 bg-emerald-50/60"
      : "border-gray-200 bg-white";

  return (
    <div className={`border ${toneClasses} rounded-lg p-5 md:p-6`}>
      <h3 className="text-lg md:text-xl font-semibold text-[#111827] mb-3">
        {title}
      </h3>
      <div className="text-[#374151] leading-relaxed">{children}</div>
    </div>
  );
}

function BulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="list-disc pl-5 space-y-1">
      {items.map((li, i) => (
        <li key={i}>{li}</li>
      ))}
    </ul>
  );
}

function NumberList({ items }: { items: React.ReactNode[] }) {
  return (
    <ol className="list-decimal pl-5 space-y-1">
      {items.map((li, i) => (
        <li key={i}>{li}</li>
      ))}
    </ol>
  );
}

/** ---------- Page Content ---------- */
const CONTENTS: Record<string, FoodDetail> = {
  /* 🔴 DANGEROUS: Cooked chicken bones (rich layout) */
  "cooked-chicken-bones": {
    title: "Cooked Chicken Bones",
    hero: "/food-cooked-bones.jpg",
    summary:
      "Never feed cooked chicken bones to your pet—splinters can puncture organs, spark infection, or block the intestines.",
    rich: (
  <div className="space-y-8">
    {/* Intro paragraphs */}
    <div className="space-y-4 text-[#111827]">
      <p>
        When chicken bones are chewed, they can break into sharp pieces that may injure
        the mouth, esophagus, stomach, or intestines. These splinters can also puncture
        the digestive tract, allowing bacteria and food particles to leak into the abdominal
        cavity. This can lead to <strong>peritonitis</strong> (inflammation of the abdominal
        lining) or even <strong>sepsis</strong> (a dangerous bloodstream infection).
      </p>
      <p>
        Because bones are hard to digest, they may also cause <strong>blockages</strong> in
        the digestive system. In severe cases, this becomes a life-threatening emergency.
      </p>
    </div>

    {/* Raw bones callout */}
    <div className="border border-gray-400 rounded-md p-5 bg-white">
      <h3 className="font-semibold text-[#111827] mb-2">
        Raw Chicken Bones — Are They Safe?
      </h3>
      <p className="text-[#374151] mb-2">
        Some people believe raw chicken bones are safe because they are softer and easier
        to chew. However, risks still remain:
      </p>
      <ul className="list-disc pl-6 text-[#374151] space-y-1">
        <li>Sharp fragments can still form and injure the digestive system.</li>
        <li>Raw chicken may contain harmful bacteria that cause severe stomach infections.</li>
      </ul>
      <p className="text-[#374151] mt-2">
        Even if your pet swallows a small amount without immediate symptoms, feeding chicken
        bones is always considered unsafe.
      </p>
    </div>

    {/* What to do */}
    <section className="space-y-3">
      <h3 className="font-semibold text-[#111827]">
        What to Do If Your Pet Eats Chicken Bones
      </h3>
      <ol className="list-decimal pl-6 space-y-2 text-[#374151]">
        <li>
          <strong>Stay Calm</strong> — Swallowing a bone does not always lead to problems.
          In many cases, the bone passes through naturally. However, you should still
          monitor your pet closely.
        </li>
        <li>
          <strong>Observe Carefully</strong> — Watch for symptoms such as vomiting,
          abdominal pain, lethargy, blood in stool, or changes in appetite. If you notice
          any of these, contact a veterinarian immediately.
        </li>
        <li>
          <strong>Support Digestion</strong> — Feeding soft, easily digestible food and
          ensuring plenty of water can help move the bone through the digestive tract more
          smoothly.
        </li>
      </ol>
    </section>

    {/* What the vet might do */}
    <section className="space-y-3">
      <h3 className="font-semibold text-[#111827]">What the Vet Might Do</h3>
      <ul className="list-disc pl-6 space-y-1 text-[#374151]">
        <li>
          <strong>Examination:</strong> Check your pet’s condition and look for signs of
          internal damage or blockage.
        </li>
        <li>
          <strong>X-ray / Ultrasound:</strong> Determine whether bones are stuck or causing injury.
        </li>
        <li>
          <strong>Surgery:</strong> If the bone is trapped and cannot pass naturally,
          surgical removal may be necessary.
        </li>
        <li>
          <strong>Medication:</strong> Prescribe antibiotics or anti-inflammatory drugs
          if infection or inflammation is present.
        </li>
        <li>
          <strong>IV Fluids:</strong> Provide fluids to prevent dehydration and support recovery.
        </li>
      </ul>
    </section>

    {/* Complications + Warning signs (two columns) */}
    <div className="grid md:grid-cols-2 gap-6">
      <div className="border border-gray-400 rounded-md p-5 bg-white">
        <h3 className="font-semibold text-[#111827] mb-2">Possible Complications</h3>
        <p className="text-[#374151] mb-2">
          If chicken bones cause internal injury or obstruction, your pet may face serious
          complications such as:
        </p>
        <ul className="list-disc pl-6 text-[#374151] space-y-1">
          <li>
            <strong>Peritonitis:</strong> Inflammation of the abdominal lining caused by
            puncture or leakage.
          </li>
          <li>
            <strong>Sepsis:</strong> A dangerous infection in the bloodstream that can
            spread rapidly.
          </li>
          <li>
            <strong>Intestinal Obstruction:</strong> A blockage preventing food and waste
            from moving, leading to severe pain and vomiting.
          </li>
          <li>
            <strong>Internal Damage:</strong> Sharp fragments cutting or tearing the
            digestive organs.
          </li>
        </ul>
      </div>

      <div className="border border-gray-400 rounded-md p-5 bg-white">
        <h3 className="font-semibold text-[#111827] mb-2"> Warning Signs to Watch For</h3>
        <p className="text-[#374151] mb-2">
          Contact a vet immediately if your pet shows any of these signs after eating bones:
        </p>
        <ul className="list-disc pl-6 text-[#374151] space-y-1">
          <li>Abdominal pain or bloating</li>
          <li>Vomiting or diarrhea</li>
          <li>Blood in stool</li>
          <li>Loss of appetite</li>
          <li>Constipation or inability to pass stool</li>
          <li>Lethargy or weakness</li>
          <li>Difficulty breathing</li>
        </ul>
      </div>
    </div>

    {/* Blockage + Summary */}
    <section className="space-y-3">
      <h3 className="font-semibold text-[#111827]">Intestinal Blockage Explained</h3>
      <p className="text-[#374151]">
        An intestinal blockage occurs when part of the digestive system becomes blocked or
        narrowed, preventing normal digestion. This can happen if bone fragments become stuck,
        or if swelling occurs in the intestines.
      </p>
      <p className="font-semibold text-red-600">
        Blockages are emergencies and require immediate medical attention.
      </p>
    </section>

    <section className="space-y-2">
      <h3 className="font-semibold text-[#111827]">Summary:</h3>
      <p className="text-[#374151]">
        Chicken bones are one of the most dangerous foods for dogs and cats. They can
        splinter, puncture organs, cause severe infections, or block the intestines.
        Even if your pet seems fine, it’s best to monitor them closely and contact a
        veterinarian if you notice any abnormal behavior or symptoms.
      </p>
    </section>
  </div>
),

  },

  /* Others: still use simple paragraphs until we enrich them */
  xylitol: {
  title: "Xylitol",
  hero: "/food-xylitol.jpg",
  summary:
    "Never give xylitol to dogs or cats. This artificial sweetener can cause a sudden and severe drop in blood sugar, leading to hypoglycemic shock, seizures, or even death.",
  rich: (
    <div className="space-y-8">
      <div className="rounded-xl border border-red-200 bg-red-50 p-5 md:p-6">
        <p className="text-[15px] md:text-base leading-relaxed text-[#000000]">
          <span className="font-bold text-red-600">Never give xylitol to dogs or cats.</span>{" "}
          This artificial sweetener is not properly processed by their liver and quickly
          accumulates in the body, causing a sudden and severe drop in blood sugar. In serious
          cases, it can lead to <span className="font-semibold">hypoglycemic shock</span>, tremors,
          seizures, or even death. Once absorbed into the bloodstream, xylitol also stimulates the
          pancreas to release large amounts of <span className="font-semibold">insulin</span>, which
          further lowers blood sugar and can cause dangerous hypoglycemia.
        </p>
      </div>

      <section>
        <h3 className="text-2xl font-bold text-black mb-3">Hypoglycemic Shock</h3>
        <p className="text-[#000000] leading-relaxed">
          Hypoglycemic shock can happen for several reasons. One of the most common is an{" "}
          <span className="font-semibold">excessive release of insulin</span>, which causes blood
          sugar levels to plummet suddenly. Other underlying causes can include{" "}
          <span className="font-semibold">liver disease</span>,{" "}
          <span className="font-semibold">adrenal or kidney disorders</span>, or{" "}
          <span className="font-semibold">pituitary gland problems</span>. If untreated, hypoglycemic
          shock can be life-threatening.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-bold text-black mb-3">Insulin and Its Role</h3>
        <p className="text-[#000000] leading-relaxed">
          <span className="font-semibold">Insulin</span> is a hormone that regulates blood sugar.
          Dogs and cats can develop <span className="font-semibold">diabetes</span>, which means
          they either don’t produce enough insulin or their bodies don’t respond properly to it. In
          these cases, blood sugar regulation becomes difficult. Pets often require{" "}
          <span className="font-semibold">insulin injections or insulin pens</span> to maintain safe
          blood sugar levels. Work closely with a veterinarian to determine the correct{" "}
          <span className="font-semibold">dosage and treatment plan</span>.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-bold text-black mb-3">What to Do If Your Pet Eats Xylitol</h3>
        <p className="text-[#000000] leading-relaxed">
          If your pet has eaten food containing xylitol,{" "}
          <span className="font-semibold">contact your veterinarian immediately</span> or visit an
          animal hospital as soon as possible. The treatment plan will depend on{" "}
          <span className="font-semibold">how much was ingested</span> and the animal’s condition.
          Keep xylitol-containing products out of reach and seek medical care immediately if
          ingestion occurs — even if your pet seems fine at first.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-bold text-black mb-3">Treatment at the Veterinary Hospital</h3>
        <ul className="list-disc pl-6 space-y-2 text-[#000000] leading-relaxed">
          <li>
            <span className="font-semibold">Induce vomiting:</span> If ingestion occurred within 30
            minutes, medication may be given to help remove xylitol from the stomach.
          </li>
          <li>
            <span className="font-semibold">Fluid therapy:</span> If signs of hypoglycemia or shock
            appear, IV fluids are administered to support organ function and restore balance.
          </li>
          <li>
            <span className="font-semibold">Insulin regulation:</span> In some cases, insulin
            injections may be required to help stabilize blood sugar.
          </li>
          <li>
            <span className="font-semibold">Medication for liver support:</span> If liver damage or
            inflammation occurs, protective or regenerative medications may be prescribed.
          </li>
        </ul>
        <p className="text-[#000000] leading-relaxed mt-3">
          Prompt veterinary care is critical to ensure the best outcome.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-bold text-black mb-3">Common Foods Containing Xylitol</h3>
        <p className="text-[#000000] leading-relaxed">
          Xylitol is often used in diet or sugar-free products as a sugar substitute. Typical
          examples include:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[#000000] leading-relaxed">
          <li>Candies and mints</li>
          <li>Jellies and gums</li>
          <li>Chocolates</li>
          <li>Baked goods</li>
          <li>Immune-boosting supplements</li>
        </ul>
      </section>

      <section>
        <h3 className="text-2xl font-bold text-black mb-3">Symptoms of Xylitol Poisoning</h3>
        <p className="text-[#000000] leading-relaxed">
          Symptoms can vary depending on the amount ingested and the species of animal, but common
          signs include:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[#000000] leading-relaxed">
          <li>Vomiting</li>
          <li>Diarrhea</li>
          <li>Lethargy or weakness</li>
          <li>Tremors</li>
          <li>Seizures</li>
          <li>Hypoglycemic shock</li>
        </ul>
      </section>

      <div className="mt-8 rounded-xl border border-red-200 bg-red-50 p-5 md:p-6">
        <h4 className="text-xl font-bold text-black mb-2">Summary</h4>
        <p className="text-[#ff0000] leading-relaxed">
          If your pet consumes xylitol, do not wait for symptoms to appear — they can progress
          rapidly and become life-threatening.{" "}
          <span className="font-semibold">Contact a veterinarian as soon as possible</span> and
          follow their instructions carefully. With prompt medical care, many pets can fully recover
          without long-term complications.
        </p>
      </div>
    </div>
  ),
},

  "fruit-seeds": {
  title: "Fruit Seeds",
  hero: "/food-fruit-seeds.jpg",
  summary:
    "Fruit seeds can contain substances that are toxic and dangerous to pets, including cyanide compounds and risks of intestinal obstruction.",
  rich: (
    <div className="space-y-8">
      <p className="text-[#000000] leading-relaxed">
        Fruit seeds can contain substances that are{" "}
        <span className="font-bold text-red-600">toxic and dangerous to pets, so they should never be eaten.</span>
        In particular, <span className="font-semibold">apple seeds, peach pits, and cherry seeds</span>{" "}
        contain a toxic compound called{" "}
        <span className="font-semibold">cyanogenic glycoside (cyanide)</span>. If ingested in large
        amounts, these seeds can lead to serious poisoning.
      </p>

      <p className="text-[#000000] leading-relaxed">
        Additionally, for pets with <span className="font-semibold">sensitive digestion</span>,
        swallowing seeds from fruits like watermelon or melon can cause{" "}
        <span className="font-semibold">indigestion or intestinal blockages</span>. If a dog or cat
        swallows fruit seeds — especially large seeds like peach pits — they can become stuck in the
        digestive tract or irritate the stomach lining before they are digested. Large seeds can even
        travel to the intestines and cause blockages, leading to serious health complications.
      </p>

      <p className="italic text-[#000000]">
        *Always remove the seeds before giving fruits to your pets and only offer the fruit flesh itself.*
      </p>

      {/* Cyanide Compounds */}
      <section>
        <h3 className="text-2xl font-bold text-black mb-3">Cyanide Compounds</h3>
        <p className="text-[#000000] leading-relaxed">
          Cyanide is a toxic substance that interferes with the body’s ability to use oxygen. Once
          absorbed, it can cause <span className="font-semibold">breathing difficulties, confusion,
          irregular heartbeat, and even heart failure</span> in severe cases.
        </p>
        <p className="text-[#000000] leading-relaxed mt-2">
          Apple seeds, peach pits, cherry seeds, and certain other fruit seeds{" "}
          <span className="font-semibold">contain small amounts of cyanide</span>. Ingesting a large
          quantity can result in serious poisoning and potentially life-threatening symptoms.
        </p>
      </section>

      {/* Indigestion */}
      <section>
        <h3 className="text-2xl font-bold text-black mb-3">Indigestion (Digestive Upset)</h3>
        <p className="text-[#000000] leading-relaxed">
          Indigestion occurs when a dog’s digestive system is too weak to properly process food,
          causing food to remain in the stomach or be vomited back up.
        </p>
        <p className="text-[#000000] leading-relaxed mt-2">It can happen for various reasons, including:</p>
        <ul className="list-disc pl-6 space-y-2 text-[#000000] leading-relaxed">
          <li>Eating too much high-fat or high-protein food</li>
          <li>Pre-existing digestive diseases</li>
          <li>Side effects from medication</li>
          <li>Stress</li>
        </ul>
        <p className="text-[#000000] leading-relaxed mt-2">
          Typical symptoms include{" "}
          <span className="font-semibold">vomiting, diarrhea, bloating, and loss of appetite</span>.
        </p>
      </section>

      {/* Intestinal Obstruction */}
      <section>
        <h3 className="text-2xl font-bold text-black mb-3">Intestinal Obstruction</h3>
        <p className="text-[#000000] leading-relaxed">
          Intestinal obstruction occurs when the intestines are{" "}
          <span className="font-semibold">blocked or unable to pass waste normally</span>. This may
          be suspected if your dog suddenly stops passing stool or if food and digestive fluids
          cannot move through the intestines.
        </p>
        <p className="text-[#000000] leading-relaxed mt-2">
          Blockages are often caused by foreign objects, undigested materials, or large seeds getting
          stuck in the intestinal tract. Severe cases can require{" "}
          <span className="font-semibold">emergency surgery</span> to remove the obstruction and
          prevent life-threatening complications.
        </p>
      </section>

      {/* Symptoms */}
      <section>
        <h3 className="text-2xl font-bold text-black mb-3">Symptoms of Fruit Seed Ingestion</h3>
        <p className="text-[#000000] leading-relaxed">
          Symptoms can vary depending on the{" "}
          <span className="font-semibold">amount consumed, the size of the seeds, and the pet’s overall health</span>.
          Common signs include:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[#000000] leading-relaxed">
          <li>Vomiting</li>
          <li>Diarrhea</li>
          <li>Digestive discomfort or loss of appetite</li>
          <li>Intestinal blockage or inflammation of the digestive tract</li>
        </ul>
      </section>

      {/* What to Do */}
      <section>
        <h3 className="text-2xl font-bold text-black mb-3">What to Do If Your Pet Eats Fruit Seeds</h3>
        <p className="text-[#000000] leading-relaxed">
          If your pet shows any of the symptoms above after ingesting fruit seeds,{" "}
          <span className="font-semibold">contact a veterinarian as soon as possible</span>. Even if
          the symptoms are mild, it’s still important to{" "}
          <span className="font-semibold">observe your pet closely</span> and seek professional advice
          based on how much was eaten, how long ago ingestion occurred, and your pet’s size and
          overall health condition.
        </p>
        <p className="text-[#000000] leading-relaxed mt-2">
          <span className="font-semibold">Prevention Tip:</span> Always remove the seeds before giving
          fruits to your pet. Also, be mindful of the amount and type of fruit you offer to avoid
          digestive issues.
        </p>
      </section>

      {/* Treatment */}
      <section>
        <h3 className="text-2xl font-bold text-black mb-3">Treatment at the Animal Hospital</h3>
        <p className="text-[#000000] leading-relaxed">
          Veterinarians will provide appropriate treatment depending on the{" "}
          <span className="font-semibold">symptoms and severity</span> after fruit seed ingestion.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[#000000] leading-relaxed mt-2">
          <li>
            If the symptoms are mild, the vet may prescribe{" "}
            <span className="font-semibold">digestive aids or medications</span> to help the body
            pass the seeds naturally or to protect the stomach lining and improve digestion.
          </li>
          <li>
            If the case is more severe — for example, if{" "}
            <span className="font-semibold">intestinal blockage or poisoning</span> occurs —{" "}
            <span className="font-semibold">surgery or more intensive treatments</span> may be
            necessary.
          </li>
        </ul>
      </section>

      {/* Final Summary */}
      <div className="mt-8 rounded-xl border border-red-200 bg-red-50 p-5 md:p-6">
        <h4 className="text-xl font-bold text-black mb-2">Final Summary</h4>
        <p className="text-[#000000] leading-relaxed">
          If your pet eats fruit seeds, never ignore the situation, even if symptoms appear mild at
          first. Seeds can cause serious internal damage or poisoning, especially if they are large
          or consumed in significant amounts.{" "}
          <span className="font-semibold">
            Quick action — including contacting your veterinarian immediately — significantly increases
            the chances of a full and safe recovery.
          </span>
        </p>
      </div>
    </div>
  ),
},

  "macadamia-nuts": {
  title: "Macadamia Nuts",
  hero: "/food-macadamia.jpg",
  summary:
    "Never feed macadamia nuts to dogs or cats. They are highly toxic and can cause poisoning, digestive disorders, and other serious complications.",
  rich: (
    <div className="space-y-8">
      <p className="text-[#000000] leading-relaxed">
        Although the <span className="font-semibold">exact toxic compound</span> in macadamia nuts is still
        not fully understood, it is widely accepted that they pose significant health risks and{" "}
        <span className="font-bold text-red-600">should always be avoided</span>.
      </p>
      <p className="text-[#000000] leading-relaxed">
        Because macadamia nuts are <span className="font-semibold">high in fat and calories</span>, they can
        cause a variety of health issues in pets, including{" "}
        <span className="font-semibold">obesity, digestive disorders, pancreatitis, and heart disease</span>.
        Excessive consumption may also lead to <span className="font-semibold">kidney problems</span>.
      </p>

      {/* Pancreatitis */}
      <section>
        <h3 className="text-2xl font-bold text-black mb-3">Pancreatitis</h3>
        <p className="text-[#000000] leading-relaxed">
          Pancreatitis is an inflammation of the pancreas, an organ that produces digestive enzymes.
          When inflammation occurs, the enzymes may start attacking the pancreas itself, making the condition
          worse. Pancreatitis in dogs can be caused by an imbalanced diet, obesity, medication side effects,
          or ingestion of foreign substances.
        </p>
        <p className="text-[#000000] leading-relaxed mt-2">Symptoms include:</p>
        <ul className="list-disc pl-6 space-y-2 text-[#000000] leading-relaxed">
          <li>Vomiting</li>
          <li>Diarrhea</li>
          <li>Loss of appetite</li>
          <li>Bloating</li>
        </ul>
        <p className="text-[#000000] leading-relaxed mt-2">
          If severe, pancreatitis can cause serious, life-threatening complications.
        </p>
      </section>

      {/* Heart Disease */}
      <section>
        <h3 className="text-2xl font-bold text-black mb-3">Heart Disease</h3>
        <p className="text-[#000000] leading-relaxed">
          Heart disease occurs when the heart’s function becomes impaired and can no longer circulate blood
          effectively. There are many possible causes, and symptoms may include breathing difficulties,
          loss of appetite, weight loss, or irregular heartbeat.
        </p>
        <p className="text-[#000000] leading-relaxed mt-2">
          Prevention involves regular exercise, a balanced diet, weight control, and routine health check-ups.
        </p>
      </section>

      {/* Symptoms */}
      <section>
        <h3 className="text-2xl font-bold text-black mb-3">Symptoms After Eating Macadamia Nuts</h3>
        <p className="text-[#000000] leading-relaxed">
          If a pet eats macadamia nuts, symptoms may appear within 12 hours and can last for 12 to 48 hours.
          Common symptoms include:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[#000000] leading-relaxed">
          <li>Vomiting</li>
          <li>Diarrhea</li>
          <li>Indigestion</li>
          <li>Abdominal pain</li>
          <li>Tremors</li>
          <li>Weakness</li>
          <li>Lethargy</li>
          <li>Fatigue</li>
          <li>Unsteady walking</li>
          <li>Fever</li>
        </ul>
      </section>

      {/* What to Do */}
      <section>
        <h3 className="text-2xl font-bold text-black mb-3">What to Do If Your Pet Eats Macadamia Nuts</h3>
        <p className="text-[#000000] leading-relaxed">
          If your pet shows no symptoms after eating macadamia nuts, it’s best to let them rest at home
          and monitor their condition closely. However, if any of the symptoms above appear,{" "}
          <span className="font-semibold">visit a veterinarian immediately</span>. Prompt medical care can help
          prevent the toxins from being absorbed into the bloodstream.
        </p>
        <p className="text-[#000000] leading-relaxed mt-2">
          Depending on the severity of the symptoms, veterinarians may:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[#000000] leading-relaxed">
          <li>Provide IV fluids to maintain hydration and stabilize digestion</li>
          <li>Administer medications to prevent vomiting or support digestion</li>
          <li>In severe cases, use drugs to break down fats and stabilize blood circulation</li>
        </ul>
      </section>

      {/* Summary */}
      <div className="mt-8 rounded-xl border border-red-200 bg-red-50 p-5 md:p-6">
        <h4 className="text-xl font-bold text-black mb-2">Summary</h4>
        <p className="text-[#4B5563] leading-relaxed">
          <span className="font-bold text-red-600">
            Even a small amount of macadamia nuts can be dangerous for pets.
          </span>{" "}
          Always keep them out of reach, and seek veterinary care immediately if ingestion occurs.{" "}
          Early treatment is essential for a safe recovery.
        </p>
      </div>
    </div>
  ),
},

  "fried-foods": {
  title: "Fried Foods",
  hero: "/food-fried.jpg",
  summary:
    "Fried foods can be harmful to pets due to their high fat, calorie, and sodium content. Even small amounts can cause digestive problems or serious health risks.",
  rich: (
    <div className="space-y-8 text-black">
      <p className="leading-relaxed">
        The level of risk depends on the ingredients used, but fried foods like <span className="font-semibold">fried shrimp or fish cakes</span> can be particularly harmful and should be avoided.
        Additionally, the <span className="font-semibold">batter and coating</span> used to make fried foods can also negatively impact your pet’s health.
      </p>

      {/* Why Fried Foods Are Harmful */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Why Fried Foods Are Harmful</h3>
        <ul className="list-disc pl-6 space-y-3 leading-relaxed">
          <li>
            <span className="font-semibold">High Fat and Calories:</span> Fried foods are cooked in oil, making them extremely high in fat and calories. Pets that regularly eat high-calorie foods are at increased risk of obesity and other related health problems.
          </li>
          <li>
            <span className="font-semibold">Digestive Issues:</span> Fried foods are difficult for pets to digest. Because dogs and cats have more sensitive digestive systems than humans, they are more likely to suffer from indigestion, vomiting, or diarrhea after eating them.
          </li>
          <li>
            <span className="font-semibold">Nutritional Deficiency:</span> Fried foods lack essential nutrients. Pets require a balanced diet, and nutrient-deficient foods can cause long-term health issues.
          </li>
        </ul>
      </section>

      {/* Diseases Caused by High-Fat Foods */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Diseases Caused by High-Fat Foods</h3>
        <p className="leading-relaxed">
          Consuming high-fat foods can lead to <span className="font-semibold">pancreatitis</span>, a potentially serious condition. The pancreas releases digestive enzymes, but excessive fat intake can cause the pancreas to overproduce these enzymes, triggering inflammation. If inflammation occurs repeatedly, chronic pancreatitis may develop.
        </p>
        <h4 className="text-xl font-semibold mt-4 mb-2">Symptoms of Pancreatitis</h4>
        <ul className="list-disc pl-6 space-y-2 leading-relaxed">
          <li>Loss of appetite: Eating very little or refusing food entirely.</li>
          <li>Vomiting: Persistent or frequent vomiting.</li>
          <li>Diarrhea: Loose or watery stools.</li>
          <li>Abdominal pain: Swelling or discomfort in the stomach.</li>
          <li>Dehydration: Signs of dehydration due to fluid loss.</li>
          <li>Shock: Severe cases may lead to shock, which is life-threatening.</li>
        </ul>
      </section>

      {/* What to Do If Your Pet Eats Fried Food */}
      <section>
        <h3 className="text-2xl font-bold mb-3">What to Do If Your Pet Eats Fried Food</h3>
        <ul className="list-disc pl-6 space-y-2 leading-relaxed">
          <li>
            <span className="font-semibold">Check the Amount:</span> If only a small amount was eaten, there’s usually no need to worry. However, if your pet consumed a large amount, visit a veterinarian immediately.
          </li>
          <li>
            <span className="font-semibold">Record the Time:</span> Take note of when the fried food was eaten. If symptoms appear later, this information will help your veterinarian provide better treatment.
          </li>
          <li>
            <span className="font-semibold">Emergency Treatment:</span> If vomiting or diarrhea occurs, digestive enzyme medications may be needed to help the body process the food. Veterinary care is strongly recommended.
          </li>
          <li>
            <span className="font-semibold">Hydration:</span> Fried foods often contain high levels of salt, so make sure your pet drinks enough water to stay hydrated.
          </li>
          <li>
            <span className="font-semibold">Diet Adjustment:</span> After eating fried food, avoid giving your pet any more high-fat or high-calorie foods. Provide a light, balanced diet to help recovery.
          </li>
        </ul>
        <p className="leading-relaxed mt-3">
          ⚠️ Even if your pet seems fine, fried foods often contain sodium, fat, and calories that can be harmful. Whenever possible, <span className="font-bold">avoid feeding fried foods entirely</span>.
        </p>
      </section>

      {/* What Happens If Your Pet Eats Too Many High-Calorie Foods */}
      <section>
        <h3 className="text-2xl font-bold mb-3">What Happens If Your Pet Eats Too Many High-Calorie Foods?</h3>
        <p className="leading-relaxed">
          Overeating high-calorie foods can cause a variety of health problems. Maintaining a balanced diet and appropriate portion sizes is essential.
        </p>
        <ul className="list-disc pl-6 space-y-2 leading-relaxed">
          <li><span className="font-semibold">Weight Gain:</span> Eating too many high-calorie foods can lead to obesity.</li>
          <li><span className="font-semibold">Obesity:</span> Chronic overeating contributes to long-term obesity, which can shorten your pet’s lifespan.</li>
          <li><span className="font-semibold">High Blood Sugar:</span> High-calorie foods can raise blood sugar levels and increase the risk of diabetes.</li>
          <li><span className="font-semibold">High Blood Pressure:</span> Foods high in fat and sodium can contribute to hypertension.</li>
          <li><span className="font-semibold">Digestive Issues:</span> Overeating puts stress on the digestive system, causing indigestion and discomfort.</li>
        </ul>
      </section>

      {/* Summary */}
      <div className="mt-8 rounded-xl border border-gray-300 bg-gray-50 p-5 md:p-6">
        <h4 className="text-xl font-bold mb-2">Summary</h4>
        <p className="leading-relaxed">
          Fried foods are unhealthy for pets due to their high fat, calorie, and sodium content. Even small amounts can lead to digestive problems, and frequent consumption can cause serious diseases like pancreatitis, obesity, or diabetes. Always monitor your pet closely if they accidentally eat fried food, and consult a veterinarian if any symptoms appear.
        </p>
      </div>
    </div>
  ),
},

  caffeine: {
    title: "Caffeine",
    hero: "/food-caffeine.jpg",
    summary:
    "Caffeine is extremely dangerous for dogs and cats. It stimulates the central nervous system, which can severely affect the heart, respiratory system, and blood circulation. In addition, caffeine can put stress on the kidneys and impair their function.",
    rich: (
    <div className="space-y-8 text-black">
      <p className="leading-relaxed">
        Caffeine stimulates the <span className="font-semibold">central nervous system</span>, which can
        seriously affect the <span className="font-semibold">heart, respiratory system, and blood circulation</span>.
        In severe cases, it may also harm the <span className="font-semibold">kidneys</span>, reducing their function.
        Because of these risks, <span className="font-bold">never give your pet any foods or drinks that contain caffeine</span>.
        If accidental ingestion occurs, <span className="font-semibold">contact a veterinarian immediately</span> for professional treatment.
      </p>

      {/* Symptoms */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Symptoms of Caffeine Poisoning</h3>
        <p className="leading-relaxed">
          While a single accidental sip might not cause major problems, <span className="font-semibold">repeated or high-dose exposure</span>
          can lead to serious health issues, including liver disease. Symptoms can appear within about{" "}
          <span className="font-semibold">4 hours</span> of ingesting as little as{" "}
          <span className="font-semibold">120–150 mg of caffeine per kilogram of body weight</span>. Common signs include:
        </p>
        <ul className="list-disc pl-6 space-y-2 leading-relaxed mt-2">
          <li>Increased heart rate</li>
          <li>Rapid or labored breathing</li>
          <li>Restlessness, anxiety, or hyperactivity</li>
          <li>Muscle tremors, shaking, or seizures</li>
          <li>Digestive issues such as vomiting and diarrhea</li>
          <li>Irregular blood pressure</li>
          <li>Severe neurological symptoms: disorientation, unconsciousness, or coma</li>
        </ul>
      </section>

      {/* Sources */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Foods and Drinks That Contain Caffeine</h3>
        <ul className="list-disc pl-6 space-y-2 leading-relaxed">
          <li>Coffee and espresso-based drinks (e.g., espresso, americano, latte)</li>
          <li>Tea (green tea, black tea, oolong, etc.)</li>
          <li>Cola and other carbonated soft drinks</li>
          <li>Chocolate and cocoa products</li>
          <li>Certain medications</li>
        </ul>
      </section>

      {/* Treatment */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Veterinary Treatment</h3>
        <p className="leading-relaxed">
          If a dog or cat suffers from caffeine poisoning, treatment will depend on the{" "}
          <span className="font-semibold">severity of symptoms</span>, the{" "}
          <span className="font-semibold">amount ingested</span>, and the{" "}
          <span className="font-semibold">type of product consumed</span>.
        </p>
        <ul className="list-disc pl-6 space-y-2 leading-relaxed mt-2">
          <li>
            <span className="font-semibold">Fluid therapy:</span> If dehydration or severe agitation occurs, IV fluids may be administered to stabilize hydration and help the body flush out caffeine.
          </li>
          <li>
            <span className="font-semibold">Medication:</span> If the central nervous system is affected or the pet becomes unconscious, medications may be used to support elimination and prevent further absorption.
          </li>
        </ul>
        <p className="leading-relaxed mt-2">
          Treatment approaches vary for each case, so <span className="font-semibold">veterinary supervision is essential</span>.
        </p>
        <p className="leading-relaxed mt-2">
          <span className="font-bold">Important:</span> The safest option is to <span className="font-bold">never give caffeine-containing drinks or foods to pets</span> under any circumstances.
        </p>
      </section>

      {/* Summary */}
      <div className="mt-8 rounded-xl border border-gray-300 bg-gray-50 p-5 md:p-6">
        <h4 className="text-xl font-bold mb-2">Summary</h4>
        <p className="leading-relaxed">
          Caffeine is a powerful stimulant that can cause life-threatening heart, kidney, and neurological problems in pets, even in small amounts.
          Always store caffeinated products out of reach and seek immediate veterinary care if ingestion occurs.
        </p>
      </div>
    </div>
  ),
},
  chocolate: {
    title: "Chocolate",
    hero: "/food-chocolate.jpg",
    summary:
      "Never give chocolate to your pets. Chocolate contains caffeine and theobromine, both of which are toxic to dogs and cats. These substances can negatively impact their central nervous system and may also harm the heart.",
    rich: (
    <div className="space-y-8 text-black">
      <p className="leading-relaxed">
        Chocolate contains two substances that are toxic to dogs and cats:
        <span className="font-semibold"> caffeine</span> and
        <span className="font-semibold"> theobromine</span>. Both of these chemicals can
        overstimulate the <span className="font-semibold">central nervous system</span> and put
        dangerous stress on the <span className="font-semibold">heart</span>. Because of this, you
        should <span className="font-bold">never feed chocolate to pets</span> under any circumstances.
      </p>

      {/* Caffeine */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Caffeine</h3>
        <p className="leading-relaxed">
          Caffeine stimulates the central nervous system, which can cause
          <span className="font-semibold"> anxiety, restlessness, sleep disturbances</span>, and
          other behavioral issues in pets. It also affects
          <span className="font-semibold"> heart rate and blood pressure</span>, potentially
          increasing the risk of <span className="font-semibold">hypertension, irregular heartbeat,
          and heart disease</span>.
        </p>
      </section>

      {/* Theobromine */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Theobromine</h3>
        <p className="leading-relaxed">
          Theobromine also overstimulates the central nervous system, leading to
          <span className="font-semibold"> anxiety, hyperactivity, and insomnia</span>. It affects
          the heart in similar ways. Cats, in particular, have
          <span className="font-semibold"> very limited ability</span> to break down theobromine, so
          they are at especially high risk of <span className="font-semibold">severe poisoning</span>
          even from small amounts.
        </p>
      </section>

      {/* Symptoms */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Symptoms of Chocolate Poisoning</h3>
        <p className="leading-relaxed">
          Symptoms usually begin <span className="font-semibold">6–12 hours</span> after ingestion and
          can last for up to <span className="font-semibold">72 hours</span>. Common signs include:
        </p>
        <ul className="list-disc pl-6 space-y-2 leading-relaxed mt-2">
          <li>Vomiting</li>
          <li>Diarrhea</li>
          <li>Fever</li>
          <li>Difficulty breathing</li>
          <li>Seizures</li>
          <li>Rapid heartbeat</li>
          <li>Tremors or muscle twitching</li>
        </ul>
      </section>

      {/* What to Do */}
      <section>
        <h3 className="text-2xl font-bold mb-3">What to Do If Your Pet Eats Chocolate</h3>
        <ul className="list-disc pl-6 space-y-2 leading-relaxed">
          <li>Check the type and amount of chocolate consumed.</li>
          <li>
            If this is unknown or difficult to determine, visit a veterinarian immediately for
            evaluation and treatment.
          </li>
        </ul>
        <p className="leading-relaxed mt-2">
          The type of chocolate affects how dangerous it is. <span className="font-semibold">Dark
          chocolate</span> and <span className="font-semibold">cocoa powder</span> are the most
          toxic. For example, a small dog weighing about <span className="font-semibold">3&nbsp;kg
          (6.6&nbsp;lbs)</span> can reach a dangerous level of toxicity by ingesting just
          <span className="font-semibold"> 6 teaspoons of dark chocolate</span>.
        </p>
      </section>

      {/* Treatment */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Treatment at the Animal Hospital</h3>
        <p className="leading-relaxed">
          Depending on the situation and severity, veterinarians may take the following steps:
        </p>
        <ul className="list-disc pl-6 space-y-2 leading-relaxed mt-2">
          <li>
            <span className="font-semibold">Inducing vomiting:</span> If ingestion was recent,
            vomiting may be induced to remove the chocolate from the stomach.
          </li>
          <li>
            <span className="font-semibold">Fluid therapy:</span> IV fluids may be administered to
            prevent dehydration and support kidney function.
          </li>
          <li>
            <span className="font-semibold">Oxygen therapy:</span> If breathing problems occur,
            oxygen support may be provided to improve respiration.
          </li>
          <li>
            <span className="font-semibold">Medications:</span> If the heart rate becomes irregular,
            medications can be given to help stabilize cardiac function.
          </li>
        </ul>
        <p className="leading-relaxed mt-2">
          Treatment may vary depending on your pet’s condition, the amount and type of chocolate
          consumed, and how quickly care is provided. Additional interventions may be necessary based
          on the veterinarian’s judgment.
        </p>
      </section>

      {/* Summary */}
      <div className="mt-8 rounded-xl border border-gray-300 bg-gray-50 p-5 md:p-6">
        <h4 className="text-xl font-bold mb-2">Summary</h4>
        <p className="leading-relaxed">
          Even small amounts of chocolate can cause serious poisoning in dogs and cats. Because of
          its toxic ingredients — caffeine and theobromine — chocolate should never be given to pets.
          If ingestion occurs, immediate veterinary care is essential for the best chance of recovery.
        </p>
      </div>
    </div>
  ),
},

  grapes: {
    title: "Grapes",
    hero: "/food-grapes.jpg",
    summary:
      "Dogs and cats must never eat grapes. Grapes can cause severe poisoning and are extremely harmful to their health.",
    rich: (
    <div className="space-y-8 text-black">
      <p className="leading-relaxed">
        Grapes contain toxic substances that can <span className="font-semibold">damage kidney function</span> in dogs and cats, and in severe cases, they can even trigger <span className="font-semibold">acute kidney failure</span>.
        Although the exact toxic compound is still unknown, some people mistakenly believe small amounts are safe. To protect your pet’s health, it is safest to <span className="font-bold">avoid feeding grapes entirely</span>.
        If your pet accidentally eats grapes, closely observe them for any symptoms and <span className="font-semibold">consult a veterinarian immediately</span> for professional treatment.
      </p>

      {/* Acute Kidney Failure */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Acute Kidney Failure</h3>
        <p className="leading-relaxed">
          Acute kidney failure is a sudden and severe decline in kidney function. It may occur when kidney tissue is exposed to highly toxic substances or is damaged by toxic reactions inside the kidneys.
        </p>
        <p className="leading-relaxed mt-2">Common symptoms include:</p>
        <ul className="list-disc pl-6 space-y-2 leading-relaxed">
          <li>Vomiting</li>
          <li>Diarrhea</li>
          <li>Loss of appetite</li>
          <li>Reduced urine output</li>
          <li>Nausea</li>
          <li>Pale or whitish gums</li>
          <li>Dehydration</li>
          <li>Fever</li>
          <li>Tremors</li>
        </ul>
        <p className="leading-relaxed mt-2">
          If left untreated, acute kidney failure can be <span className="font-semibold">fatal</span>. If your pet shows any of these symptoms, seek veterinary care immediately.
        </p>
      </section>

      {/* Symptoms After Eating Grapes */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Symptoms After Eating Grapes</h3>
        <p className="leading-relaxed">
          When a dog or cat eats grapes, symptoms can vary depending on the amount consumed, body weight, age, and overall health. Common symptoms include:
        </p>
        <ul className="list-disc pl-6 space-y-2 leading-relaxed mt-2">
          <li>Vomiting</li>
          <li>Diarrhea</li>
          <li>Loss of appetite</li>
          <li>Reduced urine production</li>
        </ul>
        <p className="leading-relaxed mt-2">
          If the condition worsens, complications such as <span className="font-semibold">kidney failure</span> may occur.
        </p>
      </section>

      {/* What to Do */}
      <section>
        <h3 className="text-2xl font-bold mb-3">What to Do If Your Pet Eats Grapes</h3>
        <p className="leading-relaxed">
          If you suspect your pet has eaten grapes, <span className="font-semibold">contact a veterinarian as soon as possible</span> for proper guidance.
          If your pet is already showing symptoms, the following steps may be taken:
        </p>
        <ul className="list-disc pl-6 space-y-2 leading-relaxed mt-2">
          <li>
            <span className="font-semibold">Induce vomiting:</span> If vomiting occurs naturally, it can help remove toxic substances from the body.
          </li>
          <li>
            <span className="font-semibold">Monitor urine color:</span> If a large amount of grapes was eaten, urine may become darker — observe closely.
          </li>
          <li>
            <span className="font-semibold">Watch their condition carefully:</span> Continue monitoring and seek veterinary help immediately if symptoms worsen.
          </li>
        </ul>
      </section>

      {/* Veterinary Treatment */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Veterinary Treatment</h3>
        <p className="leading-relaxed">
          At the clinic, treatment will vary depending on the <span className="font-semibold">severity of poisoning</span> and the <span className="font-semibold">amount consumed</span>. Typical treatments include:
        </p>
        <ul className="list-disc pl-6 space-y-2 leading-relaxed mt-2">
          <li>
            <span className="font-semibold">Inducing vomiting:</span> If you arrive before symptoms appear, the veterinarian may induce vomiting to expel toxic substances.
          </li>
          <li>
            <span className="font-semibold">Detoxification and supportive care:</span> Removing toxins from the body and restoring kidney function.
          </li>
          <li>
            <span className="font-semibold">Fluid therapy:</span> If your pet shows signs of dehydration or severe illness, IV fluids help maintain hydration and support kidney recovery.
          </li>
          <li>
            <span className="font-semibold">Hospitalization:</span> In severe cases, intensive treatment and monitoring may be recommended until your pet’s condition stabilizes.
          </li>
        </ul>
        <p className="leading-relaxed mt-2">
          The specific treatment approach will depend on the amount ingested, the pet’s health condition, and the veterinarian’s judgment. In some cases, additional treatments may be necessary.
        </p>
      </section>

      {/* Summary */}
      <div className="mt-8 rounded-xl border border-gray-300 bg-gray-50 p-5 md:p-6">
        <h4 className="text-xl font-bold mb-2">Summary</h4>
        <p className="leading-relaxed">
          Grapes are highly toxic to both dogs and cats and can cause serious kidney damage or even acute kidney failure — sometimes even in small amounts. Because the specific toxic substance remains unknown, the safest approach is to <span className="font-semibold">avoid feeding grapes under any circumstances</span>. If your pet accidentally consumes grapes, monitor them closely for symptoms like vomiting, diarrhea, or loss of appetite, and <span className="font-semibold">contact a veterinarian immediately</span>. Early medical attention is crucial and can significantly improve the chances of a full recovery.
        </p>
      </div>
    </div>
  ),
},

  alcohol: {
    title: "Alcohol",
    hero: "/food-alcohol.jpg",
    summary:
    "Alcohol is extremely dangerous for both dogs and cats. Unlike humans, pets have a very limited ability to break down alcohol, so even small amounts can severely affect the central nervous system, liver, and heart.",
    rich: (
    <div className="space-y-8 text-black">
      <p className="leading-relaxed">
        Alcohol can also <span className="font-semibold">raise blood pressure</span> in pets, potentially causing
        hypertension, respiratory distress, brain damage, loss of consciousness, and even heart failure.
        For a small dog weighing around <span className="font-semibold">3 kg (6.6 lbs)</span>, drinking just
        <span className="font-semibold"> one cup of wine</span> is enough to cause severe alcohol poisoning.
        Even small quantities can be toxic, so it’s essential to keep alcohol away from pets at all times.
      </p>

      {/* Symptoms */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Symptoms After Alcohol Consumption</h3>
        <p className="leading-relaxed">
          Alcohol is not easily metabolized by dogs and cats and can remain in the body for a long time.
          Signs of poisoning can appear within about <span className="font-semibold">30 minutes</span> of ingestion.
          Once absorbed through the stomach and intestines, it quickly enters the bloodstream and affects the
          brain and central nervous system. Watch for the following symptoms and seek veterinary care immediately:
        </p>
        <ul className="list-disc pl-6 space-y-2 leading-relaxed mt-2">
          <li>Staggering or unsteady movement</li>
          <li>Vomiting and diarrhea</li>
          <li>Anxiety, restlessness, or hyperactivity</li>
          <li>Severe tremors and irregular heartbeat</li>
          <li>Seizures or convulsions</li>
          <li>Fever and breathing difficulties</li>
        </ul>
      </section>

      {/* What to Do */}
      <section>
        <h3 className="text-2xl font-bold mb-3">What to Do If Your Pet Consumes Alcohol</h3>
        <ul className="list-disc pl-6 space-y-2 leading-relaxed">
          <li>
            <span className="font-semibold">Contact a veterinarian immediately.</span> Describe what was consumed,
            how much, and when. Keep the container/label if possible.
          </li>
          <li>
            <span className="font-semibold">Do not induce vomiting unless a veterinarian instructs you to.</span>
            Inducing vomiting at home can be dangerous (risk of aspiration) and should only be done under
            professional guidance.
          </li>
          <li>
            <span className="font-semibold">Monitor closely.</span> Note changes in behavior, breathing, and
            coordination while you arrange veterinary care.
          </li>
        </ul>
      </section>

      {/* Veterinary Treatment */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Veterinary Treatment</h3>
        <p className="leading-relaxed">
          At the clinic, the treatment plan will depend on the <span className="font-semibold">severity of symptoms</span>
          and the <span className="font-semibold">amount consumed</span>. Common treatments include:
        </p>
        <ul className="list-disc pl-6 space-y-2 leading-relaxed mt-2">
          <li>
            <span className="font-semibold">Induced vomiting (when appropriate):</span> Performed by the veterinarian
            to help expel alcohol from the stomach if timing and circumstances are suitable.
          </li>
          <li>
            <span className="font-semibold">Fluid therapy:</span> IV fluids to restore hydration and support organ function.
          </li>
          <li>
            <span className="font-semibold">Oxygen therapy:</span> Used if breathing problems or low oxygen levels are detected.
          </li>
          <li>
            <span className="font-semibold">Medication:</span> If alcohol has significantly affected the central nervous system
            or caused irregular heartbeat or unconsciousness, medications may be used to support elimination and prevent further absorption.
          </li>
        </ul>
        <p className="leading-relaxed mt-2">
          The approach varies with each case; in some situations, <span className="font-semibold">additional or intensive care</span> may be necessary.
        </p>
      </section>

      {/* Sources of Alcohol */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Foods and Products That Contain Alcohol</h3>
        <p className="leading-relaxed">Be aware that alcohol can be present in everyday items:</p>
        <ul className="list-disc pl-6 space-y-2 leading-relaxed mt-2">
          <li>Chocolate, bread, or raw dough that has fermented and produced alcohol</li>
          <li>Disinfectants or sanitizing wipes that contain alcohol</li>
        </ul>
        <p className="leading-relaxed mt-2">
          These should never come into contact with your pet’s mouth, as even small amounts can cause serious harm.
        </p>
      </section>

      {/* Summary */}
      <div className="mt-8 rounded-xl border border-gray-300 bg-gray-50 p-5 md:p-6">
        <h4 className="text-xl font-bold mb-2">Summary</h4>
        <p className="leading-relaxed">
          Alcohol is highly toxic to dogs and cats, even in small amounts. Pets cannot metabolize alcohol effectively,
          and ingestion can result in severe neurological, cardiovascular, and respiratory symptoms — and in serious
          cases, it can be fatal. If your pet ingests alcohol, do not wait for symptoms to appear. Contact a veterinarian
          immediately for professional treatment. Prevention is key: always store alcohol and alcohol-containing products
          out of reach of your pets.
        </p>
      </div>
    </div>
  ),
},


  garlic: {
    title: "Garlic",
    hero: "/food-garlic.jpg",
    summary:
    "Garlic can be toxic to dogs and cats.This is because garlic contains organic thiosulfate compounds, which can damage red blood cells and lead to a condition called hemolytic anemia. Therefore, feeding garlic to pets is strongly not recommended.",
    rich: (
    <div className="space-y-8 text-black">
      {/* Organic thiosulfates */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Organic Thiosulfate Compounds</h3>
        <p className="leading-relaxed">
          Organic thiosulfate compounds — such as <span className="font-semibold">allicin</span> and{" "}
          <span className="font-semibold">brucillin</span> — give garlic its distinctive flavor and aroma.
        </p>
        <p className="leading-relaxed mt-2">
          However, when consumed in excessive amounts, these compounds can irritate the digestive system and,
          in some pets, may trigger adverse effects such as <span className="font-semibold">anemia</span>.
        </p>
      </section>

      {/* Red blood cells */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Red Blood Cells</h3>
        <p className="leading-relaxed">
          Red blood cells are the most abundant cells in the bloodstream. They transport oxygen and carbon
          dioxide throughout the body. They contain a protein called <span className="font-semibold">hemoglobin</span>,
          which binds to oxygen and plays a vital role in delivering it to tissues.
        </p>
        <p className="leading-relaxed mt-2">
          Red blood cells are also crucial for maintaining normal physiological functions, such as body
          temperature regulation and metabolic responses.
        </p>
      </section>

      {/* Hemolytic anemia */}
      <section>
        <h3 className="text-2xl font-bold mb-3">What Is Hemolytic Anemia?</h3>
        <p className="leading-relaxed">
          Hemolytic anemia occurs when red blood cells are destroyed or when the body’s ability to produce
          new red blood cells is impaired, leading to a reduced number of red blood cells.
        </p>
        <p className="leading-relaxed mt-2">
          When this happens, the blood’s ability to transport oxygen and carbon dioxide is compromised,
          resulting in a range of symptoms. These symptoms may include pale or yellow gums and skin, vomiting,
          diarrhea, lethargy, loss of appetite, breathing difficulties, and anemia. If you notice any of
          these signs, <span className="font-semibold">seek veterinary care immediately</span>.
        </p>
      </section>

      {/* Symptoms After Eating Garlic */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Symptoms After Eating Garlic</h3>
        <p className="leading-relaxed">
          In some cases, symptoms may not appear immediately but can develop over time. Watch for the
          following signs:
        </p>
        <ul className="list-disc pl-6 space-y-2 leading-relaxed mt-2">
          <li>Vomiting</li>
          <li>Diarrhea</li>
          <li>Lethargy</li>
          <li>Loss of appetite</li>
          <li>Breathing difficulties</li>
          <li>Dizziness caused by anemia</li>
          <li>Abnormal urine color (red, brown, or orange)</li>
        </ul>
        <p className="leading-relaxed mt-2">
          If you suspect your dog or cat has eaten garlic, <span className="font-semibold">contact a
          veterinarian right away</span>.
        </p>
      </section>

      {/* What to Do */}
      <section>
        <h3 className="text-2xl font-bold mb-3">What to Do If Your Pet Has Eaten Garlic</h3>
        <ul className="list-disc pl-6 space-y-2 leading-relaxed">
          <li>
            <span className="font-semibold">Consult a veterinarian immediately:</span> Seek professional
            advice and treatment as soon as possible.
          </li>
          <li>
            <span className="font-semibold">Record the amount consumed:</span> Note how much garlic your
            pet may have eaten.
          </li>
          <li>
            <span className="font-semibold">Encourage water intake:</span> Give your pet plenty of water to
            help flush out the toxins from their system.
          </li>
          <li>
            <span className="font-semibold">Pursue active treatment:</span> Depending on symptoms, the
            veterinarian may administer treatments such as fluid therapy, medication, or blood transfusions.
          </li>
        </ul>
      </section>

      {/* Veterinary Treatment */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Veterinary Treatment</h3>
        <p className="leading-relaxed">
          Treatment will vary depending on the amount of garlic consumed, the pet’s size, and their
          condition. Common veterinary procedures include:
        </p>
        <ul className="list-disc pl-6 space-y-2 leading-relaxed mt-2">
          <li>
            <span className="font-semibold">Blood tests:</span> To check red blood cell levels and detect anemia.
          </li>
          <li>
            <span className="font-semibold">Fluid therapy:</span> To prevent dehydration and help remove toxins
            from the blood.
          </li>
          <li>
            <span className="font-semibold">Medication:</span> To support red blood cell production and treat symptoms.
          </li>
          <li>
            <span className="font-semibold">Blood transfusion:</span> In severe cases, a transfusion may be
            necessary to replenish red blood cells.
          </li>
        </ul>
        <p className="leading-relaxed mt-2">
          Because treatment varies case by case, it’s essential to consult a veterinarian immediately if
          garlic ingestion is suspected.
        </p>
      </section>

      {/* Summary */}
      <div className="mt-8 rounded-xl border border-gray-300 bg-gray-50 p-5 md:p-6">
        <h4 className="text-xl font-bold mb-2">Summary</h4>
        <p className="leading-relaxed">
          Garlic is toxic to dogs and cats because it damages red blood cells and can cause
          <span className="font-semibold"> hemolytic anemia</span>, which affects the body’s ability to
          transport oxygen. Symptoms may develop gradually and can include vomiting, lethargy, weakness,
          and abnormal urine color. If your pet consumes garlic — even in small amounts — seek veterinary
          help immediately, record the amount eaten, and provide plenty of water. Early medical intervention
          is key to preventing serious complications.
        </p>
      </div>
    </div>
  ),
},


  onions: {
    title: "Onions",
    hero: "/food-onions.jpg",
    summary:
    "Dogs and cats must never eat onions. Onions come in various types — yellow, red, white, etc. — but all types are toxic to pets. Onions contain a toxic compound called N-propyl disulfide, which can damage red blood cells and cause anemia. This condition is known as hemolytic anemia.",
    rich: (
    <div className="space-y-8 text-black">
      <p className="leading-relaxed">
        Because of this risk, it’s essential to <span className="font-bold">never feed onions to your pets</span> and instead
        offer them safe, pet-friendly treats.
      </p>

      {/* N-propyl Disulfide */}
      <section>
        <h3 className="text-2xl font-bold mb-3">N-propyl Disulfide</h3>
        <p className="leading-relaxed">
          N-propyl disulfide is a toxic compound that <span className="font-semibold">destroys red blood cells</span> in dogs and cats,
          leading to anemia. Red blood cells transport oxygen and carbon dioxide throughout the body. When they are damaged,
          the blood’s ability to carry oxygen is greatly reduced, which can have serious consequences for your pet’s health.
        </p>
      </section>

      {/* Foods Containing N-propyl Disulfide */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Foods Containing N-propyl Disulfide</h3>
        <p className="leading-relaxed">
          This toxic compound is primarily found in <span className="font-semibold">onions</span>, but also in related plants such as
          <span className="font-semibold"> leeks, chives, and garlic</span>. All of these should be kept away from pets.
        </p>
      </section>

      {/* What Is Hemolytic Anemia? */}
      <section>
        <h3 className="text-2xl font-bold mb-3">What Is Hemolytic Anemia?</h3>
        <p className="leading-relaxed">
          Hemolytic anemia is a condition in which red blood cells are either destroyed too quickly or the body’s ability to
          produce new red blood cells is impaired, leading to a decrease in red blood cell count.
        </p>
        <p className="leading-relaxed mt-2">
          When this occurs, the blood’s ability to carry oxygen and carbon dioxide is compromised, which can cause a range of
          symptoms, including:
        </p>
        <ul className="list-disc pl-6 space-y-2 leading-relaxed mt-2">
          <li>Pale or yellow gums and skin</li>
          <li>Vomiting and diarrhea</li>
          <li>Lethargy or weakness</li>
          <li>Loss of appetite</li>
          <li>Breathing difficulties</li>
          <li>Anemia</li>
        </ul>
        <p className="leading-relaxed mt-2">
          If you observe any of these signs, <span className="font-semibold">seek veterinary care immediately</span>.
        </p>
      </section>

      {/* Symptoms After Onion Consumption */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Symptoms After Onion Consumption</h3>
        <p className="leading-relaxed">
          Symptoms may not appear immediately but can develop over time. Watch for the following signs if you suspect your pet has
          eaten onions:
        </p>
        <ul className="list-disc pl-6 space-y-2 leading-relaxed mt-2">
          <li>Vomiting</li>
          <li>Diarrhea</li>
          <li>Loss of appetite</li>
          <li>Breathing difficulties</li>
          <li>Lethargy</li>
          <li>Hemolytic anemia</li>
        </ul>
        <p className="leading-relaxed mt-2">
          If you suspect your dog or cat has consumed onions, <span className="font-semibold">contact a veterinarian as soon as possible</span>.
        </p>
      </section>

      {/* What to Do */}
      <section>
        <h3 className="text-2xl font-bold mb-3">What to Do If Your Pet Has Eaten Onions</h3>
        <ul className="list-disc pl-6 space-y-2 leading-relaxed">
          <li>
            <span className="font-semibold">Consult a veterinarian immediately:</span> Seek professional help without delay.
          </li>
          <li>
            <span className="font-semibold">Record the amount consumed:</span> Note how much onion your pet may have eaten.
          </li>
          <li>
            <span className="font-semibold">Encourage water intake:</span> Provide plenty of water to help flush out the toxins.
          </li>
          <li>
            <span className="font-semibold">Pursue active treatment:</span> Depending on symptoms, the veterinarian may administer
            treatments such as fluid therapy, medication, or blood transfusions.
          </li>
        </ul>
      </section>

      {/* Veterinary Treatment */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Veterinary Treatment</h3>
        <p className="leading-relaxed">
          The type of treatment will depend on your pet’s condition, size, and how much onion was consumed. Common veterinary
          treatments include:
        </p>
        <ul className="list-disc pl-6 space-y-2 leading-relaxed mt-2">
          <li>
            <span className="font-semibold">Blood test:</span> To assess red blood cell levels and check for anemia.
          </li>
          <li>
            <span className="font-semibold">Fluid therapy:</span> To prevent dehydration and help remove toxins from the blood.
          </li>
          <li>
            <span className="font-semibold">Medication:</span> To stimulate red blood cell production and manage symptoms.
          </li>
          <li>
            <span className="font-semibold">Blood transfusion:</span> In severe cases, transfusions may be necessary to restore red blood cell levels.
          </li>
        </ul>
        <p className="leading-relaxed mt-2">
          Because treatment can vary significantly, <span className="font-semibold">immediate consultation with a veterinarian</span> is essential if onion ingestion is suspected.
        </p>
      </section>

      {/* Summary */}
      <div className="mt-8 rounded-xl border border-gray-300 bg-gray-50 p-5 md:p-6">
        <h4 className="text-xl font-bold mb-2">Summary</h4>
        <p className="leading-relaxed">
          Onions are highly toxic to dogs and cats due to a compound called <span className="font-semibold">N-propyl disulfide</span>,
          which damages red blood cells and causes hemolytic anemia. Symptoms may not appear right away but can include vomiting,
          weakness, breathing problems, and anemia. If your pet consumes onions, seek veterinary care immediately, record the amount
          eaten, and encourage water intake. Early treatment can save your pet’s life.
        </p>
      </div>
    </div>
  ),
},


  watermelon: {
    title: "Watermelon",
    hero: "/food-watermelon.jpg",
    summary:
    "Dogs and cats can eat watermelon in moderation. Watermelon contains a high water content and is rich in dietary fiber, which can aid digestion. It also provides vitamin C and beta-carotene, which support a healthy immune system.", 
    rich: (
    <div className="space-y-8 text-black">
      {/* Vitamin C */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Vitamin C</h3>
        <p className="leading-relaxed">
          Vitamin C is an essential nutrient for building a strong immune system. Dogs and cats cannot
          produce enough vitamin C naturally, so they must obtain it from external sources.
        </p>
        <p className="leading-relaxed mt-2">
          Vitamin C acts as an <span className="font-semibold">antioxidant</span>, helping protect cells from damage caused
          by free radicals. It also supports the growth and maintenance of bones and joints and is involved in
          <span className="font-semibold"> collagen</span> production.
        </p>
      </section>

      {/* Beta-Carotene */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Beta-Carotene</h3>
        <p className="leading-relaxed">
          Beta-carotene helps maintain eye health in dogs and cats. Inside the body, beta-carotene is
          converted into <span className="font-semibold">vitamin A</span>, which is essential for healthy vision.
        </p>
        <p className="leading-relaxed mt-2">
          It also functions as an antioxidant, reducing free radicals and strengthening the immune system.
          However, excessive consumption of watermelon may lead to digestive issues, so it’s best to offer it
          in <span className="font-semibold">moderate amounts</span>.
        </p>
      </section>

      {/* Precautions */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Precautions When Feeding Watermelon</h3>

        <h4 className="text-xl font-semibold mt-2 mb-1">Seeds and Rind</h4>
        <p className="leading-relaxed">
          Watermelon seeds can cause digestive issues and may even lead to intestinal blockages if swallowed in
          large amounts. The rind is also difficult to digest and may irritate the gastrointestinal tract. Always
          remove the <span className="font-semibold">seeds and rind</span> before offering watermelon, and feed only in small portions.
        </p>

        <h4 className="text-xl font-semibold mt-4 mb-1">Diabetes</h4>
        <p className="leading-relaxed">
          Watermelon contains natural sugars, so it should <span className="font-semibold">not</span> be given to dogs or cats with
          diabetes. Avoid feeding watermelon to pets with high blood sugar or related conditions.
        </p>

        <h4 className="text-xl font-semibold mt-4 mb-1">Serving Size</h4>
        <p className="leading-relaxed">
          Even if your pet enjoys watermelon, too much can cause digestive problems. A sensible portion is about{" "}
          <span className="font-semibold">1–2 small cubes (roughly two thumb-sized pieces)</span> once a day as an occasional treat.
        </p>
      </section>

      {/* Summary */}
      <div className="mt-8 rounded-xl border border-gray-300 bg-gray-50 p-5 md:p-6">
        <h4 className="text-xl font-bold mb-2">Summary</h4>
        <p className="leading-relaxed">
          Watermelon can be a healthy and refreshing treat for dogs and cats when served in moderation. It’s rich in water,
          fiber, vitamin C, and beta-carotene, which support digestion, immune function, and eye health. However, always
          remove the seeds and rind, avoid giving it to pets with diabetes, and limit the portion size to prevent digestive upset.
        </p>
      </div>
    </div>
  ),
},


  potatoes: {
    title: "Potatoes",
    hero: "/food-potatoes.jpg",
    summary:
    "Dogs and cats can eat potatoes. Potatoes are a good source of carbohydrates for pets and also contain essential nutrients such as vitamin C and potassium.", 
    rich: (
    <div className="space-y-8 text-black">
      <p className="leading-relaxed">
        However, potatoes are high in natural sugars, so feeding them in large amounts can raise your pet’s
        blood sugar levels. It’s best to serve potatoes in <span className="font-semibold">small portions</span> and
        <span className="font-semibold"> boiled or baked</span>, as these are easier for pets to digest.
      </p>

      {/* Vitamin C */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Vitamin C</h3>
        <p className="leading-relaxed">
          Vitamin C helps strengthen the immune system, acts as an <span className="font-semibold">antioxidant</span> by reducing
          free radicals in the body, and plays an important role in <span className="font-semibold">collagen</span> production.
        </p>
      </section>

      {/* Potassium */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Potassium</h3>
        <p className="leading-relaxed">
          Potassium supports healthy <span className="font-semibold">heart function</span> in dogs and cats and is essential for
          <span className="font-semibold"> muscle function</span> and maintaining proper <span className="font-semibold">electrolyte balance</span>.
        </p>
      </section>

      {/* Raw potatoes */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Can Dogs and Cats Eat Raw Potatoes?</h3>
        <p className="leading-relaxed">
          <span className="font-semibold">No</span> — feeding raw potatoes to dogs or cats is not safe. Raw potatoes contain compounds
          that are difficult to digest and can cause stomach upset; ingesting large amounts may even lead to poisoning.
          Always <span className="font-semibold">boil or bake</span> potatoes before feeding them to pets, and serve in small amounts.
        </p>
      </section>

      {/* Potato skins */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Can They Eat Potato Skins?</h3>
        <p className="leading-relaxed">
          While dogs and cats can eat potato skins, it’s generally <span className="font-semibold">better to avoid them</span>.
          Skins may contain higher levels of <span className="font-semibold">solanine</span>, a naturally occurring toxin, so they
          should only be given in very small amounts and prepared properly.
        </p>
        <p className="leading-relaxed mt-2">
          Although the skins contain some nutrients, they can be difficult to digest. The <span className="font-semibold">green parts</span>
          of the skin contain the highest levels of solanine, so those should always be removed before feeding.
        </p>
      </section>

      {/* Serving size */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Recommended Serving Size</h3>
        <p className="leading-relaxed">
          It’s recommended that potatoes make up <span className="font-semibold">no more than 10%</span> of your pet’s daily calorie intake.
          If your dog or cat is eating potatoes for the first time, start with a small amount and monitor for any digestive issues or
          skin reactions.
        </p>
      </section>

      {/* Precautions */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Feeding Precautions</h3>
        <ul className="list-disc pl-6 space-y-2 leading-relaxed">
          <li>
            <span className="font-semibold">Remove green parts:</span> Green areas of potato skin contain high levels of solanine, so always peel them off.
          </li>
          <li>
            <span className="font-semibold">Avoid overfeeding:</span> Because potatoes are high in sugar, too much can raise blood sugar levels.
          </li>
          <li>
            <span className="font-semibold">Feed in small portions:</span> Serve small amounts, especially when introducing potatoes for the first time.
          </li>
          <li>
            <span className="font-semibold">Cooking method:</span> Boil or bake potatoes and serve them in small pieces for easier digestion.
          </li>
        </ul>
      </section>

      {/* Summary */}
      <div className="mt-8 rounded-xl border border-gray-300 bg-gray-50 p-5 md:p-6">
        <h4 className="text-xl font-bold mb-2">Summary</h4>
        <p className="leading-relaxed">
          Potatoes can be a nutritious and healthy treat for dogs and cats when prepared properly. They provide carbohydrates,
          vitamin C, and potassium, which support energy, immunity, and heart health. However, never feed raw potatoes,
          remove the skins — especially green parts — and limit portion sizes to avoid digestive issues and blood sugar spikes.
        </p>
      </div>
    </div>
  ),
},


  "sweet-potatoes": {
    title: "Sweet Potatoes",
    hero: "/food-sweet-potatoes.jpg",
    summary: "Dogs and cats can eat sweet potatoes. They are rich in beta-carotene, vitamin C, and calcium, which support overall health. Low glycemic index + fiber help digestion and blood sugar control.",
    rich: (
    <div className="space-y-8 text-black">
      <p className="leading-relaxed">
        Sweet potatoes are rich in <span className="font-semibold">beta-carotene</span>,{" "}
        <span className="font-semibold">vitamin C</span>, <span className="font-semibold">potassium</span>, and fiber.
        They support overall health, aid digestion, and have a low glycemic index (GI), which helps with blood sugar control.
      </p>

      {/* Beta-Carotene */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Beta-Carotene</h3>
        <p className="leading-relaxed">
          Beta-carotene helps maintain <span className="font-semibold">eye health</span> in dogs and cats. It also
          supports the immune system and helps prevent cell damage, contributing to healthy skin, hair, nails, and muscle formation.
        </p>
      </section>

      {/* Vitamin C */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Vitamin C</h3>
        <p className="leading-relaxed">
          Vitamin C strengthens the <span className="font-semibold">immune system</span> and functions as an{" "}
          <span className="font-semibold">antioxidant</span> that protects cells from damage. It supports healthy skin,
          bones, muscles, and blood vessels, and aids <span className="font-semibold">iron absorption</span>, helping prevent anemia.
        </p>
      </section>

      {/* Potassium */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Potassium</h3>
        <p className="leading-relaxed">
          Potassium supports healthy <span className="font-semibold">blood pressure regulation</span> and{" "}
          <span className="font-semibold">muscle function</span> in dogs and cats.
        </p>
      </section>

      {/* Low GI */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Low GI Foods</h3>
        <p className="leading-relaxed">
          The Glycemic Index (GI) measures how quickly carbohydrates are digested and converted into glucose.
          <span className="font-semibold"> Low-GI foods</span> are digested slowly, leading to a gradual release of glucose and helping prevent sudden spikes in blood sugar.
          For dogs and cats, this makes sweet potatoes beneficial for <span className="font-semibold">blood sugar regulation</span>.
        </p>
        <p className="leading-relaxed mt-2">
          Because low-GI foods digest more slowly, they can help pets feel full longer and may support{" "}
          <span className="font-semibold">weight management</span>.
        </p>
      </section>

      {/* Feeding Guidelines */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Feeding Guidelines</h3>
        <ul className="list-disc pl-6 space-y-2 leading-relaxed">
          <li>Wash sweet potatoes thoroughly.</li>
          <li>Peel if necessary.</li>
          <li>Cut into appropriate sizes and <span className="font-semibold">cook (boil or steam)</span> before feeding.</li>
          <li>Avoid overfeeding; provide in <span className="font-semibold">moderate amounts</span>.</li>
          <li>
            Depending on your pet’s digestion, small amounts of raw sweet potato may be tolerated, but if any digestive
            issues appear, feed <span className="font-semibold">only cooked</span>.
          </li>
        </ul>
      </section>

      {/* Precautions */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Precautions When Feeding Sweet Potatoes</h3>
        <ul className="list-disc pl-6 space-y-2 leading-relaxed">
          <li>
            High in calories and sugar — <span className="font-semibold">avoid for pets with diabetes or obesity</span>.
          </li>
          <li>
            Contains <span className="font-semibold">oxalic acid</span>; in large amounts this can contribute to kidney
            stones — keep portions <span className="font-semibold">moderate</span>.
          </li>
          <li>
            Rich in potassium — limit or avoid for pets with <span className="font-semibold">kidney or heart conditions</span>.
          </li>
          <li>
            Pets with weak digestion may experience diarrhea — if so, discontinue or feed only small, cooked portions.
          </li>
        </ul>
      </section>

      {/* Summary */}
      <div className="mt-8 rounded-xl border border-gray-300 bg-gray-50 p-5 md:p-6">
        <h4 className="text-xl font-bold mb-2">Summary</h4>
        <p className="leading-relaxed">
          Sweet potatoes can be a healthy, nutritious treat for dogs and cats when prepared properly. They offer fiber,
          beta-carotene, vitamin C, and potassium to support digestion, immunity, and eye health. Serve cooked, remove skins if needed,
          and keep portions moderate—especially for pets with diabetes, obesity, kidney, or heart conditions.
        </p>
      </div>
    </div>
  ),
},


  eggs: {
    title: "Eggs",
    hero: "/food-eggs.jpg",
    summary: "Eggs are a nutritious food for both dogs and cats. They are rich in protein, fat, vitamin A, vitamin D, calcium, iron, and many other essential nutrients. ",
    rich: (
    <div className="space-y-8 text-black">
      <p className="leading-relaxed">
        Protein, in particular, is one of the most important nutrients that dogs and cats must regularly
        consume for their overall health.
      </p>

      {/* Protein */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Protein</h3>
        <p className="leading-relaxed">
          Protein is essential for the healthy growth and development of dogs and cats. It helps build
          bones, muscles, skin, and fur, and also plays a key role in strengthening the immune system,
          tissue repair, and metabolic processes.
        </p>
      </section>

      {/* Fat */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Fat</h3>
        <p className="leading-relaxed">
          Fat is an important source of energy for dogs and cats. When consumed in appropriate amounts,
          it also helps regulate blood pressure and stabilize blood sugar levels. In addition, fat provides
          essential fatty acids that help maintain healthy skin and coat, and it contributes to a stronger
          immune system.
        </p>
      </section>

      {/* Vitamin A */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Vitamin A</h3>
        <p className="leading-relaxed">
          Vitamin A plays an important role in strengthening the immune system, as well as supporting the
          health of the eyes, skin, bones, and teeth. It also helps with cell division, growth, immune cell
          function, and contributes to overall oral health.
        </p>
      </section>

      {/* Vitamin D */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Vitamin D</h3>
        <p className="leading-relaxed">
          Vitamin D helps strengthen bones and teeth. It also supports immune system function and plays a
          vital role in cell division and growth.
        </p>
      </section>

      {/* Calcium */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Calcium</h3>
        <p className="leading-relaxed">
          Calcium is essential for maintaining strong bones and teeth. It is also involved in muscle
          contraction, blood clotting, and nerve transmission, helping regulate various bodily functions.
        </p>
      </section>

      {/* Iron */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Iron</h3>
        <p className="leading-relaxed">
          Iron plays a critical role in blood cell production. It also helps strengthen the immune system
          and is essential for oxygen transport throughout the body.
        </p>
      </section>

      {/* How to feed */}
      <section>
        <h3 className="text-2xl font-bold mb-3">How Should Eggs Be Fed?</h3>
        <p className="leading-relaxed">
          Eggs are rich in protein, amino acids, vitamins, and minerals that dogs and cats need, making
          them a nutritious food source. However, because <span className="font-semibold">raw eggs may contain harmful bacteria</span> such as Salmonella, it’s safest to
          boil or cook them thoroughly before feeding, or offer them in small amounts.
        </p>
      </section>

      {/* Serving size */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Recommended Serving Size</h3>
        <p className="leading-relaxed">
          One whole egg may be too much depending on your pet’s weight. For example, for a{" "}
          <span className="font-semibold">5&nbsp;kg</span> dog or cat, about <span className="font-semibold">1/4 of an egg per day</span> is an appropriate amount.
        </p>
      </section>

      {/* Precautions */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Precautions When Feeding Eggs</h3>
        <ul className="list-disc pl-6 space-y-2 leading-relaxed">
          <li>
            Because of the risk of Salmonella and other bacteria, <span className="font-semibold">cook eggs thoroughly</span> or give in small amounts. If feeding raw eggs, ensure they are safe and bacteria-free.
          </li>
          <li>
            If your pet already receives sufficient nutrients from other sources, extra egg consumption may cause{" "}
            <span className="font-semibold">nutrient overload</span>.
          </li>
          <li>
            Overfeeding eggs can lead to <span className="font-semibold">obesity, pancreatitis, or dental problems</span> — maintain moderation.
          </li>
        </ul>
      </section>

      {/* Summary */}
      <div className="mt-8 rounded-xl border border-gray-300 bg-gray-50 p-5 md:p-6">
        <h4 className="text-xl font-bold mb-2">Summary</h4>
        <p className="leading-relaxed">
          Eggs provide high-quality protein, healthy fats, vitamins (A, D), and minerals (calcium, iron) that support
          growth, immunity, skin/coat, and overall health in dogs and cats. Serve cooked, use small portions appropriate
          to body weight, and avoid overfeeding to prevent digestive or metabolic issues.
        </p>
      </div>
    </div>
  ),
},


  cheese: {
    title: "Cheese",
    hero: "/food-cheese.jpg",
    summary: "Cheese can be offered to dogs and cats as a tasty treat. Cheese is rich in nutrients like protein, fat, and calcium, all of which can support your pet’s overall health.  ",
    rich: (
    <div className="space-y-8 text-black">
      {/* Nutritional roles */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Why Cheese Is Appealing</h3>
        <ul className="list-disc pl-6 space-y-2 leading-relaxed">
          <li>
            <span className="font-semibold">Protein</span> is essential for building muscles and body tissues.
          </li>
          <li>
            <span className="font-semibold">Fat</span> serves as an important energy source.
          </li>
          <li>
            <span className="font-semibold">Calcium</span> plays a key role in maintaining strong bones and teeth, and cheese contains a significant amount of it.
          </li>
        </ul>
      </section>

      {/* Human cheese suitability */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Can They Eat Human Cheese?</h3>
        <p className="leading-relaxed">
          Feeding <span className="font-semibold">human cheese is not recommended</span> for health reasons.
          Human cheese often contains excessive amounts of <span className="font-semibold">sodium</span> and{" "}
          <span className="font-semibold">fat</span>, which can lead pets to consume far more than they need.
        </p>
        <p className="leading-relaxed mt-2">
          Additionally, many types of human cheese include <span className="font-semibold">lactose</span>, which can be difficult
          for dogs and cats — especially those with lactose intolerance — to digest.
        </p>
        <p className="leading-relaxed mt-2">
          Therefore, it’s best to <span className="font-semibold">avoid giving human cheese</span> and instead choose{" "}
          <span className="font-semibold">lactose-free cheese made specifically for pets</span>, which is much safer for them.
        </p>
      </section>

      {/* Summary */}
      <div className="mt-8 rounded-xl border border-gray-300 bg-gray-50 p-5 md:p-6">
        <h4 className="text-xl font-bold mb-2">Summary</h4>
        <p className="leading-relaxed">
          Cheese can supply protein, fat, and calcium, but many human cheeses are high in sodium, fat, and lactose.
          Choose <span className="font-semibold">pet-safe, lactose-free</span> products and offer only small portions.
        </p>
      </div>
    </div>
  ),
},


  avocado: {
    title: "Avocado",
    hero: "/food-avocado.jpg",
    summary: "Avocados are toxic to dogs and cats and should never be fed to them.",
    rich: (
    <div className="space-y-8 text-black">
      {/* What makes avocado dangerous */}
      <section>
        <p className="leading-relaxed">
          Avocados contain a substance called <span className="font-semibold">persin</span>, which can damage specific
          cells in dogs and cats and may particularly affect the <span className="font-semibold">heart</span> and{" "}
          <span className="font-semibold">respiratory system</span>. Because of this, feeding avocados to pets is
          considered very dangerous — they are one of the foods that <span className="font-semibold">must be avoided at all costs</span>.
        </p>
      </section>

      {/* Symptoms */}
      <section>
        <h3 className="text-2xl font-bold mb-3">If Your Pet Eats Avocado and Shows Any of These Symptoms, Visit a Vet Immediately:</h3>
        <ul className="list-disc pl-6 space-y-2 leading-relaxed">
          <li>Loss of appetite</li>
          <li>Vomiting</li>
          <li>Diarrhea</li>
          <li>Abdominal pain</li>
          <li>Seizures</li>
          <li>Swelling of the body or legs</li>
          <li>Difficulty breathing</li>
          <li>Swollen lymph nodes</li>
          <li>Red gums</li>
          <li>Pale or bluish gums</li>
        </ul>
      </section>

      {/* Veterinary Treatment */}
      <section>
        <h3 className="text-2xl font-bold mb-3">How Is It Treated at the Vet?</h3>
        <p className="leading-relaxed">
          Veterinarians will conduct tests and treatments based on your pet’s symptoms and condition. This may include{" "}
          <span className="font-semibold">blood tests, X-rays, ultrasound</span>, and other examinations to assess how
          the avocado has affected their body.
        </p>
        <p className="leading-relaxed mt-2">Treatment options may include:</p>
        <ul className="list-disc pl-6 space-y-2 leading-relaxed mt-2">
          <li>
            <span className="font-semibold">Gastric lavage:</span> If avocado remains in the stomach, the vet may
            remove it to help clear the digestive tract.
          </li>
          <li>
            <span className="font-semibold">Detoxification and medication:</span> Support for toxin removal and water/electrolyte
            balance; in some cases <span className="font-semibold">antibiotics</span> or{" "}
            <span className="font-semibold">anti-inflammatory drugs</span> may be used.
          </li>
          <li>
            <span className="font-semibold">Ongoing monitoring:</span> Follow-up blood tests or imaging to track internal
            status and decide on additional treatments as needed.
          </li>
        </ul>
      </section>

      {/* Summary */}
      <div className="mt-8 rounded-xl border border-gray-300 bg-gray-50 p-5 md:p-6">
        <h4 className="text-xl font-bold mb-2">Summary</h4>
        <p className="leading-relaxed">
          Avocado (including flesh, skin, pit, and leaves) can be dangerous to dogs and cats because of{" "}
          <span className="font-semibold">persin</span> and potential GI and cardiopulmonary effects.{" "}
          <span className="font-semibold">Do not feed avocados</span> to pets. If ingestion occurs and symptoms appear,
          seek veterinary care immediately.
        </p>
      </div>
    </div>
  ),
},


  corn: {
    title: "Corn",
    hero: "/food-corn.jpg",
    summary: "Dogs and cats can eat corn. Corn is rich in dietary fiber, carotene, vitamin C, and B vitamins, making it a beneficial food for their health. ",
    rich: (
    <div className="space-y-8 text-black">
      <p className="leading-relaxed">
        Corn can be part of a balanced diet for many pets when prepared properly. However, since some pets may
        experience digestive issues depending on their condition, it’s best to <span className="font-semibold">start with a small amount</span> and
        monitor their skin or digestion after feeding.
      </p>

      {/* Nutritional Benefits */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Nutritional Benefits of Corn</h3>

        <h4 className="text-xl font-semibold mt-1 mb-1">Dietary Fiber</h4>
        <p className="leading-relaxed">
          Supports digestive function and promotes healthy bowel movements. Helps regulate blood sugar and
          increases the feeling of fullness, which can aid in weight control.
        </p>

        <h4 className="text-xl font-semibold mt-4 mb-1">Carotene</h4>
        <p className="leading-relaxed">
          Converts into <span className="font-semibold">vitamin A</span>, supporting vision and skin health.
          Also has antioxidant properties that help prevent cellular damage and boost the immune system.
        </p>

        <h4 className="text-xl font-semibold mt-4 mb-1">Vitamin C</h4>
        <p className="leading-relaxed">
          Strengthens the immune system and reduces free radicals in the body with antioxidant effects. Plays
          a key role in <span className="font-semibold">collagen</span> production, supporting skin and joint health.
        </p>

        <h4 className="text-xl font-semibold mt-4 mb-1">Vitamin B</h4>
        <p className="leading-relaxed">
          Essential for metabolism, nerve function, and red blood cell production. <span className="font-semibold">Folic acid</span>, a B vitamin,
          is particularly important for the development of puppies in pregnant dogs.
        </p>
      </section>

      {/* Recommended Serving Amount */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Recommended Serving Amount</h3>
        <p className="leading-relaxed">
          It’s recommended to feed corn at about <span className="font-semibold">10% of your pet’s daily calorie intake</span>.
          If it’s their first time eating corn, start with a small portion to check for any digestive reactions or skin issues afterward.
        </p>
      </section>

      {/* Precautions */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Precautions When Feeding Corn</h3>
        <ul className="list-disc pl-6 space-y-2 leading-relaxed">
          <li>
            <span className="font-semibold">Cook before serving:</span> Raw corn is difficult to digest. Boil or steam and ensure it’s well cooked before feeding.
          </li>
          <li>
            <span className="font-semibold">Avoid the cob:</span> Never feed the cob, as it cannot be digested and may cause intestinal blockages.
          </li>
          <li>
            <span className="font-semibold">Avoid processed products:</span> Do not give corn products that contain sugar, salt, or other seasonings.
          </li>
          <li>
            <span className="font-semibold">Health conditions:</span> Pets with urinary stones, digestive problems, high blood sugar, or anemia should avoid corn.
          </li>
          <li>
            <span className="font-semibold">Start small:</span> Always offer a small amount at first and observe for any unusual reactions.
          </li>
        </ul>
      </section>

      {/* Summary */}
      <div className="mt-8 rounded-xl border border-gray-300 bg-gray-50 p-5 md:p-6">
        <h4 className="text-xl font-bold mb-2">Summary</h4>
        <p className="leading-relaxed">
          Corn can be a safe, occasional addition for many dogs and cats when cooked and served plain. It provides fiber,
          carotene (vitamin A precursor), vitamin C, and B vitamins. Keep portions modest, avoid cobs and seasoned or processed forms,
          and monitor your pet—especially if they have digestive sensitivity or relevant health conditions.
        </p>
      </div>
    </div>
  ),
},


  cucumber: {
    title: "Cucumber",
    hero: "/food-cucumber.jpg",
    summary: "Dogs and cats can eat cucumbers. They are rich in water and dietary fiber, which help maintain hydration and support digestion.",
    rich: (
    <div className="space-y-8 text-black">
      <p className="leading-relaxed">
        Cucumbers also contain essential nutrients such as <span className="font-semibold">vitamin C</span>,{" "}
        <span className="font-semibold">vitamin K</span>, and <span className="font-semibold">potassium</span>, which support
        immune function, bone health, and blood pressure regulation. Since cucumbers are low in calories, they can be a healthy
        treat option and even assist with weight management. However, they should not replace your pet’s main diet — they are
        best served as an occasional snack.
      </p>

      {/* Nutritional Benefits */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Nutritional Benefits</h3>

        <h4 className="text-xl font-semibold mt-1 mb-1">Vitamin C</h4>
        <p className="leading-relaxed">
          Strengthens the immune system and reduces free radicals with antioxidant effects. Plays a key role in{" "}
          <span className="font-semibold">collagen</span> production and overall health.
        </p>

        <h4 className="text-xl font-semibold mt-4 mb-1">Vitamin K</h4>
        <p className="leading-relaxed">
          Essential for healthy blood clotting. Produced in the liver, it helps activate proteins needed for clotting. Also
          contributes to bone health by working with <span className="font-semibold">calcium</span> to maintain bone density and structure.
        </p>

        <h4 className="text-xl font-semibold mt-4 mb-1">Potassium</h4>
        <p className="leading-relaxed">
          Supports heart health by maintaining a proper balance of sodium in the body. Helps prevent cardiovascular issues and
          supports normal muscle function.
        </p>
      </section>

      {/* Seeds and Peel Safety */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Cucumber Seeds and Peel: Are They Safe?</h3>

        <h4 className="text-lg font-semibold mt-1 mb-1">Seeds</h4>
        <p className="leading-relaxed">
          Cucumber seeds contain oxidized fatty acids and fiber, which can be difficult for pets to digest. Because they are small
          and hard, they may also cause gastrointestinal blockages. It is best <span className="font-semibold">not to feed seeds</span> to dogs or cats.
        </p>

        <h4 className="text-lg font-semibold mt-4 mb-1">Peel</h4>
        <p className="leading-relaxed">
          The peel is difficult to digest and may cause digestive upset. It contains oxidized fatty acids and fiber, which can put
          extra strain on the digestive system. <span className="font-semibold">Peel the cucumber</span> before feeding and serve only the soft, digestible parts in small amounts.
        </p>
      </section>

      {/* Recommended Serving Amount */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Recommended Serving Amount</h3>
        <p className="leading-relaxed">
          Cucumbers should make up about <span className="font-semibold">10% of your pet’s daily calorie intake</span>. As a general guideline,
          feed <span className="font-semibold">10–20&nbsp;g of cucumber per 1&nbsp;kg of body weight</span> for dogs or cats.
        </p>
      </section>

      {/* Feeding Precautions */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Feeding Precautions</h3>
        <ul className="list-disc pl-6 space-y-2 leading-relaxed">
          <li><span className="font-semibold">Control the amount:</span> Overfeeding can lead to digestive issues like diarrhea.</li>
          <li><span className="font-semibold">Use fresh cucumbers:</span> Old or contaminated cucumbers can harm your pet’s health and cause digestive problems.</li>
          <li><span className="font-semibold">Remove the peel:</span> Cucumber peel is hard to digest and should always be removed.</li>
          <li><span className="font-semibold">Avoid mixing with sugary foods:</span> Combining cucumbers with high-sugar foods (like fruits) may cause digestive problems.</li>
          <li><span className="font-semibold">Avoid in certain conditions:</span> Pets with diabetes, kidney disease, or cystitis should not eat cucumbers.</li>
        </ul>
      </section>

      {/* Bad Breath */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Does Cucumber Help With Bad Breath?</h3>
        <p className="leading-relaxed">
          Cucumbers contain <span className="font-semibold">phenylalanine</span>, a compound that can help reduce bad breath. However,
          cucumbers alone cannot completely eliminate it. Maintaining good oral hygiene — including adequate hydration, regular
          teeth cleaning, and the use of oral care products — is essential for preventing and managing bad breath.
        </p>
      </section>

      {/* Summary */}
      <div className="mt-8 rounded-xl border border-gray-300 bg-gray-50 p-5 md:p-6">
        <h4 className="text-xl font-bold mb-2">Summary</h4>
        <p className="leading-relaxed">
          Cucumber can be a hydrating, low-calorie treat for dogs and cats when fed properly. Peel and de-seed, serve small
          portions (about 10–20&nbsp;g per kg body weight), and avoid use in pets with diabetes, kidney disease, or cystitis.
          Keep it as an occasional snack and maintain good oral hygiene for lasting breath benefits.
        </p>
      </div>
    </div>
  ),
},


  broccoli: {
    title: "Broccoli",
    hero: "/food-broccoli.jpg",
    summary: "Dogs and cats can eat broccoli. It is rich in calcium, vitamin C, vitamin K, vitamin A, and many other nutrients.",
    rich: (
    <div className="space-y-8 text-black">
      <p className="leading-relaxed">
        Broccoli also contains beneficial compounds like <span className="font-semibold">sulforaphane</span> and{" "}
        <span className="font-semibold">glucosinolate</span>, which have antioxidant properties and help strengthen the immune system.
        Additionally, its high <span className="font-semibold">fiber</span> content aids digestion and helps the body eliminate waste.
      </p>

      {/* Key Nutrients and Benefits */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Key Nutrients and Benefits</h3>

        <h4 className="text-xl font-semibold mt-1 mb-1">Sulforaphane</h4>
        <p className="leading-relaxed">
          Enhances antioxidant activity and supports immune function. Research suggests it may also have positive effects on eye health.
        </p>

        <h4 className="text-xl font-semibold mt-4 mb-1">Glucosinolates</h4>
        <p className="leading-relaxed">
          Shown to help prevent diabetes and known for boosting immunity with antioxidant effects.
        </p>

        <h4 className="text-xl font-semibold mt-4 mb-1">Calcium</h4>
        <p className="leading-relaxed">
          Plays a vital role in bone health and is essential for maintaining bone growth and density.
        </p>

        <h4 className="text-xl font-semibold mt-4 mb-1">Vitamin C</h4>
        <p className="leading-relaxed">
          Strengthens the immune system and reduces free radicals through antioxidant action. Important for{" "}
          <span className="font-semibold">collagen</span> production.
        </p>

        <h4 className="text-xl font-semibold mt-4 mb-1">Vitamin K</h4>
        <p className="leading-relaxed">
          Synthesized in the liver and activates proteins necessary for blood clotting. Supports bone health and works with calcium
          to maintain bone structure.
        </p>

        <h4 className="text-xl font-semibold mt-4 mb-1">Vitamin A</h4>
        <p className="leading-relaxed">
          Helps maintain eye, skin, and coat health.
        </p>
      </section>

      {/* Recommended Serving Amount */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Recommended Serving Amount</h3>
        <p className="leading-relaxed">
          Serve broccoli as about <span className="font-semibold">10% of your pet’s daily caloric intake</span>.
          Note that broccoli contains a compound called <span className="font-semibold">isothiocyanate</span>, which can irritate the stomach lining
          and potentially cause vomiting or diarrhea if consumed in large amounts.
        </p>
      </section>

      {/* Feeding Precautions */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Feeding Precautions</h3>
        <ul className="list-disc pl-6 space-y-2 leading-relaxed">
          <li>
            <span className="font-semibold">Cook before serving:</span> Raw broccoli contains oxalic acid and can be harder to digest.
            Lightly steam or boil before feeding.
          </li>
          <li>
            <span className="font-semibold">Cut into small pieces:</span> Finely chop stems to avoid choking hazards.
          </li>
          <li>
            <span className="font-semibold">Introduce gradually:</span> When giving broccoli for the first time, offer a small amount and observe
            your pet’s reaction (skin or digestive issues).
          </li>
        </ul>
      </section>

      {/* Summary */}
      <div className="mt-8 rounded-xl border border-gray-300 bg-gray-50 p-5 md:p-6">
        <h4 className="text-xl font-bold mb-2">Summary</h4>
        <p className="leading-relaxed">
          Broccoli can be a healthy, occasional addition for dogs and cats when cooked and served in small portions.
          It offers fiber, calcium, and vitamins C, K, and A, plus antioxidant compounds like sulforaphane and glucosinolates
          that support immunity. Keep portions modest (≈10% of daily calories), cook first, chop finely, and introduce slowly
          to avoid stomach irritation from isothiocyanates.
        </p>
      </div>
    </div>
  ),
},


  carrots: {
    title: "Carrots",
    hero: "/food-carrots.jpg",
    summary: "Dogs and cats can eat carrots. Carrots contain essential nutrients such as vitamin A, calcium, and dietary fiber.",
    rich: (
    <div className="space-y-8 text-black">
      <p className="leading-relaxed">
        Among these nutrients, <span className="font-semibold">vitamin A</span> supports eye and skin health, while{" "}
        <span className="font-semibold">calcium</span> supports heart function. The{" "}
        <span className="font-semibold">fiber</span> in carrots stimulates digestion and promotes healthy bowel movements.
        Carrots can also make food more appetizing for dogs.{" "}
        <span className="font-semibold">Note:</span> Cats cannot convert the beta-carotene in carrots into vitamin A, but
        carrots can still help because their rich fiber content supports bowel function and can help prevent constipation.
      </p>

      {/* Vitamin A */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Vitamin A</h3>
        <p className="leading-relaxed">
          Vitamin A helps strengthen the immune system, supports cell growth and division, and is essential for the
          development of bones, teeth, and oral health. It also contributes to healthy skin and vision.
        </p>
      </section>

      {/* Calcium */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Calcium</h3>
        <p className="leading-relaxed">
          Calcium supports <span className="font-semibold">heart function</span> and helps maintain muscle strength. It’s
          crucial for nerve transmission, blood clotting, and muscle contraction.
        </p>
      </section>

      {/* Dietary Fiber */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Dietary Fiber</h3>
        <p className="leading-relaxed">
          Dietary fiber improves digestive function, promotes bowel movements, helps regulate blood sugar levels, and
          increases satiety, aiding in weight management.
        </p>
      </section>

      {/* Recommended Amount */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Recommended Amount</h3>
        <p className="leading-relaxed">
          Offer carrots as about <span className="font-semibold">10% of daily caloric intake</span>. If it’s your pet’s first
          time eating carrots, start with a small amount and observe their condition.
        </p>
      </section>

      {/* How to Feed Carrots */}
      <section>
        <h3 className="text-2xl font-bold mb-3">How to Feed Carrots</h3>
        <ul className="list-disc pl-6 space-y-2 leading-relaxed">
          <li>
            <span className="font-semibold">Raw carrots:</span> Cut into sticks or small pieces before feeding to help
            prevent choking. Raw carrots help preserve nutrients.
          </li>
          <li>
            <span className="font-semibold">Cooked carrots:</span> Easier to digest—recommended for pets with sensitive
            stomachs. Serve after cooking and cooling.
          </li>
        </ul>
      </section>

      {/* Cautions */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Cautions When Feeding Carrots</h3>
        <ul className="list-disc pl-6 space-y-2 leading-relaxed">
          <li>When introducing for the first time, start small and monitor for any reaction.</li>
          <li>If your pet has weak digestion or tends not to chew well, avoid offering raw carrots.</li>
          <li>Do not overfeed—too much can cause digestive upset. Keep portions moderate.</li>
        </ul>
      </section>

      {/* Summary */}
      <div className="mt-8 rounded-xl border border-gray-300 bg-gray-50 p-5 md:p-6">
        <h4 className="text-xl font-bold mb-2">Summary</h4>
        <p className="leading-relaxed">
          Carrots can be a nutritious, low-calorie snack that provides vitamin A, calcium, and fiber. They support
          digestion and can make meals more appealing—especially for dogs. Introduce gradually, serve in bite-sized
          pieces (raw or cooked), and keep portions to roughly 10% of daily calories to avoid digestive issues.
        </p>
      </div>
    </div>
  ),
},


  zucchini: {
    title: "Zucchini",
    hero: "/food-zucchini.jpg",
    summary: "Dogs and cats can safely eat zucchini. Zucchini is a low-calorie, nutrient-dense vegetable that provides many health benefits.",
    rich: (
    <div className="space-y-8 text-black">
      <p className="leading-relaxed">
        Zucchini contains essential nutrients such as <span className="font-semibold">vitamin A</span>,{" "}
        <span className="font-semibold">vitamin C</span>, <span className="font-semibold">vitamin K</span>,{" "}
        <span className="font-semibold">potassium</span>, <span className="font-semibold">magnesium</span>, and{" "}
        <span className="font-semibold">dietary fiber</span>, all of which contribute to overall well-being. Its high{" "}
        <span className="font-semibold">water content</span> helps with hydration and supports healthy digestion. Because it’s
        low in calories and fat, zucchini can be a great snack for pets who need to maintain a healthy weight or are on a diet plan.
        Its mild flavor and soft texture make it easy to eat and digest, even for sensitive stomachs.
      </p>

      {/* Nutritional Benefits */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Nutritional Benefits</h3>

        <h4 className="text-xl font-semibold mt-1 mb-1">Vitamin A</h4>
        <p className="leading-relaxed">
          Supports <span className="font-semibold">eye health</span>, skin condition, and the immune system; plays a role in cell growth
          and maintaining healthy tissues.
        </p>

        <h4 className="text-xl font-semibold mt-4 mb-1">Vitamin C</h4>
        <p className="leading-relaxed">
          Functions as an <span className="font-semibold">antioxidant</span> to protect cells from free-radical damage; contributes to
          immune strength and <span className="font-semibold">collagen</span> production for skin, joint, and bone health.
        </p>

        <h4 className="text-xl font-semibold mt-4 mb-1">Vitamin K</h4>
        <p className="leading-relaxed">
          Essential for proper blood clotting and supports bone strength; works with calcium to maintain healthy bones.
        </p>

        <h4 className="text-xl font-semibold mt-4 mb-1">Potassium & Magnesium</h4>
        <p className="leading-relaxed">
          Help regulate blood pressure, support heart health, and aid muscle and nerve function; contribute to electrolyte balance.
        </p>

        <h4 className="text-xl font-semibold mt-4 mb-1">Dietary Fiber</h4>
        <p className="leading-relaxed">
          Improves digestive health, promotes regular bowel movements, helps regulate blood sugar, and increases satiety for weight management.
        </p>
      </section>

      {/* Recommended Amount */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Recommended Amount</h3>
        <p className="leading-relaxed">
          Offer zucchini as a snack or supplement, not a main meal—about <span className="font-semibold">10% of daily caloric intake</span> is a good guideline.
          When introducing it for the first time, start with a small amount and observe your pet for any digestive issues.
        </p>
      </section>

      {/* How to Feed Zucchini */}
      <section>
        <h3 className="text-2xl font-bold mb-3">How to Feed Zucchini</h3>
        <ul className="list-disc pl-6 space-y-2 leading-relaxed">
          <li>
            <span className="font-semibold">Cooked zucchini:</span> Lightly steam or boil to make it easier to digest and to reduce stomach upset.
          </li>
          <li>
            <span className="font-semibold">Raw zucchini:</span> Can be offered if cut into small, bite-sized pieces; wash thoroughly before feeding.
          </li>
          <li>
            <span className="font-semibold">Avoid seasonings:</span> Do not add salt, oil, garlic, onions, or any other seasonings.
          </li>
        </ul>
      </section>

      {/* Cautions */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Cautions When Feeding Zucchini</h3>
        <ul className="list-disc pl-6 space-y-2 leading-relaxed">
          <li>Always remove the stem and ends before serving.</li>
          <li>Avoid large quantities at once—too much fiber can cause gas or diarrhea.</li>
          <li>If your pet has kidney problems or digestive sensitivities, consult your veterinarian before adding zucchini.</li>
        </ul>
      </section>

      {/* Summary */}
      <div className="mt-8 rounded-xl border border-gray-300 bg-gray-50 p-5 md:p-6">
        <h4 className="text-xl font-bold mb-2">Summary</h4>
        <p className="leading-relaxed">
          Zucchini is a safe, nutritious vegetable for dogs and cats when fed properly. It supports hydration, digestion,
          immunity, and weight management. Serve plain, cut into small pieces, and keep portions moderate (≈10% of daily calories).
        </p>
      </div>
    </div>
  ),
},


  eggplant: {
    title: "Eggplant",
    hero: "/food-eggplant.jpg",
    summary: "Dogs and cats can eat eggplant in moderation, but there are a few important precautions to keep in mind.",
    rich: (
    <div className="space-y-8 text-black">
      <p className="leading-relaxed">
        Eggplant is a low-calorie, fiber-rich vegetable that contains valuable nutrients such as{" "}
        <span className="font-semibold">vitamin C</span>, <span className="font-semibold">vitamin K</span>,{" "}
        <span className="font-semibold">vitamin B6</span>, <span className="font-semibold">potassium</span>,{" "}
        <span className="font-semibold">manganese</span>, and antioxidants. These nutrients support immune function, heart health,
        digestion, and overall cellular health.
      </p>
      <p className="leading-relaxed">
        However, because eggplant belongs to the nightshade family, it contains a natural compound called{" "}
        <span className="font-semibold">solanine</span>, which can cause digestive upset or allergic reactions in some pets if consumed
        in large quantities. Therefore, feed only <span className="font-semibold">small amounts</span> and monitor your pet’s reaction
        when introducing eggplant into their diet.
      </p>

      {/* Nutritional Benefits */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Nutritional Benefits</h3>

        <h4 className="text-xl font-semibold mt-1 mb-1">Vitamin C</h4>
        <p className="leading-relaxed">
          Strengthens the immune system, acts as an antioxidant to protect cells from free-radical damage, and aids in{" "}
          <span className="font-semibold">collagen</span> production to support healthy skin, joints, and connective tissues.
        </p>

        <h4 className="text-xl font-semibold mt-4 mb-1">Vitamin K</h4>
        <p className="leading-relaxed">
          Plays an important role in blood clotting and contributes to bone health when combined with calcium.
        </p>

        <h4 className="text-xl font-semibold mt-4 mb-1">Vitamin B6</h4>
        <p className="leading-relaxed">
          Supports metabolism, brain health, and red blood cell production, helping maintain overall energy levels and vitality.
        </p>

        <h4 className="text-xl font-semibold mt-4 mb-1">Potassium &amp; Manganese</h4>
        <p className="leading-relaxed">
          Help regulate blood pressure, support heart and muscle function, and contribute to strong bones and a healthy metabolism.
        </p>

        <h4 className="text-xl font-semibold mt-4 mb-1">Dietary Fiber</h4>
        <p className="leading-relaxed">
          Aids in digestion, promotes healthy bowel movements, helps regulate blood sugar, and increases satiety for weight management.
        </p>
      </section>

      {/* Recommended Amount */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Recommended Amount</h3>
        <p className="leading-relaxed">
          Feed eggplant as a treat or supplement, making up <span className="font-semibold">no more than 10% of daily caloric intake</span>.
          Start with a small amount (about <span className="font-semibold">1–2 small pieces</span>) to see how your pet reacts,
          especially if it’s their first time eating eggplant.
        </p>
      </section>

      {/* How to Feed Eggplant */}
      <section>
        <h3 className="text-2xl font-bold mb-3">How to Feed Eggplant</h3>
        <ul className="list-disc pl-6 space-y-2 leading-relaxed">
          <li>
            <span className="font-semibold">Cooked eggplant:</span> Lightly steam or boil without oil, seasoning, or spices.
            Cooking reduces solanine content and makes digestion easier.
          </li>
          <li>
            <span className="font-semibold">Raw eggplant:</span> Small, finely chopped raw pieces can be offered, but cooked is
            generally safer and gentler on the stomach.
          </li>
          <li>
            <span className="font-semibold">Avoid seasoning:</span> Never serve with garlic, onions, salt, or oil—these can be toxic or harmful.
          </li>
        </ul>
      </section>

      {/* Cautions */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Cautions When Feeding Eggplant</h3>
        <ul className="list-disc pl-6 space-y-2 leading-relaxed">
          <li>Do not feed the stem or leaves; they contain higher concentrations of solanine and can be toxic.</li>
          <li>Monitor for allergic reactions (itching, swelling, digestive upset), especially during the first feeding.</li>
          <li>
            Pets with kidney disease, arthritis, or inflammatory conditions may be more sensitive to nightshades—consult your
            veterinarian before including eggplant.
          </li>
        </ul>
      </section>

      {/* Summary */}
      <div className="mt-8 rounded-xl border border-gray-300 bg-gray-50 p-5 md:p-6">
        <h4 className="text-xl font-bold mb-2">Summary</h4>
        <p className="leading-relaxed">
          Eggplant can be a safe and nutritious treat for dogs and cats when served correctly. It offers fiber, antioxidants,
          and essential vitamins that support immune health, digestion, and metabolic function. Serve cooked, plain, and in
          small portions, and watch for any signs of sensitivity.
        </p>
      </div>
    </div>
  ),
},


  bananas: {
    title: "Bananas",
    hero: "/food-bananas.jpg",
    summary: "Dogs and cats can eat bananas. Bananas contain natural sugars, so excessive consumption may cause digestive issues or stomach discomfort.",
    rich: (
    <div className="space-y-8 text-black">
      <p className="leading-relaxed">
        When fed in moderation, bananas can provide valuable nutrients for pets. They’re rich in{" "}
        <span className="font-semibold">potassium</span>, <span className="font-semibold">vitamin C</span>,{" "}
        <span className="font-semibold">vitamin B6</span>, and <span className="font-semibold">dietary fiber</span>,
        all of which can support healthy eating habits and overall wellness.
      </p>

      {/* Potassium */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Potassium</h3>
        <p className="leading-relaxed">
          Potassium supports healthy <span className="font-semibold">heart function</span> and helps maintain the
          balance of sodium and fluids in the body. It’s also important for <span className="font-semibold">muscle function</span>.
          Providing an appropriate amount can support your pet’s heart and muscle health.
        </p>
      </section>

      {/* Vitamin C */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Vitamin C</h3>
        <p className="leading-relaxed">
          Vitamin C helps strengthen the immune system and acts as an <span className="font-semibold">antioxidant</span>,
          reducing free radicals in the body. It also supports <span className="font-semibold">collagen</span> production,
          a key component for skin, bones, and muscle tissue. While dogs and cats can synthesize vitamin C, dietary
          sources can still be beneficial.
        </p>
      </section>

      {/* Vitamin B6 */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Vitamin B6</h3>
        <p className="leading-relaxed">
          Vitamin B6 supports <span className="font-semibold">metabolic activity</span> and helps the body generate energy.
          It also contributes to a stronger immune system and overall health.
        </p>
      </section>

      {/* Dietary Fiber */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Dietary Fiber</h3>
        <p className="leading-relaxed">
          Dietary fiber aids digestion by helping remove waste and promoting regular bowel movements. It helps regulate{" "}
          <span className="font-semibold">blood sugar</span> levels by slowing glucose absorption and increases satiety,
          supporting healthy weight management.
        </p>
      </section>

      {/* Feeding Precautions */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Feeding Precautions for Bananas</h3>
        <ul className="list-disc pl-6 space-y-2 leading-relaxed">
          <li>Provide in <span className="font-semibold">moderation</span>; overeating can cause digestive issues or raise blood sugar.</li>
          <li><span className="font-semibold">Always remove the peel</span>—it’s hard to digest.</li>
          <li><span className="font-semibold">Cut into small pieces</span> to prevent choking.</li>
          <li>Check for allergies or digestive upset; if they occur, <span className="font-semibold">stop feeding immediately</span>.</li>
          <li>Bananas may affect dental health—offer <span className="font-semibold">water after eating</span> to help oral hygiene.</li>
        </ul>
      </section>

      {/* Summary */}
      <div className="mt-8 rounded-xl border border-gray-300 bg-gray-50 p-5 md:p-6">
        <h4 className="text-xl font-bold mb-2">Summary</h4>
        <p className="leading-relaxed">
          Bananas can be a safe, nutritious treat for dogs and cats when served properly. They offer potassium, vitamin C,
          vitamin B6, and fiber to support heart health, immunity, metabolism, and digestion. Keep portions small, peel and
          chop into bite-sized pieces, and monitor for any reactions.
        </p>
      </div>
    </div>
  ),
},


  tomatoes: {
    title: "Tomatoes",
    hero: "/food-tomatoes.jpg",
    summary: "Ripe, red tomato flesh can be safely fed to dogs and cats and can offer several health benefits. Tomatoes contain nutrients such as lycopene, vitamin C, vitamin K, calcium, and dietary fiber, all of which can support your pet’s health.",
    rich: (
    <div className="space-y-8 text-black">
      {/* Nutritional Benefits */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Nutritional Benefits</h3>

        <h4 className="text-xl font-semibold mt-1 mb-1">Lycopene</h4>
        <p className="leading-relaxed">
          Acts as a powerful <span className="font-semibold">antioxidant</span> and may help prevent cancer.
        </p>

        <h4 className="text-xl font-semibold mt-4 mb-1">Vitamin C</h4>
        <p className="leading-relaxed">
          Strengthens the immune system and promotes healthy skin.
        </p>

        <h4 className="text-xl font-semibold mt-4 mb-1">Vitamin K</h4>
        <p className="leading-relaxed">
          Helps with blood clotting and supports bone health.
        </p>

        <h4 className="text-xl font-semibold mt-4 mb-1">Calcium</h4>
        <p className="leading-relaxed">
          Aids in regulating blood pressure and maintaining normal muscle function.
        </p>

        <h4 className="text-xl font-semibold mt-4 mb-1">Dietary Fiber</h4>
        <p className="leading-relaxed">
          Promotes healthy digestion and can help prevent constipation.
        </p>
      </section>

      {/* Toxicity Notes */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Are Tomato Plants and Stems Toxic?</h3>
        <p className="leading-relaxed">
          When feeding tomatoes, you generally don’t need to worry about toxicity as long as the fruit is{" "}
          <span className="font-semibold">fully ripe</span>. Tomatoes contain a natural compound called{" "}
          <span className="font-semibold">tomatine</span>, which can be toxic in large amounts and is found mainly in the{" "}
          <span className="font-semibold">leaves, stems, and flowers</span> of the plant.
        </p>
        <p className="leading-relaxed mt-2">
          For most pets, small amounts of tomatine don’t cause significant issues, but in some animals it can lead to
          digestive upset, vomiting, or diarrhea. Tomatine is present in much higher concentrations in{" "}
          <span className="font-semibold">unripe (green) tomatoes and plant parts</span> and is almost non-existent in{" "}
          <span className="font-semibold">fully ripe fruit</span>.
        </p>
      </section>

      {/* Cautions */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Cautions When Feeding Tomatoes</h3>
        <ul className="list-disc pl-6 space-y-2 leading-relaxed">
          <li>
            <span className="font-semibold">Remove all stems, leaves, and green parts</span> before feeding—they can contain tomatine.
          </li>
          <li>
            <span className="font-semibold">Avoid overfeeding:</span> Excessive amounts may cause digestive issues (vomiting or diarrhea).
          </li>
          <li>
            <span className="font-semibold">Introduce gradually:</span> If it’s the first time, start with a small amount and monitor your pet’s reaction.
          </li>
          <li>
            <span className="font-semibold">Wash thoroughly:</span> Always wash tomatoes to remove dirt, pesticides, or residues.
          </li>
        </ul>
        <p className="leading-relaxed mt-2">
          If you follow these precautions, dogs and cats can enjoy tomatoes as a healthy and safe treat on occasion.
        </p>
      </section>

      {/* Summary */}
      <div className="mt-8 rounded-xl border border-gray-300 bg-gray-50 p-5 md:p-6">
        <h4 className="text-xl font-bold mb-2">Summary</h4>
        <p className="leading-relaxed">
          Ripe tomatoes provide lycopene, vitamins C and K, calcium, and fiber. Feed small portions of the{" "}
          <span className="font-semibold">fully ripe fruit only</span>, remove all stems/leaves/green parts, wash well, and
          introduce slowly to avoid digestive upset.
        </p>
      </div>
    </div>
  ),
},


  apples: {
    title: "Apples",
    hero: "/food-apples.jpg",
    summary: "Dogs and cats can safely eat apples in moderation. Apples are rich in vitamin C, dietary fiber, polyphenols, and calcium, all of which contribute to your pet’s overall health.",
    rich: (
    <div className="space-y-8 text-black">
      <p className="leading-relaxed">
        Fiber helps improve digestion and can aid in preventing constipation, while <span className="font-semibold">polyphenols</span> have
        antioxidant properties that support overall health and strengthen the immune system. <span className="font-semibold">Vitamin C</span>
        boosts immunity and protects cells from damage, and <span className="font-semibold">calcium</span> supports a healthy heart and strong muscles.
        However, apples have a relatively <span className="font-semibold">high sugar</span> content, so overconsumption can negatively affect your pet’s
        health. Always feed apples in controlled amounts and follow proper preparation guidelines.
      </p>

      {/* Vitamin C */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Vitamin C</h3>
        <p className="leading-relaxed">
          Vitamin C strengthens the immune system and reduces free radicals in the body through antioxidant effects—essential for
          healthy cell function. It also plays a vital role in <span className="font-semibold">collagen</span> production, a key
          component for healthy skin, bones, and muscles. While dogs and cats can synthesize vitamin C, dietary sources from apples
          can still be beneficial, especially if there are deficiencies.
        </p>
      </section>

      {/* Dietary Fiber */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Dietary Fiber</h3>
        <p className="leading-relaxed">
          Dietary fiber aids digestion by helping remove waste from the intestines and promoting regular bowel movements. It also
          contributes to <span className="font-semibold">blood sugar regulation</span> and helps pets feel fuller longer, which can
          assist with weight management.
        </p>
      </section>

      {/* Polyphenols */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Polyphenols</h3>
        <p className="leading-relaxed">
          The polyphenols in apples have powerful <span className="font-semibold">antioxidant</span> effects that help prevent cell
          damage and strengthen the immune system. They also support <span className="font-semibold">cardiovascular health</span> and
          help reduce inflammation.
        </p>
      </section>

      {/* Calcium */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Calcium</h3>
        <p className="leading-relaxed">
          Calcium supports strong <span className="font-semibold">heart</span> function and helps maintain muscle performance.
          Adequate calcium is essential for maintaining bone density and strength.
        </p>
      </section>

      {/* Precautions */}
      <section>
        <h3 className="text-2xl font-bold mb-3">Precautions When Feeding Apples</h3>
        <ul className="list-disc pl-6 space-y-2 leading-relaxed">
          <li>
            <span className="font-semibold">Remove the seeds and core</span> before feeding. Apple seeds and cores may contain trace amounts of cyanide.
          </li>
          <li>
            <span className="font-semibold">Do not overfeed.</span> Too much apple can cause digestive issues such as diarrhea, vomiting, or stomach upset.
          </li>
          <li>
            <span className="font-semibold">Introduce gradually.</span> For first-time feeders, start with a small amount and monitor for any adverse reactions.
          </li>
          <li>
            <span className="font-semibold">Wash thoroughly.</span> Always wash apples to remove pesticides or dirt.
          </li>
          <li>
            <span className="font-semibold">Use appropriate treats for young pets.</span> For very young dogs or cats, opt for softer, safer treats instead.
          </li>
        </ul>
      </section>

      {/* Summary */}
      <div className="mt-8 rounded-xl border border-gray-300 bg-gray-50 p-5 md:p-6">
        <h4 className="text-xl font-bold mb-2">Summary</h4>
        <p className="leading-relaxed">
          Apples can be a safe, nutritious snack for dogs and cats when prepared properly and fed in moderation. They offer
          vitamin C, fiber, polyphenols, and calcium to support immunity, digestion, and cardiovascular and muscle health.
          Always remove seeds and the core, wash well, introduce slowly, and keep portions modest to avoid sugar-related issues.
        </p>
      </div>
    </div>
  ),
},

};

/** Optionally pre-render pages at build time */
export async function generateStaticParams() {
  return Object.keys(CONTENTS).map((slug) => ({ slug }));
}

/** ---------- Page ---------- */
export default function FoodDetailPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const content = CONTENTS[slug];
  if (!content) notFound();

  return (
    <main className="bg-white">
      {/* Hero / Header */}
      <div className="relative bg-[#F8F6F3]">
        <div className="mx-auto max-w-5xl px-4 md:px-6 py-10 md:py-14 grid md:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
          {/* Text */}
          <div>
            <nav className="mb-3 text-sm text-[#6B7280]">
              <Link href="/exclusive-features/health-encyclopedia" className="hover:underline">
                Health Encyclopedia
              </Link>{" "}
              /{" "}
              <Link href="/exclusive-features/health-encyclopedia#food" className="hover:underline">
                Food
              </Link>{" "}
              / <span className="text-[#111827] font-medium">{content.title}</span>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold text-[#111827] mb-3">
              {content.title}
            </h1>
            {content.summary ? (
              <p className="text-lg text-[#4B5563]">{content.summary}</p>
            ) : null}
          </div>

          {/* Image */}
          <div className="relative w-full h-56 md:h-64 rounded-lg overflow-hidden shadow-sm bg-white">
            <Image
              src={content.hero}
              alt={content.title}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 420px, 100vw"
              priority
            />
          </div>
        </div>
      </div>

      {/* Body */}
      <section className="mx-auto max-w-5xl px-4 md:px-6 py-10 space-y-6">
        {/* If we have a rich layout for this slug, render it; else, simple prose */}
        {content.rich ? (
          content.rich
        ) : (
          <div className="prose prose-neutral max-w-none">
            {content.paragraphs?.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        )}

        <div className="pt-2">
          <Link
            href="/exclusive-features/health-encyclopedia"
            className="inline-block border px-5 py-2 rounded-sm font-medium hover:bg-gray-50"
            style={{ borderColor: "#4A321E", color: "#4A321E" }}
          >
            ← Back to Encyclopedia
          </Link>
        </div>
      </section>
    </main>
  );
}
