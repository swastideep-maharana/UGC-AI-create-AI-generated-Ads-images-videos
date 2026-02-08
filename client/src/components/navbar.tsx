import { MenuIcon, XIcon, Coins, Sparkles, FolderIcon, Users, CreditCard, ImageIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { Link, useNavigate } from 'react-router-dom';
import assets from '../assets/assets';
import { useUser, UserButton } from '@clerk/clerk-react';

export default function Navbar() {
    const { isSignedIn, user } = useUser();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const links = [
        { name: 'Home', href: '/' },
        { name: 'Generator', href: '/generate' },
        { name: 'Community', href: '/community' },
        { name: 'My Library', href: '/my-generations' },
        { name: 'Pricing', href: '/pricing' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <motion.nav className={`sticky top-0 z-50 flex w-full items-center justify-between px-4 py-3.5 md:px-16 lg:px-24 transition-colors ${isScrolled ? 'bg-white/15 backdrop-blur-lg' : ''}`}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
            >
                <Link to="/" onClick={()=> scrollTo(0,0)}>
                    <img src={assets.logo} alt='logo' className='h-8.5 w-auto' width={205} height={48} />
                </Link>

                <div className='hidden items-center space-x-10 md:flex'>
                    {links.map((link) => (
                        <Link onClick={()=> scrollTo(0,0)} key={link.name} to={link.href} className='transition hover:text-gray-300'>
                            {link.name}
                        </Link>
                    ))}
                    
                    {isSignedIn ? (
                        <div className="flex items-center gap-4">
                            {/* Credits Display */}
                            <Link to="/pricing" className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-1.5 rounded-full transition group">
                                <span className="text-sm font-medium text-gray-400">Credits:</span>
                                <span className="text-sm font-bold text-white">{String(user?.publicMetadata?.credits || 0)}</span>
                            </Link>

                            <UserButton 
                                appearance={{
                                    elements: {
                                        userButtonPopoverCard: 'bg-[#1a1a1a] border border-white/10',
                                        userButtonPopoverActionButton: 'hover:bg-white/5',
                                        userButtonPopoverActionButtonText: 'text-gray-300',
                                        userButtonPopoverFooter: 'hidden'
                                    }
                                }}
                            >
                                <UserButton.MenuItems>
                                    <UserButton.Action 
                                        label="Generate" 
                                        labelIcon={<Sparkles className="size-4" />} 
                                        onClick={() => navigate('/generate')} 
                                    />
                                    <UserButton.Action 
                                        label="My Library" 
                                        labelIcon={<ImageIcon className="size-4" />} 
                                        onClick={() => navigate('/my-generations')} 
                                    />
                                    <UserButton.Action 
                                        label="Community" 
                                        labelIcon={<Users className="size-4" />} 
                                        onClick={() => navigate('/community')} 
                                    />
                                    <UserButton.Action 
                                        label="Plans" 
                                        labelIcon={<CreditCard className="size-4" />} 
                                        onClick={() => navigate('/pricing')} 
                                    />
                                </UserButton.MenuItems>
                            </UserButton>
                        </div>
                    ) : (
                        <Link to="/sign-in" className='btn glass'>
                            Get Started
                        </Link>
                    )}
                </div>

                <button onClick={() => setIsOpen(true)} className='transition active:scale-90 md:hidden'>
                    <MenuIcon className='size-6.5' />
                </button>
            </motion.nav>
 
            <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-black/20 text-lg font-medium backdrop-blur-2xl transition duration-300 md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                {links.map((link) => (
                    <Link key={link.name} to={link.href} onClick={() => { setIsOpen(false); scrollTo(0,0); }}>
                        {link.name}
                    </Link>
                ))}
 
                {isSignedIn ? (
                    <div className="flex flex-col items-center gap-6">
                         {/* Mobile Credits */}
                         <Link 
                            to="/pricing" 
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-2.5 rounded-2xl"
                         >
                            <Coins className="size-5 text-yellow-500" />
                            <div className="flex flex-col items-start leading-none">
                                <span className="text-lg font-bold">{String(user?.publicMetadata?.credits || 0)}</span>
                                <span className="text-[10px] uppercase tracking-widest text-gray-500">Credits Remaining</span>
                            </div>
                         </Link>

                         <div className="flex flex-col items-center gap-2">
                             <UserButton afterSignOutUrl="/" />
                             <span className="text-gray-400 font-bold capitalize">{user.firstName}</span>
                         </div>
                    </div>
                ) : (
                    <Link to="/sign-in" className='btn glass' onClick={() => setIsOpen(false)}>
                        Get Started
                    </Link>
                )}

                <button onClick={() => setIsOpen(false)} className='rounded-md p-2 glass'>
                    <XIcon />
                </button>
            </div >
        </>
    );
}
