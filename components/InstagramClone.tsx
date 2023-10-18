import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Blinds,
  Search,
  Plus,
  Bell,
  UserPlus,
  Heart,
  MessageCircle,
  Send,
  Bookmark,
} from "lucide-react";

export const InstagramClone = () => {
  return (
    <div
      className="instagram-clone"
      style={{ width: "100vw", height: "100vh" }}
    >
      <div className="bg-gray-50 h-full min-h-screen">
        <nav className="p-4 flex justify-between items-center shadow-md bg-white z-10 sticky top-0">
          <Button className="flex items-center bg-[#c5d4f6]">
            <Blinds className="h-5 w-5 text-gray-700 mr-2" />
            <span className="text-lg font-bold">Instagram</span>
          </Button>
          <Search className="h-5 w-5 text-gray-500 mr-4" />
          <div className="flex items-center space-x-4">
            <Plus className="h-5 w-5 text-gray-500" />
            <Bell className="h-5 w-5 text-gray-500" />
            <Avatar size="lg">
              <AvatarImage
                src="https://example.com/image.png"
                alt="User Profile"
              />
              <AvatarFallback className="bg-blue-500 text-white">
                U
              </AvatarFallback>
            </Avatar>
          </div>
        </nav>
        <main className="max-w-4xl mx-auto p-4 mt-2">
          <section>
            <Card>
              <CardHeader className="flex items-center p-4 mb-2 flex-row">
                <div className=" -row items-center flex w-full">
                  <Avatar size="sm">
                    <AvatarImage
                      src="https://example.com/image.png"
                      alt="Post Avatar"
                    />
                    <AvatarFallback className="bg-blue-500 text-white">
                      U
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="ml-2 font-bold">@username</CardTitle>
                </div>

                <Popover className="relative">
                  <PopoverTrigger asChild>
                    <Button variant="ghost">
                      <Plus className="h-4 w-4 text-gray-500" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="rounded-md shadow-lg w-40 bg-white p-4">
                    <button className="w-full text-left hover:bg-gray-100 rounded-md p-2">
                      Report
                    </button>
                    <button className="w-full text-left hover:bg-gray-100 rounded-md p-2 mt-2">
                      Unfollow
                    </button>
                  </PopoverContent>
                </Popover>
              </CardHeader>
              <CardContent>
                <img
                  className="rounded-lg object-cover w-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg_BqyS8hMwHNhG649Y7rNn7GyW9N9jwfQPY1Aj7Zs1g&s"
                  alt="Post content"
                />
                <div className=" items-start flex flex-row pl-[8px] pr-[16px] pt-[20px] pb-0 justify-between">
                  <div className=" flex-row flex gap-y-[10px] gap-x-[10px]">
                    <Heart className="h-6 w-6 text-gray-700" />
                    <MessageCircle className="h-6 w-6 text-gray-700" />
                    <Send className="h-6 w-6 text-gray-700" />
                  </div>

                  <Bookmark className="h-6 w-6 text-gray-700" />
                </div>
                <div className=" items-start flex flex-row pl-[8px] pr-[16px] pt-[20px] pb-0">
                  <div className=" flex-row flex -space-x-5">
                    <Avatar className=" border-l border-l-white border-b border-b-white border-t border-t-white border-r border-r-white">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className=" border-l border-l-white border-b border-b-white border-t border-t-white border-r border-r-white">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        className=" border-l border-l-white border-b border-b-white border-t border-t-white border-r border-r-white"
                      />
                    </Avatar>
                    <Avatar className=" border-l-white border-b-white border-t-white border-r-white border-l border-b border-t border-r">
                      <AvatarImage src="https://github.com/shadcn.png" />
                    </Avatar>
                  </div>
                  <p className="mt-2 px-4 font-bold">1711 Likes</p>
                </div>
                <p className="mt-2 px-4">
                  <span className="font-bold">@username</span>This is a great
                  photo!
                </p>
                <Button variant="link" className=" text-emerald-300">
                  View all comments
                </Button>
              </CardContent>
            </Card>
          </section>
        </main>
      </div>
    </div>
  );
};

export default InstagramClone;
