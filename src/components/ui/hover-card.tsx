"use client"
import * as React from "react"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"
import { cn } from "@/lib/utils"
const HoverCard=HoverCardPrimitive.Root, HoverCardTrigger=HoverCardPrimitive.Trigger
function HoverCardContent({className,align="center",sideOffset=4,...props}:React.ComponentProps<typeof HoverCardPrimitive.Content>){return <HoverCardPrimitive.Portal><HoverCardPrimitive.Content align={align} sideOffset={sideOffset} className={cn("bg-popover text-popover-foreground z-50 w-64 rounded-md border p-4 shadow-md",className)} {...props}/></HoverCardPrimitive.Portal>}
export {HoverCard,HoverCardTrigger,HoverCardContent}
