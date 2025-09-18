import React, { useState } from "react";
import Image from "next/image";

const FinanceCalculator = () => {
  const [price, setPrice] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [tenure, setTenure] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [emi, setEmi] = useState(null);
  const [principal, setPrincipal] = useState(null);
  const [totalPayable, setTotalPayable] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);

  const calculateEMI = () => {
    const principalAmount = price - downPayment;
    const annualRate = interestRate / 100;
    const monthlyRate = annualRate / 12;

    if (!principalAmount || !tenure || !annualRate) {
      setEmi(null);
      return;
    }

    const calculatedEMI =
      (principalAmount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
      (Math.pow(1 + monthlyRate, tenure) - 1);

    const roundedEMI = Math.round(calculatedEMI);
    const totalPayment = roundedEMI * tenure;
    const totalInterestPaid = totalPayment - principalAmount;

    setPrincipal(principalAmount);
    setEmi(roundedEMI);
    setTotalPayable(totalPayment);
    setTotalInterest(totalInterestPaid);
  };

  return (
    <div>
      <section className="w-full py-10 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Calculator */}
          <div>
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-2">
              Finance Calculator
            </h2>
            <p className="text-[#4A4A4A] mb-8">
              Estimate your monthly EMI by entering equipment cost, down
              payment, interest rate, and tenure.
            </p>

            <div className="bg-[#FAFAFA] p-8 rounded-2xl shadow-md border border-[#F1F1F1]">
              {/* Input fields in 2x2 grid */}
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col text-left">
                  <label className="font-medium mb-2">Equipment Price (₹)</label>
                  <input
                    type="number"
                    placeholder="Enter price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="p-3 rounded-xl border border-[#E5E5E5] focus:ring-2 focus:ring-[#FF6B00] outline-none"
                  />
                </div>

                <div className="flex flex-col text-left">
                  <label className="font-medium mb-2">Down Payment (₹)</label>
                  <input
                    type="number"
                    placeholder="Enter amount"
                    value={downPayment}
                    onChange={(e) => setDownPayment(e.target.value)}
                    className="p-3 rounded-xl border border-[#E5E5E5] focus:ring-2 focus:ring-[#FF6B00] outline-none"
                  />
                </div>

                <div className="flex flex-col text-left">
                  <label className="font-medium mb-2">Interest Rate (%)</label>
                  <input
                    type="number"
                    placeholder="e.g. 12"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
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
              </form>

              <button
                type="button"
                onClick={calculateEMI}
                className="mt-6 w-full bg-gradient-to-r from-[#FF6B00] to-[#E85A00] text-white font-semibold py-3 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
              >
                Calculate EMI
              </button>

              {/* Results Section */}
              {emi !== null && (
                <div className="mt-8 p-6 bg-gradient-to-br from-[#FFF7F2] to-[#FFFFFF] border border-[#F1F1F1] rounded-2xl shadow-lg">
                  <h4 className="text-xl font-semibold text-[#1A1A1A] mb-4">
                    EMI Calculation Summary
                  </h4>

                  <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm">
                    <p className="text-[#4A4A4A]">Loan Amount:</p>
                    <p className="font-medium text-[#1A1A1A]">₹{principal}</p>

                    <p className="text-[#4A4A4A]">Interest Rate:</p>
                    <p className="font-medium text-[#1A1A1A]">{interestRate}%</p>

                    <p className="text-[#4A4A4A]">Tenure:</p>
                    <p className="font-medium text-[#1A1A1A]">{tenure} months</p>

                    <p className="text-[#4A4A4A]">Monthly EMI:</p>
                    <p className="font-bold text-[#FF6B00] text-lg">₹{emi}</p>

                    <p className="text-[#4A4A4A]">Total Payable:</p>
                    <p className="font-bold text-[#1A1A1A]">₹{totalPayable}</p>

                    <p className="text-[#4A4A4A]">Total Interest:</p>
                    <p className="font-bold text-[#E85A00]">₹{totalInterest}</p>
                  </div>
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
                  Adjust tenure, interest, and down payment as per your
                  convenience
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
    </div>
  );
};

export default FinanceCalculator;
