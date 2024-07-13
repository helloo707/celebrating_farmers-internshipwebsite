import React from 'react'
import './Service.css'

const service = () => {
  return (
    <>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
    <div className="wrapper">
        <h1>Our Services</h1>
        <p>Technology | Products | Business Model |
        Connecting Startups | Creating farmers collectives</p>
        <div className="content-box mb-24   ">
            <div className="card">
                <i className="bx bx-bar-chart-alt bx-md"></i>
                <h2>Marketing Services</h2>
                <p>Our Marketing Service provides comprehensive strategies to boost your brand's visibility and engagement. We utilize the latest digital marketing tools and techniques to ensure your business reaches its target audience effectively.</p>
            </div>
            <div className="card">
                <i className="bx bx-laptop bx-md"></i>
                <h2>Research & Development</h2>
                <p>Our Research and Development service focuses on innovating and enhancing your products and services. We conduct thorough market analysis and implement cutting-edge technologies to keep your business ahead of the competition.</p>
            </div>
            <div className="card">
                <i className="bx bx-line-chart bx-md"></i>
                <h2>Customer care Service</h2>
                <p>Our 24/7 Call Center Service ensures your customers receive support at any time, day or night. Our dedicated team of professionals is always available to handle inquiries, resolve issues, and provide exceptional customer service.</p>
            </div>
            <div className="card">
                <i className="bx bx-mail-send bx-md"></i>
                <h2>Social media Marketing</h2>
                <p>Our Social Media Marketing service enhances your online presence by crafting engaging content and targeted campaigns. We manage and optimize your social media platforms to drive brand awareness and foster customer loyalty.</p>
            </div>
            <div className="card">
                <i className="bx bx-bar-chart-alt bx-md"></i>
                <h2>Corporate Business</h2>
                <p>Our Corporate Business service provides tailored solutions to meet the unique needs of large organizations. We offer strategic planning, risk management, and operational efficiency improvements to drive your company's success.</p>
            </div>
            <div className="card">
                <i className="bx bx-paint bx-md"></i>
                <h2>Creative Consultancy</h2>
                <p>Our Creative Consultancy service brings innovative and fresh perspectives to your business projects. We specialize in developing unique strategies and designs that captivate your audience and elevate your brand.</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default service