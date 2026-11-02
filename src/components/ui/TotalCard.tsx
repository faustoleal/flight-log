import { LucideIcon } from "lucide-react";

const TotalCard = ({
  label,
  value,
  detail,
  icon: Icon,
  accent,
}: {
  label: string;
  value: string;
  detail: string;
  icon: LucideIcon;
  accent?: boolean;
}) => {
  return (
    <article
      className={`border p-5 min-h-[155px] ${accent ? "bg-[#203548] border-[#203548] text-[#fffaf1]" : "border-[var(--border)] bg-[var(--background)]"}`}
    >
      <div
        className={`flex justify-between text-[9px] font-[Courier_New,monospace] tracking-[0.08em] ${accent ? "text-[#c7ad82]" : "text-[#8c9696]"}`}
      >
        <span>{label}</span>
        <Icon size={18} />
      </div>
      <strong className="block mt-[19px] font-serif text-[27px] tracking-[-0.03em]">
        {value}
      </strong>
      <small
        className={`block text-[10px] mt-2 ${accent ? "text-[#a6b3b4]" : "text-[#879290]"}`}
      >
        {detail}
      </small>
    </article>
  );
};

export default TotalCard;
