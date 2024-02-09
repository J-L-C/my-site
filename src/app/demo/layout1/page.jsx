import Image from "next/image";
import Link from "next/link";
import StrideLogo from "@/app/demo/layout1/logos/stride-logo";
import ImprovingLogo from "@/app/demo/layout1/logos/improving-logo";
import JpmcLogo from "@/app/demo/layout1/logos/jpmc-logo";
import AALogo from "@/app/demo/layout1/logos/aa-logo";
import CognizantLogo from "@/app/demo/layout1/logos/cognizant-logo";
import AllstateLogo from "@/app/demo/layout1/logos/allstate-logo";
import SabreLogo from "@/app/demo/layout1/logos/sabre-logo";
import SantanderUsaLogo from "@/app/demo/layout1/logos/santander-usa-logo";
import StripedBall from "@/app/demo/layout1/shapes/striped-ball";
import TriangleSolidBackOffset from "@/app/demo/layout1/shapes/triangle-solid-back-offset";
import TriangleTransparentOffset from "@/app/demo/layout1/shapes/triangle-transparent-offset";
import TriangleSolidFrontOffset from "@/app/demo/layout1/shapes/triangle-solid-front-offset";
import AboutMe from "@/app/demo/layout1/shapes/about-me";

export default function Layout1() {

    return (
        <div className="parallax__viewport">
            <div className={"absolute layer3"}>

            </div>
            <div className={"absolute layer2"}>
                <div className={""}>
                    {/*<StripedBall className={"spin w-10 h-10"}/>*/}
                    {/*<TriangleSolidBackOffset className={"spin w-10 h-10"}/>*/}
                    {/*<TriangleTransparentOffset className={"spin w-10 h-10"}/>*/}
                    {/*<TriangleSolidFrontOffset className={"spin w-10 h-10"}/>*/}


                    {/*<svg className="spin" width="100" height="100" viewBox="0 0 100 100">*/}
                    {/*    <rect width={100} height={100} fill="blue"/>*/}
                    {/*</svg>*/}
                </div>
            </div>
            <div className={"bg-transparent flex justify-center top-0 parallax__layer layer1"}>
                <div className={" sm:w-[625px] min-w-[325px] sm:w-1/2 w-10/12  absolute top-5 rounded-lg"}>
                    {/*header section*/}
                    <div>
                        <div className={"flex"}>
                            <div>
                                <Image
                                    className={"shadow-lg rounded-lg mx-[-5%] my-[-5%] sm:w-52 sm:h-52 w-28 h-28"}
                                    src={"/me.png"}
                                    alt={"A picture of myself smiling into the camera"}
                                    width={200}
                                    height={200}
                                />
                                <div className={"ml-5 flex items-center"}>
                                    <div className={"inline-block mt-2"}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                             className="w-5 h-5">
                                            <path fillRule="evenodd"
                                                  d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-1.5 0a6.5 6.5 0 1 1-11-4.69v.447a3.5 3.5 0 0 0 1.025 2.475L8.293 10 8 10.293a1 1 0 0 0 0 1.414l1.06 1.06a1.5 1.5 0 0 1 .44 1.061v.363a1 1 0 0 0 .553.894l.276.139a1 1 0 0 0 1.342-.448l1.454-2.908a1.5 1.5 0 0 0-.281-1.731l-.772-.772a1 1 0 0 0-1.023-.242l-.384.128a.5.5 0 0 1-.606-.25l-.296-.592a.481.481 0 0 1 .646-.646l.262.131a1 1 0 0 0 .447.106h.188a1 1 0 0 0 .949-1.316l-.068-.204a.5.5 0 0 1 .149-.538l1.44-1.234A6.492 6.492 0 0 1 16.5 10Z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                    </div>
                                    <div className={"ml-3 pt-2 inline-block"}>
                                        Frisco, TX
                                    </div>

                                </div>
                            </div>
                            <div className={"ml-5 mt-5"}>

                                {/*name and title section*/}
                                <div>
                                    <div>Jesse Cooper</div>
                                    <div>Software Engineer</div>
                                </div>

                                {/*socials section*/}
                                <div>
                                    <Link href={"https://github.com/J-L-C"}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-10 w-10 inline-block fill-[#333]"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                    </Link>
                                    <Link href={"www.linkedin.com/in/jlcooper1"}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-10 w-10 inline-block ml-2 fill-[#0077b5]"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                                        </svg>
                                    </Link>
                                    {/*thinking of have a third link that opens a contact modal, directs them to a contact form, or something like that*/}
                                </div>
                            </div>
                        </div>

                    </div>
                    {/*Hero Section/Introduction*/}
                    <div className="flex flex-col basis-full justify-center mt-8 rounded border-2">
                        <div className="drop-shadow-2xl">
                            <h2
                                className="flex justify-center items-center flex-initial
                                w-40 h-16 text-white bg-[#ff0000] float-left mr-4  mx-[-3%]
                                my-[-3%] text-with-red-shadow-no-gradient font-bold
                                rounded
                                ">
                                About Me</h2>
                            <p className={"pl-2"}> Passionate Full Stack Engineer that enjoys digging into
                                different
                                technologies and tools
                                with experience in all aspects of the SDLC, Test Driven Development, Continuous
                                Integration
                                and Deployment. Also, with extensive experience working with Spring Boot and REST APIs
                                and
                                experience building frontend applications in React. Energized while working in a team
                                and
                                solving complex problems while striving to create solid, quality products.
                            </p>
                        </div>

                    </div>
                    {/*career journey*/}
                    <div className="flex flex-col">
                        <h1
                            className="flex justify-center items-center flex-initial
                                h-28 text-white bg-[#ff0000] mx-[-3%] gap-8
                                my-[5%] text-with-red-shadow-no-gradient font-bold rounded
                                "
                        >Career Journey</h1>
                        <div>
                            <div>
                                <div className="w-48 mx-[-3%] my-[-3%]">
                                    <StrideLogo
                                        className="stride ml-4 mt-4"
                                        width="300"
                                        height="100"
                                    />
                                </div>

                                <div className="border-4 rounded">
                                    <p className="">
                                        Client: ‘EdTech Company’ : Working closely with stakeholders, we built a web
                                        app
                                        for
                                        teachers and coaches to extend and strengthen their understanding of effective
                                        classroom
                                        interactions through classroom observation. We leveraged XP practices and
                                        principles
                                        throughout the project: Pair Programming, TDD, Retros, etc.
                                        Client: ‘Blockchain-Based Transaction Solution for Commercial Banking’. Dove
                                        deep
                                        into
                                        their systems and engaged with multiple stakeholders, to deliver detailed
                                        insights,
                                        scripts,
                                        and a flexible, extensible test harness to measure DBMS performance across
                                        multiple
                                        DBMS
                                        solutions. We did this to set our client up for success in migrating their
                                        existing
                                        single
                                        instance DBMS to a clustered DBMS solution while balancing considerations of
                                        cost,
                                        performance, ease of adoption, and resiliency. Also, I paired daily with another
                                        engineer as
                                        we built out the test harness, worked on migration scripts, spikes, and even
                                        documentation.
                                    </p>
                                </div>
                            </div>


                            <div className="mt-16">
                                <div className="w-48 mx-[-3%] my-[-3%]">
                                    <ImprovingLogo
                                        className="mb-12"
                                        width="300"
                                        height="100"
                                    />
                                </div>
                                <div className="border-4 rounded">
                                    <p>
                                        Client: ‘Publishing & Education Company’ - Delivered new features for their
                                        testing
                                        center
                                        application, worked to reduce technical debt through upgrades and refactoring in
                                        order
                                        to
                                        prepare their application for GraavlVM - Native Image deployment across multiple
                                        Java/
                                        Springboot services.
                                        Client: ‘Publishing & Education Company’ - Finished phase 1 of a product that
                                        improved
                                        the
                                        process for users who wanted to get started with building a certification exam,
                                        moving
                                        from
                                        emails and spreadsheets to a user friendly online portal.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-16">
                                <div className="w-48 mx-[-3%] my-[-3%]">
                                    <JpmcLogo
                                        className="ml-14"
                                        width="300"
                                        height="100"
                                    />
                                </div>
                                <div className="border-4 rounded">
                                    <p>
                                        Collaborated with frontend team to develop RESTful APIs for J.P Morgan Chase
                                        Advisor\'s
                                        tool that onboards clients and updates client financial allotments based on the
                                        products
                                        J.P
                                        Morgan Chase offers
                                        Designed algorithm for fetching and constructing asset allocation data to show
                                        the
                                        client
                                        a high-level breakdown of the makeup of their portfolio
                                    </p>
                                </div>
                            </div>


                            <div className="mt-16 mb-36">
                                <div className="w-48 mx-[-3%] my-[-3%]">
                                    <AALogo
                                        className="mb-16 ml-4"
                                        width="300"
                                        height="100"
                                    />
                                </div>
                                <div className="border-4 rounded">
                                    <p>
                                        Worked on transforming AA.com legacy monolith into a micro services: using TDD
                                        principles
                                        and practices in a Paired Programming environment
                                    </p>
                                </div>
                            </div>

                            <div className="">
                                <div className="w-48 mx-[-3%] my-[-3%]">
                                    <CognizantLogo
                                        className="mt-8"
                                        width="300"
                                        height="100"
                                    />
                                </div>
                                <div className="border-4 rounded">
                                    <p>
                                        Lead a small team to build an internal facing application for rapid
                                        prototyping,
                                        leveraging Maven Archetypes to generate code, Azure and GitLab APIs to create
                                        repositories
                                        with the generated code, and Concourse pipelines orchestrate it all.
                                        Client: “Consumer Products” - Built a web app to manage research documents and
                                        provide
                                        access controls to those documents including designing the initial email
                                        notification
                                        system, for approvals, view requests, etc.
                                    </p>
                                </div>

                            </div>

                            <div className="mt-16">
                                <div className="w-48 mx-[-3%] my-[-3%] mr-2">
                                    <AllstateLogo
                                        width="300"
                                        height="100"
                                    />
                                </div>
                                <div className="border-4 rounded">
                                    <p>
                                        Delivered a full stack web app for adjusters to submit work orders to outside
                                        vendors
                                        that
                                        are partnered with Allstate. This made it easier for adjusters to manage their
                                        work
                                        orders,
                                        simplified who Allstate partnered with, and reduced costs through negotiated
                                        rates
                                        between
                                        approved vendors and Allstate.
                                        To simplify how claim data is used by our teams, we built a web API for
                                        fetching it
                                        from
                                        the central database. This simplified the on-boarding process for claim data and
                                        streamlined
                                        the types of queries sent to the database.
                                        Fostered XP collaborative culture by engaging in XP ceremonies, practicing
                                        Paired
                                        Programming, and TDD
                                    </p>
                                </div>
                            </div>

                            <div className="mt-16">
                                <div className="w-48 mx-[-3%] my-[-3%] mr-2">
                                    <SabreLogo
                                        width="300"
                                        height="100"
                                    />
                                </div>
                                <div className="border-4 rounded">
                                    <p>
                                        Collaborated with onsite and overseas-based data migration teams to create
                                        scripts
                                        that
                                        validated migration data for the AA/US Airways merger in the Sabre system.
                                        Wrote and maintained automation test scripts for the Sabre system for new
                                        features.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-16 mb-36">
                                <div className="w-48 mx-[-3%] my-[-3%] mr-2">
                                    <SantanderUsaLogo
                                        className="ml-8"
                                        width="300"
                                        height="100"
                                    />
                                </div>
                                <div className="border-4 rounded">
                                    <p>
                                        I worked closely with the Product Owner and Project Manager to create user
                                        stories,
                                        assist
                                        developers on design, and to keep team the team in sync with the needs of the
                                        business.
                                    </p>
                                </div>
                            </div>


                        </div>
                    </div>

                    {/*projects*/}
                    <div>
                        <h1
                            className="flex justify-center items-center flex-initial
                                h-28 text-white bg-[#ff0000] mx-[-3%] gap-8
                                my-[5%] text-with-red-shadow-no-gradient font-bold rounded
                                "
                        >Projects</h1>
                    </div>

                    {/*build with*/}
                    <div>
                        {/*links and stuff will go here*/}
                    </div>

                </div>


            </div>
        </div>
    )
}