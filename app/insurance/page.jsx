"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Search,
  FileText,
  CheckCircle2,
  ShoppingCart,
  Wallet,
  Percent,
  Clock,
  RefreshCw,
  Users,
} from "lucide-react";

export default function EquipmentFinancePage() {
  // Process steps
  const steps = [
    {
      id: "01",
      icon: <Search className="w-8 h-8 text-[#FF6B00]" />,
      title: "Identify Equipment Needs",
      desc: "Determine the specific equipment your business requires to grow and succeed",
    },
    {
      id: "02",
      icon: <FileText className="w-8 h-8 text-[#FF6B00]" />,
      title: "Apply for Financing",
      desc: "Submit your application with equipment details and business information",
    },
    {
      id: "03",
      icon: <CheckCircle2 className="w-8 h-8 text-[#FF6B00]" />,
      title: "Get Approved",
      desc: "Our team reviews your application and provides a decision within 24-48 hours",
    },
    {
      id: "04",
      icon: <ShoppingCart className="w-8 h-8 text-[#FF6B00]" />,
      title: "Purchase Equipment",
      desc: "Once approved, proceed with purchasing your equipment immediately",
    },
    {
      id: "05",
      icon: <Wallet className="w-8 h-8 text-[#FF6B00]" />,
      title: "Repay the Loan",
      desc: "Make convenient monthly payments over the agreed period",
    },
  ];

  // Features
  const features = [
    {
      icon: <Percent className="w-7 h-7 text-[#FF6B00]" />,
      title: "Competitive Rates",
      desc: "Industry-leading interest rates starting from 8.5% annually",
    },
    {
      icon: <CheckCircle2 className="w-7 h-7 text-[#FF6B00]" />,
      title: "100% Financing",
      desc: "Cover the complete cost of your equipment with no down payment",
    },
    {
      icon: <Clock className="w-7 h-7 text-[#FF6B00]" />,
      title: "Quick Processing",
      desc: "Fast approval in 24-48 hours with minimal documentation",
    },
    {
      icon: <FileText className="w-7 h-7 text-[#FF6B00]" />,
      title: "Simple Documentation",
      desc: "Streamlined paperwork process with digital submission",
    },
    {
      icon: <RefreshCw className="w-7 h-7 text-[#FF6B00]" />,
      title: "Flexible Repayment",
      desc: "Choose from 12 to 84 months repayment terms",
    },
    {
      icon: <Users className="w-7 h-7 text-[#FF6B00]" />,
      title: "Expert Support",
      desc: "Dedicated relationship managers for personalized service",
    },
  ];

  const financePartners = [
    { src: "/hdfc.png", alt: "HDFC Bank" },
    { src: "/icici.png", alt: "ICICI Bank" },
    { src: "/axis.png", alt: "Axis Bank" },
    { src: "/sbi.png", alt: "SBI Bank" },
  ];

  const [price, setPrice] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [tenure, setTenure] = useState("");
  const [emi, setEmi] = useState(null);

  const calculateEMI = () => {
    const principal = price - (price * downPayment) / 100;
    const interestRate = 0.12; // 12% annual interest
    const monthlyRate = interestRate / 12;

    if (!principal || !tenure) {
      setEmi(null);
      return;
    }

    const calculatedEMI =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
      (Math.pow(1 + monthlyRate, tenure) - 1);

    setEmi(Math.round(calculatedEMI));
  };

  return (
    <div className="">
      {/* 🔹 Hero Section */}
      <section className="relative w-full h-[400px] flex items-center justify-between overflow-hidden">
        <Image
          src="/finance-bg.jpg"
          alt="Equipment Finance"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-[#FF6B00]/50"></div>

        {/* Left Content */}
        <div className="relative  text-white max-w-2xl px-6 md:px-16">
          <motion.h1
            className="text-5xl font-bold mb-6 leading-snug"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Finance Your{" "}
            <span className="bg-gradient-to-r from-[#FF6B00] to-[#E85A00] bg-clip-text text-transparent">
              Business Equipment
            </span>{" "}
            Today
          </motion.h1>

          <p className="text-lg mb-8 text-gray-200">
            Get up to 100% financing for essential business equipment with{" "}
            <span className="font-semibold text-[#FFB366]">
              quick approval, low rates, and flexible terms.
            </span>
          </p>

          <motion.button
            className="bg-gradient-to-r from-[#FF6B00] to-[#E85A00] hover:from-[#E85A00] hover:to-[#CC4E00] text-white px-8 py-4 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            Apply Now →
          </motion.button>
        </div>

        {/* Stats */}
        <div>
          <motion.div
            className="relative z-10 hidden md:flex mr-16"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-10 grid grid-cols-2 gap-10 text-center text-white shadow-xl">
              <div>
                <p className="text-3xl font-bold text-[#FFB366]">$50M+</p>
                <p className="text-sm">Funded</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#FFB366]">95%</p>
                <p className="text-sm">Approval Rate</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#FFB366]">24hr</p>
                <p className="text-sm">Quick Approval</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#FFB366]">5000+</p>
                <p className="text-sm">Happy Clients</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 🔹 Features Section */}
      <section className="w-full py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <span className="inline-block bg-[#FFF4EB] text-[#FF6B00] text-xs font-semibold px-4 py-1 rounded-full mb-4">
              KEY FEATURES
            </span>
            <h2 className="text-4xl font-bold mb-4 text-[#1A1A1A]">
              Why Choose <span className="text-[#FF6B00]">Our Financing?</span>
            </h2>
            <p className="text-[#4A4A4A] mb-4 leading-relaxed">
              Our solutions help your business grow without draining working
              capital. Experience industry-best rates, speed, and service.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-2 bg-[#FAFAFA] p-3 rounded-xl border border-[#F1F1F1] shadow-md hover:shadow-lg hover:bg-[#FFF4EB] transition-all duration-300"
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="shrink-0">{feature.icon}</div>
                  <div>
                    <h4 className="font-semibold text-[#1A1A1A]">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-[#4A4A4A]">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <Image
              src="/factory.jpg"
              alt="Factory Equipment"
              width={600}
              height={400}
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-8 left-6 bg-white border border-[#F1F1F1] shadow-lg rounded-xl px-8 py-5 text-center">
              <p className="text-3xl font-bold text-[#FF6B00]">84</p>
              <p className="text-sm text-[#4A4A4A]">Max Repayment Months</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Process Steps Section */}
      <section className="w-full px-10 bg-[#FAFAFA]">
        <div className=" mx-auto">
          <h2 className="text-4xl font-bold text-center py-7 text-[#1A1A1A]">
            How <span className="text-[#FF6B00]">It Works</span>
          </h2>

          <div className="w-full grid md:grid-cols-5 gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="bg-white px-3 py-4 rounded-xl border border-[#F1F1F1] shadow-md hover:shadow-lg hover:bg-[#FFF4EB] transition-all duration-300 text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex justify-center mb-4">{step.icon}</div>
                <h3 className="font-semibold text-lg text-[#1A1A1A] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[#4A4A4A]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 About Section */}
      <section className="w-full py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block bg-[#FFF4EB] text-[#FF6B00] text-xs font-semibold px-4 py-1 rounded-full mb-4">
              WHAT WE DO
            </span>
            <h2 className="text-4xl font-bold mb-4 text-[#1A1A1A]">
              Equipment Financing Solutions
            </h2>
            <p className="text-[#4A4A4A] mb-8 leading-relaxed">
              We provide customized financing solutions that accelerate your
              business expansion. Whether you need new machinery, technology, or
              vehicles, our financing options give you the capital you need
              without draining cash flow.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#FF6B00] mt-2"></span>
                <p className="text-[#4A4A4A]">Fast approval in 24-48 hours</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#FF6B00] mt-2"></span>
                <p className="text-[#4A4A4A]">100% equipment cost coverage</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#FF6B00] mt-2"></span>
                <p className="text-[#4A4A4A]">Flexible repayment schedules</p>
              </li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="relative">
            <Image
              src="/about-equipment.jpg" // 🔹 place your image in /public
              alt="Equipment Financing"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg"
            />
            {/* Floating Stat */}
            <div className="absolute -bottom-6 left-6 bg-white shadow-md border border-[#F1F1F1] rounded-xl px-6 py-4">
              <p className="font-bold text-[#FF6B00] text-xl">100%</p>
              <p className="text-sm text-[#4A4A4A]">Equipment Coverage</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Breadcrumbs / Intro Section */}
      <section className="relative w-full py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10 items-start">
          {/* Left: Description */}
          <div>
            <h1 className="text-4xl font-bold text-[#1A1A1A] mb-4">
              Flexible Financing Options for Your Equipment Needs
            </h1>
            <p className="text-[#4A4A4A] leading-normal mb-2">
              At Equipments Dekho, we understand that purchasing heavy equipment
              is a big investment. To make it easier for contractors, builders,
              and businesses, we’ve partnered with leading banks and NBFCs to
              bring you flexible and reliable financing options.
            </p>
            <p className="text-[#4A4A4A] leading-normal mb-2">
              Whether you’re looking to buy new equipment, upgrade to used
              machinery, or explore leasing solutions, our financing partners
              ensure you get the best rates, easy EMIs, and quick approvals.
              With simple documentation and transparent processes, you can
              access the equipment you need without straining your working
              capital.
            </p>
            <p className="text-[#4A4A4A] leading-normal">
              Our goal is to help you focus on your projects while we simplify
              the financial side. With pan-India coverage and trusted financial
              institutions by your side, we make sure you’re never held back by
              budget constraints.
            </p>
          </div>

          {/* Right: Why Finance with Us */}
          <div className="bg-white w-full rounded-2xl shadow-lg border border-[#F1F1F1] p-10  mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-[#1A1A1A]">
              {" "}
              Why Finance with{" "}
              <span className="text-[#FF6B00]">Equipments Dekho?</span>{" "}
            </h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-[#4A4A4A] hover:text-[#FF6B00] transition-all duration-300">
                <span className="text-[#FF6B00] text-xl">✔</span> Tailored
                Solutions for Every Buyer
              </li>
              <li className="flex items-center gap-2 text-[#4A4A4A] hover:text-[#FF6B00] transition-all duration-300">
                <span className="text-[#FF6B00] text-xl">✔</span> Flexible EMI
                Plans
              </li>
              <li className="flex items-center gap-2 text-[#4A4A4A] hover:text-[#FF6B00] transition-all duration-300">
                <span className="text-[#FF6B00] text-xl">✔</span> Quick &
                Hassle-Free Approvals
              </li>
              <li className="flex items-center gap-2 text-[#4A4A4A] hover:text-[#FF6B00] transition-all duration-300">
                <span className="text-[#FF6B00] text-xl">✔</span> Financing for
                New & Used Equipment
              </li>
              <li className="flex items-center gap-2 text-[#4A4A4A] hover:text-[#FF6B00] transition-all duration-300">
                <span className="text-[#FF6B00] text-xl">✔</span> Pan-India
                Reach
              </li>
              <li className="flex items-center gap-2 text-[#4A4A4A] hover:text-[#FF6B00] transition-all duration-300">
                <span className="text-[#FF6B00] text-xl">✔</span> Preserve Your
                Working Capital
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 🔹 Finance Calculator */}
      <section className="w-full py-10 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Calculator */}
          <div>
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-2">
              Finance Calculator
            </h2>
            <p className="text-[#4A4A4A] mb-8">
              Estimate your monthly EMI by entering equipment cost, down
              payment, and tenure.
            </p>

            <div className="bg-[#FAFAFA] p-8 rounded-2xl shadow-md border border-[#F1F1F1]">
              <form className="grid gap-6">
                <div className="flex flex-col text-left">
                  <label className="font-medium mb-2">
                    Equipment Price (₹)
                  </label>
                  <input
                    type="number"
                    placeholder="Enter price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="p-3 rounded-xl border border-[#E5E5E5] focus:ring-2 focus:ring-[#FF6B00] outline-none"
                  />
                </div>

                <div className="flex flex-col text-left">
                  <label className="font-medium mb-2">Down Payment (%)</label>
                  <input
                    type="number"
                    placeholder="Enter %"
                    value={downPayment}
                    onChange={(e) => setDownPayment(e.target.value)}
                    className="p-3 rounded-xl border border-[#E5E5E5] focus:ring-2 focus:ring-[#FF6B00] outline-none"
                  />
                </div>

                <div className="flex flex-col text-left">
                  <label className="font-medium mb-2">Tenure (Months)</label>
                  <input
                    type="number"
                    placeholder="e.g. 36"
                    value={tenure}
                    onChange={(e) => setTenure(e.target.value)}
                    className="p-3 rounded-xl border border-[#E5E5E5] focus:ring-2 focus:ring-[#FF6B00] outline-none"
                  />
                </div>

                <button
                  type="button"
                  onClick={calculateEMI}
                  className="bg-gradient-to-r from-[#FF6B00] to-[#E85A00] text-white font-semibold py-3 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  Calculate EMI
                </button>
              </form>

              {emi !== null && (
                <div className="mt-6 p-4 bg-white border border-[#F1F1F1] rounded-xl shadow-sm">
                  <p className="text-lg font-bold text-[#FF6B00]">
                    Estimated EMI: ₹{emi}/month
                  </p>
                </div>
              )}

              <p className="mt-6 text-sm text-[#4A4A4A]">
                Like what you see?{" "}
                <span className="text-[#FF6B00] font-semibold cursor-pointer">
                  Apply Now →
                </span>
              </p>
            </div>
          </div>

          {/* Right: Info / Benefits + Image */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#1A1A1A]">
              Why Use Our Finance Calculator?
            </h3>
            <p className="text-[#4A4A4A]">
              Get an instant estimate of your monthly EMI and plan your finances
              better. Our calculator helps you make informed decisions before
              applying for equipment finance.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-[#FF6B00] font-bold text-xl">✓</span>
                <span>Quick and easy EMI calculation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF6B00] font-bold text-xl">✓</span>
                <span>
                  Adjust tenure and down payment as per your convenience
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF6B00] font-bold text-xl">✓</span>
                <span>Compare EMI options from multiple finance partners</span>
              </li>
            </ul>

            <div className="mt-6">
              <Image
                src="/calculator-illustration.png"
                alt="Calculator Illustration"
                width={500}
                height={300}
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#1A1A1A]">
            Our Finance Partners
          </h2>
          <p className="text-[#4A4A4A] text-lg sm:text-xl pb-5">
            Powered by India’s leading financial institutions
          </p>

          {/* Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-items-center">
            {financePartners.map((partner, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={150}
                  height={60}
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 FAQs Section */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1A1A1A]">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "Can I finance both new and used equipment?",
                a: "Yes! Financing is available for both new machinery and pre-owned equipment listed on Equipments Dekho, subject to partner approval.",
              },
              {
                q: "How fast can I get approval?",
                a: "Most applications are processed within 48–72 hours, depending on documents and lender policies.",
              },
              {
                q: "What documents are required?",
                a: "Typically, KYC (PAN, Aadhaar), business proof, bank statements, and ITRs are needed. Our team will guide you step-by-step.",
              },
              {
                q: "Does Equipments Dekho cover pan-India?",
                a: "Yes, our financing partners support contractors across metro cities and remote project sites.",
              },
              {
                q: "Can small contractors or first-time buyers get financing?",
                a: "Absolutely. We work with partners who specialize in supporting SMEs and new buyers with flexible options.",
              },
              {
                q: "How do I apply?",
                a: "Visit the equipment listing, click 'Apply for Financing', and our team will connect you with the right partner.",
              },
              {
                q: "Is my data safe?",
                a: "Yes, Equipments Dekho follows strict data protection and only shares info with trusted partners.",
              },
            ].map((faq, idx) => (
              <details
                key={idx}
                className="bg-[#FAFAFA] p-5 rounded-xl border border-[#E5E5E5] open:shadow-md"
              >
                <summary className="font-semibold text-[#1A1A1A] cursor-pointer">
                  {faq.q}
                </summary>
                <p className="mt-3 text-sm text-[#4A4A4A]">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 Contact CTA Section */}
      <section className="bg-[#FFF4EB] py-10 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">
            Get in Touch with{" "}
            <span className="text-[#FF6B00]">Our Experts</span>
          </h2>
          <p className="text-[#4A4A4A] mb-12 max-w-2xl mx-auto">
            Have questions? Our dedicated team is here to help you with
            financing options tailored to your business needs.
          </p>

          {/* Contact Cards */}
          <div className="grid gap-6 sm:grid-cols-3">
            <motion.div
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="font-semibold text-[#1A1A1A] mb-2">📞 Call Us</h3>
              <p className="text-sm text-[#4A4A4A] mb-2">
                Speak directly with our advisors
              </p>
              <p className="font-bold text-[#FF6B00]">+91 95994 99272</p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="font-semibold text-[#1A1A1A] mb-2">📧 Email Us</h3>
              <p className="text-sm text-[#4A4A4A] mb-2">
                Get detailed information
              </p>
              <p className="font-bold text-[#FF6B00]">
                info@equipmentsdekho.com
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="font-semibold text-[#1A1A1A] mb-2">
                ⏰ Business Hours
              </h3>
              <p className="text-sm text-[#4A4A4A] mb-2">Mon - Fri</p>
              <p className="font-bold text-[#FF6B00]">9:00 AM - 6:00 PM</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🔹 CTA Section */}
      {/* <section className="relative w-full py-24 bg-gradient-to-r from-[#FF6B00] to-[#E85A00] text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Your Equipment?
          </h2>
          <p className="text-lg mb-8 text-orange-100">
            Apply today and get approval within 24-48 hours. Boost your business
            with smart financing solutions.
          </p>
          <motion.button
            className="bg-white text-[#FF6B00] font-semibold px-8 py-4 rounded-2xl shadow-lg hover:bg-orange-100 transition-all duration-300"
            whileHover={{ scale: 1.08 }}
          >
            Start Application →
          </motion.button>
        </div>
      </section> */}
    </div>
  );
}
