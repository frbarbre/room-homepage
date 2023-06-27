import { About } from "."

export default function Showcase() {
    return (
        <div className="w-full flex justify-between flex-col md:flex-row items-center gap-x-8">
            <img className="w-full md:w-1/3 object-cover aspect-picture max-h-[300px] object-top" src="/image-about-dark.jpg" alt="dark-image" />
            <About />
            <img className="w-full md:w-1/3 object-cover aspect-picture max-h-[300px] object-top" src="/image-about-light.jpg" alt="light-image" />
        </div>
    )
}