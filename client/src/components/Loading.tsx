import { motion } from "framer-motion";
import { Sparkles, Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030014]">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full" />

      {/* Simplified Loader Content */}
      <div className="relative flex flex-col items-center">
        {/* Subtle Pulsing Logo */}
        <motion.div
           animate={{ 
             opacity: [0.4, 1, 0.4],
             scale: [0.98, 1, 0.98]
           }}
           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
           className="relative z-10 p-5 rounded-2xl bg-white/[0.03] border border-white/10 shadow-2xl"
        >
          <Sparkles className="size-8 text-purple-500" />
        </motion.div>

        {/* Minimal Status */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <p className="text-white font-medium tracking-tight">Creating your ad...</p>
          <div className="flex items-center gap-2 text-gray-500">
            <Loader2 className="size-3 animate-spin text-purple-500/50" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Please wait</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
