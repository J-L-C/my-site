"use client"
import AllstateLogo from "@/app/demo/layout1/logos/allstate-logo";
import {useEffect} from "react";

export default function AllstateSection({className}) {

    let allstateLogo;
    let animateElements;

    useEffect(()=>{
        allstateLogo = document.getElementById("allstateLogo")
        animateElements = allstateLogo.querySelectorAll("animate");
    },[])

    const onClick = ()=>{

        animateElements.forEach((element) => {

            const offset = element.getAttribute("begin") === null ? 0 :
                element.getAttribute("begin").replaceAll("s","");

            element.beginElementAt(Number(offset))

        });

    }

    return (<>
        <div className="mt-16">
            <div className="sm:mx-[23%] mx-[35%]">
                <AllstateLogo
                    onClick={onClick}
                    className="sm:w-96 w-32 stride mt-4"
                    width="400"
                    height="150"
                />
            </div>
            <div className="text-white p-8 text-justify bg-pink-500">
                <div className="text-center -mt-4 mb-4 text-gray-300 text-sm">[ 07/2017 - 04/2019 ]</div>
                <p>
                    At Allstate, I was introduced to and felt inspired by Extreme Programming! Along with a group of
                    other
                    fresh engineers, Allstate invested in us and took us through a 3 month training program with
                    Galvanize.
                    From there, I worked with some amazing engineers and we built a product that made it easier to
                    access claim data for teams inside of Allstate. After that was launched, I was fortunate enough to
                    travel to
                    Norther Ireland to hand it off to the lab there. After that fortunate journey, I joined another team
                    to deliver
                    a product that streamlined how adjusters requested 3rd party services.
                </p>
                <div className="mt-8 text-center">
                    <h3 className="font-extrabold mb-4">Tech / Skills</h3>
                    <div>
                        Java &#9679; Spring Boot &#9679; Full Stack &#9679; React &#9679; CSS &#9679; Material
                        UI &#9679; System Design &#9679; Pivotal Cloud
                        Foundry &#9679; SQL
                    </div>
                </div>
            </div>
        </div>
    </>);
}