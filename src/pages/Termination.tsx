import Author from "@/components/Author";
import { AnimatedContainer } from "@/components/Containers";

export default function Termination() {
    return (
        <>
            <AnimatedContainer>
                <div className="max-w-3xl p-0 md:py-6 space-y-8 text-gray-800 pb-8">     
                <section className="space-y-5" id="copyright-infringement">
                <h1 className="text-red-600 font-bold">
                        License Term and Termination
                    </h1>
                    <Author author="Jhanell Mingo" lastEdited="Feb 5 2025 12:09 AM" />  
                    <div className="space-y-6">
                        <div>
                        <h2 className="font-semibold text-red-600">License Duration</h2>
                        <p>
                            Section 2.1.1 states: <strong>“Unless otherwise defined, License Term shall be perpetual.”</strong> 
                            This means the license remains valid as long as users comply with terms and payments. 
                            However, <strong>“the software may cease to operate without prior notice upon expiration or termination of the license term.”</strong>
                        </p>
                        </div>

                        <div>
                        <h3 className="font-semibold">Subscription Edition (Section 2.1.2.3)</h3>
                        <p>
                            For subscription-based software, ongoing access requires:
                        </p>
                        <ul className="list-disc pl-6">
                            <li>A recurring internet connection for activation, renewal, and validation.</li>
                            <li>Successful receipt of recurring subscription payments.</li>
                            <li>Agreement to additional subscription terms.</li>
                        </ul>
                        <p>
                            If Adobe cannot validate the license or receive payment, the software may become inactive without prior notice.
                        </p>
                        </div>

                        <div>
                        <h3 className="font-semibold">Membership-Based License (Section 2.2.2)</h3>
                        <p>
                            Similar to the Subscription Edition, membership-based licenses remain valid as long as payments and compliance are maintained. 
                            Access is granted:
                        </p>
                        <ul className="list-disc pl-6">
                            <li>Within the specified territory.</li>
                            <li>While the membership remains active.</li>
                            <li>Following all terms outlined in the Agreement.</li>
                        </ul>
                        <p>
                            Upon expiration, some or all software functions may stop working unless the membership is renewed.
                        </p>
                        </div>

                        <div>
                        <h2 className="font-semibold text-red-600">Termination Conditions</h2>
                        <p>Adobe may terminate licenses under the following circumstances:</p>
                        <ul className="list-disc pl-6">
                            <li>
                            <strong>Territory Violation (Section 4.9):</strong> If the software is used outside the allowed region.
                            </li>
                            <li>
                            <strong>Unauthorized Use (Sections 14.2 & 14.3):</strong> If fraudulent or unauthorized usage is detected.
                            </li>
                            <li>
                            <strong>Post-Termination Restrictions (Section 7):</strong> Warranty and liability clauses may survive termination, 
                            but usage rights do not extend beyond termination.
                            </li>
                            <li>
                            <strong>Software Transfer Limits (Sections 4.6.3 & 4.7):</strong> Permanent transfer rights may be revoked if Adobe grants an exception for activation requirements.
                            </li>
                        </ul>
                        </div>
                    </div>
                    </section>
                </div>

            </AnimatedContainer>
        </>
    );
}