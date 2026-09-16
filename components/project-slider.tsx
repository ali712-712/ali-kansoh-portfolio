"use client";

import * as React from "react";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type ProjectSliderProps = {
  title: string;
  pages: number[];
  assetPrefix?: string;
};

export function ProjectSlider({ title, pages, assetPrefix = "/assets/portfolio/page" }: ProjectSliderProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    const updateCurrent = () => setCurrent(api.selectedScrollSnap());
    updateCurrent();
    api.on("select", updateCurrent);
    api.on("reInit", updateCurrent);
    return () => {
      api.off("select", updateCurrent);
      api.off("reInit", updateCurrent);
    };
  }, [api]);

  return (
    <div className="project-slider">
      <Carousel setApi={setApi} opts={{ align: "start", loop: true, slidesToScroll: 2 }}>
        <CarouselContent className="slider-track">
          {pages.map((page, pageIndex) => (
            <CarouselItem key={page} className="slider-item">
              <figure>
                <div className="slide-frame">
                  <img
                    src={`${assetPrefix}-${String(page).padStart(2, "0")}.jpg`}
                    alt={`${title} presentation panel ${pageIndex + 1}`}
                    loading={pageIndex < 2 ? "eager" : "lazy"}
                  />
                </div>
                <figcaption>
                  <span>{title}</span>
                  <span>{String(pageIndex + 1).padStart(2, "0")} / {String(pages.length).padStart(2, "0")}</span>
                </figcaption>
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="slider-previous" />
        <CarouselNext className="slider-next" />
      </Carousel>

      <div className="slide-thumbnails" aria-label="Choose a portfolio panel">
        {pages.map((page, pageIndex) => (
          <button
            type="button"
            key={page}
            className={Math.floor(pageIndex / 2) === current ? "active" : ""}
            onClick={() => api?.scrollTo(Math.floor(pageIndex / 2))}
            aria-label={`Show panel ${pageIndex + 1}`}
            aria-current={Math.floor(pageIndex / 2) === current ? "true" : undefined}
          >
            <img
              src={`${assetPrefix}-${String(page).padStart(2, "0")}.jpg`}
              alt=""
              loading="lazy"
            />
            <span>{String(pageIndex + 1).padStart(2, "0")}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
