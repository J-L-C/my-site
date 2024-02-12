export default function HeroSection({className}){
    return (<>
        <div className="flex flex-col justify-center mt-8 mb-16">
            <div>
                <h1 className="flex justify-center items-center flex-initial
                                h-20 text-white bg-[#ff0000] mx-[-2%] pt-2
                                my-[3%] text-with-red-shadow-no-gradient-very-long font-bold rounded
                                text-7xl mb-12
                                "
                >About Me</h1>
            </div>

            <div className="justify-center items-center">

                <p className={"text-white p-8 text-justify bg-blue-900"}>
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