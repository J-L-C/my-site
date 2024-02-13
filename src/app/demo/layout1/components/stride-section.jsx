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
            <div className="sm:mx-[23%] mx-[17%]">
                <StrideLogo
                    click={onClick}
                    className="sm:w-96 w-72 mt-4 sm:mr-0 mr-8"
                    width="400"
                    height="150"
                />
            </div>

            <div className="text-white p-8 text-justify bg-[#107bd0]">
                <div className="text-center -mt-4 mb-4 text-gray-300 text-sm">[ 03/2023 - 01/2024 ]</div>
                <p>
                    Stride is an experience I won't forget! It had the culture and people that I really
                    look for in a company, a company driven by XP principles and a feedback rich culture.
                    At My first client, me and an other engineer, dove deep into our client's systems learning everything we could.
                    We wanted to make sure the work we did would equip our client with the tools and insight needed to migrate to a new system.
                    To that end we delivered well documented insights, migration scripts, and a flexible, extensible test
                    harness to measure DBMS performance across multiple DBMS solutions including their current solution.
                    After that rewarding experience, I join another incredible team where we built a web app for
                    teachers and coaches to extend and strengthen their understanding of effective classroom interactions
                    through classroom observation. I was particular inspired by this work as I knew that it would better
                    the lives of so many people!
                </p>
                <div className="mt-8 text-center">
                    <h3 className="font-extrabold mb-4">Tech / Skills</h3>
                    <div className="">
                    React &#9679; Typescript &#9679; Ruby on Rails &#9679; TDD &#9679; XP &#9679; Pair Programming &#9679; Tailwind &#9679; CSS &#9679; Data Modeling &#9679; Route 66 (Cloud Services) &#9679; Postgres &#9679; MariaDB &#9679; SQL &#9679; Java
                    </div>
                </div>
            </div>
        </div>
    </>);
}