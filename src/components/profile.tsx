"use client";

import { ThemeToggler } from "@/components/theme-toggler";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { LogOut, Settings, User } from "lucide-react";

export function Profile() {
  return (
    <div className="flex items-center gap-2 space-x-2">
      <ThemeToggler />

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="w-8 h-8">
              <AvatarFallback>MD</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">Default User</p>
              <p className="text-xs leading-none text-muted-foreground">
                @mayurDayal2000
              </p>
            </div>
          </DropdownMenuLabel>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuItem className="cursor-not-allowed hover:opacity-80">
              <User className="mr-2 w-4 h-4" />
              <span>Profile</span>
            </DropdownMenuItem>

            <DropdownMenuItem className="cursor-not-allowed hover:opacity-80">
              <Settings className="mr-2 w-4 h-4" />
              <span>Settings</span>
            </DropdownMenuItem>

            <DropdownMenuItem className="cursor-not-allowed hover:opacity-80">
              <LogOut className="mr-2 w-4 h-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
