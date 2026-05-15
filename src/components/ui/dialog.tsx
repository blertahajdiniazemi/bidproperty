"use client"
import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"
import { cn } from "@/lib/utils"
const Dialog=DialogPrimitive.Root, DialogTrigger=DialogPrimitive.Trigger, DialogPortal=DialogPrimitive.Portal, DialogClose=DialogPrimitive.Close
function DialogOverlay({className,...props}:React.ComponentProps<typeof DialogPrimitive.Overlay>){return <DialogPrimitive.Overlay className={cn("fixed inset-0 z-50 bg-black/50",className)} {...props}/>}
function DialogContent({className,children,showCloseButton=true,...props}:React.ComponentProps<typeof DialogPrimitive.Content>&{showCloseButton?:boolean}){return <DialogPortal><DialogOverlay/><DialogPrimitive.Content className={cn("bg-background fixed top-1/2 left-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 rounded-lg border p-6 shadow-lg",className)} {...props}>{children}{showCloseButton&&<DialogPrimitive.Close className="absolute top-4 right-4 rounded-xs opacity-70 hover:opacity-100"><XIcon className="size-4"/><span className="sr-only">Close</span></DialogPrimitive.Close>}</DialogPrimitive.Content></DialogPortal>}
function DialogHeader({className,...props}:React.ComponentProps<"div">){return <div className={cn("flex flex-col gap-2 text-center sm:text-left",className)} {...props}/>}
function DialogFooter({className,...props}:React.ComponentProps<"div">){return <div className={cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",className)} {...props}/>}
function DialogTitle({className,...props}:React.ComponentProps<typeof DialogPrimitive.Title>){return <DialogPrimitive.Title className={cn("text-lg font-semibold",className)} {...props}/>}
function DialogDescription({className,...props}:React.ComponentProps<typeof DialogPrimitive.Description>){return <DialogPrimitive.Description className={cn("text-muted-foreground text-sm",className)} {...props}/>}
export {Dialog,DialogClose,DialogContent,DialogDescription,DialogFooter,DialogHeader,DialogOverlay,DialogPortal,DialogTitle,DialogTrigger}
