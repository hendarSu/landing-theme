"use client";
import { useEffect, useRef } from "react";
import { Button } from "./ui/button";

// You'll need to install instafeed.js first:
// npm install instafeed.js
// or
// yarn add instafeed.js

const InstagramFeed = () => {
  const feedRef = useRef<HTMLDivElement>(null);

  // Dynamically import Instafeed to avoid SSR issues
  const loadInstafeed = async () => {
    const Instafeed = (await import("instafeed.js")).default;

    if (feedRef.current) {
      const feed = new Instafeed({
        accessToken: process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN || "", // You need to set this
        target: feedRef.current,
        template: `
                        <div class="instagram-post">
                            <a href="{{link}}" target="_blank" rel="noopener noreferrer" class="block">
                                <div class="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                    <img src="{{image}}" alt="{{caption}}" class="w-full h-full object-cover" />
                                </div>
                            </a>
                            <div class="mt-2">
                                <p class="text-sm text-muted-foreground line-clamp-2">{{caption}}</p>
                            </div>
                        </div>
                    `,
        limit: 6,
      });

      try {
        feed.run();
      } catch (error) {
        console.error("Error loading Instagram feed:", error);
      }
    }
  };

  let loaded = false;

  useEffect(() => {
    if (!loaded) {
      loadInstafeed();
      loaded = true;
    }
  }, []);

  return (
    <section className="w-full py-8 md:py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl/tight">
              Instagram Terbaru
            </h2>
            <p className="max-w-[900px] text-muted-foreground text-sm md:text-base lg:text-xl">
              Ikuti perjalanan seni pedalangan kami melalui momen-momen terbaik
              di Instagram.
            </p>
          </div>
        </div>

        <div
          ref={feedRef}
          className="mt-8 md:mt-12 grid gap-2 sm:gap-4 grid-cols-2 md:grid-cols-3"
          style={{
            gridAutoRows: "1fr",
          }}
        />

        {/* <div className="mt-8 md:mt-12 text-center">
          <Button size="sm" className="sm:size-md" asChild>
            <a
              href={`https://www.instagram.com/${
                process.env.NEXT_PUBLIC_INSTAGRAM_USERNAME || ""
              }`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ikuti Instagram Kami
            </a>
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default InstagramFeed;
