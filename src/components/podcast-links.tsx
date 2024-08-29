import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion, useAnimation, useAnimationFrame } from 'framer-motion'
import { Headphones, Radio, Podcast } from 'lucide-react'

interface PodcastLink {
  id: number
  title: string
  url: string
  icon: React.ReactNode
}

const podcastLinks: PodcastLink[] = [
  { 
    id: 1, 
    title: "Spotify - Jenova's Vitner", 
    url: "https://open.spotify.com/show/0jxTtqiycCBwCcXGqGawoa?si=3547f6c095d343e5",
    icon: <Headphones className="w-4 h-4 mr-2" />
  },
  { 
    id: 2, 
    title: "Apple Podcasts - Jenova's Vitner", 
    url: "https://podcasts.apple.com/jm/podcast/jenovas-vitner-en-final-fantasy-podcast/id1243030195",
    icon: <Podcast className="w-4 h-4 mr-2" />
  },
  { 
    id: 3, 
    title: "RadCrew - Final Fantasy", 
    url: "https://www.radcrew.net/category/finalfantasy",
    icon: <Radio className="w-4 h-4 mr-2" />
  },
]

export default function PodcastLinks() {
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollWidth, setScrollWidth] = useState(0)
  const scrollRef = useRef(0)
  const [key, setKey] = useState(0)

  useEffect(() => {
    if (containerRef.current) {
      setScrollWidth(containerRef.current.scrollWidth / 2)
    }
  }, [])

  const resetAnimation = useCallback(() => {
    scrollRef.current = 0
    setKey(prev => prev + 1)
  }, [])

  useAnimationFrame((t) => {
    if (isHovered || !containerRef.current) return
    scrollRef.current += 1
    if (scrollRef.current >= scrollWidth) {
      resetAnimation()
    } else {
      containerRef.current.style.transform = `translateX(${-scrollRef.current}px)`
    }
  })

  const handleItemHover = useCallback((hovering: boolean) => {
    setIsHovered(hovering)
  }, [])

  return (
    <div className="w-full h-20 overflow-hidden bg-background border rounded-md shadow-md">
      <div
        ref={containerRef}
        className="flex h-full items-center"
        key={key}
      >
        {[...podcastLinks, ...podcastLinks].map((link, index) => (
          <a
            key={`${link.id}-${index}`}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center flex-shrink-0 px-4 py-2 mx-3 text-sm text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200 rounded-md whitespace-nowrap"
            onMouseEnter={() => handleItemHover(true)}
            onMouseLeave={() => handleItemHover(false)}
          >
            {link.icon}
            <span>{link.title}</span>
          </a>
        ))}
      </div>
    </div>
  )
}