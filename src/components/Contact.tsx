"use client";

import { useRef, useState, type FormEvent, type ReactNode } from "react";
import {
    CircleAlert,
    CircleCheck,
    LoaderCircle,
    Mail,
    MessageCircle,
    Phone,
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
        <section id="contact" className="overflow-hidden bg-white py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                        Get In{" "}
                        <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                            Touch
                        </span>
                    </h2>
                    <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-blue-600"></div>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                        Have a project in mind or just want to say hi? I&apos;d love to
                        hear from you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
                    <div className="space-y-6">
                        <ContactCard
                            icon={<Phone size={24} className="text-blue-600" />}
                            title="Phone"
                            value="01736635727"
                            href="tel:01736635727"
                            delay={0.1}
                        />
                        <ContactCard
                            icon={<MessageCircle size={24} className="text-green-500" />}
                            title="WhatsApp"
                            value="01836306512"
                            href="https://wa.me/01836306512"
                            delay={0.2}
                        />
                        <ContactCard
                            icon={<Mail size={24} className="text-red-500" />}
                            title="Email"
                            value="mdkamrulislam.dev@gmail.com"
                            href="mailto:mdkamrulislam.dev@gmail.com"
                            delay={0.3}
                        />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative rounded-3xl border border-gray-100 bg-gray-50 p-8 shadow-xl shadow-gray-200/50 md:p-10"
                    >
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label
                                    htmlFor="user_name"
                                    className="mb-2 block text-sm font-bold text-gray-700"
                                >
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="user_name"
                                    name="user_name"
                                    required
                                    className="w-full rounded-xl border border-gray-200 bg-white px-5 py-4 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-blue-600"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="user_email"
                                    className="mb-2 block text-sm font-bold text-gray-700"
                                >
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="user_email"
                                    name="user_email"
                                    required
                                    className="w-full rounded-xl border border-gray-200 bg-white px-5 py-4 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-blue-600"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="mb-2 block text-sm font-bold text-gray-700"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    className="w-full resize-none rounded-xl border border-gray-200 bg-white px-5 py-4 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-blue-600"
                                    placeholder="How can I help you?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-blue-600 to-blue-700 px-6 py-4 font-bold text-white transition-all hover:shadow-lg hover:shadow-blue-500/30 disabled:cursor-not-allowed disabled:opacity-70"
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
                                    className="flex items-center gap-2 rounded-lg bg-green-50 p-4 font-medium text-green-600"
                                >
                                    <CircleCheck size={20} />
                                    Message sent successfully! I will get back to you soon.
                                </motion.div>
                            )}
                            {submitStatus === "error" && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-2 rounded-lg bg-red-50 p-4 font-medium text-red-600"
                                >
                                    <CircleAlert size={20} />
                                    Oops! Something went wrong. Please try again or email me
                                    directly.
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function ContactCard({
    icon,
    title,
    value,
    href,
    delay,
}: {
    icon: ReactNode;
    title: string;
    value: string;
    href: string;
    delay: number;
}) {
    return (
        <motion.a
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            whileHover={{ scale: 1.02 }}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-xl"
        >
            <div className="rounded-2xl bg-gray-50 p-5 transition-colors duration-300 group-hover:bg-blue-50">
                {icon}
            </div>
            <div>
                <h4 className="mb-1 text-sm font-bold tracking-widest text-gray-400 uppercase">
                    {title}
                </h4>
                <p className="text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                    {value}
                </p>
            </div>
        </motion.a>
    );
}
