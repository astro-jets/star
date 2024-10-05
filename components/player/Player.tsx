"use client"
import Image from "next/image";
import { useAudio } from '@/context/AudioContext';
import { useEffect, useRef, useState } from "react";
import Slider from "react-slider";
import { BsChevronDoubleDown, BsChevronDoubleUp, BsDownload, BsPlay } from "react-icons/bs";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";


const Player = () => {

    const [isPlaying, setIsPlaying] = useState(true);
    const [showPlayer, setsetShowPlayer] = useState(true);
    const { audio, nextTrack, prevTrack } = useAudio();
    const audioElement = useRef<HTMLAudioElement>(null);
    // Track audio progress
    const [audioProgress, setAudioProgress] = useState(0);

    useEffect(() => {
        const audio = document.getElementById('mainAudio') as HTMLAudioElement;

        if (audio) {
            // Define the event handler for the 'timeupdate' event
            const handleTimeUpdate = () => {
                const progress = (audio.currentTime / audio.duration) * 100;
                setAudioProgress(progress);
            };

            audio.addEventListener('ended', nextTrack);

            // Add the 'ended' and 'timeupdate' event listeners
            audio.addEventListener('timeupdate', handleTimeUpdate);

            // Watch for changes in isPlaying and play/pause the audio accordingly
            if (isPlaying) {
                audio.play();
            } else {
                audio.pause();
            }

            // Cleanup function to remove the 'ended' and 'timeupdate' event listeners
            return () => {
                // audio.removeEventListener('ended', handleAudioEnded);
                audio.removeEventListener('timeupdate', handleTimeUpdate);
            };
        }
    }, [isPlaying, audio]);

    const handleSeek = (value: number) => {
        if (audioElement.current) {
            const newTime = (value * audioElement.current.duration) / 100;
            audioElement.current.currentTime = newTime;
            setAudioProgress(value);
        }
    };

    return (
        <div className="fixed mx-[2%] bottom-2 left-0 w-[98%] z-10">
            {audio.artist ?
                <div className="h-full relative z-10">
                    <div
                        className="bg-white border-slate-100 transition-all duration-500 dark:bg-slate-800 dark:border-slate-500 border-b rounded-t-xl p-4 pb-6 sm:p-10 sm:pb-8 lg:p-6 xl:p-10 xl:pb-8 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8">
                        {showPlayer &&
                            <>
                                <div className="flex items-center space-x-4">
                                    <Image src={audio.avatar} loading="lazy" decoding="async" alt="" className="flex-none rounded-lg bg-slate-100" width="88" height="88" />
                                    <div className="min-w-0 flex-auto space-y-1 font-semibold">
                                        <p className="text-cyan-500 transition-all duration-500 dark:text-cyan-400 text-sm leading-6">
                                            {audio.artist}
                                        </p>
                                        <p className="text-slate-900 transition-all duration-500 dark:text-slate-50 text-lg">
                                            {audio.title}
                                        </p>
                                    </div>
                                </div>
                                <Slider
                                    min={0}
                                    max={100}
                                    value={audioProgress}
                                    onChange={handleSeek}
                                    className="custom-slider" // You can add your custom class for styling
                                />
                            </>
                        }
                        <audio src={audio.audio} id="mainAudio" ref={audioElement} autoPlay />
                    </div>
                    <div className="bg-slate-50 text-slate-500 transition-all duration-500 dark:bg-slate-600 dark:text-slate-200 rounded-b-xl flex items-center">
                        <div className="flex-auto flex items-center justify-evenly">
                            <button type="button" aria-label="Add to favorites"
                                onClick={() => { setsetShowPlayer(!showPlayer) }}>
                                {showPlayer ?
                                    <BsChevronDoubleDown color="white" size={20} /> :
                                    <BsChevronDoubleUp color="white" size={20} />
                                }
                            </button>
                            <button type="button" onClick={() => { prevTrack() }}>
                                <BiSkipPrevious size={40} color="white" />
                            </button>
                        </div>
                        <button type="button" className="bg-white text-slate-900 dark:bg-slate-100 transition-all duration-500 dark:text-slate-700 flex-none -my-2 mx-auto w-20 h-20 rounded-full ring-1 ring-slate-900/5 shadow-md flex items-center justify-center" aria-label="Pause"
                            onClick={() => { setIsPlaying(!isPlaying) }}>
                            {isPlaying ?
                                <svg width="30" height="32" fill="currentColor">
                                    <rect x="6" y="4" width="4" height="24" rx="2"></rect>
                                    <rect x="20" y="4" width="4" height="24" rx="2"></rect>
                                </svg> :
                                <p><BsPlay color="#03031a" size={35} /></p>
                            }
                        </button>
                        <div className="flex-auto flex items-center justify-evenly">
                            <button type="button" onClick={() => { nextTrack() }}>
                                <BiSkipNext size={40} color="white" />
                            </button>
                            <a download target="_blank" href={audio.audio} className=" text-xs leading-6 font-semibold p-2 rounded-full  ring-inset ring-slate-500 text-slate-800  dark:text-slate-100 dark:ring-0 transition-all duration-500 dark:bg-slate-500">
                                <BsDownload color="white" size={20} />
                            </a>
                        </div>
                    </div>
                </div>
                : null}
        </div>
    );
}

export default Player;