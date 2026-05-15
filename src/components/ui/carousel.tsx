"use client"
import * as React from "react"
import useEmblaCarousel,{type UseEmblaCarouselType} from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
type CarouselApi=UseEmblaCarouselType[1]; type CarouselProps={opts?:Parameters<typeof useEmblaCarousel>[0];plugins?:Parameters<typeof useEmblaCarousel>[1];orientation?:"horizontal"|"vertical";setApi?:(api:CarouselApi)=>void}
const C=React.createContext<any>(null); function useCarousel(){const c=React.useContext(C); if(!c) throw new Error("useCarousel must be used within a <Carousel />"); return c}
function Carousel({orientation="horizontal",opts,setApi,plugins,className,children,...props}:React.ComponentProps<"div">&CarouselProps){const [ref,api]=useEmblaCarousel({...opts,axis:orientation==="horizontal"?"x":"y"},plugins);React.useEffect(()=>{if(api&&setApi)setApi(api)},[api,setApi]);return <C.Provider value={{carouselRef:ref,api,orientation,scrollPrev:()=>api?.scrollPrev(),scrollNext:()=>api?.scrollNext(),canScrollPrev:true,canScrollNext:true}}><div className={cn("relative",className)} role="region" aria-roledescription="carousel" {...props}>{children}</div></C.Provider>}
function CarouselContent({className,...props}:React.ComponentProps<"div">){const {carouselRef,orientation}=useCarousel();return <div ref={carouselRef} className="overflow-hidden"><div className={cn("flex",orientation==="horizontal"?"-ml-4":"-mt-4 flex-col",className)} {...props}/></div>}
function CarouselItem({className,...props}:React.ComponentProps<"div">){const {orientation}=useCarousel();return <div role="group" aria-roledescription="slide" className={cn("min-w-0 shrink-0 grow-0 basis-full",orientation==="horizontal"?"pl-4":"pt-4",className)} {...props}/>}
function CarouselPrevious({className,...props}:React.ComponentProps<typeof Button>){const {scrollPrev}=useCarousel();return <Button variant="outline" size="icon" className={cn("absolute size-8 rounded-full top-1/2 -left-12 -translate-y-1/2",className)} onClick={scrollPrev} {...props}><ArrowLeft/><span className="sr-only">Previous slide</span></Button>}
function CarouselNext({className,...props}:React.ComponentProps<typeof Button>){const {scrollNext}=useCarousel();return <Button variant="outline" size="icon" className={cn("absolute size-8 rounded-full top-1/2 -right-12 -translate-y-1/2",className)} onClick={scrollNext} {...props}><ArrowRight/><span className="sr-only">Next slide</span></Button>}
export {type CarouselApi,Carousel,CarouselContent,CarouselItem,CarouselPrevious,CarouselNext}
