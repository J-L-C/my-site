"use client"
import SabreLogo from "@/app/home/logos/sabre-logo";
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
            <div className="sm:mx-[23%] mx-[20%]">
                <SabreLogo
                    onClick={onClick}
                    className="sm:w-96 w-72 mt-4"
                    width="400"
                    height="150"
                />
            </div>
            <div className="text-white p-8 text-justify bg-[#0752ba]">
                <div className="text-center -mt-4 mb-4 text-gray-300 text-sm">[ 10/2014 - 07/2017 ]</div>
                <p>
                    It was here that I began to build my technical skills. Though I enjoyed the work of a Business
                    Analyst
                    I really had my heart set on being more technical and writing applications instead. At Sabre,
                    I was challenged with building test automation for the Sabre system and for Sabre&apos;s web services.
                    The most exciting project I worked on was the AA/US Airways data migrations. Using Jmeter and Java,
                    I was able to validate large volumes of data, accessed through the Sabre system. Developers and
                    other
                    QAs used the reports I generated to find bugs and ensure a clean data migration when we went to
                    production.
                </p>
                <div className="mt-8 text-center">
                    <h3 className="font-extrabold mb-4">Tech / Skills</h3>
                    <div>
                        JMeter &#9679; Scripting &#9679; QTP &#9679; Java &#9679; SOATest (Soap Services)
                    </div>
                </div>
            </div>
        </div>
    </>);
}