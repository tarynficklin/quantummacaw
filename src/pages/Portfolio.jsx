import { Fragment, useState } from 'react'

// Replaces js/main.js's changevideo(). The clips live in public/portfolio/mp4/; they were
// never committed to the old repo, so drop the .mp4 files in there to make them play.
const VIDEOS = [
  { thumb: 'artist.png', alt: 'Artist Alley', file: 'artist-alley.mp4' },
  { thumb: 'cooking.png', alt: 'Cooking With Deseret Book', file: 'cooking-with-db.mp4' },
  { thumb: 'fanx.png', alt: 'FanX 2016', file: 'fanx-2016.mp4' },
  { thumb: 'fashion.png', alt: 'Fashion Show', file: 'fashion-show.mp4' },
  { thumb: 'plates.png', alt: 'Giving Plates', file: 'giving-plates.mp4' },
  { thumb: 'flowers.png', alt: 'Paper Flowers', file: 'paper-flowers.mp4' },
  { thumb: 'rewards.png', alt: 'Platinum Rewards', file: 'rewards.mp4' },
  { thumb: 'showfloor.png', alt: 'Comic Con Show Floor', file: 'show-floor.mp4' },
]

export default function Portfolio() {
  const [video, setVideo] = useState('fanx-2016.mp4')
  const [autoPlay, setAutoPlay] = useState(false)

  const choose = (file) => {
    setVideo(file)
    setAutoPlay(true)
  }

  return (
    <>
      <title>Portfolio</title>
      <meta name="description" content="Check out our portfolio" />
      <section className="player">
        {/* A new key gives a fresh <video>, which loads the new source (the old load() + play()). */}
        <video id="main-video" key={video} controls autoPlay={autoPlay}>
          <source id="source" src={`/portfolio/mp4/${video}`} type="video/mp4" />
        </video>
      </section>
      <section className="video-selector">
        {/* The space after each inline thumbnail is part of the original layout. */}
        {VIDEOS.map(({ thumb, alt, file }) => (
          <Fragment key={file}>
            <img
              src={`/portfolio/img/${thumb}`}
              className="thumbnail"
              alt={alt}
              role="button"
              tabIndex={0}
              onClick={() => choose(file)}
              onKeyDown={(event) => (event.key === 'Enter' || event.key === ' ') && (event.preventDefault(), choose(file))}
            />{' '}
          </Fragment>
        ))}
      </section>
    </>
  )
}
