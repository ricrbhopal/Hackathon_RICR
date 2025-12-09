import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the RICR Hackathon platform, you accept and agree to be bound by the terms and 
                provisions of this agreement. If you do not agree to these terms, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Eligibility</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Participants must be currently enrolled students at a recognized educational institution</li>
                <li>Each team must have a designated team leader who is responsible for registration</li>
                <li>Teams can consist of 1-5 members (1 leader + up to 4 members)</li>
                <li>All team members must provide accurate and complete information during registration</li>
                <li>Participants must be at least 18 years of age or have parental consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Registration and Team Management</h2>
              <p className="mb-3">By registering for the hackathon, you agree that:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>All information provided during registration is accurate and truthful</li>
                <li>You will maintain the confidentiality of your team code and login credentials</li>
                <li>Team leaders are responsible for managing their team members</li>
                <li>You will notify us immediately of any unauthorized use of your account</li>
                <li>Registration fees, if applicable, are non-refundable</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Code of Conduct</h2>
              <p className="mb-3">Participants must:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Treat all participants, organizers, judges, and staff with respect</li>
                <li>Not engage in any form of harassment, discrimination, or inappropriate behavior</li>
                <li>Create original work and properly attribute any third-party resources used</li>
                <li>Not plagiarize or submit work that is not your own</li>
                <li>Follow all competition rules and guidelines</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Project Submissions</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>All project submissions must be original work created during the hackathon period</li>
                <li>Teams must select a theme and problem statement before submission</li>
                <li>Projects must be submitted via GitHub with a valid repository link</li>
                <li>Submissions must be made before the specified deadline</li>
                <li>Late submissions may not be accepted</li>
                <li>Projects must not contain any malicious code or violate security policies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Intellectual Property</h2>
              <p className="mb-3">
                <strong>Ownership:</strong> Participants retain ownership of their original work. However, by participating:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You grant RICR a non-exclusive license to showcase and promote submitted projects</li>
                <li>You agree that your project may be featured in event materials and publications</li>
                <li>You represent that you have the right to submit your project and it does not infringe on third-party rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Judging and Results</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Projects will be evaluated based on criteria including UI, UX, code quality, presentation, and viva</li>
                <li>Judges' decisions are final and binding</li>
                <li>Results will be declared after thorough evaluation by the judging panel</li>
                <li>Participants can view their results through their dashboard once declared</li>
                <li>RICR reserves the right to disqualify any team for rule violations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Prizes and Awards</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Prizes, if any, will be awarded as announced by the organizers</li>
                <li>Winners must comply with any tax obligations related to prizes</li>
                <li>Prizes are non-transferable and cannot be exchanged for cash</li>
                <li>RICR reserves the right to substitute prizes of equal or greater value</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Liability and Disclaimers</h2>
              <p className="mb-3">
                <strong>Disclaimer:</strong> The platform is provided "as is" without any warranties. RICR is not liable for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Any technical issues, downtime, or data loss</li>
                <li>Injuries, damages, or losses incurred during participation</li>
                <li>Third-party content or external links</li>
                <li>Disputes between team members or participants</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Privacy and Data Protection</h2>
              <p>
                Your use of this platform is also governed by our Privacy Policy. Please review our Privacy Policy to 
                understand how we collect, use, and protect your personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Modifications to Terms</h2>
              <p>
                RICR reserves the right to modify these terms at any time. Continued use of the platform after changes 
                constitutes acceptance of the modified terms. We will notify users of significant changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Termination</h2>
              <p>
                RICR reserves the right to suspend or terminate access to the platform for any user who violates these 
                terms, engages in inappropriate conduct, or for any other reason at our sole discretion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of India, without regard to 
                its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Contact Information</h2>
              <p>
                For any questions regarding these terms, please contact us at:{' '}
                <a href="mailto:ashish@ricr.in" className="text-blue-600 hover:underline">
                  ashish@ricr.in
                </a>
              </p>
            </section>

            <section className="border-t pt-6 mt-8">
              <p className="text-sm text-gray-600">
                <strong>Last Updated:</strong> December 9, 2025
              </p>
              <p className="text-sm text-gray-600 mt-2">
                By participating in RICR Hackathon, you acknowledge that you have read, understood, and agree to be 
                bound by these Terms of Service.
              </p>
            </section>
            <Link to="/" className="text-blue-600 hover:text-blue-800 mb-6 inline-block">
            ← Back to Home
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
