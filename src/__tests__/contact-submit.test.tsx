/* global describe, it, expect, jest, beforeEach, afterEach */

import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Contact from "@/components/Contact";

describe("contact submit flow", () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.clearAllTimers();
        jest.useRealTimers();
    });

    it("shows success feedback after submit", async () => {
        const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
        render(<Contact />);

        await user.type(screen.getByLabelText(/your name/i), "Kamrul Islam");
        await user.type(screen.getByLabelText(/your email/i), "kamrul@example.com");
        await user.type(screen.getByLabelText(/message/i), "Testing contact flow");

        await user.click(screen.getByRole("button", { name: /send message/i }));

        expect(screen.getByRole("button", { name: /sending/i })).toBeInTheDocument();

        await act(async () => {
            jest.advanceTimersByTime(1000);
        });

        expect(screen.getByText(/we got you! thanks for reaching out./i)).toBeInTheDocument();
    });
});
