"use client"
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/app/demo/layout1/components/hero-section";
import ProfileSection from "@/app/demo/layout1/components/profile-section";
import CareerJourney from "@/app/demo/layout1/components/career-journey";
import {useEffect} from "react";
import {convertTimeToNumber} from "@/app/demo/layout1/utils/convert";

export default function Layout1() {

    let strideLogo;
    let improvingLogo;
    let jpmcLogo;
    let aaLogo;
    let cognizantLogo;
    let allstateLogo;
    let sabreLogo;
    let santanderLogo;

    let strideLogoTriggered = false;
    let improvingLogoTriggered = false;
    let jpmcLogoTriggered = false;
    let aaLogoTriggered = false;
    let cognizantLogoTriggered = false;
    let allstateLogoTriggered = false;
    let sabreLogoTriggered = false;
    let santanderLogoTriggered = false;

    const triggerAnimation = (element) => {

        const animateElements = element.querySelectorAll("animate");
        const animateTransformElements = element.querySelectorAll("animateTransform");

        animateElements.forEach((element) => {
            const begin = element.getAttribute("begin")
            const offset = begin === null ? 0 : convertTimeToNumber(begin);

            element.beginElementAt(Number(offset))
        });

        animateTransformElements.forEach((element) => {
            const begin = element.getAttribute("begin")
            const offset = begin === null ? 0 : convertTimeToNumber(begin);

            element.beginElementAt(Number(offset))
        })

    }

    const removeScrollEvent = () => {
        if (strideLogoTriggered,
            improvingLogoTriggered,
            jpmcLogoTriggered,
            aaLogoTriggered,
            cognizantLogoTriggered,
            allstateLogoTriggered,
            sabreLogoTriggered,
            santanderLogoTriggered) {

            console.log('scroll event removed')
            window.removeEventListener("scroll", triggerAnimationInView)
        }
    }

    const triggerAnimationInView = () => {
        if (isInViewport(strideLogo) && !strideLogoTriggered) {
            // triggerAnimation(strideLogo)
            strideLogoTriggered = true;
        }
        if (isInViewport(improvingLogo) && !improvingLogoTriggered) {
            triggerAnimation(improvingLogo)
            improvingLogo.setAttribute("opacity", 1)
            improvingLogoTriggered = true;
        }
        if (isInViewport(jpmcLogo) && !jpmcLogoTriggered) {
            triggerAnimation(jpmcLogo)
            jpmcLogo.setAttribute("opacity", 1)
            jpmcLogoTriggered = true;
        }
        if (isInViewport(aaLogo) && !aaLogoTriggered) {
            triggerAnimation(aaLogo)
            aaLogoTriggered = true;
        }
        if (isInViewport(cognizantLogo) && !cognizantLogoTriggered) {
            triggerAnimation(cognizantLogo)
            cognizantLogo.setAttribute("opacity", 1)
            cognizantLogoTriggered = true;
        }
        if (isInViewport(allstateLogo) && !allstateLogoTriggered) {
            triggerAnimation(allstateLogo)
            allstateLogo.setAttribute("opacity", 1)
            allstateLogoTriggered = true;
        }
        if (isInViewport(sabreLogo) && !sabreLogoTriggered) {
            triggerAnimation(sabreLogo)
            sabreLogoTriggered = true;
        }
        if (isInViewport(santanderLogo) && !santanderLogoTriggered) {
            triggerAnimation(santanderLogo)
            santanderLogo.setAttribute("opacity", 1)
            santanderLogoTriggered = true;
        }

        removeScrollEvent()
    }

    useEffect(() => {

        strideLogo = document.getElementById("strideLogo");
        improvingLogo = document.getElementById("improvingLogo");
        jpmcLogo = document.getElementById("jpmcLogo");
        aaLogo = document.getElementById("aaLogo");
        cognizantLogo = document.getElementById("cognizantLogo");
        allstateLogo = document.getElementById("allstateLogo");
        sabreLogo = document.getElementById("sabreLogo");
        santanderLogo = document.getElementById("santanderLogo");

        window.addEventListener("scroll", triggerAnimationInView, true)

    }, []);

    function isInViewport(element) {
        const rect = element.getBoundingClientRect(); // Get the bounding rectangle of the element

        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }


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

                    <ProfileSection/>

                    <HeroSection/>

                    {/*career journey*/}
                    <CareerJourney/>

                    {/*projects*/}
                    <div className="mt-24">
                        <h1
                            className="flex justify-center items-center flex-initial
                                h-20 text-white bg-[#ff0000] mx-[-3%] gap-8
                                my-[5%] text-with-red-shadow-no-gradient-very-long font-bold rounded
                                text-7xl
                                ">
                            Projects
                        </h1>
                        <div className="flex flex-col">

                            <div
                                className="mb-10 flex justify-center items-center text-white bg-indigo-600 rounded-xl border-8 border-double border-s-pink-600">
                                <div className="text-md">

                                    <Image
                                        className="float-left"
                                        width="200" height="200" src="/jumpingLego.png"/>
                                    <h1 className="text-with-red-shadow-no-gradient font-bold text-xl">My Site</h1>
                                    <div className="">
                                        <div>This is my personal site to show off what I've been up
                                            to! Click the github icon to see the source code for this project.
                                        </div>
                                        <div className="mt-6 mb-4">Build with: Next.js, Javascript, Tailwind</div>
                                    </div>

                                    <Link
                                        href={"https://github.com/J-L-C/my-site"}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-10 w-10 inline-block fill-[#fff] mb-4"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                    </Link>

                                </div>
                            </div>


                            <div
                                className="mb-10 flex justify-center items-center text-white bg-indigo-600 rounded-xl border-8 border-e-amber-600">
                                <div className="text-md">

                                    <Image
                                        className="float-left"
                                        width="200" height="200" src="/jumpingLego.png"/>
                                    <h1 className="text-with-red-shadow-no-gradient font-bold text-xl">My Site</h1>
                                    <div className="">
                                        <div>This is my personal site to show off what I've been up
                                            to! Click the github icon to see the source code for this project.
                                        </div>
                                        <div className="mt-6 mb-4">Build with: Next.js, Javascript, Tailwind</div>
                                    </div>

                                    <Link
                                        href={"https://github.com/J-L-C/my-site"}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-10 w-10 inline-block fill-[#fff] mb-4"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                    </Link>

                                </div>
                            </div>

                            <div
                                className="mb-10 flex justify-center items-center text-white bg-indigo-600 rounded-xl border-8 border-s-emerald-600">
                                <div className="text-md">

                                    <Image
                                        className="float-left"
                                        width="200" height="200" src="/jumpingLego.png"/>
                                    <h1 className="text-with-red-shadow-no-gradient font-bold text-xl">My Site</h1>
                                    <div className="">
                                        <div>This is my personal site to show off what I've been up
                                            to! Click the github icon to see the source code for this project.
                                        </div>
                                        <div className="mt-6 mb-4">Build with: Next.js, Javascript, Tailwind</div>
                                    </div>

                                    <Link
                                        href={"https://github.com/J-L-C/my-site"}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-10 w-10 inline-block fill-[#fff] mb-4"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                    </Link>

                                </div>
                            </div>

                        </div>
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