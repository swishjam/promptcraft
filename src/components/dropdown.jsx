import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LuFolderOpen } from "react-icons/lu";

export function Dropdown({ onClick, presets, ...props}) {
  return (
    <DropdownMenu {...props}>
      <DropdownMenuTrigger asChild className="col-span-2">
        <Button variant="outline" className="text-white w-full">
          <LuFolderOpen size={20} className="mr-2" />
          Presets
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full bg-black border border-white/15">
        <DropdownMenuLabel className="text-white">
          Presets
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-white/15"/>
        <DropdownMenuGroup>
          {presets.map((preset, index) => (
            <DropdownMenuItem key={index} className="text-white cursor-pointer" onClick={() => onClick(preset)}>
              {preset.label}
            </DropdownMenuItem>
          ))} 
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}