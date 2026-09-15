import Link from "next/link";

const works = [
  {
    number: "01",
    title: "灯",
    category: "GENERATIVE ART",
    tools: "TouchDesigner / GLSL",
    video: "/videos/street-light.mp4",
    href: "/works/light",
  },
  {
    number: "02",
    title: "FLOWER OF THE STAR",
    category: "GENERATIVE ART",
    tools: "TouchDesigner / GPU Particles",
    video: "/videos/star-flower.mp4",
    href: "/works/star-flower",
  },
  {
    number: "03",
    title: "DISTORT LIGHT AND GRAVITY LENSES",
    category: "PHYSICS / VISUAL STUDY",
    tools: "TouchDesigner / Lens Distort",
    video: "/videos/gravity-lens.mp4",
    href: "/works/gravity-lens",
  },
];

export default function Home() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://eitohagi.vercel.app/#person",
    name: "Eito Hagi",
    alternateName: "萩 栄斗",
    url: "https://eitohagi.vercel.app/",
    jobTitle: "Creative Technologist",
    description:
      "Eito Hagi (萩 栄斗) is a Creative Technologist exploring the intersection of physics, computation, physical simulation, generative art, and interactive media.",
    knowsAbout: [
      "Physics",
      "Physical Simulation",
      "Creative Technology",
      "Creative Coding",
      "Generative Art",
      "Interactive Media",
      "TouchDesigner",
      "GLSL",
      "Houdini",
      "Blender",
      "Python",
    ],
    sameAs: ["https://www.instagram.com/eightyeighty888/"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd),
        }}
      />

      <main className="overflow-hidden bg-black text-white">

        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="relative flex min-h-screen flex-col justify-between px-6 py-8 md:px-10 md:py-10">

          {/* TOP */}
          <div className="flex items-start justify-between text-[10px] tracking-[0.25em] text-white/40 md:text-xs">
            <p>
              EITO HAGI
            </p>

            <p className="text-right">
              CREATIVE TECHNOLOGIST
              <br />
              TOKYO / 2026
            </p>
          </div>

          {/* MAIN TITLE */}
          <div className="py-24">

            <p className="mb-6 text-xs tracking-[0.3em] text-white/30">
              PHYSICS / COMPUTATION / ART
            </p>

            <h1 className="max-w-7xl text-[14vw] font-normal leading-[0.78] tracking-[-0.06em] md:text-[10vw]">
              PHYSICS
              <br />

              <span className="ml-[10vw] text-white/25">
                ×
              </span>

              <br />

              <span className="ml-[5vw]">
                GENERATIVE
              </span>

              <br />

              <span className="ml-[20vw]">
                ART
              </span>
            </h1>

          </div>

          {/* BOTTOM */}
          <div className="flex items-end justify-between">

            <p className="max-w-xs text-xs leading-6 text-white/40">
              Exploring physical phenomena through
              computation, simulation and digital expression.
            </p>

            <p className="text-[10px] tracking-[0.3em] text-white/30 md:text-xs">
              SCROLL ↓
            </p>

          </div>

        </section>


        {/* =====================================================
            WORKS
        ===================================================== */}
        <section className="px-6 py-32 md:px-10 md:py-44">

          {/* HEADER */}
          <div className="mb-24 flex items-end justify-between border-b border-white/15 pb-5">

            <div>
              <p className="text-[10px] tracking-[0.3em] text-white/30">
                INDEX
              </p>

              <h2 className="mt-3 text-xl tracking-tight">
                SELECTED WORKS
              </h2>
            </div>

            <p className="text-xs text-white/30">
              01 — 03
            </p>

          </div>


          {/* WORK LIST */}
          <div className="space-y-36 md:space-y-52">

            {works.map((work, index) => (

              <article
                key={work.number}
                className="group"
              >

                <Link href={work.href}>

                  {/* PROJECT TOP */}
                  <div className="mb-5 flex items-center justify-between text-[10px] tracking-[0.2em] text-white/35 md:text-xs">

                    <p>
                      {work.number}
                    </p>

                    <p>
                      {work.category}
                    </p>

                  </div>


                  {/* VIDEO */}
                  <div
                    className={`overflow-hidden bg-zinc-950 ${
                      index === 1
                        ? "md:ml-[10vw] md:w-[80%]"
                        : index === 2
                          ? "md:ml-[5vw] md:w-[90%]"
                          : "w-full"
                    }`}
                  >

                    <div className="aspect-video overflow-hidden">

                      <video
                        src={work.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.015]"
                      />

                    </div>

                  </div>


                  {/* PROJECT INFORMATION */}
                  <div
                    className={`mt-7 grid gap-5 md:grid-cols-[1fr_auto] ${
                      index === 1
                        ? "md:ml-[10vw] md:w-[80%]"
                        : index === 2
                          ? "md:ml-[5vw] md:w-[90%]"
                          : ""
                    }`}
                  >

                    <div>

                      <h3 className="max-w-5xl text-3xl font-normal leading-none tracking-[-0.03em] md:text-6xl">
                        {work.title}
                      </h3>

                      <p className="mt-4 text-xs tracking-[0.12em] text-white/35">
                        {work.tools}
                      </p>

                    </div>

                    <p className="self-end text-xl text-white/30 transition duration-300 group-hover:text-white">
                      ↗
                    </p>

                  </div>

                </Link>

              </article>

            ))}

          </div>

        </section>


        {/* =====================================================
            ABOUT
        ===================================================== */}
        <section className="border-t border-white/15 px-6 py-32 md:px-10 md:py-44">

          <div className="grid gap-16 md:grid-cols-[1fr_3fr]">

            <div>
              <p className="text-[10px] tracking-[0.3em] text-white/30">
                ABOUT
              </p>
            </div>

            <div>

              <p className="text-xs tracking-[0.2em] text-white/35">
                EITO HAGI / 萩 栄斗
              </p>

              <h2 className="mt-8 max-w-5xl text-4xl font-normal leading-[1.05] tracking-[-0.035em] md:text-7xl">
                Exploring the space
                between physics,
                computation and art.
              </h2>

              <p className="mt-12 max-w-2xl text-sm leading-7 text-white/45 md:text-base md:leading-8">
                Eito Hagi is a Creative Technologist exploring physical
                phenomena and computational systems as new forms of visual
                expression. His practice moves between physical simulation,
                generative art and interactive media.
              </p>

            </div>

          </div>


          {/* PRACTICE */}
          <div className="mt-40 grid gap-16 border-t border-white/10 pt-10 md:grid-cols-[1fr_3fr]">

            <p className="text-[10px] tracking-[0.3em] text-white/30">
              PRACTICE
            </p>

            <div className="grid gap-x-10 gap-y-6 text-xl tracking-tight md:grid-cols-2 md:text-3xl">

              <p>Physical Simulation</p>
              <p>Generative Art</p>
              <p>Creative Coding</p>
              <p>Interactive Media</p>

            </div>

          </div>


          {/* TOOLS */}
          <div className="mt-24 grid gap-16 border-t border-white/10 pt-10 md:grid-cols-[1fr_3fr]">

            <p className="text-[10px] tracking-[0.3em] text-white/30">
              TOOLS
            </p>

            <div className="flex max-w-3xl flex-wrap gap-x-10 gap-y-5 text-sm text-white/50">

              <span>TouchDesigner</span>
              <span>Houdini</span>
              <span>GLSL</span>
              <span>Blender</span>
              <span>Python</span>

            </div>

          </div>

        </section>


        {/* =====================================================
            STATEMENT
        ===================================================== */}
        <section className="border-t border-white/15 px-6 py-32 md:px-10 md:py-44">

          <p className="mb-16 text-[10px] tracking-[0.3em] text-white/30">
            STATEMENT
          </p>

          <p className="max-w-6xl text-4xl leading-[1.08] tracking-[-0.035em] md:text-7xl">
            Creating new forms of expression by translating
            physical phenomena into computational worlds.
          </p>

        </section>


        {/* =====================================================
            CONTACT
        ===================================================== */}
        <footer className="border-t border-white/15 px-6 pb-10 pt-24 md:px-10 md:pt-32">

          <p className="text-[10px] tracking-[0.3em] text-white/30">
            CONTACT
          </p>

          <p className="mt-10 max-w-6xl text-[12vw] leading-[0.8] tracking-[-0.06em] md:text-[9vw]">
            LET&apos;S
            <br />
            CREATE.
          </p>


          <div className="mt-24 flex flex-col gap-4 border-t border-white/15 pt-7 text-xs tracking-[0.15em] text-white/40 md:flex-row md:items-center md:justify-between">

            <div className="flex gap-8">

              <a
                href="https://www.instagram.com/eightyeighty888/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                INSTAGRAM ↗
              </a>

              <a
                href="mailto:eito.hagi28@gmail.com"
                className="transition hover:text-white"
              >
                EMAIL ↗
              </a>

            </div>

            <p className="text-white/20">
              © 2026 EITO HAGI
            </p>

          </div>

        </footer>

      </main>
    </>
  );
}