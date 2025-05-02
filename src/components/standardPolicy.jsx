import React from 'react';
import Header from './Header';
import '../styles/standardpolicy.css';

const StandardPolicy = () => {
  return (
    <div className="standardpolicy-page">
      <Header />
      
      <div className="main-content">
        <div className="policy-container">
          <div className="policy-header">
            <div className="logo-icon"></div>
            <h1>Quality & Standards Policy</h1>
          </div>
          
          <div className="policy-section">
            <p>At ZappCart, our mission is to provide customers with freshly cut, hygienic, and high-quality meat, 
sourced directly from trusted local vendors. To uphold this promise, we have established strict 
quality and service standards that apply to vendors, delivery partners, and customers who interact 
with our platform. </p>
          </div>
          
          <div className="policy-section">
          <p>ZappCart operates on a unique model where meat is cut fresh only after an order is placed. This 
means we do not allow frozen or pre-packed meat on our platform. All vendors must ensure that 
meat is freshly prepared in real-time, based on order requirements. The use of deep freezers or 
long-term cold storage is strictly prohibited. Vendors must not store meat for future use, nor reuse 
unsold meat under any circumstance. This commitment to fresh cutting ensures customers receive 
meat that is not only safe but also rich in texture, flavor, and nutrition.</p>
          </div>
          
          <div className="policy-section">
          <p>To maintain cleanliness and product integrity, vendors must follow strict hygiene protocols during 
cutting and handling. Workspaces should be cleaned and sanitized regularly. Equipment such as 
cutting boards, knives, and weighing scales must be food-grade and disinfected between every 
order. All staff involved in meat preparation must wear clean aprons, gloves, face masks, and head 
covers at all times. Vendors must have a valid FSSAI license and comply with all applicable food 
safety laws and health inspections as required by local authorities.</p>
          </div>
          
          <div className="policy-section">
          <p>Packaging is a vital part of preserving freshness. All meat must be packed in leak-proof, tamper
evident, and food-safe packaging immediately after cutting. Packaging must include basic details 
like the meat type, weight, cutting time, and ZappCart batch code for internal tracking. While 
customers will only see ZappCart branding, each order is monitored by our backend system for 
quality traceability.</p>
          </div>
          
          <div className="policy-section">
          <p>Delivery plays a key role in preserving freshness. Since the meat is freshly cut, it must reach the 
customer within 45 minutes to 1 hour of preparation. Delivery partners are trained to handle 
packages carefully, ensuring they are protected from dust, heat, or cross-contamination. Orders 
must be transported in clean, insulated delivery bags, and riders must maintain personal hygiene 
and professionalism during handoff. If any delay occurs due to unavoidable reasons, the delivery 
partner must update the ZappCart support team and the customer immediately.</p>
          </div>
          
          <div className="policy-section">
          <p>Customers are also responsible for helping maintain product quality. Once an order is received, 
the package should be opened immediately and the meat stored in the refrigerator if it’s not going 
to be cooked right away. ZappCart recommends consuming the meat within 24 hours of delivery 
for best quality. In case the customer receives meat that is spoiled, smells bad, or seems unsafe, 
they must report the issue within 1 hour of delivery, along with photos or videos as proof. Valid 
issues will be resolved via replacement or refund, according to our Return & Refund Policy.</p>
          </div>
          
          <div className="policy-section">
          <p>ZappCart monitors vendor and delivery performance closely. Vendors with repeated complaints, 
hygiene issues, or delayed responses will receive formal warnings, and continued violations may 
lead to temporary suspension or removal from the platform. Delivery personnel who mishandle 
food or receive consistent negative feedback will also be reviewed and may be deactivated from 
the platform if necessary. Customers who attempt to misuse return policies, submit fake 
complaints, or engage in suspicious behavior may face account suspension.</p>
          </div>
          
          <div className="policy-section">
          <p>If you experience any quality-related issue, have feedback, or need to escalate a concern, you can 
contact us via support@zappcart.com, call +91-XXXXXXXXXX, or reach out through our 
WhatsApp support. We strive to resolve all complaints within 24 hours, ensuring a seamless and 
trusted shopping experience.</p>
          </div>
          <div className="policy-section">
          <p>At ZappCart, our focus on real-time fresh cutting, hygienic preparation, fast delivery, and strict 
vendor guidelines sets us apart. These standards help ensure every customer receives premium
quality meat that is safe, delicious, and worthy of trust. By following this Quality & Standards 
Policy, we’re building a community that values freshness, integrity, and accountability in every 
order.</p>
          </div>
          
          <div className="policy-section">
            <h2>Contact Us</h2>
            <p>If you have any questions or concerns about our Quality & Standards Policy, please reach out to us:</p>
            <ul>
              <li>Email: <a href="mailto:quality@zappcart.com">quality@zappcart.com</a></li>
              <li>Phone: <a href="tel:+919876543210">+91 98765 43210</a></li>
              <li>Address: <a href="https://maps.google.com/?q=123+Tech+Park,+Silicon+Valley,+Bangalore,+560001" target="_blank" rel="noopener noreferrer">123 Tech Park, Silicon Valley, Bangalore, 560001</a></li>
            </ul>
          </div>
          
          <div className="policy-date">
            <p>Last updated: April 30, 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StandardPolicy;