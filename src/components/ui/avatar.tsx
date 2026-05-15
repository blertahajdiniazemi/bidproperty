"use client"
import * as React from "react"
import * as P from "@radix-ui/react-avatar"
import { cn } from "@/lib/utils"
function Avatar({className,...props}:React.ComponentProps<typeof P.Root>){return <P.Root className={cn("relative flex size-8 shrink-0 overflow-hidden rounded-full",className)} {...props}/>}
function AvatarImage({className,...props}:React.ComponentProps<typeof P.Image>){return <P.Image className={cn("aspect-square size-full",className)} {...props}/>}
function AvatarFallback({className,...props}:React.ComponentProps<typeof P.Fallback>){return <P.Fallback className={cn("bg-muted flex size-full items-center justify-center rounded-full",className)} {...props}/>}
export {Avatar,AvatarImage,AvatarFallback}
