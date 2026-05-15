import * as React from "react"
import { useMemo } from "react"
import { cva,type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
function FieldSet({className,...props}:React.ComponentProps<"fieldset">){return <fieldset className={cn("flex flex-col gap-6",className)} {...props}/>}
function FieldLegend({className,variant="legend",...props}:React.ComponentProps<"legend">&{variant?:"legend"|"label"}){return <legend data-variant={variant} className={cn("mb-3 font-medium data-[variant=legend]:text-base data-[variant=label]:text-sm",className)} {...props}/>}
function FieldGroup({className,...props}:React.ComponentProps<"div">){return <div className={cn("flex w-full flex-col gap-7",className)} {...props}/>}
const fieldVariants=cva("group/field flex w-full gap-3",{variants:{orientation:{vertical:"flex-col",horizontal:"flex-row items-center",responsive:"flex-col md:flex-row md:items-center"}},defaultVariants:{orientation:"vertical"}})
function Field({className,orientation="vertical",...props}:React.ComponentProps<"div">&VariantProps<typeof fieldVariants>){return <div role="group" data-orientation={orientation} className={cn(fieldVariants({orientation}),className)} {...props}/>}
function FieldContent({className,...props}:React.ComponentProps<"div">){return <div className={cn("flex flex-1 flex-col gap-1.5",className)} {...props}/>}
function FieldLabel({className,...props}:React.ComponentProps<typeof Label>){return <Label className={cn("flex w-fit gap-2",className)} {...props}/>}
function FieldTitle({className,...props}:React.ComponentProps<"div">){return <div className={cn("flex w-fit items-center gap-2 text-sm font-medium",className)} {...props}/>}
function FieldDescription({className,...props}:React.ComponentProps<"p">){return <p className={cn("text-muted-foreground text-sm",className)} {...props}/>}
function FieldSeparator({children,className,...props}:React.ComponentProps<"div">&{children?:React.ReactNode}){return <div className={cn("relative -my-2 h-5 text-sm",className)} {...props}><Separator className="absolute inset-0 top-1/2"/>{children&&<span className="bg-background text-muted-foreground relative mx-auto block w-fit px-2">{children}</span>}</div>}
function FieldError({className,children,errors,...props}:React.ComponentProps<"div">&{errors?:Array<{message?:string}|undefined>}){const content=useMemo(()=>children??(errors?.length===1?errors[0]?.message:errors&&<ul>{errors.map((e,i)=>e?.message&&<li key={i}>{e.message}</li>)}</ul>),[children,errors]); if(!content)return null; return <div role="alert" className={cn("text-destructive text-sm",className)} {...props}>{content}</div>}
export {Field,FieldLabel,FieldDescription,FieldError,FieldGroup,FieldLegend,FieldSeparator,FieldSet,FieldContent,FieldTitle}
