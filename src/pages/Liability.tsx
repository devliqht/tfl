import Author from "@/components/Author";
import { AnimatedContainer } from "@/components/Containers";

export default function Liability() {
    return (
        <>
            <AnimatedContainer>
                <div className="max-w-3xl p-0 md:py-6 space-y-8 text-gray-800 pb-8">
                <section className="space-y-6">
                <h1 className="text-red-600 font-bold">Limitation of Liability</h1>
                <Author author="Cris Lawrence Lucero" lastEdited="Feb 5 2025 12:06 AM" />
                <div className="mt-4">
                    <h3 className="font-semibold text-red-600">Adobe, its affiliates, suppliers, and certificate authorities are not liable for:</h3>
                    <ul className="list-disc list-inside text-gray-600 mt-2">
                    <li>Consequential or indirect damages</li>
                    <li>Lost profits or savings</li>
                    <li>Business interruption damages</li>
                    <li>Personal injury</li>
                    <li>Failure to meet duty of care</li>
                    <li>Third-party claims</li>
                    </ul>
                </div>

                <div className="mt-4">
                    <h3 className="font-semibold text-gray-700">Maximum Liability:</h3>
                    <p className="text-gray-600">Adobe's total liability is limited to the amount paid for the software. This applies even for fundamental breaches.</p>
                </div>

                <div className="mt-4">
                    <h3 className="font-semibold text-gray-700">Exceptions:</h3>
                    <ul className="list-disc list-inside text-gray-600 mt-2">
                    <li>Death or personal injury caused by Adobe's negligence</li>
                    <li>Fraud (deceit)</li>
                    </ul>
                </div>

                <div className="mt-4">
                    <h3 className="font-semibold text-red-600">Legal Notes:</h3>
                    <p className="text-gray-600">These limitations apply as permitted by local law. Some jurisdictions may provide additional rights. Adobe acts on behalf of its affiliates/suppliers for disclaiming liability.</p>
                </div>
                </section>
                </div>

            </AnimatedContainer>
        </>
    );
}