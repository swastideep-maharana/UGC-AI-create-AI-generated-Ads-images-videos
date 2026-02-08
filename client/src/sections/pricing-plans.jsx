import SectionTitle from "../components/section-title";
import { CheckIcon, CrownIcon, RocketIcon, ZapIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function PricingPlans() {
    const ref = useRef([]);
    const data = [
        {
            icon: RocketIcon,
            title: 'Starter',
            description: 'Try the platform at no cost',
            price: '$10',
            credits: 25,
            buttonText: 'Get Started',
            features: [
                '25 Credits',
                'Standard quality',
                'No watermark',
                'Slower generation speed',
                'Email support'
            ],
        },
        {
            icon: ZapIcon,
            title: 'Pro',
            description: 'Creators & small teams',
            price: '$29',
            credits: 80,
            mostPopular: true,
            buttonText: 'Upgrade Now',
            features: [
                '80 Credits',
                'HD quality',
                'No watermark',
                'Video generation',
                'Priority support',
            ],
        },
        {
            icon: CrownIcon,
            title: 'Ultra',
            description: 'Scale across teams and agencies',
            price: '$99',
            credits: 300,
            buttonText: 'Upgrade Now For Ultra',
            features: [
                '300 Credits',
                'FHD quality',
                'No watermark',
                'Fast generation speed',
                'Chat + Email support',
            ],
        },
    ];

    return (
        <section className="mt-12">
            <SectionTitle
                title="Our Pricing Plans"
                description="Pick a plan that fits your growth. Every 2 credits can generate 1 high-quality AI video or 2 professional ad images."
            />

            <div className='mt-8 flex flex-wrap items-center justify-center gap-6'>
                {data.map((item, index) => (
                    <motion.div key={index} className='group w-full max-w-80 glass p-6 rounded-xl hover:-translate-y-0.5'
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: `${index * 0.15}`, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                        ref={(el) => (ref.current[index] = el)}
                        onAnimationComplete={() => {
                            const card = ref.current[index];
                            if (card) {
                                card.classList.add("transition", "duration-300");
                            }
                        }}
                    >
                        <div className="flex items-center w-max ml-auto text-xs gap-2 glass rounded-full px-3 py-1">
                            <item.icon className='size-3.5' />
                            <span>{item.title}</span>
                        </div>
                        <h3 className='mt-4 text-2xl font-semibold'>
                            {item.price} <span className='text-sm font-normal'>/month</span>
                             <p className='text-green-200 mt-5'>credits {item.credits}</p>
                        </h3>
                        <p className='text-gray-200 mt-3'>{item.description}</p>
                        <button className={`mt-7 rounded-md w-full btn ${item.mostPopular ? 'bg-white text-gray-800' : 'glass'}`}>
                            {item.buttonText}
                        </button>
                        <div className='mt-6 flex flex-col'>
                            {item.features.map((feature, index) => (
                                <div key={index} className='flex items-center gap-2 py-2'>
                                    <div className='rounded-full glass border-0 p-1'>
                                        <CheckIcon className='size-3 text-white' strokeWidth={3} />
                                    </div>
                                    <p>{feature}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className='mt-12 max-w-4xl mx-auto'>
                <div className='p-8 rounded-3xl bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/20 text-center relative overflow-hidden'>
                    <div className='absolute top-0 right-0 p-4 opacity-10'>
                        <ZapIcon className='size-24 text-purple-400' />
                    </div>
                    
                    <h4 className='text-xl font-bold mb-4 flex items-center justify-center gap-2'>
                        <ZapIcon className='size-5 text-purple-400' />
                        How credits work
                    </h4>
                    
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10'>
                        <div className='bg-white/5 p-6 rounded-2xl border border-white/5 shadow-xl transition-all hover:bg-white/10'>
                            <div className='text-3xl font-extrabold text-purple-400 mb-1'>10 Credits</div>
                            <div className='text-gray-400 text-sm font-medium uppercase tracking-widest'>Generates</div>
                            <div className='mt-4 flex items-center justify-center gap-2'>
                                <span className='text-2xl font-bold text-white'>5</span>
                                <span className='text-gray-300'>High-Quality Videos</span>
                            </div>
                        </div>

                        <div className='bg-white/5 p-6 rounded-2xl border border-white/5 shadow-xl transition-all hover:bg-white/10'>
                            <div className='text-3xl font-extrabold text-blue-400 mb-1'>10 Credits</div>
                            <div className='text-gray-400 text-sm font-medium uppercase tracking-widest'>Generates</div>
                            <div className='mt-4 flex items-center justify-center gap-2'>
                                <span className='text-2xl font-bold text-white'>10</span>
                                <span className='text-gray-300'>Professional AI Ads</span>
                            </div>
                        </div>
                    </div>
                    
                    <p className='mt-8 text-sm text-gray-500 italic'>
                        * All credits are monthly and roll over for the ultra plan users.
                    </p>
                </div>
            </div>
        </section>
    );
}