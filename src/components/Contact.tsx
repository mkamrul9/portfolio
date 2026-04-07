"use client";

import { useRef, useState, type FormEvent } from "react";
import {
    CircleAlert,
    CircleCheck,
    LoaderCircle,
    Send,
} from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
        "idle",
    );

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formRef.current) return;

        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            setSubmitStatus("error");
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
            setSubmitStatus("success");
            formRef.current.reset();
        } catch (error) {
            console.error("EmailJS send failed:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus("idle"), 5000);
        }
    };

    return (
        <section id="contact" className="relative overflow-hidden bg-zinc-900 py-24">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.18),transparent_45%)]" />
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-4xl font-extrabold tracking-tight text-zinc-100 sm:text-5xl">
                        Get In{" "}
                        <span className="bg-linear-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                            Touch
                        </span>
                    </h2>
                    <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-violet-400"></div>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-400">
                        Have a project in mind or just want to say hi? I&apos;d love to
                        hear from you.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-2xl rounded-3xl border border-zinc-800 bg-zinc-950 p-6 shadow-xl shadow-black/40 md:p-7"
                >
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label
                                    htmlFor="user_name"
                                    className="mb-1.5 block text-xs font-semibold tracking-wider text-zinc-300 uppercase"
                                >
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="user_name"
                                    name="user_name"
                                    required
                                    className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-zinc-100 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-violet-400"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="user_email"
                                    className="mb-1.5 block text-xs font-semibold tracking-wider text-zinc-300 uppercase"
                                >
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="user_email"
                                    name="user_email"
                                    required
                                    className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-zinc-100 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-violet-400"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="mb-1.5 block text-xs font-semibold tracking-wider text-zinc-300 uppercase"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={3}
                                    className="w-full resize-none rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-zinc-100 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-violet-400"
                                    placeholder="How can I help you?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex w-full items-center justify-center gap-2 rounded-lg bg-linear-to-r from-violet-400 to-fuchsia-500 px-5 py-3.5 font-bold text-zinc-950 transition-all hover:shadow-lg hover:shadow-fuchsia-500/30 disabled:cursor-not-allowed disabled:opacity-70"
                            >
                                {isSubmitting ? (
                                    <LoaderCircle size={20} className="animate-spin" />
                                ) : (
                                    <Send size={20} />
                                )}
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>

                            {submitStatus === "success" && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 font-medium text-emerald-300"
                                >
                                    <CircleCheck size={20} />
                                    Message sent successfully! I will get back to you soon.
                                </motion.div>
                            )}
                            {submitStatus === "error" && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 p-4 font-medium text-red-300"
                                >
                                    <CircleAlert size={20} />
                                    Oops! Something went wrong. Please try again or email me
                                    directly.
                                </motion.div>
                            )}
                        </form>
                </motion.div>
            </div>
        </section>
    );
}
