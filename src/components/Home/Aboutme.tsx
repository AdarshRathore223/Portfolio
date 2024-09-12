import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { cn } from "@/lib/utils";

function AboutMe({ className }: { className?: string }) {
  return (
    <Card className={cn("opacity-0 animate-fade-in-left sm:delay-500", className)}>
      <CardHeader>
        <CardTitle>Who am I?</CardTitle>
      </CardHeader>
        <CardContent>
          Hey! My name is Adarsh Rathore. I am a Full Stack Developer and
          currently a student in India. I am passionate about creating
          software solutions and am always looking for new challenges. If you
          have a project that you'd like to work on, feel free to contact me.
        </CardContent>
    </Card>
  );
}

export default AboutMe;
