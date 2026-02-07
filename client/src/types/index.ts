import type React from "react";

export interface UploadZoneProps {
    label: string;
    file: File | null;
    onClear: () => void;
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
}

export interface User {
    id: string;
    name: string;
    email: string;
    avatar?: string;
}


export interface Project {
    id: string;
    name?: string;
    userId?: string;
    user?: User;
    productName: string;
    productDescription: string;
    aspectRatio: string;
    userPrompt?: string;
    targetLength?: number;
    generatedVideo?: string;
    generatedImage?: string;
    isGenerating: boolean;
    isPublished: boolean;
    error?: string;
    uploadedImages: string[];
    createdAt: Date|string;
    updatedAt: Date|string;
}