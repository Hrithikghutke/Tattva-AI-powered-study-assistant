export default function BgGradient({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative isolate ${className}`}>
      {/* Top-left blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 -left-20 sm:-top-40 sm:-left-32 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          }}
          className="aspect-[1155/678] w-[20rem] sm:w-[32rem] bg-gradient-to-tr from-emerald-400 via-teal-400 to-cyan-400 opacity-30"
        />
      </div>

      {/* ✅ Bottom-right blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-100 right-1 lg:top-80 lg:right-15   z-10 transform-gpu overflow-hidden blur-[100px]"
      >
        <div
          style={{
            clipPath:
              "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          }}
          className="aspect-[1155/678] w-[20rem] sm:w-[40rem] bg-gradient-to-tl from-cyan-400 via-sky-400 to-indigo-400 opacity-30"
        />
      </div>

      {children}
    </div>
  );
}
