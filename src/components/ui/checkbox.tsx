"use client"
import * as React from "react"
import * as P from "@radix-ui/react-checkbox"
import { CheckIcon } from "lucide-react"
import { cn } from "@/lib/utils"
function Checkbox({className,...props}:React.ComponentProps<typeof P.Root>){return <P.Root className={cn("peer border-input size-4 rounded border shadow-xs data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",className)} {...props}><P.Indicator className="flex items-center justify-center"><CheckIcon className="size-3.5"/></P.Indicator></P.Root>}
export {Checkbox}
