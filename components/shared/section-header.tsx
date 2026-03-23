interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeader({ label, title, description, align = "left" }: SectionHeaderProps) {
  const isCenter = align === "center";
  return (
    <div className={`space-y-4 ${isCenter ? "text-center" : ""}`}>
      <div className={`flex items-center gap-3 ${isCenter ? "justify-center" : ""}`}>
        <span className="accent-line" />
        <span className="text-label" style={{ color: "var(--accent)" }}>{label}</span>
      </div>
      <h2 className="text-display" style={{ color: "var(--text-primary)" }}>{title}</h2>
      {description && (
        <p
          className={`text-base leading-relaxed ${isCenter ? "max-w-2xl mx-auto" : "max-w-xl"}`}
          style={{ color: "var(--text-secondary)" }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
