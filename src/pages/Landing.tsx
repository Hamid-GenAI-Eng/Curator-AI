import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ExternalLink, Sparkles, Cpu, Code2, Globe, Heart } from "lucide-react";

const Landing = () => {
  const [ideaText, setIdeaText] = useState("");
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyzeIdea = () => {
    if (!ideaText.trim()) return;
    setIsAnalyzing(true);
    setAnalysisResult(null);

    setTimeout(() => {
      setIsAnalyzing(false);
      const text = ideaText.toLowerCase();
      let matchedDomain = "custom software development";
      if (text.includes("ai") || text.includes("gpt") || text.includes("intelligence") || text.includes("model") || text.includes("bot") || text.includes("ocr")) {
        matchedDomain = "AI Pipeline Engineering & Neural Integration";
      } else if (text.includes("mobile") || text.includes("app") || text.includes("ios") || text.includes("android")) {
        matchedDomain = "Native & Multiplatform Mobile App Development";
      } else if (text.includes("web") || text.includes("site") || text.includes("platform") || text.includes("dashboard")) {
        matchedDomain = "Scalable Full-Stack Web App Architectures";
      } else if (text.includes("cloud") || text.includes("server") || text.includes("database") || text.includes("security")) {
        matchedDomain = "Secure Enterprise Cloud Infrastructure";
      } else if (text.includes("saas") || text.includes("business") || text.includes("crm") || text.includes("billing")) {
        matchedDomain = "High-Conversion SaaS Product Engineering";
      }

      setAnalysisResult(
        `That is a brilliant concept! Code Envision Technologies has direct, specialized experience in ${matchedDomain} to bring this vision to life with bleeding-edge speeds and premium, responsive user interfaces. Let's start building it!`
      );
    }, 1500);
  };
  return (
    <div className="bg-surface font-body text-on-surface min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md shadow-sm">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-8 py-4">
          <div className="text-2xl font-black text-on-surface tracking-tighter font-headline">
            Curator AI
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a className="text-primary font-bold border-b-2 border-primary pb-1 font-headline tracking-tight text-sm" href="#">
              Features
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="text-on-surface-variant hover:text-primary transition-colors font-headline font-semibold px-4 py-2 text-sm"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="bg-gradient-to-br from-primary to-primary-container text-primary-foreground px-5 py-2.5 rounded-xl font-headline font-semibold text-sm active:scale-95 transition-transform editorial-shadow"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 lg:py-28">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 space-y-7">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold font-headline tracking-tighter text-on-surface leading-[1.08]">
                The Intelligent Canvas for Your{" "}
                <span className="text-primary">Handwritten</span> Thoughts
              </h1>
              <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
                Transform messy scribbles into structured digital insights.
                Powered by Llama-4 Scout Vision and Mixtral-8x7B for unmatched semantic
                accuracy.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  to="/signup"
                  className="bg-gradient-to-br from-primary to-primary-container text-primary-foreground px-7 py-3.5 rounded-xl font-headline font-bold text-base editorial-shadow active:scale-95 transition-transform"
                >
                  Get Started for Free
                </Link>
                <button className="bg-surface-container-high text-on-surface px-7 py-3.5 rounded-xl font-headline font-bold text-base hover:bg-surface-container-highest transition-colors">
                  How it Works
                </button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden editorial-shadow border border-outline-variant/30">
                <img
                  className="w-full h-auto object-cover"
                  alt="Split screen showing handwritten notes transformed into digital insights"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHNJMomRtQcD8VpTurDSLPjAsifj1G5pLz9mQGENg0cXhTh8r_LuHe0pCd4tGPXQqAza4gCYA8FrmiJld-tHQ8RAOTgkiP9p541_dv7MsMUgFRG3VG1b_ol2rbEgFZRFyC5D5bcRxCAozXcUNBuT68IqazreAqJDnc_ZND5xtYNfJUvQWXoVvg3j12x33sJn-A21NuNuEZBlXPj79BgKnGDjDBmkVe7xd_6NuqRJYGh5fVaOd3fua1mtOwcyuK69k4o1HABv531Eg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-tertiary/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-surface-container-low py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="mb-14 text-center lg:text-left">
              <span className="text-primary font-headline font-bold tracking-widest text-xs uppercase">
                Capabilities
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold font-headline tracking-tight mt-2">
                Beyond Simple Recognition
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {/* Feature 1 */}
              <div className="bg-surface-container-lowest p-7 rounded-xl editorial-shadow flex flex-col items-start gap-5 hover:translate-y-[-2px] transition-transform">
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-primary text-2xl"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    edit_note
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold font-headline mb-2">
                    Precision OCR
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Utilizing Llama-4 Scout Vision to achieve high-fidelity text extraction
                    from any handwriting style, from cursive to block lettering.
                  </p>
                </div>
              </div>
              {/* Feature 2 */}
              <div className="bg-surface-container-lowest p-7 rounded-xl editorial-shadow flex flex-col items-start gap-5 hover:translate-y-[-2px] transition-transform">
                <div className="w-11 h-11 rounded-full bg-tertiary/10 flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-tertiary text-2xl"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    auto_awesome
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold font-headline mb-2">
                    AI Refinement
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Mixtral-8x7B intelligently fixes grammar, spelling, and adds
                    semantic structure to your raw digitized notes.
                  </p>
                </div>
              </div>
              {/* Feature 3 */}
              <div className="bg-surface-container-lowest p-7 rounded-xl editorial-shadow flex flex-col items-start gap-5 hover:translate-y-[-2px] transition-transform">
                <div className="w-11 h-11 rounded-full bg-secondary/10 flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-secondary text-2xl"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    inventory_2
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold font-headline mb-2">
                    Digital Archive
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    A permanent, searchable cloud sanctuary for your physical
                    knowledge. Find any thought in seconds with global search.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pipeline Section */}
        <section className="py-20 lg:py-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Pipeline visual */}
              <div className="order-2 lg:order-1">
                <div className="relative bg-surface-container rounded-2xl p-1">
                  <div className="bg-surface-container-lowest rounded-xl p-6 lg:p-8 space-y-5">
                    {/* Step 1 */}
                    <div className="flex items-center gap-4 bg-surface-container-low p-4 rounded-lg">
                      <span className="w-7 h-7 rounded bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs">
                        1
                      </span>
                      <span className="font-headline font-bold text-sm">
                        Image Input
                      </span>
                      <span className="material-symbols-outlined ml-auto text-outline text-xl">
                        image
                      </span>
                    </div>
                    <div className="flex items-center justify-center py-1">
                      <span className="material-symbols-outlined text-primary-container text-xl">
                        arrow_downward
                      </span>
                    </div>
                    {/* Step 2 */}
                    <div className="flex items-center gap-4 bg-primary/5 p-4 rounded-lg border border-primary/10">
                      <span className="w-7 h-7 rounded bg-primary-container text-primary-foreground flex items-center justify-center font-bold text-xs">
                        2
                      </span>
                      <span className="font-headline font-bold text-sm">
                        Llama-4 Scout Vision Processing
                      </span>
                      <div className="ml-auto flex items-center gap-1">
                        <div className="w-1 h-4 bg-primary rounded-full animate-pulse" />
                        <div className="w-1 h-6 bg-primary rounded-full" />
                        <div className="w-1 h-3 bg-primary rounded-full" />
                      </div>
                    </div>
                    <div className="flex items-center justify-center py-1">
                      <span className="material-symbols-outlined text-tertiary text-xl">
                        arrow_downward
                      </span>
                    </div>
                    {/* Step 3 */}
                    <div className="flex items-center gap-4 bg-tertiary/5 p-4 rounded-lg border border-tertiary/10">
                      <span className="w-7 h-7 rounded bg-tertiary text-primary-foreground flex items-center justify-center font-bold text-xs">
                        3
                      </span>
                      <span className="font-headline font-bold text-sm">
                        Mixtral-8x7B LLM Refinement
                      </span>
                      <span className="material-symbols-outlined ml-auto text-tertiary text-xl">
                        psychology
                      </span>
                    </div>
                    <div className="flex items-center justify-center py-1">
                      <span className="material-symbols-outlined text-emerald-600 text-xl">
                        check_circle
                      </span>
                    </div>
                    {/* Step 4 */}
                    <div className="flex items-center gap-4 bg-surface-container-highest p-4 rounded-lg">
                      <span className="w-7 h-7 rounded bg-emerald-600 text-primary-foreground flex items-center justify-center font-bold text-xs">
                        4
                      </span>
                      <span className="font-headline font-bold text-sm">
                        Structured Markdown Output
                      </span>
                      <span className="material-symbols-outlined ml-auto text-on-surface-variant text-xl">
                        description
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Text content */}
              <div className="order-1 lg:order-2 space-y-7">
                <h2 className="text-3xl lg:text-5xl font-extrabold font-headline tracking-tight text-on-surface">
                  The Intelligence Behind the Canvas
                </h2>
                <p className="text-lg text-on-surface-variant leading-relaxed">
                  Our proprietary pipeline doesn't just read words—it understands
                  context. By combining industry-leading OCR with fine-tuned Large
                  Language Models, we bridge the gap between ink and digital logic.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-xl">
                      done
                    </span>
                    <span className="font-medium text-sm">
                      Context-aware auto-formatting
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-xl">
                      done
                    </span>
                    <span className="font-medium text-sm">
                      Multi-language handwriting support
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-xl">
                      done
                    </span>
                    <span className="font-medium text-sm">
                      Privacy-focused local-first processing
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Live Demo / Archival Section */}
        <section className="max-w-5xl mx-auto px-6 md:px-8 mb-20 lg:mb-28">
          <div className="bg-surface-container-low rounded-2xl p-8 lg:p-16 relative overflow-hidden">
            <div className="relative z-10 grid lg:grid-cols-5 gap-10">
              <div className="lg:col-span-2 space-y-5">
                <span className="px-3 py-1 rounded-full bg-tertiary text-primary-foreground text-[10px] font-bold tracking-widest uppercase inline-block">
                  Live Demo
                </span>
                <h3 className="text-2xl lg:text-3xl font-extrabold font-headline tracking-tight">
                  The Archival Standard
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Experience note-taking that feels like a sun-lit studio. No
                  clutter, just your ideas refined by intelligence.
                </p>
              </div>
              <div className="lg:col-span-3">
                <div className="bg-surface-container-lowest editorial-shadow rounded-xl p-6 lg:p-8 min-h-[260px]">
                  <div className="flex justify-between items-start mb-6">
                    <div className="space-y-1">
                      <h4 className="text-lg font-bold font-headline text-on-surface">
                        Product Strategy Meeting
                      </h4>
                      <span className="text-[10px] font-medium text-outline uppercase tracking-widest font-label">
                        OCT 24, 2024
                      </span>
                    </div>
                    <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] font-label">
                      Summarizing...
                    </span>
                  </div>
                  <div className="space-y-3 text-on-surface-variant leading-relaxed text-sm">
                    <p className="text-on-surface font-semibold">
                      Key Decisions:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        Pivot toward{" "}
                        <span className="bg-primary/10 text-primary px-1 rounded">
                          editorial-first
                        </span>{" "}
                        UI for Q4.
                      </li>
                      <li>
                        Integrate Mixtral-8x7B for on-device processing.
                      </li>
                      <li>
                        Launch mobile beta for iOS and Android by December.
                      </li>
                    </ul>
                    <p className="mt-3 italic text-xs text-outline">
                      Notes transcribed from napkin sketch during coffee meeting.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-3xl -z-0" />
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 lg:py-24">
          <div className="bg-gradient-to-br from-primary to-primary-container rounded-3xl p-10 lg:p-20 text-center space-y-8 editorial-shadow">
            <h2 className="text-3xl lg:text-5xl xl:text-6xl font-extrabold font-headline tracking-tighter text-primary-foreground">
              Ready to digitize your knowledge?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto font-medium">
              Join thousands of researchers, students, and creative professionals
              who have upgraded their physical workflow.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
              <Link
                to="/signup"
                className="bg-surface-container-lowest text-primary px-8 py-4 rounded-xl font-headline font-bold text-lg hover:bg-white transition-colors active:scale-95"
              >
                Create Account
              </Link>
              <button className="bg-white/10 border border-white/20 text-primary-foreground px-8 py-4 rounded-xl font-headline font-bold text-lg hover:bg-white/20 transition-colors backdrop-blur-md">
                Contact Sales
              </button>
            </div>
          </div>
        </section>

        {/* Code Envision Technologies Promotion Showcase */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 lg:py-24 border-t border-border/40 relative overflow-hidden">
          {/* Subtle glowing lights in background */}
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Branding & Pitch */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-black tracking-widest uppercase border border-primary/20">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                Featured Builder
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold font-headline tracking-tighter text-on-surface leading-tight">
                Architected & Engineered by <br />
                <span className="bg-gradient-to-r from-primary via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Code Envision Technologies
                </span>
              </h2>
              <p className="text-on-surface-variant text-base lg:text-lg font-medium leading-relaxed">
                Envisioning Future. Coding Reality. We partner with innovators worldwide to turn bold, complex product ideas into sleek, scalable, and premium digital solutions like Curator AI.
              </p>

              {/* Grid of expertise */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-surface-container-low border border-border/50">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-on-surface">AI & ML Pipelines</h4>
                    <p className="text-[10px] text-on-surface-variant">OCR, Vision, Agents</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-surface-container-low border border-border/50">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-600">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-on-surface">Premium SaaS</h4>
                    <p className="text-[10px] text-on-surface-variant">Vibrant & Modern UIs</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-surface-container-low border border-border/50">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-600">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-on-surface">Web & Mobile Apps</h4>
                    <p className="text-[10px] text-on-surface-variant">NextJS, Vite, iOS, Android</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-surface-container-low border border-border/50">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-on-surface">Cloud Architectures</h4>
                    <p className="text-[10px] text-on-surface-variant">Serverless, Scale & Speed</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="https://www.codeenvisiontechnologies.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-on-surface text-surface hover:bg-primary transition-all text-xs font-black uppercase tracking-widest editorial-shadow"
                >
                  Envision Your Idea
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="mailto:info.codeenvision@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-surface-container-low hover:bg-surface-container-high border border-border/50 transition-all text-xs font-black uppercase tracking-widest"
                >
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </a>
              </div>
            </div>

            {/* Right: The Interactive Idea Envisioner Widget */}
            <div className="lg:col-span-5">
              <div className="bg-surface-container-lowest/80 backdrop-blur-md rounded-3xl p-8 border border-border/50 editorial-shadow space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
                
                {/* Brand Header */}
                <div className="flex items-center gap-4 border-b border-border/40 pb-5">
                  <img
                    src="/code_envision_logo.jpg"
                    alt="Code Envision Logo"
                    className="w-12 h-12 object-contain rounded-xl bg-white p-1 border border-border/30"
                  />
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-widest text-on-surface">Neural Envisioner</h3>
                    <p className="text-[10px] text-outline font-bold uppercase tracking-wider">Concept Feasibility Sandbox</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="block text-[11px] font-black text-on-surface uppercase tracking-widest">
                    Describe Your Product Idea
                  </label>
                  <textarea
                    rows={3}
                    value={ideaText}
                    onChange={(e) => setIdeaText(e.target.value)}
                    placeholder="e.g., A mobile app that uses local vision models to synthesize notes in real-time..."
                    className="w-full px-4 py-3 rounded-2xl bg-surface border border-border/60 focus:border-primary/50 outline-none text-xs font-medium resize-none transition-colors placeholder:text-outline/40 leading-relaxed"
                  />
                </div>

                <button
                  onClick={handleAnalyzeIdea}
                  disabled={isAnalyzing || !ideaText.trim()}
                  className={`w-full py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${
                    isAnalyzing
                      ? "bg-surface-container-high text-outline cursor-wait"
                      : !ideaText.trim()
                      ? "bg-surface-container-low text-outline/40 cursor-not-allowed"
                      : "bg-primary text-primary-foreground hover:bg-primary/95 active:scale-[0.98] shadow-lg shadow-primary/20"
                  }`}
                >
                  {isAnalyzing ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                      Scanning Tech Vectors...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Envision Project
                    </span>
                  )}
                </button>

                {/* Dynamic Analysis output card */}
                {analysisResult && (
                  <div className="p-4 rounded-2xl bg-primary/5 border border-primary/20 animate-fade-in space-y-4">
                    <p className="text-xs font-medium text-on-surface leading-relaxed italic">
                      "{analysisResult}"
                    </p>
                    <div className="flex justify-between items-center gap-4 pt-1 border-t border-primary/10">
                      <span className="text-[9px] font-black text-primary uppercase tracking-widest">
                        Feasibility: 100% Ready
                      </span>
                      <a
                        href="https://www.codeenvisiontechnologies.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[9px] font-black text-purple-600 hover:text-primary uppercase tracking-widest transition-colors"
                      >
                        Let's Build It
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-low w-full py-10 px-6 md:px-8 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 max-w-7xl mx-auto">
          <div className="space-y-1.5">
            <div className="text-lg font-bold text-on-surface font-headline">
              Curator AI
            </div>
            <p className="text-outline text-xs font-medium">
              © 2024 Curator AI. The Intelligent Canvas.
            </p>
            <p className="text-[10px] text-outline/70 font-semibold tracking-wider uppercase flex items-center gap-1 mt-1">
              Engineered with <Heart className="w-3 h-3 inline text-red-500 animate-pulse" /> by{" "}
              <a
                href="https://www.codeenvisiontechnologies.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-black"
              >
                Code Envision Technologies
              </a>
            </p>
          </div>
          <div className="flex gap-6">
            <a className="text-outline hover:text-primary transition-colors text-xs font-medium" href="#">
              Privacy Policy
            </a>
            <a className="text-outline hover:text-primary transition-colors text-xs font-medium" href="#">
              Terms of Service
            </a>
            <a className="text-outline hover:text-primary transition-colors text-xs font-medium" href="#">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
