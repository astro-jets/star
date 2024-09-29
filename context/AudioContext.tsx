"use client";

import { FC, ReactNode, createContext, useState } from "react";
import { Dispatch, SetStateAction } from "react";

export interface AudioContextType {
    audio: {
        title: string;
        artist: string;
        avatar: string;
        audio: string;
    };
    setAudio: Dispatch<
        SetStateAction<{
            artist: string;
            audio: string;
            avatar: string;
            title: string;
        }>
    >;
}

interface providerProps {
    children: ReactNode;
    initial?: { artist: string, audio: string, avatar: string, title: string }
}

export const AudioContext = createContext<AudioContextType>({
    audio: { artist: '', audio: '', avatar: '', title: '' },
    setAudio: () => { }

});

export const AudioContextProvider: FC<providerProps> = ({ children, initial = { artist: '', audio: '', avatar: '', title: '' } }) => {
    const [audio, setAudio] = useState(initial)

    return (
        <AudioContext.Provider value={{ audio, setAudio }}>
            {children}
        </AudioContext.Provider>
    );
}
