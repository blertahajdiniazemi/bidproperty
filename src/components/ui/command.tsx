"use client"
import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"
import { SearchIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Dialog,DialogContent,DialogDescription,DialogHeader,DialogTitle } from "@/components/ui/dialog"
function Command({className,...props}:React.ComponentProps<typeof CommandPrimitive>){return <CommandPrimitive className={cn("bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",className)} {...props}/>}
function CommandDialog({title="Command Palette",description="Search for a command to run...",children,className,...props}:React.ComponentProps<typeof Dialog>&{title?:string;description?:string;className?:string}){return <Dialog {...props}><DialogHeader className="sr-only"><DialogTitle>{title}</DialogTitle><DialogDescription>{description}</DialogDescription></DialogHeader><DialogContent className={cn("overflow-hidden p-0",className)}><Command>{children}</Command></DialogContent></Dialog>}
function CommandInput({className,...props}:React.ComponentProps<typeof CommandPrimitive.Input>){return <div className="flex h-9 items-center gap-2 border-b px-3"><SearchIcon className="size-4 opacity-50"/><CommandPrimitive.Input className={cn("flex h-10 w-full bg-transparent py-3 text-sm outline-hidden",className)} {...props}/></div>}
function CommandList({className,...props}:React.ComponentProps<typeof CommandPrimitive.List>){return <CommandPrimitive.List className={cn("max-h-[300px] overflow-y-auto",className)} {...props}/>}
function CommandEmpty(props:React.ComponentProps<typeof CommandPrimitive.Empty>){return <CommandPrimitive.Empty className="py-6 text-center text-sm" {...props}/>}
function CommandGroup({className,...props}:React.ComponentProps<typeof CommandPrimitive.Group>){return <CommandPrimitive.Group className={cn("overflow-hidden p-1",className)} {...props}/>}
function CommandSeparator({className,...props}:React.ComponentProps<typeof CommandPrimitive.Separator>){return <CommandPrimitive.Separator className={cn("bg-border -mx-1 h-px",className)} {...props}/>}
function CommandItem({className,...props}:React.ComponentProps<typeof CommandPrimitive.Item>){return <CommandPrimitive.Item className={cn("data-[selected=true]:bg-accent relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none",className)} {...props}/>}
function CommandShortcut({className,...props}:React.ComponentProps<"span">){return <span className={cn("text-muted-foreground ml-auto text-xs tracking-widest",className)} {...props}/>}
export {Command,CommandDialog,CommandInput,CommandList,CommandEmpty,CommandGroup,CommandItem,CommandShortcut,CommandSeparator}
