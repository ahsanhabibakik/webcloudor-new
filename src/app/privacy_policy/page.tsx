'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';

function PrivacyPolicyContent() {
  const searchParams = useSearchParams();
  const request = searchParams.get('request') || 'Privacy Policy';

  // Update document title dynamically
  useEffect(() => {
    document.title = request;
  }, [request]);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Header Section */}
      <div 
        style={{
          background: 'url(\'/simple-header-blended-small.png\') no-repeat center center',
          backgroundSize: 'cover',
          color: 'navajowhite',
          padding: '80px 20px',
          textAlign: 'center'
        }}
      >
        <h1 style={{ margin: 0, fontSize: '2.5rem' }}>{request}</h1>
        <p style={{ margin: '10px 0 0 0', fontSize: '1.2rem' }}>Privacy Policy</p>
      </div>

      {/* Content Section */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        <p>
          <b>The {request} </b>App is free to use. By using the app, users agree to the collection and use of their personal information for the purpose of improving the service. The information collected will not be shared with others outside of what is outlined in the Privacy Policy. The terms used in the Privacy Policy are also defined in the app's Terms and Conditions.
        </p>

        <h5 style={{ color: '#333', marginTop: '2rem' }}>Information Collection and Use</h5>
        <p>
          For a better experience, while using our Service, I may require you to provide us with certain personally identifiable information. The information that I request will be retained on your device and is not collected by me in any way.
        </p>
        <p>
          The app does use third-party services that may collect information used to identify you.
        </p>
        <p>
          Link to the privacy policy of third-party service providers used by the app:
        </p>
        <ul>
          <li>Google Play Services</li>
          <li>AdMob</li>
        </ul>
        <p>
          I want to inform you that whenever you use my Service, in a case of an error in the app I collect data and information (through third-party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol ("IP") address, device name, operating system version, the configuration of the app when utilizing my Service, the time and date of your use of the Service, and other statistics.
        </p>

        <h5 style={{ color: '#333', marginTop: '2rem' }}>Cookies</h5>
        <p>
          Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.
        </p>
        <p>
          This Service does not use these "cookies" explicitly. However, the app may use third-party code and libraries that use "cookies" to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.
        </p>

        <h5 style={{ color: '#333', marginTop: '2rem' }}>Service Providers</h5>
        <p>
          I may employ third-party companies and individuals due to the following reasons:
        </p>
        <ul>
          <li>To facilitate our Service;</li>
          <li>To provide the Service on our behalf;</li>
          <li>To perform Service-related services; or</li>
          <li>To assist us in analyzing how our Service is used.</li>
        </ul>
        <p>
          I want to inform users of this Service that these third parties have access to their Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.
        </p>

        <h5 style={{ color: '#333', marginTop: '2rem' }}>Security</h5>
        <p>
          I value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and I cannot guarantee its absolute security.
        </p>

        <h5 style={{ color: '#333', marginTop: '2rem' }}>Links to Other Sites</h5>
        <p>
          This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by me. Therefore, I strongly advise you to review the Privacy Policy of these websites. I have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
        </p>

        <h5 style={{ color: '#333', marginTop: '2rem' }}>Children's Privacy</h5>
        <p>
          These Services do not address anyone under the age of 13. I do not knowingly collect personally identifiable information from children under 13 years of age. In the case I discover that a child under 13 has provided me with personal information, I immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact me so that I will be able to do the necessary actions.
        </p>

        <h5 style={{ color: '#333', marginTop: '2rem' }}>Changes to This Privacy Policy</h5>
        <p>
          I may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. I will notify you of any changes by posting the new Privacy Policy on this page.
        </p>
        <p>
          This policy is effective as of 2023-11-31
        </p>

        <h5 style={{ color: '#333', marginTop: '2rem' }}>Data Deletion Right</h5>
        <p>
          You have the right to access, rectify, object to, or erase the data maintained by us. You may request a change / delete to your personal data by contacting us by referring the issue via email.
        </p>
        <p>
          Email: cloudwavetech20@gmail.com
        </p>
        <p>
          If you believe our processing of your personal data infringes data protection laws, you have a legal right to initiate a complaint with a supervisory authority. Don't hesitate to contact us if you find any issue.
        </p>

        <h5 style={{ color: '#333', marginTop: '2rem' }}>Contact Us</h5>
        <p>
          If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact me at info.cloudwavetech20@gmail.com.
        </p>
      </div>
    </div>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PrivacyPolicyContent />
    </Suspense>
  );
}
