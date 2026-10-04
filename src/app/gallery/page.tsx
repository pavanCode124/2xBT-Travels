import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { packages } from "@/data/packages";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photographs from 2XBT departures across the Himalayas, Kerala, Odisha and central India.",
};

type Shot = { src: string; alt: string; caption: string; span: string };

const shots: Shot[] = [
  {
    src: "/images/group-maheshwar.webp",
    alt: "A 2XBT group sitting together on the temple steps at Maheshwar",
    caption: "The whole group, on the steps at Maheshwar",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    src: "/images/group-kedarnath.webp",
    alt: "A 2XBT group together at a stop on the Kedarnath route",
    caption: "The group, somewhere on the Kedarnath road",
    span: "sm:col-span-2",
  },
  {
    src: "/images/trek-clouds.webp",
    alt: "A traveller looking out over a valley filled with low cloud",
    caption: "Above the cloud line, Western Ghats",
    span: "sm:col-span-2",
  },
  {
    src: "/images/snow-forest.webp",
    alt: "A traveller standing among snow covered pines",
    caption: "Fresh snow in the pines",
    span: "sm:row-span-2",
  },
  {
    src: "/images/kedarnath.webp",
    alt: "Kedarnath Temple lit up against the snow",
    caption: "Kedarnath at first light",
    span: "",
  },
  {
    src: "/images/kerala.webp",
    alt: "A traditional houseboat on the Kerala backwaters",
    caption: "Alleppey, houseboat night",
    span: "sm:col-span-2",
  },
  {
    src: "/images/puri.webp",
    alt: "Shri Jagannath Temple at Puri under a setting sun",
    caption: "Puri, just before the evening crowd",
    span: "sm:row-span-2",
  },
  {
    src: "/images/jodhpur.webp",
    alt: "Mehrangarh Fort above the blue city of Jodhpur at dusk",
    caption: "Mehrangarh over Jodhpur",
    span: "sm:col-span-2",
  },
  {
    src: "/images/ujjain.webp",
    alt: "Mahakaleshwar Temple at Ujjain",
    caption: "Mahakaleshwar, Ujjain",
    span: "",
  },
  {
    src: "/images/do-dham.webp",
    alt: "Kedarnath, Tungnath and Badrinath temples",
    caption: "The dhams of the Do Dham route",
    span: "sm:col-span-2",
  },
];

export default function GalleryPage() {
  return (
    <>
      <section className="shell pt-12 pb-10 md:pt-16">
        <h1 className="max-w-[16ch] font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
          Pictures from the road
        </h1>
        <p
          className="mt-5 max-w-[56ch] text-lg leading-relaxed"
          style={{ color: "var(--ink-soft)" }}
        >
          Shots from our own departures and from the destinations on the current
          tour list. Tag us on Instagram and yours could land here.
        </p>
      </section>

      <section className="shell pb-20">
        <ul className="grid auto-rows-[13rem] grid-cols-2 gap-4 sm:grid-cols-4 sm:auto-rows-[14rem]">
          {shots.map((shot, i) => (
            <Reveal
              as="li"
              key={shot.src + i}
              delay={(i % 4) * 60}
              className={`group relative overflow-hidden rounded-2xl ${shot.span}`}
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                priority={i < 3}
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 ease-[var(--ease-out-strong)] motion-safe:group-hover:scale-[1.04]"
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(to top, rgb(1 26 46 / 0.86), rgb(1 26 46 / 0))",
                }}
              >
                <p className="text-[0.8125rem] font-medium text-white">{shot.caption}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      <section
        className="border-t py-16"
        style={{ backgroundColor: "var(--bg-sunken)", borderColor: "var(--rule)" }}
      >
        <div className="shell flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              Want to be in next season&apos;s photos?
            </h2>
            <p className="mt-2" style={{ color: "var(--ink-soft)" }}>
              {packages.length} departures are open for booking right now.
            </p>
          </div>
          <Link href="/packages" className="btn btn-primary shrink-0">
            Browse tours
            <ArrowRight size={17} weight="bold" />
          </Link>
        </div>
      </section>
    </>
  );
}
