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
        const [isLoaded, setIsLoaded] = useState(false)

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
            <video
                ref={videoRef}
                src={videoSrc}
                className={className}
                style={{ transform: `rotate(${rotate}deg)` }}
                muted
                playsInline
                preload="auto"
                loop={false}
                onEnded={handleEnded}
                onLoadedData={() => setIsLoaded(true)}
            />
        )
    }
)

VideoAvatar.displayName = 'VideoAvatar'

export default VideoAvatar
