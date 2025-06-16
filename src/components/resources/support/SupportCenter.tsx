
import { Button } from "@/components/ui/button";
import AboveFooter from "@/components/AboveFooter";
import SupportSection from "@/components/resources/support/SupportSection";
import SupportFaqs from "@/components/resources/support/SupportFaqs";
import MoreHelp from "./MoreHelp";
const SupportCenter = () => {
    return (
        <div className="flex flex-col min-h-screen">
			
			<main className="flex-grow">
				<div className="max-w-7xl mx-auto py-8 px-4">


                    {/* Support Center hero section */}
                    <div className="flex flex-col md:flex-row justify-center items-center mb-4 gap-12">
                        <div className="flex flex-col justify-between md:w-1/2 lg:p-4 gap-4 lg:gap-8">
                            <h3 className="text-4xl font-semibold lg:w-3/4 leading-normal">Welcome to the TrackStaff Support Center</h3>
                            <p className="text-gray-600 text-lg">Find quick answers, helpful guides, and personalized support.</p>
                            <div className="flex flex-wrap md:flex-nowrap gap-3 lg:gap-6 justify-center items-center md:justify-start lg:w-5/6">
                                <div className="w-auto">
                                <Button className="bg-track hover:bg-track-dark text-white text-xl lg:text-2xl rounded-lg md:py-6 lg:py-7 w-44 lg:w-52 border border-track">
                                    Get Started 
                                    
                                </Button></div>
                                <div className="w-auto">
                                <Button className="text-track bg-white border border-track hover:bg-track hover:text-white rounded-lg md:py-6 lg:py-7 text-xl lg:text-2xl w-full">
                                   Try Our Demo 
                                    
                                </Button></div>
                            </div>
                        </div>
                        <div className="md:w-1/2 md:p-4">
                            <img src="../img/faq.jpeg" alt="" className="rounded-3xl" />
                        </div>
                    </div>

                    {/* Support Center section */}
                    <SupportSection />
                    <SupportFaqs />
                    <MoreHelp />
                    

                </div>
            <AboveFooter />
            </main>
        </div>
    )
};


export default SupportCenter