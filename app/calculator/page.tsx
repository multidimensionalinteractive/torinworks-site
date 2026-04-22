'use client';

import { useState } from 'react';
import Header from '../sections/Header';
import Footer from '../sections/Footer';

export default function Calculator() {
  // Test model inputs (Lesley's proposal)
  const [lawyersInTest, setLawyersInTest] = useState(10);
  const [sampleLeads, setSampleLeads] = useState(70);
  const [conversionRate, setConversionRate] = useState(30);
  const [fullPrice, setFullPrice] = useState(6000);
  const [leadGenCost, setLeadGenCost] = useState(150);
  // Pack model inputs
  const [packSize, setPackSize] = useState(20);
  const [packPrice, setPackPrice] = useState(3000);
  // Benchmark
  const [tvLeadPrice, setTvLeadPrice] = useState(500);
  const [tvLeadsInDeal, setTvLeadsInDeal] = useState(10);

  const sampleTotalLeads = lawyersInTest * sampleLeads;
  const sampleTotalRevenue = lawyersInTest * fullPrice;
  const sampleExpectedRevenue = sampleTotalRevenue * (conversionRate / 100);
  const sampleTotalCost = sampleTotalLeads * leadGenCost;
  const sampleProfit = sampleExpectedRevenue - sampleTotalCost;
  const sampleRoi = sampleTotalCost > 0 ? (sampleProfit / sampleTotalCost) * 100 : 0;
  const sampleCostPerConvertedLead = sampleTotalLeads > 0 ? sampleTotalCost / (lawyersInTest * sampleLeads * (conversionRate / 100)) : 0;

  const packTotalRevenuePerLawyer = packPrice;
  const packTotalLeadsPerLawyer = packSize;
  const packCostPerLawyer = packSize * leadGenCost;
  const packProfitPerLawyer = packPrice - packCostPerLawyer;
  const packRoi = packCostPerLawyer > 0 ? (packProfitPerLawyer / packCostPerLawyer) * 100 : 0;
  const packEffectiveCpl = packPrice / packSize;

  const tvTotalPrice = tvLeadPrice * tvLeadsInDeal;
  const tvEffectiveCpl = tvTotalPrice / tvLeadsInDeal;

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="bg-dark-teal py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                Legal Lead Pricing Calculator
              </h1>
              <p className="text-white/70 mt-4 text-lg">
                Model Lesley's partial-info test and pack pricing against TV lead benchmarks.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-14 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Inputs */}
              <div className="space-y-10">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Test Model Inputs</h2>
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Lawyers in test</label>
                      <input type="number" value={lawyersInTest} onChange={e => setLawyersInTest(Number(e.target.value))} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Sample leads per lawyer</label>
                      <input type="number" value={sampleLeads} onChange={e => setSampleLeads(Number(e.target.value))} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Conversion rate to paid (%)</label>
                      <input type="number" value={conversionRate} onChange={e => setConversionRate(Number(e.target.value))} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full price per lawyer ($)</label>
                      <input type="number" value={fullPrice} onChange={e => setFullPrice(Number(e.target.value))} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Cost to generate 1 lead ($)</label>
                      <input type="number" value={leadGenCost} onChange={e => setLeadGenCost(Number(e.target.value))} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" />
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Pack Model Inputs</h2>
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Pack size (leads)</label>
                      <input type="number" value={packSize} onChange={e => setPackSize(Number(e.target.value))} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Pack price ($)</label>
                      <input type="number" value={packPrice} onChange={e => setPackPrice(Number(e.target.value))} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" />
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-6">TV Lead Benchmark</h2>
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Price per TV lead ($)</label>
                      <input type="number" value={tvLeadPrice} onChange={e => setTvLeadPrice(Number(e.target.value))} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Leads in TV deal</label>
                      <input type="number" value={tvLeadsInDeal} onChange={e => setTvLeadsInDeal(Number(e.target.value))} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="space-y-8">
                <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">Test Model Results</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-600 text-sm">Total sample leads</span>
                      <span className="font-semibold text-gray-900">{sampleTotalLeads.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-600 text-sm">Max revenue (100% convert)</span>
                      <span className="font-semibold text-gray-900">${sampleTotalRevenue.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-600 text-sm">Expected revenue ({conversionRate}% convert)</span>
                      <span className="font-semibold text-accent">${sampleExpectedRevenue.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-600 text-sm">Total lead-gen cost</span>
                      <span className="font-semibold text-gray-900">${sampleTotalCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-600 text-sm">Profit</span>
                      <span className={`font-semibold ${sampleProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>${sampleProfit.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-600 text-sm">ROI</span>
                      <span className={`font-semibold ${sampleRoi >= 0 ? 'text-green-600' : 'text-red-600'}`}>{sampleRoi.toFixed(1)}%</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-gray-600 text-sm">Effective cost per converted lead</span>
                      <span className="font-semibold text-gray-900">${Math.round(sampleCostPerConvertedLead).toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">Pack Model Results</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-600 text-sm">Pack price</span>
                      <span className="font-semibold text-gray-900">${packPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-600 text-sm">Pack lead-gen cost</span>
                      <span className="font-semibold text-gray-900">${packCostPerLawyer.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-600 text-sm">Profit per pack</span>
                      <span className={`font-semibold ${packProfitPerLawyer >= 0 ? 'text-green-600' : 'text-red-600'}`}>${packProfitPerLawyer.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-600 text-sm">ROI</span>
                      <span className={`font-semibold ${packRoi >= 0 ? 'text-green-600' : 'text-red-600'}`}>{packRoi.toFixed(1)}%</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-gray-600 text-sm">Effective CPL for lawyer</span>
                      <span className="font-semibold text-accent">${packEffectiveCpl.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-dark-teal rounded-2xl p-8 text-white">
                  <h3 className="text-lg font-bold mb-6">Comparison</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-white/10">
                      <span className="text-white/70 text-sm">TV lead effective CPL</span>
                      <span className="font-semibold">${tvEffectiveCpl.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-white/10">
                      <span className="text-white/70 text-sm">Our pack effective CPL</span>
                      <span className="font-semibold text-accent">${packEffectiveCpl.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-white/70 text-sm">Our advantage</span>
                      <span className={`font-semibold ${packEffectiveCpl < tvEffectiveCpl ? 'text-green-400' : 'text-red-400'}`}>
                        {packEffectiveCpl < tvEffectiveCpl ? `${((1 - packEffectiveCpl/tvEffectiveCpl) * 100).toFixed(0)}% cheaper` : `${(((packEffectiveCpl/tvEffectiveCpl) - 1) * 100).toFixed(0)}% more expensive`}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
