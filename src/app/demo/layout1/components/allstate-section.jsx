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
            <div className="text-white bg-pink-500">
                <p>
                    Delivered a full stack web app for adjusters to submit work orders to outside
                    vendors that are partnered with Allstate. This made it easier for adjusters to manage their
                    work orders, simplified who Allstate partnered with, and reduced costs through negotiated
                    rates between approved vendors and Allstate.
                    To simplify how claim data is used by our teams, we built a web API for
                    fetching it from the central database. This simplified the on-boarding process for claim data and
                    streamlined the types of queries sent to the database.
                    Fostered XP collaborative culture by engaging in XP ceremonies, practicing Paired
                    Programming, and TDD
                </p>
            </div>
        </div>
    </>);
}