import LinkedIn from "./LinkedIn";
import GitHub from "./GitHub";
import Replay from "./Replay";
import Resume from "./Resume";

export default MainSection;

const links = [
  {
    href: "https://www.linkedin.com/in/dgthanhdat/",
    label: "LinkedIn",
    icon: <LinkedIn />,
    external: true,
  },
  {
    href: "https://github.com/denryh",
    label: "GitHub",
    icon: <GitHub />,
    external: true,
  },
  {
    href: "mailto:datdangdev@gmail.com",
    label: "Email",
    icon: <Resume />,
  },
  {
    href: "https://www.datdang.space/",
    label: "Website",
    icon: <Resume />,
    external: true,
  },
];

function MainSection({
  active,
  onReplay,
}: {
  active: boolean;
  onReplay: () => void;
}) {
  return (
    <section
      className={`absolute inset-0 z-10 grid place-items-center transition-all duration-1000 ${active ? "visible opacity-100" : "invisible opacity-0"}`}
    >
      <div className="w-full max-w-xl rounded-3xl border border-white/20 bg-stone-950/70 p-8 shadow-2xl shadow-black/30 backdrop-blur">
        <p className="text-sm uppercase tracking-[0.3em] text-stone-400">
          Software Engineer
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">
          Henry Dang
        </h1>
        <p className="mx-auto mt-4 max-w-prose text-stone-300">
          I build practical products with clean, maintainable code and a
          product mindset. Let&apos;s connect and create something useful.
        </p>

        <ul className="mt-8 grid gap-3">
        {links.map(function toLink(link) {
            return <LinkItem key={link.href} {...link} />;
        })}
        </ul>
      </div>

      <button
        aria-label="Replay intro messages"
        className="absolute bottom-10 rounded-full border border-white/40 bg-stone-900/70 p-2 text-stone-200 transition-colors duration-500 hover:border-white hover:bg-white hover:text-black sm:right-10"
        onClick={onReplay}
      >
        <Replay className="size-4 md:size-8" />
      </button>
    </section>
  );
}

function LinkItem({
  href,
  label,
  icon,
  external,
}: {
  href: string;
  label: React.ReactNode;
  icon: React.ReactNode;
  external?: boolean;
}) {
  return (
    <li className="group relative overflow-x-hidden rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition-colors hover:border-white/25 hover:bg-white/10">
      <a
        className="flex items-center justify-between space-x-1 text-xl"
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
      >
        <span className="font-medium transition-transform duration-500 group-hover:-translate-x-1 group-hover:-rotate-1">
          {label}
        </span>

        <span className="transition-transform duration-500 group-hover:translate-x-1 group-hover:rotate-6">
          {icon}
        </span>
      </a>
    </li>
  );
}
