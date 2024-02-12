"use client"
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/app/demo/layout1/components/hero-section";
import ProfileSection from "@/app/demo/layout1/components/profile-section";
import CareerJourney from "@/app/demo/layout1/components/career-journey";
import {useEffect} from "react";
import {convertTimeToNumber} from "@/app/demo/layout1/utils/convert";
import BlobFive from "@/app/demo/layout1/shapes/blob-five";
import BlockWithStripes from "@/app/demo/layout1/shapes/block-with-stripes";
import FlatDonutDots from "@/app/demo/layout1/shapes/flat-donut-dots";
import OneSwishCircle from "@/app/demo/layout1/shapes/one-swish-circle";
import SolidWavyLine from "@/app/demo/layout1/shapes/solid-wavy-line";
import TransparentWavyLine from "@/app/demo/layout1/shapes/transparent-wavy-line";
import TriangleDotsOffset from "@/app/demo/layout1/shapes/triangle-dots-offset";

export default function Layout1() {

    let strideLogo;
    let improvingLogo;
    let jpmcLogo;
    let aaLogo;
    let cognizantLogo;
    let allstateLogo;
    let sabreLogo;
    let santanderLogo;
    let stripedDonut;

    let strideLogoTriggered = false;
    let improvingLogoTriggered = false;
    let jpmcLogoTriggered = false;
    let aaLogoTriggered = false;
    let cognizantLogoTriggered = false;
    let allstateLogoTriggered = false;
    let sabreLogoTriggered = false;
    let santanderLogoTriggered = false;
    let colorWheel = ["blue","red","pink","blue","black"]

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
        stripedDonut = document.getElementById("stripedDonut");

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
            <div className={"absolute layer4"}>
                {/*<div className={""}>*/}

                {/*    <div className="">*/}

                {/*        <div className="float">*/}
                {/*            <BlockWithStripes fill="blue"*/}
                {/*                              className={"fixed x-large -right-[160px] top-[5800px] rotate-[197deg]"}/>*/}
                {/*        </div>*/}
                {/*        <div className="float">*/}
                {/*            <BlockWithStripes fill="red"*/}
                {/*                              className={"fixed x-large -right-[760px] top-[5100px] -rotate-[43deg]"}/>*/}
                {/*        </div>*/}
                {/*        <div className="float">*/}
                {/*            <BlockWithStripes fill="blue"*/}
                {/*                              className={"fixed  x-large -right-[1200px] top-[4800px] rotate-[357deg]"}/>*/}
                {/*        </div>*/}
                {/*        <div className="float">*/}
                {/*            <BlockWithStripes fill="red"*/}
                {/*                              className={"fixed  large -right-[60px] top-[4500px] -rotate-[105deg]"}/>*/}
                {/*        </div>*/}


                {/*        <div className="float">*/}
                {/*            <BlockWithStripes fill="blue"*/}
                {/*                              className={"fixed  x2-large -right-[60px] top-[4200px] rotate-[28deg]"}/>*/}
                {/*        </div>*/}
                {/*        <div className="float">*/}
                {/*            <BlockWithStripes fill="red"*/}
                {/*                              className={"fixed  x-large -right-[660px] top-[4000px] -rotate-[146deg]"}/>*/}
                {/*        </div>*/}
                {/*        <div className="float">*/}
                {/*            <BlockWithStripes fill="blue"*/}
                {/*                              className={"fixed  large -right-[1060px] top-[3600px] -rotate-[80deg]"}/>*/}
                {/*        </div>*/}
                {/*        <div className="float">*/}
                {/*            <BlockWithStripes fill="red"*/}
                {/*                              className={"fixed  large -right-[843px] top-[3290px] -rotate-[188deg]"}/>*/}
                {/*        </div>*/}
                {/*        <div className="float">*/}
                {/*            <BlockWithStripes fill="blue"*/}
                {/*                              className={"fixed  large -right-[399px] top-[2900px] rotate-[37deg]"}/>*/}
                {/*        </div>*/}
                {/*        <div className="float">*/}
                {/*            <BlockWithStripes fill="red"*/}
                {/*                              className={"fixed  large -right-[899px] top-[2630px] -rotate-[166deg]"}/>*/}
                {/*        </div>*/}
                {/*        <div className="float">*/}
                {/*            <BlockWithStripes fill="blue"*/}
                {/*                              className={"fixed  large -right-[588px] top-[2439px] rotate-[306deg]"}/>*/}
                {/*        </div>*/}
                {/*        <div className="float">*/}
                {/*            <BlockWithStripes fill="red"*/}
                {/*                              className={" fixed  large -right-[166px] top-[2100px] -rotate-[195deg]"}/>*/}
                {/*        </div>*/}
                {/*        <div className="float">*/}
                {/*            <BlockWithStripes fill="black"*/}
                {/*                              className={"fixed  large -right-[666px] top-[1800px] rotate-[211deg]"}/>*/}
                {/*        </div>*/}
                {/*        <div className="float">*/}
                {/*            <BlockWithStripes fill="orange"*/}
                {/*                              className={"fixed  large -right-[999px] top-[1500px] -rotate-[89deg]"}/>*/}
                {/*        </div>*/}
                {/*        <div className="float">*/}
                {/*            <BlockWithStripes fill="black"*/}
                {/*                              className={"fixed  large -right-[666px]  top-[1200px] rotate-[352deg]"}/>*/}
                {/*        </div>*/}
                {/*        <div className="float">*/}
                {/*            <BlockWithStripes fill="black"*/}
                {/*                              className={"fixed  large -right-[555px]  top-[900px] -rotate-[115deg]"}/>*/}
                {/*        </div>*/}
                {/*        <div className="float">*/}
                {/*            <BlockWithStripes fill="black"*/}
                {/*                              className={"fixed  large -right-[1235px]  top-[3900px] rotate-[190deg]"}/>*/}
                {/*        </div>*/}
                {/*        <div className="float">*/}
                {/*            <BlockWithStripes fill="black"*/}
                {/*                              className={"fixed  large -right-[1360px]  top-[2900px] -rotate-[142deg]"}/>*/}
                {/*        </div>*/}
                {/*        <div className="float">*/}
                {/*            <BlockWithStripes fill="black"*/}
                {/*                              className={"fixed  large -right-[460px]  top-[1900px] rotate-[1deg]"}/>*/}
                {/*        </div>*/}
                {/*        <div className="float">*/}
                {/*            <BlockWithStripes fill="black"*/}
                {/*                              className={"fixed  large -right-[360px]  top-[900px] -rotate-[8deg]"}/>*/}
                {/*        </div>*/}
                {/*        <div className="float">*/}
                {/*            <BlockWithStripes fill="black"*/}
                {/*                              className={"fixed  large -right-[260px]  top-[400px] rotate-[338deg]"}/>*/}
                {/*        </div>*/}
                {/*        <div className="float">*/}
                {/*            <BlockWithStripes fill="black"*/}
                {/*                              className={"fixed  x-huge -right-[860px]  top-[300px] -rotate-[251deg]"}/>*/}
                {/*        </div>*/}
                {/*        <div className="float">*/}
                {/*            <BlockWithStripes fill="black"*/}
                {/*                              className={"fixed  x-large -right-[1320px]  top-[222px] rotate-[171deg]"}/>*/}
                {/*        </div>*/}
                {/*        <div className="float">*/}
                {/*            <BlockWithStripes fill="black"*/}
                {/*                              className={"fixed  x2-large -right-[960px]  -top-[180px] -rotate-[84deg]"}/>*/}
                {/*        </div>*/}
                {/*        <div className="float">*/}
                {/*            <BlockWithStripes fill="black"*/}
                {/*                              className={"fixed  large -right-[1060px] -top-[400px] rotate-[90deg]"}/>*/}
                {/*        </div>*/}
                {/*        <div className="float">*/}
                {/*            <BlockWithStripes fill="black"*/}
                {/*                              className={"fixed  large -right-[1567px] -top-[90px] -rotate-[49deg]"}/>*/}
                {/*        </div>*/}

                {/*    </div>*/}

                {/*</div>*/}
            </div>
            <div className={"absolute layer3"}>
                <div className={"rotate-180 bottom-0"}>

                    <div className="">

                        <div className="float">
                            <BlockWithStripes fill="orange"
                                              className={"fixed huge -right-[100px] -top-[5800px] rotate-[197deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="orange"
                                              className={"fixed x-huge right-[760px] -top-[5100px] -rotate-[43deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="orange"
                                              className={"fixed  large right-[1200px] -top-[4800px] rotate-[357deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="orange"
                                              className={"fixed  medium right-[60px] -top-[4500px] -rotate-[105deg]"}/>
                        </div>


                        <div className="float">
                            <BlockWithStripes fill="orange"
                                              className={"fixed huge right-[60px] -top-[4200px] rotate-[113deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="orange"
                                              className={"fixed x2-large right-[1360px] -top-[4000px] -rotate-[146deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="orange"
                                              className={"fixed x-large right-[1360px] -top-[3600px] -rotate-[80deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="orange"
                                              className={"fixed large right-[1043px] -top-[3290px] -rotate-[188deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="orange"
                                              className={"fixed medium right-[399px] -top-[2900px] rotate-[37deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="orange"
                                              className={"fixed  large right-[1199px] -top-[2630px] -rotate-[172deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="orange"
                                              className={"fixed  large right-[1588px] -top-[2439px] rotate-[146deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="purple"
                                              className={" fixed  large right-[66px] -top-[2100px] -rotate-[123deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="purple"
                                              className={"fixed  x-large right-[666px] -top-[1500px] rotate-[111deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="orange"
                                              className={"fixed  large right-[999px] -top-[1500px] -rotate-[89deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="purple"
                                              className={"fixed  medium right-[666px] -top-[1200px] rotate-[352deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="purple"
                                              className={"fixed  large right-[535px] -top-[900px] -rotate-[115deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="green"
                                              className={"fixed  large right-[1235px] -top-[3900px] rotate-[190deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="green"
                                              className={"fixed  huge right-[1360px] -top-[2900px] -rotate-[142deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="green"
                                              className={"fixed  medium right-[460px] -top-[1900px] rotate-[1deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="green"
                                              className={"fixed large right-[360px] -top-[900px] -rotate-[3deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="green"
                                              className={"fixed  x-huge -right-[40px] -top-[400px] rotate-[338deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="green"
                                              className={"fixed  medium right-[860px] -top-[300px] -rotate-[251deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="green"
                                              className={"fixed  x-large right-[1370px] -top-[202px] rotate-[171deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="green"
                                              className={"fixed  x2-large right-[890px]  -top-[180px] -rotate-[94deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="green"
                                              className={"fixed  large right-[1060px] -top-[400px] rotate-[90deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="red"
                                              className={"fixed  large right-[1567px] -top-[90px] -rotate-[49deg]"}/>
                        </div>

                    </div>

                </div>
            </div>
            <div className={"layer2 w-0 h-0"}>
                <div className={""}>

                    <div className="">

                        <div className="float">
                            <BlockWithStripes fill="blue"
                                              className={"fixed x-large -right-[160px] top-[5800px] rotate-[197deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="red"
                                              className={"fixed x-large -right-[760px] top-[5100px] -rotate-[43deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="blue"
                                              className={"fixed  x-large -right-[1200px] top-[4800px] rotate-[357deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="red"
                                              className={"fixed  large -right-[60px] top-[4500px] -rotate-[105deg]"}/>
                        </div>


                        <div className="float">
                            <BlockWithStripes fill="blue"
                                              className={"fixed  x2-large -right-[60px] top-[4200px] rotate-[28deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="red"
                                              className={"fixed  x-large -right-[660px] top-[4000px] -rotate-[146deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="blue"
                                              className={"fixed  large -right-[1060px] top-[3600px] -rotate-[80deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="red"
                                              className={"fixed  large -right-[843px] top-[3290px] -rotate-[188deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="blue"
                                              className={"fixed  large -right-[399px] top-[2900px] rotate-[37deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="red"
                                              className={"fixed  large -right-[899px] top-[2630px] -rotate-[166deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="blue"
                                              className={"fixed  large -right-[588px] top-[2439px] rotate-[306deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="red"
                                              className={" fixed  large -right-[166px] top-[2100px] -rotate-[195deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="black"
                                              className={"fixed  large -right-[666px] top-[1800px] rotate-[211deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="orange"
                                              className={"fixed  large -right-[999px] top-[1200px] -rotate-[89deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="black"
                                              className={"fixed  large -right-[666px]  top-[1200px] rotate-[352deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="black"
                                              className={"fixed  large -right-[555px]  top-[900px] -rotate-[115deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="black"
                                              className={"fixed  large -right-[1235px]  top-[3900px] rotate-[190deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="black"
                                              className={"fixed  large -right-[1360px]  top-[2900px] -rotate-[142deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="black"
                                              className={"fixed  large -right-[460px]  top-[1900px] rotate-[1deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="black"
                                              className={"fixed  medium -right-[360px]  top-[900px] -rotate-[8deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="blue"
                                              className={"fixed  x-large -right-[260px]  top-[400px] rotate-[338deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="green"
                                              className={"fixed  x-large -right-[860px]  top-[300px] -rotate-[251deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="green"
                                              className={"fixed  huge -right-[1320px]  top-[222px] rotate-[171deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="green"
                                              className={"fixed  x2-large -right-[960px]  -top-[180px] -rotate-[84deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="blue"
                                              className={"fixed  medium -right-[1160px] -top-[400px] rotate-[90deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="blue"
                                              className={"fixed  medium -right-[1567px] -top-[90px] -rotate-[51deg]"}/>
                        </div>

                    </div>

                </div>
            </div>
            <div className="bg-transparent flex justify-center top-0 layer1">
                <div className="sm:w-[625px] min-w-[325px] sm:w-1/2 w-10/12  absolute top-5 rounded-lg">

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