"use client"
import * as React from "react"
import * as P from "@radix-ui/react-toggle-group"
import { type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { toggleVariants } from "@/components/ui/toggle"
const C=React.createContext<VariantProps<typeof toggleVariants>>({size:"default",variant:"default"})
function ToggleGroup({className,variant,size,children,...props}:React.ComponentProps<typeof P.Root>&VariantProps<typeof toggleVariants>){return <P.Root className={cn("group/toggle-group flex w-fit items-center rounded-md",className)} {...props}><C.Provider value={{variant,size}}>{children}</C.Provider></P.Root>}
function ToggleGroupItem({className,variant,size,...props}:React.ComponentProps<typeof P.Item>&VariantProps<typeof toggleVariants>){const c=React.useContext(C);return <P.Item className={cn(toggleVariants({variant:c.variant||variant,size:c.size||size}),"rounded-none first:rounded-l-md last:rounded-r-md",className)} {...props}/>}
export {ToggleGroup,ToggleGroupItem}
