import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "../ui/card";
import { Input } from "@/components/ui/input";
import emailjs from "@emailjs/browser";

function Contactmeform({ className }: { className?: string }) {
  // Define the ref using useRef and set its type to HTMLFormElement
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Make sure form.current is not null before sending
    if (form.current) {
      emailjs
        .sendForm(
          "service_0co6qoo",
          "template_31toyfs",
          form.current,
          "AhRD_N7h8nTsJGKIw"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
          },
          (err) => {
            console.log("FAILED...", err);
          }
        );
    }else{
      console.log("error")
    }
  };

  return (
    <Card className={cn("animate-fade-in-left", className)}>
      <CardHeader>
        <CardTitle>Contact Me</CardTitle>
        <CardDescription>Get in touch</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col">
        <form ref={form} onSubmit={sendEmail}>
          <Input
            className="m-1 rounded-lg w-full"
            placeholder="Name"
            name="user_name"
          />
          <Input
            className="m-1 rounded-lg w-full"
            placeholder="Email"
            type="email"
            name="user_email"
          />
          <textarea
            className="flex w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 m-1 rounded-lg h-24"
            name="message"
            placeholder="Message"
          />
          <input
            type="submit"
            value="Send"
            className="w-full py-2 bg-white text-black rounded-lg m-1"
          />
        </form>
      </CardContent>
    </Card>
  );
}

export default Contactmeform;
