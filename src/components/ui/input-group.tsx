"use client"
import * as React from "react"
import { cva,type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
function InputGroup({className,...props}:React.ComponentProps<"div">){return <div role="group" className={cn("border-input relative flex w-full items-center rounded-md border shadow-xs h-9 min-w-0",className)} {...props}/>}
const inputGroupAddonVariants=cva("text-muted-foreground flex items-center justify-center gap-2 py-1.5 text-sm font-medium",{variants:{align:{"inline-start":"order-first pl-3","inline-end":"order-last pr-3","block-start":"order-first w-full justify-start px-3 pt-3","block-end":"order-last w-full justify-start px-3 pb-3"}},defaultVariants:{align:"inline-start"}})
function InputGroupAddon({className,align="inline-start",...props}:React.ComponentProps<"div">&VariantProps<typeof inputGroupAddonVariants>){return <div role="group" data-align={align} className={cn(inputGroupAddonVariants({align}),className)} {...props}/>}
const inputGroupButtonVariants=cva("text-sm shadow-none flex gap-2 items-center",{variants:{size:{xs:"h-6 px-2",sm:"h-8 px-2.5","icon-xs":"size-6 p-0","icon-sm":"size-8 p-0"}},defaultVariants:{size:"xs"}})
function InputGroupButton({className,type="button",variant="ghost",size="xs",...props}:Omit<React.ComponentProps<typeof Button>,"size">&VariantProps<typeof inputGroupButtonVariants>){return <Button type={type} variant={variant} className={cn(inputGroupButtonVariants({size}),className)} {...props}/>}
function InputGroupText({className,...props}:React.ComponentProps<"span">){return <span className={cn("text-muted-foreground flex items-center gap-2 text-sm",className)} {...props}/>}
function InputGroupInput({className,...props}:React.ComponentProps<"input">){return <Input className={cn("flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0",className)} {...props}/>}
function InputGroupTextarea({className,...props}:React.ComponentProps<"textarea">){return <Textarea className={cn("flex-1 resize-none rounded-none border-0 bg-transparent py-3 shadow-none focus-visible:ring-0",className)} {...props}/>}
export {InputGroup,InputGroupAddon,InputGroupButton,InputGroupText,InputGroupInput,InputGroupTextarea}
