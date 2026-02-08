import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Project } from "../types";
import { dummyGenerations } from "../assets/assets";
import { Loader2Icon, DownloadIcon, Share2, ArrowLeft, RefreshCcw, ImageIcon, VideoIcon, Sparkles } from "lucide-react";
import Loading from "../components/loading";

const Results = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [project, setProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState(true);

    const refreshProject = () => {
        setLoading(true);
        // Simulate checking for a new version or refreshing data
        setTimeout(() => {
            const found = dummyGenerations.find(g => g.id === id) || dummyGenerations[0];
            setProject(found as Project);
            setLoading(false);
        }, 1000);
    };

    useEffect(() => {
        refreshProject();
    }, [id]);

    if (loading) {
        return <Loading />;
    }

    if (!project) return null;

    return (
        <div className="min-h-screen text-white p-6 md:p-12 mt-20">
            <div className="max-w-6xl mx-auto">
                <header className="mb-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-semibold mb-4">Generation Results</h1>
                            <p className="text-gray-400">Review, download, and share your AI-generated creative assets.</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <button 
                                onClick={refreshProject}
                                className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition text-gray-400 hover:text-white"
                                title="Reload"
                            >
                                <RefreshCcw className={`size-5 ${loading ? 'animate-spin' : ''}`} />
                            </button>
                            <button 
                                onClick={() => navigate('/generate')}
                                className="px-6 py-2 bg-purple-600 rounded-full hover:bg-purple-700 font-medium transition shadow-lg shadow-purple-600/20"
                            >
                                New Generation
                            </button>
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
                    {/* Media Display */}
                    <div className="space-y-6">
                        <div className={`relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl ${project.aspectRatio === '9:16' ? 'aspect-[9/16] max-w-sm mx-auto' : 'aspect-video'}`}>
                            {project.generatedVideo ? (
                                <video 
                                    src={project.generatedVideo} 
                                    controls 
                                    autoPlay 
                                    loop 
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <img 
                                    src={project.generatedImage} 
                                    className="w-full h-full object-cover" 
                                    alt={project.productName} 
                                />
                            )}
                        </div>

                        <div className="flex gap-4">
                            <button 
                                onClick={() => navigator.share({ url: window.location.href, title: project.productName })}
                                className="flex-1 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 py-3 rounded-xl transition font-medium"
                            >
                                <Share2 className="size-5" />
                                Share with Friends
                            </button>
                        </div>
                    </div>

                    {/* Details section */}
                    <div className="space-y-6">
                        <div className="border-b border-white/5 pb-6">
                            <h2 className="text-3xl font-bold mb-2">{project.productName}</h2>
                            <p className="text-gray-400 leading-relaxed text-sm">{project.productDescription}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-3 transition-colors hover:bg-white/[0.05]">
                                <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                                    <ImageIcon className="size-4" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Aspect</p>
                                    <p className="text-sm font-semibold text-white">{project.aspectRatio}</p>
                                </div>
                            </div>
                            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-3 transition-colors hover:bg-white/[0.05]">
                                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                                    <Loader2Icon className="size-4" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Length</p>
                                    <p className="text-sm font-semibold text-white">{project.targetLength}s</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10">
                            <h3 className="text-[10px] font-bold mb-3 text-gray-400 uppercase tracking-widest">AI Generated Prompt</h3>
                            <p className="text-gray-200 italic text-sm leading-relaxed">
                                "{project.userPrompt}"
                            </p>
                        </div>

                        {/* Actions Section */}
                        <div className="space-y-4 pt-6 border-t border-white/5">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-xs font-bold uppercase tracking-widest text-purple-400/80">Asset Actions</h3>
                                <div className="flex -space-x-2">
                                    {project.uploadedImages.map((img, i) => (
                                        <img key={i} src={img} className="size-8 rounded-full border-2 border-black object-cover shadow-sm" alt="source" />
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-3">
                                {/* Download Compact Card */}
                                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all flex items-center justify-between group">
                                    <div>
                                        <h4 className="text-sm font-bold text-white mb-0.5">Export Assets</h4>
                                        <p className="text-[11px] text-gray-400">High-resolution originals</p>
                                    </div>
                                    <div className="flex gap-2.5">
                                        <a href={project.generatedImage} download title="Download Image" className="flex items-center gap-2 px-3 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-xs font-medium text-gray-300 transition border border-white/5">
                                            <ImageIcon className="size-3.5" />
                                            JPG
                                        </a>
                                        <a href={project.generatedVideo} download title="Download Video" className="flex items-center gap-2 px-3 py-2 bg-purple-600/20 hover:bg-purple-600/30 rounded-xl text-xs font-medium text-purple-300 transition border border-purple-500/20">
                                            <VideoIcon className="size-3.5" />
                                            MP4
                                        </a>
                                    </div>
                                </div>

                                {/* Video Magic Featured Card */}
                                <div className="p-6 rounded-2xl bg-[#0f0c1a] border border-purple-500/30 hover:border-purple-500/60 transition-all relative overflow-hidden group shadow-lg shadow-purple-500/5">
                                    {/* Glassy Background Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/5 opacity-50" />
                                    
                                    <div className="absolute -top-4 -right-4 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <Sparkles className="size-20 rotate-12 text-purple-400" />
                                    </div>
                                    
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="p-1.5 bg-purple-600 rounded-lg text-white shadow-lg shadow-purple-600/30">
                                                <Sparkles className="size-4 animate-pulse" />
                                            </div>
                                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-300">Featured Tool</span>
                                        </div>
                                        
                                        <h4 className="text-2xl font-bold mb-2 text-white">Video Magic</h4>
                                        <p className="text-sm text-gray-200 mb-6 max-w-[240px] leading-relaxed">
                                            Turn any static image into a <span className="text-purple-300 font-semibold underline decoration-purple-500/30 underline-offset-4">dynamic video</span> for social media.
                                        </p>
                                        
                                        <button 
                                            onClick={() => navigate('/generate')} 
                                            className="w-full py-3.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-sm font-bold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-purple-600/20"
                                        >
                                            Launch Magic Creator
                                        </button>
                                    </div>
                                </div>

                                <button onClick={() => navigate('/generate')} className="w-full py-2.5 flex items-center justify-center gap-2 text-gray-400 hover:text-white text-sm font-medium transition group">
                                    <RefreshCcw className="size-4 group-hover:rotate-180 transition-transform duration-500" />
                                    Regenerate Creative
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Results;