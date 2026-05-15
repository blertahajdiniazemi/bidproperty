import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva,type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
function ItemGroup({className,...props}:React.ComponentProps<"div">){return <div role="list" className={cn("group/item-group flex flex-col",className)} {...props}/>}
function ItemSeparator({className,...props}:React.ComponentProps<typeof Separator>){return <Separator orientation="horizontal" className={cn("my-0",className)} {...props}/>}
const itemVariants=cva("group/item flex items-center border border-transparent text-sm rounded-md transition-colors flex-wrap outline-none",{variants:{variant:{default:"bg-transparent",outline:"border-border",muted:"bg-muted/50"},size:{default:"p-4 gap-4",sm:"py-3 px-4 gap-2.5"}},defaultVariants:{variant:"default",size:"default"}})
function Item({className,variant="default",size="default",asChild=false,...props}:React.ComponentProps<"div">&VariantProps<typeof itemVariants>&{asChild?:boolean}){const Comp=asChild?Slot:"div";return <Comp className={cn(itemVariants({variant,size,className}))} {...props}/>}
const itemMediaVariants=cva("flex shrink-0 items-center justify-center gap-2",{variants:{variant:{default:"bg-transparent",icon:"size-8 border rounded-sm bg-muted",image:"size-10 rounded-sm overflow-hidden"}},defaultVariants:{variant:"default"}})
function ItemMedia({className,variant="default",...props}:React.ComponentProps<"div">&VariantProps<typeof itemMediaVariants>){return <div className={cn(itemMediaVariants({variant,className}))} {...props}/>}
function ItemContent({className,...props}:React.ComponentProps<"div">){return <div className={cn("flex flex-1 flex-col gap-1",className)} {...props}/>}
function ItemTitle({className,...props}:React.ComponentProps<"div">){return <div className={cn("flex w-fit items-center gap-2 text-sm font-medium",className)} {...props}/>}
function ItemDescription({className,...props}:React.ComponentProps<"p">){return <p className={cn("text-muted-foreground line-clamp-2 text-sm",className)} {...props}/>}
function ItemActions({className,...props}:React.ComponentProps<"div">){return <div className={cn("flex items-center gap-2",className)} {...props}/>}
function ItemHeader({className,...props}:React.ComponentProps<"div">){return <div className={cn("flex basis-full items-center justify-between gap-2",className)} {...props}/>}
function ItemFooter({className,...props}:React.ComponentProps<"div">){return <div className={cn("flex basis-full items-center justify-between gap-2",className)} {...props}/>}
export {Item,ItemMedia,ItemContent,ItemActions,ItemGroup,ItemSeparator,ItemTitle,ItemDescription,ItemHeader,ItemFooter}
