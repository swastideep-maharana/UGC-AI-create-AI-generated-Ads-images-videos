import { useState } from "react";
import UploadZone from "../pages/UploadZone";
import { ArrowRightIcon, RectangleHorizontalIcon, RectangleVerticalIcon } from "lucide-react";




const Generator = () => {

 const [ name, setName] = useState("");
 const [ productDescription, setProductDescription] = useState("");
 const [ productName, setProductName] = useState("");
 const [ aspectRatio, setAspectRatio] = useState("9:16");
  const [ productImage, setProductImage] = useState<File | null>(null);
 const [ modelImage, setModelImage] = useState<File | null>(null);
 const [ userPrompt, setUserPrompt] = useState("");
 const [ isGenerating, setIsGenerating] = useState(false);


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: "product" | "model") => {
    if (e.target.files && e.target.files[0]) {
      if (type === "product") {
        setProductImage(e.target.files[0]);
      } else {
        setModelImage(e.target.files[0]);
      }
    }
  };

  const handleGenerate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  
  return (
    <div className="min-h-screen text-white p-6 md:p-12 mt-28">
        <form onSubmit={handleGenerate} className="max-w-4xl mx-auto mb-40">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Create AI-generated Ads images & videos</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your business and start generating high-converting ads today.
          </p>
          <div className="flex gap-20 max-sm:flex-col items-start justify-between mt-10">
           <div className="flex flex-col w-full sm:max-w-60 gap-8 mt-8 mb-12">
            <UploadZone label="Product Image" file={productImage} onClear={()=>setProductImage(null)} onChange={(e)=>handleFileChange(e,"product")} />

               <UploadZone label="Model Image" file={modelImage} onClear={()=>setModelImage(null)} onChange={(e,)=>handleFileChange(e,"model")} />
           </div>
           <div className="w-full">
            <div className="mb-4 text-gray-300">
              <label htmlFor='name' className="block text-sm mb-4">Name</label>
              <input type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name your project" required className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-violet-500 focus:outline-none" />
            </div>
              <div className="mb-4 text-gray-300">
              <label htmlFor='productname' className="block text-sm mb-4">Product Name</label>
              <input type="text" id="productname" value={productName} onChange={(e)=>setProductName(e.target.value)} placeholder="Name your product" required className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-violet-500 focus:outline-none" />
            </div>
             <div className="mb-4 text-gray-300">
              <label htmlFor='productDescription' className="block text-sm mb-4">Product Description <span className="text-yellow-500">(Optional)</span></label>
              <textarea id="productDescription" value={productDescription} onChange={(e)=>setProductDescription(e.target.value)} placeholder="Enter the product description" required className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-violet-500 focus:outline-none" />
            </div>
             <div className="mb-4 text-gray-300">
              <label className="block text-sm mb-4" >Aspect Ratio</label>
              <div className="flex gap-3">
                <RectangleVerticalIcon onClick={()=>setAspectRatio('9:16')} className={`p-2.5 size-13 bg-white/6 rounded transition-all ring-2  ring-transparent cursor-pointer ${aspectRatio === '9:16' ? 'ring-violet-500' : ''}`}/>
                    <RectangleHorizontalIcon onClick={()=>setAspectRatio('16:9')} className={`p-2.5 size-13 bg-white/6 rounded transition-all ring-2  ring-transparent cursor-pointer ${aspectRatio === '16:9' ? 'ring-violet-500' : ''}`}/>
              </div>
             </div>
              <div className="mb-4 text-gray-300">
              <label htmlFor='userPrompt' className="block text-sm mb-4">User Prompt <span className="text-yellow-500">(Optional)</span></label>
              <textarea id="userPrompt" value={userPrompt} onChange={(e)=>setUserPrompt(e.target.value)} placeholder="describe how you want the narration to be." required className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-violet-500 focus:outline-none" />
            </div>
           </div>
          </div>
          <div className="flex justify-center mt-10  ">
          <button type="submit" disabled={isGenerating} className="btn glass transition-none flex items-center gap-2 mt-8">
            {isGenerating ? 'Generating...' : 'Generate'}
            <ArrowRightIcon className="size-4" />
          </button>
          </div>
        </form>
    </div>
  );
};

export default Generator;
