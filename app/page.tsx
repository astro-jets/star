
import ArtistsSlider from "@/components/slider/artists/Artists";
import Slider from "@/components/slider/Slider";


export default function Home() {
  return (
    <div className="w-full">
      {/* Hero section */}
      {/* <section className="text-center h-[75vh] flex flex-col items-center justify-evenly  bg-gradient-to-r from-blue-500 to-purple-500">
        <h1 className="text-4xl font-bold mb-4">Discover Your Gospel Music Haven</h1>
        <p className="text-lg mb-8">Stream, download, and connect with the best gospel music.</p>
        <button className="bg-white w-40 text-black px-4 py-2 rounded-md">Explore Now</button>
      </section> */}

      {/* Latest Releases section */}
      <section className="flex items-center justify-center w-full">
        <Slider />
      </section>

      {/* Featured Artists section */}
      <section className="mt-8 w-full">
        <h2 className="text-3xl font-bold mb-4">Featured Artists</h2>
        <div className="w-full md:h-[42vh] flex py-2 flex-col items-start overflow-hidden">
          <ArtistsSlider />
        </div>
      </section>

      <section className="mt-8 w-full">
        <h2 className="text-3xl font-bold mb-4">Trending Now</h2>
        <div className="w-full md:h-[42vh] flex py-2 flex-col items-start overflow-hidden">
          <ArtistsSlider />
        </div>
      </section>

      <section className="mt-8 w-full">
        <h2 className="text-3xl font-bold mb-4">Top 100 Gospel</h2>
        <div className="w-full md:h-[42vh] flex py-2 flex-col items-start overflow-hidden">
          <ArtistsSlider />
        </div>
      </section>

    </div>
  );
}
