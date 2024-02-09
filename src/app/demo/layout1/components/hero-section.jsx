export default function HeroSection({className}){
    return (<>
        <div className="flex flex-col basis-full justify-center mt-8 rounded border-2">
            <div className="drop-shadow-2xl">
                <h2
                    className="flex justify-center items-center flex-initial
                                w-40 h-16 text-white bg-[#ff0000] float-left mr-4  mx-[-3%]
                                my-[-3%] text-with-red-shadow-no-gradient font-bold
                                rounded
                                ">
                    About Me</h2>
                <p className={"pl-2"}>
                    Passionate Full Stack Engineer that enjoys digging into different technologies and tools
                    with experience in all aspects of the SDLC, Test Driven Development, Continuous Integration
                    and Deployment. Also, with extensive experience working with Spring Boot and REST APIs and
                    experience building frontend applications in React. Energized while working in a team and
                    solving complex problems while striving to create solid, quality products.
                </p>
            </div>
        </div>

    </>)
}