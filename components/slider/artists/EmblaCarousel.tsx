"use client"

import React, { useEffect, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
// import Image from 'next/image'
import { useAudioStore } from '@/stores/MusicStore'
import { Track } from '@/types/Track'
import { getAllTracks } from '@/services/trackService'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options } = props
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()])
  const [tracks, setTracks] = useState<Track[]>([]);

  const { setAudio, setQueue } = useAudioStore()
  useEffect(() => {
    async function fetchData() {
      const data = await getAllTracks();
      setTracks(data);
    }

    fetchData();
  }, []);

  return (
    <section className="embla w-full">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container space-x-5 w-full">
          {
            tracks.map(track => (
              <img loading='lazy' height={560} width={560} key={track.audioURL}
                className="w-30 h-30  md:w-45 md:h-45  cursor-pointer rounded-full"
                onClick={() => {
                  setAudio(track);
                  setQueue(tracks);
                }} src={track.albumArtURL as string} alt="" />
            ))
          }
        </div>
      </div>

    </section>
  )
}

export default EmblaCarousel
