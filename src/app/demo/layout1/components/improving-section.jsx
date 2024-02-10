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
            <div className="w-64 mx-[23%]">
                <ImprovingLogo
                    click={onClick}
                    className="mb-12"
                    width="400"
                    height="150"
                />
            </div>
            <div className="text-white p-8 text-justify bg-red-600">
                <p>
                    Client: ‘Publishing & Education Company’ - Delivered new features for their testing
                    center application, worked to reduce technical debt through upgrades and refactoring in
                    order to prepare their application for GraavlVM - Native Image deployment across multiple
                    Java/ Springboot services.
                    Client: ‘Publishing & Education Company’ - Finished phase 1 of a product that improved
                    the process for users who wanted to get started with building a certification exam,
                    moving from emails and spreadsheets to a user friendly online portal.
                </p>
            </div>
        </div>
    </>);
}