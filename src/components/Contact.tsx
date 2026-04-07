"use client";

import { useRef, useState, type FormEvent, type ReactNode } from "react";
import {
    Briefcase,
    Code,
    CircleAlert,
    CircleCheck,
    FolderGit2,
    LoaderCircle,
    Mail,
    MessageCircle,
    Package,
    Phone,
    Send,
    Trophy,
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
        <section id="contact" className="relative overflow-hidden bg-zinc-800 py-24">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(34,211,238,0.08),transparent_30%)]" />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl font-extrabold tracking-tight text-zinc-100 sm:text-5xl">
                        Get In{" "}
                        <span className="bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                            Touch
                        </span>
                    </h2>
                    <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-cyan-400"></div>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-400">
                        Have a project in mind or just want to say hi? I&apos;d love to
                        hear from you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <ContactCard
                                icon={<Phone size={24} className="text-cyan-400" />}
                                title="Phone"
                                value="01736635727"
                                href="tel:01736635727"
                                delay={0.1}
                            />
                            <ContactCard
                                icon={<MessageCircle size={24} className="text-cyan-400" />}
                                title="WhatsApp"
                                value="01836306512"
                                href="https://wa.me/8801836306512"
                                delay={0.2}
                            />
                            <ContactCard
                                icon={<Mail size={24} className="text-cyan-400" />}
                                title="Email"
                                value="mdkamrulislam.dev@gmail.com"
                                href="mailto:mdkamrulislam.dev@gmail.com"
                                delay={0.3}
                            />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6"
                        >
                            <h3 className="mb-4 text-lg font-bold text-zinc-100">
                                Profiles & Links
                            </h3>
                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                <ProfileLink
                                    href="https://github.com/mkamrul9"
                                    label="GitHub"
                                    icon={<FolderGit2 size={18} />}
                                />
                                <ProfileLink
                                    href="https://www.linkedin.com/in/md-kamrul-islam9"
                                    label="LinkedIn"
                                    icon={<Briefcase size={18} />}
                                />
                                <ProfileLink
                                    href="https://leetcode.com/u/Kamrul19/"
                                    label="LeetCode"
                                    icon={<Code size={18} />}
                                />
                                <ProfileLink
                                    href="https://codeforces.com/profile/blue9"
                                    label="Codeforces"
                                    icon={<Trophy size={18} />}
                                />
                                <ProfileLink
                                    href="https://www.npmjs.com/package/streamshare-cli"
                                    label="streamshare-cli"
                                    icon={<Package size={18} />}
                                />
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative rounded-3xl border border-zinc-800 bg-zinc-950 p-8 shadow-xl shadow-black/40 md:p-10"
                    >
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label
                                    htmlFor="user_name"
                                    className="mb-2 block text-sm font-bold text-zinc-200"
                                >
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="user_name"
                                    name="user_name"
                                    required
                                    className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-4 text-zinc-100 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-cyan-400"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="user_email"
                                    className="mb-2 block text-sm font-bold text-zinc-200"
                                >
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="user_email"
                                    name="user_email"
                                    required
                                    className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-4 text-zinc-100 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-cyan-400"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="mb-2 block text-sm font-bold text-zinc-200"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    className="w-full resize-none rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-4 text-zinc-100 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-cyan-400"
                                    placeholder="How can I help you?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-cyan-400 to-blue-500 px-6 py-4 font-bold text-zinc-950 transition-all hover:shadow-lg hover:shadow-cyan-500/30 disabled:cursor-not-allowed disabled:opacity-70"
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
            className="group flex items-center gap-5 rounded-3xl border border-zinc-800 bg-zinc-950 p-6 shadow-sm transition-all hover:shadow-xl hover:shadow-cyan-500/10"
        >
            <div className="rounded-2xl bg-zinc-900 p-5 transition-colors duration-300 group-hover:bg-cyan-500/15">
                {icon}
            </div>
            <div>
                <h4 className="mb-1 text-sm font-bold tracking-widest text-zinc-500 uppercase">
                    {title}
                </h4>
                <p className="text-xl font-bold text-zinc-100 transition-colors group-hover:text-cyan-300">
                    {value}
                </p>
            </div>
        </motion.a>
    );
}

function ProfileLink({
    href,
    label,
    icon,
}: {
    href: string;
    label: string;
    icon: ReactNode;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm font-medium text-zinc-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
        >
            {icon}
            <span>{label}</span>
        </a>
    );
}
