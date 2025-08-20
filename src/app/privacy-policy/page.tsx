import Link from 'next/link'
import Image from 'next/image'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/">
                <Image src="/logo.svg" alt="Kolency" width={120} height={32} className="h-8 w-auto" />
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-gray-600">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                Kolency (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our social media collaboration platform and related services (collectively, the &quot;Service&quot;).
              </p>
              <p className="text-gray-700">
                By using our Service, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Personal Information</h3>
              <p className="text-gray-700 mb-4">We may collect the following personal information:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Name and email address when you create an account</li>
                <li>Profile information and preferences</li>
                <li>Payment information (processed securely through third-party providers)</li>
                <li>Communication preferences and settings</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Social Media Account Information</h3>
              <p className="text-gray-700 mb-4">When you connect your social media accounts, we may collect:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Account usernames and public profile information</li>
                <li>Access tokens (stored securely and encrypted)</li>
                <li>Content you choose to publish through our platform</li>
                <li>Analytics and engagement data from your social media accounts</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.3 Usage Information</h3>
              <p className="text-gray-700 mb-4">We automatically collect certain information about your use of our Service:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Log data (IP address, browser type, pages visited, time spent)</li>
                <li>Device information (device type, operating system)</li>
                <li>Usage patterns and feature interactions</li>
                <li>Error reports and performance data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use the collected information for the following purposes:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Provide, maintain, and improve our Service</li>
                <li>Process and manage your account and subscriptions</li>
                <li>Connect to and manage your social media accounts</li>
                <li>Schedule and publish content on your behalf</li>
                <li>Provide analytics and insights about your social media performance</li>
                <li>Send you service-related communications and updates</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Detect and prevent fraud, abuse, and security threats</li>
                <li>Comply with legal obligations and enforce our terms</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-4">We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 Service Providers</h3>
              <p className="text-gray-700 mb-4">We may share information with trusted third-party service providers who assist us in:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Payment processing and billing</li>
                <li>Cloud hosting and infrastructure</li>
                <li>Analytics and monitoring services</li>
                <li>Customer support and communication tools</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 Social Media Platforms</h3>
              <p className="text-gray-700 mb-4">When you use our Service to publish content, we share the necessary information with the respective social media platforms (Facebook, Instagram, Twitter, LinkedIn, etc.) to:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Authenticate your accounts</li>
                <li>Publish content on your behalf</li>
                <li>Retrieve analytics and engagement data</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.3 Legal Requirements</h3>
              <p className="text-gray-700 mb-4">We may disclose your information if required by law or in response to:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Valid legal requests or court orders</li>
                <li>Government investigations</li>
                <li>Protection of our rights, property, or safety</li>
                <li>Prevention of fraud or security threats</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
              <p className="text-gray-700 mb-4">We implement appropriate technical and organizational measures to protect your information:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Secure authentication and access controls</li>
                <li>Regular security assessments and updates</li>
                <li>Employee training on data protection</li>
                <li>Incident response and breach notification procedures</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 mb-4">We use cookies and similar tracking technologies to improve user experience, analyze usage, and deliver relevant content. You can manage your cookie preferences through your browser settings.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Third-Party Integrations</h2>
              <p className="text-gray-700 mb-4">Our Service integrates with third-party social media platforms. Your use of these integrations is subject to the privacy policies and terms of the respective platforms.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Your Rights and Choices</h2>
              <p className="text-gray-700 mb-4">You have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Access:</strong> Request a copy of your personal information</li>
                <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Restriction:</strong> Limit how we process your information</li>
                <li><strong>Objection:</strong> Object to certain processing activities</li>
              </ul>
              <p className="text-gray-700 mb-4">To exercise these rights, please contact us at privacy@kolency.com</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Data Retention</h2>
              <p className="text-gray-700 mb-4">We retain your information for as long as necessary to:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Provide our Service to you</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes and enforce agreements</li>
                <li>Improve our Service and develop new features</li>
              </ul>
              <p className="text-gray-700">When you delete your account, we will delete or anonymize your personal information within 30 days, except where retention is required by law.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. International Data Transfers</h2>
              <p className="text-gray-700 mb-4">Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers, including:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Standard contractual clauses</li>
                <li>Adequacy decisions</li>
                <li>Other appropriate safeguards as required by law</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Jurisdiction and Applicable Law</h2>
              <p className="text-gray-700 mb-4">This Privacy Policy is governed by the laws of Indonesia. If you are located in the EU/EEA, we process your data in compliance with GDPR.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Children&apos;s Privacy</h2>
              <p className="text-gray-700 mb-4">Our Service is not directed to children under the age of 13 (or the minimum age of digital consent in your jurisdiction). We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 mb-4">We may update this Privacy Policy from time to time. We will notify you of any changes by:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Posting the new Privacy Policy on this page</li>
                <li>Sending you an email notification</li>
                <li>Displaying a notice in our Service</li>
              </ul>
              <p className="text-gray-700">Your continued use of our Service after any changes constitutes acceptance of the updated Privacy Policy.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Contact Us</h2>
              <p className="text-gray-700 mb-4">If you have any questions about this Privacy Policy or our data practices, please <Link href="/contact" className="text-blue-600 hover:text-blue-800 underline">contact us</Link>.</p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link href="/" className="text-blue-600 hover:text-blue-800 transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 