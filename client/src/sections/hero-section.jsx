import { PlayCircleIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {

    return (
            <motion.section className="flex flex-col items-center">
                <motion.div className="flex items-center gap-3 mt-12"
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    <p>Smart, Fast, Always Active.</p>
                    <button className="btn glass py-1 px-3 text-xs">
                        Launch App
                    </button>
                </motion.div>
                <motion.h1 className="text-center text-4xl/13 md:text-6xl/19 mt-4 font-semibold tracking-tight max-w-3xl"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                >
                    Create viral <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-black to-black">UGC Ads</span> in seconds.
                </motion.h1>
                <motion.p className="text-center text-gray-100 text-base/7 max-w-md mt-6"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    Upload product images and a model photo - our AI instantly produces professional lifestyle imagery and short-form videos optimized for commercials & Reels.
                </motion.p>

                <motion.div className="flex flex-col md:flex-row max-md:w-full items-center gap-4 md:gap-3 mt-6"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    <button className="btn max-md:w-full glass py-3">
                        Start generating - it's free!
                    </button>
                    <button className="btn max-md:w-full glass flex items-center justify-center gap-2 py-3">
                        <PlayCircleIcon className="size-4.5" />
                        Watch Demo
                    </button>
                </motion.div>
                 
            </motion.section>
    );
}