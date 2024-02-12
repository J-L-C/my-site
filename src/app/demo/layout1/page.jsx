"use client"
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/app/demo/layout1/components/hero-section";
import ProfileSection from "@/app/demo/layout1/components/profile-section";
import CareerJourney from "@/app/demo/layout1/components/career-journey";
import {useEffect} from "react";
import {convertTimeToNumber} from "@/app/demo/layout1/utils/convert";
import BlockWithStripes from "@/app/demo/layout1/shapes/block-with-stripes";
import YoutubeLink from "@/app/demo/layout1/components/links/youtube-link";
import GithubLink from "@/app/demo/layout1/components/links/github-link";

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
    let colorWheel = ["blue", "red", "pink", "blue", "black"]

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
            <div className={"absolute layer3"}>
                <div className={"rotate-180 bottom-0"}>

                    <div className="">

                        <div className="float">
                            <BlockWithStripes fill="blue"
                                              className={"fixed huge -right-[400px] -top-[5400px] rotate-[187deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="blue"
                                              className={"fixed medium -right-[500px] -top-[5800px] -rotate-[197deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="blue"
                                              className={"fixed large right-[800px] -top-[5300px] rotate-[197deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="blue"
                                              className={"fixed x-large -right-[800px] -top-[5800px] rotate-[197deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="blue"
                                              className={"fixed x2-large right-[1100px] -top-[6700px] rotate-[197deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="blue"
                                              className={"fixed small right-[1100px] -top-[5300px] rotate-[97deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="blue"
                                              className={"fixed massive right-[1190px] -top-[5700px] rotate-[97deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="blue"
                                              className={"fixed large -right-[100px] -top-[6300px] rotate-[297deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="blue"
                                              className={"fixed x-large -right-[100px] -top-[5800px] rotate-[137deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="blue"
                                              className={"fixed x-huge right-[1760px] -top-[5100px] -rotate-[43deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="blue"
                                              className={"fixed  large right-[1200px] -top-[4800px] rotate-[357deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="blue"
                                              className={"fixed  medium right-[60px] -top-[4500px] -rotate-[105deg]"}/>
                        </div>


                        <div className="float">
                            <BlockWithStripes fill="blue"
                                              className={"fixed huge right-[60px] -top-[4200px] rotate-[113deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="blue"
                                              className={"fixed huge right-[1560px] -top-[4000px] -rotate-[176deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="blue"
                                              className={"fixed x-large right-[160px] -top-[3600px] -rotate-[80deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="blue"
                                              className={"fixed large right-[1343px] -top-[3290px] -rotate-[188deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="blue"
                                              className={"fixed medium right-[399px] -top-[2900px] rotate-[37deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="blue"
                                              className={"fixed  large right-[1199px] -top-[2630px] -rotate-[172deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="blue"
                                              className={"fixed  large right-[1588px] -top-[2439px] rotate-[146deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="blue"
                                              className={" fixed  large right-[66px] -top-[2100px] -rotate-[123deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="blue"
                                              className={"fixed  x-large right-[666px] -top-[1500px] rotate-[111deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="blue"
                                              className={"fixed  large right-[999px] -top-[1500px] -rotate-[89deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="blue"
                                              className={"fixed  medium right-[666px] -top-[1200px] rotate-[352deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="blue"
                                              className={"fixed  large right-[535px] -top-[900px] -rotate-[115deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="blue"
                                              className={"fixed  large right-[1235px] -top-[3900px] rotate-[190deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="blue"
                                              className={"fixed  huge right-[710px] -top-[2900px] -rotate-[142deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="blue"
                                              className={"fixed  large right-[1060px] -top-[2900px] -rotate-[119deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="blue"
                                              className={"fixed large -right-[460px] -top-[3000px] -rotate-[162deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="blue"
                                              className={"fixed  small right-[1760px] -top-[2600px] -rotate-[162deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="blue"
                                              className={"fixed  x2-large right-[1560px] -top-[2200px] -rotate-[142deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="blue"
                                              className={"fixed  medium right-[460px] -top-[1900px] rotate-[1deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="blue"
                                              className={"fixed large right-[360px] -top-[900px] -rotate-[3deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="blue"
                                              className={"fixed  x-huge -right-[40px] -top-[400px] rotate-[338deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="blue"
                                              className={"fixed  medium right-[860px] -top-[300px] -rotate-[251deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="blue"
                                              className={"fixed  x-large right-[1370px] -top-[202px] rotate-[171deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="blue"
                                              className={"fixed  x2-large right-[890px]  -top-[180px] -rotate-[94deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="blue"
                                              className={"fixed  large right-[1060px] -top-[400px] rotate-[90deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="blue"
                                              className={"fixed  large right-[1567px] -top-[90px] -rotate-[49deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="blue"
                                              className={"fixed  large -right-[546px] -top-[1800px] rotate-[111deg]"}/>
                        </div>

                    </div>

                </div>
            </div>

            {/*to solve the issue of my layers uncentering, I can hack together a solution to just move the whole layer*/}
            {/*at breakpoints. Not the best but hey it should work*/}
            {/*I might be able to calculate the top position of the layer and then adjust accordingly with javascript*/}

            {/*another thought, how about whenever the screen is expanded or adjusted, there is an animation added that translates */}
            {/*each block back to where it should be lol*/}
            <div className={"w-0 h-0 layer2"}>
                <div className={""}>

                    <div className="">

                        <div className="float">
                            <BlockWithStripes fill="red"
                                              className={"fixed x-large -right-[160px] top-[5800px] rotate-[197deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="red"
                                              className={"fixed x-large -right-[1760px] top-[5100px] -rotate-[43deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="red"
                                              className={"fixed  x-large -right-[1200px] top-[4800px] rotate-[357deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="red"
                                              className={"fixed  large -right-[60px] top-[4500px] -rotate-[105deg]"}/>
                        </div>


                        <div className="float">
                            <BlockWithStripes fill="red"
                                              className={"fixed  x2-large -right-[60px] top-[4200px] rotate-[28deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="red"
                                              className={"fixed  x-large -right-[1660px] top-[4000px] -rotate-[146deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="red"
                                              className={"fixed  large -right-[1360px] top-[3600px] -rotate-[80deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="red"
                                              className={"fixed  large -right-[843px] top-[3290px] -rotate-[188deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="red"
                                              className={"fixed  huge -right-[119px] top-[2900px] rotate-[107deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="red"
                                              className={"fixed  x-large -right-[1229px] top-[2630px] -rotate-[166deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="red"
                                              className={"fixed  large -right-[688px] top-[2439px] rotate-[306deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="red"
                                              className={" fixed  large -right-[166px] top-[2100px] -rotate-[195deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="red"
                                              className={"fixed  large -right-[546px] top-[1800px] rotate-[211deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="red"
                                              className={"fixed  large -right-[999px] top-[1200px] -rotate-[89deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="red"
                                              className={"fixed  x2-large -right-[1649px] top-[1400px] -rotate-[199deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="red"
                                              className={"fixed  large -right-[666px]  top-[1200px] rotate-[352deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="red"
                                              className={"fixed  large -right-[555px]  top-[900px] -rotate-[115deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="red"
                                              className={"fixed  large -right-[1435px]  top-[3900px] rotate-[190deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="red"
                                              className={"fixed  x3-huge -right-[1599px]  top-[2900px] -rotate-[142deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="red"
                                              className={"fixed  large -right-[360px]  top-[1900px] rotate-[1deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="red"
                                              className={"fixed  medium -right-[360px]  top-[900px] -rotate-[8deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="red"
                                              className={"fixed  x-large -right-[60px]  top-[400px] rotate-[338deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="red"
                                              className={"fixed  x-large right-[60px]  top-[700px] -rotate-[251deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="red"
                                              className={"fixed  huge -right-[1620px]  top-[122px] rotate-[171deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="red"
                                              className={"fixed  x2-large -right-[960px]  -top-[180px] -rotate-[84deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="red"
                                              className={"fixed  medium -right-[1160px] -top-[400px] rotate-[90deg]"}/>
                        </div>
                        <div className="float">
                            <BlockWithStripes fill="red"
                                              className={"fixed  medium -right-[1567px] -top-[90px] -rotate-[51deg]"}/>
                        </div>

                    </div>

                </div>
            </div>
            <div className="bg-transparent flex justify-center top-0 layer1 relative">
                <div className="sm:w-[625px] min-w-[325px] sm:w-1/2 w-10/12  absolute top-5 rounded-lg">

                    <ProfileSection/>

                    <HeroSection/>

                    {/*career journey*/}
                    <CareerJourney className={"flex flex-col"}/>

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

                            {/*my site*/}
                            <div className="mb-10 grid grid-cols-2 text-white bg-[#3B60E4] p-4">
                                <div>
                                    <Image
                                        className="float-start"
                                        width="250" height="500" src="/my-site.png"
                                        alt="Picture of this site"/>
                                </div>

                                <div className="text-md">
                                    <h1 className="font-bold">
                                        My Site
                                    </h1>
                                    <div className="mt-4 font-light">
                                        <div>This is my personal site to show off what I've been up
                                            to! Click the github icon to see the source code for this project.
                                        </div>
                                    </div>

                                    <div className="mt-6 mb-4 font-light">Built with Next.js, Javascript, Tailwind</div>
                                    <GithubLink fill="white" href={"https://github.com/J-L-C/my-site"}/>
                                </div>
                            </div>

                            {/*under construction*/}
                            <div className="mb-10 grid grid-cols-2 text-white bg-[#3B60E4] p-4">
                                <div>
                                    <Image
                                        className="float-start"
                                        width="250" height="500" src="/under-construction.png"
                                        alt="Picture of my under construction site I made as a placeholder for this site."/>
                                </div>

                                <div className="text-md">
                                    <h1 className="font-bold">
                                        Under Construction
                                    </h1>
                                    <div className="mt-4 font-light">
                                        A site I built as a placeholder for my main site while I was still working
                                        on version 1.
                                    </div>

                                    <div className="mt-6 mb-4 font-light">Built with Next.js, Javascript, Tailwind</div>
                                    <GithubLink fill="white" href={"https://github.com/J-L-C/under-construction"}/>
                                </div>
                            </div>


                            {/*price tracker*/}
                            <div className="mb-10 grid grid-cols-2 text-white bg-[#3B60E4] p-4">
                                <div>
                                    <Image
                                        className="float-start"
                                        width="250" height="500" src="/price-tracker-code.png"
                                        alt="Generic picture of code displayed on a screen with a black background and colorful IDE text highlights."/>
                                </div>

                                <div className="text-md">
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

                                    <div className="mt-6 mb-4 font-light">Built with Node.js, Javascript, MongoDB</div>
                                    <GithubLink fill="white" href={"https://github.com/J-L-C/price-tracker"}/>
                                </div>
                            </div>

                            {/*lego 3d model*/}
                            <div className="mb-10 grid grid-cols-2 text-white bg-[#3B60E4] p-4">
                                <div>
                                    <Image
                                        className="float-start"
                                        width="250" height="500" src="/jumpingLego.png"
                                        alt="Picture of a 3D model of a lego person mid jump"/>
                                </div>

                                <div className="text-md">
                                    <h1 className="font-bold">
                                        3D Model - Lego
                                    </h1>
                                    <div>
                                        <div className="mt-4 font-light">
                                            My first attempt at making a 3D model in Blender following a very
                                            detailed tutorial! Had a ton of fun making this!
                                        </div>

                                        <div className="mt-6 mb-4 font-light">Built with Blender</div>
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