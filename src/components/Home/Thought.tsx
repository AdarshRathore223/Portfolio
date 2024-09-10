import img from "@/assets/Images/fullimage.webp"
import { cn } from "@/lib/utils"

function Thought({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-xl overflow-hidden relative opacity-0 animate-fade-in-top delay-500", className)}>
        <div className="">
          <img src={img} alt=""  className=" rounded-xl"/>
        </div>
        <div className="absolute bottom-0 w-full bg-[#2C6A7D] bg-opacity-75 pt-2 font-bold text-xl text-card-foreground rounded-b-xl text-center">
          <p>"Simplicity is the ultimate sophistication."</p>
        </div>
      </div>
  )
}

export default Thought