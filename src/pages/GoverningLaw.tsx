import Author from "@/components/Author";
import { AnimatedContainer } from "@/components/Containers";

export default function GoverningLaw() {
    return (
        <>
            <AnimatedContainer>
                <div className="max-w-3xl p-0 md:py-6 space-y-8 text-gray-800 pb-8">
                <section className="space-y-5">
                <h1 className="font-semibold text-red-600">Governing Law</h1>
                <Author author="Atheena Faith Arcena" lastEdited="Feb 5 2025 7:55 PM" />
                    <p>
                    The <strong>Adobe Software License Agreement</strong> outlines which laws and jurisdictions govern legal disputes, varying by customer location and whether the software is for personal or business use.
                    </p>

                    <h3 className="text-red-600">Consumers using the software for personal, non-business purposes:</h3>
                    <p>The agreement is governed by the laws of the jurisdiction where the license was purchased.</p>

                    <h3 className="text-red-600">Non-consumer customers using the software for business or commercial purposes:</h3>
                    <p>The agreement is governed by the substantive laws in force based on the customer's location when the license was obtained:</p>
                    <ul className="list-disc ml-6">
                    <li>
                        If the license is obtained in the <strong>United States, Canada, or Mexico</strong>, the laws of the State of California apply.
                    </li>
                    <li>
                        If the license is obtained in <strong>Japan</strong>, the laws of Japan apply.
                    </li>
                    <li>
                        If the license is obtained in a member state of the <strong>ASEAN, China (Mainland, Hong Kong, Macau), Taiwan, or South Korea</strong>, the laws of Singapore apply.
                    </li>
                    <li>
                        If the license is obtained in any other jurisdiction, the laws of <strong>England and Wales</strong> apply.
                    </li>
                    </ul>

                    <h3 className="text-red-600">Jurisdiction for legal disputes:</h3>
                    <ul className="list-disc ml-6">
                    <li>
                        If California law applies, the courts of <strong>Santa Clara County, California</strong>, have non-exclusive jurisdiction.
                    </li>
                    <li>
                        If Japanese law applies, the <strong>Tokyo District Court</strong> in Japan has non-exclusive jurisdiction.
                    </li>
                    <li>
                        If the law of England and Wales applies, the <strong>competent courts of London, England</strong>, have non-exclusive jurisdiction.
                    </li>
                    <li>
                        If Singapore law applies, disputes are resolved by <strong>arbitration in Singapore</strong> according to the Arbitration Rules of the Singapore International Arbitration Centre (SIAC).
                    </li>
                    </ul>

                    <h3 className="text-red-600">Additional Provisions:</h3>
                    <ul className="list-disc ml-6">
                    <li>
                        Adobe or the customer can request a judicial, administrative, or other authority to order provisional measures to protect rights or enforce specific terms.
                    </li>
                    <li>The agreement specifically excludes:</li>
                    <ul className="list-disc ml-10">
                        <li>The conflict of law rules of any jurisdiction.</li>
                        <li>The United Nations Convention on Contracts for the International Sale of Goods.</li>
                        <li>The Uniform Computer Information Transactions Act, as enacted in any jurisdiction.</li>
                    </ul>
                    </ul>
                    </section>
                </div>

            </AnimatedContainer>
        </>
    );
}