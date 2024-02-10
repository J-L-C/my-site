"use client"
import JpmcLogo from "@/app/demo/layout1/logos/jpmc-logo";
import {useEffect} from "react";

export default function JpmcSection({className}) {

    let jpmcLogo;
    let animateElements;

    useEffect(()=>{
        jpmcLogo = document.getElementById("jpmcLogo")
        animateElements = jpmcLogo.querySelectorAll("animate");
    },[])

    const onClick = ()=>{

        animateElements.forEach((element) => {
            element.beginElement()

        });

    }

    return (<>
        <div className="mt-16">
            <div className="sm:mx-[20%] mx-[35%]">
                <JpmcLogo
                    click={onClick}
                    className="sm:w-96 w-32 stride mt-4"
                    width="400"
                    height="150"
                />
            </div>
            <div className="text-white bg-blue-900">
                <p>
                    Collaborated with frontend team to develop RESTful APIs for J.P Morgan Chase
                    Advisor\'s tool that onboards clients and updates client financial allotments based on the
                    products J.P Morgan Chase offers
                    Designed algorithm for fetching and constructing asset allocation data to show the client
                    a high-level breakdown of the makeup of their portfolio
                </p>
            </div>
        </div>
    </>);
}