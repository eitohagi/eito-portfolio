import type { Metadata } from "next";
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
      "A visual study exploring artificial light, urban atmosphere, and the subtle presence of illumination and human-made sound.",

    concept:
      "On a rainy night, artificial light does not simply illuminate the street. It meets the rain, scatters through the air, and becomes part of the atmosphere around us. This work explores the encounter between streetlights and rain through a particle-based system. Rather than simply simulating the physical behavior of light, it focuses on the subtle harmony that emerges between nature and things created by humans. Sound and light, both shaped by human intervention, respond to one another within the rain, forming an environment that exists somewhere between the artificial and the natural.",
  },

  "star-flower": {
    number: "02",
    title: "FLOWER OF THE STAR",
    year: "2026",
    category: "GENERATIVE ART",
    tools: "TouchDesigner / GPU Particles",
    video: "/videos/star-flower.mp4",

    description:
      "A generative particle work inspired by stars, light, and the distortion of nebulae.",

    concept:
      "Light is something we can observe, but never hold. It passes through space and disappears beyond our reach. What if there were a lens, like a metamaterial, capable of capturing and preserving light? This work begins with that imaginary possibility. If light traveling through the universe could be held within such a material, perhaps a fragment of the cosmos itself could be kept in the palm of our hand. FLOWER OF THE STAR explores this idea of preserving light — imagining a small, contained universe formed from something that, by nature, cannot remain still.",
  },

  "gravity-lens": {
    number: "03",
    title: "DISTORT LIGHT AND GRAVITY LENSES",
    year: "2026",
    category: "PHYSICS / VISUAL STUDY",
    tools: "TouchDesigner / Lens Distort",
    video: "/videos/gravity-lens.mp4",

    description:
      "A visual experiment exploring the distortion of metallic material through the idea of gravitational lensing.",

    concept:
      "In the universe, massive objects distort the structure of spacetime. Light traveling through this distorted space is bent, producing the phenomenon we observe as gravitational lensing. But what if such an immense distortion could act upon something tangible? This work translates that question into a physical simulation. Instead of light, gravitational distortion is imagined as acting upon a massive metallic chain. Its structure bends and moves under forces inspired by the deformation of spacetime. By bringing a phenomenon that normally exists on an astronomical scale into an artificial material, the work explores how cosmic forces might be perceived through matter.",
  },
};

type WorkSlug = keyof typeof works;

/* =========================================================
   SEO METADATA
========================================================= */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const work = works[slug as WorkSlug];

  if (!work) {
    return {};
  }

  const url = `https://eitohagi.vercel.app/works/${slug}`;

  return {
    title: work.title,

    description: `${work.description} A work by Eito Hagi (萩 栄斗), Creative Technologist.`,

    alternates: {
      canonical: url,
    },

    authors: [
      {
        name: "Eito Hagi",
        url: "https://eitohagi.vercel.app/",
      },
    ],

    creator: "Eito Hagi",

    openGraph: {
      title: `${work.title} | Eito Hagi`,
      description: `${work.description} A work by Eito Hagi (萩 栄斗).`,
      url,
      type: "article",
      siteName: "Eito Hagi | Creative Technologist",
    },

    twitter: {
      card: "summary_large_image",
      title: `${work.title} | Eito Hagi`,
      description: `${work.description} A work by Eito Hagi (萩 栄斗).`,
    },
  };
}

/* =========================================================
   WORK PAGE
========================================================= */

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

        <p className="mt-6 text-xs tracking-[0.2em] text-gray-600">
          A WORK BY EITO HAGI / CREATIVE TECHNOLOGIST
        </p>
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

          {/* YEAR */}
          <div>
            <p className="mb-2 text-gray-600">
              YEAR
            </p>

            <p>
              {work.year}
            </p>
          </div>

          {/* TOOLS */}
          <div>
            <p className="mb-2 text-gray-600">
              TOOLS
            </p>

            <p>
              {work.tools}
            </p>
          </div>

          {/* CREATOR */}
          <div>
            <p className="mb-2 text-gray-600">
              CREATOR
            </p>

            <p>
              Eito Hagi / 萩 栄斗
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