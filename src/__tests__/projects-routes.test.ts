/* global describe, it, expect */

import { generateStaticParams } from "@/app/projects/[id]/page";

describe("projects route generation", () => {
    it("generates static params for all project detail pages", () => {
        expect(generateStaticParams()).toEqual([
            { id: "1" },
            { id: "2" },
            { id: "3" },
        ]);
    });
});
