import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { cn } from "@/lib/utils";

function AboutMe({ className }: { className?: string }) {
  return (
    <Card className={cn("opacity-0 animate-fade-in-left sm:delay-500", className)}>
      <CardHeader>
        <CardTitle>Who am I?</CardTitle>
        <CardDescription className="text-base">
          Hey! My name is Adarsh Rathore. I am a Full Stack Developer and
          currently a student in India. I am passionate about creating
          software solutions and am always looking for new challenges. If you
          have a project that you'd like to work on, feel free to contact me.
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

export default AboutMe;
