import SectionTitle from "../components/section-title";
import { Coins, ZapIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useUser, PricingTable } from "@clerk/clerk-react";

export default function PricingPlans() {
    const { user, isSignedIn } = useUser();

    const currentCredits = String(user?.publicMetadata?.credits || 0);

    return (
        <section className="mt-12">
            <div className="flex flex-col items-center mb-8">
                <SectionTitle
                    title="Our Pricing Plans"
                    description="Pick a plan that fits your growth. Manage your subscription and credits directly through our secure billing portal."
                />
                
                {isSignedIn && (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mt-6 flex items-center gap-3 bg-purple-600/10 border border-purple-500/20 px-6 py-2.5 rounded-2xl shadow-xl shadow-purple-500/5 mb-8"
                    >
                        <div className="p-1.5 bg-purple-500/20 rounded-full">
                            <Coins className="size-4 text-purple-400" />
                        </div>
                        <div className="flex flex-col items-start">
                            <span className="text-xs text-purple-300 font-bold uppercase tracking-widest">Available Balance</span>
                            <div className="flex items-baseline gap-1.5">
                                <span className="text-2xl font-black text-white">{currentCredits}</span>
                                <span className="text-xs text-gray-500 font-medium lowercase">Credits</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>

            <div className="max-w-6xl mx-auto px-4">
                <PricingTable 
                    appearance={{
                        elements: {
                            pricingTableRoot: "bg-transparent",
                            pricingTableCard: "glass border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-300",
                            pricingTableCardTitle: "text-2xl font-bold text-white",
                            pricingTableCardPrice: "text-3xl font-black text-white",
                            pricingTableCardDescription: "text-gray-400",
                            pricingTableCardButton: "bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-purple-600/20",
                            pricingTableCardFeature: "text-gray-300",
                            pricingTableCardFeatureIcon: "text-purple-400"
                        }
                    }}
                />
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