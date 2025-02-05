import Author from "@/components/Author";
import { AnimatedContainer } from "@/components/Containers";

export default function Restrictions() {
    return (
        <>
            <AnimatedContainer>
                <div className="max-w-3xl p-0 md:py-6 space-y-8 text-gray-800 pb-8">     
                <section className="space-y-5">
                    <h1 className="font-bold text-red-600" id="restrictions-of-usage">Restrictions of Usage</h1>
                    <Author author="Derrick Angelo Yu" lastEdited="Feb 4 2025 11:13 PM"></Author>

                    {/* Restrictions of Usage */}
                    <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                        <li>
                        <span className="font-semibold">Proprietary Notices:</span> Copies must retain all copyright and proprietary notices.
                        </li>
                        <li>
                        <span className="font-semibold">Use Obligations:</span> Software must only be used as permitted by the agreement and its documentation.
                        </li>
                        <li>
                        <span className="font-semibold">No Modifications:</span> Modifying, porting, adapting, or translating the software is prohibited unless explicitly allowed.
                        </li>
                        <li>
                        <span className="font-semibold">No Reverse Engineering:</span> Decompiling, disassembling, or attempting to discover the source code is not allowed (except under specific circumstances).
                        </li>
                        <li>
                        <span className="font-semibold">No Unbundling:</span> The software must be used as a single product; its components cannot be separated for use on different devices.
                        </li>
                        <li>
                        <span className="font-semibold">No Transfer:</span> Users cannot rent, lease, sell, sublicense, or transfer the software except under strict conditions.
                        </li>
                        <li>
                        <span className="font-semibold">No Service Bureau Use:</span> Using the software to provide services to others is prohibited.
                        </li>
                        <li>
                        <span className="font-semibold">Adobe Runtime Restrictions:</span> Adobe Runtimes cannot be used on non-PC devices or embedded systems.
                        </li>
                        <li>
                        <span className="font-semibold">Territory Restriction:</span> The software and online services must only be used in permitted regions.
                        </li>
                    </ul>
                    </section>
                </div>

            </AnimatedContainer>
        </>
    );
}