import Author from "@/components/Author";
import { AnimatedContainer } from "@/components/Containers";

export default function RelatedAgreements() {
    return (
        <>
            <AnimatedContainer>
                <div className="max-w-3xl p-0 md:py-6 space-y-8 text-gray-800 pb-8">
                <section className="space-y-8">
                <h1 className="font-bold text-red-600 mb-4">Related Agreements</h1>
                <Author author="Rean Coyacot" lastEdited="Feb 5 2025 12:04 AM"></Author>
                <p className="text-gray-700 mb-4">
                    The Adobe Software License Agreement outlines the terms and conditions for using Adobe software. However, certain conditions allow additional agreements to supplement or modify these terms:
                </p>
                
                <div className="mb-6">
                    <h3 className="font-semibold text-red-600">Volume License Agreements</h3>
                    <p className="text-gray-700">Businesses, educational institutions, and government agencies can obtain volume licensing programs that may override specific terms in the standard license.</p>
                    <ul className="list-disc pl-6 text-gray-600">
                    <li>Allows broader usage rights and multiple installations.</li>
                    <li>Provides centralized management for licensed software.</li>
                    </ul>
                    <blockquote className="border-l-4 border-red-600 pl-4 mt-2 text-gray-500 italic">
                    "Customer may have another written agreement directly with Adobe (e.g., a volume license agreement) that supplements or supersedes all or portions of this agreement." (Page 1)
                    </blockquote>
                </div>
                
                <div className="mb-6">
                    <h3 className="font-semibold text-red-600">Membership and Subscription Agreements</h3>
                    <p className="text-gray-700">Adobe Creative Cloud and other subscription-based services include additional membership agreements defining:</p>
                    <ul className="list-disc pl-6 text-gray-600">
                    <li>Subscription duration and renewal policies.</li>
                    <li>License restrictions on cloud-based software.</li>
                    <li>Requirements for periodic online validation.</li>
                    </ul>
                    <blockquote className="border-l-4 border-red-600 pl-4 mt-2 text-gray-500 italic">
                    "Ongoing access to a Subscription Edition requires: (a) a recurring Internet connection to activate, renew, and validate the license..." (Section 2.1.2.3)
                    </blockquote>
                </div>
                
                <div className="mb-6">
                    <h3 className="font-semibold text-red-600">Third-Party Agreements</h3>
                    <p className="text-gray-700">Adobe software may include third-party components like fonts, stock images, and plug-ins. Users must comply with their respective agreements.</p>
                    <blockquote className="border-l-4 border-red-600 pl-4 mt-2 text-gray-500 italic">
                    "Use of some Adobe and some non-Adobe materials and services included in or accessed through the Software may be subject to additional terms and conditions." (Page 1)
                    </blockquote>
                </div>
                
                <div className="mb-6">
                    <h3 className="font-semibold text-red-600">Online Service Terms</h3>
                    <p className="text-gray-700">Cloud-based services such as Acrobat Sign, Adobe Fonts, and Adobe Stock have separate terms of use and privacy policies.</p>
                    <ul className="list-disc pl-6 text-gray-600">
                    <li>May require activation or Adobe ID registration.</li>
                    <li>May involve additional fees.</li>
                    <li>Governed by the Adobe Privacy Policy and Terms of Use.</li>
                    </ul>
                    <blockquote className="border-l-4 border-red-600 pl-4 mt-2 text-gray-500 italic">
                    "When the Software accesses an Adobe Online Service, Customer’s use of such Adobe Online Service is governed by the Adobe Privacy Policy." (Section 16.4.1)
                    </blockquote>
                </div>
                </section>
                </div>

            </AnimatedContainer>
        </>
    );
}