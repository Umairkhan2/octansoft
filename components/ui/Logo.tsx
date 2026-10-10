export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="270 405 710 437" className={className} fill="currentColor" aria-hidden="true">
      <polygon points="457,412 898,412 712,637 513,637 548,837 311,837 275,633" />
      <polygon points="931,476 975,729 883,837 691,837 737,781 727,719" />
    </svg>
  );
}

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className={`grid h-9 w-9 place-items-center rounded-xl ${light ? "bg-white text-navy" : "bg-navy text-white"}`}>
        <LogoMark className="h-4 w-auto" />
      </span>
      <span className={`text-lg font-bold tracking-tight ${light ? "text-white" : "text-navy"}`}>OctanSoft</span>
    </span>
  );
}
