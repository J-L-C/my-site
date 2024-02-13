import StrideSection from "@/app/demo/layout1/components/stride-section";
import ImprovingSection from "@/app/demo/layout1/components/improving-section";
import JpmcSection from "@/app/demo/layout1/components/jpmc-section";
import CognizantSection from "@/app/demo/layout1/components/cognizant-section";
import AllstateSection from "@/app/demo/layout1/components/allstate-section";
import SabreSection from "@/app/demo/layout1/components/sabre-section";
import SantanderSection from "@/app/demo/layout1/components/santander-section";
import AaSection from "@/app/demo/layout1/components/aa-section";
import SectionHeading from "@/app/demo/layout1/components/section-heading";

export default function CareerJourney({className}) {

    return(<>
        <div className={className}>
            <SectionHeading text="Career Journey"/>
            <div>

                <StrideSection/>

                <ImprovingSection/>

                <JpmcSection/>

                <AaSection/>

                <CognizantSection/>

                <AllstateSection/>

                <SabreSection/>

                <SantanderSection/>

            </div>
        </div>
    </>)
}