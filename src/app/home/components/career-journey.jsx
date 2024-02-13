import StrideSection from "@/app/home/components/stride-section";
import ImprovingSection from "@/app/home/components/improving-section";
import JpmcSection from "@/app/home/components/jpmc-section";
import CognizantSection from "@/app/home/components/cognizant-section";
import AllstateSection from "@/app/home/components/allstate-section";
import SabreSection from "@/app/home/components/sabre-section";
import SantanderSection from "@/app/home/components/santander-section";
import AaSection from "@/app/home/components/aa-section";
import SectionHeading from "@/app/home/components/section-heading";

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