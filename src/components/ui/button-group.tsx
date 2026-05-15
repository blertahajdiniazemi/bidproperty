import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
const buttonGroupVariants=cva("flex w-fit items-stretch",{variants:{orientation:{horizontal:"[&>*:not(:first-child)]:rounded-l-none [&>*:not(:last-child)]:rounded-r-none",vertical:"flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:last-child)]:rounded-b-none"}},defaultVariants:{orientation:"horizontal"}})
function ButtonGroup({className,orientation,...props}:React.ComponentProps<"div">&VariantProps<typeof buttonGroupVariants>){return <div role="group" data-orientation={orientation} className={cn(buttonGroupVariants({orientation}),className)} {...props}/>}
function ButtonGroupText({className,asChild=false,...props}:React.ComponentProps<"div">&{asChild?:boolean}){const Comp=asChild?Slot:"div";return <Comp className={cn("bg-muted flex items-center gap-2 rounded-md border px-4 text-sm font-medium shadow-xs",className)} {...props}/>}
function ButtonGroupSeparator({className,orientation="vertical",...props}:React.ComponentProps<typeof Separator>){return <Separator orientation={orientation} className={cn("bg-input relative !m-0 self-stretch",className)} {...props}/>}
export {ButtonGroup,ButtonGroupSeparator,ButtonGroupText,buttonGroupVariants}
