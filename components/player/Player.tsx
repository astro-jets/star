"use client"
import Image from "next/image";
import { AudioContext } from '@/context/AudioContext';
import { useContext, useEffect, useRef, useState } from "react";
import Slider from "react-slider";


const Player = () => {

    const [isPlaying, setIsPlaying] = useState(true);
    const [showPlayer, setsetShowPlayer] = useState(true);
    const { audio } = useContext(AudioContext);
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
        <div className="fixed bottom-0 left-0 w-full z-10">
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
                                <svg width="24" height="24">
                                    <path d="M7 6.931C7 5.865 7.853 5 8.905 5h6.19C16.147 5 17 5.865 17 6.931V19l-5-4-5 4V6.931Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </button>
                            <button type="button" className="hidden sm:block lg:hidden xl:block" aria-label="Previous">
                                <svg width="24" height="24" fill="none">
                                    <path d="m10 12 8-6v12l-8-6Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M6 6v12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </button>
                            <button type="button" aria-label="Rewind 10 seconds">
                                <svg width="24" height="24" fill="none">
                                    <path d="M6.492 16.95c2.861 2.733 7.5 2.733 10.362 0 2.861-2.734 2.861-7.166 0-9.9-2.862-2.733-7.501-2.733-10.362 0A7.096 7.096 0 0 0 5.5 8.226" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M5 5v3.111c0 .491.398.889.889.889H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </button>
                        </div>
                        <button type="button" className="bg-white text-slate-900 dark:bg-slate-100 transition-all duration-500 dark:text-slate-700 flex-none -my-2 mx-auto w-20 h-20 rounded-full ring-1 ring-slate-900/5 shadow-md flex items-center justify-center" aria-label="Pause"
                            onClick={() => { setIsPlaying(!isPlaying) }}>
                            {isPlaying ?
                                <svg width="30" height="32" fill="currentColor">
                                    <rect x="6" y="4" width="4" height="24" rx="2"></rect>
                                    <rect x="20" y="4" width="4" height="24" rx="2"></rect>
                                </svg> :
                                <p>p</p>
                            }
                        </button>
                        <div className="flex-auto flex items-center justify-evenly">
                            <button type="button" aria-label="Skip 10 seconds" className="">
                                <svg width="24" height="24" fill="none">
                                    <path d="M17.509 16.95c-2.862 2.733-7.501 2.733-10.363 0-2.861-2.734-2.861-7.166 0-9.9 2.862-2.733 7.501-2.733 10.363 0 .38.365.711.759.991 1.176" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M19 5v3.111c0 .491-.398.889-.889.889H15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </button>
                            <button type="button" className="hidden sm:block lg:hidden xl:block" aria-label="Next">
                                <svg width="24" height="24" fill="none">
                                    <path d="M14 12 6 6v12l8-6Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M18 6v12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </button>
                            <button type="button" className="rounded-lg text-xs leading-6 font-semibold px-2 ring-2 ring-inset ring-slate-500 text-slate-500  dark:text-slate-100 dark:ring-0 transition-all duration-500 dark:bg-slate-500">
                                1x
                            </button>
                        </div>
                    </div>
                </div>
                : null}
        </div>
    );
}

export default Player;