    "use client";

    import Image from "next/image";
    import Link from "next/link";

    export default function Week27Page() {
    return (
        <main className="min-h-screen bg-[#F9F6F1] text-[#111827] py-16 px-6">
        {/* ===== HEADER ===== */}
        <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
            Puppy Care Guide
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#8B6A43]">
            Week 27 – Growth & Feeding Stage
            </h2>
        </div>

        {/* ===== SMARTIE IMAGE ===== */}
        <div className="flex justify-center mb-10">
            <Image
            src="/week27mainpic.jpg"
            alt="Growing puppy feeding time"
            width={600}
            height={400}
            className="rounded-2xl shadow-md object-cover"
            />
        </div>

        {/* ===== INTRO ===== */}
        <section className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-gray-700 leading-relaxed">
            Your puppy is now about 27 weeks old — nearing the 7-month milestone!
            Even if they look almost full-grown, internal development continues.
            This stage builds strong bones, healthy digestion, and balanced muscle growth.
            </p>
        </section>

        {/* ===== TODAY’S TIP ===== */}
        <section className="max-w-3xl mx-auto mb-12 bg-[#fffaf5] border border-[#e6dccf] p-8 rounded-2xl shadow-sm">
            <h4 className="font-semibold text-[#8B6A43] mb-3">💡 Today’s Tip</h4>
            <p className="text-gray-700 leading-relaxed mb-3">
            Your puppy is still growing — make sure they’re eating enough!
            Avoid restricting portions too early, even after neutering or spaying.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
            Underfeeding at this stage can cause nutrient deficiency or slowed bone
            and organ development. Growth continues well beyond appearance:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Small breeds: up to 11–12 months</li>
            <li>Medium breeds: up to 13–14 months</li>
            <li>Large breeds: 15 months or longer</li>
            </ul>
        </section>

        {/* ===== FEEDING TIP: VEGETABLES ===== */}
        <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
            <h4 className="font-semibold text-[#8B6A43] mb-4">
            🥦 Feeding Tip — Add Fresh Vegetables
            </h4>
            <p className="text-gray-700 leading-relaxed mb-3">
            Dogs eating only dry kibble may lack minerals and fiber.  
            If you’ve seen your puppy nibble grass, it’s often instinctive — an attempt to
            restore nutritional balance. Fresh vegetables support digestion naturally.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
            ✅ <strong>Recommendation:</strong> Add small servings of steamed carrots,
            lettuce, cabbage, or broccoli twice weekly for extra vitamins and fiber.
            </p>
            <p className="text-gray-700 leading-relaxed">
            These vegetables promote digestive health, shiny coats, and stronger immunity.
            </p>
        </section>

            {/* ===== PETGO KITCHEN INTRO ===== */}
    <section className="max-w-5xl mx-auto mt-16 mb-20 bg-[#F9F6F1] p-10 rounded-2xl text-center shadow-sm">
    <div className="flex flex-col items-center">
        <div className="text-4xl mb-4">👩‍🍳</div>
        <h4 className="text-2xl font-semibold text-[#8B6A43] mb-3">
        PetGo Kitchen
        </h4>
        <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed mb-8">
        Discover healthy, vet-reviewed recipes made from everyday human ingredients.  
        PetGo Kitchen helps you cook safe, balanced meals your dog will love — from  
        simple snacks to wholesome dinners using real, fresh food.
        </p>

        <Link
        href="/kitchen"
        className="inline-block bg-[#8B6A43] text-white font-medium px-8 py-3 rounded-xl hover:bg-[#745637] transition"
        >
        Explore Dog Recipes →
        </Link>
    </div>
    </section>

        {/* ===== FEEDING FREQUENCY ===== */}
        <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
            <h4 className="font-semibold text-[#8B6A43] mb-4">
            🍽 Feeding Frequency & Meal Quality
            </h4>
            <p className="text-gray-700 leading-relaxed mb-3">
            At this age, three balanced meals daily maintain energy and support even growth.
            Space meals evenly — morning, afternoon, and evening — to prevent bloating.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
            If your dog eats too fast, try a slow-feeder bowl to reduce gulping and gas.
            Observe stool quality and appetite; they’re the simplest health indicators.
            </p>
            <p className="text-gray-700 leading-relaxed">
            🐾 Choose foods with real proteins (chicken, salmon, lamb) and avoid high-salt fillers
            like corn gluten or artificial flavoring.
            </p>
        </section>

        {/* ===== FEEDING GUIDE ===== */}
        <section className="max-w-3xl mx-auto mb-12 bg-[#fffaf5] border border-[#e6dccf] p-8 rounded-2xl shadow-sm">
            <h4 className="font-semibold text-[#8B6A43] mb-4">
            📋 Feeding Guide for 7–10 Months Old
            </h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Daily Feeding: 3 times per day</li>
            <li>Diet Structure: Kibble base + fresh vegetables</li>
            <li>Hydration: Keep fresh water available at all times</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
            Even if your puppy seems satisfied with dry food alone, keep nutrition balanced
            with ample hydration and whole ingredients.
            </p>
        </section>

        {/* ===== PHYSICAL SIGNS ===== */}
        <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
            <h4 className="font-semibold text-[#8B6A43] mb-4">
            🐕 Physical & Behavioral Signs of Growth
            </h4>
            <p className="text-gray-700 leading-relaxed mb-3">
            Around seven months, puppies may appear lean or lanky — completely normal.
            Their coat might still be soft and their frame developing.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
            You’ll notice better focus and patience — your dog listens more,
            waits calmly, and maintains eye contact. This transition marks
            the shift from “baby puppy” to “young adolescent dog.”
            </p>
            <p className="text-gray-700 leading-relaxed">
            Maintain gentle tone, consistent feeding, and daily trust-building routines.
            </p>
        </section>

        {/* ===== EXPERT INSIGHT ===== */}
        <section className="max-w-3xl mx-auto mb-16 bg-white p-8 rounded-2xl shadow-sm">
            <h4 className="font-semibold text-[#8B6A43] mb-4">
            🧠 Expert Insight — Nutrition & Growth Balance
            </h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>
                <strong>Protein:</strong> 22–26% supports muscle and tissue development.
            </li>
            <li>
                <strong>Calcium & Phosphorus:</strong> Maintain skeletal health — avoid excess supplements.
            </li>
            <li>
                <strong>Omega-3 & 6:</strong> Improve coat, reduce inflammation.
            </li>
            <li>
                <strong>Hydration:</strong> Essential for digestion and nutrient transport.
            </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
            Balanced nutrition fuels growth, builds strength, and supports lifelong vitality.
            </p>
        </section>

        {/* ===== RECOMMENDED FOOD PRODUCTS (UPDATED) ===== */}
    <section className="max-w-5xl mx-auto mb-16 bg-white p-8 rounded-2xl shadow-sm">
    <h4 className="font-semibold mb-4 text-[#8B6A43]">
        PetGo Shop | Recommended Puppy Food
    </h4>
    <p className="text-gray-700 mb-8">
        These trusted, vet-approved products are perfect for your puppy’s growth,
        offering premium nutrition and gentle digestion support:
    </p>

    <div className="grid md:grid-cols-3 gap-8">
        {/* Product 1 – Open Farm */}
        <div className="bg-[#F9F6F1] rounded-2xl shadow-sm hover:shadow-md transition flex flex-col p-6 text-center">
        <Image
            src="/openfarm-puppy.jpg"
            alt="Open Farm Ancient Grains Puppy Food"
            width={280}
            height={200}
            className="object-contain mb-4 rounded-xl"
        />
        <p className="text-gray-800 font-medium mb-1">
            Open Farm, Ancient Grains Dry Dog Food for Puppies
        </p>
        <p className="text-sm text-gray-600 mb-1">Seller: Open Farm</p>
        <p className="text-[#8B6A43] font-semibold mb-3">$31.99</p>
        <Link
            href="https://www.amazon.ca/Open-Farm-Wholesome-Artificial-Preservatives/dp/B088C3ZQ11/ref=sr_1_5?dib=eyJ2IjoiMSJ9.VSVZA7jB8lyL4Tg_QDEDBYqJQcaavoiF_PKdeGSghLDi90lMBokZfkXG1AH_czXv2nhWeSrF-WxtoNF2DzjMhRrhXTCo7MBtK26pVBJm_vWChWmwH2hvd0jCQM-ekgclAORniTW90I25R7JOX94wcwIkX-AS8AiXsvSeBmiFciPzlmg824r22CdVCWg9IlHskzAJnJ_82V6dfd2E4uFZ4Fodzs65vzgLfOPViFPJAy9MA8HKF33e12GPwF5wqnMalJ6Y1hJ5qQ9SH4g0YlHUMDHbeRJn-rkOUCWx3UzfM54.lqfCmVLW9RJzvCgTU-hxAx0QVNZZr_6I6BTXjxRXb-E&dib_tag=se&keywords=open%2Bfarm%2Bpuppy&qid=1761536124&sr=8-5&th=1"
            target="_blank"
            className="text-[#8B6A43] hover:underline font-medium text-sm"
        >
            View on Amazon &gt;
        </Link>
        </div>

        {/* Product 2 – Purina Pro Plan */}
        <div className="bg-[#F9F6F1] rounded-2xl shadow-sm hover:shadow-md transition flex flex-col p-6 text-center">
        <Image
            src="/purina-proplan-puppy.jpg"
            alt="Purina Pro Plan Dry Puppy Food"
            width={280}
            height={200}
            className="object-contain mb-4 rounded-xl"
        />
        <p className="text-gray-800 font-medium mb-1">
            Purina Pro Plan Dry Puppy Food, Shredded Chicken &amp; Rice
        </p>
        <p className="text-sm text-gray-600 mb-1">Seller: Pro Plan</p>
        <p className="text-[#8B6A43] font-semibold mb-3">$92.97</p>
        <Link
            href="https://www.amazon.ca/Purina-Shredded-Chicken-Formula-34-Pound/dp/B005F42UJA/ref=sr_1_6?dib=eyJ2IjoiMSJ9.W6tugPcOCFIJA9Xq0NqROUPfG8knIkJq972X5PhamH6zpiQ7ZVA0Gu-jTVcqYnASu0lP0OLroHCLon0XtFA4LqV-JAkCrfaCYjxb9GCcizsP2dRwM6oLnttFKNYsdpb4SLXwevSTTQB3A0TGRvAWYm3rN1X6wpDMF3ILBvPMJAXcXlKgdpn0hIbGyiZUIOUtonAfgwdLX1mQ8FLxS5UTX3WoVQZu9bx6OiG9J3ojiG0DeHGakAZ4RtG1qG_NmJGOtoYj4u5eolRGZT184lvrvkqI-dCeJxm0k175BgpS-oo.3xANhwZKrsuiOTVyXl3dJ3lPLccWuvLUM9p0PPbGXrI&dib_tag=se&keywords=purina%2Bpro%2Bpuppy&qid=1761536275&sr=8-6&th=1"
            target="_blank"
            className="text-[#8B6A43] hover:underline font-medium text-sm"
        >
            View on Amazon &gt;
        </Link>
        </div>

        {/* Product 3 – Royal Canin */}
        <div className="bg-[#F9F6F1] rounded-2xl shadow-sm hover:shadow-md transition flex flex-col p-6 text-center">
        <Image
            src="/royalcanin-puppy.jpg"
            alt="Royal Canin Puppy Food Small Breed"
            width={280}
            height={200}
            className="object-contain mb-4 rounded-xl"
        />
        <p className="text-gray-800 font-medium mb-1">
            Royal Canin Small Breed Dry Puppy Food
        </p>
        <p className="text-sm text-gray-600 mb-1">Seller: ROYAL CANIN</p>
        <p className="text-[#8B6A43] font-semibold mb-3">$79.99</p>
        <Link
            href="https://www.amazon.ca/Royal-Canin-Nutrition-Development-Digestive/dp/B0BZ2G12PJ/ref=sr_1_1_sspa?dib=eyJ2IjoiMSJ9.kOtiRUcFbvINFZW_kKAB3l5gH_J7YHyiXWiaflDKU57_wuYqrPZAwX67DNUoO_ELmVBagqO_ScEUsSq_BwZdiVVMxywm5RPspvyyd9ttBc_ZImQltNAJHLjvfnU7eeuZMea5p9FWKVpSpD9fzbEjAUsasYNN6nLIWS-Tl1SJxUOyJs6FqFr-saSB-e90xknmx1Jfh-amUSBjqQxCrGRj1j1REzjbSyKhuCZmRAX_snQh4Qy8qEvMlSdfCIxwXrEIcG4EjUm_oP8fPjOyxh_xKBdPf4Ug8C6E81EIQ0h8cJ4.vB2LlUdiSlJcHOT66Njg60s8S5dpl11fsnn8fGyKDHk&dib_tag=se&keywords=royal+canin+puppy+food&qid=1761536495&rdc=1&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"
            target="_blank"
            className="text-[#8B6A43] hover:underline font-medium text-sm"
        >
            View on Amazon &gt;
        </Link>
        </div>
    </div>
    </section>


        {/* ===== PETGO ADVICE ===== */}
        <section className="max-w-3xl mx-auto mb-16 bg-[#fffaf5] border border-[#e6dccf] rounded-2xl p-8 shadow-sm">
            <h4 className="font-semibold text-[#8B6A43] mb-3">❤️ PetGo Advice</h4>
            <p className="text-gray-700 leading-relaxed mb-3">
            Healthy feeding habits are the foundation of lifelong well-being.
            Generous nutrition, paired with regular activity and affection,
            helps your puppy grow into a resilient, joyful companion.
            </p>
            <p className="text-gray-700 leading-relaxed">
            Feed with care. Love with consistency.  
            </p>
        </section>

        {/* ===== APP ADVERTISEMENT + COPYRIGHT ===== */}
        <section className="text-center max-w-4xl mx-auto mb-20">
            <h4 className="font-semibold mb-3 text-[#111827]">
            Continue with PetGo’s Puppy Care Guide
            </h4>
            <p className="text-gray-700 mb-10">
            PetGo helps pet parents build healthy routines from puppyhood to adulthood — every meal, every milestone.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-lg">
            <Image
                src="/petgoapp-banner.jpg"
                alt="PetGo mobile app banner"
                width={1200}
                height={600}
                className="object-cover w-full h-auto"
                priority
            />
            <div className="absolute top-6 right-6 text-right">
                <Link
                href="/mobile-app"
                className="inline-block border border-white text-white hover:bg-white hover:text-[#8B6A43] px-6 py-3 rounded-lg font-medium shadow-sm transition"
                >
                Explore PetGo Mobile App &gt;
                </Link>
            </div>
            </div>

            <p className="text-gray-500 text-xs mt-4">
            © 2025 PetGo. All Rights Reserved
            </p>
        </section>
        </main>
    );
    }