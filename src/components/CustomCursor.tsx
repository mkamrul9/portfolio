"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type CursorPosition = {
    x: number;
    y: number;
};

export default function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const [isInteractive, setIsInteractive] = useState(false);
    const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });

    useEffect(() => {
        const isFinePointer =
            window.matchMedia("(hover: hover)").matches &&
            window.matchMedia("(pointer: fine)").matches;

        if (!isFinePointer) {
            return;
        }

        const updateCursor = (event: MouseEvent) => {
            setPosition({ x: event.clientX, y: event.clientY });
            setIsVisible(true);

            const target = event.target as HTMLElement | null;
            const interactive =
                !!target?.closest("a, button, input, textarea, select, [role='button']");
            setIsInteractive(interactive);
        };

        const hideCursor = () => setIsVisible(false);

        window.addEventListener("mousemove", updateCursor);
        window.addEventListener("mouseleave", hideCursor);

        return () => {
            window.removeEventListener("mousemove", updateCursor);
            window.removeEventListener("mouseleave", hideCursor);
        };
    }, []);

    return (
        <>
            <motion.div
                aria-hidden="true"
                animate={{
                    x: position.x,
                    y: position.y,
                    opacity: isVisible ? 1 : 0,
                    width: isInteractive ? 34 : 22,
                    height: isInteractive ? 34 : 22,
                    borderRadius: isInteractive ? "26%" : "999px",
                    rotate: isInteractive ? 45 : 0,
                    borderColor: isInteractive
                        ? "rgba(244, 208, 255, 0.95)"
                        : "rgba(216, 180, 254, 0.9)",
                    backgroundColor: isInteractive
                        ? "rgba(232, 121, 249, 0.18)"
                        : "rgba(192, 132, 252, 0.08)",
                    boxShadow: isInteractive
                        ? "0 0 28px rgba(232, 121, 249, 0.65)"
                        : "0 0 22px rgba(192, 132, 252, 0.5)",
                }}
                transition={{ type: "spring", stiffness: 420, damping: 28, mass: 0.2 }}
                className="pointer-events-none fixed top-0 left-0 z-120 -translate-x-1/2 -translate-y-1/2 border"
            />
            <motion.div
                aria-hidden="true"
                animate={{
                    x: position.x,
                    y: position.y,
                    opacity: isVisible ? 1 : 0,
                    scale: isInteractive ? 1.2 : 1,
                    backgroundColor: isInteractive
                        ? "rgba(244, 208, 255, 1)"
                        : "rgba(216, 180, 254, 0.95)",
                }}
                transition={{ type: "spring", stiffness: 520, damping: 30, mass: 0.15 }}
                className="pointer-events-none fixed top-0 left-0 z-120 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
            />
        </>
    );
}
