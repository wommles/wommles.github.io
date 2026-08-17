type AdventureVideoProps = {
  src: string
  title: string
}

export function AdventureVideo({ src, title }: AdventureVideoProps) {
  return (
    <div className="adventure__video">
      <video controls playsInline preload="metadata" aria-label={title}>
        <source src={src} type="video/mp4" />
        Your browser does not support embedded video.
      </video>
    </div>
  )
}
