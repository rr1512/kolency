import Link from 'next/link'
import Image from 'next/image'

export default function TermsOfService() {
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-gray-600">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using Kolency's social media collaboration platform and related services (collectively, the "Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              <p className="text-gray-700">
                These Terms of Service ("Terms") govern your use of our Service operated by Kolency ("we," "us," or "our"). Your use of the Service constitutes acceptance of these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="text-gray-700 mb-4">Kolency provides a social media management platform that allows users to:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Connect and manage multiple social media accounts</li>
                <li>Schedule and publish content across various platforms</li>
                <li>Collaborate with team members on content creation</li>
                <li>Analyze social media performance and engagement</li>
                <li>Access analytics and reporting tools</li>
                <li>Use content creation and editing features</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Accounts and Registration</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Account Creation</h3>
              <p className="text-gray-700 mb-4">To use our Service, you must:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Be at least 18 years old or have parental consent</li>
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and update your account information</li>
                <li>Keep your account credentials secure and confidential</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Account Responsibilities</h3>
              <p className="text-gray-700 mb-4">You are responsible for:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>All activities that occur under your account</li>
                <li>Maintaining the security of your account</li>
                <li>Notifying us immediately of any unauthorized use</li>
                <li>Ensuring your account information is accurate and up-to-date</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Acceptable Use Policy</h2>
              <p className="text-gray-700 mb-4">You agree not to use the Service to:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Publish content that is defamatory, obscene, or harmful</li>
                <li>Spam or send unsolicited messages</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the Service</li>
                <li>Use the Service for any illegal or unauthorized purpose</li>
                <li>Violate the terms of service of connected social media platforms</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4.1 Content Responsibility and Compliance</h2>
              <p className="text-gray-700 mb-4"><strong>Important:</strong> You are responsible for all content you create, publish, or distribute through our Service. This includes but is not limited to:</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1.1 Content Standards</h3>
              <p className="text-gray-700 mb-4">All content must comply with:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Legal Requirements:</strong> All applicable local, national, and international laws and regulations</li>
                <li><strong>Social Norms:</strong> Community standards, cultural sensitivities, and ethical guidelines</li>
                <li><strong>Platform Policies:</strong> Terms of service and community guidelines of all connected social media platforms</li>
                <li><strong>Intellectual Property Rights:</strong> Copyright, trademark, and other intellectual property laws</li>
                <li><strong>Privacy Laws:</strong> Data protection and privacy regulations (GDPR, CCPA, etc.)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1.2 Prohibited Content</h3>
              <p className="text-gray-700 mb-4">You expressly agree NOT to publish content that:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Contains hate speech, discrimination, or promotes violence against individuals or groups</li>
                <li>Is sexually explicit, pornographic, or contains adult content without appropriate age restrictions</li>
                <li>Promotes illegal activities, terrorism, or extremist ideologies</li>
                <li>Contains false or misleading information that could harm public health or safety</li>
                <li>Infringes on intellectual property rights of others</li>
                <li>Contains personal information of others without consent</li>
                <li>Promotes self-harm, suicide, or dangerous activities</li>
                <li>Is spam, phishing, or contains malicious links</li>
                <li>Violates generally accepted community standards and cultural sensitivities</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1.3 User Responsibility</h3>
              <p className="text-gray-700 mb-4">By using our Service, you acknowledge and agree that:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>You are responsible</strong> for all content you publish through our platform</li>
                <li><strong>You will be responsible</strong> for any violations of laws, regulations, or platform policies</li>
                <li><strong>You must obtain necessary permissions</strong> before using third-party content, images, or materials</li>
                <li><strong>You must respect generally accepted cultural sensitivities</strong> and avoid content that could be considered offensive or inappropriate</li>
                <li><strong>You are responsible for compliance</strong> with all applicable advertising and marketing regulations</li>
                <li><strong>You must maintain accuracy</strong> and truthfulness in all published content</li>
              </ul>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-800">
                      <strong>Important Notice:</strong> Kolency is a content management platform only. We do not have the authority to remove content from social media platforms, suspend social media accounts, or ban users from social media platforms. Content moderation, account suspension, and banning decisions are solely the responsibility of each respective social media platform (Facebook, Instagram, Twitter, LinkedIn, etc.). We are not responsible for content published by users and will not be held liable for any damages resulting from user-generated content.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Social Media Platform Integration</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1 Platform Authorization</h3>
              <p className="text-gray-700 mb-4">When connecting social media accounts, you:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Grant us permission to access your social media accounts</li>
                <li>Authorize us to publish content on your behalf</li>
                <li>Allow us to retrieve analytics and engagement data</li>
                <li>Confirm you have the right to grant these permissions</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2 Platform Compliance</h3>
              <p className="text-gray-700 mb-4">You agree to:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Comply with each platform's terms of service</li>
                <li>Respect platform-specific content guidelines</li>
                <li>Not exceed platform rate limits or usage restrictions</li>
                <li>Maintain valid and active social media accounts</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Content and Intellectual Property</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">6.1 Your Content and Responsibilities</h3>
              <p className="text-gray-700 mb-4"><strong>Important:</strong> You remain the owner of your content, but you are fully responsible for ensuring its compliance with applicable laws and platform policies. By using our Service, you:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Grant us a license</strong> to process and publish your content</li>
                <li><strong>Confirm you have the rights</strong> to the content you publish</li>
                <li><strong>Are responsible</strong> for the accuracy, legality, and compliance of your content</li>
                <li><strong>Agree not to publish content</strong> that infringes on others' rights or violates any laws</li>
                <li><strong>Must ensure compliance</strong> with all applicable laws, regulations, and social media platform policies</li>
                <li><strong>Are responsible for any consequences</strong> resulting from your published content, including but not limited to legal or regulatory actions</li>
                <li><strong>Must respect generally accepted cultural, religious, and social norms</strong> in all content you publish</li>
                <li><strong>Are responsible for obtaining permissions</strong> for any third-party content, images, or materials used</li>
              </ul>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 my-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-red-800">
                      <strong>Legal Disclaimer:</strong> Kolency is a content management platform only. We do not review, approve, endorse, or moderate any user-generated content. We do not have the authority to remove content from social media platforms, suspend social media accounts, or ban users from social media platforms. All content moderation, account suspension, and banning decisions are solely the responsibility of each respective social media platform. All content published through our platform is the sole responsibility of the user who created it. Users are legally responsible for ensuring their content complies with all applicable laws, regulations, and platform policies.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">6.2 Our Content</h3>
              <p className="text-gray-700 mb-4">Our Service, including its original content, features, and functionality, is owned by Kolency and is protected by international copyright, trademark, and other intellectual property laws.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Subscription and Payment Terms</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">7.1 Subscription Plans</h3>
              <p className="text-gray-700 mb-4">We offer various subscription plans with different features and limitations. You agree to:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Pay all fees associated with your chosen plan</li>
                <li>Provide accurate billing information</li>
                <li>Authorize us to charge your payment method</li>
                <li>Notify us of any changes to your billing information</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">7.2 Billing and Renewal</h3>
              <p className="text-gray-700 mb-4">Subscriptions automatically renew unless cancelled. You may cancel your subscription at any time through your account settings. No refunds will be provided for partial months of service.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Privacy and Data Protection</h2>
              <p className="text-gray-700 mb-4">Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference. By using our Service, you consent to our collection and use of information as described in our Privacy Policy.</p>
              <p className="text-gray-700 mb-4">We follow standard industry practices to protect your data, including encryption in transit and at rest, secure authentication protocols, and regular security assessments. We are committed to maintaining the confidentiality, integrity, and availability of your information in accordance with applicable data protection regulations.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Service Availability and Modifications</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">9.1 Service Availability</h3>
              <p className="text-gray-700 mb-4">We strive to maintain high service availability but cannot guarantee uninterrupted access. The Service may be temporarily unavailable due to:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Scheduled maintenance and updates</li>
                <li>Technical issues or system failures</li>
                <li>Third-party service disruptions</li>
                <li>Force majeure events</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">9.2 Service Modifications</h3>
              <p className="text-gray-700 mb-4">We reserve the right to modify, suspend, or discontinue the Service at any time with reasonable notice. We will notify users of significant changes that affect their use of the Service.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">To the maximum extent permitted by law, Kolency shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Loss of profits, data, or business opportunities</li>
                <li>Service interruptions or data loss</li>
                <li>Damages resulting from third-party actions</li>
                <li>Content published through our Service</li>
              </ul>
              <p className="text-gray-700">Our total liability shall not exceed the amount paid by you for the Service in the 12 months preceding the claim.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Indemnification</h2>
              <p className="text-gray-700 mb-4">You agree to indemnify and hold harmless Kolency, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Your use of the Service</li>
                <li>Your violation of these Terms</li>
                <li>Your content or activities</li>
                <li>Your violation of any third-party rights</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Termination</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">12.1 Termination by You</h3>
              <p className="text-gray-700 mb-4">You may terminate your account at any time by:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Contacting our support team</li>
                <li>Using the account deletion feature in your settings</li>
                <li>Discontinuing use of the Service</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">12.2 Termination by Us</h3>
              <p className="text-gray-700 mb-4">We may terminate or suspend your account if:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>You violate these Terms</li>
                <li>You engage in fraudulent or illegal activities</li>
                <li>You fail to pay subscription fees</li>
                <li>We discontinue the Service</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Governing Law and Dispute Resolution</h2>
              <p className="text-gray-700 mb-4">These Terms shall be governed by and construed in accordance with the laws of Indonesia. Any disputes arising from these Terms or your use of the Service shall be resolved through binding arbitration under the Indonesian National Arbitration Board (BANI).</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Changes to Terms</h2>
              <p className="text-gray-700 mb-4">We may update these Terms from time to time. We will notify you of any material changes by:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Posting the updated Terms on our website</li>
                <li>Sending you an email notification</li>
                <li>Displaying a notice in our Service</li>
              </ul>
              <p className="text-gray-700">Your continued use of the Service after changes become effective constitutes acceptance of the updated Terms.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Contact Information</h2>
              <p className="text-gray-700 mb-4">If you have any questions about these Terms of Service, please <Link href="/contact" className="text-blue-600 hover:text-blue-800 underline">contact us</Link>.</p>
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