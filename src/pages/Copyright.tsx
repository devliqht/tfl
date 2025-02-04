import Author from "@/components/Author";
import { AnimatedContainer } from "@/components/Containers";

export default function Copyright() {
    return (
        <>
            <AnimatedContainer>
                <div className="max-w-3xl p-0 md:py-6 space-y-8 text-gray-800 pb-8">
                    
                <section className="space-y-5" id="copyright-infringement">
                    <h2 className="text-4xl font-bold text-red-600">Copyright Infringement</h2>
                    <Author author="Simon Gabriel Gementiza" lastEdited="Feb 4 2025 10:52 PM"></Author>
                    {/* Intellectual Property Ownership */}
                    <h3 className="text-2xl font-semibold" id="intellectual-property-ownership">
                        Section 3 - Intellectual Property Ownership
                    </h3>
                    <p className="text-lg text-gray-700">
                        Adobe retains all intellectual property rights to the software, including its structure, organization, and source
                        code. These are protected under copyright laws, and users do not acquire any ownership rights beyond what is
                        explicitly granted in the agreement.
                    </p>

                    {/* Restrictions and Requirements */}
                    <h3 className="text-2xl font-semibold" id="restrictions-and-requirements">
                        Section 4 - Restrictions and Requirements
                    </h3>
                    <p className="text-lg text-gray-700">
                        This section outlines various prohibitions to prevent copyright violations. Users are generally prohibited from
                        modifying, reverse engineering, or selling/leasing the software. Violating these conditions can lead to severe legal
                        consequences.
                    </p>

                    {/* Additional Copyright-Related Provisions */}
                    <h3 className="text-2xl font-semibold" id="additional-copyright-provisions">
                        Section 16.1.3 - Additional Copyright-Related Provisions
                    </h3>
                    <p className="text-lg text-gray-700">
                        Decompilation for interoperability reasons may be permitted under EU legislation but only after Adobe has been
                        requested to provide relevant data. Additionally, Section 16.6-Font Software restricts specific font usage, and
                        Sections 16.14 and 16.15 outline licensing terms for AVC and MPEG-2 encoding/decoding, allowing them only for
                        personal, non-commercial use.
                    </p>

                    <p className="text-lg text-gray-700">
                        Any unlawful use or distribution of these technologies may constitute copyright infringement. Adobe enforces strict
                        control over its software to ensure compliance with legal and contractual restrictions.
                    </p>

                    {/* Restrictions of Usage */}
                    <h3 className="text-2xl font-semibold" id="restrictions-of-usage">Restrictions of Usage</h3>
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