import SectionTitle from '../components/section-title';
import { ChevronDownIcon } from 'lucide-react';
import { useState } from 'react';
import { motion } from "framer-motion";

export default function FaqSection() {
    const [isOpen, setIsOpen] = useState(false);
    const data = [
        {
            question: 'How does the Ai generation work?',
            answer: "We leverage state-of-the-art diffusion modeks trained on million of product images to blend your product into realistic scenes while presserving details, lighting and reflections ",
        },
        {
            question: 'Do i own the generated images?',
            answer: 'Yes you recive full commercial rights to any images and videos generated on the platform.Use them for ads,ecommerce,social meadia and more.',
        },
        {
            question: 'Can I cancel anytime?',
            answer: 'Yes, you can cancel form your dashboard. you will retain access through the end of your billing period.',
        },
        {
            question: 'What input formats do you support?',
            answer: 'We accept JPG,PNG and WEBP.Outputs are high-resolutin PNGs and MP$s optimized for social platforms.',
        },
        
    ];

    return (
        <section className='mt-32'>
            <SectionTitle title="FAQ's" description="Looking for answers to your frequently asked questions? Check out our FAQ's section below to find." />
            <div className='mx-auto mt-12 space-y-4 w-full max-w-xl'>
                {data.map((item, index) => (
                    <motion.div key={index} className='flex flex-col glass rounded-md'
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: `${index * 0.15}`, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <h3 className='flex cursor-pointer hover:bg-white/10 transition items-start justify-between gap-4 p-4 font-medium' onClick={() => setIsOpen(isOpen === index ? null : index)}>
                            {item.question}
                            <ChevronDownIcon className={`size-5 transition-all shrink-0 duration-400 ${isOpen === index ? 'rotate-180' : ''}`} />
                        </h3>
                        <p className={`px-4 text-sm/6 transition-all duration-400 overflow-hidden ${isOpen === index ? 'pt-2 pb-4 max-h-80' : 'max-h-0'}`}>{item.answer}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}