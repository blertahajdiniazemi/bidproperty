"use client"
import * as React from "react"
import * as P from "@radix-ui/react-radio-group"
import { CircleIcon } from "lucide-react"
import { cn } from "@/lib/utils"
function RadioGroup({className,...props}:React.ComponentProps<typeof P.Root>){return <P.Root className={cn("grid gap-3",className)} {...props}/>}
function RadioGroupItem({className,...props}:React.ComponentProps<typeof P.Item>){return <P.Item className={cn("border-input text-primary focus-visible:ring-ring/50 size-4 rounded-full border shadow-xs focus-visible:ring-[3px]",className)} {...props}><P.Indicator className="flex items-center justify-center"><CircleIcon className="size-2 fill-current"/></P.Indicator></P.Item>}
export {RadioGroup,RadioGroupItem}
