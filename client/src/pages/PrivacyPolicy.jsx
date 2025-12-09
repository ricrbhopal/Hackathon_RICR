import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
         
          
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p>
                Welcome to RICR Hackathon. We respect your privacy and are committed to protecting your personal data. 
                This privacy policy will inform you about how we look after your personal data when you visit our website 
                and participate in our hackathon events.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
              <p className="mb-3">We may collect, use, store and transfer different kinds of personal data about you:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Identity Data:</strong> Full name, username, or similar identifier</li>
                <li><strong>Contact Data:</strong> Email address, phone number</li>
                <li><strong>Technical Data:</strong> IP address, browser type and version, time zone setting</li>
                <li><strong>Profile Data:</strong> College name, course, branch, semester, GitHub profile</li>
                <li><strong>Team Data:</strong> Team name, team code, project submissions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="mb-3">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>To register you for the hackathon</li>
                <li>To manage your team and participation</li>
                <li>To communicate important updates about the event</li>
                <li>To evaluate project submissions and declare results</li>
                <li>To improve our services and user experience</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, 
                used, or accessed in an unauthorized way. We limit access to your personal data to those employees, agents, 
                contractors, and other third parties who have a business need to know.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Retention</h2>
              <p>
                We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, 
                including for the purposes of satisfying any legal, accounting, or reporting requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Legal Rights</h2>
              <p className="mb-3">Under certain circumstances, you have rights under data protection laws in relation to your personal data:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Request access to your personal data</li>
                <li>Request correction of your personal data</li>
                <li>Request erasure of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing your personal data</li>
                <li>Request transfer of your personal data</li>
                <li>Right to withdraw consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Third-Party Links</h2>
              <p>
                This website may include links to third-party websites, plug-ins, and applications. Clicking on those links 
                or enabling those connections may allow third parties to collect or share data about you. We do not control 
                these third-party websites and are not responsible for their privacy statements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our privacy practices, please contact us at:{' '}
                <a href="mailto:ashish@ricr.in" className="text-blue-600 hover:underline">
                  ashish@ricr.in
                </a>
              </p>
            </section>

            <section className="border-t pt-6 mt-8">
              <p className="text-sm text-gray-600">
                <strong>Last Updated:</strong> December 9, 2025
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

export default PrivacyPolicy;
