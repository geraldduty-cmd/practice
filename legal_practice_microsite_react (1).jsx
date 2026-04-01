import React from "react";

export default function Site() {
  return (
    <div className="bg-white text-gray-900 font-serif">
      {/* Header */}
      <header className="flex justify-between items-center px-12 py-8 border-b border-gray-200">
        <div className="text-lg tracking-wide">Gerald Duty</div>
        <nav className="space-x-10 text-sm text-gray-600">
          <a href="#thesis" className="hover:text-black">Thesis</a>
          <a href="#practice" className="hover:text-black">Practice</a>
          <a href="#matters" className="hover:text-black">Matters</a>
          <a href="#insights" className="hover:text-black">Insights</a>
          <a href="#about" className="hover:text-black">About</a>
          <a href="#contact" className="hover:text-black">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="px-12 py-32 max-w-4xl">
        <h1 className="text-3xl leading-snug mb-6 font-medium">
          Counsel in complex, cross-border, and non-standard situations.
        </h1>
        <p className="text-base text-gray-600 max-w-xl leading-relaxed">
          Typically engaged by founders, investors, and institutions where legal structure,
          regulatory exposure, and execution must align under evolving conditions.
        </p>
      </section>

      {/* Practice Thesis */}
      <section id="thesis" className="px-12 py-24 border-t border-gray-200 max-w-3xl">
        <h2 className="text-xl mb-8">Practice Thesis</h2>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            My practice is centered on structuring transactions and governance frameworks
            that can withstand unstable or non-linear environments.
          </p>
          <p>
            Much of my work takes place in Latin America and the Caribbean, where legal, financial, and
            political conditions do not always move in predictable or continuous ways. In that
            context, the central problem is not simply whether a transaction is permissible,
            but whether it remains operable as conditions evolve.
          </p>
          <p>
            Across engagements, the objective is consistent: to design structures that
            preserve optionality, maintain control over risk, and allow transactions to
            function even as the surrounding system shifts.
          </p>
        </div>
      </section>

      {/* Practice */}
      <section id="practice" className="px-12 py-24 border-t border-gray-200 max-w-4xl">
        <h2 className="text-xl mb-10">Practice</h2>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 text-gray-700">
          <div>
            <h3 className="mb-2 text-gray-900">Cross-Border Transactions</h3>
            <p>
              Advising on investment structures, joint ventures, and strategic
              partnerships across the United States, Latin America, and the Caribbean.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-gray-900">Regulatory Strategy</h3>
            <p>
              Counsel on regulatory exposure, sanctions frameworks, and positioning in
              complex or evolving policy environments.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-gray-900">Special Situations</h3>
            <p>
              Engagements involving non-standard transactions requiring coordination
              across legal, commercial, and institutional constraints.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-gray-900">Private Capital & Partnerships</h3>
            <p>
              Structuring long-term investment and partnership frameworks, including
              family-owned and legacy enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* Matters */}
      <section id="matters" className="px-12 py-24 border-t border-gray-200 max-w-3xl">
        <h2 className="text-xl mb-10">Representative Matters</h2>
        <ul className="space-y-6 text-gray-700 leading-relaxed">
          <li>
            Advising an international investor in the acquisition of a Caribbean-licensed
            bank, including regulatory strategy and change-of-control approvals.
          </li>
          <li>
            Working with investors and operators on structuring cross-border joint
            ventures across Latin America, with emphasis on governance and risk
            allocation.
          </li>
          <li>
            Advising financial institutions and corporate clients on regulatory exposure,
            including AML frameworks and sanctions-related strategy.
          </li>
          <li>
            Serving as co-founder and external general counsel to a deep-tech energy
            company spanning research, manufacturing, and commercialization.
          </li>
          <li>
            Developing regulatory advocacy strategies tied to policy decisions affecting
            market access and cross-border operations.
          </li>
        </ul>
      </section>

      {/* Insights */}
      <section id="insights" className="px-12 py-24 border-t border-gray-200 max-w-3xl">
        <h2 className="text-xl mb-10">Insights</h2>
        <div className="space-y-10 text-gray-700">
          <div>
            <h3 className="text-gray-900 mb-1">
              Sanctions Reversibility in Venezuela
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              Structuring Business in a Non-Linear Regulatory Environment
            </p>
            <p>
              U.S. sanctions policy toward Venezuela does not operate as a linear
              easing process, but as a system that is partially accessible,
              conditionally authorized, and structurally reversible. In that
              system, the central variable is not timing. It is operability.
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-12 py-24 border-t border-gray-200 max-w-3xl">
        <h2 className="text-xl mb-8">About</h2>
        <div className="space-y-5 text-gray-700 leading-relaxed">
          <p>
            Gerald Duty is an international corporate attorney advising investors,
            founders, and institutions engaged in cross-border business across the
            Americas and Europe.
          </p>
          <p>
            His practice focuses on structuring international partnerships,
            investment platforms, and governance frameworks in environments shaped
            by regulatory complexity and institutional variability.
          </p>
          <p>
            His work often involves situations where legal structure must align
            with practical execution under evolving conditions, including emerging
            markets, regulated sectors, and non-standard transactions.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-12 py-24 border-t border-gray-200 max-w-3xl">
        <h2 className="text-xl mb-6">Contact</h2>

        {/* Logo */}
        <div className="mb-8">
          <img
            src="/Richards.png"
            alt="Firm Logo"
            className="h-16 opacity-90 object-contain"
          />
        </div>

        <p className="text-gray-700 mb-4">
          For inquiries regarding potential engagements, please reach out directly.
        </p>

        <div className="space-y-1 text-gray-900">
          <p>gduty@richards-law.com</p>
          <p className="text-gray-500 text-sm">gerald@geraldduty.com</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-12 py-10 border-t border-gray-200 text-sm text-gray-500">
        © {new Date().getFullYear()} Gerald Duty
      </footer>
    </div>
  );
}
