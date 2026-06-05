type PlaceholderImageProps = {
  label: string;
  className?: string;
  rounded?: "none" | "md" | "lg" | "xl" | "full";
  aspect?: string;
};

const roundedClasses = {
  none: "rounded-none",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full",
};

export function PlaceholderImage({
  label,
  className = "",
  rounded = "lg",
  aspect,
}: PlaceholderImageProps) {
  return (
    <div
      className={`flex items-center justify-center bg-slate-200 text-center text-xs font-medium text-slate-400 ${roundedClasses[rounded]} ${className}`}
      style={aspect ? { aspectRatio: aspect } : undefined}
      aria-label={label}
    >
      {label}
    </div>
  );
}
