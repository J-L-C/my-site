"use client"
import AALogo from "@/app/demo/layout1/logos/aa-logo";
import {useEffect} from "react";

export default function AaSection({className}) {

    let aaLogo;
    let animateElements;

    useEffect(()=>{
        aaLogo = document.getElementById("aaLogo")
        animateElements = aaLogo.querySelectorAll("animate");
    },[])

    const onClick = ()=>{
        animateElements.forEach((element) => {
            element.beginElement()
        });

    }
    return (<>
        <div className="">
            <div className="mb-8 sm:mx-[23%] mx-[35%]">
                <AALogo
                    onClick={onClick}
                    className="sm:w-96 w-32 stride mt-4"
                    width="400"
                    height="150"
                />
            </div>
            <div className="text-white bg-indigo-600">
                <p>
                    Worked on transforming AA.com legacy monolith into a micro services: using TDD
                    principles and practices in a Paired Programming environment
                </p>
            </div>
        </div>
    </>);
}