"use client"
import StrideLogo from "@/app/demo/layout1/logos/stride-logo";
import {useEffect} from "react";


export default function StrideSection({className}) {

    let strideLogo;
    let animateElements;

    useEffect(()=>{
        strideLogo = document.getElementById("strideLogo")
        animateElements = strideLogo.querySelectorAll("animate");
    },[])
    const onClick = ()=>{

        animateElements.forEach((element) => {

                const offset = element.getAttribute("begin") === null ? 0 :
                    element.getAttribute("begin").replaceAll("s","");

                element.beginElementAt(Number(offset))

        });

    }

    return (<>
        <div>
            <div className="sm:mx-[23%] mx-[35%]">
                <StrideLogo
                    click={onClick}
                    className="paused sm:w-96 w-32 stride mt-4"
                    width="400"
                    height="150"
                />
            </div>

            <div className="text-white p-8 text-justify bg-blue-900">
                <p>
                    &nbsp;&nbsp;Client: ‘EdTech Company’ : Working closely with stakeholders, we built a web
                    app for teachers and coaches to extend and strengthen their understanding of effective
                    classroom interactions through classroom observation. We leveraged XP practices and
                    principles throughout the project: Pair Programming, TDD, Retros, etc.
                    <br/>
                    <br/>
                    Client: ‘Blockchain-Based Transaction Solution for Commercial Banking’. Dove deep
                    into their systems and engaged with multiple stakeholders, to deliver detailed
                    insights, scripts, and a flexible, extensible test harness to measure DBMS performance across
                    multiple DBMS solutions. We did this to set our client up for success in migrating their
                    existing single instance DBMS to a clustered DBMS solution while balancing considerations of
                    cost, performance, ease of adoption, and resiliency. Also, I paired daily with another
                    engineer as we built out the test harness, worked on migration scripts, spikes, and even
                    documentation.
                </p>
            </div>
        </div>
    </>);
}