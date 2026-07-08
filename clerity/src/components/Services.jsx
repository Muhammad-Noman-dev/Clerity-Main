import React from 'react';

const ServicesPage = () => {
  return (
    <div className="bg-white text-gray-900">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-violet-600 text-white pt-24 pb-20 md:pt-32 md:pb-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-none">
            Clarity That Drives Results
          </h1>
          <p className="text-xl md:text-2xl text-indigo-100 max-w-2xl mx-auto mb-10">
            Expert consulting, strategic solutions, and transformative services designed to bring clarity to your business challenges.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-white text-indigo-700 hover:bg-indigo-50 px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Get Started Today
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We deliver tailored solutions across strategy, technology, and operations to help your organization achieve sustainable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white border border-gray-100 rounded-3xl p-10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
              <div className="text-6xl mb-8">📊</div>
              <h3 className="text-3xl font-semibold mb-4">Business Strategy</h3>
              <p className="text-gray-600 mb-8">Transform your vision into actionable strategies with data-driven insights.</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3"><span className="text-indigo-600 mt-1">✓</span> Market Analysis &amp; Research</li>
                <li className="flex items-start gap-3"><span className="text-indigo-600 mt-1">✓</span> Strategic Planning</li>
                <li className="flex items-start gap-3"><span className="text-indigo-600 mt-1">✓</span> Growth Roadmaps</li>
                <li className="flex items-start gap-3"><span className="text-indigo-600 mt-1">✓</span> Competitive Intelligence</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-white border border-gray-100 rounded-3xl p-10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
              <div className="text-6xl mb-8">💻</div>
              <h3 className="text-3xl font-semibold mb-4">Digital Transformation</h3>
              <p className="text-gray-600 mb-8">Modernize your operations with cutting-edge technology.</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3"><span className="text-indigo-600 mt-1">✓</span> Cloud Migration</li>
                <li className="flex items-start gap-3"><span className="text-indigo-600 mt-1">✓</span> Custom Software Development</li>
                <li className="flex items-start gap-3"><span className="text-indigo-600 mt-1">✓</span> AI &amp; Automation</li>
                <li className="flex items-start gap-3"><span className="text-indigo-600 mt-1">✓</span> Systems Integration</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-white border border-gray-100 rounded-3xl p-10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
              <div className="text-6xl mb-8">📈</div>
              <h3 className="text-3xl font-semibold mb-4">Operational Excellence</h3>
              <p className="text-gray-600 mb-8">Streamline processes and build resilient operations.</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3"><span className="text-indigo-600 mt-1">✓</span> Process Optimization</li>
                <li className="flex items-start gap-3"><span className="text-indigo-600 mt-1">✓</span> Performance Management</li>
                <li className="flex items-start gap-3"><span className="text-indigo-600 mt-1">✓</span> Change Management</li>
                <li className="flex items-start gap-3"><span className="text-indigo-600 mt-1">✓</span> Team Development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach / Process */}
      <section className="bg-slate-50 py-20 md:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Approach</h2>
            <p className="text-xl text-gray-600 max-w-xl mx-auto">
              A proven 5-step methodology that ensures clarity and measurable success.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {['Discovery', 'Analysis', 'Strategy', 'Implementation', 'Optimization'].map((step, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300 group">
                <div className="w-20 h-20 mx-auto mb-6 bg-indigo-600 text-white rounded-2xl flex items-center justify-center text-4xl font-bold group-hover:scale-110 transition-transform">
                  {i + 1}
                </div>
                <h3 className="text-2xl font-semibold mb-3">{step}</h3>
                <p className="text-gray-600">Phase {i + 1} description goes here.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white border border-gray-100 p-10 rounded-3xl">
              <p className="text-xl italic text-gray-700 mb-8">
                "Clerity brought complete clarity to our operations. Efficiency increased by 45% in just six months."
              </p>
              <strong className="text-indigo-700">— Sarah Chen, CEO at Nexlify</strong>
            </div>

            <div className="bg-white border border-gray-100 p-10 rounded-3xl">
              <p className="text-xl italic text-gray-700 mb-8">
                "Outstanding digital transformation strategy and execution. Best consulting partner we've worked with."
              </p>
              <strong className="text-indigo-700">— Michael Rodriguez, CTO at Vertex Solutions</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-indigo-600 to-violet-600 text-white py-20 md:py-24 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Bring Clarity to Your Business?</h2>
          <p className="text-xl text-indigo-100 mb-10">Let's discuss how we can help you achieve your goals.</p>
          <a 
            href="#contact" 
            className="inline-block bg-white text-indigo-700 hover:bg-indigo-50 px-12 py-5 rounded-full text-xl font-semibold transition-all duration-300 hover:scale-105"
          >
            Schedule Free Consultation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-white text-3xl font-bold mb-3">Clerity</h3>
            <p className="text-slate-500">Delivering clarity. Driving success.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <p className="space-y-2">
              Strategy<br />
              Digital Transformation<br />
              Operations
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <p className="space-y-2">
              About<br />
              Process<br />
              Careers
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <p>hello@clerity.co</p>
          </div>
        </div>

        <div className="text-center mt-16 text-slate-500 text-sm">
          © 2026 Clerity. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default ServicesPage;