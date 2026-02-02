export interface Travel {
  id: string;
  title: string;
  location: string;
  description: string;
  summary: string;
  publishedAt: string;
  slug: string;
  images: string[];
  content: string;
}

export const TRAVELS: Travel[] = [
  {
  "id": "1",
  "title": "The Eagle's Nest: A Grueling Ride & Trek to Fort Torna",
  "location": "Pune, India",
  "description": "A high-octane bike ride followed by a challenging ascent to the highest fort in Pune district.",
  "summary": "From 5 AM starts to 90-degree rock climbs, discover why Torna remains the ultimate test of endurance for every trekker.",
  "publishedAt": "2026-01-17",
  "slug": "trek-to-fort-torna-pune",
  "images": [
    "torna1.jpg",
    "torna2.jpg",
    "torna3.jpg",
    "torna4.jpg",
    "torna5.jpg",
    "torna6.jpg",
    
  ],
  "content": "## The Early Bird’s Reward\n\nOur journey began at **5:00 AM**, escaping the city's hustle for a 60 km ride toward the horizons of Pune. The road was a biker’s dream—zero traffic, winding ghats, and stretches of off-roading that woke us up better than any coffee could. After a long week at the office, breathing in that crisp morning air was exactly the reset we needed.\n\nBy the time we reached the serene **Khadakwasla Lake**, a hot bowl of Maggi was mandatory. With fueled bodies and spirits, we arrived at the base of Torna by 9:20 AM.\n\n---\n\n## Persistence Over Pain\n\nThey told us it was a 1.5-hour trek. They didn't mention the **immediate, steep inclination** from step one. Within 20 minutes, our group was catching our breath on the ground, questioning why we traded a comfortable bed for this struggle. \n\nWe pivoted our strategy: **The Checkpoint Method.** We marked small goals, resting for 5 minutes at each before pushing forward. The trail threw everything at us—including **90-degree rock patches** where a single rope was our only lifeline.\n\n> **The Motivation:** Thinking of Chhatrapati Shivaji Maharaj and his Mawalas how they didn't just climb these peaks but lived here and defended them against empires gave us the mental steel to keep moving.\n\n---\n\n## Reaching the 'Eagle’s Nest'\n\nAfter 20 to 30 grueling checkpoints, we finally stood before the massive **Konkan Darwaja**. Following my personal tradition, I bowed my head at the gates of **Prachandagad** (Torna) to seek blessings. \n\nThe temples at the top offered an incredible sense of peace. The positive vibes were so thick they practically recharged our batteries, which was lucky, because the hardest part was yet to come.\n\n### The Zunjar Machi Challenge\nWe decided to march toward **Zunjar Machi**. Don’t let the distance fool you; it’s a treacherous descent. We had to navigate 90-degree downward slopes on slick stone with only a rope. One wrong step and it's over. Climbing back up was even more taxing, but the view from the Machi made every drop of sweat worth it.\n\n---\n\n## The Journey Home\n\nWe descended to the base in about 40 minutes, sustained by fresh cucumber and lemon juice sold by local vendors. But the day wasn't over—we still had the ride back to Pune. \n\n* **The Feast:** We stopped at a local dhaba for a traditional Maharashtrian lunch.\n* **The Cool Down:** On the way back, we found a clean river with a steady flow. We dipped our exhausted legs into the cold water, watching the sunset—a perfect, quiet end to a high-adrenaline day.\n\nTorna isn't just a trek; it's a reminder of what we're capable of when we refuse to quit."
},
  {
    id: "2",
    title: "Kerala Backwaters Adventure",
    location: "Kerala, India",
    description: "Serene boat rides through coconut-lined backwaters and lush green landscapes",
    summary: "Experience the tranquility of Kerala's backwaters on a traditional houseboat",
    publishedAt: "2024-11-20",
    slug: "kerala-backwaters",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=400&fit=crop",
    ],
    content: `# Kerala Backwaters Adventure

Kerala is called "God's Own Country" for a reason. The backwaters here are a paradise on earth, offering peace and beauty in abundance.

## The Houseboat Experience

Staying on a traditional houseboat was like living in a dream. Gliding through narrow waterways lined with coconut palms, watching the sunset paint the sky in golden hues.

## Local Life

We stopped at fishing villages where fishermen demonstrated traditional fishing techniques passed down through generations. The simplicity and authenticity were captivating.

## Culinary Delights

The seafood here is incomparable. Fresh catch prepared with traditional spices created flavors that were absolutely divine. Every meal was an adventure in itself.

## Reflections

This trip reminded me why travel is so important. It opens your mind, connects you with different cultures, and creates memories that last a lifetime.`,
  },
  {
    id: "3",
    title: "Desert Safari in Rajasthan",
    location: "Rajasthan, India",
    description: "Golden dunes, ancient forts, and vibrant desert culture under starlit skies",
    summary: "Experience the magic of the Thar Desert with camel safaris and desert camps",
    publishedAt: "2024-10-10",
    slug: "rajasthan-desert-safari",
    images: [
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=400&fit=crop",
    ],
    content: `# Desert Safari in Rajasthan

The Thar Desert is a land of contrasts - harsh yet beautiful, ancient yet vibrant. This adventure was unlike anything I'd experienced before.

## The Camel Safari

Riding across the golden dunes on a camel was surreal. As the sun began to set, painting the sand in shades of orange and red, I felt truly alive.

## Desert Camp Experience

The nights in the desert camp were magical. Sitting around a bonfire, listening to traditional music and folk tales, while the stars seemed to multiply above us.

## Ancient Forts and Palaces

Jaisalmer and Jodhpur are home to stunning architectural marvels. The intricate stone carvings and massive fortifications speak of a glorious past.

## Connecting with Nature

The desert teaches you about simplicity and survival. It's a humbling experience that makes you appreciate modern comforts while craving the simplicity of desert life.`,
  },
];
