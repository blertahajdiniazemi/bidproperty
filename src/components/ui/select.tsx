"use client"
import * as React from "react"
import * as P from "@radix-ui/react-select"
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react"
import { cn } from "@/lib/utils"
const Select=P.Root,SelectGroup=P.Group,SelectValue=P.Value
function SelectTrigger({className,children,...props}:React.ComponentProps<typeof P.Trigger>&{size?:"sm"|"default"}){return <P.Trigger className={cn("border-input flex h-9 w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs",className)} {...props}>{children}<P.Icon asChild><ChevronDownIcon className="size-4 opacity-50"/></P.Icon></P.Trigger>}
function SelectContent({className,children,position="popper",...props}:React.ComponentProps<typeof P.Content>){return <P.Portal><P.Content position={position} className={cn("bg-popover text-popover-foreground z-50 max-h-96 min-w-32 overflow-hidden rounded-md border shadow-md",className)} {...props}><SelectScrollUpButton/><P.Viewport className="p-1">{children}</P.Viewport><SelectScrollDownButton/></P.Content></P.Portal>}
function SelectLabel({className,...props}:React.ComponentProps<typeof P.Label>){return <P.Label className={cn("text-muted-foreground px-2 py-1.5 text-xs",className)} {...props}/>}
function SelectItem({className,children,...props}:React.ComponentProps<typeof P.Item>){return <P.Item className={cn("focus:bg-accent relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none",className)} {...props}><span className="absolute right-2"><P.ItemIndicator><CheckIcon className="size-4"/></P.ItemIndicator></span><P.ItemText>{children}</P.ItemText></P.Item>}
function SelectSeparator({className,...props}:React.ComponentProps<typeof P.Separator>){return <P.Separator className={cn("bg-border -mx-1 my-1 h-px",className)} {...props}/>}
function SelectScrollUpButton({className,...props}:React.ComponentProps<typeof P.ScrollUpButton>){return <P.ScrollUpButton className={cn("flex cursor-default items-center justify-center py-1",className)} {...props}><ChevronUpIcon className="size-4"/></P.ScrollUpButton>}
function SelectScrollDownButton({className,...props}:React.ComponentProps<typeof P.ScrollDownButton>){return <P.ScrollDownButton className={cn("flex cursor-default items-center justify-center py-1",className)} {...props}><ChevronDownIcon className="size-4"/></P.ScrollDownButton>}
export {Select,SelectContent,SelectGroup,SelectItem,SelectLabel,SelectScrollDownButton,SelectScrollUpButton,SelectSeparator,SelectTrigger,SelectValue}
