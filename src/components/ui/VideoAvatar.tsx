'use client'

import { useRef, useEffect, forwardRef, useImperativeHandle, useState } from 'react'

interface VideoAvatarProps {
    videoSrc: string
    className?: string
    isPlaying?: boolean
    onEnded?: () => void
    rotate?: number
}

export interface VideoAvatarRef {
    play: () => void
    pause: () => void
    reset: () => void
}

const VideoAvatar = forwardRef<VideoAvatarRef, VideoAvatarProps>(
    ({ videoSrc, className = '', isPlaying = false, onEnded, rotate = 90 }, ref) => {
        const videoRef = useRef<HTMLVideoElement>(null)
        const containerRef = useRef<HTMLDivElement>(null)
        const [isVisible, setIsVisible] = useState(false)
        const [isLoaded, setIsLoaded] = useState(false)

        // Lazy loading - only load video when visible in viewport
        useEffect(() => {
            const container = containerRef.current
            if (!container) return

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true)
                        observer.disconnect()
                    }
                },
                { rootMargin: '100px', threshold: 0.1 }
            )

            observer.observe(container)
            return () => observer.disconnect()
        }, [])

        useImperativeHandle(ref, () => ({
            play: () => {
                if (videoRef.current) {
                    videoRef.current.currentTime = 0
                    videoRef.current.play().catch(() => {})
                }
            },
            pause: () => {
                if (videoRef.current) {
                    videoRef.current.pause()
                }
            },
            reset: () => {
                if (videoRef.current) {
                    videoRef.current.currentTime = 0
                    videoRef.current.pause()
                }
            }
        }))

        useEffect(() => {
            const video = videoRef.current
            if (!video || !isLoaded) return

            if (isPlaying) {
                video.currentTime = 0
                video.play().catch(() => {})
            } else {
                if (!video.paused) {
                    video.pause()
                }
                video.currentTime = 0
            }
        }, [isPlaying, isLoaded])

        const handleEnded = () => {
            if (onEnded) {
                onEnded()
            }
        }

        return (
            <div ref={containerRef} className={className} style={{ transform: `rotate(${rotate}deg)` }}>
                {isVisible && (
                    <video
                        ref={videoRef}
                        src={videoSrc}
                        className="w-full h-full object-cover"
                        muted
                        playsInline
                        preload="metadata"
                        loop={false}
                        onEnded={handleEnded}
                        onLoadedData={() => setIsLoaded(true)}
                    />
                )}
            </div>
        )
    }
)

VideoAvatar.displayName = 'VideoAvatar'

export default VideoAvatar
