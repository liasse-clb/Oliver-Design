export default function Carrossel() {
  return(
<div id="default-carousel" data-carousel-interval="10000" className="relative w-full mt-20" data-carousel="slide">
   
    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-base">
        <div className="duration-700 ease-in-out flex flex-col-reverse md:justify-between md:flex-row" data-carousel-item>
            <img src="/Carrosel1.webp" className="w-full h-full object-contain" alt="Carrossel 1" />   
        </div>
        <div className="duration-700 ease-in-out flex flex-col-reverse md:justify-between md:flex-row" data-carousel-item>
            <img src="/Carrosel2.webp" className="w-full h-full object-contain" alt="Carrossel 2" />
        </div>
        <div className="flex gap-3 md:gap-52 duration-700 ease-in-out" data-carousel-item>
            <img src="/Carrosel3.webp" className="w-full h-full object-contain" alt="Carrossel 3" />
        </div>
        <div className="flex justify-between duration-700 ease-in-out" data-carousel-item>
            <img src="/Carrosel4.webp" className="w-full h-full object-contain" alt="Carrossel 4" />
        </div>
    </div>
   
    <div className="absolute z-30 flex -translate-x-1/2 left-1/2 -bottom-4 space-x-3 rtl:space-x-reverse">
        <button type="button" className="w-3 h-3 rounded-full bg-slate-500 hover:bg-sky-800" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full bg-slate-500 hover:bg-sky-800" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full bg-slate-500 hover:bg-sky-800" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-3 h-3 rounded-full bg-slate-500 hover:bg-sky-800" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
    </div>

    <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-500/65">
            <svg className="w-5 h-5 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/></svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-500/65">
            <svg className="w-5 h-5 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/></svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div>

  );
}