"use client"
import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { cn } from "@/lib/utils"
function TooltipProvider({delayDuration=0,...props}:React.ComponentProps<typeof TooltipPrimitive.Provider>){return <TooltipPrimitive.Provider delayDuration={delayDuration} {...props}/>}
function Tooltip(props:React.ComponentProps<typeof TooltipPrimitive.Root>){return <TooltipProvider><TooltipPrimitive.Root {...props}/></TooltipProvider>}
const TooltipTrigger=TooltipPrimitive.Trigger
function TooltipContent({className,sideOffset=0,children,...props}:React.ComponentProps<typeof TooltipPrimitive.Content>){return <TooltipPrimitive.Portal><TooltipPrimitive.Content sideOffset={sideOffset} className={cn("bg-foreground text-background z-50 rounded-md px-3 py-1.5 text-xs",className)} {...props}>{children}<TooltipPrimitive.Arrow className="bg-foreground fill-foreground size-2.5 rotate-45"/></TooltipPrimitive.Content></TooltipPrimitive.Portal>}
export {Tooltip,TooltipTrigger,TooltipContent,TooltipProvider}
