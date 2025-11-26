// "use client";
// import { useEffect, useRef } from "react";

// export default function SmoothScroll({ children }: { children: React.ReactNode }) {

//     const contentRef = useRef<HTMLDivElement>(null);
//     const viewportRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         const content = contentRef.current!;
//         const viewport = viewportRef.current!;

//         let current = 0;
//         let target = 0;
//         let velocity = 0;

//         const ease = 0.08;
//         const friction = 0.92;
//         const maxVelocity = 20;

//         // Resize observer to match body height
//         const ro = new ResizeObserver(() => {
//             content.style.height = `${content.scrollHeight}px`;
//         });
//         ro.observe(content);

//         // Disable native scroll
//         document.body.style.overflow = "hidden";

//         // Wheel input
//         const handleWheel = (e: WheelEvent) => {
//             velocity += e.deltaY;
//             if (velocity > maxVelocity) velocity = maxVelocity;
//             if (velocity < -maxVelocity) velocity = -maxVelocity;
//         };
//         window.addEventListener("wheel", handleWheel, { passive: true });

//         // Animation loop
//         const animate = () => {
//             target += velocity;
//             velocity *= friction;

//             const maxScroll = content.scrollHeight - window.innerHeight;
//             if (target < 0) target = 0;
//             if (target > maxScroll) target = maxScroll;

//             current += (target - current) * ease;
//             content.style.transform = `translateY(${-current}px)`;

//             // Dispatch custom scroll event so other components can react
//             window.dispatchEvent(new CustomEvent('smoothscroll', { detail: { scrollY: current } }));

//             requestAnimationFrame(animate);
//         };
//         animate();

//         return () => {
//             window.removeEventListener("wheel", handleWheel);
//             document.body.style.overflow = "";
//             ro.disconnect();
//         };
//     }, []);

//     return (
//         <div
//             ref={viewportRef}
//             style={{
//                 position: "fixed",
//                 inset: 0,
//                 overflow: "hidden",
//                 zIndex: 1,
//             }}
//         >
//             <div ref={contentRef} style={{ willChange: "transform" }}>
//                 {children}
//             </div>

//         </div>
//     );
// }

"use client";
import { useEffect, useRef } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {

    const contentRef = useRef<HTMLDivElement>(null);
    const viewportRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const content = contentRef.current!;
        const viewport = viewportRef.current!;

        let current = 0;
        let target = 0;
        let velocity = 0;

        const ease = 0.08;
        const friction = 0.92;
        const maxVelocity = 20;

        const ro = new ResizeObserver(() => {
            content.style.height = `${content.scrollHeight}px`;
        });
        ro.observe(content);

        document.body.style.overflow = "hidden";

        const handleWheel = (e: WheelEvent) => {
            velocity += e.deltaY;
            if (velocity > maxVelocity) velocity = maxVelocity;
            if (velocity < -maxVelocity) velocity = -maxVelocity;
        };
        window.addEventListener("wheel", handleWheel, { passive: true });

        const animate = () => {
            target += velocity;
            velocity *= friction;

            const maxScroll = content.scrollHeight - window.innerHeight;
            if (target < 0) target = 0;
            if (target > maxScroll) target = maxScroll;

            current += (target - current) * ease;
            content.style.transform = `translateY(${-current}px)`;

            // Dispatch custom event with virtual scroll position
            window.dispatchEvent(new CustomEvent('smoothscroll', { 
                detail: { scrollY: current } 
            }));

            requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener("wheel", handleWheel);
            document.body.style.overflow = "";
            ro.disconnect();
        };
    }, []);

    return (
        <div
            ref={viewportRef}
            style={{
                position: "fixed",
                inset: 0,
                overflow: "hidden",
                zIndex: 1,
            }}
        >
            <div ref={contentRef} style={{ willChange: "transform" }}>
                {children}
            </div>
        </div>
    );
}