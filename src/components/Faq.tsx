"use client";

import { useState } from "react";

type FaqItemProps = {
  question: string;
  answer: string;
};

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 bg-white rounded-lg mb-4 shadow-sm hover:shadow-md transition-shadow">
      <button
        className="flex justify-between items-center w-full py-6 px-6 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 pr-8">{question}</h3>
        <div
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22.702"
            height="21.928"
            viewBox="0 0 22.702 21.928"
            fill="#666666"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M11.629 12.553c4.356.341 10.018 2.844 10.018 9.375h.979c.084-.925.693-8.982-3.653-13.74a10.506 10.506 0 0 0-7.344-3.352V0L0 9.044 11.629 18.1z"
              transform="scale(-1,1) translate(-22.702,0)"
            />
          </svg>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] pb-6 px-6" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const Faq = () => {
  const faqItems = [
    {
      question: "What software solutions do you provide?",
      answer:
        "We provide three main software solutions: SMART Access Control System for secure facility access, MediCare AI for comprehensive healthcare management with AI-powered features, and Car Service Management System for auto service centers. We also offer custom software development tailored to your specific business needs.",
    },
    {
      question: "Can the Access Control System work offline without internet?",
      answer:
        "Yes! Our SMART Access Control System supports offline operation. Keypad and NFC access methods continue working even when internet connection is lost. The system will sync data once connectivity is restored. However, remote web control and real-time monitoring require internet connection.",
    },
    {
      question: "What is MediCare AI and what does it offer?",
      answer:
        "MediCare AI is our intelligent healthcare management platform that combines traditional hospital operations with AI-powered features. It includes patient management, laboratory and pharmacy modules, bed management, billing, and AI features like Clinical Decision Support, Patient Chatbot (24/7), Multi-LLM AI Assistant, and AI Voice Assistant. It helps reduce administrative workload by 60% and improves diagnostic accuracy.",
    },
    {
      question: "How does the Car Service Management System help auto service centers?",
      answer:
        "Our Car Service Management System streamlines all operations for auto service centers. It manages customers, vehicles, appointments, service history, parts inventory, and loyalty programs. The system automatically sends SMS and email notifications to customers when their vehicle reaches the next service mileage requirement, helping you maintain customer relationships and increase repeat business.",
    },
    {
      question: "Do your systems support cloud or local deployment?",
      answer:
        "Yes! All our software solutions support both cloud and local deployment options. You can choose cloud-connected systems for remote access and scalability, or local server installation for enhanced data control. Our Access Control System works online and offline seamlessly, while Healthcare and Car Service Management systems can be deployed based on your infrastructure preferences.",
    },
    {
      question: "How secure are your systems and is patient data protected?",
      answer:
        "Security is our top priority across all solutions. Our systems feature encrypted communication, comprehensive audit trails, role-based access control, and continuous monitoring. MediCare AI is HIPAA-compliant with secure patient data handling. All systems include tamper-proof logging and can trigger instant alerts for suspicious activity or unauthorized access.",
    },
    {
      question: "Can I get automated notifications and alerts?",
      answer:
        "Absolutely! All our systems support automated notifications via SMS and email. Access Control sends alerts for unauthorized access attempts. MediCare AI sends appointment reminders and test result notifications. Car Service Management automatically alerts customers when their vehicle reaches the next service mileage requirement, helping you maintain customer relationships.",
    },
    {
      question: "Do you provide installation, training, and support?",
      answer:
        "Yes! We provide complete installation services, system configuration, user training, and ongoing technical support for all our solutions. Our local Ethiopian team is available 24/7 to assist with setup, troubleshooting, and maintenance. We ensure your team is fully trained and comfortable using the systems before we consider the implementation complete.",
    },
    {
      question: "Can the Car Service Management System track service history and send reminders?",
      answer:
        "Yes! The Car Service Management System maintains complete service history for each vehicle, tracks all service types (Basic, Major, Brake, Tire, AC, General), and automatically calculates when the next service is due based on mileage. The system sends SMS and email notifications to customers when their vehicle reaches the service mileage requirement, ensuring timely maintenance and customer retention.",
    },
    {
      question: "How does MediCare AI's AI features help healthcare providers?",
      answer:
        "MediCare AI's AI features significantly enhance healthcare delivery. The AI Clinical Decision Support helps doctors with disease analysis, diagnostic assistance, and treatment recommendations. The 24/7 AI Patient Chatbot answers patient questions based on their medical history. The Multi-LLM AI Assistant (GPT-4, Gemini, Claude, Llama) provides clinical consultation support. These features help reduce administrative workload by 60% and improve diagnostic accuracy.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Everything you need to know about our software solutions and services
          </p>
        </div>
        <div className="bg-white rounded-lg">
          {faqItems.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
        <div className="mt-10 sm:mt-16 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-600 mb-6 text-base sm:text-lg max-w-2xl mx-auto">
            For any additional inquiries or assistance, please contact us. Our team is ready to help you implement the perfect software solution for your business - whether it's Access Control, Healthcare Management, Car Service Management, or custom software development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+251979113638"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-700 to-teal-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-slate-800 hover:to-teal-800 transition duration-300 shadow-lg"
            >
              📞 +251 979 113 638
            </a>
            <a
              href="mailto:entro12@entroethiopia.com"
              className="inline-flex items-center gap-2 bg-white text-teal-700 border-2 border-teal-600 px-8 py-4 rounded-xl font-semibold hover:bg-teal-50 transition duration-300"
            >
              📧 entro12@entroethiopia.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
