"use client"
import CognizantLogo from "@/app/demo/layout1/logos/cognizant-logo";
import {useEffect} from "react";

export default function CognizantSection({className}) {

    let cognizantLogo;
    let animateElements;
    let animateTransformElements;

    useEffect(()=>{
        cognizantLogo = document.getElementById("cognizantLogo")
        animateElements = cognizantLogo.querySelectorAll("animate");
        animateTransformElements = cognizantLogo.querySelectorAll("animateTransform");
    },[])

    const onClick = ()=>{

        animateElements.forEach((element) => {
            element.beginElement()
        });

        animateTransformElements.forEach((element) => {
            element.beginElement()
        });

    }
    return (<>
        <div>
            <div className="sm:mx-[23%] mx-[35%]">
                <CognizantLogo
                    onClick={onClick}
                    className="sm:w-96 w-32 stride mt-12 -mb-12"
                    width="400"
                    height="150"
                />
            </div>
            <div className="text-white bg-amber-500">
                <p>
                    Lead a small team to build an internal facing application for rapid
                    prototyping, leveraging Maven Archetypes to generate code, Azure and GitLab APIs to create
                    repositories with the generated code, and Concourse pipelines orchestrate it all.
                    Client: “Consumer Products” - Built a web app to manage research documents and
                    provide access controls to those documents including designing the initial email
                    notification system, for approvals, view requests, etc.
                </p>
            </div>

        </div>
    </>);
}