import React, { useState } from "react"
import type { Project } from "../types"
import { useNavigate } from "react-router-dom"
import { DownloadIcon, EllipsisIcon, Loader2Icon, Share2, ShareIcon, Trash2Icon } from "lucide-react";



const ProjectCard = ({gen,setGenerations, forCommunity = false}: {gen: Project, setGenerations:React.Dispatch<React.SetStateAction<Project[]>> ,forCommunity?: boolean}) => {

    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleDelete = async(id: string)=>{
        const confirm = window.confirm('Are you sure you want to delete this generation?');
        if(!confirm) return;
        setGenerations(prev => prev.filter(g => g.id !== id));
    }

    const handlePublish = async(id: string)=>{
        const confirm = window.confirm('Are you sure you want to publish this generation?');
        if(!confirm) return;
        setGenerations(prev => prev.filter(g => g.id !== id));
    }

    const togglePublish = async(id: string)=>{
        const confirm = window.confirm('Are you sure you want to publish this generation?');
        if(!confirm) return;
        setGenerations(prev => prev.filter(g => g.id !== id));
    }

  return (
    <div key={gen.id} className="mb-4 break-inside-avoid">
      <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition group">
      {/* priview */}
            <div className={`${gen?.aspectRatio === '9:16' ? 'aspect-9/16' : 'aspect-video'} relative overflow-hidden`}>
                {gen.generatedImage && <img src={gen.generatedImage} alt={gen.productName} className={`absolute inset-0 w-full h-full object-cover transition duration-500 ${gen.generatedVideo ? 'group-hover:opacity-0' : 'group-hover:scale-105'}`} />}
                {gen.generatedVideo && (
                    <video src={gen.generatedVideo} muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500" onMouseEnter={(e)=>e.currentTarget.play()} onMouseLeave={(e)=>e.currentTarget.pause()} />
                )}
                {(!gen.generatedImage && !gen.generatedVideo) && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Loader2Icon className="size-12 animate-spin" />
                    </div>
                )}
                {/* statusbadges */}
                <div className="absolute top-3 right-3 flex gap-2">
                    {gen.isPublished && (
                        <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">Published</span>
                    )}
                    {gen.isGenerating && (
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">Generating</span>
                    )}
                    {gen.error && (
                        <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded-full">Error</span>
                    )}
                </div>

                    {/* actions menu  for my generation only */}
                    {!forCommunity && (
                        <div 
                            onMouseEnter={() => setMenuOpen(true)}
                            onMouseLeave={() => setMenuOpen(false)}
                            className="absolute top-3 right-3 flex items-center gap-2 z-20"
                        >
                            <div className="relative group/menu">
                                <button className="bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full p-1.5 transition-colors">
                                    <EllipsisIcon className="size-5 text-white"/>
                                </button>
                                
                                <ul className={`absolute right-0 top-full mt-2 w-40 bg-black/80 backdrop-blur-md text-white border border-white/10 rounded-lg shadow-xl py-1 z-30 transition-all duration-200 ${menuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-1'}`}>
                                    {gen.generatedImage && (
                                        <li>
                                            <a href={gen.generatedImage} target="_blank" rel="noopener noreferrer" download className="flex gap-2 items-center px-4 py-2 hover:bg-white/10 cursor-pointer transition-colors">
                                                <DownloadIcon className="size-4"/> Download Image
                                            </a>
                                        </li>
                                    )}
                                    {gen.generatedVideo && (
                                        <li>
                                            <a href={gen.generatedVideo} target="_blank" rel="noopener noreferrer" download className="flex gap-2 items-center px-4 py-2 hover:bg-white/10 cursor-pointer transition-colors">
                                                <DownloadIcon className="size-4"/> Download Video
                                            </a>
                                        </li>
                                    )}
                                    {(gen.generatedVideo || gen.generatedImage) && <button onClick={()=> navigator.share({url:gen.generatedVideo || gen.generatedImage, title: gen.productName, text: gen.productDescription})} className="w-full flex gap-2 items-center px-4 py-2 hover:bg-white/10 cursor-pointer transition-colors"><Share2 className="size-4"/> Share</button>}

                                    <button onClick={()=>{
                                        handleDelete(gen.id)
                                    }} className="w-full flex gap-2 items-center px-4 py-2 hover:bg-white/10 cursor-pointer transition-colors">
                                        <Trash2Icon className="size-4"/> Delete
                                    </button>

                                    <button onClick={()=>{
                                        handlePublish(gen.id)
                                    }} className="w-full flex gap-2 items-center px-4 py-2 hover:bg-white/10 cursor-pointer transition-colors">
                                        <Share2 className="size-4"/> Publish
                                    </button>
                                </ul>
                            </div>
                        </div>
                    )}

                    {/* sourceimages */}
                    <div className="absolute right-3 bottom-3">
                        <img src={gen.uploadedImages[0]} alt="product" className="w-16 h-16 object-cover rounded-full animate-float"/>
                         <img src={gen.uploadedImages[1]} alt="model" className="w-16 h-16 object-cover rounded-full animate-float -ml-8 " style={{animationDelay: '0.2s'}}/>
                    </div>

            </div>
        {/* details */}


        <div className="p-4">
            <div className="flex items-start justify-between gap-4 ">
                <div className="flex-1">
                    <h3 className="font-semibold text-lg">{gen.productName}</h3>
                    <p className="text-gray-400 text-sm line-clamp-2">{gen.productDescription}</p>
                    <p className="text-gray-400 text-xs mt-2">{new Date(gen.createdAt).toLocaleString()}</p>
                    
                </div>
                <div className="text-right">
                    <div className="mt-2 flex flex-col items-end gap-2">
                        <span className="text-xs px-2 py-1 bg-white/5 rounded-full">Aspect:{gen.aspectRatio}</span>
                    </div>
                </div>

            </div>
            {/* PRODUCET DISCRIPTION */}
            <div className="mt-4">
                <h4 className="font-semibold text-sm">Product Description</h4>
                <p className="text-gray-400 text-xs mt-2">{gen.productDescription}</p>
            </div>

            {/* userprompt */}
            <div className="mt-4">
                <h4 className="font-semibold text-sm">User Prompt</h4>
                <p className="text-gray-400 text-xs mt-2">{gen.userPrompt}</p>
                 {/* buttons */}
                {!forCommunity && (
                    <div className="mt-4 flex gap-2">
                        <button onClick={()=>{navigate(`/results/${gen.id}`); scrollTo(0,0)}} className="px-4 py-2 bg-purple-600 rounded-full hover:bg-purple-700 transition">View Details</button>
                        <button onClick={()=>{togglePublish(gen.id)}} className="px-4 py-2 bg-purple-600 rounded-full hover:bg-purple-700 transition">
                            {gen.isPublished ? 'Unpublish' : 'Publish'}
                        </button>
                    </div>
                )}
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard