import Link from "next/link";
import { notFound } from "next/navigation";

const works = {
  light: {
    number: "01",
    title: "灯り",
    year: "2026",
    category: "GENERATIVE ART",
    tools: "TouchDesigner / GLSL",
    video: "/videos/street-light.mp4",

    description:
      "A visual study exploring artificial light, urban atmosphere and the subtle presence of illumination.",

    concept:
      "This work investigates how light changes the perception of space and how familiar urban objects can become abstract visual material through generative processes.",
  },

  "star-flower": {
    number: "02",
    title: "FLOWER OF THE STAR",
    year: "2026",
    category: "GENERATIVE ART",
    tools: "TouchDesigner / GPU Particles",
    video: "/videos/star-flower.mp4",

    description:
      "A generative particle work inspired by stars, growth and organic structures.",

    concept:
      "Particles emerge, spread and gather into structures reminiscent of flowers and celestial systems. The work explores the boundary between natural growth and computational behavior.",
  },

  "gravity-lens": {
    number: "03",
    title: "DISTORT LIGHT AND GRAVITY LENSES",
    year: "2026",
    category: "PHYSICS / VISUAL STUDY",
    tools: "TouchDesigner / Lens Distort",
    video: "/videos/gravity-lens.mp4",

    description:
      "A visual experiment exploring the distortion of light through the idea of gravitational lensing.",

    concept:
      "Inspired by gravitational lensing, this work treats distortion not as an error but as a visual phenomenon. Light and space are transformed to create an abstract interpretation of how gravity can bend our perception.",
  },
};

type WorkSlug = keyof typeof works;

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const work = works[slug as WorkSlug];

  if (!work) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">

      {/* BACK */}
      <section className="px-10 pb-20 pt-10">
        <Link
          href="/"
          className="text-xs tracking-[0.3em] text-gray-500 transition hover:text-white"
        >
          ← BACK
        </Link>
      </section>


      {/* TITLE */}
      <section className="px-10 pb-20">

        <p className="mb-5 text-xs tracking-[0.3em] text-gray-500">
          {work.number} / {work.category}
        </p>

        <h1 className="max-w-6xl text-6xl leading-[0.9] tracking-tight md:text-9xl">
          {work.title}
        </h1>

      </section>


      {/* VIDEO */}
      <section className="w-full">

        <video
          src={work.video}
          autoPlay
          muted
          loop
          playsInline
          controls
          className="w-full"
        />

      </section>


      {/* INFORMATION */}
      <section className="grid gap-16 px-10 py-32 md:grid-cols-[1fr_2fr]">

        <div className="space-y-10 text-sm">

          <div>
            <p className="mb-2 text-gray-600">
              YEAR
            </p>

            <p>
              {work.year}
            </p>
          </div>


          <div>
            <p className="mb-2 text-gray-600">
              TOOLS
            </p>

            <p>
              {work.tools}
            </p>
          </div>

        </div>


        <div>

          <p className="max-w-4xl text-3xl leading-tight tracking-tight md:text-5xl">
            {work.description}
          </p>

          <p className="mt-12 max-w-2xl text-base leading-8 text-gray-500">
            {work.concept}
          </p>

        </div>

      </section>


      {/* NEXT AREA */}
      <section className="border-t border-white/20 px-10 py-24">

        <Link
          href="/"
          className="text-sm tracking-[0.2em] text-gray-500 transition hover:text-white"
        >
          VIEW ALL WORKS →
        </Link>

      </section>

    </main>
  );
}