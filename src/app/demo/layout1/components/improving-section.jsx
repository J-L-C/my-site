"use client"
import ImprovingLogo from "@/app/demo/layout1/logos/improving-logo";
import {useEffect} from "react";

export default function ImprovingSection({className}) {

    let improvingLogo;
    let animateElements;

    useEffect(()=>{
        improvingLogo = document.getElementById("improvingLogo")
        animateElements = improvingLogo.querySelectorAll("animate");
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
            <div className="sm:mx-[23%] mx-[16%]">
                <ImprovingLogo
                    click={onClick}
                    className="mb-12 sm:w-96 w-64"
                    width="400"
                    height="150"
                />
            </div>
            <div className="text-white p-8 text-justify bg-[#0e74cd] ">
                <div className="text-center -mt-4 mb-4 text-gray-300 text-sm">[ 03/2021 - 02/2023 ]</div>
                <p>
                    Encouraged to try something new, I join Object Partners (Later bought by Improving). I started
                    consulting
                    for a Publishing & Education Company where I got to experience a new industry. I worked closely with
                    architects
                    within the company to upgrade and update their platform to be able to deploy their application as a
                    Native Image, something that was being cooked up over at Oracle. I also spent time building out
                    parts of their application to facilitate data dumps and getting that data from a testing center
                    to an internal developer who could use that snapshot to triage any defects found in production.
                </p>
                <div className="mt-8 text-center">
                    <h3 className="font-extrabold mb-4">Tech / Skills</h3>
                    <div>
                        Java &#9679; Spring Boot &#9679; GraalVM &#9679; JSP &#9679; Web Services &#9679; MariaDB
                    </div>
                </div>
            </div>
        </div>
    </>);
}