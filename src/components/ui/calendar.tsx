"use client"
import * as React from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { DayPicker } from "react-day-picker"
import { cn } from "@/lib/utils"
function Calendar({className,classNames,showOutsideDays=true,...props}:React.ComponentProps<typeof DayPicker>){return <DayPicker showOutsideDays={showOutsideDays} className={cn("bg-background p-3",className)} classNames={classNames} components={{Chevron:({orientation,...p})=> orientation==="left"?<ChevronLeftIcon className="size-4" {...p}/>:<ChevronRightIcon className="size-4" {...p}/>}} {...props}/>}
function CalendarDayButton(props:any){return <button {...props}/>}
export {Calendar,CalendarDayButton}
