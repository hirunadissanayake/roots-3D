"use client";

import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, MotionValue } from "framer-motion";

interface BottleCanvasProps {
    folderPath: string; // e.g. /images/mango
    progress: MotionValue<number>;
}

export default function BottleCanvas({ folderPath, progress }: BottleCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const scrollYProgress = progress;
    const [currentFrame, setCurrentFrame] = useState(1);
    const frameCount = 120; // Using 120 frames as per spec


    // Preload images
    useEffect(() => {
        setImages([]); // Clear previous images
        const loadedImages: HTMLImageElement[] = [];

        // We'll proceed even if they load progressively, but keep track
        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            // Construct path: /images/mango/ezgif-frame-001.jpg
            const paddedIndex = i.toString().padStart(3, '0');
            img.src = `${folderPath}/ezgif-frame-${paddedIndex}.jpg`;
            img.onload = () => {
                if (i === 1) {
                    requestAnimationFrame(() => drawFrame(1));
                }
            };
            loadedImages[i - 1] = img;
        }
        setImages(loadedImages);
    }, [folderPath]);

    // Handle Resize and drawing logic
    const drawFrame = (frame: number) => {
        const canvas = canvasRef.current;
        if (!canvas || images.length === 0) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = images[frame - 1];
        if (!img || !img.complete || img.naturalWidth === 0) return;

        // Make canvas fullscreen match
        if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        // 'Contain' logic with a max scale?
        // Roots visuals usually have key bottle large.
        // We'll calculate a "contain" ratio that fills a good portion of screen.
        // Let's use slight modification of contain: ensuring it doesn't get TOO big on massive screens, but fills mobile.
        const hRatio = canvas.width / img.naturalWidth;
        const vRatio = canvas.height / img.naturalHeight;
        const ratio = Math.min(hRatio, vRatio) * 0.8; // Use 80% of screen space? Or maybe cover?
        // Prompt: "Roots" Nano Banana Edition... premium.
        // Let's use `Math.min(hRatio, vRatio)` (contain) but maybe a bit bigger if desired. 
        // Actually standard contain is safest.
        const finalRatio = Math.min(hRatio, vRatio);

        const centerShift_x = (canvas.width - img.naturalWidth * finalRatio) / 2;
        const centerShift_y = (canvas.height - img.naturalHeight * finalRatio) / 2;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, centerShift_x, centerShift_y, img.naturalWidth * finalRatio, img.naturalHeight * finalRatio);
    };

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // Map 0-0.7 scroll progress to 1-120 frames
        // After 0.7, it stays at frame 120 (Hero Shot Fix)
        const animationEnd = 0.7;
        const progressInAnimation = Math.min(1, latest / animationEnd);

        const frameIndex = Math.min(
            frameCount,
            Math.max(1, Math.ceil(progressInAnimation * frameCount))
        );
        if (frameIndex !== currentFrame) {
            setCurrentFrame(frameIndex);
        }
    });

    // Re-draw when frame changes
    useEffect(() => {
        requestAnimationFrame(() => drawFrame(currentFrame));
    }, [currentFrame, images]);

    // Handle resize re-draw
    useEffect(() => {
        const handleResize = () => requestAnimationFrame(() => drawFrame(currentFrame));
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [currentFrame, images]);

    return (
        <div className="absolute inset-0 z-0 touch-none pointer-events-none">
            <canvas ref={canvasRef} className="w-full h-full" />
        </div>
    );
}
