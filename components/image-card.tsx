"use client";

import React from "react"

import { useState } from "react";
import Image from "next/image";
import { Heart, Eye } from "lucide-react";

interface ImageCardProps {
  src: string;
  alt: string;
  title: string;
  category: string;
  author: string;
  likes: number;
  views: number;
  aspectRatio?: "portrait" | "landscape" | "square";
}

export function ImageCard({
  src,
  alt,
  title,
  category,
  author,
  likes: initialLikes,
  views,
  aspectRatio = "portrait",
}: ImageCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);
  const [isHovered, setIsHovered] = useState(false);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const aspectClasses = {
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]",
    square: "aspect-square",
  };

  return (
    <article
      className="group relative overflow-hidden rounded-lg cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative w-full ${aspectClasses[aspectRatio]}`}>
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          className={`object-cover transition-transform duration-700 ease-out ${
            isHovered ? "scale-105" : "scale-100"
          }`}
        />

        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Content */}
        <div
          className={`absolute inset-0 p-5 flex flex-col justify-end transition-all duration-500 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="text-xs uppercase tracking-widest text-primary mb-2">
            {category}
          </span>
          <h3 className="font-serif text-xl text-foreground mb-1 line-clamp-2">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">by {author}</p>

          {/* Stats */}
          <div className="flex items-center gap-4 mt-4">
            <button
              onClick={handleLike}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              aria-label={isLiked ? "Unlike" : "Like"}
            >
              <Heart
                className={`w-4 h-4 transition-all ${
                  isLiked ? "fill-primary text-primary scale-110" : ""
                }`}
              />
              <span>{likes.toLocaleString()}</span>
            </button>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Eye className="w-4 h-4" />
              <span>{views.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
