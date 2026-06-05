import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, SectionLabel } from "./Reveal";
import { UserPlus, MonitorPlay, CheckSquare, Hammer, Gift } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Free Consultation",
    desc: "Share your vision and requirements. We walk you through a no-obligation consultation to understand your space, budget and design aspirations.",
    image: "/assets/dinning.jpg",
    color: "from-gold/20 to-gold/5",
    accent: "#C9A84C",
  },
  {
    icon: MonitorPlay,
    title: "Design Presentation",
    desc: "We create detailed 3D visualizations and mood boards tailored to your space — so you can see and feel your future home before it's built.",
    image: "/assets/bedroom.jpg",
    color: "from-blue-900/20 to-blue-900/5",
    accent: "#6B8EAD",
  },
  {
    icon: CheckSquare,
    title: "Design Sign-Off",
    desc: "You review and approve the final design. We refine every detail until it's exactly what you imagined — nothing proceeds without your full confidence.",
    image: "/assets/modularkitchen.webp",
    color: "from-emerald-900/20 to-emerald-900/5",
    accent: "#5A9E7A",
  },
  {
    icon: Hammer,
    title: "Expert Installation",
    desc: "Our skilled team executes the design with premium materials, precise craftsmanship and daily progress updates — on time, every time.",
    image: "/assets/kitchen.jpg",
    color: "from-orange-900/20 to-orange-900/5",
    accent: "#C07A45",
  },
  {
    icon: Gift,
    title: "Dream Home Handover",
    desc: "Your beautiful new space is revealed. We conduct a thorough walkthrough and ensure every detail meets your highest expectations.",
    image: "/assets/livingroom.jpg",
    color: "from-purple-900/20 to-purple-900/5",
    accent: "#9B72B0",
  },
];

function AnimatedLogo({ step }: { step: number }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Outer rotating ring */}
      <motion.div
        className="absolute rounded-full border border-gold/20"
        style={{ width: "85%", height: "85%" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-gold/40"
            style={{
              top: "50%",
              left: "50%",
              transform: `rotate(${i * 90}deg) translateY(-50%) translateX(-50%)`,
              transformOrigin: "center",
              marginTop: "-4px",
              marginLeft: "-4px",
            }}
          />
        ))}
      </motion.div>

      {/* Middle pulsing ring */}
      <motion.div
        className="absolute rounded-full border border-gold/30"
        style={{ width: "65%", height: "65%" }}
        animate={{ scale: [1, 1.04, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Inner counter-rotating ring */}
      <motion.div
        className="absolute rounded-full border border-warm-white/10"
        style={{ width: "45%", height: "45%" }}
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-warm-white/30"
            style={{
              top: "50%",
              left: "50%",
              transform: `rotate(${i * 120}deg) translateY(-50%) translateX(-50%)`,
              transformOrigin: "center",
              marginTop: "-3px",
              marginLeft: "-3px",
            }}
          />
        ))}
      </motion.div>

      {/* Logo center */}
      <motion.div
        key={step}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-28 h-28 flex items-center justify-center"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold/20 to-charcoal/60 backdrop-blur-sm" />
        <img
          src="/assets/logo.png"
          alt="Art Interiorz"
          className="relative z-10 w-20 h-20 object-contain"
          style={{ filter: "brightness(0) invert(1)" }}
        />
      </motion.div>

      {/* Step number overlay */}
      <motion.div
        key={`step-${step}`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center"
      >
        <div className="text-[10px] tracking-[0.3em] uppercase text-gold/70">
          Step {String(step + 1).padStart(2, "0")} of 05
        </div>
        <div className="mt-1 h-px w-16 bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto" />
      </motion.div>

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: `radial-gradient(circle at center, ${steps[step].accent}20 0%, transparent 70%)`,
        }}
      />
    </div>
  );
}

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="py-24 lg:py-36 bg-charcoal overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Reveal>
            <SectionLabel>
              <span className="mx-auto text-warm-white/50">Our Process</span>
            </SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.07] text-warm-white">
              How It{" "}
              <em className="italic" style={{ color: "var(--gold-soft)" }}>
                Works
              </em>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 text-warm-white/60 max-w-lg mx-auto text-[15px] leading-relaxed">
              From first conversation to final reveal — a seamless five-step journey to your dream space.
            </p>
          </Reveal>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — step list */}
          <div className="space-y-2">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.07}>
                <motion.button
                  onClick={() => setActiveStep(i)}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className={`w-full text-left group flex items-start gap-5 p-5 rounded-xl transition-all duration-300 ${
                    activeStep === i
                      ? "bg-warm-white/10 border border-gold/30"
                      : "border border-transparent hover:bg-warm-white/5"
                  }`}
                >
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 ${
                      activeStep === i
                        ? "border-gold bg-gold/15"
                        : "bg-warm-white/5 border-warm-white/15 group-hover:border-gold/40"
                    }`}
                  >
                    <step.icon
                      size={20}
                      className={`transition-colors duration-300 ${
                        activeStep === i ? "text-gold" : "text-warm-white/50 group-hover:text-gold/70"
                      }`}
                      strokeWidth={1.4}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-[10px] tracking-[0.3em] uppercase text-warm-white/30">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3
                        className={`font-display text-lg transition-colors ${
                          activeStep === i ? "text-gold" : "text-warm-white group-hover:text-gold/80"
                        }`}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <p
                      className={`text-[13px] leading-relaxed transition-colors ${
                        activeStep === i ? "text-warm-white/80" : "text-warm-white/40"
                      }`}
                    >
                      {step.desc}
                    </p>
                  </div>
                  <motion.div
                    animate={{ x: activeStep === i ? 4 : 0, opacity: activeStep === i ? 1 : 0.2 }}
                    className="flex-shrink-0 mt-3 text-gold text-lg"
                  >
                    →
                  </motion.div>
                </motion.button>
              </Reveal>
            ))}
          </div>

          {/* Right — animated logo + step image */}
          <Reveal delay={0.3} className="sticky top-28">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Background step image */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`img-${activeStep}`}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 rounded-2xl overflow-hidden"
                >
                  <img
                    src={steps[activeStep].image}
                    alt={steps[activeStep].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-charcoal/75" />
                </motion.div>
              </AnimatePresence>

              {/* Animated logo overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <AnimatedLogo step={activeStep} />
              </div>

              {/* Step title card at bottom */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`title-${activeStep}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="absolute top-4 left-4 right-4 flex items-center gap-3 bg-charcoal/60 backdrop-blur-sm border border-warm-white/10 px-4 py-3 rounded-xl"
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${steps[activeStep].accent}30`, border: `1px solid ${steps[activeStep].accent}50` }}
                  >
                    {(() => {
                      const Icon = steps[activeStep].icon;
                      return <Icon size={15} style={{ color: steps[activeStep].accent }} strokeWidth={1.5} />;
                    })()}
                  </div>
                  <div>
                    <div className="text-[9px] tracking-[0.25em] uppercase text-warm-white/40">
                      Step {String(activeStep + 1).padStart(2, "0")}
                    </div>
                    <div className="text-warm-white font-display text-sm">{steps[activeStep].title}</div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>

        {/* CTA bar */}
        <Reveal delay={0.6}>
          <div className="mt-16 pt-12 border-t border-warm-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-warm-white/60 text-[15px] max-w-sm text-center sm:text-left">
              Ready to transform your space? Let's start with a free consultation.
            </p>
            <a
              href="https://wa.me/919545002017?text=Hello%2C%20I%20want%20to%20start%20my%20interior%20design%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gold text-warm-white px-8 py-3.5 text-[11px] font-bold tracking-[0.25em] uppercase hover:bg-warm-white hover:text-charcoal transition-colors duration-300 shrink-0"
            >
              Start Your Project
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
