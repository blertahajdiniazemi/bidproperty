"use client"
import * as React from "react"
import * as P from "@radix-ui/react-slider"
import { cn } from "@/lib/utils"
function Slider({className,defaultValue,value,min=0,max=100,...props}:React.ComponentProps<typeof P.Root>){const vals=Array.isArray(value)?value:Array.isArray(defaultValue)?defaultValue:[min];return <P.Root defaultValue={defaultValue} value={value} min={min} max={max} className={cn("relative flex w-full touch-none items-center select-none",className)} {...props}><P.Track className="bg-muted relative h-1.5 w-full grow overflow-hidden rounded-full"><P.Range className="bg-primary absolute h-full"/></P.Track>{vals.map((_,i)=><P.Thumb key={i} className="border-primary ring-ring/50 block size-4 rounded-full border bg-white shadow-sm focus-visible:ring-4"/> )}</P.Root>}
export {Slider}
