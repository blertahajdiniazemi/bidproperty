"use client"
import * as React from "react"
import * as RechartsPrimitive from "recharts"
import { cn } from "@/lib/utils"
export type ChartConfig={ [k:string]: {label?:React.ReactNode; icon?:React.ComponentType} & ({color?:string;theme?:never}|{color?:never;theme:Record<"light"|"dark",string>})}
const ChartContext=React.createContext<{config:ChartConfig}|null>(null)
function useChart(){const c=React.useContext(ChartContext); if(!c) throw new Error("useChart must be used within a <ChartContainer />"); return c}
function ChartContainer({id,className,children,config,...props}:React.ComponentProps<"div">&{config:ChartConfig;children:React.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>["children"]}){return <ChartContext.Provider value={{config}}><div data-chart={id} className={cn("flex aspect-video justify-center text-xs",className)} {...props}><RechartsPrimitive.ResponsiveContainer>{children}</RechartsPrimitive.ResponsiveContainer></div></ChartContext.Provider>}
const ChartTooltip=RechartsPrimitive.Tooltip
function ChartTooltipContent({active,payload,className}:any){if(!active||!payload?.length)return null;return <div className={cn("border-border/50 bg-background grid min-w-32 gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",className)}>{payload.map((item:any)=><div key={item.dataKey} className="flex justify-between gap-2"><span className="text-muted-foreground">{item.name}</span><span className="font-mono font-medium">{item.value}</span></div>)}</div>}
const ChartLegend=RechartsPrimitive.Legend
function ChartLegendContent({className,payload}:any){const {config}=useChart(); if(!payload?.length)return null;return <div className={cn("flex items-center justify-center gap-4",className)}>{payload.map((item:any)=><div key={item.value} className="flex items-center gap-1.5"><div className="h-2 w-2 rounded-sm" style={{backgroundColor:item.color}}/>{config[item.value]?.label??item.value}</div>)}</div>}
function ChartStyle(){return null}
export {ChartContainer,ChartTooltip,ChartTooltipContent,ChartLegend,ChartLegendContent,ChartStyle}
