import { motion } from 'motion/react';
import { ShoppingCart, UploadCloud, Scissors, Send } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: <ShoppingCart className="w-8 h-8 text-white" />,
      title: "1. Purchase Your Edit",
      desc: "Pay $89 and get instant access to SPACE, our editing portal. No onboarding calls, no waiting list — just log in and go."
    },
    {
      icon: <UploadCloud className="w-8 h-8 text-white" />,
      title: "2. Upload & Brief Your Editor",
      desc: "Drop in your raw footage and fill out a short creative brief. Tell us the platform, the vibe, and any must-haves. Takes less than 5 minutes."
    },
    {
      icon: <Scissors className="w-8 h-8 text-white" />,
      title: "3. We Edit",
      desc: "Your dedicated beCreatives editor picks up the project. They'll make smart creative decisions on your behalf — platform-native, on-brand, and ready to post."
    },
    {
      icon: <Send className="w-8 h-8 text-white" />,
      title: "4. Review & Post",
      desc: "Receive your edit within 48 business hours. Request up to 2 revisions. Then post it. Done."
    }
  ];

  return (
    <section className="py-24 bg-brand-light">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-4">
            From Footage to Finished in 4 Steps
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gray-200 -z-10"></div>

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-brand-navy flex items-center justify-center mb-6 shadow-lg shadow-brand-navy/20 relative z-10">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 p-6 bg-white rounded-2xl border border-gray-100 max-w-3xl mx-auto shadow-sm"
        >
          <p className="text-brand-navy font-medium italic">
            "If you decide to continue with a subscription, your $89 is applied to your first month — no extra charge."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
