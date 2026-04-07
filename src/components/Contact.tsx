import type { ReactNode } from "react";
import { Mail, MessageCircle, Phone, Send } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Get In <span className="text-blue-600">Touch</span>
                    </h2>
                    <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-blue-600"></div>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                        Have a project in mind or just want to say hi? Feel free to reach out!
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    <div className="space-y-6">
                        <ContactCard
                            icon={<Phone size={24} className="text-blue-600" />}
                            title="Phone"
                            value="01736635727"
                            href="tel:01736635727"
                        />
                        <ContactCard
                            icon={<MessageCircle size={24} className="text-green-500" />}
                            title="WhatsApp"
                            value="01836306512"
                            href="https://wa.me/01836306512"
                        />
                        <ContactCard
                            icon={<Mail size={24} className="text-red-500" />}
                            title="Email"
                            value="mdkamrulislam.dev@gmail.com"
                            href="mailto:mdkamrulislam.dev@gmail.com"
                        />
                    </div>

                    <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8 shadow-sm">
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-1 block text-sm font-medium text-gray-700"
                                >
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-blue-600"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-1 block text-sm font-medium text-gray-700"
                                >
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-blue-600"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="mb-1 block text-sm font-medium text-gray-700"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-blue-600"
                                    placeholder="How can I help you?"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
                            >
                                <Send size={20} />
                                Send Message
                            </button>
                        </form>
                    </div>
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
}: {
    icon: ReactNode;
    title: string;
    value: string;
    href: string;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-6 transition-all hover:border-blue-100 hover:shadow-md"
        >
            <div className="rounded-full bg-white p-4 shadow-sm transition-transform duration-300 group-hover:scale-110">
                {icon}
            </div>
            <div>
                <h4 className="text-sm font-medium tracking-wider text-gray-500 uppercase">
                    {title}
                </h4>
                <p className="text-lg font-semibold text-gray-900">{value}</p>
            </div>
        </a>
    );
}
