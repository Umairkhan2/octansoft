import {
  Code2, Palette, AppWindow, Rocket, Handshake, Gauge,
  type LucideIcon,
} from "lucide-react";

// ✏️ Website ka saara content isi file mein hai.
// TODO wali cheezein real data se replace karni hain.

export const site = {
  name: "OctanSoft",
  email: "hello@octansoft.com", // TODO
  whatsapp: "+92 300 0000000", // TODO
  whatsappLink: "https://wa.me/923000000000", // TODO
  address: "Your office address, City, Country", // TODO
  rating: "4.9",
  socials: [
    { label: "LinkedIn", href: "#" }, // TODO
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "Fiverr", href: "#" },
  ],
};

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export type Service = { title: string; desc: string; tags: string[]; icon: LucideIcon };

export const services: Service[] = [
  { title: "Website Development", desc: "Fast, responsive websites built to turn visitors into paying customers.", tags: ["Next.js", "WordPress", "Webflow"], icon: Code2 },
  { title: "Branding", desc: "Logos and visual identities that make your business instantly recognizable.", tags: ["Logo", "Identity", "Guidelines"], icon: Palette },
  { title: "Custom Webapps", desc: "Dashboards, portals and internal tools shaped around how your business runs.", tags: ["Dashboards", "Portals", "APIs"], icon: AppWindow },
  { title: "SaaS & MVP", desc: "From idea to launch-ready product, built to validate fast and scale later.", tags: ["MVP", "SaaS", "Scaling"], icon: Rocket },
  { title: "White Label Servicing Partner", desc: "Your agency's silent dev team. We build, you deliver under your brand.", tags: ["Agencies", "NDA", "On-demand"], icon: Handshake },
  { title: "SEO & Speed", desc: "Technical SEO and performance tuning so your site ranks and loads instantly.", tags: ["SEO", "Core Web Vitals"], icon: Gauge },
];

// Hero ki scrolling images. "image" mein path daalna (e.g. "/work/p1.jpg" public folder mein)
export const projects = [
  { title: "Fintech Dashboard", category: "Web App", image: "", from: "#001A4D", to: "#2F6BFF" },
  { title: "Restaurant Brand", category: "Branding", image: "", from: "#0B1220", to: "#6FA8FF" },
  { title: "SaaS Landing", category: "Website", image: "", from: "#1E3A8A", to: "#60A5FA" },
  { title: "E-commerce Store", category: "Website", image: "", from: "#001A4D", to: "#38BDF8" },
  { title: "Booking Platform", category: "SaaS & MVP", image: "", from: "#172554", to: "#818CF8" },
  { title: "Real Estate Portal", category: "Web App", image: "", from: "#0F172A", to: "#2F6BFF" },
  { title: "Clinic Website", category: "Website", image: "", from: "#1E40AF", to: "#93C5FD" },
  { title: "Agency Identity", category: "Branding", image: "", from: "#001A4D", to: "#A5B4FC" },
];

// Featured Work (case studies). TODO: real projects
export const caseStudies = [
  { industry: "Automotive", title: "A dealership website that sells", desc: "A fast, modern website that showcases inventory beautifully and turns visitors into showroom leads.", scope: "Website Development", duration: "4 Weeks", image: "", from: "#001A4D", to: "#2F6BFF" },
  { industry: "SaaS", title: "From idea to launched MVP", desc: "A lean MVP built to validate the idea fast, with a clean dashboard ready to scale with real users.", scope: "SaaS & MVP", duration: "3 Months", image: "", from: "#0B1220", to: "#6FA8FF" },
  { industry: "Agency", title: "White label delivery at scale", desc: "Ongoing development for a partner agency, delivered under their brand with zero friction.", scope: "White Label Partner", duration: "Ongoing", image: "", from: "#172554", to: "#818CF8" },
];

// Showreel video. TODO: mp4 link aur poster image
export const showreel = { video: "", poster: "" };

export const tech = ["Next.js", "React", "Webflow", "Shopify", "WordPress", "Figma", "Node.js", "Tailwind CSS", "Framer", "Laravel", "Stripe", "Vercel"];

export const stats = [
  { value: 2300, suffix: "+", label: "Businesses served" },
  { value: 5, suffix: "+", label: "Years of experience" }, // TODO
  { value: 98, suffix: "%", label: "Positive reviews" }, // TODO
  { value: 20, suffix: "+", label: "Countries reached" }, // TODO
];

export const steps = [
  { title: "Send Your Project", desc: "Share a detailed brief so we can recommend the best solution." },
  { title: "Get in Touch", desc: "We analyse your request and reach out with clear next steps." },
  { title: "Schedule Meeting", desc: "Meet the developer who will guide and build your project." },
  { title: "We Build", desc: "Design and development with regular progress updates." },
  { title: "Final Result", desc: "Polished delivery, plus support after launch." },
];

// Team. TODO: real naam, role, photo ("/team/ali.jpg")
export const team = [
  { name: "Team Member", role: "Founder & CEO", skills: ["Strategy", "Client Success"], image: "" },
  { name: "Team Member", role: "Lead Developer", skills: ["Next.js", "Node.js"], image: "" },
  { name: "Team Member", role: "UI/UX Designer", skills: ["Figma", "Branding"], image: "" },
  { name: "Team Member", role: "Project Manager", skills: ["Agile", "Delivery"], image: "" },
];

// Careers. Agar hiring nahi to page.tsx se <Careers /> hata do
export const jobs = [
  { title: "Frontend Developer (Next.js)", type: "Full Time", mode: "Remote", desc: "Build fast, beautiful interfaces for clients around the world." },
  { title: "UI/UX Designer", type: "Full Time", mode: "On-site", desc: "Design websites, apps and brands that clients love." },
];

// Videos baad mein: "video" mein mp4 link, "poster" mein thumbnail
export const videoTestimonials = [
  { name: "Client Name", role: "Founder, Company", video: "", poster: "" },
  { name: "Client Name", role: "CEO, Company", video: "", poster: "" },
  { name: "Client Name", role: "Marketing Lead, Company", video: "", poster: "" },
  { name: "Client Name", role: "Co-founder, Company", video: "", poster: "" },
  { name: "Client Name", role: "Owner, Company", video: "", poster: "" },
  { name: "Client Name", role: "Director, Company", video: "", poster: "" },
];

export const reviews = [
  { text: "Awesome work ethics and always kept me updated on progress. Could not have been happier with the end result. I would give them 6 stars if I could.", name: "Verified Client", from: "United States" },
  { text: "Delivered quicker than expected. They followed my brief closely and used their experience to improve on what I was looking for.", name: "Verified Client", from: "United Kingdom" },
  { text: "Easy to communicate with and quick to respond. Even after delivery they showed me how to edit the website myself.", name: "Verified Client", from: "Canada" },
  { text: "Very efficient and a great price for the website I received. Communication was great and everything was done as requested.", name: "Verified Client", from: "Australia" },
  { text: "They delivered an aesthetically pleasing website for my dealership. Patient, informative and highly recommended.", name: "Verified Client", from: "United States" },
  { text: "Wonderful service! Responses are always prompt and courteous. Super patient with this being my first website.", name: "Verified Client", from: "Germany" },
  { text: "Professional, communicative and incredibly talented. They always went above and beyond to make sure I was satisfied.", name: "Verified Client", from: "UAE" },
  { text: "Great job on the website, very responsive and quick. Made all changes as requested and did some extra work too.", name: "Verified Client", from: "United States" },
];

export const faqs = [
  { q: "How much do your services cost?", a: "Pricing depends on the scope and complexity of your project. We keep it transparent with no hidden fees, and send detailed invoices for every project." },
  { q: "Is my project and data kept confidential?", a: "Yes. Every team member signs an NDA, and we use industry-standard security practices to protect your information." },
  { q: "How do I pay?", a: "We accept Payoneer and other international payment methods, with low fees, fast transfers and support for multiple currencies." },
  { q: "How will we communicate during the project?", a: "Every client gets a dedicated project manager, so communication stays clear and you always know where your project stands." },
  { q: "How do you ensure quality?", a: "We only work with carefully screened professionals and keep our team trained on the latest industry standards and best practices." },
  { q: "Do you offer white label services for agencies?", a: "Yes. We work as a silent partner for agencies, building projects that you deliver under your own brand." },
];

export const budgets = ["Less than $1K", "$1K - $3K", "$3K - $10K", "$10K+"];

export const comparison = {
  columns: ["OctanSoft", "In-house Team", "Freelancers", "Big Agencies"],
  rows: [
    { label: "Fast delivery", values: [true, false, true, false] },
    { label: "Affordable pricing", values: [true, false, true, false] },
    { label: "Consistent quality", values: [true, true, false, true] },
    { label: "Dedicated project manager", values: [true, true, false, true] },
    { label: "Scale team up or down", values: [true, false, false, true] },
    { label: "Support after delivery", values: [true, true, false, true] },
  ],
};
