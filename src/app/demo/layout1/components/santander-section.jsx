"use client"
import SantanderUsaLogo from "@/app/demo/layout1/logos/santander-usa-logo";
import {useEffect} from "react";

export default function SantanderSection({className}) {

    let santanderLogo;
    let animateElements;

    useEffect(()=>{
        santanderLogo = document.getElementById("santanderLogo")
        animateElements = santanderLogo.querySelectorAll("animateTransform");
    },[])

    const onClick = ()=>{

        animateElements.forEach((element) => {
            element.beginElement()
        });

    }

    return (<>
        <div>
            <div className="sm:mx-[15%] mx-[33%]">
                <SantanderUsaLogo
                    onClick={onClick}
                    className="sm:w-96 w-32 stride mt-4"
                    width="400"
                    height="150"
                />
            </div>
            <div className="text-white bg-green-600">
                <p>
                    I worked closely with the Product Owner and Project Manager to create user
                    stories,
                    assist
                    developers on design, and to keep team the team in sync with the needs of the
                    business.
                </p>
            </div>
        </div>
    </>);
}