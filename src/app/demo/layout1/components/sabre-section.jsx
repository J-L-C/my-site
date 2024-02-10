"use client"
import SabreLogo from "@/app/demo/layout1/logos/sabre-logo";
import {useEffect} from "react";

export default function SabreSection({className}) {

    let sabreLogo;
    let animateElements;

    useEffect(()=>{
        sabreLogo = document.getElementById("sabreLogo")
        animateElements = sabreLogo.querySelectorAll("animate");
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
                <SabreLogo
                    onClick={onClick}
                    className="sm:w-96 w-32 stride mt-4"
                    width="400"
                    height="150"
                />
            </div>
            <div className="text-white bg-fuchsia-600">
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
    </>);
}