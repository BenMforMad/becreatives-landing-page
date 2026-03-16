import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';

export function Comparison() {
  const rows = [
    { label: "Time investment", diy: "High", freelancer: "Medium", sub: "Low", us: "Minimal" },
    { label: "Cost", diy: "Low (your time)", freelancer: "Unpredictable", sub: "$500–$2,000/mo", us: "$89 flat" },
    { label: "Quality consistency", diy: "Variable", freelancer: "Variable", sub: "High", us: "High" },
    { label: "Commitment required", diy: "None", freelancer: "Project-based", sub: "Monthly", us: "None" },
    { label: "Turnaround", diy: "Whenever", freelancer: "Whenever", sub: "24–48h", us: "48h guaranteed" },
    { label: "Revision rounds", diy: "N/A", freelancer: "Extra cost", sub: "Included", us: "Included" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-4">
            Why Not Just… ?
          </h2>
        </motion.div>

        <div className="overflow-x-auto pb-8">
          <table className="w-full min-w-[800px] text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="p-4 text-gray-500 font-medium w-1/5"></th>
                <th className="p-4 text-brand-navy font-bold text-lg w-1/5">DIY</th>
                <th className="p-4 text-brand-navy font-bold text-lg w-1/5">Hire a Freelancer</th>
                <th className="p-4 text-brand-navy font-bold text-lg w-1/5">Monthly Subscription</th>
                <th className="p-4 text-brand-accent font-black text-xl w-1/5 bg-brand-light rounded-t-2xl border-t border-x border-gray-200">beCreatives $89</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr key={idx} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                  <td className="p-4 text-gray-600 font-medium">{row.label}</td>
                  <td className="p-4 text-gray-500">{row.diy}</td>
                  <td className="p-4 text-gray-500">{row.freelancer}</td>
                  <td className="p-4 text-gray-500">{row.sub}</td>
                  <td className="p-4 text-brand-navy font-bold bg-brand-light border-x border-gray-200">
                    {row.us === "Included" || row.us === "High" || row.us === "Minimal" || row.us === "None" ? (
                      <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-emerald-500" />
                        {row.us}
                      </div>
                    ) : (
                      <span className={row.us.includes("$89") ? "text-brand-accent" : ""}>{row.us}</span>
                    )}
                  </td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="p-4 bg-brand-light rounded-b-2xl border-b border-x border-gray-200 text-center">
                  <button className="bg-brand-accent hover:bg-brand-accent-hover text-white font-bold px-6 py-2 rounded-lg transition-all shadow-md w-full">
                    Get Started
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
