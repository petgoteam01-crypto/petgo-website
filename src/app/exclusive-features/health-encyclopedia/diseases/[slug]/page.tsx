import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

/** ---------- Small UI building blocks (no images) ---------- */
function Crumb({ children }: { children: React.ReactNode }) {
  return <span className="text-gray-500">{children}</span>;
}

function Hero({ title }: { title: string }) {
  return (
    <header className="bg-[#FAF8F6] border-b">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <nav className="text-sm mb-4">
          <Link
            href="/exclusive-features/health-encyclopedia"
            className="text-gray-500 hover:underline"
          >
            Health Encyclopedia
          </Link>{" "}
          / <Crumb>Diseases</Crumb> / <Crumb>{title}</Crumb>
        </nav>

        {/* Title only (no summary in the banner) */}
        <h1 className="text-4xl font-extrabold tracking-tight text-[#111827]">
          {title}
        </h1>
      </div>
    </header>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="max-w-5xl mx-auto px-6 py-8">
      <h2 className="text-2xl font-semibold mb-3">{title}</h2>
      <div className="prose max-w-none text-gray-700">
        {children}
      </div>
    </section>
  );
}

/** ---------- Content shape ---------- */
type DiseaseContent = {
  title: string;
  rich?: ReactNode;   // render this when present

  // simple fields (used when rich is not provided)
  what?: string;
  signs?: string[];
  urgent?: string[];
  dx?: string[];
  tx?: string[];
  prev?: string[];
};


/** ---------- All 25 diseases (concise bullets) ---------- */
const CONTENT: Record<string, DiseaseContent> = {
  "glaucoma": {
  title: "Glaucoma",
  rich: (
    <div className="space-y-10">
      {/* Overview */}
      <section>
        <h2 className="text-2xl font-bold text-black mb-3">Overview</h2>
        <p className="text-black leading-relaxed mb-4">
          Glaucoma in dogs is a serious eye condition caused by a buildup of a fluid
          called aqueous humor inside the eye. Normally, this fluid drains out to maintain
          stable eye pressure, but if it cannot flow properly, intraocular pressure rises
          and can damage the optic nerve. Over time, this pressure damages the retina and
          optic nerve, leading to impaired vision or even blindness if untreated.
        </p>
        <p className="text-black leading-relaxed">
          Because glaucoma often progresses silently without obvious early symptoms,
          many pets are not diagnosed until the disease is in an advanced stage. It is
          considered an ophthalmic emergency and requires prompt veterinary care.
        </p>
      </section>

      {/* Symptoms */}
      <section>
        <h2 className="text-2xl font-bold text-black mb-3">Symptoms</h2>
        <p className="text-black leading-relaxed mb-3">
          Common signs of glaucoma in dogs include:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
          <li>Swollen or enlarged eyeball</li>
          <li>Redness or bloodshot appearance</li>
          <li>Swelling around the eye</li>
          <li>Cloudy eyes or vision impairment</li>
          <li>Blurred or hazy pupil appearance</li>
          <li>Noticeable increase or decrease in tear production</li>
        </ul>
        <p className="text-black leading-relaxed mt-4">
          <span className="font-semibold">Tip:</span> Some of these symptoms can resemble other
          eye conditions, so do not attempt to diagnose at home. Always consult a veterinarian
          if you notice any sudden or unusual changes in your dog’s eyes.
        </p>
      </section>

      {/* Diagnosis */}
      <section>
        <h2 className="text-2xl font-bold text-black mb-3">Diagnosis</h2>
        <p className="text-black leading-relaxed mb-3">
          Veterinarians typically use the following methods to diagnose glaucoma:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
          <li>
            <span className="font-semibold">Ophthalmoscopic examination:</span> A light is used
            to check for a greenish or cloudy tint inside the eye and to observe changes in eye structure.
          </li>
          <li>
            <span className="font-semibold">Palpation (pressure test):</span> The vet gently presses
            the eye to feel for abnormal firmness, which indicates elevated pressure.
          </li>
          <li>
            <span className="font-semibold">Tonometry (eye pressure test):</span> A device may be
            used to measure intraocular pressure accurately. This is the gold standard for diagnosis.
          </li>
        </ul>
      </section>

      {/* Treatment */}
      <section>
        <h2 className="text-2xl font-bold text-black mb-3">Treatment</h2>
        <p className="text-black leading-relaxed mb-3">
          The treatment approach depends on the cause and severity of the glaucoma:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
          <li>
            <span className="font-semibold">Medication:</span> Eye drops or oral medications may be
            prescribed to reduce fluid production, promote fluid drainage, or lower intraocular pressure.
          </li>
          <li>
            <span className="font-semibold">Surgery:</span> In cases where medication is ineffective or
            if tumors or severe structural issues are detected, surgical intervention may be required to
            relieve pressure or remove the affected eye to prevent pain and further complications.
          </li>
        </ul>
        <div className="mt-4 rounded-lg border border-black/15 bg-white p-4">
          <p className="text-black leading-relaxed">
            <span className="font-semibold">Important:</span> Glaucoma is a chronic condition. Even after
            successful treatment, lifelong monitoring is often necessary to prevent recurrence or manage
            pressure levels.
          </p>
        </div>
      </section>

      {/* Prevention & Ongoing Care */}
      <section>
        <h2 className="text-2xl font-bold text-black mb-3">Prevention &amp; Ongoing Care</h2>
        <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
          <li>
            <span className="font-semibold">Routine Eye Exams:</span> Because glaucoma is difficult to
            detect in its early stages, dogs with a higher genetic risk (such as certain breeds like
            Cocker Spaniels, Basset Hounds, and Beagles) should receive regular eye check-ups.
          </li>
          <li>
            <span className="font-semibold">Monitor for Changes:</span> Keep an eye out for subtle signs
            such as rubbing the face, light sensitivity, or reluctance to play — all of which could
            indicate eye discomfort.
          </li>
          <li>
            <span className="font-semibold">Healthy Lifestyle:</span> Maintaining a balanced diet rich in
            antioxidants and essential fatty acids can support overall eye health and potentially reduce
            risk factors.
          </li>
        </ul>
      </section>

      {/* Summary */}
      <section>
        <h2 className="text-2xl font-bold text-black mb-3">Summary</h2>
        <p className="text-black leading-relaxed">
          Glaucoma is a progressive eye disease that can lead to irreversible blindness if left untreated.
          Early detection through regular veterinary check-ups is the best way to protect your dog’s vision.
          If diagnosed early, many dogs live comfortable, happy lives with proper treatment and ongoing care.
        </p>
      </section>
    </div>
  ), // <-- close the JSX parenthesis AND keep this comma
},     // <-- close the glaucoma object AND keep this comma (next disease follows)


  "pyometra": {
    title: "Pyometra",
    rich: (
      <div className="space-y-10">
        {/* Overview */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Overview</h2>
          <p className="text-black leading-relaxed mb-4">
            Pyometra is a serious and potentially life-threatening uterine infection that
            occurs when bacteria enter the uterus and cause pus to accumulate inside. It is
            most commonly seen in older, unspayed female dogs and is strongly linked to
            hormonal changes after repeated heat cycles without pregnancy.
          </p>
          <p className="text-black leading-relaxed">
            Because the uterus is normally sterile, the presence of bacteria causes
            inflammation and pus buildup. Over time, the uterus can become greatly
            enlarged, and if left untreated, the infection may spread into the bloodstream,
            causing sepsis and potentially death.
          </p>
        </section>

        {/* Symptoms */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Common Symptoms</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>Increased water consumption</li>
            <li>Increased urination</li>
            <li>Loss of appetite</li>
          </ul>
          <p className="text-black leading-relaxed mt-4">
             Additional signs may include lethargy, vomiting, vaginal discharge
            (sometimes foul-smelling), and abdominal swelling. These symptoms can develop
            gradually but should always be treated as an emergency.
          </p>
        </section>

        {/* Diagnosis */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Diagnostic Methods</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Blood tests:</span> White blood cell count
              and globulin levels are typically elevated due to infection.
            </li>
            <li>
              <span className="font-semibold">X-ray:</span> Used to check the size and
              shape of the uterus and detect fluid buildup.
            </li>
            <li>
              <span className="font-semibold">Ultrasound:</span> Provides detailed
              information about uterine size, wall thickness, and the amount of pus or
              fluid present.
            </li>
          </ul>
          <p className="text-black leading-relaxed mt-3">
            Veterinarians often combine these diagnostic tools to confirm the presence and
            severity of pyometra.
          </p>
        </section>

        {/* Treatment */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Treatment Options</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Surgical removal (ovariohysterectomy):</span>{" "}
              The most effective treatment. If caught early, prognosis is excellent.
              However, if infection has spread beyond the uterus, surgery becomes more
              complicated and risky.
            </li>
            <li>
              <span className="font-semibold">Supportive care:</span> Antibiotics, IV
              fluids, and pain relief are usually provided. In rare mild cases, medical
              management may be attempted, but recurrence rates are high.
            </li>
          </ul>
        </section>

        {/* Prevention */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Prevention &amp; Long-Term Management</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Spaying (ovariohysterectomy):</span> The only
              guaranteed way to prevent pyometra is to spay your dog before or shortly
              after sexual maturity.
            </li>
            <li>
              Dogs that have never given birth or that have not reproduced for a long time
              after a previous pregnancy are at higher risk.
            </li>
            <li>
              If breeding is not part of your long-term plan, spaying early is highly
              advisable.
            </li>
          </ul>
          <div className="mt-4 rounded-lg border border-black/15 bg-white p-4">
            <p className="text-black leading-relaxed">
               <span className="font-semibold">Additional Insight:</span> Pyometra is
              often underdiagnosed in its early stages because symptoms can be vague (mild
              lethargy or subtle appetite changes). Pet owners should monitor unspayed
              dogs closely, especially in the weeks following a heat cycle, when the
              uterus is most vulnerable to infection.
            </p>
          </div>
        </section>
      </div>
    ),
  },

  "cryptorchidism": {
    title: "Cryptorchidism",
    rich: (
      <div className="space-y-10">
        {/* Overview */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Overview</h2>
          <p className="text-black leading-relaxed mb-4">
            Cryptorchidism is a condition in which one or both testicles fail to descend
            normally into the scrotum and instead remain in the abdominal cavity or inguinal
            canal. This abnormal positioning can lead to sexual dysfunction and reproductive
            issues.
          </p>
          <p className="text-black leading-relaxed">
            While undescended testicles may still produce sperm and hormones, their location
            makes visual detection difficult. Because of this, cryptorchidism is often
            discovered during a neutering (castration) surgery rather than through external
            examination.
          </p>
        </section>

        {/* Symptoms */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Common Symptoms</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>Absence of one or both testicles in the scrotum</li>
            <li>Aggressive or abnormal behavior</li>
            <li>Changes in habits (e.g., increased marking, mounting)</li>
            <li>Infertility or decreased reproductive function</li>
          </ul>
          <p className="text-black leading-relaxed mt-4">
            These symptoms can vary in severity. In some cases, the dog may appear otherwise
            healthy but still face significant risks for complications if untreated.
          </p>
        </section>

        {/* Diagnosis */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Diagnosis Methods</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Palpation (Physical Examination):</span> A vet
              examines the scrotum and abdomen to determine if testicles are undescended or
              misplaced.
            </li>
            <li>
              <span className="font-semibold">hCG Stimulation Test:</span> Measures
              testosterone levels in the blood to assess testicular function.
            </li>
            <li>
              <span className="font-semibold">Ultrasound:</span> Imaging is used to locate the
              retained testicles within the abdomen or inguinal canal.
            </li>
            <li>
              <span className="font-semibold">Timing of Diagnosis:</span> Diagnosis is usually
              confirmed at around 6 months of age, when testicular descent should be complete.
            </li>
          </ul>
          <p className="text-black leading-relaxed mt-3">
            <span className="font-semibold">Note:</span> Cryptorchidism is a developmental
            condition, not caused by injury or infection. It is typically congenital and may
            have a genetic component.
          </p>
        </section>

        {/* Treatment */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Treatment Options</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Orchidopexy (Surgical Fixation):</span> A procedure
              that relocates the testicles into the scrotum.
            </li>
            <li>
              <span className="font-semibold">Hormonal Therapy:</span> In dogs under 4 months,
              hormone injections (such as hCG 100–1000 IU every 2 weeks) may be attempted,
              though they are generally ineffective after this age.
            </li>
            <li>
              <span className="font-semibold">Castration (Neutering):</span> Surgical removal of
              the undescended testicles is strongly recommended. This eliminates the high risk
              of testicular cancer and other reproductive diseases.
            </li>
          </ul>
          <p className="text-black leading-relaxed mt-3">
            Early treatment leads to the best outcomes. Once tumors or other complications
            develop, treatment becomes more complex and prognosis worsens.
          </p>
        </section>

        {/* Prevention */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Prevention and Management</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Neutering:</span> The most effective way to prevent
              complications. Retained testicles can become cancerous up to 10 times more often
              than normal ones.
            </li>
            <li>
              <span className="font-semibold">Breeding Caution:</span> Because the condition is
              likely hereditary, affected dogs should not be bred.
            </li>
          </ul>
          <div className="mt-4 rounded-lg border border-black/15 bg-white p-4">
            <p className="text-black leading-relaxed">
              <span className="font-semibold">Additional Insight:</span> If untreated, retained
              testicles may cause hormonal imbalances, tumors, and behavioral changes. Regular
              check-ups during puppyhood help detect the condition early.
            </p>
          </div>
        </section>
      </div>
    ),
  },

  "pancreatitis": {
    title: "Pancreatitis",
    rich: (
      <div className="space-y-10">
        {/* Overview */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Overview</h2>
          <p className="text-black leading-relaxed mb-4">
            Pancreatitis in dogs is an inflammatory condition of the pancreas, a vital organ
            responsible for producing digestive enzymes and hormones such as insulin. When
            inflammation occurs, these enzymes may leak and begin damaging the pancreas and
            surrounding organs, leading to severe pain and complications.
          </p>
          <p className="text-black leading-relaxed">
            Once a dog develops pancreatitis, it is more likely to recur, making long-term
            management, proper diet, and health monitoring essential.
          </p>
        </section>

        {/* Symptoms */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Symptoms</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>Loss of appetite</li>
            <li>Lethargy or decreased energy</li>
            <li>Weight loss</li>
            <li>Vomiting and diarrhea</li>
            <li>Dehydration and difficulty breathing</li>
          </ul>
          <p className="text-black leading-relaxed mt-4">
            <span className="font-semibold">⚠️ Note:</span> Some dogs may only show vague signs,
            such as reduced enthusiasm for food or occasional vomiting. Recognizing these subtle
            symptoms early can help prevent severe complications.
          </p>
        </section>

        {/* Diagnosis */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Diagnosis Methods</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Blood tests:</span> Check for elevated pancreatic
              enzyme levels and other inflammation markers.
            </li>
            <li>
              <span className="font-semibold">Imaging (X-rays / Ultrasound):</span> Assess the size,
              shape, and condition of the pancreas and detect abnormalities or secondary organ
              involvement.
            </li>
          </ul>
          <p className="text-black leading-relaxed mt-3">
            <span className="font-semibold">💡 Tip:</span> Vets often combine bloodwork with imaging
            for a more accurate diagnosis, since early-stage pancreatitis can sometimes be missed by
            blood tests alone.
          </p>
        </section>

        {/* Treatment */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Treatment Methods</h2>
          <p className="text-black leading-relaxed mb-3">
            There is currently no single cure for pancreatitis. Treatment focuses on relieving
            symptoms, managing inflammation, and supporting the dog’s overall health.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Fluid therapy:</span> Reduces inflammation, prevents
              dehydration, and supplies essential nutrients.
            </li>
            <li>
              <span className="font-semibold">Medications:</span> Anti-nausea drugs, pain relievers,
              and appetite stimulants are administered as needed.
            </li>
          </ul>
          <p className="text-black leading-relaxed mt-3">
            <span className="font-semibold">💡 Note:</span> Hospitalization is often required in
            moderate to severe cases for continuous fluid support and monitoring.
          </p>
        </section>

        {/* Prevention */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Prevention and Management</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Dietary Management:</span> Feed a balanced, low-fat
              diet and avoid high-fat table scraps or human food.
            </li>
          </ul>
          <p className="text-black leading-relaxed mt-3">
            <span className="font-semibold">💡 Tip:</span> Many cases are linked to dietary causes —
            especially sudden ingestion of fatty foods (like bacon or fried leftovers). Prevention
            through strict diet control is the most effective long-term strategy.
          </p>
        </section>

        {/* Summary */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Summary</h2>
          <p className="text-black leading-relaxed">
            Pancreatitis is a serious but manageable disease if detected early and treated
            appropriately. With dietary control, regular vet check-ups, and close monitoring of any
            digestive changes, most dogs can recover and live healthy lives. Early intervention
            greatly improves recovery chances and helps prevent complications such as diabetes or
            chronic pancreatic insufficiency.
          </p>
        </section>
      </div>
    ),
  },

  
  "anal-sac-inflammation": {
    title: "Anal Sac Inflammation",
    rich: (
      <div className="space-y-10">
        {/* Overview */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Overview</h2>
          <p className="text-black leading-relaxed mb-4">
            Anal sacculitis is a common condition in dogs caused by bacterial infection of the anal
            sacs — two small glands located on either side of the anus. These sacs produce a
            scent-marking fluid, but when the fluid fails to drain properly, it can accumulate,
            become infected, and cause inflammation and discomfort.
          </p>
          <p className="text-black leading-relaxed">
            Because dogs rely heavily on scent for communication, these glands are very active,
            which is why this condition is frequently seen.
          </p>
        </section>

        {/* Symptoms */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Symptoms</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>Dragging or scooting their bottom across the floor</li>
            <li>Excessive licking or biting around the anal area</li>
            <li>Swelling or redness near the anus</li>
            <li>Pain or discomfort during bowel movements</li>
          </ul>
          <p className="text-black leading-relaxed mt-4">
            <span className="font-semibold">Extra Tip:</span> Dogs often show subtle signs of
            discomfort before the infection becomes severe, such as restlessness or reluctance to
            sit. Early detection can prevent more serious complications like abscess formation.
          </p>
        </section>

        {/* Diagnosis */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Diagnosis</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Physical Examination:</span> The veterinarian checks
              the size of the anal sacs, the presence of pain, and signs of swelling or discharge.
            </li>
            <li>
              <span className="font-semibold">Secretion Analysis:</span> A sample of the glandular
              fluid may be collected to identify bacterial infection and determine the type of
              bacteria involved.
            </li>
          </ul>
        </section>

        {/* Treatment */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Treatment Options</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Manual Expression:</span> The veterinarian manually
              empties the contents of the anal sacs to relieve pressure and clear the infection.
            </li>
            <li>
              <span className="font-semibold">Medication:</span> If infection is present, antibiotics
              or anti-inflammatory drugs may be prescribed to control bacteria and reduce swelling.
            </li>
            <li>
              <span className="font-semibold">Surgical Removal:</span> In chronic or severe cases
              where the sacs repeatedly fail to empty or become severely infected, surgical removal
              of the anal sacs (anal sacculectomy) may be recommended.
            </li>
          </ul>
          <div className="mt-4 rounded-lg border border-black/15 bg-white p-4">
            <p className="text-black leading-relaxed">
              <span className="font-semibold"> Note:</span> Most dogs recover quickly with
              treatment, but recurring infections can occur if the underlying cause (such as chronic
              soft stool, allergies, or obesity) isn’t addressed.
            </p>
          </div>
        </section>

        {/* Prevention */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Prevention &amp; Management</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Weight Management:</span> Overweight dogs are more
              likely to experience anal sac issues. Maintaining a healthy weight through proper diet
              and exercise reduces the risk.
            </li>
            <li>
              <span className="font-semibold">Dietary Fiber:</span> Adding fiber to the diet can
              firm up the stool, which helps naturally empty the anal sacs during bowel movements.
            </li>
            <li>
              <span className="font-semibold">Nutritional Supplements:</span> Omega-3 fatty acids may
              help reduce inflammation and improve gland health.
            </li>
          </ul>
          <p className="text-black leading-relaxed mt-3">
            <span className="font-semibold"> Additional Tip:</span> Regular vet check-ups and
            periodic anal gland expressions (especially for breeds prone to gland issues) are
            excellent preventive measures.
          </p>
        </section>
      </div>
    ),
  },

  "hypothyroidism": {
    title: "Hypothyroidism",
    rich: (
      <div className="space-y-10">
        {/* Overview */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Overview</h2>
          <p className="text-black leading-relaxed mb-4">
            Hypothyroidism is a condition where the thyroid gland produces an insufficient amount of
            hormones responsible for regulating growth and metabolism. These hormones (mainly T3 and
            T4) are crucial for maintaining healthy body functions, including energy production,
            temperature regulation, and skin and coat condition.
          </p>
          <p className="text-black leading-relaxed">
            When hormone levels drop, dogs may show signs such as hair thinning or dry, flaky skin.
            Weight gain often occurs despite normal eating habits. Although hypothyroidism is rare in
            cats, it is relatively common in dogs, particularly in middle-aged to older individuals.
          </p>
        </section>

        {/* Symptoms */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Common Symptoms</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>Persistent fatigue or low energy</li>
            <li>Noticeable weight gain without increased food intake</li>
            <li>Dry, flaky, or thickened skin</li>
            <li>Hair loss (especially around the tail, back, and hindquarters)</li>
            <li>Constipation</li>
          </ul>
          <p className="text-black leading-relaxed mt-3">
            These symptoms develop gradually and are often mistaken for signs of aging, which is why
            regular veterinary check-ups are crucial.
          </p>
        </section>

        {/* Diagnosis */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Diagnosis</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Blood Tests:</span> A veterinarian will examine blood
              samples to measure thyroid hormone levels (T3 and T4).
            </li>
            <li>
              <span className="font-semibold">TSH Measurement:</span> Thyroid-stimulating hormone
              (TSH) levels are also checked. High TSH with low T3/T4 usually confirms hypothyroidism.
            </li>
            <li>
              Additional diagnostic imaging or tests may be recommended to rule out other metabolic
              or endocrine disorders.
            </li>
          </ul>
        </section>

        {/* Treatment */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Treatment</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Hormone Replacement Therapy:</span> Administering
              synthetic thyroid hormone is the most common and effective treatment. This helps
              restore hormone balance and improves symptoms.
            </li>
            <li>
              <span className="font-semibold">Ongoing Monitoring:</span> Because dosage needs can
              change over time, regular blood tests are essential to ensure the treatment remains
              effective.
            </li>
          </ul>
          <div className="mt-4 rounded-lg border border-black/15 bg-white p-4">
            <p className="text-black leading-relaxed">
              <span className="font-semibold">Extra Tip:</span> Once treatment begins, most dogs show
              noticeable improvement in energy levels, skin condition, and weight within a few
              weeks. However, hypothyroidism is a lifelong condition, and medication must be
              continued indefinitely.
            </p>
          </div>
        </section>

        {/* Prevention */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Prevention &amp; Management</h2>
          <p className="text-black leading-relaxed">
            There is currently no known method to prevent hypothyroidism, as it is typically caused
            by immune-mediated destruction of the thyroid gland or genetic predisposition. The best
            approach is early detection through regular veterinary check-ups — especially for
            middle-aged and senior dogs.
          </p>
          <p className="text-black leading-relaxed mt-3">
            Proactive care such as maintaining a balanced diet, regular exercise, and monitoring for
            subtle behavioral or physical changes can also support overall endocrine health.
          </p>
        </section>
      </div>
    ),
  },
  

  "external-parasites": {
    title: "External Parasites",
    rich: (
      <div className="space-y-10">
        {/* Overview */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Overview</h2>
          <p className="text-black leading-relaxed mb-4">
            External parasites such as mites, fleas, and ticks can infest a dog’s skin,
            causing irritation, inflammation, and secondary infections. These parasites
            feed on the animal’s blood or skin debris, often damaging the skin surface
            and creating pathways for bacteria to enter.
          </p>
          <p className="text-black leading-relaxed">
            Beyond skin issues, infestations can also lead to systemic health problems
            if left untreated — for example, anemia, allergic reactions, or transmission
            of diseases.
          </p>
        </section>

        {/* Symptoms */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Symptoms</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>Persistent itching and scratching</li>
            <li>Redness, rashes, or skin lesions</li>
            <li>Hair loss or thinning of fur</li>
            <li>Small scabs, crusts, or inflamed patches</li>
            <li>Visible parasites (in severe cases)</li>
          </ul>
          <p className="text-black leading-relaxed mt-3">
            <span className="font-semibold">Helpful Tip:</span> Early signs of infestation
            often include excessive licking, chewing, or rubbing against objects. Dogs may
            also become more irritable or restless due to constant discomfort.
          </p>
        </section>

        {/* Diagnosis */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Diagnosis</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Clinical Examination:</span> Your vet may ask
              questions about your dog’s recent activities (e.g., visits to parks, contact
              with other animals) to determine possible exposure.
            </li>
            <li>
              <span className="font-semibold">Physical Inspection:</span> Parasites can sometimes
              be seen with the naked eye, but a thorough skin examination — including combing for
              flea dirt or using a magnifying lens — helps confirm infestation.
            </li>
            <li>
              <span className="font-semibold">Skin Scraping or Cytology:</span> In some cases, a
              small sample of skin is examined under a microscope to identify the type of parasite
              and any secondary infections.
            </li>
          </ul>
        </section>

        {/* Treatment */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Treatment</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Removal and Disinfection:</span> If parasites are
              localized, they can be removed manually followed by careful disinfection of the
              affected area.
            </li>
            <li>
              <span className="font-semibold">Medications:</span> Depending on the situation,
              antiparasitic drugs, antibiotics (if secondary infection occurs), or
              anti-inflammatory treatments may be prescribed.
            </li>
            <li>
              <span className="font-semibold">Topical Treatments:</span> Medicated shampoos,
              sprays, or spot-on treatments can help eliminate parasites and soothe irritated skin.
            </li>
          </ul>
        </section>

        {/* Prevention */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Prevention &amp; Management</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Environmental Hygiene:</span> Regular cleaning of
              your dog’s living space — including bedding, toys, and carpets — is crucial.
              Parasites and their eggs can survive for weeks in the environment.
            </li>
            <li>
              <span className="font-semibold">Preventive Medications:</span> Use monthly parasite
              prevention products (topical or oral) recommended by your veterinarian. These not
              only kill existing parasites but also prevent new infestations.
            </li>
            <li>
              <span className="font-semibold">Regular Grooming &amp; Checks:</span> After walks,
              hikes, or visits to areas where parasites thrive (like tall grass or dog parks),
              inspect your dog’s skin and coat carefully. Bathing with gentle, vet-approved
              shampoo can also help prevent infestations.
            </li>
          </ul>
          <div className="mt-4 rounded-lg border border-black/15 bg-white p-4">
            <p className="text-black leading-relaxed">
              <span className="font-semibold">Expert Insight:</span> Even indoor dogs are at risk —
              parasites can hitch a ride on human clothing or other pets. Regular preventive care is
              much easier and safer than treating a full-blown infestation later.
            </p>
          </div>
        </section>
      </div>
    ),
  },


  "malassezia-dermatitis": {
    title: "Malassezia Dermatitis",
    rich: (
      <div className="space-y-10">
        {/* Overview */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Overview</h2>
          <p className="text-black leading-relaxed mb-4">
            Malassezia dermatitis is a common skin condition in dogs caused by{" "}
            <span className="font-semibold">Malassezia</span>, a type of yeast that thrives on oils and
            fats naturally produced by the skin. When these yeasts overgrow — often in areas like the
            ears, paws, or skin folds — they can worsen skin inflammation or trigger secondary
            infections. This condition is frequently associated with intense itching and discomfort.
          </p>
          <p className="text-black leading-relaxed">
            It often occurs in dogs with underlying issues such as allergies, hormonal imbalances, or
            compromised skin barriers, as these conditions create an environment where Malassezia can
            thrive. Prompt treatment is crucial because untreated infections may spread, become
            chronic, and significantly reduce a dog’s quality of life.
          </p>
        </section>

        {/* Symptoms */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Common Symptoms</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>Frequent head shaking</li>
            <li>Scratching or pawing at the ears</li>
            <li>Excessive ear discharge or buildup</li>
            <li>Dark brown or waxy ear debris with a musty or sour odor</li>
            <li>Inflammation or redness in areas where the skin is irritated</li>
            <li>Red rashes or lesions</li>
            <li>Persistent, severe itching</li>
          </ul>
          <p className="text-black leading-relaxed mt-3">
            These signs are often mistaken for simple allergies or ear infections, but they usually
            indicate an overgrowth of yeast that needs targeted treatment.
          </p>
        </section>

        {/* Diagnosis */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Diagnosis</h2>
          <p className="text-black leading-relaxed mb-3">
            <span className="font-semibold">Microscopic Examination:</span> A veterinarian collects skin or ear
            samples and examines them under a microscope to identify the presence of Malassezia. Even
            detecting a single yeast cell in a symptomatic area is enough to confirm the need for
            treatment.
          </p>
          <p className="text-black leading-relaxed">
            Sometimes, additional tests may be recommended to check for underlying conditions (such as
            allergies or hormonal issues) that might be contributing to recurring infections.
          </p>
        </section>

        {/* Treatment */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Treatment</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Antifungal Therapy:</span> Medicated shampoos, topical sprays, or
              ointments containing antifungal agents are commonly used to control the infection.
            </li>
            <li>
              <span className="font-semibold">Systemic Treatment:</span> In severe or widespread cases, oral
              antifungal medication may be prescribed.
            </li>
            <li>
              <span className="font-semibold">Supportive Care:</span> Inflammation and itching may be treated
              with anti-inflammatory or soothing medications to help the skin recover.
            </li>
          </ul>
          <p className="text-black leading-relaxed mt-3">
            Because recurrence is common if underlying causes are not addressed, your veterinarian may
            recommend additional treatments like allergy control or hormonal testing.
          </p>
        </section>

        {/* Prevention */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Prevention &amp; Management</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Regular Hygiene:</span> After bathing, make sure to dry your dog
              thoroughly, especially inside the ears and between skin folds, to prevent moisture buildup —
              a key factor in yeast overgrowth.
            </li>
            <li>
              <span className="font-semibold">Routine Checkups:</span> If you notice any unusual symptoms such
              as persistent scratching, unusual odors, or discharge, seek veterinary care promptly.
            </li>
            <li>
              <span className="font-semibold">Lifestyle Support:</span> Balanced nutrition and regular grooming
              can help maintain healthy skin and strengthen the skin’s natural defense barrier.
            </li>
          </ul>
          <div className="mt-4 rounded-lg border border-black/15 bg-white p-4">
            <p className="text-black leading-relaxed">
              <span className="font-semibold">Extra Insight:</span> Malassezia infections are often secondary,
              meaning they develop due to another underlying condition. Treating only the yeast without
              addressing the root cause (such as allergies or endocrine disorders) often leads to recurrence.
              Comprehensive care — including addressing predisposing factors — is the most effective way to
              prevent future infections.
            </p>
          </div>
        </section>
      </div>
    ),
  },



  "arthritis": {
    title: "Arthritis",
    rich: (
      <div className="space-y-10">
        {/* Overview */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Overview</h2>
          <p className="text-black leading-relaxed mb-4">
            Arthritis in dogs is an inflammatory condition that develops when a joint or surrounding
            tissues become damaged or worn down, often due to aging or repetitive stress on specific
            parts of the body. As dogs get older, their joints endure continuous use, leading to chronic
            inflammation that causes pain, stiffness, and restricted mobility.
          </p>
          <p className="text-black leading-relaxed">
            This condition is particularly common in senior dogs but can also occur in younger dogs
            following injury or excessive exercise.
          </p>
        </section>

        {/* Symptoms */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Common Symptoms</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>Reluctance or refusal to exercise</li>
            <li>Audible sounds (like cracking or popping) from joints</li>
            <li>Difficulty walking, climbing stairs, or jumping</li>
          </ul>
        </section>

        {/* Diagnosis */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Diagnosis</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Physical Examination:</span> Veterinarians check for
              signs of pain, stiffness, or discomfort by gently manipulating the affected joints.
            </li>
            <li>
              <span className="font-semibold">Blood Tests:</span> Bloodwork can reveal elevated
              inflammation markers, helping rule out other potential causes.
            </li>
            <li>
              <span className="font-semibold">X-ray Imaging:</span> Radiographs allow visualization of
              the joint’s structure, revealing degeneration, bone changes, or abnormal formations.
            </li>
          </ul>
        </section>

        {/* Treatment */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Treatment Options</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Medication:</span> Nonsteroidal anti-inflammatory drugs
              (NSAIDs) and corticosteroids can help reduce inflammation and pain. However, long-term
              use may have side effects, so continuous monitoring and dosage adjustments are crucial.
            </li>
            <li>
              <span className="font-semibold">Rehabilitation Therapy:</span> Hydrotherapy (such as
              underwater treadmills) and laser therapy are commonly used to strengthen muscles and
              improve mobility. These treatments enhance joint support and slow disease progression.
            </li>
          </ul>
          <div className="mt-4 rounded-lg border border-black/15 bg-white p-4">
            <p className="text-black leading-relaxed">
              <span className="font-semibold">Additional Note:</span> Early intervention significantly
              improves quality of life. Combining medical treatment with physiotherapy often leads to
              better outcomes than relying on medication alone.
            </p>
          </div>
        </section>

        {/* Prevention & Management */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Prevention &amp; Management</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Weight Management:</span> Rapid weight gain puts
              unnecessary stress on joints. Maintaining a healthy weight through portion control and
              regular exercise is essential.
            </li>
            <li>
              <span className="font-semibold">Heat Therapy &amp; Massage:</span> For mild or
              early-stage arthritis, applying gentle heat and performing therapeutic massages can help
              relax muscles and reduce stiffness before increasing exercise levels.
            </li>
            <li>
              <span className="font-semibold">Home Environment Adjustments:</span> Use cushioned
              bedding, non-slip flooring, and ramps to reduce physical strain. These simple changes can
              prevent further joint damage and make daily movement more comfortable.
            </li>
          </ul>
          <p className="text-black leading-relaxed mt-3">
            <span className="font-semibold">Helpful Tip:</span> Joint supplements containing
            glucosamine and chondroitin may support cartilage health and slow down degeneration when
            introduced early, especially in breeds prone to arthritis.
          </p>
        </section>
      </div>
    ),
  },
  

  "urolithiasis": {
    title: "Urolithiasis",
    rich: (
      <div className="space-y-10">
        {/* Overview */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Overview</h2>
          <p className="text-black leading-relaxed mb-4">
            Urinary tract stones in dogs occur when mineral crystals build up in the bladder or
            urinary tract and form hard stones. These stones can develop due to several factors,
            such as excessive mineral intake from diet, insufficient water consumption, or the body's
            inability to flush out waste efficiently.
          </p>
          <p className="text-black leading-relaxed mb-4">
            In some cases, bacterial infections in the bladder can trigger stone formation.
            Additionally, genetic predisposition can increase the risk, especially in certain
            breeds. Once formed, stones can irritate the urinary tract, cause inflammation,
            and lead to pain or blockages.
          </p>
        </section>

        {/* Symptoms */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Common Symptoms</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Blood in urine (hematuria):</span> Often visible as
              pink or red discoloration in the urine.
            </li>
            <li>
              <span className="font-semibold">Frequent urination:</span> Dogs may attempt to urinate
              more often, but only pass small amounts.
            </li>
            <li>
              <span className="font-semibold">Palpable lump near the bladder:</span> A firm mass may
              sometimes be felt in the lower abdomen.
            </li>
          </ul>
          <p className="text-black leading-relaxed mt-4">
            ⚠️ If you observe these signs, prompt veterinary attention is essential, as untreated
            stones can lead to urinary obstruction — a potentially life-threatening emergency.
          </p>
        </section>

        {/* Diagnosis */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Diagnosis</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Ultrasound examination:</span> Imaging tests help
              determine the presence, size, number, and location of stones in the bladder or urinary
              tract.
            </li>
            <li>
              <span className="font-semibold">Blood and urine tests:</span> Biochemical analysis
              checks kidney function and evaluates the likelihood of stone formation. Elevated
              kidney enzymes or specific minerals in the urine may confirm the diagnosis and guide
              treatment decisions.
            </li>
          </ul>
        </section>

        {/* Treatment */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Treatment Options</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Stone Dissolution (Medical Dissolution):</span> Some
              stones, such as struvite stones, form in alkaline urine and can be dissolved by
              dietary modification or medications that acidify the urine. This method is
              non-invasive but requires time and strict compliance with the treatment plan.
            </li>
            <li>
              <span className="font-semibold">Surgical Removal (Cystotomy):</span> Stones composed
              of calcium oxalate or other hard-to-dissolve materials often require surgical removal.
              While these stones are typically smaller than struvite stones, they can cause sharp
              pain or bleeding as they pass, making surgery necessary in many cases.
            </li>
          </ul>
          <div className="mt-4 rounded-lg border border-black/15 bg-white p-4">
            <p className="text-black leading-relaxed">
              🩺 <span className="font-semibold">Additional Insight:</span> In some cases, a
              combination of treatments — such as antibiotics for infection, dietary changes, and
              fluid therapy — is used to both remove the stones and prevent recurrence.
            </p>
          </div>
        </section>

        {/* Prevention */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Prevention &amp; Long-Term Care</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Adequate Hydration:</span> Always ensure your dog has
              access to plenty of clean, fresh water. This helps dilute the urine, making it less
              likely for crystals to form and reducing the risk of future stone development.
            </li>
            <li>
              <span className="font-semibold">Nutritional Management:</span> The type of diet your
              dog receives can significantly influence the risk of stone formation. Veterinarians
              may recommend a prescription urinary diet formulated to regulate urinary pH and
              mineral balance, reducing the recurrence of stones.
            </li>
          </ul>
          <p className="text-black leading-relaxed mt-3">
            💡 <span className="font-semibold">Pro Tip:</span> Regular check-ups and urine tests are
            highly recommended for dogs with a history of urinary stones. Early detection of crystal
            formation can prevent full-blown stone development and avoid more invasive treatments.
          </p>
        </section>

        {/* Summary */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Summary</h2>
          <p className="text-black leading-relaxed">
            Urolithiasis is a fairly common but potentially serious condition in dogs. With early
            detection, proper treatment, and consistent preventive care — especially focused on
            hydration and diet — most dogs recover well and live healthy, comfortable lives.
          </p>
        </section>
      </div>
    ),
  },



  "oral-tumors": {
    title: "Oral Tumors",
    rich: (
      <div className="space-y-10">
        {/* Overview */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Overview</h2>
          <p className="text-black leading-relaxed mb-4">
            Oral tumors are abnormal growths that develop inside a dog’s mouth, including the gums,
            lips, tongue, or inner cheeks. They can be{" "}
            <span className="font-semibold">benign (non-cancerous)</span> or{" "}
            <span className="font-semibold">malignant (cancerous)</span>.
          </p>
          <p className="text-black leading-relaxed mb-4">
            Benign tumors include epulis (gum growths), fibromas, and papillomas, which grow slowly
            and often do not spread.
          </p>
          <p className="text-black leading-relaxed mb-4">
            Malignant tumors include melanoma, squamous cell carcinoma, and fibrosarcoma. These can
            invade surrounding tissues and may spread (metastasize) to other parts of the body.
          </p>
          <p className="text-black leading-relaxed">
            Because the mouth is constantly exposed to bacteria, food debris, and trauma from chewing,
            tumors in this area can develop rapidly and cause significant discomfort or health
            problems if left untreated.
          </p>
        </section>

        {/* Symptoms */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Common Symptoms</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>Swelling or thickening of the gums, tongue, or inner mouth</li>
            <li>Excessive drooling or saliva</li>
            <li>Frequent opening of the mouth or difficulty keeping it closed</li>
            <li>Difficulty chewing or swallowing food</li>
            <li>Bleeding from the gums or mouth</li>
            <li>Dark, raised, or unusual growths on the oral mucosa</li>
          </ul>
          <p className="text-black leading-relaxed mt-4">
            💡 <span className="font-semibold">Additional Insight:</span> Many owners mistake early
            oral tumors for simple gum inflammation or injury. Regularly checking inside your dog’s
            mouth can help detect changes before they become severe.
          </p>
        </section>

        {/* Diagnosis */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Diagnosis</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Oral Examination:</span> A veterinarian inspects the
              inside of the mouth for masses, swelling, or abnormal growths and assesses their size,
              shape, and location.
            </li>
            <li>
              <span className="font-semibold">Biopsy (Tissue Sampling):</span> A small portion of the
              tumor is collected and examined under a microscope. This helps determine whether the
              tumor is benign or malignant and guides treatment decisions.
            </li>
            <li>
              <span className="font-semibold">Imaging (X-rays or CT scans):</span> These tests can
              reveal how deeply the tumor has spread and whether it has invaded bone or other tissues.
            </li>
          </ul>
        </section>

        {/* Treatment */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Treatment</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Surgery:</span> The most common and effective treatment
              involves surgically removing the tumor. If the tumor has spread into the jawbone or
              nearby tissues, more extensive surgery may be required.
            </li>
            <li>
              <span className="font-semibold">Adjunct Therapies:</span> In malignant cases, additional
              treatments like radiation or chemotherapy might be recommended to reduce the risk of
              recurrence or metastasis.
            </li>
          </ul>
          <p className="text-black leading-relaxed mt-3">
            💡 <span className="font-semibold">Helpful Tip:</span> Early-stage oral tumors are usually
            much easier to treat successfully. Advanced cases may require complex surgeries or
            multiple treatment approaches.
          </p>
        </section>

        {/* Prevention & Care */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Prevention &amp; Ongoing Care</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Regular Oral Checks:</span> Because oral tumors are often
              visible, inspecting your dog’s mouth weekly can help catch them early. Look for any
              swelling, discoloration, or unusual growths.
            </li>
            <li>
              <span className="font-semibold">Dental Hygiene:</span> Maintaining good oral health by
              brushing your dog’s teeth and scheduling professional cleanings can reduce irritation
              and inflammation that may contribute to tumor growth.
            </li>
            <li>
              <span className="font-semibold">Routine Vet Visits:</span> Regular veterinary check-ups
              allow for early detection and intervention, which significantly improves treatment
              outcomes.
            </li>
          </ul>
        </section>

        {/* Summary */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Summary</h2>
          <p className="text-black leading-relaxed">
            Oral tumors are one of the more common cancers seen in dogs, especially as they age. While
            some are benign and relatively harmless, malignant tumors can grow aggressively and spread
            quickly. Early detection — through regular oral exams at home and veterinary visits — is
            key to improving prognosis and ensuring your dog’s comfort and quality of life.
          </p>
        </section>
      </div>
    ),
  },



  "esophageal-foreign-body": {
    title: "Esophageal Foreign Body",
    rich: (
      <div className="space-y-10">
        {/* Overview */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Overview</h2>
          <p className="text-black leading-relaxed mb-4">
            An esophageal foreign body refers to a condition in which an object becomes lodged in the
            esophagus — the tube that carries food from the mouth to the stomach. This often happens
            because dogs have a natural instinct to chew and swallow objects they find, sometimes even
            things that are not food.
          </p>
          <p className="text-black leading-relaxed mb-4">
            When a foreign object blocks the esophagus, food and water cannot pass through normally.
            In severe cases, the blockage may completely obstruct the passage, preventing anything from
            reaching the stomach.
          </p>
          <p className="text-black leading-relaxed">
            This condition is considered an <span className="font-semibold">emergency</span> because it
            can quickly lead to complications such as tissue damage, infection, or even perforation of
            the esophagus. Prompt veterinary attention is essential.
          </p>
        </section>

        {/* Symptoms */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Common Symptoms</h2>
          <p className="text-black leading-relaxed mb-3">
            If a foreign body is stuck in the esophagus, dogs may show the following signs:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>Excessive drooling</li>
            <li>Frequent vomiting or attempts to vomit</li>
            <li>Loss of appetite or reluctance to eat</li>
            <li>Fatigue or lethargy</li>
            <li>Signs of discomfort when swallowing</li>
          </ul>
          <p className="text-black leading-relaxed mt-4">
             <span className="font-semibold">Additional note:</span> Sometimes, the symptoms might
            appear mild at first, but they can worsen quickly. Even partial blockages should be
            treated seriously.
          </p>
        </section>

        {/* Diagnosis */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Diagnosis</h2>
          <p className="text-black leading-relaxed mb-3">
            Veterinarians use a combination of diagnostic methods to locate and evaluate the object:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">X-ray &amp; Radiography:</span> Imaging tests help
              determine the object’s size, shape, and location within the esophagus.
            </li>
            <li>
              <span className="font-semibold">Symptom Evaluation:</span> The vet will also assess the
              dog’s behavior, appetite, vomiting, digestion, and bowel movements to check how severely
              the object is affecting internal functions.
            </li>
          </ul>
          <p className="text-black leading-relaxed mt-3">
            If the object is suspected to have been present for a long time or if complications are
            suspected, additional tests like endoscopy or blood work may be recommended.
          </p>
        </section>

        {/* Treatment */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Treatment</h2>
          <p className="text-black leading-relaxed mb-3">
            Treatment methods depend on the size, type, and location of the foreign body:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Endoscopic Removal:</span> Using an endoscope (a thin,
              flexible tube with a camera and tools), veterinarians can often grasp and remove the
              object without surgery.
            </li>
            <li>
              <span className="font-semibold">Pushing into the Stomach:</span> If removal through the
              esophagus is too difficult or risky, the vet might carefully push the object into the
              stomach, where it can pass naturally or be removed through a safer surgical procedure.
            </li>
            <li>
              <span className="font-semibold">Surgery:</span> In rare and severe cases, such as complete
              obstruction or tissue damage, surgical removal may be necessary.
            </li>
          </ul>
          <div className="mt-4 rounded-lg border border-black/15 bg-white p-4">
            <p className="text-black leading-relaxed">
              <span className="font-semibold">Important:</span> Do not attempt to remove the object
              yourself, as this can cause severe internal injuries.
            </p>
          </div>
        </section>

        {/* Prevention */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Prevention &amp; Management</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Feeding Supervision:</span> Be cautious about what your
              dog eats, especially during puppyhood, when they are more likely to chew on non-food
              items.
            </li>
            <li>
              <span className="font-semibold">Environmental Safety:</span> Keep your home and garden
              free of small objects, bones, toys, or household items that your dog could swallow.
            </li>
            <li>
              <span className="font-semibold">Safe Play:</span> Provide chew toys that are appropriate
              for your dog’s size and breed — too small toys pose a choking and obstruction risk.
            </li>
          </ul>
          <p className="text-black leading-relaxed mt-4">
             <span className="font-semibold">Tip for Pet Parents:</span> If your dog shows signs like
            persistent drooling, gagging, or sudden refusal to eat, seek veterinary help immediately.
            Early intervention can prevent life-threatening complications.
          </p>
        </section>
      </div>
    ),
  },


  "acute-gastritis": {
    title: "Acute Gastritis",
    rich: (
      <div className="space-y-10">
        {/* Overview */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Overview</h2>
          <p className="text-black leading-relaxed mb-4">
            Acute gastritis refers to a sudden inflammation of the stomach lining, often triggered by
            dietary indiscretion, infections, toxins, or ingestion of foreign materials. When a dog
            develops acute gastritis, it frequently experiences repeated vomiting and other
            gastrointestinal distress.
          </p>
          <p className="text-black leading-relaxed">
            In mild cases, the only sign may be occasional vomiting, but if vomiting becomes frequent
            or severe, it can quickly lead to dehydration — particularly dangerous for puppies,
            elderly dogs, or those with underlying health issues.
          </p>
        </section>

        {/* Symptoms */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Symptoms</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>Repeated vomiting (sometimes after eating or drinking)</li>
            <li>Vomit that may contain blood</li>
            <li>Regurgitation of undigested food or frothy bile</li>
            <li>Signs of dehydration such as dry gums, lethargy, or sunken eyes</li>
          </ul>
          <p className="text-black leading-relaxed mt-4">
             <span className="font-semibold">Tip:</span> Keep an eye on the frequency of vomiting.
            Even if your dog seems fine after a single incident, repeated vomiting within 24 hours is
            a sign that veterinary attention is needed.
          </p>
        </section>

        {/* Diagnosis */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Diagnosis</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Physical Examination:</span> The veterinarian will
              palpate the abdomen and check for tenderness, bloating, or abnormal sounds, which can
              indicate inflammation or other underlying issues.
            </li>
            <li>
              <span className="font-semibold">Radiographic Imaging (X-ray):</span> Stomach X-rays
              help detect abnormal gas buildup, foreign objects, or changes in the stomach wall that
              could explain the vomiting.
            </li>
            <li>
              <span className="font-semibold">Blood Tests:</span> In acute gastritis, inflammatory
              markers like CRP (C-reactive protein) may be elevated. Blood tests can also assess
              liver, kidney, and pancreas function to rule out other causes of vomiting.
            </li>
          </ul>
          <p className="text-black leading-relaxed mt-3">
             <span className="font-semibold">Why diagnosis matters:</span> Vomiting alone is a
            symptom shared by many conditions (e.g., pancreatitis, foreign body obstruction, or
            infections). A thorough diagnostic workup ensures that the underlying cause is correctly
            identified and treated.
          </p>
        </section>

        {/* Treatment */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Treatment Methods</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Fasting (Dietary Restriction):</span> For mild cases,
              withholding food for 12–24 hours gives the stomach time to rest and recover. Water
              should still be provided in small, frequent amounts to prevent dehydration.
            </li>
            <li>
              <span className="font-semibold">Inducing Vomiting:</span> If the dog swallowed
              something harmful and it has not yet passed into the intestines, the veterinarian may
              induce vomiting. However, this should only be done by a professional, as improper
              induction can worsen the situation.
            </li>
            <li>
              <span className="font-semibold">Fluid Therapy:</span> In cases of dehydration, IV
              fluids are administered to restore fluid balance and support recovery. Once vomiting
              subsides, the dog is gradually reintroduced to water and a bland diet (e.g., boiled
              chicken and rice).
            </li>
          </ul>
        </section>

        {/* Prevention */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Prevention &amp; Management</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Proper Feeding Practices:</span> Offer high-quality dog
              food and avoid overfeeding. Feed smaller, more frequent meals rather than one large
              meal to reduce stomach stress.
            </li>
            <li>
              <span className="font-semibold">Avoid Sudden Dietary Changes:</span> Introduce new
              foods gradually over several days to allow the digestive system to adapt. Sudden diet
              switches can easily irritate the stomach.
            </li>
            <li>
              <span className="font-semibold">Limit Post-Meal Activity:</span> Prevent intense
              exercise or play immediately after eating. High activity levels can disrupt digestion
              and increase the risk of vomiting.
            </li>
          </ul>
          <p className="text-black leading-relaxed mt-4">
             <span className="font-semibold">Extra insight:</span> Dogs often develop acute
            gastritis after eating spoiled food, garbage, or table scraps. Keeping trash bins secure
            and being cautious with treats or new foods can significantly reduce the risk.
          </p>
        </section>

        {/* Summary */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Summary</h2>
          <p className="text-black leading-relaxed">
            Acute gastritis is a common but potentially serious condition in dogs, marked by vomiting
            and stomach inflammation. While many mild cases resolve with rest and supportive care,
            severe or persistent vomiting requires prompt veterinary attention to prevent dehydration
            and complications. Prevention is largely about careful feeding habits, gradual dietary
            transitions, and monitoring what your dog eats.
          </p>
        </section>
      </div>
    ),
  },



  "chronic-kidney-disease": {
    title: "Chronic Kidney Disease",
    rich: (
      <div className="space-y-10">
        {/* Overview */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Overview</h2>
          <p className="text-black leading-relaxed mb-4">
            Chronic kidney failure occurs when more than 75% of the kidneys’ normal function is lost
            and they can no longer perform their vital roles — such as filtering waste products from
            the blood and producing urine — effectively. Unlike acute kidney failure, which develops
            suddenly, chronic kidney disease (CKD) progresses slowly over time. Once the kidneys lose
            a significant portion of their function, they cannot properly eliminate toxins from the
            body. This buildup of waste leads to uremia, which can cause severe complications and
            eventually affect multiple organs. Without treatment, it can become life-threatening.
          </p>
        </section>

        {/* Symptoms */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Common Symptoms</h2>
          <p className="text-black leading-relaxed mb-3">
            Dogs with chronic kidney failure may show a variety of signs, many of which develop
            gradually:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>Persistent fatigue and lethargy</li>
            <li>Pale gums or mucous membranes due to anemia</li>
            <li>Excessive drooling (hypersalivation)</li>
            <li>Bad breath caused by toxin buildup (uremic breath)</li>
            <li>Loss of appetite and reluctance to eat</li>
            <li>Increased thirst and urination at first, followed later by inability to urinate</li>
            <li>Vomiting or diarrhea</li>
            <li>Severe dehydration</li>
          </ul>
          <p className="text-black leading-relaxed mt-4">
            Additional note: Because the kidneys perform many different functions, the signs can
            vary. Early symptoms are often subtle — such as drinking more water or urinating more
            frequently — so routine health checks are critical for early detection.
          </p>
        </section>

        {/* Diagnosis */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Diagnosis</h2>
          <p className="text-black leading-relaxed mb-3">
            Veterinarians use a combination of tests to confirm CKD and assess its severity:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Blood Tests:</span> Includes complete blood count,
              biochemical profile, and electrolyte analysis to evaluate kidney filtration efficiency
              and detect waste accumulation.
            </li>
            <li>
              <span className="font-semibold">Urinalysis:</span> Helps identify urinary tract
              infections and distinguish them from kidney-related issues.
            </li>
            <li>
              <span className="font-semibold">Imaging (Ultrasound / X-ray):</span> Used to evaluate
              the size and shape of the kidneys and detect stones or structural abnormalities.
            </li>
            <li>
              <span className="font-semibold">Abdominal Ultrasound:</span> Kidneys may appear
              smaller than normal. If cancer or lymphoma is suspected, they may appear enlarged.
            </li>
            <li>
              <span className="font-semibold">Kidney Biopsy:</span> A tissue sample may be taken to
              determine the type of kidney disease or presence of tumors.
            </li>
          </ul>
        </section>

        {/* Treatment */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Treatment Options</h2>
          <p className="text-black leading-relaxed mb-3">
            Although chronic kidney failure cannot be cured, treatments focus on slowing disease
            progression, alleviating symptoms, and improving quality of life:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Dietary Management:</span> Protein restriction
              (2.0–2.2 g/kg/day for dogs) lowers nitrogenous waste buildup. Sodium and phosphorus
              control helps regulate blood pressure and prevent further damage. Monitoring acid-base
              and electrolyte balance is essential.
            </li>
            <li>
              <span className="font-semibold">Fluid Therapy:</span> Encourage water intake. If
              insufficient, subcutaneous or intravenous fluids may be administered to prevent
              dehydration.
            </li>
            <li>
              <span className="font-semibold">Potassium Management:</span> Supplementation may be
              required if low potassium levels or vomiting occur.
            </li>
          </ul>
          <p className="text-black leading-relaxed mt-3">
            Extra insight: Early dietary management can significantly slow disease progression.
            Prescription renal diets are specifically formulated to reduce kidney workload and
            support overall metabolic balance.
          </p>
        </section>

        {/* Prevention */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Prevention &amp; Long-Term Management</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Weight Control:</span> Obesity puts added strain on
              the kidneys. Maintaining a healthy weight with proper exercise and diet reduces risk.
            </li>
            <li>
              <span className="font-semibold">Adequate Hydration:</span> Ensure constant access to
              clean, fresh water to support kidney health.
            </li>
            <li>
              <span className="font-semibold">Medication Caution:</span> Certain drugs can harm the
              kidneys, particularly in older dogs. Always consult your veterinarian before giving
              any medication.
            </li>
          </ul>
          <p className="text-black leading-relaxed mt-4">
            Important tip: Regular blood and urine screenings, especially for senior dogs (7+ years),
            can detect kidney issues before major damage occurs. Early intervention is the most
            effective way to prolong life and maintain quality of life.
          </p>
        </section>
      </div>
    ),
  },



  "epiphora": {
    title: "Epiphora",
    rich: (
      <div className="space-y-10">
        {/* Overview */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Overview</h2>
          <p className="text-black leading-relaxed mb-4">
            Epiphora refers to a condition in which tears that should normally drain from the eyes
            into the nasal cavity instead overflow and continuously stream down the face. This occurs
            when the tear drainage pathway (nasolacrimal duct) is blocked or fails to function properly.
            It is not just a cosmetic issue — constant tear overflow can irritate the skin, promote
            infections, and signal underlying eye or structural problems.
          </p>
        </section>

        {/* Symptoms */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Common Symptoms</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>Continuous tear flow from the eyes</li>
            <li>Reddish or brown discoloration of fur around the eyes (tear staining)</li>
            <li>Swelling or inflammation of the eyelids</li>
            <li>Rubbing or scratching around the eyes due to discomfort</li>
          </ul>
          <p className="text-black leading-relaxed mt-4">
            Additional insight: Tear staining is especially common in small dog breeds with shallow
            eye sockets or narrow tear ducts. Even though it may appear cosmetic, it often indicates
            an underlying medical issue that requires attention.
          </p>
        </section>

        {/* Diagnosis */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Diagnosis</h2>
          <p className="text-black leading-relaxed mb-3">
            Veterinarians diagnose epiphora using a combination of physical and diagnostic tests:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Visual Examination:</span> The skin around the eyes is
              checked for irritation, staining, or infection.
            </li>
            <li>
              <span className="font-semibold">Tear Flow and Duct Tests:</span> Tests such as the
              Schirmer tear test, fluorescein dye test, or flushing of the tear ducts help assess tear
              production and identify blockages.
            </li>
            <li>
              <span className="font-semibold">Ophthalmic Examination:</span> The eyes are inspected
              for structural abnormalities, infections, or allergic reactions.
            </li>
            <li>
              <span className="font-semibold">Additional Checks:</span> The vet may evaluate the nasal
              passages, ears, and facial structure for factors contributing to poor tear drainage.
            </li>
          </ul>
          <p className="text-black leading-relaxed mt-4">
            Chronic tear overflow is sometimes linked to allergies, dental problems, or eyelash growth
            abnormalities (such as distichiasis). A thorough examination is often necessary to uncover
            these hidden causes.
          </p>
        </section>

        {/* Treatment */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Treatment</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>Treat any underlying conditions such as infections, allergies, or eyelid abnormalities.</li>
            <li>Antibiotic or anti-inflammatory medications may be prescribed if inflammation or infection is present.</li>
            <li>Lacrimal duct flushing can restore normal tear drainage in cases of blockage.</li>
            <li>Surgical correction may be required in rare cases involving structural obstruction or eyelid malformations.</li>
          </ul>
          <p className="text-black leading-relaxed mt-4">
            Extra note: Cleaning tear-stained fur with veterinarian-approved wipes can help prevent
            secondary skin infections, but this should never replace appropriate medical treatment.
          </p>
        </section>

        {/* Prevention & Management */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Prevention &amp; Management</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Dietary Adjustments:</span> Switching to hypoallergenic
              diets may reduce tearing if food allergies are contributing factors.
            </li>
            <li>
              <span className="font-semibold">Fur Care:</span> Keeping the hair around the eyes trimmed
              and clean helps minimize irritation and reduces the risk of skin infections caused by
              constant moisture.
            </li>
            <li>
              <span className="font-semibold">Proactive Care:</span> Regular grooming and veterinary
              check-ups are important for detecting early signs of tear duct blockage or eye irritation
              before they progress into chronic conditions.
            </li>
          </ul>
        </section>
      </div>
    ),
  },


  "conjunctivitis": {
    title: "Conjunctivitis",
    rich: (
      <div className="space-y-10">
        {/* Overview */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Overview</h2>
          <p className="text-black leading-relaxed mb-4">
            Conjunctivitis is one of the most common eye conditions in dogs. It refers to inflammation
            of the conjunctiva — the thin, transparent membrane covering the inner surface of the eyelids
            and the white part of the eye. This membrane acts as a protective barrier but is highly
            sensitive to external irritants, allergens, and infections, making it vulnerable to inflammation.
          </p>
        </section>

        {/* Symptoms */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Common Symptoms</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>Redness and swelling of the conjunctiva</li>
            <li>Increased tear production with mucus or pus discharge</li>
            <li>Frequent eye rubbing or pawing at the eyes due to itchiness or discomfort</li>
          </ul>
          <p className="text-black leading-relaxed mt-4">
            In some cases, conjunctivitis may be a symptom of a more serious underlying disease,
            such as canine distemper or autoimmune disorders. If the condition is recurrent or does
            not improve quickly, further diagnostic testing is necessary.
          </p>
        </section>

        {/* Diagnosis */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Diagnosis</h2>
          <p className="text-black leading-relaxed mb-3">
            Veterinarians diagnose conjunctivitis by examining the eye and investigating possible
            underlying causes:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Physical Examination:</span> Assessment of redness,
              swelling, and discharge.
            </li>
            <li>
              <span className="font-semibold">Lab Tests or Swabs:</span> Identification of bacterial,
              viral, or fungal infections.
            </li>
            <li>
              <span className="font-semibold">Allergy Testing:</span> Performed if allergic
              conjunctivitis is suspected.
            </li>
          </ul>
          <p className="text-black leading-relaxed mt-4">
            If conjunctivitis is secondary to a systemic illness, treating the root cause is
            essential before the local eye condition can resolve. Chronic or untreated cases can
            lead to corneal damage or vision problems, making early intervention important.
          </p>
        </section>

        {/* Treatment */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Treatment</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>Cleaning the eye area to remove discharge and debris.</li>
            <li>Topical medications such as antibiotic, anti-inflammatory, or lubricating eye drops.</li>
            <li>
              Systemic therapy (such as antivirals or immune-modulating drugs) if an underlying
              disease is identified.
            </li>
          </ul>
          <p className="text-black leading-relaxed mt-4">
            Important: Over-the-counter human eye drops should never be used on dogs, as they can
            worsen the condition or cause harm. Always follow veterinary guidance.
          </p>
        </section>

        {/* Prevention & Management */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Prevention &amp; Management</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Fur Management:</span> Keep fur around the eyes trimmed
              and prevent exposure to shampoo, dirt, or debris during grooming.
            </li>
            <li>
              <span className="font-semibold">Remove Allergens:</span> Maintain a clean environment
              by reducing dust, pollen, and other irritants.
            </li>
            <li>
              <span className="font-semibold">Regular Checkups:</span> Routine veterinary eye exams
              can detect early irritation or underlying diseases.
            </li>
          </ul>
          <p className="text-black leading-relaxed mt-4">
            For breeds with prominent eyes, such as Pugs or Shih Tzus, daily gentle wiping around
            the eyes can reduce irritation and help prevent infections.
          </p>
        </section>
      </div>
    ),
  },


  "periodontal-disease": {
    title: "Periodontal Disease",
    rich: (
      <div className="space-y-10">
        {/* Overview */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Overview</h2>
          <p className="text-black leading-relaxed mb-4">
            Periodontal disease refers to conditions that affect the gums and the structures
            supporting the teeth. It can be categorized into{" "}
            <span className="font-semibold">gingivitis</span> (inflammation of the gums) and{" "}
            <span className="font-semibold">periodontitis</span> (a more advanced stage causing
            destruction of tissues and bone).
          </p>
          <p className="text-black leading-relaxed">
            In the early stage, plaque buildup along the gumline causes gingivitis. Without
            treatment, it can progress to periodontitis, where the infection spreads deeper,
            resulting in tooth mobility, tooth loss, and irreversible damage.
          </p>
        </section>

        {/* Symptoms */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Common Symptoms</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>Swollen or inflamed gums</li>
            <li>Gum pain or tenderness</li>
            <li>Accumulation of tartar and dental plaque</li>
            <li>Persistent bad breath</li>
            <li>Loose teeth</li>
            <li>Difficulty eating or chewing food</li>
          </ul>
          <p className="text-black leading-relaxed mt-4">
            Some dogs may also drool excessively or show less interest in toys and chew treats due
            to oral discomfort.
          </p>
        </section>

        {/* Diagnosis */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Diagnosis</h2>
          <p className="text-black leading-relaxed mb-3">
            Veterinarians diagnose periodontal disease through oral exams and diagnostic tools:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Oral Examination:</span> Visual check for redness,
              swelling, and plaque buildup.
            </li>
            <li>
              <span className="font-semibold">Dental Probing & X-rays:</span> Used to detect bone
              loss or deep gum pockets around the teeth.
            </li>
            <li>
              <span className="font-semibold">Bacterial Culture & Lab Tests:</span> In severe cases,
              to identify infections that could worsen gum disease.
            </li>
          </ul>
        </section>

        {/* Treatment */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Treatment</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Medication:</span> In mild cases, tartar is removed and
              antibiotics may be prescribed to control infection.
            </li>
            <li>
              <span className="font-semibold">Professional Cleaning:</span> Scaling and polishing
              under anesthesia to remove plaque and tartar beneath the gumline.
            </li>
            <li>
              <span className="font-semibold">Antiseptic Rinses:</span> Help disinfect the mouth and
              reduce bacterial growth.
            </li>
            <li>
              <span className="font-semibold">Tooth Extraction:</span> Required in severe cases where
              teeth are extremely loose or damaged.
            </li>
          </ul>
          <p className="text-black leading-relaxed mt-4">
            Professional cleanings under anesthesia are often essential, as at-home brushing cannot
            reach tartar below the gumline.
          </p>
        </section>

        {/* Prevention & Care */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Prevention &amp; Care</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Oral Hygiene:</span> Establish a tooth-brushing routine
              using pet-safe toothpaste and brushes designed for dogs.
            </li>
            <li>
              <span className="font-semibold">Routine Checks:</span> Regularly lift your dog’s lips
              to check for redness, swelling, or bad odor.
            </li>
            <li>
              <span className="font-semibold">Dietary Support:</span> Dental chews, dry kibble
              designed for dental health, or water additives can help reduce plaque.
            </li>
          </ul>
          <p className="text-black leading-relaxed mt-4">
            Routine dental checkups — ideally once or twice a year — are key to preventing serious
            complications and maintaining long-term oral health.
          </p>
        </section>
      </div>
    ),
  },



  "cataracts": {
    title: "Cataracts",
    rich: (
      <div className="space-y-10">
        {/* Overview */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Overview</h2>
          <p className="text-black leading-relaxed mb-4">
            Cataracts occur when the normally clear lens of a dog’s eye becomes cloudy,
            leading to blurry vision or even complete blindness if left untreated. While
            cataracts are often associated with aging, they can also develop in younger
            dogs due to genetics, trauma, diabetes, or other health conditions. In some
            cases, cataracts may appear before the age of two.
          </p>
        </section>

        {/* Symptoms */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Symptoms</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Eye pain or discomfort:</span> Squinting, rubbing, or
              signs of irritation.
            </li>
            <li>
              <span className="font-semibold">Excessive eye discharge or tearing:</span> Increased tear
              production is common.
            </li>
            <li>
              <span className="font-semibold">Cloudy or bluish appearance in the pupil:</span> One of
              the most visible signs of cataracts.
            </li>
            <li>
              <span className="font-semibold">Conjunctival inflammation:</span> Redness and swelling
              around the eye.
            </li>
            <li>
              <span className="font-semibold">Retinal complications:</span> Severe cases may involve
              retinal detachment or degeneration.
            </li>
            <li>
              <span className="font-semibold">Vision impairment or loss:</span> Dogs may bump into
              objects, hesitate on stairs, or struggle in dim lighting.
            </li>
          </ul>
        </section>

        {/* Diagnosis */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Diagnosis</h2>
          <p className="text-black leading-relaxed mb-3">
            A veterinarian will perform a comprehensive eye exam, typically dilating the pupil and
            using specialized instruments to assess the lens. Additional tests may include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>Blood tests to check for systemic conditions such as diabetes</li>
            <li>Retinal evaluations to assess eye health and candidacy for surgery</li>
            <li>Monitoring the extent and progression of lens clouding</li>
          </ul>
        </section>

        {/* Treatment */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Treatment Options</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Surgical removal:</span> The most effective treatment
              for advanced cataracts involves removing the cloudy lens and replacing it with an
              artificial intraocular lens. This procedure can restore significant vision.
            </li>
            <li>
              <span className="font-semibold">Medical management:</span> Anti-inflammatory eye drops,
              antibiotics, or antioxidant supplements may be prescribed to reduce inflammation and
              slow progression. These cannot reverse cataracts but may help manage symptoms.
            </li>
          </ul>
          <div className="mt-4 rounded-lg border border-black/15 bg-white p-4">
            <p className="text-black leading-relaxed">
              <span className="font-semibold">Important:</span> Early detection significantly improves
              treatment outcomes. Dogs who undergo surgery before complete blindness occurs generally
              recover faster and enjoy better long-term vision.
            </p>
          </div>
        </section>

        {/* Prevention & Care */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Prevention &amp; Ongoing Care</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>Schedule routine eye exams, especially for breeds predisposed to cataracts</li>
            <li>Manage underlying conditions like diabetes to reduce cataract risk</li>
            <li>
              Protect eye health with a balanced diet rich in antioxidants and prompt care for any
              injuries or abnormalities
            </li>
          </ul>
        </section>

        {/* Summary */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Summary</h2>
          <p className="text-black leading-relaxed">
            Cataracts may progress gradually, making early behavioral changes such as bumping into
            objects or struggling in dim light important to notice. Early consultation with a vet is
            critical to prevent irreversible blindness and to explore treatment options like surgery
            before vision loss becomes permanent.
          </p>
        </section>
      </div>
    ),
  },


  "rhinitis": {
    title: "Rhinitis",
    rich: (
      <div className="space-y-10">
        {/* Overview */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Overview</h2>
          <p className="text-black leading-relaxed mb-4">
            Rhinitis is an inflammation of the nasal mucous membrane, often triggered by sudden
            temperature changes, weakened immunity, or viral infections. In some cases, allergic
            reactions — such as sensitivity to pollen, dust, or environmental irritants — can also
            cause inflammation. The condition increases mucus production and nasal congestion,
            making breathing uncomfortable for dogs.
          </p>
        </section>

        {/* Symptoms */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Symptoms</h2>
          <p className="text-black leading-relaxed mb-3">Common signs of rhinitis include:</p>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>Increased nasal discharge (runny nose)</li>
            <li>Frequent sneezing</li>
            <li>Itching around the nose</li>
            <li>Nose rubbing or pawing at the face</li>
            <li>Loss of appetite</li>
            <li>Coughing</li>
            <li>Fever</li>
          </ul>
          <p className="text-black leading-relaxed mt-4">
            <span className="font-semibold">Helpful Tip:</span> Symptoms like sneezing or runny nose
            can also occur with other conditions such as respiratory infections or allergies.
            Monitoring the duration and severity of symptoms is important before assuming it’s
            rhinitis.
          </p>
        </section>

        {/* Diagnosis */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Diagnosis</h2>
          <p className="text-black leading-relaxed mb-3">
            Veterinarians diagnose rhinitis by evaluating the dog’s symptoms and overall health
            condition. This may include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>Physical examination of the nasal cavity and respiratory tract</li>
            <li>Reviewing medical history and recent exposure to allergens or infectious agents</li>
            <li>Additional tests such as imaging or swabs if a secondary infection is suspected</li>
          </ul>
        </section>

        {/* Treatment */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Treatment</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Medication:</span> Antihistamines (to reduce allergic
              reactions) or steroids (to decrease inflammation) may be prescribed. Immune modulators
              may also be used to strengthen immune response.
            </li>
            <li>
              <span className="font-semibold">Veterinary Supervision:</span> All medications should
              be given strictly under veterinary guidance to avoid side effects or complications.
            </li>
          </ul>
          <p className="text-black leading-relaxed mt-4">
            Note: Mild cases often improve with supportive care and symptom management, but untreated
            chronic rhinitis can lead to complications like secondary infections or sinusitis.
          </p>
        </section>

        {/* Prevention & Management */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Prevention &amp; Management</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Eliminate Allergens:</span> Remove or reduce exposure
              to allergens such as dust or pollen. Use hypoallergenic bedding and avoid outdoor
              areas with high pollen counts.
            </li>
            <li>
              <span className="font-semibold">Indoor Air Quality:</span> Keep dogs indoors during
              high allergen periods. Air purifiers and maintaining proper humidity help protect nasal
              health.
            </li>
            <li>
              <span className="font-semibold">Immune Support:</span> Balanced diet, regular exercise,
              and preventive veterinary care strengthen immunity and reduce respiratory risks.
            </li>
          </ul>
        </section>
      </div>
    ),
  },



  "kennel-cough": {
    title: "Kennel Cough",
    rich: (
      <div className="space-y-10">
        {/* Overview */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Overview</h2>
          <p className="text-black leading-relaxed mb-4">
            Kennel cough, also known as infectious tracheobronchitis, is a respiratory infection
            caused by viruses and bacteria that affects the upper respiratory tract. It is highly
            contagious and often spreads in environments where many dogs are gathered, such as
            kennels, dog parks, and grooming salons.
          </p>
          <p className="text-black leading-relaxed">
            Dogs with kennel cough often exhibit symptoms such as persistent coughing, sneezing,
            nasal discharge, loss of appetite, and fever.
          </p>
        </section>

        {/* Symptoms */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Symptoms</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>Persistent, forceful coughing (often described as a “honking” sound)</li>
            <li>Gagging or retching</li>
            <li>Sneezing or nasal discharge</li>
            <li>Loss of appetite</li>
            <li>Mild fever or lethargy</li>
          </ul>
          <p className="text-black leading-relaxed mt-4">
            <span className="font-semibold">Extra Tip:</span> The cough from kennel cough can sound
            alarming, but in many cases it’s not life-threatening. However, if symptoms become severe
            or your dog shows difficulty breathing, seek veterinary attention promptly.
          </p>
        </section>

        {/* Diagnosis */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Diagnosis</h2>
          <p className="text-black leading-relaxed mb-3">
            Veterinarians diagnose kennel cough by evaluating:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>The type and frequency of the cough</li>
            <li>The presence of nasal discharge or sneezing</li>
            <li>The dog’s overall clinical signs, including fever and appetite</li>
            <li>
              In some cases, chest X-rays or lab tests may be performed to rule out more serious
              conditions like pneumonia.
            </li>
          </ul>
        </section>

        {/* Treatment */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Treatment</h2>
          <p className="text-black leading-relaxed mb-3">
            There is no single cure that eliminates kennel cough entirely, but treatment focuses on
            relieving symptoms and supporting the dog’s immune system so it can recover naturally.
            Most dogs improve within 2 to 3 weeks.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Medication:</span> Antibiotics may be prescribed if a
              secondary bacterial infection is suspected. Cough suppressants or anti-inflammatory
              drugs can help relieve discomfort.
            </li>
            <li>
              <span className="font-semibold">Supportive Care:</span> Provide a warm, stress-free
              environment, ensure proper hydration, and avoid collars that put pressure on the
              trachea during walks.
            </li>
          </ul>
          <div className="mt-4 rounded-lg border border-black/15 bg-white p-4">
            <p className="text-black leading-relaxed">
              <span className="font-semibold">Veterinary Insight:</span> Because kennel cough is
              contagious, infected dogs should be kept away from other dogs until at least 10–14
              days after symptoms subside.
            </p>
          </div>
        </section>

        {/* Prevention & Management */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Prevention &amp; Management</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Vaccination:</span> Routine vaccination is the most
              effective way to protect against kennel cough. While the vaccine may not prevent
              infection completely, it reduces severity and duration.
            </li>
            <li>
              <span className="font-semibold">Balanced Nutrition:</span> A strong immune system is
              essential for both recovery and prevention. Provide a well-balanced diet and a healthy
              environment with minimal stress.
            </li>
          </ul>
          <p className="text-black leading-relaxed mt-4">
            <span className="font-semibold">Practical Tip:</span> If your dog frequents dog parks,
            daycare, or boarding facilities, regular vaccination and annual booster shots are highly
            recommended.
          </p>
        </section>
      </div>
    ),
  },



  "heartworm-disease": {
    title: "Heartworm Disease",
    rich: (
      <div className="space-y-10">
        {/* Overview */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Overview</h2>
          <p className="text-black leading-relaxed mb-4">
            Heartworm disease (canine dirofilariasis) is a serious and potentially life-threatening
            parasitic infection caused by <span className="font-semibold">Dirofilaria immitis</span>.
            These worms inhabit the heart and the blood vessels surrounding it, affecting blood flow,
            oxygen delivery, and overall cardiac function. The disease is transmitted primarily
            through mosquito bites, making it especially prevalent in warm, humid regions.
          </p>
          <p className="text-black leading-relaxed">
            Once a mosquito carrying infective larvae bites a dog, the larvae enter the bloodstream,
            migrate to the heart and lungs, and mature into adult worms — which can grow up to 30 cm
            long. Left untreated, they reproduce, cause cardiovascular damage, and may lead to severe
            complications.
          </p>
        </section>

        {/* How Infection Occurs */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">How Infection Occurs</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Transmission via Mosquitoes:</span> Mosquitoes ingest
              microscopic larvae (microfilariae) when biting an infected animal. These larvae develop
              inside the mosquito into infective stages.
            </li>
            <li>
              <span className="font-semibold">Larval Migration:</span> After another bite, the larvae
              enter the dog’s bloodstream and travel through tissues to reach the heart and pulmonary
              arteries. This process takes 3–4 months.
            </li>
            <li>
              <span className="font-semibold">Development in the Heart:</span> The larvae mature into
              adult worms, reproduce, and release new microfilariae into the blood.
            </li>
            <li>
              <span className="font-semibold">Transmission Cycle:</span> Other mosquitoes spread the
              infection further when they bite the infected dog.
            </li>
          </ul>
          <p className="text-black leading-relaxed mt-4">
            <span className="font-semibold">Note:</span> Because mosquitoes are essential for
            transmission, prevalence varies by climate and season. Dogs in warmer regions or areas
            with standing water are at higher risk.
          </p>
        </section>

        {/* Symptoms */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Symptoms</h2>
          <p className="text-black leading-relaxed mb-3">
            Heartworm disease often progresses silently, with symptoms appearing only in later stages:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>Coughing</li>
            <li>Breathing difficulties</li>
            <li>Fatigue and reduced activity</li>
            <li>Loss of appetite and weight loss</li>
            <li>Fluid accumulation in the abdomen or limbs</li>
            <li>Heart murmurs</li>
          </ul>
          <p className="text-black leading-relaxed mt-4 font-semibold">
            Important: If left untreated, advanced heartworm disease can cause heart failure, liver
            and kidney dysfunction, and death. Early detection is critical.
          </p>
        </section>

        {/* Treatment */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Treatment</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Preventive Medication:</span> Monthly oral or topical
              preventives kill early-stage larvae before they mature. Consistent use is strongly
              recommended.
            </li>
            <li>
              <span className="font-semibold">Adulticide Treatment:</span> Medications to kill adult
              worms are given under strict veterinary supervision. Because dying worms can block blood
              vessels, hospitalization and monitoring may be required.
            </li>
            <li>
              <span className="font-semibold">Surgical Removal:</span> In severe cases with heavy worm
              burdens, surgery may be performed to restore blood flow.
            </li>
            <li>
              <span className="font-semibold">Supportive Care:</span> Includes diuretics, oxygen
              therapy, and medications to support heart and lung function.
            </li>
          </ul>
          <p className="text-black leading-relaxed mt-4">
            Treatment is individualized based on age, health status, and stage of infection.
          </p>
        </section>

        {/* Prevention & Management */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Prevention &amp; Management</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Mosquito Control:</span> Reduce exposure by using
              repellents and avoiding outdoor activities during peak mosquito hours.
            </li>
            <li>
              <span className="font-semibold">Routine Testing:</span> Annual blood tests can detect
              infections before severe damage occurs.
            </li>
            <li>
              <span className="font-semibold">Year-Round Prevention:</span> Preventives should be
              given year-round, even in colder months, as mosquitoes can survive indoors.
            </li>
          </ul>
        </section>

        {/* Final Thoughts */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Final Thoughts</h2>
          <p className="text-black leading-relaxed">
            Heartworm disease is one of the most preventable yet dangerous parasitic infections in
            dogs. With consistent preventive care, regular checkups, and early intervention, most dogs
            can avoid the disease entirely or recover successfully if infected. Awareness and
            proactive prevention are key to protecting your dog’s heart health.
          </p>
        </section>
      </div>
    ),
  },



  "canine-distemper": {
    title: "Canine Distemper",
    rich: (
      <div className="space-y-10">
        {/* Overview */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Overview</h2>
          <p className="text-black leading-relaxed mb-4">
            Canine distemper is a highly contagious viral disease that affects a dog’s{" "}
            <span className="font-semibold">respiratory, digestive, and nervous systems</span>. It is
            most often seen in puppies under one year of age. Symptoms usually appear{" "}
            <span className="font-semibold">7–10 days after infection</span> once the virus’s incubation
            period ends.
          </p>
        </section>

        {/* Symptoms */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Symptoms</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>Fever – often one of the earliest signs</li>
            <li>Coughing or sneezing – respiratory tract involvement</li>
            <li>Vomiting and diarrhea – gastrointestinal involvement</li>
            <li>Loss of appetite – systemic illness</li>
            <li>Inflammation or discharge around the eyes or nose</li>
            <li>Thickening of the footpads or nose in severe cases</li>
          </ul>
          <p className="text-black leading-relaxed mt-4">
            In advanced stages, neurological signs such as{" "}
            <span className="font-semibold">tremors, seizures, or loss of coordination</span> may
            develop, indicating spread to the central nervous system.
          </p>
        </section>

        {/* Diagnosis */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Diagnosis</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">PCR testing:</span> Detects the virus in blood, tears,
              nasal discharge, or urine.
            </li>
            <li>
              <span className="font-semibold">Antibody tests:</span> Identify immune response to the
              virus.
            </li>
            <li>
              <span className="font-semibold">Blood work and radiographs:</span> Assess progression
              and complications.
            </li>
          </ul>
        </section>

        {/* Treatment */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Treatment</h2>
          <p className="text-black leading-relaxed mb-3">
            Currently, there is no cure that completely eliminates distemper. Treatment focuses on{" "}
            <span className="font-semibold">supportive care</span> to help the dog’s immune system and
            relieve symptoms.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Medication:</span> Antibiotics, anti-inflammatory drugs,
              or other treatments may be prescribed depending on symptoms and secondary infections.
            </li>
            <li>
              <span className="font-semibold">Nutritional support:</span> Specialized diets or
              supplements can help maintain strength and appetite.
            </li>
          </ul>
          <p className="text-black leading-relaxed mt-4">
            Early intervention greatly improves outcomes, although neurological damage may persist in
            some cases.
          </p>
        </section>

        {/* Prevention & Management */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Prevention &amp; Management</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Vaccination:</span> Routine vaccination and boosters are
              the most effective way to prevent infection.
            </li>
            <li>
              <span className="font-semibold">Hygiene and isolation:</span> Avoid exposing your dog to
              sick or unvaccinated dogs; maintain a clean environment.
            </li>
            <li>
              <span className="font-semibold">Puppy care:</span> Puppies are vulnerable before their
              full vaccination series. Avoid dog parks and group settings until vaccinations are
              complete.
            </li>
          </ul>
        </section>

        {/* Important Note */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Important Note</h2>
          <p className="text-black leading-relaxed">
            Canine distemper is a serious and potentially fatal disease, especially in young or
            unvaccinated dogs. If your dog shows symptoms, contact a veterinarian immediately. Quick
            diagnosis and supportive treatment can make a significant difference in recovery.
          </p>
        </section>
      </div>
    ),
  },



  "cushings-syndrome": {
    title: "Cushing’s Syndrome",
    rich: (
      <div className="space-y-10">
        {/* Overview */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Overview</h2>
          <p className="text-black leading-relaxed mb-4">
            Cushing’s syndrome in dogs — also called{" "}
            <span className="font-semibold">hyperadrenocorticism</span> — occurs when the adrenal
            glands produce excessive amounts of the steroid hormone cortisol. Cortisol is essential
            for metabolism, immune function, and stress response, but too much can disrupt many
            systems in the body and lead to serious health problems.
          </p>
          <p className="text-black leading-relaxed">
            This condition is more common in{" "}
            <span className="font-semibold">middle-aged to older dogs</span>, but it can occur at any
            age. Symptoms often develop gradually and may be mistaken for normal aging, making{" "}
            <span className="font-semibold">early detection</span> vital for effective treatment.
          </p>
        </section>

        {/* Symptoms */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Symptoms</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>Increased appetite and food consumption</li>
            <li>Weight gain without changes in activity</li>
            <li>Skin thinning, fragility, or recurring infections</li>
            <li>Pot-bellied appearance caused by muscle weakness and fat redistribution</li>
            <li>Excessive urination and thirst (polyuria and polydipsia)</li>
          </ul>
          <p className="text-black leading-relaxed mt-4">
            Because these symptoms develop slowly, they are often mistaken for signs of aging. If
            multiple signs occur together — especially increased thirst and a pot-bellied abdomen —
            veterinary evaluation is strongly recommended.
          </p>
        </section>

        {/* Diagnosis */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Diagnosis</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Blood tests:</span> Evaluate cortisol and related
              hormone levels.
            </li>
            <li>
              <span className="font-semibold">Urine tests:</span> Measure steroid hormone
              concentrations for confirmation.
            </li>
            <li>
              <span className="font-semibold">Stimulation or suppression tests:</span> ACTH or
              dexamethasone testing helps distinguish Cushing’s from other hormonal issues.
            </li>
            <li>
              <span className="font-semibold">Ultrasound imaging:</span> Checks for adrenal or
              pituitary tumors causing hormone overproduction.
            </li>
          </ul>
        </section>

        {/* Treatment */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Treatment</h2>
          <p className="text-black leading-relaxed mb-3">
            Treatment depends on the cause but always aims to regulate cortisol levels and relieve
            symptoms.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Medication:</span> Most cases require lifelong
              medication to suppress excess cortisol. Regular blood monitoring is essential.
            </li>
            <li>
              <span className="font-semibold">Surgery:</span> Adrenal tumors may be surgically
              removed in select cases, sometimes providing a cure.
            </li>
            <li>
              <span className="font-semibold">Supportive care:</span> Balanced diet, moderate
              exercise, and routine veterinary visits improve quality of life.
            </li>
          </ul>
          <p className="text-black leading-relaxed mt-4">
            Important: Never attempt to treat Cushing’s without veterinary supervision. Incorrect use
            of medications can cause dangerous complications such as adrenal insufficiency.
          </p>
        </section>

        {/* Management & Prevention */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Management and Prevention</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Regular monitoring:</span> Frequent blood tests ensure
              treatment effectiveness and adjust dosages as needed.
            </li>
            <li>
              <span className="font-semibold">Medication management:</span> Follow prescription
              schedules carefully and report side effects promptly.
            </li>
            <li>
              <span className="font-semibold">Dietary control:</span> Some dogs may benefit from
              prescription diets to manage weight, diabetes risk, or muscle weakness.
            </li>
          </ul>
          <p className="text-black leading-relaxed mt-4">
            While Cushing’s syndrome cannot always be prevented,{" "}
            <span className="font-semibold">early detection and consistent care</span> can greatly
            improve quality of life and lifespan.
          </p>
        </section>

        {/* Summary */}
        <section className="border border-gray-300 rounded-lg p-5 bg-gray-50">
          <h2 className="text-xl font-bold text-black mb-2">Summary</h2>
          <p className="text-black leading-relaxed">
            Cushing’s syndrome is a chronic but manageable endocrine disorder caused by excess
            cortisol. With proper treatment and follow-up, many dogs live comfortably for years.
            Because symptoms resemble normal aging,{" "}
            <span className="font-semibold">
              routine veterinary checkups — especially in senior dogs — are essential
            </span>{" "}
            to catch the disease early and provide the best care possible.
          </p>
        </section>
      </div>
    ),
  },



  "diabetes-mellitus": {
    title: "Diabetes Mellitus",
    rich: (
      <div className="space-y-10">
        {/* Overview */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Overview</h2>
          <p className="text-black leading-relaxed mb-4">
            Diabetes in dogs most often occurs as{" "}
            <span className="font-semibold">insulin-dependent diabetes mellitus (IDDM)</span>, in
            which the pancreas fails to produce or release enough insulin. This results in persistently
            high blood glucose levels and a wide range of health complications if left untreated.
          </p>
          <p className="text-black leading-relaxed">
            <span className="font-semibold">What is insulin?</span> Insulin is a hormone that enables
            cells to absorb glucose (sugar) from the bloodstream and convert it into energy. Without
            enough insulin, glucose accumulates in the blood, causing serious metabolic problems
            over time.
          </p>
        </section>

        {/* Symptoms */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Symptoms</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              Excessive thirst and frequent urination — the body attempts to flush out excess sugar,
              leading to dehydration.
            </li>
            <li>
              Increased appetite but ongoing weight loss — food is eaten, but glucose cannot be used
              properly for energy.
            </li>
            <li>
              Loss of appetite, lethargy, or depression — often appearing as the disease progresses.
            </li>
            <li>
              Cloudy eyes (cataracts), recurrent urinary tract infections, or delayed wound healing in
              chronic cases.
            </li>
          </ul>
        </section>

        {/* Diagnosis */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Diagnosis</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Blood tests:</span> Persistent hyperglycemia (elevated
              blood sugar) confirms diabetes.
            </li>
            <li>
              <span className="font-semibold">Urinalysis:</span> Detects glucose in urine, a sign of
              uncontrolled blood sugar.
            </li>
            <li>
              <span className="font-semibold">Clinical evaluation:</span> Assessment of medical
              history, symptoms, and physical condition.
            </li>
          </ul>
          <p className="text-black leading-relaxed mt-4">
            <span className="font-semibold">Early diagnosis is critical</span> to prevent severe
            complications such as diabetic ketoacidosis (DKA), which can be life-threatening.
          </p>
        </section>

        {/* Treatment */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Treatment</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Insulin therapy:</span> Regular insulin injections are
              the cornerstone of treatment. Dosing and timing must always be prescribed by a
              veterinarian.
            </li>
            <li>
              <span className="font-semibold">Dietary management:</span> A balanced, high-fiber,
              low-fat diet with consistent meal timing and portion control is essential.
            </li>
            <li>
              <span className="font-semibold">Lifestyle adjustments:</span> Moderate daily exercise
              improves insulin sensitivity and supports weight control.
            </li>
          </ul>
        </section>

        {/* Management & Prevention */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Management and Prevention</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>Routine blood glucose monitoring and veterinary check-ups</li>
            <li>Precise adherence to prescribed insulin schedules</li>
            <li>
              Stable daily routines, with controlled diet and exercise, to avoid fluctuations in
              blood sugar
            </li>
          </ul>
          <p className="text-black leading-relaxed mt-4">
            Diabetes is a lifelong condition. Close collaboration with your veterinarian and early
            recognition of changes in thirst, appetite, or weight are essential for long-term
            management.
          </p>
        </section>

        {/* Key Takeaways */}
        <section className="border border-gray-300 rounded-lg p-5 bg-gray-50">
          <h2 className="text-xl font-bold text-black mb-2">Key Takeaways</h2>
          <p className="text-black leading-relaxed">
            Diabetes is a chronic but manageable disease in dogs. With consistent veterinary care,
            daily insulin injections, a controlled diet, and regular monitoring, most diabetic dogs
            can live long, active, and healthy lives. Understanding the root cause — the lack of
            effective insulin — empowers owners to provide the right care and support.
          </p>
        </section>
      </div>
    ),
  },

  

  "parvovirus": {
    title: "Parvovirus",
    rich: (
      <div className="space-y-10">
        {/* Overview */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Overview</h2>
          <p className="text-black leading-relaxed mb-4">
            Canine parvovirus (CPV) is a highly contagious viral disease that primarily affects
            puppies, causing acute inflammation of the gastrointestinal tract and often resulting in
            hemorrhagic (bloody) enteritis. Puppies younger than 3 weeks old are especially
            vulnerable due to their underdeveloped immune systems.
          </p>
          <p className="text-black leading-relaxed mb-4">
            The virus has a high mortality rate if untreated, making vaccination essential for
            prevention. Symptoms typically appear 5–10 days after infection. CPV evolved from a
            feline virus and is classified as Canine Parvovirus Type 2 (CPV2). It spreads rapidly
            through direct contact with infected dogs or indirect contact with contaminated surfaces
            or feces.
          </p>
          <p className="text-black leading-relaxed">
            While vaccination is highly effective, once infection occurs treatment is difficult and
            survival depends heavily on early detection and aggressive care. CPV does not infect
            humans but can spread among canine species.
          </p>
        </section>

        {/* Symptoms */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Symptoms</h2>
          <p className="text-black leading-relaxed mb-3">
            Signs usually develop within 2–14 days of exposure. The most common include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>Lethargy and fatigue</li>
            <li>Vomiting</li>
            <li>Fever</li>
            <li>Severe diarrhea, often bloody</li>
          </ul>
          <p className="text-black leading-relaxed mt-4">
            Early stages often begin with lethargy, followed by vomiting and bloody diarrhea. These
            symptoms cause rapid dehydration and electrolyte imbalance, leading to shock and death if
            untreated. Puppies with weak immune systems may also develop dangerous secondary
            infections.
          </p>
          <p className="text-black leading-relaxed mt-2">
            In severe cases, intestinal lining damage allows proteins and blood to leak into the
            intestines, causing protein loss, internal bleeding, septicemia, and dangerously low
            white blood cell counts.
          </p>
        </section>

        {/* Diagnosis */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Diagnosis</h2>
          <p className="text-black leading-relaxed mb-3">
            Diagnosis is usually made by testing stool or tissue samples for CPV2. Common diagnostic
            methods include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>ELISA (enzyme-linked immunosorbent assay)</li>
            <li>PCR (polymerase chain reaction)</li>
            <li>Electron microscopy</li>
          </ul>
          <p className="text-black leading-relaxed mt-3">
            Parvovirus may occur alongside other infections like coronavirus, but CPV is
            distinguished by its severity — especially bloody diarrhea, low white blood cell counts,
            and intestinal cell death. Diagnosis is often easier in unvaccinated dogs or those with
            heart-related variants.
          </p>
        </section>

        {/* Treatment */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Treatment</h2>
          <p className="text-black leading-relaxed mb-3">
            Survival depends on rapid diagnosis, the dog’s age, and the intensity of treatment.
            Severe dehydration, intestinal damage, and immune suppression often require
            hospitalization. Treatment is supportive and includes:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>IV fluids (crystalloids or colloids) to restore hydration and electrolytes</li>
            <li>Broad-spectrum antibiotics to prevent secondary bacterial infections</li>
            <li>Anti-nausea medications to reduce vomiting and improve appetite</li>
            <li>
              Nutritional support with supplements such as B-complex vitamins, glucose, and
              potassium
            </li>
            <li>Pain relievers for gastrointestinal discomfort (used cautiously)</li>
          </ul>
        </section>

        {/* Notes for Pet Owners */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-3">Additional Notes for Pet Owners</h2>
          <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
            <li>
              Early vaccination is the most effective prevention. Puppies should begin vaccines at
              6–8 weeks of age and continue boosters as recommended.
            </li>
            <li>
              Parvovirus is extremely resilient in the environment. Disinfect contaminated areas with
              bleach solution and wash exposed items thoroughly.
            </li>
            <li>
              Infected dogs should be quarantined immediately, as even microscopic traces of feces
              can spread the virus to others.
            </li>
          </ul>
        </section>
      </div>
    ),
  },
  "canine-herpesvirus": {
  title: "Canine Herpesvirus (CHV-1)",
  rich: (
    <div className="space-y-10">
      {/* Overview */}
      <section>
        <h2 className="text-2xl font-bold text-black mb-3">Overview</h2>
        <p className="text-black leading-relaxed mb-4">
          Canine herpesvirus (CHV-1) is a contagious viral infection that primarily affects dogs, 
          especially puppies under three weeks old and breeding dogs. It is part of the Herpesviridae family, 
          meaning once a dog is infected, the virus can remain dormant (inactive) in the body and reactivate 
          during stress, illness, or pregnancy — similar to how cold sores recur in humans.
        </p>
        <p className="text-black leading-relaxed">
          The virus is a leading cause of neonatal death in puppies and a concern in breeding kennels. 
          In adult dogs, CHV often causes mild or unnoticed symptoms but can still spread to other dogs.
        </p>
      </section>

      {/* How Infection Occurs */}
      <section>
        <h2 className="text-2xl font-bold text-black mb-3">How Infection Occurs</h2>
        <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
          <li>Nasal and oral secretions (licking, sniffing, sharing bowls)</li>
          <li>Genital secretions (during mating)</li>
          <li>Vaginal discharge during birth</li>
          <li>Placenta or fluids during whelping</li>
        </ul>
        <p className="text-black leading-relaxed mt-4">
          Puppies are most often infected in the womb, during birth, or shortly after. 
          Because newborns cannot regulate body temperature, the virus replicates rapidly 
          and often proves fatal within days.
        </p>
      </section>

      {/* Symptoms */}
      <section>
        <h2 className="text-2xl font-bold text-black mb-3">Symptoms</h2>
        <h3 className="text-xl font-semibold text-black mt-4">In Puppies (under 3 weeks)</h3>
        <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
          <li>Sudden weakness or constant crying</li>
          <li>Refusal to nurse or inability to suckle</li>
          <li>Nasal discharge and difficulty breathing</li>
          <li>Soft, yellow-green diarrhea</li>
          <li>Abdominal pain and bloating</li>
          <li>Seizures or tremors before death</li>
        </ul>
        <p className="text-black leading-relaxed mt-2">
          Mortality rates are very high (up to 80%) in puppies infected this young, 
          with death often occurring within one to three days.
        </p>

        <h3 className="text-xl font-semibold text-black mt-6">In Adult Dogs</h3>
        <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
          <li>Mild nasal or eye discharge</li>
          <li>Coughing or sneezing</li>
          <li>Genital lesions (redness, bumps, or ulcers)</li>
          <li>Infertility or miscarriage in breeding dogs</li>
        </ul>
        <p className="text-black leading-relaxed mt-2">
          Adult infections are often subclinical, so many dogs may be carriers without showing signs.
        </p>
      </section>

      {/* Diagnosis */}
      <section>
        <h2 className="text-2xl font-bold text-black mb-3">Diagnosis</h2>
        <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
          <li>PCR testing to detect CHV DNA in tissues or secretions</li>
          <li>Virus isolation from nasal, vaginal, or tissue samples</li>
          <li>Antibody (serology) testing for past exposure in breeding dogs</li>
          <li>Necropsy in puppies: characteristic lesions in liver, kidneys, and lungs</li>
        </ul>
      </section>

      {/* Treatment */}
      <section>
        <h2 className="text-2xl font-bold text-black mb-3">Treatment</h2>
        <p className="text-black leading-relaxed mb-3">
          There is no cure; treatment is supportive:
        </p>
        <h3 className="text-xl font-semibold text-black">For Puppies</h3>
        <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
          <li>Maintain warmth above 35 °C (95 °F) to slow viral replication</li>
          <li>Provide fluids and nutritional support if too weak to nurse</li>
          <li>Antivirals may be attempted in rare cases</li>
        </ul>
        <h3 className="text-xl font-semibold text-black mt-6">For Adults</h3>
        <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
          <li>Symptomatic care (eye drops, nasal treatments, rest)</li>
          <li>Antibiotics to prevent secondary bacterial infections</li>
        </ul>
        <p className="text-black leading-relaxed mt-2">
          Most infected adults recover but remain lifelong carriers.
        </p>
      </section>

      {/* Prevention */}
      <section>
        <h2 className="text-2xl font-bold text-black mb-3">Prevention & Breeding Management</h2>
        <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
          <li>Hygiene & isolation: separate pregnant dogs and newborns from new arrivals</li>
          <li>Test breeding dogs for CHV antibodies before mating</li>
          <li>Avoid mating if infection is suspected</li>
          <li>Minimize stress in pregnant dogs to avoid reactivation</li>
          <li>Vaccination (available in some regions) for breeding females during pregnancy</li>
          <li>Maintain warm whelping environment (29–32 °C / 84–90 °F) for newborns</li>
        </ul>
      </section>

      {/* Prognosis */}
      <section>
        <h2 className="text-2xl font-bold text-black mb-3">Prognosis</h2>
        <ul className="list-disc pl-6 space-y-2 text-black leading-relaxed">
          <li>Puppies: Prognosis is often poor if infected in first two weeks of life</li>
          <li>Adults: Usually recover but may remain carriers</li>
          <li>Breeding dogs: Risk of infertility, miscarriages, and stillbirths</li>
        </ul>
      </section>

      {/* Summary */}
      <section>
        <h2 className="text-2xl font-bold text-black mb-3">Summary</h2>
        <p className="text-black leading-relaxed">
          Canine herpesvirus is a serious concern for puppies and breeding dogs. 
          While adults usually recover, the virus can devastate litters of newborns. 
          Because there is no cure, prevention, biosecurity, and veterinary management 
          during pregnancy are the most effective strategies for controlling CHV.
        </p>
      </section>
    </div>
  ),
},

//add more diseases later on.... make sure you go to src/app/exclusive-features/health-encyclopedia/page.tsx to add the id and add the full detailed description here.

};

/** ---------- Page ---------- */
export default function DiseaseDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = CONTENT[params.slug as keyof typeof CONTENT];
  if (!data) return notFound();

    return (
    <main className="bg-white">
      <Hero title={data.title} />

      {/* If a disease provides a rich JSX page, render it exactly (Food-style).
          Otherwise, fall back to the simple sectioned layout. */}
      {data.rich ? (
        <>
          <section className="max-w-5xl mx-auto px-6 py-10 space-y-10 text-black">
            {data.rich}
          </section>

          {/* Back button */}
          <div className="max-w-5xl mx-auto px-6 pb-12">
            <Link
              href="/exclusive-features/health-encyclopedia"
              className="inline-flex items-center px-4 py-2 border border-[#4A321E] text-[#4A321E] rounded-md text-base font-medium hover:bg-[#4A321E] hover:text-white transition"
            >
              ← Back to Encyclopedia
            </Link>
          </div>
        </>
      ) : (
        <>
          <Section title="What It Is">
            <p>{data.what}</p>
          </Section>

          <Section title="Common Signs">
            <ul className="list-disc pl-5 space-y-1">
              {data.signs?.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </Section>

          <Section title="When It’s Urgent">
            <ul className="list-disc pl-5 space-y-1">
              {data.urgent?.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </Section>

          <Section title="What Vets Check (Diagnosis)">
            <ul className="list-disc pl-5 space-y-1">
              {data.dx?.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </Section>

          <Section title="Treatment">
            <ul className="list-disc pl-5 space-y-1">
              {data.tx?.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </Section>

          <Section title="Home Care & Prevention">
            <ul className="list-disc pl-5 space-y-1">
              {data.prev?.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </Section>

          {/* Back button */}
          <div className="max-w-5xl mx-auto px-6 pb-12">
            <Link
              href="/exclusive-features/health-encyclopedia"
              className="inline-flex items-center px-4 py-2 border border-[#4A321E] text-[#4A321E] rounded-md text-base font-medium hover:bg-[#4A321E] hover:text-white transition"
            >
              ← Back to Encyclopedia
            </Link>
          </div>
        </>
      )}
    </main>
  );

}
