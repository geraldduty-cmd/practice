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
           I am interested in finding strategic resilience to structure solid deals and governance structures
            that withstand the particularly fluid conditions and risks in the present Latin American context.  
            This means that while my practice is focused on international business transactions and regulatory 
            matters in Latin America and the US, I seek to maximize the breadth and novelty of matters possible
            within the context of Latin American investment, deals and governance in the hope.  
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
          <p>
              Recent Representative Matters
          </p>
          <p>  
              Cross-Border Investment & Strategic Partnerships
          </p>
          <li>
            Advised an international investor in the acquisition of a Caribbean-licensed international 
            bank and represented the investor in navigating change of control and related regulatory 
            applications with the banking regulatory authority. 
          </li>
          <li>
           Advised international investors on structuring investments and joint ventures
           with operating businesses in Latin America, including governance frameworks,
           risk allocation, and regulatory compliance.
          </li>
          <li>
           Advised fintech companies in regulatory strategy and licensing applications.
          </li>
          <li>
            Represented entrepreneurs and investors in forming strategic partnerships 
            with enterprises seeking capital and operational expansion.
          </li>
          <li>
            Advised on cross-border corporate structuring for companies operating 
            across the United States, the Caribbean, and Latin America.
          </li>
           <p>  
              International Regulatory Strategy
          </p>
          <li>
            Advised and delivered executive training to a major Colombia-based
            international financial institution on corporate governance frameworks
            and board-level decision-making in cross-border financial operations.
          </li>
          <li>
            Advised corporate clients and financial institutions on regulatory 
            and policy matters affecting international commercial operations,
            including anti-money laundering (AML) compliance strategies and 
            country-specific OFAC sanctions compliance and license applications.
          </li>
           <li>
             Represented institutional interests in engagement with government 
             and regulatory authorities concerning compliance, licensing, and
             policy frameworks.
          </li>
          <li>
           Assisted companies in navigating complex legal environments in emerging markets.
          </li>
          <p>  
              Complex Corporate Matters
          </p>
          <li>
          Served as co-founder and external general counsel of a deep-tech energy 
          source research and development and manufacturing company. 
          </li>
          <li>
          Advised on corporate governance, restructuring, and risk mitigation 
            strategies for companies operating across multiple jurisdictions.
          </li>
          <li>
          Assisted clients in structuring commercial relationships and contracts
          designed to support long-term strategic partnerships.
          </li>
          <li>
         Provided counsel on dispute avoidance and resolution in cross-border
         business relationships.
          </li>
          <p>  
              Government Relations & Public Policy
          </p>
          <li>
         Developed regulatory advocacy strategies for international companies
         facing government policy decisions affecting operations and market access.
          </li>
          <li>
         Advised multinational corporate stakeholders on political and regulatory
         risk affecting investments and commercial activity.
          </li>
           <li>
         Assisted financial and corporate clients in understanding the intersection 
         of policy developments and international commercial strategy.
          </li>
           <li>
         Assisted financial and corporate clients in understanding the intersection 
         of policy developments and international commercial strategy.
          </li>
           <p>  
              Family-Owned and Legacy Enterprises
          </p>
           <li>
         Advise family-owned businesses on legal and governance structures designed to 
         support long-term growth and innovation while preserving generational 
         continuity and ownership alignment.
          </li>         
        </ul>
      </section>

      {/* Insights */}
      <section id="insights" className="px-12 py-24 border-t border-gray-200 max-w-3xl border-l border-gray-200 pl-6">
        <h2 className="text-xl mb-10 flex items-center"><span className="w-6 h-px bg-gray-400 mr-3"></span>Insights</h2>
        <article className="space-y-6 text-gray-600 leading-relaxed">
          <h3 className="text-gray-800">Sanctions Reversibility in Venezuela</h3>
          <p className="text-sm text-gray-500">SANCTIONS REVERSIBILITY IN VENEZUELA:
              STRUCTURING BUSINESS IN VIEW OF A NON-LINEAR REGULATORY ENVIRONMENT
          </p>
          <p>For those with interests in Venezuela, recent events in the country created 
            a glimmer of hope that investment readiness was possible in the foreseeable future.  
            While this long desired breeze of hope feels good after the unrelentingly long 
            desert road of depressing prospects the country has faced, hope, of course, for 
            the investor, should not substitute for understanding and planning for the 
            still-substantial risk involved in operating in the country.  
          </p>
          <p>Sanctions risk is but one of the risks to take into account.  But, focusing 
            in on this one risk for the moment, most conversations about Venezuela right 
            now start from the same premise, that conditions are shifting and sanctions 
            are easing.  It assumes Venezuela is moving along a familiar path from “closed” 
            to “open.” However, US sanctions strategy towards Venezuela is something far more 
            complex, a system that is partially accessible, conditionally authorized, and 
            structurally reversible. In that system, the key variable is not timing. It is operability. 
          </p>
          <p>Consider how transactions actually behave in this environment. A deal can be fully 
            compliant at signing and still fail to function. Not because the law changes in a 
            dramatic way, but because the system around the transaction shifts. A general license 
            is narrowed or not renewed. A correspondent bank declines to process a payment it would 
            have accepted six months earlier. A counterparty loses the ability to perform under 
            evolving compliance constraints. An enforcement pathway that exists in theory cannot 
            be accessed in practice because the assets are not where the legal rights point.  
            Operating in this environment is like swimming in a body of water with complex and 
            dangerous currents and jagged rocks, pulling and pushing you unexpectedly towards danger. 
            The sudden and unavoidable drag of the rip currents are normal features of a non-linear 
            regulatory environment.
          </p>
          <P>Sanctions relief is being interpreted as a directional signal, more access, 
            more opportunity, more room to operate. But sanctions in Venezuela do not function as a 
            one-way easing mechanism. They operate as a policy tool that expands and contracts in 
            response to conditions, often on timelines that do not align with transaction cycles. 
            That creates a specific type of risk: not whether a deal is permitted, but whether it
            remains executable over time.
          </P>
          <P>The same applies to institutional factors. Political developments may alter 
            expectations, but they do not restore enforceability, judicial independence, or 
            regulatory continuity. Contracts can be drafted, but they do not enforce themselves. 
            Arbitration can be obtained, but recovery depends on asset location and practical access. 
            Payment structures can be designed, but they depend on intermediaries whose risk tolerance 
            is external to the transaction.
          </P>
          <P>This is also why the idea of “first-mover advantage” in Venezuela deserves scrutiny. 
            In environments characterized by institutional fragility and regulatory reversibility, 
            early entry often carries asymmetric downside. Transactions executed in ambiguous or 
            transitional phases are the most exposed to later recharacterization, political scrutiny, 
            or challenges to validity. What appears to be advantage can become embedded exposure.
          </P>
          <P>So what differentiates outcomes? In the Venezuela of 2026, it is not optimism, nor 
          proximity nor speed. The actors who will perform in this environment are those who treat 
          uncertainty as a design condition rather than a temporary obstacle. They assume that 
          sanctions parameters may shift mid-transaction. They assume that payment flows may be 
          disrupted even where activity is lawful. They assume that enforcement may need to occur 
          outside the jurisdiction entirely. And they structure accordingly.
          </P>
          <P>
          Legal readiness means the ability to structure transactions that can continue, pause, 
          or unwind without losing control of risk as conditions evolve.
          </P>
          <P>From a decision-making perspective, the question is not necessarily whether now  is 
            the right time to enter, but whether the transaction functions if sanctions tighten again. 
            Will the payment actually clear through the banking system as currently configured? If 
            performance breaks down, where, and how, does enforcement realistically occur?
          </P>
          <P>If those questions do not have clear answers, timing is beside the point. 
            In Venezuela, access is constrained by legal, financial, and institutional mechanics 
            that operate independently of headlines. In that context, the advantage will not 
            necessarily accrue to those who arrive first. It will accrue to those who are prepared 
            to operate when the system does what it consistently does, shift.
          </P>
        </article>
      </section>

      {/* About */}
      <section id="about" className="px-12 py-24 border-t border-gray-200 max-w-3xl border-l border-gray-200 pl-6">
        <h2 className="text-xl mb-8 flex items-center"><span className="w-6 h-px bg-gray-400 mr-3"></span>About</h2>
        <div className="space-y-5 text-gray-600 leading-relaxed">
          <p>
            Gerald Duty is an international corporate attorney advising 
            investors, entrepreneurs, and institutions engaged in cross-border
            business in the Americas and Europe.
          </p>
          <p>
            Based in Miami, his practice focuses on the legal and strategic 
            dimensions of international partnerships, investment structures, 
            and regulatory environments affecting companies operating across 
            multiple jurisdictions. He has advised financial institutions, 
            investors, and operating businesses navigating complex legal 
            frameworks while pursuing expansion and collaboration across borders.
          </p>
          <p>
            Much of his work involves helping entrepreneurs and established 
            enterprises structure partnerships that allow businesses to grow 
            internationally while maintaining the distinctive character that 
            made them successful. His experience spans matters involving corporate 
            governance, regulatory strategy, cross-border commercial relationships, 
            and the legal architecture of long-term business ventures.
          </p>
          <p>
            Gerald’s practice reflects a longstanding interest in how traditional 
            enterprises—from family-owned companies to regionally rooted businesses—adapt 
            to modern economic realities while preserving the culture and institutional 
            knowledge that sustain them across generations.
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
       <p className="text-gray-600 mb-4">Ways to Connect:</p>

        <div className="space-y-1 text-gray-900">
          <p>Gerald Duty</p>
          <p>Richards & Partners, P.A.</p>
          <p>2665 South Bayshore Drive, Suite 703</p>
          <p>Miami, Florida 33133 USA</p>
          <p className="mt-4">gduty@richards-law.com</p>
          <p className="mt-4">gerald@geraldduty.com</p>
          <p className="mt-4">Telephone: 305-858-9900</p>
          <p className="mt-4">LinkedIn: www.linkedin.com/in/gduty</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-12 py-10 border-t border-gray-200 text-sm text-gray-500">
        © {new Date().getFullYear()} Gerald Duty
      </footer>
    </div>
  );
}
