"use client";
// [meta] name: InstagramAppShell
// [meta] description: Generate the application shell for a mobile instagram clone UI. At the top it should have a header with a logo, search bar, and heart icon. Below the header there should be a horizontal row of avatars representing stories. There should be a blank space in the middle for the feed (we will build the feed later), and at the bottom there should be a footer with home, add, and profile icons.

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FilePlus, Heart, Mail, User } from "lucide-react";

const InstagramAppShell = () => {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex justify-between p-4 items-center border-b border-gray-200">
        <h1 className="font-bold text-xl">Instagram</h1>
        <Input
          type="text"
          placeholder="Search"
          className="flex-grow mx-4 p-2 border border-gray-300 outline-none rounded-md"
        />
        <Button variant="ghost">
          <Heart className="h-6 w-6" />
        </Button>
      </header>

      <div className="flex p-4 overflow-x-scroll border-b border-gray-200 ">
        {[...Array(5)].map((e, i) => (
          <Avatar className="mr-2" key={i}>
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="Avatar Image"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        ))}
      </div>

      <main className="flex-grow"></main>

      <footer className="flex justify-around items-center p-4 border-t border-gray-200 bg-white dark:bg-black">
        <Button variant="ghost">
          <Mail className="h-6 w-6" />
        </Button>
        <Button variant="ghost">
          <FilePlus className="h-6 w-6" />
        </Button>
        <Button variant="ghost">
          <User className="h-6 w-6" />
        </Button>
      </footer>
    </div>
  );
};

export default InstagramAppShell;
