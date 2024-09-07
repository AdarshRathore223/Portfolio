import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import profilepic from "@/assets/Images/profile.jpg";
import { cn } from "@/lib/utils";

interface ProfileProps {
  className?: string;
}
function Profile({ className }: ProfileProps) {
  return (
    <div
      className={cn(
        "px-16 py-12 bg-primary flex justify-center items-center rounded-lg flex-col animate-fade-in",
        className
      )}
    >
      <Avatar className="w-16 h-16">
        <AvatarImage src={profilepic} />
        <AvatarFallback>AR</AvatarFallback>
      </Avatar>

      <p>
        <a
          href="https://github.com/AdarshRathore223"
          className="py-2 text-[#fff] font-bold text-xl hover:underline text-nowrap"
        >
          Adarsh Rathore
        </a>
      </p>
    </div>
  );
}

export default Profile;
