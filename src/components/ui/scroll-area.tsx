"use client"
import * as React from "react"
import * as P from "@radix-ui/react-scroll-area"
import { cn } from "@/lib/utils"
function ScrollArea({className,children,...props}:React.ComponentProps<typeof P.Root>){return <P.Root className={cn("relative",className)} {...props}><P.Viewport className="size-full rounded-[inherit]">{children}</P.Viewport><ScrollBar/><P.Corner/></P.Root>}
function ScrollBar({className,orientation="vertical",...props}:React.ComponentProps<typeof P.ScrollAreaScrollbar>){return <P.ScrollAreaScrollbar orientation={orientation} className={cn("flex touch-none p-px",orientation==="vertical"?"h-full w-2.5":"h-2.5 flex-col",className)} {...props}><P.ScrollAreaThumb className="bg-border relative flex-1 rounded-full"/></P.ScrollAreaScrollbar>}
export {ScrollArea,ScrollBar}
