
import { getAllTracks } from '@/services/trackService';
import { Track } from '@/types/Track';
import CreateTrackForm from '@/components/forms/tracks/createTrack';
import TracksTable from '@/components/tables/tracks/tracksTable';


const Tracks = async () => {
    const tracks: Track[] = await getAllTracks();
    console.log("Nyimbo => ", tracks)
    // const handleDelete = async (id: string) => {
    //     await deleteTrack(id);
    //     setTracks((prev) => prev.filter((track) => track.id !== id));
    // };

    return (
        <div className='flex flex-col items-center justify-center w-full px-4 space-y-4'>
            <h1 className='w-11/12 text-center'>Tracks</h1>

            <CreateTrackForm />
            <TracksTable tracks={tracks} />
        </div>
    );
};

export default Tracks;
