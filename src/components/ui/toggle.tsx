"use client"
import * as React from "react"
import * as P from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
const toggleVariants=cva("inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium hover:bg-muted disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent",{variants:{variant:{default:"bg-transparent",outline:"border border-input bg-transparent shadow-xs hover:bg-accent"},size:{default:"h-9 px-3",sm:"h-8 px-2",lg:"h-10 px-3"}},defaultVariants:{variant:"default",size:"default"}})
function Toggle({className,variant,size,...props}:React.ComponentProps<typeof P.Root>&VariantProps<typeof toggleVariants>){return <P.Root className={cn(toggleVariants({variant,size,className}))} {...props}/>}
export {Toggle,toggleVariants}
