'use client'
import React, { FormEvent, useContext, useEffect, useState } from 'react';
import { getAllTracks, createTrack } from '@/services/trackService';
import { Track } from '@/types/Track';
import CreateTrackForm from '@/components/forms/tracks/createTrack';
import { useAudioStore } from '@/stores/MusicStore';


const Tracks = () => {
    const [tracks, setTracks] = useState<Track[]>([]);
    const [showCreateForm, setShowCreateForm] = useState(false)
    const { setAudio } = useAudioStore();
    useEffect(() => {
        async function fetchData() {
            const data = await getAllTracks();
            setTracks(data);
        }

        fetchData();
    }, []);


    // const handleDelete = async (id: string) => {
    //     await deleteTrack(id);
    //     setTracks((prev) => prev.filter((track) => track.id !== id));
    // };

    return (
        <div className='flex flex-col items-center justify-center w-full px-4 space-y-4'>
            <h1 className='w-11/12 text-center'>Tracks</h1>
            <div className="w-11/12 items-start justify-start">
                <button onClick={() => { setShowCreateForm(!showCreateForm) }} className="w-40  py-3 px-2 rounded-2xl bg-blue-500 text-white">
                    {showCreateForm ? 'Close form' : 'Add New Song +'}
                </button>
            </div>
            {showCreateForm && <CreateTrackForm />}
            <table className="w-11/12 divide-y divide-gray-200 overflow-x-auto">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Title
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Role
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {tracks.map(track => (
                        <tr key={track._id}>
                            <td className="px-6 py-4 whitespace-nowrap" onClick={() => { setAudio(track) }}>
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10">
                                        <img className="h-10 w-10 rounded-full" src={track.albumArtURL as string} alt="" />
                                    </div>
                                    <div className="ml-4">
                                        <div className="text-sm font-medium text-gray-900">
                                            {track.title}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            {track.artist}
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">Regional Paradigm Technician</div>
                                <div className="text-sm text-gray-500">Optimization</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    Active
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                Admin
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                jane.cooper@example.com
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                                <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                                <a href="#" className="ml-2 text-red-600 hover:text-red-900">Delete</a>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
};

export default Tracks;
