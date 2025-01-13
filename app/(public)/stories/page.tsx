import Slider from "@/components/slider/Slider";

const BlogsPage = () => {
    return (
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 elative">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">

                <div className="sm:col-span-5">
                    <Slider />
                </div>

                <div className="sm:col-span-7 grid grid-cols-1 lg:grid-cols-3 gap-5">
                    <div className="">
                        <a href="#">
                            <div className="h-40 bg-cover text-center overflow-hidden"
                                style={{ minHeight: "300px", backgroundImage: "url('/images/aye.jpg')" }}
                                title="Woman holding a mug">
                            </div>
                        </a>
                        <a href="#"
                            className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out">Trump
                            Steps Back Into Coronavirus Spotlight</a>
                    </div>
                    <div className="">
                        <a href="#">
                            <div className="h-40 bg-cover text-center overflow-hidden"
                                style={{ minHeight: "300px", backgroundImage: "url('/images/aye.jpg')" }}
                                title="Woman holding a mug">
                            </div>
                        </a>
                        <a href="#"
                            className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out">How
                            Trump's Mistakes Became Biden's Big Breaks</a>
                    </div>
                    <div className="">
                        <a href="#">
                            <div className="h-40 bg-cover text-center overflow-hidden"
                                style={{ minHeight: "300px", backgroundImage: "url('/images/aye.jpg')" }}
                                title="Woman holding a mug">
                            </div>
                        </a>
                        <a href="#"
                            className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out">Survey:
                            Many Americans 'Dissatisfied' With U.S.</a>
                    </div>
                    <div className="">
                        <a href="#">
                            <div className="h-40 bg-cover text-center overflow-hidden"
                                style={{ minHeight: "300px", backgroundImage: "url('/images/aye.jpg')" }}
                                title="Woman holding a mug">
                            </div>
                        </a>
                        <a href="#"
                            className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out">How
                            Trump's Mistakes Became Biden's Big Breaks</a>
                    </div>
                    <div className="">
                        <a href="#">
                            <div className="h-40 bg-cover text-center overflow-hidden"
                                style={{ minHeight: "300px", backgroundImage: "url('/images/aye.jpg')" }}
                                title="Woman holding a mug">
                            </div>
                        </a>
                        <a href="#"
                            className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out">Survey:
                            Many Americans 'Dissatisfied' With U.S.</a>
                    </div>
                    <div className="">
                        <a href="#">
                            <div className="h-40 bg-cover text-center overflow-hidden"
                                style={{ minHeight: "300px", backgroundImage: "url('/images/aye.jpg')" }}
                                title="Woman holding a mug">
                            </div>
                        </a>
                        <a href="#"
                            className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out">Trump
                            Steps Back Into Coronavirus Spotlight</a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default BlogsPage
