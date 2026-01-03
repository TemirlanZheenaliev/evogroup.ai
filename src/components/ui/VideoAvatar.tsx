'use client'

import { useRef, useEffect, forwardRef, useImperativeHandle } from 'react'

interface VideoAvatarProps {
    videoSrc: string
    className?: string
    isPlaying?: boolean
    onEnded?: () => void
    rotate?: number // degrees to rotate the video
}

export interface VideoAvatarRef {
    play: () => void
    pause: () => void
    reset: () => void
}

const VideoAvatar = forwardRef<VideoAvatarRef, VideoAvatarProps>(
    ({ videoSrc, className = '', isPlaying = false, onEnded, rotate = 90 }, ref) => {
        const videoRef = useRef<HTMLVideoElement>(null)

        useImperativeHandle(ref, () => ({
            play: () => {
                if (videoRef.current) {
                    videoRef.current.currentTime = 0
                    videoRef.current.play().catch(err => console.error('Play failed:', err))
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
            if (!video) return

            if (isPlaying) {
                // Play video
                video.currentTime = 0
                const playPromise = video.play()

                if (playPromise !== undefined) {
                    playPromise
                        .then(() => {
                            console.log('Video playing:', videoSrc)
                        })
                        .catch(err => {
                            console.error('Autoplay failed:', err)
                        })
                }
            } else {
                // Pause and reset video
                if (!video.paused) {
                    video.pause()
                }
                video.currentTime = 0
            }
        }, [isPlaying, videoSrc])

        const handleEnded = () => {
            console.log('Video ended:', videoSrc)
            if (onEnded) {
                onEnded()
            }
        }

        const handleLoadedData = () => {
            console.log('Video loaded:', videoSrc)
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
                onLoadedData={handleLoadedData}
                onError={(e) => console.error('Video error:', e)}
                onCanPlay={() => console.log('Video can play:', videoSrc)}
            />
        )
    }
)

VideoAvatar.displayName = 'VideoAvatar'

export default VideoAvatar
