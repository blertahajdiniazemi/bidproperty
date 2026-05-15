"use client"
import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"
import { cn } from "@/lib/utils"
const Drawer=DrawerPrimitive.Root,DrawerTrigger=DrawerPrimitive.Trigger,DrawerPortal=DrawerPrimitive.Portal,DrawerClose=DrawerPrimitive.Close
function DrawerOverlay({className,...props}:React.ComponentProps<typeof DrawerPrimitive.Overlay>){return <DrawerPrimitive.Overlay className={cn("fixed inset-0 z-50 bg-black/50",className)} {...props}/>}
function DrawerContent({className,children,...props}:React.ComponentProps<typeof DrawerPrimitive.Content>){return <DrawerPortal><DrawerOverlay/><DrawerPrimitive.Content className={cn("bg-background fixed z-50 flex h-auto flex-col inset-x-0 bottom-0 mt-24 max-h-[80vh] rounded-t-lg border-t",className)} {...props}><div className="bg-muted mx-auto mt-4 h-2 w-[100px] rounded-full"/>{children}</DrawerPrimitive.Content></DrawerPortal>}
function DrawerHeader({className,...props}:React.ComponentProps<"div">){return <div className={cn("flex flex-col gap-0.5 p-4",className)} {...props}/>}
function DrawerFooter({className,...props}:React.ComponentProps<"div">){return <div className={cn("mt-auto flex flex-col gap-2 p-4",className)} {...props}/>}
function DrawerTitle({className,...props}:React.ComponentProps<typeof DrawerPrimitive.Title>){return <DrawerPrimitive.Title className={cn("text-foreground font-semibold",className)} {...props}/>}
function DrawerDescription({className,...props}:React.ComponentProps<typeof DrawerPrimitive.Description>){return <DrawerPrimitive.Description className={cn("text-muted-foreground text-sm",className)} {...props}/>}
export {Drawer,DrawerPortal,DrawerOverlay,DrawerTrigger,DrawerClose,DrawerContent,DrawerHeader,DrawerFooter,DrawerTitle,DrawerDescription}
