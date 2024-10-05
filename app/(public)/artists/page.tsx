import { BsMic, BsVinyl } from "react-icons/bs";
import { FaMapMarker } from "react-icons/fa";

const ArtistsPage = () => {
    return (
        <div className="relative py-10 w-full">
            <div className="absolute top-0 w-full h-full bg-center bg-cover cover-image-artists">
                <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
            </div>
            <section className="relative py-16 bg-blueGray-200">
                <div className="container mx-auto px-4">
                    <div className="relative flex flex-col min-w-0 break-words bg-[#1c212e] w-full mb-6 shadow-xl rounded-lg "> {/*-mt-64*/}
                        <div className="px-6">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                    <div className="relative">
                                        <img alt="..." src="/images/clara.jpg"
                                            className="shadow-xl w-50 h-50 object-cover rounded-full -my-20" />
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                    <div className="py-6 px-3 mt-32 sm:mt-0">
                                        <button className="bg-blue-500 active:bg-blue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                                            Follow +
                                        </button>
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                        <div className="mr-4 p-3 text-center">
                                            <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">22</span>
                                            <span className="text-sm text-blueGray-400">Followers</span>
                                        </div>
                                        <div className="mr-4 p-3 text-center">
                                            <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">10</span>
                                            <span className="text-sm text-blueGray-400">Albums</span>
                                        </div>
                                        <div className="lg:mr-4 p-3 text-center">
                                            <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">89</span>
                                            <span className="text-sm text-blueGray-400">Songs</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-12 flex flex-col space-y-4 items-center justify-center">
                                <h3 className="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">
                                    Clara Ngulube
                                </h3>
                                <div className="w-3/4 flex flex-col items-start space-y-2">
                                    <div className="flex items-center justify-center space-x-4 ">
                                        <FaMapMarker size={20} color="white" />
                                        <p>Blantyre, Malawi</p>
                                    </div>
                                    <div className="flex items-center justify-center space-x-4 ">
                                        <BsMic size={20} color="white" />
                                        <p>Gospel Artist</p>
                                    </div>
                                    <div className="flex items-center justify-center space-x-2">
                                        <BsVinyl size={20} color="white" />
                                        <p>RnB, Soul, Worship</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-9/12 px-4">
                                        <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                            An artist of considerable range, Clara the name taken in
                                            Malawi performs and records all of her own music, giving it a
                                            warm, intimate feel with a solid groove structure. An
                                            artist of considerable range.
                                        </p>
                                        {/* <a href="#pablo" className="font-normal text-blue-500">Show more</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ArtistsPage;