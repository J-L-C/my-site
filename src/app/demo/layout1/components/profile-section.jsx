import Image from "next/image";
import Link from "next/link";

export default function ProfileSection({className}) {

    return (<>
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
    </>)

}