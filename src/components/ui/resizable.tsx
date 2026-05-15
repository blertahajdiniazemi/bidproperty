"use client"
import * as React from "react"
import { GripVerticalIcon } from "lucide-react"
import * as P from "react-resizable-panels"
import { cn } from "@/lib/utils"
function ResizablePanelGroup({className,...props}:React.ComponentProps<typeof P.PanelGroup>){return <P.PanelGroup className={cn("flex h-full w-full data-[panel-group-direction=vertical]:flex-col",className)} {...props}/>}
function ResizablePanel(props:React.ComponentProps<typeof P.Panel>){return <P.Panel {...props}/>}
function ResizableHandle({withHandle,className,...props}:React.ComponentProps<typeof P.PanelResizeHandle>&{withHandle?:boolean}){return <P.PanelResizeHandle className={cn("bg-border relative flex w-px items-center justify-center",className)} {...props}>{withHandle&&<div className="bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border"><GripVerticalIcon className="size-2.5"/></div>}</P.PanelResizeHandle>}
export {ResizablePanelGroup,ResizablePanel,ResizableHandle}
