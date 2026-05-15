"use client"
import * as React from "react"
import * as P from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDownIcon } from "lucide-react"
import { cn } from "@/lib/utils"
function NavigationMenu({className,children,viewport=true,...props}:React.ComponentProps<typeof P.Root>&{viewport?:boolean}){return <P.Root className={cn("group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",className)} {...props}>{children}{viewport&&<NavigationMenuViewport/>}</P.Root>}
function NavigationMenuList({className,...props}:React.ComponentProps<typeof P.List>){return <P.List className={cn("group flex flex-1 list-none items-center justify-center gap-1",className)} {...props}/>}
function NavigationMenuItem({className,...props}:React.ComponentProps<typeof P.Item>){return <P.Item className={cn("relative",className)} {...props}/>}
const navigationMenuTriggerStyle=cva("group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent")
function NavigationMenuTrigger({className,children,...props}:React.ComponentProps<typeof P.Trigger>){return <P.Trigger className={cn(navigationMenuTriggerStyle(),className)} {...props}>{children}<ChevronDownIcon className="ml-1 size-3"/></P.Trigger>}
function NavigationMenuContent({className,...props}:React.ComponentProps<typeof P.Content>){return <P.Content className={cn("top-0 left-0 w-full p-2 md:absolute md:w-auto",className)} {...props}/>}
function NavigationMenuViewport({className,...props}:React.ComponentProps<typeof P.Viewport>){return <div className="absolute top-full left-0 isolate z-50 flex justify-center"><P.Viewport className={cn("bg-popover text-popover-foreground mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--radix-navigation-menu-viewport-width)]",className)} {...props}/></div>}
function NavigationMenuLink({className,...props}:React.ComponentProps<typeof P.Link>){return <P.Link className={cn("hover:bg-accent focus:bg-accent flex flex-col gap-1 rounded-sm p-2 text-sm",className)} {...props}/>}
function NavigationMenuIndicator({className,...props}:React.ComponentProps<typeof P.Indicator>){return <P.Indicator className={cn("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",className)} {...props}><div className="bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md"/></P.Indicator>}
export {NavigationMenu,NavigationMenuList,NavigationMenuItem,NavigationMenuContent,NavigationMenuTrigger,NavigationMenuLink,NavigationMenuIndicator,NavigationMenuViewport,navigationMenuTriggerStyle}
