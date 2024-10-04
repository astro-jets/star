"use client"

import React, { useContext } from 'react'
import { AudioContext } from '@/context/AudioContext'
import { EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options } = props
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()])

  const tracks = [
    {
      title: 'Ghetto Anthem',
      artist: "Chizmo",
      avatar: "/images/chizmo.jpg",
      audio: "/a1.mp3"
    },
    {
      title: 'Curren$y',
      artist: "Bal Habour Brunch",
      avatar: "/images/sok.jpg",
      audio: "/a2.mp3"
    },
    {
      title: 'Afana Ceez',
      artist: "kuno ayi",
      avatar: "/images/abale.jpg",
      audio: "/a3.mp3"
    },
    {
      title: 'Obhebha',
      artist: "Mercah ft Namadingo",
      avatar: "/images/mlw.jpg",
      audio: "/a4.mp3"
    },
    {
      title: 'Ghetto Anthem',
      artist: "Chizmo",
      avatar: "/images/chizmo.jpg",
      audio: "/a1.mp3"
    },
    {
      title: 'Curren$y',
      artist: "Bal Habour Brunch",
      avatar: "/images/sok.jpg",
      audio: "/a2.mp3"
    },
    {
      title: 'Afana Ceez',
      artist: "kuno ayi",
      avatar: "/images/abale.jpg",
      audio: "/a3.mp3"
    },
    {
      title: 'Obhebha',
      artist: "Mercah ft Namadingo",
      avatar: "/images/mlw.jpg",
      audio: "/a4.mp3"
    },
  ]
  const { setAudio } = useContext(AudioContext)
  const { setPlaylist } = useContext(AudioContext)

  return (
    <section className="embla w-full">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container space-x-5 w-full">
          {
            tracks.map(track => (
              <Image loading='lazy' height={550} width={550} key={track.audio} className="w-30 h-30  md:w-45 md:h-45  cursor-pointer rounded-full" onClick={() => { setAudio(track), setPlaylist(tracks) }} src={track.avatar} alt="" />
            ))
          }
        </div>
      </div>

    </section>
  )
}

export default EmblaCarousel
