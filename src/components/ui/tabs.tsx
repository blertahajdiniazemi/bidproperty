"use client"
import * as React from "react"
import * as P from "@radix-ui/react-tabs"
import { cn } from "@/lib/utils"
function Tabs({className,...props}:React.ComponentProps<typeof P.Root>){return <P.Root className={cn("flex flex-col gap-2",className)} {...props}/>}
function TabsList({className,...props}:React.ComponentProps<typeof P.List>){return <P.List className={cn("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",className)} {...props}/>}
function TabsTrigger({className,...props}:React.ComponentProps<typeof P.Trigger>){return <P.Trigger className={cn("data-[state=active]:bg-background inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium",className)} {...props}/>}
function TabsContent({className,...props}:React.ComponentProps<typeof P.Content>){return <P.Content className={cn("flex-1 outline-none",className)} {...props}/>}
export {Tabs,TabsList,TabsTrigger,TabsContent}
