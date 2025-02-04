import { AnimatedContainer } from "@/components/Containers";
import Author from "@/components/Author";

export default function GrantOfLicense() {
    return (
        <>
            <AnimatedContainer>
                <div className="max-w-3xl p-0 md:py-6 space-y-8 text-gray-800 pb-8">
                    {/* Grant of License */}
                    <section className="space-y-4" id="grant-of-license">
                        <h3 className="relative flex items-center text-4xl md:text-5xl text-red-600 lexend-deca-700 tracking-tighter md:text-left w-full">
                            Grant of License
                            <span className="flex-grow h-[1px] bg-gray-600 ml-4"></span>
                        </h3>
                        <Author author="Jemuel Valencia" lastEdited="Feb 4 2025 9:43 PM"></Author>
                        <p className="text-lg">
                            The Grant of License in the Adobe Software License Agreement is covered under Section 2 and outlines the terms
                            under which the software may be used. Section 2.1 states that Adobe gives users a limited, non-exclusive
                            license to install and use the software within a specific region and for a set period (usually permanent unless
                            stated otherwise).
                        </p>
                        <p>
                            There are different types of licenses under Section 2.1.2, including <span className="font-semibold">Non-Serialized Software</span>
                            (for training or demo purposes), <span className="font-semibold">Evaluation Software</span> (for testing), and
                            <span className="font-semibold"> Subscription Editions</span> (which require ongoing payments and internet access).
                        </p>
                    </section>
                </div>

            </AnimatedContainer>
        </>
    );
}
