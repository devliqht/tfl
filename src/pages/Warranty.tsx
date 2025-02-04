import Author from "@/components/Author";
import { AnimatedContainer } from "@/components/Containers";

export default function Warranty() {
    return (
        <>
            <AnimatedContainer>
                <div className="max-w-3xl p-0 md:py-6 space-y-8 text-gray-800 pb-8">
                <section className="space-y-6">
                <h1 className="font-bold text-red-600 mb-4">Warranty and Disclaimer</h1>
                <Author author="Jeane Eritch Diputado" lastEdited="Feb 4 2025 11:18 PM" />
                <div className="mb-6">
                    <h2 className="font-semibold text-red-600">1. Limited Warranty</h2>
                    <h3 className="font-semibold text-gray-700 mt-4">Scope of Warranty</h3>
                    <ul className="list-disc list-inside text-gray-600">
                    <li>Adobe guarantees that the software will function as described in the user manual.</li>
                    <li>Warranty lasts for 90 days or the License Term, whichever is shorter.</li>
                    <li>Minor variations in performance from the manual do not count as a warranty breach.</li>
                    </ul>
                    <p className="text-gray-500 italic mt-2">Citation: Section 6</p>
                    
                    <h3 className="font-semibold text-gray-700 mt-4">Exclusions from Warranty</h3>
                    <p className="text-gray-600">Warranty does not apply to:</p>
                    <ul className="list-disc list-inside text-gray-600">
                    <li>Patches</li>
                    <li>Font software</li>
                    <li>Pre-release, trial, evaluation, and not-for-resale copies</li>
                    <li>Adobe and third-party online services</li>
                    <li>Free software downloaded from Adobe’s website</li>
                    </ul>
                    <p className="text-gray-500 italic mt-2">Citation: Section 6</p>
                </div>
                
                <div className="mb-6">
                    <h2 className="font-semibold text-red-600">2. Warranty Disclaimer</h2>
                    <h3 className="font-semibold text-gray-700 mt-4">Limits on Adobe’s Liability</h3>
                    <p className="text-gray-600">Adobe provides warranties only as stated in Section 6, disclaims all others including:</p>
                    <ul className="list-disc list-inside text-gray-600">
                    <li>Performance guarantees</li>
                    <li>Security assurances</li>
                    <li>Non-infringement of third-party rights</li>
                    <li>Merchantability and fitness for a particular purpose</li>
                    <li>Quiet enjoyment and satisfactory quality</li>
                    </ul>
                    <p className="text-gray-500 italic mt-2">Citation: Section 7</p>
                    
                    <h3 className="font-semibold text-gray-700 mt-4">"As-Is" Clause</h3>
                    <p className="text-gray-600">The software and online services are provided "as-is" and with all faults, meaning users assume all risks.</p>
                    <p className="text-gray-500 italic mt-2">Citation: Section 7</p>
                </div>
                
                <div className="mb-6">
                    <h2 className="font-semibold text-red-600">3. Jurisdictional Limitations</h2>
                    <p className="text-gray-600">Some regions do not allow full warranty disclaimers, and local laws may provide users with additional rights.</p>
                    <p className="text-gray-500 italic mt-2">Citation: Section 7</p>
                </div>
                
                <div className="bg-gray-100 rounded-lg mt-6">
                    <h2 className="font-semibold text-gray-800">Conclusion</h2>
                    <p className="text-gray-600">Adobe provides only a limited warranty for purchased software, valid for a short period (90 days or less).</p>
                    <p className="text-gray-600">Most software versions (trials, patches, online services, free downloads) come with NO warranty and are provided "as-is."</p>
                    <p className="text-gray-600">Adobe limits its liability for issues like security, performance, or fitness for purpose.</p>
                    <p className="text-gray-600">Depending on local laws, users may have additional rights that override Adobe’s disclaimers.</p>
                </div>
                </section>
                </div>

            </AnimatedContainer>
        </>
    );
}