"use client"
import * as React from "react"
import * as P from "@radix-ui/react-switch"
import { cn } from "@/lib/utils"
function Switch({className,...props}:React.ComponentProps<typeof P.Root>){return <P.Root className={cn("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-input transition-colors data-[state=checked]:bg-primary",className)} {...props}><P.Thumb className="bg-background pointer-events-none block size-5 rounded-full shadow-lg transition-transform data-[state=checked]:translate-x-5"/></P.Root>}
export {Switch}
