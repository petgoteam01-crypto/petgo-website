// src/app/places/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPlaceBySlug, PLACES } from "../../data/places";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return PLACES.map((p) => ({ slug: p.slug }));
}

export default function PlaceDetailPage({ params }: Props) {
  const place = getPlaceBySlug(params.slug);
  if (!place) return notFound();

  const mapsUrl = place.address
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        place.address
      )}`
    : null;

  return (
    <article className="bg-white">
      {/* Hero */}
      <div className="relative w-full h-[340px] md:h-[420px]">
        <Image
          src={place.image}
          alt={place.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-6 left-6 right-6 max-w-6xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 text-xs rounded-full bg-white/80 text-gray-700 mb-3">
            {place.category}
          </div>
          <h1 className="text-white text-3xl md:text-5xl font-extrabold drop-shadow">
            {place.title}
          </h1>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-6 py-10">
        {/* Address + Actions */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          {place.address && (
            <span className="text-gray-600">{place.address}</span>
          )}

          {mapsUrl && (
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full border border-[#8B6A43] text-[#8B6A43] hover:bg-[#8B6A43] hover:text-white transition text-sm"
            >
              Get Directions
            </a>
          )}

          <Link
            href="/places"
            className="ml-auto text-sm underline decoration-transparent hover:decoration-inherit text-gray-700"
          >
            ← Back to Places
          </Link>
        </div>

        {/* Lead / Blurb */}
        {place.intro ? (
          <p className="text-[17px] leading-relaxed text-gray-800 mb-6">
            {place.intro}
          </p>
        ) : place.blurb ? (
          <p className="text-[17px] leading-relaxed text-gray-800 mb-6">
            {place.blurb}
          </p>
        ) : null}

        {/* ---------- Custom Café 23 section ---------- */}
        {place.slug === "cafe23" ? (
          <section className="space-y-8">
            <p className="text-[17px] leading-relaxed text-gray-800">
              Café 23 is more than just a coffee stop — it’s a creative little haven
              where good brews meet good vibes. With its rustic, artsy charm, every
              corner feels thoughtfully curated, from the vintage mirrors to the
              softly flickering candles that fill the space with character.
            </p>

            <Image
              src="/places/cafe23-interior.jpg"
              alt="Café 23 interior bar and decor"
              width={1600}
              height={1000}
              className="w-full h-auto rounded-lg object-cover"
            />

            <p className="text-[17px] leading-relaxed text-gray-800">
              Inside seating is limited, giving it that cozy, tucked-away feel. But
              step outside, and you’ll find a charming backyard shaded by grapevines —
              a tranquil escape that feels worlds away from the city buzz. There’s even
              a rooftop spot perfect for relaxed conversation or quiet moments with
              your cup.
            </p>

            <Image
              src="/places/cafe23-backyard.jpg"
              alt="Café 23 grapevine-shaded backyard patio"
              width={1600}
              height={1000}
              className="w-full h-auto rounded-lg object-cover"
            />

            <p className="text-[17px] leading-relaxed text-gray-800">
              It’s not about luxury here — it’s about personality. The atmosphere is
              laid-back and full of stories, and the coffee and pastries are
              consistently excellent. Whether you’re catching up with a friend or
              simply pausing your day, Café 23 is a spot that invites you to linger.
            </p>

            <Image
              src="/places/cafe23-cinnamon-latte.jpg"
              alt="Cinnamon roll and latte at Café 23"
              width={1600}
              height={1000}
              className="w-full h-auto rounded-lg object-cover"
            />

            <p className="text-[17px] leading-relaxed text-gray-800">
              Try their delicious cinnamon rolls and lavender rosemary latte — they’re
              local favorites that perfectly capture the café’s cozy, creative spirit.
            </p>

            <div className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700">
              <span className="font-semibold">Heads up:</span> it’s a
              no-laptops-on-weekends kind of place, encouraging everyone to slow down
              and actually enjoy the moment.
            </div>

            <p className="text-[17px] leading-relaxed text-gray-800">
              Spend a slow weekend here — savoring your latte, turning the pages of a
              good book, and sharing a pup cup and a few treats with your four-legged
              companion.
            </p>
          </section>
        ) : place.slug === "mildreds-temple-kitchen" ? (
          /* ---------- Custom Mildred’s Temple Kitchen section ---------- */
          <section className="space-y-8">
            <p className="text-[17px] leading-relaxed text-gray-800">
              If you’re searching for a truly memorable brunch experience in Toronto,
              Mildred’s Temple Kitchen is an absolute must. The space exudes warmth and
              energy — bright, modern, and effortlessly inviting.
            </p>

            <Image
              src="/places/mildreds-interior.jpg"
              alt="Mildred’s Temple Kitchen interior"
              width={1600}
              height={1000}
              className="w-full h-auto rounded-lg object-cover"
            />
            <p className="text-center text-sm text-gray-500 mt-1">
              Source: Condé Nast Traveler
            </p>

            <p className="text-[17px] leading-relaxed text-gray-800">
              Inside, it feels cozy and vibrant, but when the sun is out, the patio
              steals the show. Spacious and thoughtfully designed, it’s the perfect
              spot to dine al fresco, and it’s fully wheelchair-accessible. Families are
              welcome, and even furry companions are cared for — water bowls for dogs
              are provided on site.
            </p>

            <Image
              src="/places/mildreds-patio.jpg"
              alt="Dog on patio at Mildred’s Temple Kitchen"
              width={1600}
              height={1000}
              className="w-full h-auto rounded-lg object-cover"
            />
            <p className="text-center text-sm text-gray-500 mt-1">
              Source: @mildredstemplekitchen
            </p>

            <p className="text-[17px] leading-relaxed text-gray-800">
              The food here is nothing short of exceptional. The legendary blueberry
              pancakes are impossibly fluffy, bursting with flavor, and beautifully
              golden — easily some of the best in the city. The Eggs Monty is another
              standout, rich, refined, and plated with care. Every dish reflects the
              restaurant’s dedication to quality ingredients and thoughtful
              preparation.
            </p>

            <Image
              src="/places/mildreds-food.jpg"
              alt="Brunch table at Mildred’s Temple Kitchen"
              width={1600}
              height={1000}
              className="w-full h-auto rounded-lg object-cover"
            />
            <p className="text-center text-sm text-gray-500 mt-1">
              Source: @mildredstemplekitchen
            </p>

            <p className="text-[17px] leading-relaxed text-gray-800">
              How about spending your weekend basking in the sunshine, savoring
              blueberry pancakes on the patio, and treating your four-legged friend to
              a refreshing bowl of water?
            </p>
          </section>
        ) : place.slug === "rouge-national-urban-park" ? (
          /* ---------- Custom Rouge National Urban Park section ---------- */
          <section className="space-y-8">
            <p className="text-[17px] leading-relaxed text-gray-800">
              Nestled in the eastern reaches of the Greater Toronto Area, Rouge
              National Urban Park is a rare gem — a vast expanse of protected
              wilderness right on the city’s doorstep. Centered around the Rouge River
              and its winding tributaries, the park showcases remarkable biodiversity
              thanks to its diverse topography, microclimates, and habitats. Within its
              boundaries, you’ll find forests, meadows, wetlands, thickets, and even
              working farmlands that together create a living mosaic of Ontario’s
              natural heritage.
            </p>

            {/* picture1 */}
            <Image
              src="/places/rouge-forest-trail.jpg"
              alt="Autumn forest trail at Rouge National Urban Park"
              width={1600}
              height={1000}
              className="w-full h-auto rounded-lg object-cover"
            />
            <p className="text-center text-sm text-gray-500 mt-1">
              Source: Bring Fido
            </p>

            <p className="text-[17px] leading-relaxed text-gray-800">
              Conveniently located near Highway 401 East and the Toronto Zoo, Rouge
              offers an easy escape from the urban rush. The well-marked trails make it
              a great destination for both seasoned hikers and casual visitors seeking a
              peaceful walk outdoors. While facilities are limited, a bit of preparation
              — water, snacks, and essentials — will ensure a comfortable adventure.
            </p>

            {/* picture2 */}
            <Image
              src="/places/rouge-fall-lookout.jpg"
              alt="Scenic fall lookout over Rouge National Urban Park"
              width={1600}
              height={1000}
              className="w-full h-auto rounded-lg object-cover"
            />
            <p className="text-center text-sm text-gray-500 mt-1">
              Source: reddit
            </p>

            {/* Things to Do */}
            <div className="mt-2">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Things to Do
              </h2>
              <p className="text-[17px] leading-relaxed text-gray-800">
                Animal and bird watching • Canoeing • Cycling • Dog walking • Fishing •
                Hiking • Kayaking • Photography • Picnicking • Snowshoeing •
                Cross-country skiing • Paddling • Boating • Scenic lookouts • Guided
                tours and seasonal programs
              </p>
            </div>

            <p className="text-[17px] leading-relaxed text-gray-800">
              Whether you’re hiking through forest trails, paddling down calm waters,
              or enjoying a quiet picnic with your pup, Rouge National Urban Park is a
              perfect retreat to reconnect with nature.
            </p>
          </section>
        ) : (
          /* ---------- Default layout for all other places ---------- */
          <>
            {place.introImage && (
              <div className="my-6">
                <Image
                  src={place.introImage}
                  alt={`${place.title} scenery`}
                  width={1600}
                  height={1000}
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            )}

            {place.features && place.features.length > 0 && (
              <section className="mt-8">
                <h2 className="text-lg font-semibold text-gray-900">
                  Key Features &amp; Amenities
                </h2>
                <ul className="mt-3 space-y-2 text-gray-800">
                  {place.features.map((f, i) => (
                    <li key={i} className="flex">
                      <span className="mr-2">•</span>
                      <span>
                        <span className="font-semibold">{f.title}:</span>{" "}
                        {f.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {place.featureImage && (
              <div className="my-8">
                <Image
                  src={place.featureImage}
                  alt={`${place.title} dogs`}
                  width={1600}
                  height={1000}
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            )}

            {place.offLeash && (
              <p className="text-[17px] leading-relaxed text-gray-800 mb-8">
                {place.offLeash}
              </p>
            )}
          </>
        )}

        {/* Location & Access */}
        {place.location && (
          <section className="mt-8">
            <h2 className="text-lg font-semibold text-gray-900">
              Location &amp; Access
            </h2>
            <ul className="mt-3 space-y-2 text-gray-800">
              {place.location.transit && (
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>
                    <span className="font-semibold">🚇 Transit:</span>{" "}
                    {place.location.transit}
                  </span>
                </li>
              )}
              {place.location.parking && (
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>
                    <span className="font-semibold">🅿 Parking:</span>{" "}
                    {place.location.parking}
                  </span>
                </li>
              )}
            </ul>
          </section>
        )}

        {/* Extra images grid (optional) */}
        {place.extraImages && place.extraImages.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {place.extraImages.map((img, i) => (
              <Image
                key={i}
                src={img}
                alt={`${place.title} photo ${i + 1}`}
                width={1600}
                height={1000}
                className="rounded-lg object-cover"
              />
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
