"use client"
import * as React from "react"
import * as P from "@radix-ui/react-progress"
import { cn } from "@/lib/utils"
function Progress({className,value,...props}:React.ComponentProps<typeof P.Root>){return <P.Root className={cn("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",className)} {...props}><P.Indicator className="bg-primary h-full w-full flex-1 transition-all" style={{transform:`translateX(-${100-(value||0)}%)`}}/></P.Root>}
export {Progress}
