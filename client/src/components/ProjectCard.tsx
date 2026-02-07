import React, { useState } from "react"
import type { Project } from "../types"
import { useNavigate } from "react-router-dom"
import { Loader2Icon } from "lucide-react";



const ProjectCard = ({gen,setGenerations, forCommunity = false}: {gen: Project, setGenerations:React.Dispatch<React.SetStateAction<Project[]>> ,forCommunity?: boolean}) => {

    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div key={gen.id} className="mb-4 break-inside-avoid">
      <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 taranstion group">
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
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard