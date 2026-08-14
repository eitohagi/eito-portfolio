import Link from "next/link";

const works = [
  {
    number: "01",
    title: "灯",
    category: "TouchDesigner / GLSL",
    video: "/videos/street-light.mp4",
    href: "/works/light",
  },
  {
    number: "02",
    title: "FLOWER OF THE STAR",
    category: "TouchDesigner / GPU Particles",
    video: "/videos/star-flower.mp4",
    href: "/works/star-flower",
  },
  {
    number: "03",
    title: "DISTORT LIGHT AND GRAVITY LENSES",
    category: "TouchDesigner / Lens Distort",
    video: "/videos/gravity-lens.mp4",
    href: "/works/gravity-lens",
  },
];

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="relative flex min-h-screen flex-col justify-center px-10">

        <p className="mb-8 text-sm tracking-[0.3em] text-gray-500">
          EITO HAGI / CREATIVE TECHNOLOGIST
        </p>

        <h1 className="text-6xl font-medium leading-[0.9] tracking-tight md:text-8xl">
          PHYSICS
          <br />

          <span className="text-gray-600">
            ×
          </span>

          <br />

          GENERATIVE ART

          <br />

          <span className="text-gray-600">
            ×
          </span>

          <br />

          INTERACTIVE MEDIA
        </h1>

        <p className="absolute bottom-10 right-10 text-xs tracking-[0.3em] text-gray-500">
          ↓ SCROLL
        </p>

      </section>


      {/* SELECTED WORKS */}
      <section className="px-10 py-32">

        {/* SECTION HEADER */}
        <div className="mb-20 flex items-center justify-between border-b border-white/20 pb-5">

          <p className="text-xs tracking-[0.3em] text-gray-500">
            SELECTED WORKS
          </p>

          <p className="text-xs tracking-[0.3em] text-gray-600">
            2026
          </p>

        </div>


        {/* WORK LIST */}
        <div className="space-y-28">

          {works.map((work) => (

            <article
              key={work.number}
              className="group"
            >

              <Link href={work.href}>

                {/* VIDEO */}
                <div className="mb-6 aspect-[16/9] w-full overflow-hidden bg-zinc-900">

                  <video
                    src={work.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]"
                  />

                </div>


                {/* PROJECT INFORMATION */}
                <div className="grid grid-cols-[60px_1fr] gap-4">

                  <p className="text-xs text-gray-600">
                    {work.number}
                  </p>

                  <div>

                    <h2 className="text-3xl font-normal tracking-tight transition duration-300 group-hover:text-gray-400 md:text-5xl">
                      {work.title}
                    </h2>

                    <p className="mt-3 text-sm text-gray-500">
                      {work.category}
                    </p>

                  </div>

                </div>

              </Link>

            </article>

          ))}

        </div>

      </section>


      {/* ABOUT */}
      <section className="grid min-h-screen gap-16 px-10 py-32 md:grid-cols-[1fr_2fr]">

        <p className="text-xs tracking-[0.3em] text-gray-500">
          ABOUT
        </p>

        <div>

          <p className="max-w-4xl text-4xl leading-tight tracking-tight md:text-6xl">
            Exploring physical phenomena through computation,
            generative systems and audiovisual expression.
          </p>

          <p className="mt-16 max-w-2xl text-base leading-8 text-gray-500">
            My practice combines physics, TouchDesigner, GLSL,
            Houdini, Blender and Python to create visual and
            interactive experiences.
          </p>

        </div>

      </section>


      {/* CONTACT */}
      <footer className="px-10 pb-10 pt-32">

        <div className="border-t border-white/20 pt-10">

          <p className="mb-16 text-5xl tracking-tight md:text-8xl">
            LET&apos;S CREATE
            <br />
            SOMETHING NEW.
          </p>


          {/* CONTACT LINKS */}
          <div className="flex flex-wrap gap-8 text-sm text-gray-500">

            <a
              href="#"
              className="transition hover:text-white"
            >
              INSTAGRAM
            </a>

            <a
              href="#"
              className="transition hover:text-white"
            >
              VIMEO
            </a>

            <a
              href="mailto:yourmail@example.com"
              className="transition hover:text-white"
            >
              EMAIL
            </a>

          </div>


          {/* COPYRIGHT */}
          <p className="mt-20 text-xs text-gray-700">
            © 2026 EITO HAGI
          </p>

        </div>

      </footer>

    </main>
  );
}