import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileDown, ExternalLink, Brain, Cloud, Boxes, Sparkles } from "lucide-react";
import { Button } from "./button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";
import { Badge } from "./badge";

// ===
// Portfolio Template — single-file React component
// Tech: TailwindCSS, shadcn/ui, framer-motion, lucide-react
// Tagline provided by user. Includes space for 4 projects we'll fill in later.
// ===

export default function Portfolio() {
  const [year] = useState(new Date().getFullYear());

  const projects = [
    {
      id: "p1",
      title: "Realtime Recommendations @ Cloud Scale",
      blurb:
        "Event-driven ranking service with streaming features, feature store, and low-latency inference.",
      tags: ["ML Engineering", "Streaming", "Feature Store", "Kubernetes"],
      status: "Coming soon",
      link: "#",
      img: "https://images.unsplash.com/photo-1534759846116-57968a6b0a5b?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "p2",
      title: "Fraud Detection on Imbalanced Data",
      blurb:
        "End-to-end pipeline: data ingestion, training, thresholding, cost-aware metrics, and monitoring.",
      tags: ["Imbalanced Learning", "MLOps", "Monitoring"],
      status: "Coming soon",
      link: "#",
      img: "https://images.unsplash.com/photo-1551808525-51a94da548ce?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "p3",
      title: "Domain LLM: RAG + Fine-tuning",
      blurb:
        "Retrieval-augmented generation with evaluation harness, cost/latency budgets, and guardrails.",
      tags: ["LLM", "RAG", "Evaluation", "Guardrails"],
      status: "Coming soon",
      link: "#",
      img: "https://images.unsplash.com/photo-1551281044-8c5f0a9a1f0a?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "p4",
      title: "Edge Vision: On-device CV Pipeline",
      blurb:
        "Quantized models deployed to edge; telemetry, drift alerts, and OTA updates.",
      tags: ["Computer Vision", "Edge", "Quantization"],
      status: "Coming soon",
      link: "#",
      img: "https://images.unsplash.com/photo-1544198365-3c4b96885f2a?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/50 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 grid place-items-center rounded-xl bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/20">
              <Sparkles className="h-5 w-5" />
            </div>
            <span className="font-semibold tracking-tight">Shreyas Makde</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#work" className="hover:text-emerald-300 transition">Work</a>
            <a href="#skills" className="hover:text-emerald-300 transition">Skills</a>
            <a href="#about" className="hover:text-emerald-300 transition">About</a>
            <a href="#contact" className="hover:text-emerald-300 transition">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="secondary" className="bg-white/10 hover:bg-white/20 border-white/10" asChild>
              <a href="#contact"><Mail className="mr-2 h-4 w-4"/>Get in touch</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="w-full px-6 pt-16 pb-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge className="mb-4 bg-emerald-500/20 text-emerald-300 border-emerald-400/30">Open to Staff/Senior ML & Platform</Badge>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              Engineering data into <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-300">production-ready intelligence</span>
              <br />
              <span className="text-slate-300 text-2xl md:text-3xl">— combining software craftsmanship with machine learning.</span>
            </h1>

            <p className="mt-6 text-slate-300/90 max-w-xl">
              I build intelligent, cloud-native systems end to end: data pipelines, training, deployment, and monitoring.
              Strong in .NET/C#, Python, AWS, Kafka, Kubernetes, and modern MLOps.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button className="bg-emerald-500 hover:bg-emerald-400" asChild>
                <a href="#work"><Brain className="mr-2 h-4 w-4"/>See my work</a>
              </Button>
              <Button variant="secondary" className="bg-white/10 hover:bg-white/20 border-white/10" asChild>
                <a href="#skills"><Boxes className="mr-2 h-4 w-4"/>Skills</a>
              </Button>
              <Button variant="secondary" className="bg-white/10 hover:bg-white/20 border-white/10" asChild>
                <a href="/Shreyas_Makde_Resume.pdf" download><FileDown className="mr-2 h-4 w-4"/>Resume</a>
              </Button>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <a href="https://github.com/" className="inline-flex items-center gap-2 hover:text-emerald-300" aria-label="GitHub">
                <Github className="h-5 w-5"/>
                <span className="text-sm">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/" className="inline-flex items-center gap-2 hover:text-emerald-300" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5"/>
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-3xl blur"></div>
              <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-6">
                <div className="grid grid-cols-3 gap-3">
                  <Stat icon={<Brain className="h-5 w-5"/>} label="ML/AI" value="LLMs, CV, Recs" />
                  <Stat icon={<Cloud className="h-5 w-5"/>} label="Cloud" value="AWS, k8s, CI/CD" />
                  <Stat icon={<Boxes className="h-5 w-5"/>} label="Data" value="Kafka, SQL, Feature Stores" />
                </div>
                <div className="mt-5 text-xs text-slate-400">
                  Built with performance and reliability in mind — latency budgets, cost control, and observability baked in.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work / Projects */}
      <section id="work" className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Selected Projects</h2>
            <p className="text-slate-400">Four flagship builds — placeholders now, we’ll fill these in together.</p>
          </div>
          <a href="#contact" className="text-sm text-emerald-300 hover:underline">Want one tailored to your stack?</a>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p) => (
            <Card key={p.id} className="overflow-hidden bg-white/5 border-white/10 hover:border-emerald-300/30 transition">
              <div className="aspect-video w-full overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover object-center"/>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{p.title}</span>
                  <Badge className="bg-amber-500/20 text-amber-200 border-amber-400/30">{p.status}</Badge>
                </CardTitle>
                <CardDescription className="text-slate-300/80">
                  {p.blurb}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Badge key={t} variant="secondary" className="bg-white/10 border-white/10 text-slate-200">{t}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="justify-between">
                <div className="text-xs text-slate-400">Repo, demo, and write-up will appear here.</div>
                <Button variant="secondary" className="bg-white/10 hover:bg-white/20 border-white/10" asChild>
                  <a href={p.link} aria-disabled>
                    <ExternalLink className="mr-2 h-4 w-4"/>Details
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Skills Snapshot</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <SkillCard title="ML & Data" items={["LLMs (RAG, finetuning)", "Recsys", "Imbalanced learning", "CV", "Feature Stores", "Experimentation"]} />
          <SkillCard title="Software & Cloud" items={[".NET/C#, Python", "AWS (ECS, Lambda, S3, SQS)", "Docker, Kubernetes", "gRPC/REST", "Kafka, Redis", "CI/CD, IaC"]} />
          <SkillCard title="MLOps & Ops" items={["Model registry", "Observability (OpenTelemetry)", "Data/Concept Drift", "Latency & Cost Budgets", "A/B & Shadow deploys", "Governance"]} />
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-3xl blur"></div>
              <img
                src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1200&auto=format&fit=crop"
                alt="Workstation"
                className="relative rounded-3xl border border-white/10"
              />
            </div>
          </div>
          <div className="md:col-span-3">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">About</h2>
            <p className="text-slate-300/90 leading-relaxed">
              Senior Software Engineer evolving into Staff-level ML/Platform roles. I ship systems end to end: from data
              ingestion to production inference, with observability and reliability as first-class citizens. I enjoy
              solving hard engineering problems that tie directly to business outcomes.
            </p>
            <ul className="mt-4 space-y-2 text-slate-300/90 list-disc list-inside">
              <li>10+ years distributed systems, microservices, and event-driven architectures.</li>
              <li>Production experience with AWS, Kubernetes, Kafka, SQL Server, Redis.</li>
              <li>Hands-on with LLM apps, recsys, fraud detection, and computer vision.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-12">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-semibold">Let’s build something</h2>
          <p className="mt-2 text-slate-300/90 max-w-2xl">
            Interested in my work or want to collaborate? Drop a note and I’ll get back soon. You can also reach me on
            LinkedIn.
          </p>

          <form className="mt-6 grid md:grid-cols-3 gap-4" onSubmit={(e) => e.preventDefault()}>
            <input className="md:col-span-1 rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 outline-none focus:border-emerald-300/40" placeholder="Your name" />
            <input className="md:col-span-1 rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 outline-none focus:border-emerald-300/40" placeholder="Email" type="email" />
            <input className="md:col-span-1 rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 outline-none focus:border-emerald-300/40" placeholder="Company (optional)" />
            <textarea className="md:col-span-3 rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 h-28 outline-none focus:border-emerald-300/40" placeholder="Message" />
            <div className="md:col-span-3">
              <Button className="bg-emerald-500 hover:bg-emerald-400"><Mail className="mr-2 h-4 w-4"/>Send</Button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <div>© {year} Shreyas Makde — All rights reserved.</div>
          <div className="flex items-center gap-5">
            <a href="mailto:shreyas@example.com" className="hover:text-emerald-300 inline-flex items-center gap-1"><Mail className="h-4 w-4"/>shreyas@example.com</a>
            <a href="https://github.com/" className="hover:text-emerald-300 inline-flex items-center gap-1"><Github className="h-4 w-4"/>GitHub</a>
            <a href="https://www.linkedin.com/" className="hover:text-emerald-300 inline-flex items-center gap-1"><Linkedin className="h-4 w-4"/>LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ——— Helpers ———
function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 p-4 bg-white/5">
      <div className="flex items-center gap-2 text-slate-200">
        <div className="h-9 w-9 grid place-items-center rounded-xl bg-gradient-to-br from-emerald-400/30 to-cyan-400/30">
          {icon}
        </div>
        <div>
          <div className="text-xs uppercase tracking-wide text-slate-400">{label}</div>
          <div className="text-sm font-medium">{value}</div>
        </div>
      </div>
    </div>
  );
}

function SkillCard({ title, items }: { title: string; items: string[] }) {
  return (
    <Card className="bg-white/5 border-white/10">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-slate-300/80">What I use in production</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 list-disc list-inside text-slate-200">
          {items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
