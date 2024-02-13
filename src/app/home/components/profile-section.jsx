import Image from "next/image";
import Link from "next/link";
import GithubLink from "@/app/home/components/links/github-link";
import LinkedinLink from "@/app/home/components/links/linkedin-link";

export default function ProfileSection({className}) {

    return (<>
        <div>
            <div className={"flex justify-center mt-8 mb-8"}>
                <div className="mt-6">
                    <Image
                        className={"shadow-lg rounded-lg sm:w-52 sm:h-52 w-28 h-28"}
                        src={"/me.png"}
                        alt={"A picture of myself smiling into the camera"}
                        width={200}
                        height={200}
                    />
                    <div className={"ml-5 flex items-center"}>
                        <Link className={"sm:inline-block hidden mt-2"} href="https://www.google.com/search?q=Frisco%2C+TX">
                                <svg width="50px" height="50px" viewBox="0 0 1024 1024"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#000000"
                                          d="M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"/>
                                    <path fill="#000000"
                                          d="M512 512a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm0 64a160 160 0 1 1 0-320 160 160 0 0 1 0 320z"/>
                                </svg>
                        </Link>
                        <div className={"sm:ml-3 sm:pt-2 mt-4 mr-4 w-34"}>
                            Frisco, TX
                        </div>
                    </div>
                </div>
                <div className={"flex flex-col ml-5 mt-5"}>

                    {/*name and title section*/}
                    <div>
                        <h1 className={"sm:text-4xl text-2xl font-semibold text-white text-with-gradient"}>Jesse Cooper</h1>
                        <h2 className={"sm:text-2xl text-lg text-gray-600"}>Software Engineer</h2>
                    </div>

                    {/*socials section*/}
                    <div>
                        <GithubLink className={"sm:w-18 sm:h-18 w-12 h-12 inline-block"}/>
                        <LinkedinLink className={"w-18 h-18 inline-block"} />
                        {/*thinking of have a third link that opens a contact modal, directs them to a contact form, or something like that*/}
                    </div>
                </div>
            </div>

        </div>
    </>)

}