"use client"
import Image from "next/image";
import HeroSection from "@/app/home/components/hero-section";
import ProfileSection from "@/app/home/components/profile-section";
import CareerJourney from "@/app/home/components/career-journey";
import {useEffect} from "react";
import {convertTimeToNumber} from "@/app/home/utils/convert";
import BlockWithStripes from "@/app/home/shapes/block-with-stripes";
import YoutubeLink from "@/app/home/components/links/youtube-link";
import GithubLink from "@/app/home/components/links/github-link";
import SectionHeading from "@/app/home/components/section-heading";

export default function AboutMe() {

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

    const rightOffset = 100;

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
            console.log('stride triggered')
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
            console.log('cognizant triggered')
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
            rect.right <= (window.innerWidth + rightOffset || document.documentElement.clientWidth + rightOffset)
        );
    }


    return (
        <div className="parallax__viewport">
            <div className={"relative layer3"}>
                <div className={"rotate-180 bottom-0"}>

                    <div className="">

                        <div className="animation-delay-100 float-slow">
                            <BlockWithStripes fill="#00DFA2"
                                              className={"absolute huge -right-[400px] -top-[5400px] rotate-[187deg]"}/>
                        </div>
                        <div className="animation-delay-300 float-fast">
                            <BlockWithStripes fill="#FF0060"
                                              className={"absolute medium -right-[500px] -top-[5800px] -rotate-[197deg]"}/>
                        </div>
                        <div className="animation-delay-500 float-small-overshoot">
                            <BlockWithStripes fill="#F6FA70"
                                              className={"absolute large right-[800px] -top-[5300px] rotate-[197deg]"}/>
                        </div>
                        <div className="animation-delay-700 float-large-overshoot">
                            <BlockWithStripes fill="#FF0060"
                                              className={"absolute x-large -right-[800px] -top-[5800px] rotate-[197deg]"}/>
                        </div>
                        <div className="animation-delay-150 float-small-overshoot">
                            <BlockWithStripes fill="#00DFA2"
                                              className={"absolute x2-large right-[1100px] -top-[6700px] rotate-[197deg]"}/>
                        </div>
                        <div className="animation-delay-850 float-fast">
                            <BlockWithStripes fill="#FF0060"
                                              className={"absolute small right-[1100px] -top-[5300px] rotate-[97deg]"}/>
                        </div>
                        <div className="animation-delay-700 float">
                            <BlockWithStripes fill="#F6FA70"
                                              className={"absolute massive right-[1190px] -top-[5700px] rotate-[97deg]"}/>
                        </div>
                        <div className="animation-delay-750 float-small-overshoot">
                            <BlockWithStripes fill="#FF0060"
                                              className={"absolute large -right-[100px] -top-[6300px] rotate-[297deg]"}/>
                        </div>
                        <div className="animation-delay-650 float">
                            <BlockWithStripes fill="#00DFA2"
                                              className={"absolute x-large -right-[100px] -top-[5800px] rotate-[137deg]"}/>
                        </div>
                        <div className="animation-delay-500 float-slow">
                            <BlockWithStripes fill="#FF0060"
                                              className={"absolute x-huge right-[1760px] -top-[5100px] -rotate-[43deg]"}/>
                        </div>
                        <div className="animation-delay-250 float-large-overshoot">
                            <BlockWithStripes fill="#F6FA70"
                                              className={"absolute  large right-[1200px] -top-[4800px] rotate-[357deg]"}/>
                        </div>
                        <div className="animation-delay-200 float-fast">
                            <BlockWithStripes fill="#FF0060"
                                              className={"absolute  medium right-[60px] -top-[4500px] -rotate-[105deg]"}/>
                        </div>


                        <div className="animation-delay-250 float-slow">
                            <BlockWithStripes fill="#00DFA2"
                                              className={"absolute huge right-[60px] -top-[4200px] rotate-[113deg]"}/>
                        </div>
                        <div className="animation-delay-400 float-slow">
                            <BlockWithStripes fill="#FF0060"
                                              className={"absolute huge right-[1560px] -top-[4000px] -rotate-[176deg]"}/>
                        </div>
                        <div className="animation-delay-500 float-small-overshoot">
                            <BlockWithStripes fill="#F6FA70"
                                              className={"absolute x-large right-[160px] -top-[3600px] -rotate-[80deg]"}/>
                        </div>
                        <div className="animation-delay-650 float">
                            <BlockWithStripes fill="#FF0060"
                                              className={"absolute large right-[1343px] -top-[3290px] -rotate-[188deg]"}/>
                        </div>
                        <div className="animation-delay-750 float-fast">
                            <BlockWithStripes fill="#00DFA2"
                                              className={"absolute medium right-[399px] -top-[2900px] rotate-[37deg]"}/>
                        </div>
                        <div className="animation-delay-850 float">
                            <BlockWithStripes fill="#FF0060"
                                              className={"absolute  large right-[1199px] -top-[2630px] -rotate-[172deg]"}/>
                        </div>
                        <div className="animation-delay-600 float-small-overshoot">
                            <BlockWithStripes fill="#F6FA70"
                                              className={"absolute  large right-[1588px] -top-[2439px] rotate-[146deg]"}/>
                        </div>
                        <div className="animation-delay-300 float">
                            <BlockWithStripes fill="#FF0060"
                                              className={" absolute  large right-[66px] -top-[2100px] -rotate-[123deg]"}/>
                        </div>
                        <div className="animation-delay-650 float-large-overshoot">
                            <BlockWithStripes fill="#FF0060"
                                              className={"absolute  x-large right-[666px] -top-[1500px] rotate-[111deg]"}/>
                        </div>
                        <div className="animation-delay-100 float">
                            <BlockWithStripes fill="#00DFA2"
                                              className={"absolute  large right-[999px] -top-[1500px] -rotate-[89deg]"}/>
                        </div>
                        <div className="animation-delay-150 float-fast">
                            <BlockWithStripes fill="#FF0060"
                                              className={"absolute  medium right-[666px] -top-[1200px] rotate-[352deg]"}/>
                        </div>
                        <div className="animation-delay-200 float">
                            <BlockWithStripes fill="#F6FA70"
                                              className={"absolute  large right-[535px] -top-[900px] -rotate-[115deg]"}/>
                        </div>
                        <div className="animation-delay-250 float-small-overshoot">
                            <BlockWithStripes fill="#FF0060"
                                              className={"absolute  large right-[1235px] -top-[3900px] rotate-[190deg]"}/>
                        </div>
                        <div className="animation-delay-850 float-slow">
                            <BlockWithStripes fill="#00DFA2"
                                              className={"absolute  huge right-[710px] -top-[2900px] -rotate-[142deg]"}/>
                        </div>
                        <div className="animation-delay-700 float-extra-long">
                            <BlockWithStripes fill="#FF0060"
                                              className={"absolute  large right-[1060px] -top-[2900px] -rotate-[119deg]"}/>
                        </div>
                        <div className="animation-delay-50 float-extra-long">
                            <BlockWithStripes fill="#F6FA70"
                                              className={"absolute large -right-[460px] -top-[3000px] -rotate-[162deg]"}/>
                        </div>
                        <div className="animation-delay-400 float-fast">
                            <BlockWithStripes fill="#FF0060"
                                              className={"absolute  small right-[1760px] -top-[2600px] -rotate-[162deg]"}/>
                        </div>
                        <div className="animation-delay-300 float-small-overshoot">
                            <BlockWithStripes fill="#00DFA2"
                                              className={"absolute  x2-large right-[1560px] -top-[2200px] -rotate-[142deg]"}/>
                        </div>
                        <div className="animation-delay-200 float-fast">
                            <BlockWithStripes fill="#FF0060"
                                              className={"absolute  medium right-[460px] -top-[1900px] rotate-[1deg]"}/>
                        </div>
                        <div className="animation-delay-250 float-large-overshoot">
                            <BlockWithStripes fill="#F6FA70"
                                              className={"absolute large right-[360px] -top-[900px] -rotate-[3deg]"}/>
                        </div>
                        <div className="animation-delay-100 float-slow">
                            <BlockWithStripes fill="#FF0060"
                                              className={"absolute  x-large right-[340px] -top-[300px] rotate-[38deg]"}/>
                        </div>
                        <div className="animation-delay-150 float-fast">
                            <BlockWithStripes fill="#00DFA2"
                                              className={"absolute  medium right-[860px] -top-[300px] -rotate-[251deg]"}/>
                        </div>
                        <div className="animation-delay-250 float-small-overshoot">
                            <BlockWithStripes fill="#FF0060"
                                              className={"absolute  x-large right-[1370px] -top-[202px] rotate-[171deg]"}/>
                        </div>
                        <div className="animation-delay-400 float-small-overshoot">
                            <BlockWithStripes fill="#F6FA70"
                                              className={"absolute  x2-large right-[890px]  -top-[180px] -rotate-[94deg]"}/>
                        </div>
                        <div className="animation-delay-300 float-large-overshoot">
                            <BlockWithStripes fill="#FF0060"
                                              className={"absolute  large right-[1060px] -top-[400px] rotate-[90deg]"}/>
                        </div>
                        <div className="animation-delay-100 float-large-overshoot">
                            <BlockWithStripes fill="#00DFA2"
                                              className={"absolute  large right-[1567px] -top-[90px] -rotate-[49deg]"}/>
                        </div>
                        <div className="animation-delay-250 float-small-overshoot">
                            <BlockWithStripes fill="#FF0060"
                                              className={"absolute  large -right-[546px] -top-[1800px] rotate-[111deg]"}/>
                        </div>

                    </div>

                </div>
            </div>

            <div className={"w-0 h-0 relative layer2"}>

                    <div className="">

                        <div className="animation-delay-250 float-small-overshoot">
                            <BlockWithStripes fill="#0079FF"
                                              className={"absolute x-large -right-[160px] top-[5800px] rotate-[197deg]"}/>
                        </div>
                        <div className="animation-delay-300 float-large-overshoot">
                            <BlockWithStripes fill="#F6FA70"
                                              className={"absolute x-large -right-[1760px] top-[5100px] -rotate-[43deg]"}/>
                        </div>
                        <div className="animation-delay-500 float">
                            <BlockWithStripes fill="#FF0060"
                                              className={"absolute  x-large -right-[1200px] top-[4800px] rotate-[357deg]"}/>
                        </div>
                        <div className="animation-delay-600 float-small-overshoot">
                            <BlockWithStripes fill="#0079FF"
                                              className={"absolute  large -right-[60px] top-[4500px] -rotate-[105deg]"}/>
                        </div>


                        <div className="animation-delay-850 float">
                            <BlockWithStripes fill="#00DFA2"
                                              className={"absolute  x2-large -right-[60px] top-[4200px] rotate-[28deg]"}/>
                        </div>
                        <div className="animation-delay-300 float-extra-long">
                            <BlockWithStripes fill="#F6FA70"
                                              className={"absolute  x-large -right-[1660px] top-[4000px] -rotate-[146deg]"}/>
                        </div>
                        <div className="animation-delay-400 float-large-overshoot">
                            <BlockWithStripes fill="#0079FF"
                                              className={"absolute  large -right-[1360px] top-[3600px] -rotate-[80deg]"}/>
                        </div>
                        <div className="animation-delay-500 float-extra-long">
                            <BlockWithStripes fill="#00DFA2"
                                              className={"absolute  large -right-[843px] top-[3290px] -rotate-[188deg]"}/>
                        </div>
                        <div className="animation-delay-800 float-slow">
                            <BlockWithStripes fill="#FF0060"
                                              className={"absolute  huge -right-[119px] top-[2900px] rotate-[107deg]"}/>
                        </div>
                        <div className="animation-delay-500 float-extra-long">
                            <BlockWithStripes fill="#F6FA70"
                                              className={"absolute  x-large -right-[1229px] top-[2630px] -rotate-[166deg]"}/>
                        </div>
                        <div className="animation-delay-800 float-small-overshoot">
                            <BlockWithStripes fill="#0079FF"
                                              className={"absolute  large -right-[688px] top-[2439px] rotate-[306deg]"}/>
                        </div>
                        <div className="animation-delay-400 float-large-overshoot">
                            <BlockWithStripes fill="#00DFA2"
                                              className={" absolute  large -right-[166px] top-[2100px] -rotate-[195deg]"}/>
                        </div>
                        <div className="animation-delay-800 float-extra-long">
                            <BlockWithStripes fill="#FF0060"
                                              className={"absolute  large -right-[546px] top-[1800px] rotate-[211deg]"}/>
                        </div>
                        <div className="animation-delay-300 float-small-overshoot">
                            <BlockWithStripes fill="#F6FA70"
                                              className={"absolute  large -right-[999px] top-[1200px] -rotate-[89deg]"}/>
                        </div>
                        <div className="animation-delay-200 float">
                            <BlockWithStripes fill="#0079FF"
                                              className={"absolute  x2-large -right-[1649px] top-[1400px] -rotate-[199deg]"}/>
                        </div>
                        <div className="animation-delay-100 float-extra-long">
                            <BlockWithStripes fill="#FF0060"
                                              className={"absolute  large -right-[666px]  top-[1200px] rotate-[352deg]"}/>
                        </div>
                        <div className="animation-delay-250 float">
                            <BlockWithStripes fill="#F6FA70"
                                              className={"absolute  large -right-[555px]  top-[900px] -rotate-[115deg]"}/>
                        </div>
                        <div className="animation-delay-300 float-small-overshoot">
                            <BlockWithStripes fill="#00DFA2"
                                              className={"absolute  large -right-[1435px]  top-[3900px] rotate-[190deg]"}/>
                        </div>
                        <div className="animation-delay-100 float-slow">
                            <BlockWithStripes fill="#0079FF"
                                              className={"absolute  x3-huge -right-[1599px]  top-[2900px] -rotate-[142deg]"}/>
                        </div>
                        <div className="animation-delay-400 float">
                            <BlockWithStripes fill="#00DFA2"
                                              className={"absolute  large -right-[360px]  top-[1900px] rotate-[1deg]"}/>
                        </div>
                        <div className="animation-delay-800 float-fast">
                            <BlockWithStripes fill="#FF0060"
                                              className={"absolute  medium -right-[360px]  top-[900px] -rotate-[8deg]"}/>
                        </div>
                        <div className="animation-delay-700 float">
                            <BlockWithStripes fill="#F6FA70"
                                              className={"absolute  x-large -right-[60px]  top-[400px] rotate-[338deg]"}/>
                        </div>
                        <div className="animation-delay-600 float-extra-long">
                            <BlockWithStripes fill="#0079FF"
                                              className={"absolute  x-large right-[60px]  top-[700px] -rotate-[251deg]"}/>
                        </div>
                        <div className="animation-delay-500 float-slow">
                            <BlockWithStripes fill="#0079FF"
                                              className={"absolute  huge -right-[1620px]  top-[122px] rotate-[171deg]"}/>
                        </div>
                        <div className="animation-delay-300 float-fast">
                            <BlockWithStripes fill="#FF0060"
                                              className={"absolute  medium -right-[1160px] -top-[400px] rotate-[90deg]"}/>
                        </div>
                        <div className="animation-delay-200 float-fast">
                            <BlockWithStripes fill="#F6FA70"
                                              className={"absolute  medium -right-[1567px] -top-[90px] -rotate-[51deg]"}/>
                        </div>

                    </div>

            </div>

            <div className="flex justify-center top-0 layer1 relative">
                <div className="sm:w-[625px] min-w-[325px] sm:w-1/2 w-10/12  absolute top-5 rounded-lg">

                    <ProfileSection/>

                    <HeroSection/>

                    {/*career journey*/}
                    <CareerJourney className={"flex flex-col"}/>

                    {/*projects*/}
                    <div className="mt-24">
                        <SectionHeading text="Projects"/>

                        <div className="flex flex-col">

                            {/*my site*/}
                            <div className="mb-10 grid sm:grid-cols-2 text-white bg-[#0030a8] sm:p-4 p-8 text-justify">
                                <div>
                                    <Image
                                        className="float-start "
                                        width="250" height="250" src="/my-site.png"
                                        alt="Picture of this site"/>
                                </div>

                                <div className="text-md mt-6">
                                    <h1 className="font-bold">
                                        My Site
                                    </h1>
                                    <div className="mt-4 font-light">
                                        <div>This is my personal site to show off what I&apos;ve been up
                                            to! Click the github icon to see the source code for this project.
                                        </div>
                                    </div>

                                    <div className="mt-6 mb-4 font-semibold">Built with Next.js, Javascript, Tailwind</div>
                                    <GithubLink fill="white" href={"https://github.com/J-L-C/my-site"}/>
                                </div>
                            </div>

                            {/*under construction*/}
                            <div className="mb-10 grid sm:grid-cols-2 items-center text-white bg-[#0030a8] sm:p-4 p-8 text-justify">
                                <div>
                                    <Image
                                        className="float-start"
                                        width="250" height="250" src="/under-construction.png"
                                        alt="Picture of my under construction site I made as a placeholder for this site."/>
                                </div>

                                <div className="text-md mt-6">
                                    <h1 className="font-bold">
                                        Under Construction
                                    </h1>
                                    <div className="mt-4 font-light">
                                        A site I built as a placeholder for my main site while I was still working
                                        on version 1.
                                    </div>

                                    <div className="mt-6 mb-4 font-semibold">Built with Next.js, Javascript, Tailwind</div>
                                    <GithubLink fill="white" href={"https://github.com/J-L-C/under-construction"}/>
                                </div>
                            </div>


                            {/*price tracker*/}
                            <div className="mb-10 grid sm:grid-cols-2 items-center text-white bg-[#0030a8] sm:p-4 p-8 text-justify">
                                <div>
                                    <Image
                                        className="float-start"
                                        width="250" height="250" src="/price-tracker-code.png"
                                        alt="Generic picture of code displayed on a screen with a black background and colorful IDE text highlights."/>
                                </div>

                                <div className="text-md mt-6">
                                    <h1 className="font-bold">
                                        Price Tracker
                                    </h1>
                                    <div className="mt-4 font-light">
                                        This is a small project I put together to setup a bot that
                                        would periodically fetch price data from TCGplayer for items I wanted
                                        to track. Eventually, I want to be able to generate price alerts,
                                        comparative trends, and expand the scope beyond just tracking on
                                        TCGPlayer.
                                    </div>

                                    <div className="mt-6 mb-4 font-semibold">Built with Node.js, Javascript, MongoDB</div>
                                    <GithubLink className="mb-4" fill="white" href={"https://github.com/J-L-C/price-tracker"}/>
                                </div>
                            </div>

                            {/*lego 3d model*/}
                            <div className="grid sm:grid-cols-2 items-center text-white bg-[#0030a8] sm:p-4 p-8 text-justify">
                                <div>
                                    <Image
                                        className="float-start"
                                        width="250" height="250" src="/jumpingLego.png"
                                        alt="Picture of a 3D model of a lego person mid jump"/>
                                </div>

                                <div className="text-md mt-6">
                                    <h1 className="font-bold">
                                        3D Model - Lego
                                    </h1>
                                    <div>
                                        <div className="mt-4 font-light">
                                            My first attempt at making a 3D model in Blender following a very
                                            detailed tutorial! Had a ton of fun making this!
                                        </div>

                                        <div className="mt-6 mb-4 font-semibold">Built with Blender</div>
                                    </div>

                                    <GithubLink
                                        fill="white"
                                        className="inline-block mr-4 mb-20"
                                                href={"https://github.com/J-L-C/lego-3d-model"}/>
                                    <YoutubeLink
                                        width="90"
                                        height="90"
                                        className="inline-block"
                                        href={"https://youtu.be/asoTKacBYaU"}/>
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