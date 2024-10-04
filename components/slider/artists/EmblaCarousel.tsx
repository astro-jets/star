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
      title: 'Kumwamba',
      artist: "Kelvin Sings",
      avatar: "/images/kumwamba.jpg",
      audio: "/kumwamba.mp3"
    },
    {
      title: 'Kudziwike',
      artist: "Clara Ngulube",
      avatar: "/images/clara.jpg",
      audio: "/kudziwike.mp3"
    },
    {
      title: 'Ebenezer',
      artist: "Shammah Vocals",
      avatar: "/images/ebenezer.jpg",
      audio: "/ebenezer.mp3"
    },
    {
      title: 'Yehova',
      artist: "Ethel Kamwendo Banda",
      avatar: "/images/yehova.jpg",
      audio: "/yehova.mp3"
    },
    {
      title: 'Ana ake',
      artist: "Clara Ngulube",
      avatar: "/images/clara.jpg",
      audio: "/anaake.mp3"
    },
    {
      title: 'Aye',
      artist: "Kelvin Sings",
      avatar: "/images/aye.jpg",
      audio: "/aye.mp3"
    },
    {
      title: 'Mwana Wanu',
      artist: "Gift Damson",
      avatar: "/images/gift.jpg",
      audio: "/mwanawanu.mp3"
    },
    {
      title: 'Sizingatheke',
      artist: "Clara Ngulube",
      avatar: "/images/clara.jpg",
      audio: "/sizingatheke.mp3"
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
              <Image loading='lazy' height={560} width={560} key={track.audio}
                className="w-30 h-30  md:w-45 md:h-45  cursor-pointer rounded-full"
                onClick={() => {
                  setAudio(track);
                  setPlaylist(tracks);
                }} src={track.avatar} alt="" />
            ))
          }
        </div>
      </div>

    </section>
  )
}

export default EmblaCarousel
