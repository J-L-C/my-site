"use client"
import AALogo from "@/app/home/logos/aa-logo";
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
            <div className="mb-8 sm:mx-[23%] mx-[27%]">
                <AALogo
                    onClick={onClick}
                    className="sm:w-96 w-48 mt-4"
                    width="400"
                    height="150"
                />
            </div>
            <div className="text-white p-8 text-justify bg-[#0b67c5]">
                <div className="text-center -mt-4 mb-4 text-gray-300 text-sm">[ 12/2019 - 04/2020 ]</div>
                <p>
                    The travel industry pulled me back in when I join American Airlines. In my short time here, I worked
                    to migrate some of there services over to Sabre Web Services and contributed to breaking their
                    monolith
                    in to microservices. As COVID hit, I decided I should find an industry that would be better equipped
                    to weather the pandemic and so I said goodbye.
                </p>
                <div className="mt-8 text-center">
                    <h3 className="font-extrabold mb-4">Tech / Skills</h3>
                    <div>
                        Java &#9679; Spring Boot &#9679; Sabre Web Services &#9679; IBM Cloud: PCF
                    </div>
                </div>
            </div>
        </div>
    </>);
}