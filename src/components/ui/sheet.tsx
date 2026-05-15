"use client"
import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"
import { cn } from "@/lib/utils"
const Sheet=SheetPrimitive.Root,SheetTrigger=SheetPrimitive.Trigger,SheetClose=SheetPrimitive.Close,SheetPortal=SheetPrimitive.Portal
function SheetOverlay({className,...props}:React.ComponentProps<typeof SheetPrimitive.Overlay>){return <SheetPrimitive.Overlay className={cn("fixed inset-0 z-50 bg-black/50",className)} {...props}/>}
function SheetContent({className,children,side="right",...props}:React.ComponentProps<typeof SheetPrimitive.Content>&{side?:"top"|"right"|"bottom"|"left"}){return <SheetPortal><SheetOverlay/><SheetPrimitive.Content className={cn("bg-background fixed z-50 flex flex-col gap-4 shadow-lg",side==="right"&&"inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",side==="left"&&"inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",side==="top"&&"inset-x-0 top-0 h-auto border-b",side==="bottom"&&"inset-x-0 bottom-0 h-auto border-t",className)} {...props}>{children}<SheetPrimitive.Close className="absolute top-4 right-4 rounded-xs opacity-70 hover:opacity-100"><XIcon className="size-4"/><span className="sr-only">Close</span></SheetPrimitive.Close></SheetPrimitive.Content></SheetPortal>}
function SheetHeader({className,...props}:React.ComponentProps<"div">){return <div className={cn("flex flex-col gap-1.5 p-4",className)} {...props}/>}
function SheetFooter({className,...props}:React.ComponentProps<"div">){return <div className={cn("mt-auto flex flex-col gap-2 p-4",className)} {...props}/>}
function SheetTitle({className,...props}:React.ComponentProps<typeof SheetPrimitive.Title>){return <SheetPrimitive.Title className={cn("text-foreground font-semibold",className)} {...props}/>}
function SheetDescription({className,...props}:React.ComponentProps<typeof SheetPrimitive.Description>){return <SheetPrimitive.Description className={cn("text-muted-foreground text-sm",className)} {...props}/>}
export {Sheet,SheetTrigger,SheetClose,SheetContent,SheetHeader,SheetFooter,SheetTitle,SheetDescription}
