'use client';
import React, { useState } from "react";
import {
  CheckCircle,
  Clock,
  CreditCard,
  Users,
  Star,
  Building2,
  PhoneCall,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

// Images (replace these with your actual ones)
const heroImage =
  "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1600&q=80";
const featureImgs = {
  form: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  approve: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
  ship: "https://cdn-icons-png.flaticon.com/512/679/679720.png",
};
const partnerLogos = [
  "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Google_Logo.svg",
];
const testimonials = [
  {
    name: "Ramesh Kumar",
    text: "Quick approval process helped me expand my workshop.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Anita Sharma",
    text: "Flexible repayment made it easy to manage finances.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Vikram Patel",
    text: "Highly professional team and excellent support.",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];
const faqs = [
  {
    q: "What equipment can I finance?",
    a: "We support industrial, commercial, and office equipment — from machines to IT hardware.",
  },
  {
    q: "How long does approval take?",
    a: "Typical approvals happen within 24–48 hours after document submission.",
  },
  {
    q: "What documents are required?",
    a: "Basic KYC (ID, address), business proof (where applicable), and equipment invoice/quotation.",
  },
];

export default function EquipmentFinancePage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    equipment: "",
    amount: "",
  });
  const [emi, setEmi] = useState(null);
  const [tenure, setTenure] = useState(12);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application submitted — we'll contact you soon!");
    setForm({ name: "", email: "", phone: "", equipment: "", amount: "" });
    setEmi(null);
  };

  const calculateEMI = () => {
    const P = parseFloat(form.amount || 0);
    const annualRate = 0.12;
    const r = annualRate / 12;
    const n = parseInt(tenure, 10);
    if (!P || n <= 0) {
      setEmi(null);
      return;
    }
    const emiCalc = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmi(emiCalc.toFixed(2));
  };

  const applyPlan = (amount, months) => {
    setForm((s) => ({ ...s, amount }));
    setTenure(months);
    setTimeout(calculateEMI, 50);
  };

  return (
    <div className="min-h-screen text-gray-900 antialiased">
      {/* HERO */}
      <header className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-75"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/60 to-orange-500/30 backdrop-blur-sm"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 flex flex-col md:flex-row items-center gap-12">
          {/* Hero Left */}
          <div className="md:w-6/12 text-white">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-md">
              Finance Your Equipment{" "}
              <span className="text-yellow-50">with ease</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-xl">
              Flexible plans, fast approvals, and expert support — get the
              equipment your business needs now.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#apply"
                className="inline-flex items-center gap-3 bg-white text-orange-600 font-semibold px-5 py-3 rounded-lg shadow-lg transform hover:scale-103 transition-all duration-300"
              >
                Apply Now
              </a>
              <a
                href="#plans"
                className="inline-flex items-center gap-2 border border-white/40 text-white px-4 py-3 rounded-lg hover:bg-white/10 transition-all"
              >
                View Plans
              </a>
            </div>
          </div>

          {/* Hero Right (Form) */}
          <div className="md:w-5/12 w-full" id="apply">
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 -mt-12 md:mt-0">
              <h3 className="text-lg font-semibold text-gray-800">
                Quick Application
              </h3>
              <form onSubmit={handleSubmit} className="mt-6 space-y-3">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Full name"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-300 outline-none"
                />
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Email address"
                  type="email"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-300 outline-none"
                />
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="Phone number"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-300 outline-none"
                />
                <input
                  name="equipment"
                  value={form.equipment}
                  onChange={handleChange}
                  placeholder="Equipment (e.g., Forklift)"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-300 outline-none"
                />
                <div className="flex gap-3">
                  <input
                    name="amount"
                    value={form.amount}
                    onChange={handleChange}
                    type="number"
                    placeholder="Amount (₹ or $)"
                    className="flex-1 border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-300 outline-none"
                  />
                  <select
                    value={tenure}
                    onChange={(e) => setTenure(e.target.value)}
                    className="w-36 border border-gray-200 rounded-lg px-3 py-3 focus:ring-2 focus:ring-orange-300 outline-none"
                  >
                    <option value={6}>6 mo</option>
                    <option value={12}>12 mo</option>
                    <option value={24}>24 mo</option>
                    <option value={36}>36 mo</option>
                  </select>
                </div>

                <div className="flex gap-3 mt-2">
                  <button
                    type="button"
                    onClick={calculateEMI}
                    className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-4 py-3 rounded-lg hover:scale-103 transition-all"
                  >
                    Estimate EMI
                  </button>
                  <button
                    type="submit"
                    className="flex-1 border border-orange-500 text-orange-600 font-semibold px-4 py-3 rounded-lg hover:bg-orange-50 transition-all"
                  >
                    Submit
                  </button>
                </div>

                {emi && (
                  <div className="mt-3 text-sm text-gray-700">
                    Monthly EMI ≈{" "}
                    <span className="font-semibold text-orange-600">
                      {emi}
                    </span>{" "}
                    <span className="text-gray-400"> (for {tenure} months)</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </header>

      {/* FEATURES */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose <span className="text-orange-600">Our Finance?</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl shadow-lg border text-center hover:shadow-xl transition">
            <img src={featureImgs.form} alt="Easy form" className="mx-auto w-16 h-16" />
            <h3 className="mt-4 font-semibold text-lg">Easy Application</h3>
            <p className="mt-2 text-gray-600">Simple online form, takes only a few minutes.</p>
          </div>
          <div className="p-6 rounded-2xl shadow-lg border text-center hover:shadow-xl transition">
            <img src={featureImgs.approve} alt="Approval" className="mx-auto w-16 h-16" />
            <h3 className="mt-4 font-semibold text-lg">Fast Approval</h3>
            <p className="mt-2 text-gray-600">Most loans approved in 24–48 hours.</p>
          </div>
          <div className="p-6 rounded-2xl shadow-lg border text-center hover:shadow-xl transition">
            <img src={featureImgs.ship} alt="Equipment" className="mx-auto w-16 h-16" />
            <h3 className="mt-4 font-semibold text-lg">Quick Disbursal</h3>
            <p className="mt-2 text-gray-600">Funds released quickly so you can get your equipment.</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">How it Works</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-6 bg-white rounded-xl shadow-md text-center">
              <Clock className="mx-auto w-10 h-10 text-orange-600" />
              <h3 className="mt-4 font-semibold">Apply Online</h3>
              <p className="text-gray-600">Fill out our quick application form.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md text-center">
              <CheckCircle className="mx-auto w-10 h-10 text-orange-600" />
              <h3 className="mt-4 font-semibold">Get Approved</h3>
              <p className="text-gray-600">Approval within 1–2 business days.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md text-center">
              <CreditCard className="mx-auto w-10 h-10 text-orange-600" />
              <h3 className="mt-4 font-semibold">Receive Funds</h3>
              <p className="text-gray-600">Funds disbursed and equipment delivered.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section id="plans" className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Popular <span className="text-orange-600">Plans</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[6, 12, 24].map((months, i) => (
            <div
              key={i}
              className="p-6 border rounded-2xl shadow-md hover:shadow-xl transition flex flex-col"
            >
              <h3 className="text-xl font-semibold">{months}-Month Plan</h3>
              <p className="mt-2 text-gray-600">
                Affordable EMIs spread over {months} months.
              </p>
              <button
                onClick={() => applyPlan(100000, months)}
                className="mt-auto bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-3 rounded-lg hover:scale-105 transition"
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* COUNTERS */}
      <section className="bg-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          <div>
            <h3 className="text-3xl font-bold">5,000+</h3>
            <p>Customers</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">₹50 Cr+</h3>
            <p>Loans Disbursed</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">100+</h3>
            <p>Partners</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">95%</h3>
            <p>Approval Rate</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="p-6 bg-white shadow-lg rounded-2xl">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-14 h-14 rounded-full mx-auto"
              />
              <p className="mt-4 text-gray-700 italic">"{t.text}"</p>
              <h4 className="mt-3 font-semibold text-center">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* PARTNERS */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center">
            {partnerLogos.map((logo, i) => (
              <img key={i} src={logo} alt="Partner" className="h-12 mx-auto" />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">FAQs</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border rounded-lg">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex justify-between items-center p-4 text-left"
              >
                <span>{faq.q}</span>
                {openFaq === i ? (
                  <ChevronUp className="w-5 h-5 text-orange-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-orange-600" />
                )}
              </button>
              {openFaq === i && <p className="px-4 pb-4 text-gray-600">{faq.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      {/* <section className="bg-orange-600 text-white py-20 text-center">
        <h2 className="text-3xl font-bold">Ready to Finance Your Equipment?</h2>
        <p className="mt-3 text-lg">
          Apply now and take your business to the next level.
        </p>
        <a
          href="#apply"
          className="mt-6 inline-block bg-white text-orange-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition"
        >
          Apply Today
        </a>
      </section> */}

    </div>
  );
}
