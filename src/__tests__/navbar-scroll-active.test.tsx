/* global describe, it, expect, beforeEach */

import { act, render, screen, waitFor } from "@testing-library/react";
import Navbar from "@/components/Navbar";

const sectionIds = ["home", "about", "skills", "projects", "experience", "contact", "blog"];

describe("navbar active link sync", () => {
    beforeEach(() => {
        document.body.innerHTML = "";

        sectionIds.forEach((id, index) => {
            const section = document.createElement("section");
            section.id = id;
            Object.defineProperty(section, "offsetTop", {
                value: index * 800,
                configurable: true,
            });
            document.body.appendChild(section);
        });

        Object.defineProperty(window, "scrollY", {
            value: 0,
            writable: true,
            configurable: true,
        });
    });

    it("updates active nav item while scrolling", async () => {
        render(<Navbar />);

        Object.defineProperty(window, "scrollY", {
            value: 2500,
            writable: true,
            configurable: true,
        });
        await act(async () => {
            window.dispatchEvent(new Event("scroll"));
        });

        await waitFor(() => {
            expect(screen.getByText("Projects").className).toContain("bg-violet-400/12");
        });
    });
});
