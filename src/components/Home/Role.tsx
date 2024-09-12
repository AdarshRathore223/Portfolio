import { cn } from "@/lib/utils";

function Role({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "bg-[#2C6A7D] text-[#BDD2DE] rounded-lg p-4 font-bold text-lg flex justify-center items-center opacity-0 animate-fade-in-left sm:delay-700 text-center",
        className
      )}
    >
      Full Stack Developer & Devops Engineer
    </div>
  );
}

export default Role;
