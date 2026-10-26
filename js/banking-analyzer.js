/**
 * ============================================================================
 * OPTIFILE TRUE EXAMINER ENGINE v5.0 — COMPLETE BANKING PYQ & EXPECTED EDITION
 * File Path: /js/banking-analyzer.js
 * ============================================================================
 * Covers All 3 Banking Exams with 23 Complete Question Sets (46 Real Prompts):
 *  1. SBI PO / IBPS PO Mains (5 Sets x 2 Sections = 20 Prompts)
 *  2. RBI Grade B Phase-II (3 Sets x 3 Sections = 18 Prompts)
 *  3. NABARD Grade A / IBPS SO (3 Sets x 2 Sections = 12 Prompts)
 */

(function (window) {
    'use strict';

    // ------------------------------------------------------------------------
    // 1. COMPLETE BANKING QUESTION KNOWLEDGE BASE (ALL 23 SETS / 46 PROMPTS)
    // ------------------------------------------------------------------------
    const QUESTION_KNOWLEDGE_BASE = {
        // ==================== SBI PO / IBPS PO: SECTION 1 (LETTERS/EMAILS) ====================
        'sbi-po-sec1-pair0': {
            topicName: 'Set 1: KYC Compliance Email OR Unauthorized ATM/UPI Debit Reversal Letter',
            keywords: ['kyc', 'know your customer', 'compliance', 'document', 'account', 'restriction', 'update', 'corporate', 'atm', 'upi', 'debit', 'unauthorized', 'reversal', '25000', '25,000', 'block', 'branch manager', 'credentials', 'fraud', 'transaction'],
            checklist: [
                { point: 'Formal Header, Date & Clear Subject Line (KYC Update / Unauthorized ATM Debit)', regex: /subject\s*:/i },
                { point: 'Account Details / Reference Number & Specific Issue Context', regex: /\b(account|a\/c|kyc|atm|upi|25,000|25000|transaction|compliance|documents)\b/i },
                { point: 'Regulatory / Security Reference (RBI Zero-Liability / Freezing Credentials)', regex: /\b(rbi|guideline|policy|security|block|freeze|unauthorized|liability|deadline|restriction)\b/i },
                { point: 'Clear Actionable Request & Timeline for Resolution', regex: /\b(request|kindly|reversal|reimburse|submit|upload|expedite|earliest|resolve)\b/i },
                { point: 'Formal Salutation & Complimentary Sign-Off ("Respected...", "Yours faithfully,")', regex: /yours\s+(faithfully|sincerely|truly)|regards,/i }
            ],
            modelAnswer: `To,\nThe Branch Manager,\nState Bank of India,\nMain Branch.\n\nDate: 24 October 2026\n\nSubject: Urgent request for immediate reversal of unauthorized ATM debit of ₹25,000 (A/c No. XXXX4589).\n\nRespected Sir/Madam,\n\nI am writing as a long-standing savings account holder at your branch to report an unauthorized ATM debit of ₹25,000 from my account on 23 October 2026 at 18:45 Hrs. I was in possession of my debit card at the time and neither shared my PIN nor received an OTP prior to the deduction.\n\nPursuant to the Reserve Bank of India (RBI) circular on Customer Protection and Zero Liability in unauthorized electronic banking transactions, I have already blocked my debit card via the YONO portal and lodged a cyber-crime complaint within 24 hours.\n\nI kindly request you to expedite an investigation into the CCTV footage and transaction logs, and initiate a shadow reversal of ₹25,000 at the earliest.\n\nYours faithfully,\nXYZ`
        },
        'sbi-po-sec1-pair1': {
            topicName: 'Set 2: Financial & Cyber Literacy Campaign Budget Email OR Ombudsman CSIS Subsidy Letter',
            keywords: ['regional manager', 'budget', 'approval', 'financial', 'cyber', 'literacy', 'campaign', 'senior citizen', 'phishing', 'ombudsman', 'education', 'loan', 'interest', 'subsidy', 'csis', 'delay', 'credit', 'scheme'],
            checklist: [
                { point: 'Formal Addressee (Regional Manager / Banking Ombudsman) & Subject Line', regex: /subject\s*:/i },
                { point: 'Core Theme (Cyber Literacy for Senior Citizens OR CSIS Education Loan Subsidy Delay)', regex: /\b(cyber|literacy|senior\s+citizen|budget|ombudsman|education\s+loan|subsidy|csis)\b/i },
                { point: 'Specific Details (Estimated Budget / Loan Account & Pending Subsidy Period)', regex: /\b(₹|rs|amount|budget|sanction|disburse|moratorium|workshop|fraud|phishing|grievance)\b/i },
                { point: 'Actionable Request (Budget Sanction OR Immediate Subsidy Credit Direction)', regex: /\b(approve|approval|sanction|intervene|direct|credit|reimburse|kindly|request)\b/i },
                { point: 'Formal Salutation & Sign-Off ("Respected Sir/Madam,", "Yours faithfully,")', regex: /yours\s+(faithfully|sincerely|truly)|regards,/i }
            ],
            modelAnswer: `To,\nThe Banking Ombudsman,\nReserve Bank of India.\n\nDate: 24 October 2026\n\nSubject: Grievance regarding prolonged delay in credit of education loan interest subsidy under CSIS Scheme.\n\nRespected Sir/Madam,\n\nI wish to bring to your kind attention the undue delay of over eight months in crediting the interest subsidy on my Education Loan (A/c No. XXXX7821) under the Central Sector Interest Subsidy (CSIS) scheme.\n\nDespite submitting my income certificate and bonafide academic documents within the stipulated timeline, the servicing branch has charged compound interest during the moratorium period, inflating my repayment obligation unfairly.\n\nAs my written representations to the branch and nodal officer dated 10 August 2026 remain unresolved beyond 30 days, I request your good office to intervene, direct the bank to credit the pending subsidy, and recalculate my EMI schedule.\n\nYours faithfully,\nXYZ`
        },
        'sbi-po-sec1-pair2': {
            topicName: 'Set 3: Single-to-Joint Account Conversion Letter OR Editor Letter on Digital Arrest & Phishing Scams',
            keywords: ['joint', 'account', 'conversion', 'single', 'either or survivor', 'spouse', 'debit card', 'kyc', 'editor', 'newspaper', 'digital arrest', 'phishing', 'scam', 'cyber', 'fraud', 'awareness', 'depositors', 'rbi'],
            checklist: [
                { point: 'Formal Recipient Block (Branch Manager / Editor) & Clear Subject Line', regex: /subject\s*:/i },
                { point: 'Specific Context (Single-to-Joint "Either or Survivor" Mandate OR Rising "Digital Arrest" Cyber Scams)', regex: /\b(joint\s+account|either\s+or\s+survivor|spouse|digital\s+arrest|phishing|cyber\s+fraud|scam)\b/i },
                { point: 'Supporting Details (KYC Documents Enclosed OR Public Awareness & Helpline 1930 Mention)', regex: /\b(kyc|aadhaar|pan|document|form|1930|helpline|otp|senior\s+citizens|vigilance)\b/i },
                { point: 'Polite Call to Action (Update Account Mandate/Issue Card OR Publish Editorial Column)', regex: /\b(request|kindly|convert|issue|publish|highlight|sensitize|readers)\b/i },
                { point: 'Formal Salutation & Complimentary Sign-Off ("Yours faithfully," / "Yours truly,")', regex: /yours\s+(faithfully|sincerely|truly)/i }
            ],
            modelAnswer: `To,\nThe Editor,\nThe Financial Express,\nNew Delhi.\n\nDate: 24 October 2026\n\nSubject: Rising menace of "Digital Arrest" and APK phishing frauds targeting retail bank depositors.\n\nRespected Sir/Madam,\n\nThrough the columns of your esteemed daily, I wish to draw urgent public and regulatory attention toward the alarming surge in "Digital Arrest" extortion and malicious APK phishing scams defrauding innocent depositors across India.\n\nCybercriminals impersonating law enforcement agencies coerce senior citizens into transferring their life savings into mule accounts under false money-laundering pretexts. Although the RBI and banks regularly issue advisories, lack of digital hygiene continues to expose vulnerable customers.\n\nI request you to publish a dedicated awareness column educating citizens that no government agency conducts video-call arrests, and urging victims to immediately report unauthorized transfers on the National Cyber Crime Helpline (1930).\n\nYours truly,\nXYZ`
        },
        'sbi-po-sec1-pair3': {
            topicName: 'Set 4: Dormant Account Activation & Penalty Waiver Letter OR Gold Loan Valuer Deployment Email',
            keywords: ['dormant', 'inoperative', 'account', 'activation', 'reactivate', 'waiver', 'penal', 'charges', 'minimum balance', 'medical', 'hospitalization', 'kyc', 'gold loan', 'valuer', 'appraiser', 'regional', 'branch', 'agri', 'disbursal'],
            checklist: [
                { point: 'Official Header / Email Metadata & Concise Subject Line', regex: /subject\s*:/i },
                { point: 'Core Issue Stated Clearly (Inoperative Account Reactivation OR Surge in Gold Loan Applications)', regex: /\b(dormant|inoperative|reactivate|activation|penal|waiver|gold\s+loan|valuer|appraiser)\b/i },
                { point: 'Genuine Justification / Operational Data (Medical Hospitalization Proof OR Pending Loan Turnaround Time)', regex: /\b(medical|hospital|discharge|kyc|turnaround|tat|festive|agricultural|applications|volume)\b/i },
                { point: 'Specific Request (Waive Charges & Activate A/c OR Empanel Additional Valuer)', regex: /\b(request|kindly|waive|activate|depute|empanel|approve|expedite)\b/i },
                { point: 'Formal Salutation & Sign-Off ("Yours faithfully," / "Regards,")', regex: /yours\s+(faithfully|sincerely|truly)|regards,/i }
            ],
            modelAnswer: `To,\nThe Branch Manager,\nPunjab National Bank,\nCivil Lines Branch.\n\nDate: 24 October 2026\n\nSubject: Request for reactivation of dormant savings account (A/c No. XXXX3310) and waiver of penal charges.\n\nRespected Sir/Madam,\n\nI am writing to request the reactivation of my savings account (A/c No. XXXX3310), which was classified as inoperative last month due to the absence of customer-induced transactions over the past two years.\n\nI was undergoing prolonged medical treatment and hospitalization in another city, which prevented me from operating the account or maintaining the stipulated Monthly Average Balance. I have enclosed my self-attested KYC documents (PAN and Aadhaar) along with my hospital discharge summary for verification.\n\nIn light of my genuine medical exigency and RBI guidelines on sympathetic consideration of basic account charges, I kindly request you to waive the accumulated non-maintenance charges and restore my account to active status.\n\nYours faithfully,\nXYZ`
        },
        'sbi-po-sec1-pair4': {
            topicName: 'Set 5: Mudra / CGTMSE MSME Working Capital Loan Letter OR CIBIL Score Rectification Letter',
            keywords: ['mudra', 'pmmy', 'cgtmse', 'msme', 'collateral', 'working capital', 'loan', 'credit', 'enterprise', 'turnover', 'gst', 'cibil', 'credit score', 'nodal officer', 'settled', 'noc', 'no dues', 'rectification', 'bureau'],
            checklist: [
                { point: 'Formal Addressee (Branch Manager / Principal Nodal Officer) & Subject Line', regex: /subject\s*:/i },
                { point: 'Core Subject Context (MSME Working Capital under PMMY/CGTMSE OR CIBIL Credit Bureau Error)', regex: /\b(mudra|pmmy|cgtmse|msme|working\s+capital|cibil|credit\s+score|bureau|noc|no\s+dues)\b/i },
                { point: 'Financial / Documentary Evidence (Udyam/GST/Project Report OR Loan Closure NOC & RBI 30-Day Rule)', regex: /\b(udyam|gst|project\s+report|cash\s+flow|noc|certificate|rbi|compensation|100\s+per\s+day)\b/i },
                { point: 'Clear Actionable Request (Sanction Credit Facility OR Update CIBIL Status Immediately)', regex: /\b(sanction|appraisal|disburse|rectify|update|expunge|kindly|request)\b/i },
                { point: 'Formal Salutation & Sign-Off ("Yours faithfully,")', regex: /yours\s+(faithfully|sincerely|truly)/i }
            ],
            modelAnswer: `To,\nThe Principal Nodal Officer,\nHDFC Bank Ltd.,\nMumbai.\n\nDate: 24 October 2026\n\nSubject: Urgent rectification of erroneous "Default" status reported to CIBIL despite full loan closure (Loan A/c XXXX9012).\n\nRespected Sir/Madam,\n\nI wish to lodge a formal grievance regarding the inaccurate reporting of my closed personal loan account (No. XXXX9012) as "Overdue" in my latest CIBIL credit information report.\n\nI had repaid the entire outstanding principal and interest on 12 July 2026 and received a formal No Dues Certificate (NOC) from the servicing branch. However, due to non-updation of records by the bank, my CIBIL score has dropped by 85 points, resulting in the rejection of my housing loan application.\n\nPursuant to the RBI Credit Information Companies framework—which mandates data rectification within 30 days failing which a compensation of ₹100 per day is payable—I request you to immediately update my CIBIL status to "Closed" and issue a confirmation letter.\n\nYours faithfully,\nXYZ`
        },

        // ==================== SBI PO / IBPS PO: SECTION 2 (ESSAYS & SCENARIOS) ====================
        'sbi-po-sec2-pair0': {
            topicName: 'Set 1: Agitated Customer ₹50,000 ATM Deduction Scenario OR AI & FinTech in Banking Security/Inclusion',
            keywords: ['branch manager', 'customer', 'agitated', '50,000', '50000', 'atm', 'deducted', 'unauthorized', 'calm', 'investigation', 'reputation', 'cctv', 'ombudsman', 'artificial intelligence', 'ai', 'fintech', 'security', 'fraud', 'rural', 'financial inclusion', 'upi', 'biometric', 'credit'],
            checklist: [
                { point: 'Clear Introduction Setting Context (Empathy & De-escalation OR AI/FinTech Thesis)', regex: /\b(customer|empathy|calm|grievance|artificial\s+intelligence|fintech|banking|digital)\b/i },
                { point: 'Immediate Operational / Technical Steps (Blocking Card, Dispute Form, CCTV/Switch Logs OR AI Fraud Detection)', regex: /\b(block|freeze|dispute|cctv|log|switch|algorithm|fraud|security|biometric|kyc|authentication)\b/i },
                { point: 'Regulatory & Institutional Backing (RBI Zero-Liability Circular / T+5 Reversal OR JAM Trinity / Rural Inclusion)', regex: /\b(rbi|liability|shadow\s+credit|reversal|inclusion|rural|unbanked|vernacular|msme)\b/i },
                { point: 'Balanced Risk Mitigation & Reputation Protection', regex: /\b(trust|reputation|privacy|cyber|transparency|mitigate|safeguard|fiduciary)\b/i },
                { point: 'Structured 3+ Paragraph Flow with Way Forward Conclusion', regex: /\b(conclude|conclusion|therefore|thus|overall|way\s+forward|ultimately)\b/i }
            ],
            modelAnswer: `Handling an agitated customer who has suffered an unauthorized ATM deduction of ₹50,000 requires a blend of emotional intelligence, procedural swiftness, and regulatory compliance to uphold the bank's fiduciary trust.\n\nFirst, as Branch Manager, my immediate priority would be to de-escalate the situation by inviting the customer into my cabin, offering water, and listening empathetically without interruption. Assuring them that their hard-earned money is protected under RBI's Zero-Liability framework will immediately restore calm. Simultaneously, I would instruct the operations desk to block the compromised debit card and freeze digital channels to prevent further pilferage.\n\nSecond, I would assist the customer in filing a formal dispute form and lodging a cyber-crime report. I would initiate an internal audit of the ATM switch logs, EJ (Electronic Journal) records, and CCTV footage. In conclusion, granting a provisional shadow credit within the stipulated RBI timeline and sensitizing branch staff on proactive communication will safeguard both customer confidence and the bank's institutional reputation.`
        },
        'sbi-po-sec2-pair1': {
            topicName: 'Set 2: CBDC (e-Rupee) vs UPI Cross-Border & Monetary Policy OR Green Banking & Sovereign Green Bonds',
            keywords: ['cbdc', 'e-rupee', 'digital currency', 'upi', 'cross-border', 'settlement', 'monetary policy', 'rbi', 'interoperability', 'green banking', 'sovereign green bonds', 'net-zero', 'climate', 'renewable', 'msme', 'carbon', 'sustainable', 'taxonomy'],
            checklist: [
                { point: 'Strong Opening Defining Core Concept (CBDC vs UPI OR Green Banking & Net-Zero 2070)', regex: /\b(cbdc|e-rupee|upi|green\s+banking|green\s+bond|net-zero|rbi|monetary)\b/i },
                { point: 'Comparative Economic / Operational Analysis (Settlement Finality vs Intermediation OR Green Financing vs MSME Credit)', regex: /\b(settlement|cross-border|liquidity|intermediary|msme|credit|yield|greenium|infrastructure)\b/i },
                { point: 'Challenges & Bottlenecks Identified (Privacy/Disintermediation OR Greenwashing/High Capital Cost)', regex: /\b(privacy|disintermediation|cyber|greenwashing|taxonomy|cost|risk|bottleneck|challenge)\b/i },
                { point: 'Actionable Way Forward & RBI Policy Alignment', regex: /\b(framework|regulation|sustainable|transition|future|conclude|therefore|balanced)\b/i }
            ],
            modelAnswer: `The Reserve Bank of India's introduction of the Central Bank Digital Currency (CBDC or e-Rupee) alongside the global success of the Unified Payments Interface (UPI) marks a paradigm shift in India's digital payment architecture.\n\nWhile UPI functions as a real-time payment rail routing transactions through commercial bank deposits, the e-Rupee is legal tender representing a direct sovereign liability on the RBI's balance sheet. Consequently, CBDC eliminates inter-bank settlement risk, reduces currency printing costs, and enables programmable offline transfers. In cross-border remittances, wholesale CBDC bridges can slash settlement timelines from days to seconds and cut correspondent banking fees significantly.\n\nHowever, widespread retail CBDC adoption poses the risk of commercial bank disintermediation if depositors shift bulk savings into central bank wallets during financial stress. Therefore, imposing holding caps and non-remunerative wallet designs, while leveraging UPI for retail convenience and CBDC for programmable welfare and cross-border settlements, offers a synergistic monetary future.`
        },
        'sbi-po-sec2-pair2': {
            topicName: 'Set 3: Bank Deposit-Credit Gap (CD Ratio) & CASA Mobilization OR CBS Server Outage & Pensioner Crowd Scenario',
            keywords: ['deposit', 'credit', 'cd ratio', 'credit-deposit', 'casa', 'liquidity', 'mutual fund', 'nim', 'net interest margin', 'rbi', 'lcr', 'server', 'cbs', 'outage', 'pensioner', 'senior citizen', 'branch manager', 'crowd', 'token', 'contingency'],
            checklist: [
                { point: 'Clear Opening Diagnosis (Widening Credit-Deposit Gap OR Empathy-First Crowd Management)', regex: /\b(deposit|credit|cd\s+ratio|casa|liquidity|cbs|server|outage|pensioner|senior\s+citizen)\b/i },
                { point: 'Root Cause / Immediate Action Analysis (Shift to Equities/Mutual Funds OR Manual Token/Priority Desk Setup)', regex: /\b(mutual\s+fund|equity|inflation|rate|nim|token|seating|drinking\s+water|micro-atm|bc|it\s+team)\b/i },
                { point: 'Systemic Impact & RBI Stance (Liquidity Coverage Ratio / Bulk Deposit Reliance OR Preventing Panic)', regex: /\b(rbi|lcr|bulk\s+deposit|certificate\s+of\s+deposit|trust|transparency|escalation|grievance)\b/i },
                { point: 'Constructive Way Forward (Innovative Deposit Products/Hyper-Personalization OR Backup SOPs)', regex: /\b(conclude|conclusion|therefore|thus|strategy|sustainable|service|fiduciary)\b/i }
            ],
            modelAnswer: `The widening divergence between credit growth and deposit mobilization—reflected in an elevated Credit-Deposit (CD) ratio across Indian commercial banks—has emerged as a critical structural challenge for banking liquidity and Net Interest Margins (NIMs).\n\nHistorically, Indian households parked their surplus savings in low-cost Current and Savings Account (CASA) deposits. However, post-pandemic financialization, buoyant equity markets, and higher post-tax returns in mutual funds and small savings schemes have triggered a structural shift away from traditional bank deposits. To fund robust retail and infrastructure loan demand, banks are increasingly forced to raise costly bulk deposits and Certificates of Deposit, compressing their margins.\n\nAs the Reserve Bank of India tightens Liquidity Coverage Ratio (LCR) norms on digital deposits to prevent sudden run-off risks, banks must re-innovate. Offering flexible sweep-in deposits, bundled health-insurance term deposits for senior citizens, and deepening rural branch penetration to tap unbanked savings will be pivotal to restoring balanced credit-deposit equilibrium.`
        },
        'sbi-po-sec2-pair3': {
            topicName: 'Set 4: Account Aggregator (AA) & Unified Lending Interface (ULI) OR Cyber Resilience & Mule Account Prevention',
            keywords: ['account aggregator', 'uli', 'unified lending interface', 'ocen', 'cash-flow', 'collateral', 'msme', 'farmer', 'dpi', 'consent', 'cyber', 'mule account', 'deepfake', 'kyc', 'phishing', 'ai', 'rbi', 'mulehunter', 'zero-trust'],
            checklist: [
                { point: 'Strong Conceptual Introduction (DPI Credit Layer AA/ULI OR Evolving Cyber Threat Landscape)', regex: /\b(account\s+aggregator|uli|unified\s+lending|dpi|cyber|mule\s+account|deepfake|fraud)\b/i },
                { point: 'Core Mechanism & Benefits (Consent-Based GST/Land/Milk Data Underwriting OR AI Anomaly Detection)', regex: /\b(consent|cash-flow|gst|land\s+record|collateral-free|msme|mulehunter|biometric|kyc|real-time)\b/i },
                { point: 'Risks & Regulatory Guardrails (Data Privacy/Over-Indebtedness OR Cross-Border Cyber Syndicates)', regex: /\b(privacy|dpdp|over-leveraging|default|rbi|audit|zero-trust|encryption|2fa)\b/i },
                { point: 'Forward-Looking Conclusion', regex: /\b(conclude|conclusion|therefore|thus|future|inclusive|resilient)\b/i }
            ],
            modelAnswer: `Building on the triumph of the JAM trinity and UPI, the Account Aggregator (AA) ecosystem and the RBI's Unified Lending Interface (ULI) represent the next frontier of India's Digital Public Infrastructure (DPI)—democratizing formal credit for credit-starved MSMEs and smallholder farmers.\n\nTraditionally, Indian banking relied on asset-backed collateral underwriting, inadvertently excluding millions of street vendors, tenant farmers, and micro-enterprises lacking formal property titles. The AA framework and ULI replace collateral with consent-driven data. By seamlessly aggregating GST filings, utility bill payments, e-commerce cash flows, digitized land records, and dairy cooperative pourer data via standardized APIs, lenders can appraise creditworthiness and disburse loans within minutes at minimal acquisition cost.\n\nNevertheless, frictionless digital credit carries the risk of algorithmic bias and borrower over-indebtedness. Therefore, enforcing strict consent architecture under the Digital Personal Data Protection (DPDP) Act alongside RBI's prudent risk-weight guardrails will ensure that ULI drives sustainable, inclusive credit expansion.`
        },
        'sbi-po-sec2-pair4': {
            topicName: 'Set 5: PSB Consolidation & Privatization Debate OR Women-Led Financial Inclusion & SHG Lakhpati Didi',
            keywords: ['public sector bank', 'psb', 'privatization', 'consolidation', 'merger', 'efficiency', 'npa', 'governance', 'financial inclusion', 'rural', 'women', 'shg', 'self-help group', 'lakhpati didi', 'microfinance', 'credit', 'digital', 'entrepreneurship'],
            checklist: [
                { point: 'Balanced Opening Thesis (PSB Efficiency vs Social Mandate OR Women as Catalysts of Rural Growth)', regex: /\b(public\s+sector|psb|privatization|consolidation|women|shg|self-help\s+group|lakhpati\s+didi)\b/i },
                { point: 'Multi-Dimensional Arguments (Capital Adequacy/Governance vs Jan Dhan Reach OR SHG-Bank Linkage & Low NPA)', regex: /\b(capital|npa|governance|jan\s+dhan|rural|credit\s+linkage|nabard|repayment|bc\s+sakhi)\b/i },
                { point: 'Structural Challenges Identified (Market Failure in Remote Areas OR Digital/Marketing Bottlenecks for SHGs)', regex: /\b(remote|welfare|monopoly|literacy|market\s+access|branding|collateral|challenge)\b/i },
                { point: 'Pragmatic Way Forward (Twin-Pillar Banking Model OR Value-Chain Digitization)', regex: /\b(conclude|conclusion|therefore|thus|balanced|reform|empowerment)\b/i }
            ],
            modelAnswer: `Women-led financial inclusion—anchored by India's Self-Help Group (SHG)-Bank Linkage Programme and the "Lakhpati Didi" initiative—has transformed rural women from passive welfare recipients into dynamic grassroot entrepreneurs.\n\nWith over 10 crore women organized into rural SHGs, institutional credit linkage facilitated by NABARD and public sector banks has consistently demonstrated repayment rates exceeding 96%, outperforming corporate loan portfolios. The deployment of "BC Sakhis" (Banking Correspondent women) has eliminated gender barriers in last-mile banking, while the Drone Didi and Lakhpati Didi schemes are equipping women to earn sustainable annual incomes above ₹1 lakh through agri-processing, dairy, and handicrafts.\n\nHowever, to graduate SHGs from subsistence micro-enterprises to scalable SMEs, mere credit disbursement is insufficient. Banks and policymakers must integrate SHGs with ONDC for digital market access, provide working-capital credit cards, and impart financial and digital literacy, thereby unlocking the full macroeconomic potential of India's female workforce.`
        },

        // ==================== RBI GRADE B PHASE-II: SECTION 1 (400W ECONOMIC ESSAYS) ====================
        'rbi-grb-sec1-pair0': {
            topicName: 'RBI Essay Set 1: Climate-Induced Food Inflation vs Monetary Policy OR FinTech Digital Lending & NBFC Interconnectedness',
            keywords: ['inflation', 'food inflation', 'climate', 'supply-chain', 'monetary policy', 'mpc', 'repo rate', 'cpi', 'rbi', 'fiscal', 'fintech', 'digital lending', 'nbfc', 'interconnectedness', 'risk weight', 'fldg', 'systemic', 'macroprudential'],
            checklist: [
                { point: 'Macroeconomic / Regulatory Thesis Statement (Supply-Side Shocks vs Demand Management OR Shadow Banking Contagion)', regex: /\b(inflation|monetary\s+policy|mpc|cpi|fintech|nbfc|macroprudential|systemic\s+risk)\b/i },
                { point: 'Deep Theoretical & Empirical Analysis (Headline vs Core Inflation / Phillips Curve OR Bank-NBFC Exposure & Risk Weights)', regex: /\b(headline|core|repo|transmission|unsecured|risk\s+weight|fldg|capital\s+adequacy|contagion)\b/i },
                { point: 'Policy Trade-offs & Dilemmas (Growth Sacrifice Ratio OR Financial Inclusion vs Stability)', regex: /\b(growth|sacrifice|trade-off|credit\s+flow|msme|moral\s+hazard|over-leveraging)\b/i },
                { point: 'RBI Institutional & Fiscal-Monetary Coordination Way Forward', regex: /\b(rbi|fiscal|supply-chain|cold\s+storage|supervision|regtech|conclude|therefore)\b/i }
            ],
            modelAnswer: `Recurring climate-induced supply shocks—manifesting as erratic monsoons, heatwaves, and unseasonal precipitation—have emerged as the primary driver of volatile food inflation in developing economies like India, posing a complex policy dilemma for flexible inflation-targeting central banks.\n\nUnder the statutory Monetary Policy Framework, the Reserve Bank of India (RBI) is mandated to maintain Consumer Price Index (CPI) headline inflation at 4% within a tolerance band of +/- 2%. Because food and beverages constitute nearly 46% of India's CPI basket, weather-driven spikes in vegetable, pulse, and cereal prices rapidly elevate headline figures even when core inflation remains benign. While orthodox monetary theory suggests that interest rate hikes cannot directly resolve supply-side crop shortages, persistent food inflation unanchors household inflation expectations and triggers second-round wage-price spirals.\n\nHowever, relying solely on prolonged monetary tightening carries a high sacrifice ratio, dampening private capex and MSME credit growth. Therefore, optimal macroeconomic management requires tight fiscal-monetary coordination: while the MPC remains vigilant against generalized price pressures, fiscal authorities must invest in climate-resilient seeds, solar cold-storage value chains, and proactive buffer-stock management to insulate food prices from climatic volatility.`
        },
        'rbi-grb-sec1-pair1': {
            topicName: 'RBI Essay Set 2: Internationalization of Indian Rupee (INR) OR AI in Central Banking & Algorithmic Bias',
            keywords: ['internationalization', 'rupee', 'inr', 'vostro', 'srv', 'cross-border', 'cbdc', 'capital account', 'convertibility', 'dollar', 'forex', 'artificial intelligence', 'central banking', 'algorithmic', 'bias', 'sup-tech', 'reg-tech', 'stability', 'privacy'],
            checklist: [
                { point: 'Strategic Macroeconomic Opening (INR Global Trade Settlement OR AI SupTech/RegTech Revolution)', regex: /\b(internationalization|rupee|inr|vostro|cross-border|artificial\s+intelligence|central\s+bank|algorithmic)\b/i },
                { point: 'Institutional Mechanisms Analyzed (Special Rupee Vostro Accounts/UPI Interlinking OR AI Credit Scoring/Fraud Detection)', regex: /\b(vostro|upi|cbdc|local\s+currency|masala\s+bond|suptech|regtech|credit\s+scoring|black-box)\b/i },
                { point: 'Structural Constraints & Risks (Triffin Dilemma/Trade Deficit/Capital Convertibility OR Herding Risk/Data Bias)', regex: /\b(trade\s+deficit|convertibility|volatility|herding|hallucination|bias|cyber|opaque)\b/i },
                { point: 'Calibrated Roadmap (Gradual Tarapore-Style Roadmap OR RBI FREE-AI Ethical Governance)', regex: /\b(roadmap|calibrated|bond\s+index|governance|explainable|human-in-the-loop|conclude)\b/i }
            ],
            modelAnswer: `The internationalization of the Indian Rupee (INR)—envisioned as its widespread adoption for cross-border trade invoicing, financial settlements, and official foreign exchange reserves—represents a strategic imperative as India transitions toward a $5 trillion economy.\n\nHistorically, over 85% of India's external trade has been invoiced in US Dollars, exposing domestic importers and corporations to exchange-rate volatility and geopolitical payment sanctions. To mitigate this vulnerability, the Reserve Bank of India operationalized Special Rupee Vostro Accounts (SRVAs), enabled bilateral local-currency settlement frameworks (such as with the UAE), interlinked UPI with fast payment systems like Singapore's PayNow, and facilitated India's inclusion in global sovereign bond indices.\n\nNevertheless, currency internationalization is constrained by structural realities: India runs persistent merchandise trade deficits with key partners, leaving surplus INR balances that require deep domestic corporate bond markets for reinvestment. Furthermore, premature full capital account convertibility could expose the economy to volatile "hot money" flows. Thus, a calibrated roadmap—combining macroeconomic stability, wholesale CBDC settlement bridges, and deeper offshore-onshore debt markets—will steadily elevate the Rupee's global stature.`
        },
        'rbi-grb-sec1-pair2': {
            topicName: 'RBI Essay Set 3: Demographic Dividend & Manufacturing Jobs OR Corporate Bond Market Depth & Infrastructure Financing',
            keywords: ['demographic dividend', 'manufacturing', 'employment', 'skill', 'productivity', 'msme', 'automation', 'female labor', 'corporate bond', 'infrastructure', 'nabfid', 'invit', 'municipal bond', 'liquidity', 'pension', 'insurance', 'credit enhancement'],
            checklist: [
                { point: 'Macroeconomic Context & Urgency (Working-Age Window vs Jobless Growth OR Bank Asset-Liability Mismatch)', regex: /\b(demographic|manufacturing|employment|productivity|corporate\s+bond|infrastructure|alm|mismatch)\b/i },
                { point: 'Structural Bottlenecks Identified (Skill Mismatch/Dwarf MSMEs OR AAA Concentration/Illiquid Secondary Debt Market)', regex: /\b(skill|msme|labor|female|aaa|secondary\s+market|credit\s+rating|insolvency|ibc)\b/i },
                { point: 'Policy & Institutional Interventions (PLI/Apprenticeship OR NaBFID/InVITs/AMC Repo Clearing)', regex: /\b(pli|apprenticeship|vocational|nabfid|invit|reit|pension|epfo|sebi|rbi)\b/i },
                { point: 'Long-Term Structural Reform Conclusion', regex: /\b(conclude|conclusion|therefore|thus|sustainable|viksit\s+bharat|growth)\b/i }
            ],
            modelAnswer: `Financing India's ambitious infrastructure pipeline for Viksit Bharat 2047 requires shifting the burden of long-term capital formation away from commercial bank balance sheets toward a deep, liquid Corporate Bond Market.\n\nCommercial banks rely primarily on short-to-medium-term retail deposits; consequently, funding 15-to-25-year greenfield infrastructure projects creates severe Asset-Liability Mismatches (ALM), as witnessed during the twin-balance-sheet crisis of the 2010s. While India's corporate bond market has grown in size, it remains structurally skewed: over 90% of issuances are concentrated in top-tier AAA/AA-rated financial and public sector entities via private placements, leaving BBB-rated infrastructure SPVs and mid-sized corporations underserved.\n\nTo unlock patient capital from insurance companies, pension funds (EPFO/NPS), and retail investors, regulators must deepen secondary market liquidity through active market-making, operationalize credit enhancement guarantees via NaBFID, streamline time-bound debt resolution under the IBC, and scale innovative instruments like Infrastructure Investment Trusts (InVITs) and Municipal Green Bonds.`
        },

        // ==================== RBI GRADE B PHASE-II: SECTION 2 (180W PRECIS WRITING) ====================
        'rbi-grb-sec2-pair0': {
            topicName: 'RBI Precis Set 1: AI in Banking — Efficiency vs Algorithmic Bias & Privacy',
            keywords: ['title', 'artificial intelligence', 'ai', 'banking', 'algorithm', 'credit', 'fraud', 'transparency', 'privacy', 'bias', 'accountability', 'governance'],
            checklist: [
                { point: 'Clear, Concise "Title:" Provided at the Top', regex: /^title\s*:/im },
                { point: 'Captures Core Theme: AI Operational Gains vs Black-Box Algorithmic Risks', regex: /\b(ai|artificial\s+intelligence|efficiency|fraud|credit|bias|privacy|transparency)\b/i },
                { point: 'Written in Student\'s Own Words (Zero Verbatim Copy-Paste from Passage)', regex: /\b(ethical|oversight|accountability|governance|safeguard|fairness|regulation)\b/i },
                { point: 'Strict Adherence to Single-Paragraph & 150–180 Word Window', regex: /\S+/ }
            ],
            modelAnswer: `Title: Balancing AI Efficiency with Ethical Governance in Modern Banking\n\nArtificial Intelligence has transitioned from an experimental concept to a core operational pillar in modern banking, automating customer service and enabling real-time fraud detection. However, the deployment of opaque, "black-box" machine-learning models in credit underwriting introduces critical risks regarding algorithmic bias, data privacy, and regulatory accountability. When historical datasets reflect socio-economic disparities, automated scoring systems can inadvertently exclude creditworthy marginalized borrowers without providing transparent explanations for loan rejections. Consequently, financial regulators and banking institutions must establish robust ethical guardrails, mandatory algorithmic audits, and human-in-the-loop oversight to harness AI's efficiency while safeguarding consumer rights and systemic fairness.`
        },
        'rbi-grb-sec2-pair1': {
            topicName: 'RBI Precis Set 2: Sovereign Green Bonds & Standardized Green Taxonomy',
            keywords: ['title', 'sovereign', 'green bond', 'taxonomy', 'greenwashing', 'climate', 'net-zero', 'greenium', 'capital', 'renewable', 'disclosure', 'liquidity'],
            checklist: [
                { point: 'Appropriate "Title:" Provided at the Top', regex: /^title\s*:/im },
                { point: 'Covers Core Essence: Green Bonds, Greenium & Need for Green Taxonomy', regex: /\b(green\s+bond|taxonomy|greenwashing|climate|capital|renewable|disclosure)\b/i },
                { point: 'Paraphrased Concisely in Third-Person Objective Register', regex: /\b(investors|transition|decarbonization|credibility|allocation|sustainable)\b/i },
                { point: 'Single Compact Paragraph within 180-Word Limit', regex: /\S+/ }
            ],
            modelAnswer: `Title: Sovereign Green Bonds and the Imperative of a Standardized Green Taxonomy\n\nSovereign Green Bonds have emerged as a vital fiscal instrument to mobilize dedicated capital for public renewable energy, clean transport, and climate-adaptation projects while establishing a domestic benchmark for green pricing ("greenium"). However, the long-term credibility and secondary-market liquidity of green debt depend heavily on a legally binding national green taxonomy. In the absence of clear sector-specific thresholds and third-party impact disclosures, domestic carbon and debt markets remain vulnerable to "greenwashing," deterring global ESG investors. Therefore, codifying a transparent green taxonomy alongside strict post-issuance audit norms is essential to channel low-cost capital toward genuine decarbonization.`
        },
        'rbi-grb-sec2-pair2': {
            topicName: 'RBI Precis Set 3: Bank-FinTech Co-Lending & Unsecured Retail Credit Risks',
            keywords: ['title', 'co-lending', 'fintech', 'bank', 'fldg', 'unsecured', 'retail', 'credit', 'contagion', 'underwriting', 'delinquency', 'regulation'],
            checklist: [
                { point: 'Clear "Title:" Provided at the Top', regex: /^title\s*:/im },
                { point: 'Synthesizes Synergy of Co-Lending vs Unsecured Credit Delinquency Risks', regex: /\b(co-lending|fintech|unsecured|credit|fldg|underwriting|delinquency|risk)\b/i },
                { point: 'Maintains Objective Summary Without Personal Commentary', regex: /\b(balance\s+sheet|algorith|prudential|stability|borrower|default)\b/i },
                { point: 'Single-Paragraph Structure within 180-Word Limit', regex: /\S+/ }
            ],
            modelAnswer: `Title: Regulating Bank-FinTech Co-Lending and Unsecured Credit Proliferation\n\nCollaborative co-lending partnerships between traditional banks and agile FinTech platforms combine low-cost bank capital with digital customer acquisition, expanding retail and MSME credit reach. Nevertheless, the rapid proliferation of algorithm-driven, unsecured personal and consumption loans has raised regulatory concerns over lax underwriting standards and borrower over-indebtedness. Excessive reliance on First Loss Default Guarantees (FLDG) can obscure true asset quality and transmit systemic contagion across interconnected balance sheets during economic downturns. Consequently, central bank caps on FLDG arrangements and higher risk weights on unsecured retail exposures are indispensable to preserve macro-financial stability.`
        },

        // ==================== RBI GRADE B PHASE-II: SECTION 3 (200W OFFICIAL CORRESPONDENCE) ====================
        'rbi-grb-sec3-pair0': {
            topicName: 'RBI Sec 3 Set 1: RBI Circular to RRBs on Cybersecurity Audit OR FSB Report on Digital Payment Interoperability',
            keywords: ['circular', 'rbi', 'reserve bank', 'regional rural bank', 'rrb', 'cybersecurity', 'audit', 'cert-in', 'soc', 'timeline', 'compliance', 'fsb', 'interoperability', 'upi', 'cross-border'],
            checklist: [
                { point: 'Official Circular / Report Header (Ref No., Date, To, Subject)', regex: /subject\s*:/i },
                { point: 'Clear Regulatory Mandate (CERT-In Cyber Audit Timelines OR Cross-Border Payment Interoperability)', regex: /\b(cybersecurity|audit|cert-in|rrb|vulnerability|interoperability|cross-border|settlement)\b/i },
                { point: 'Specific Compliance Directives & Deadlines', regex: /\b(mandatory|deadline|quarterly|board|compliance|api|iso\s+20022|nodal)\b/i },
                { point: 'Formal Institutional Sign-Off (Chief General Manager / Director)', regex: /(yours\s+faithfully|chief\s+general\s+manager|director|department\s+of\s+supervision)/i }
            ],
            modelAnswer: `RESERVE BANK OF INDIA\nDepartment of Supervision, Central Office, Mumbai\n\nCircular Ref: RBI/2026-27/DoS/42\nDate: 24 October 2026\n\nTo,\nThe Chairpersons,\nAll Regional Rural Banks (RRBs).\n\nSubject: Mandatory Timelines for Comprehensive Cybersecurity Audit and SOC Integration.\n\nDear Sir/Madam,\n\nIn view of the rapid onboarding of Regional Rural Banks onto digital payment channels (UPI, AePS, and Mobile Banking) and the concomitant rise in sophisticated ransomware and phishing threats, the Reserve Bank of India has reviewed the cyber-resilience preparedness of RRBs.\n\nAll RRBs are hereby directed to complete a comprehensive Vulnerability Assessment and Penetration Testing (VAPT) and IS Audit through CERT-In empanelled auditors on a bi-annual basis. Furthermore, RRBs must integrate their Core Banking Solutions with a 24x7 Security Operations Center (SOC) in coordination with their respective Sponsor Banks no later than 31 December 2026.\n\nBoard-approved compliance reports must be submitted to the Regional Office of NABARD and RBI within 15 days of audit completion.\n\nYours faithfully,\n(XYZ)\nChief General Manager`
        },
        'rbi-grb-sec3-pair1': {
            topicName: 'RBI Sec 3 Set 2: RBI Advisory on Curbing Mule Accounts OR Finance Ministry Note on Retail Sovereign Green Bonds',
            keywords: ['advisory', 'circular', 'mule account', 'mulehunter', 'kyc', 'aml', 'transaction monitoring', 'cyber', 'fraud', 'sovereign green bond', 'retail direct', 'ministry of finance', 'tax', 'liquidity'],
            checklist: [
                { point: 'Official RBI Advisory / Policy Note Header & Subject Line', regex: /subject\s*:/i },
                { point: 'Core Regulatory Issue (AI Mule Account Detection OR Retail Participation in Sovereign Green Bonds)', regex: /\b(mule\s+account|mulehunter|aml|kyc|velocity|green\s+bond|retail\s+direct|gilt)\b/i },
                { point: 'Actionable Directives for Banks / Policy Recommendations', regex: /\b(monitor|freeze|str|fiu|edd|tax\s+incentive|80c|liquidity|market-making)\b/i },
                { point: 'Formal Sign-Off', regex: /(yours\s+faithfully|chief\s+general\s+manager|executive\s+director)/i }
            ],
            modelAnswer: `RESERVE BANK OF INDIA\nDepartment of Regulation, Central Office, Mumbai\n\nAdvisory Ref: RBI/2026-27/DoR/88\nDate: 24 October 2026\n\nTo,\nThe Managing Directors & CEOs,\nAll Scheduled Commercial Banks.\n\nSubject: Strengthening Real-Time Transaction Monitoring and Deployment of MuleHunter.AI to Curb Mule Accounts.\n\nDear Sir/Madam,\n\nRecent supervisory assessments indicate that illicit "mule accounts" remain the primary conduit for laundering proceeds of cyber frauds, digital arrest extortion, and illegal betting applications.\n\nScheduled Commercial Banks are advised to immediately transition from static rule-based alerts to AI/ML-driven velocity monitoring and integrate with RBI Innovation Hub's "MuleHunter.AI" platform. Banks must enforce Enhanced Due Diligence (EDD) on newly opened accounts exhibiting disproportionate high-frequency pass-through credits and flag suspect accounts to FIU-IND and the National Cyber Crime Reporting Portal in real time.\n\nNon-compliance with KYC/AML guardrails will invite strict supervisory enforcement action.\n\nYours faithfully,\n(XYZ)\nChief General Manager`
        },
        'rbi-grb-sec3-pair2': {
            topicName: 'RBI Sec 3 Set 3: Circular to NBFCs on Key Fact Statement (KFS) & Fair Recovery OR PSL Compliance Memo',
            keywords: ['nbfc', 'key fact statement', 'kfs', 'apr', 'annual percentage rate', 'recovery', 'harassment', 'cooling-off', 'priority sector lending', 'psl', 'ridf', 'small and marginal farmers', 'weaker sections'],
            checklist: [
                { point: 'Official RBI Circular / Memo Header & Subject Line', regex: /subject\s*:/i },
                { point: 'Core Mandate (Transparent Key Fact Statement & APR Disclosure OR PSL Sub-Target Shortfall)', regex: /\b(key\s+fact\s+statement|kfs|apr|recovery|cooling-off|priority\s+sector|psl|ridf|smf)\b/i },
                { point: 'Specific Borrower Protection / Penalty Clauses Outlined', regex: /\b(penal\s+charge|harassment|agent|ombudsman|shortfall|nabard|co-lending|pslc)\b/i },
                { point: 'Formal Sign-Off', regex: /(yours\s+faithfully|chief\s+general\s+manager|general\s+manager)/i }
            ],
            modelAnswer: `RESERVE BANK OF INDIA\nDepartment of Regulation, Mumbai\n\nCircular Ref: RBI/2026-27/DoR/104\nDate: 24 October 2026\n\nTo,\nAll Non-Banking Financial Companies (NBFCs).\n\nSubject: Mandatory Key Fact Statement (KFS) Disclosure and Fair Recovery Conduct for Retail & MSME Loans.\n\nDear Sir/Madam,\n\nTo enhance transparency and protect borrowers from hidden charges in digital and retail lending, the Reserve Bank of India hereby mandates all NBFCs to provide a standardized Key Fact Statement (KFS) in vernacular language prior to loan execution.\n\nThe KFS must explicitly disclose the all-inclusive Annual Percentage Rate (APR), processing fees, recovery mechanism, and a mandatory cool-off/look-up period during which borrowers may exit digital loans without penalty. Any fee excluded from the KFS cannot be charged subsequently. Furthermore, NBFCs shall be held vicariously liable for coercive recovery practices or odd-hour calls made by outsourced recovery agents.\n\nPlease ensure strict compliance effective immediately.\n\nYours faithfully,\n(XYZ)\nChief General Manager`
        },

        // ==================== NABARD GRADE A: SECTION 1 (300W AGRI/RURAL ESSAYS) ====================
        'nabard-a-sec1-pair0': {
            topicName: 'NABARD Essay Set 1: Climate-Resilient Agriculture & Digital Crop Insurance OR FPOs & Rural Value-Chain Modernization',
            keywords: ['climate-resilient', 'agriculture', 'crop insurance', 'pmfby', 'yes-tech', 'remote sensing', 'drought', 'smallholder', 'fpo', 'farmer producer organization', 'co-operative', 'value-chain', 'cold storage', 'enam', 'nabard', 'sfac'],
            checklist: [
                { point: 'Strong Opening Highlighting Smallholder Vulnerability (86% Small & Marginal Farmers)', regex: /\b(smallholder|small\s+and\s+marginal|climate|agriculture|fpo|farmer\s+producer|rural)\b/i },
                { point: 'Technical / Institutional Analysis (NICRA/Zero-Tillage/YES-TECH PMFBY OR FPO Equity Grant/Credit Guarantee)', regex: /\b(pmfby|remote\s+sensing|drone|micro-irrigation|equity\s+grant|credit\s+guarantee|pacs|enam)\b/i },
                { point: 'Ground-Level Bottlenecks Addressed (Delayed Claim Settlement OR Working Capital/Governance Deficit in FPOs)', regex: /\b(delay|fragmented|working\s+capital|middlemen|post-harvest|wastage|governance|bottleneck)\b/i },
                { point: 'Actionable NABARD-Led Way Forward', regex: /\b(nabard|sustainable|farmgate|income|doubling|conclude|therefore)\b/i }
            ],
            modelAnswer: `With small and marginal farmers (owning less than two hectares) constituting over 86% of India's agricultural holdings, building climate-resilient agronomy coupled with technology-driven crop insurance is indispensable for rural income security.\n\nErratic monsoon patterns, terminal heatwaves affecting wheat yields, and unseasonal hailstorms increasingly threaten rainfed farming districts. Transitioning toward climate-smart agriculture requires scaling drought-tolerant and bio-fortified seed varieties developed under ICAR's NICRA initiative, promoting Direct Seeded Rice (DSR), micro-irrigation ("Per Drop More Crop"), and soil-health-card-based balanced fertilization.\n\nSimultaneously, risk transfer mechanisms under the Pradhan Mantri Fasal Bima Yojana (PMFBY) must overcome historical delays in manual crop-cutting experiments (CCEs). Integrating satellite remote sensing, drone imagery, IoT weather stations, and the YES-TECH (Yield Estimation System based on Technology) framework enables automated, transparent yield assessment and direct digital claim disbursal. Empowered by NABARD's watershed development funds and Kisan Credit Card saturation, these dual pillars can insulate Indian farmers from climatic shocks.`
        },
        'nabard-a-sec1-pair1': {
            topicName: 'NABARD Essay Set 2: Computerization of PACS as Multi-Service Hubs OR Micro-Irrigation & Millet (Shree Anna) Promotion',
            keywords: ['pacs', 'primary agricultural credit societies', 'computerization', 'nabard', 'erp', 'csc', 'warehousing', 'co-operative', 'micro-irrigation', 'groundwater', 'millet', 'shree anna', 'dryland', 'msp', 'nutrition', 'fpo'],
            checklist: [
                { point: 'Clear Rural Economy Thesis (PACS as Grassroot Credit Spine OR Water-Smart Millet Revolution)', regex: /\b(pacs|primary\s+agricultural|co-operative|computerization|millet|shree\s+anna|micro-irrigation|groundwater)\b/i },
                { point: 'Policy & Operational Mechanics (National ERP Software/Model Bye-Laws OR PDMC/IIMR Value Addition)', regex: /\b(erp|nabard|model\s+bye-laws|csc|jan\s+aushadhi|drip|sprinkler|dryland|nutri-cereals)\b/i },
                { point: 'Challenges in Implementation (Legacy Accounting/Governance OR Low Millet Shelf-Life/Procurement Gap)', regex: /\b(audit|governance|npa|shelf-life|processing|pds|procurement|msp|monocropping)\b/i },
                { point: 'Holistic Rural Development Conclusion', regex: /\b(conclude|conclusion|therefore|thus|sahakar\s+se\s+samriddhi|sustainable)\b/i }
            ],
            modelAnswer: `Primary Agricultural Credit Societies (PACS) form the foundational grassroot tier of India's short-term cooperative credit structure, serving over 13 crore farmers; however, manual accounting, governance deficits, and limited service diversification historically constrained their viability.\n\nTo realize the vision of "Sahakar se Samriddhi," the Government of India and NABARD have spearheaded the nationwide computerization of over 63,000 functional PACS onto a unified cloud-based Enterprise Resource Planning (ERP) platform, linked seamlessly with District Central and State Cooperative Banks. This digital transformation eliminates audit arrears, curbs loan siphoning, and enables real-time Kisan Credit Card (KCC) settlements.\n\nCrucially, under the new Model Bye-Laws, PACS are evolving from single-purpose credit societies into vibrant multi-service rural business hubs—operating as Common Service Centres (CSCs), decentralized grain storage godowns, Jan Aushadhi Kendras, LPG distributorships, and custom hiring centres for farm machinery. Strengthening professional management and capital adequacy will ensure PACS drive inclusive rural prosperity.`
        },
        'nabard-a-sec1-pair2': {
            topicName: 'NABARD Essay Set 3: Agri-Stack & e-NAM Digital Public Infrastructure OR Rural Non-Farm Employment & SHG Enterprise',
            keywords: ['agri-stack', 'dpi', 'digital public infrastructure', 'farmer id', 'crop survey', 'enam', 'mandi', 'apmc', 'assaying', 'logistics', 'non-farm', 'rnfs', 'shg', 'msme', 'food processing', 'migration', 'rural'],
            checklist: [
                { point: 'Opening Context on Rural Structural Transformation (Agri-Stack DPI OR Rural Non-Farm Sector Share)', regex: /\b(agri-stack|enam|digital\s+public|farmer\s+id|non-farm|rnfs|shg|food\s+processing)\b/i },
                { point: 'Key Pillars Analyzed (Federated Farmer Registry/Geo-Referenced Plots OR Agro-Processing/Cold Chain/ODOP)', regex: /\b(geo-referenced|crop\s+survey|assaying|inter-mandi|odop|pmfme|mudra|skill|cluster)\b/i },
                { point: 'Bottlenecks Highlighted (Digital Divide/APMC Resistance OR Rural Infrastructure/Credit Gap)', regex: /\b(apmc|assaying|logistics|vernacular|privacy|collateral|marketing|migration)\b/i },
                { point: 'NABARD & Policy Way Forward', regex: /\b(nabard|conclude|conclusion|therefore|thus|inclusive|realization)\b/i }
            ],
            modelAnswer: `The creation of "Agri-Stack" as a Digital Public Infrastructure (DPI) for Indian agriculture, alongside the electronic National Agriculture Market (e-NAM), promises to resolve decades-old information asymmetry in rural credit, input delivery, and price discovery.\n\nAgri-Stack comprises three foundational registries: a federated Farmers' Registry (Kisan Pehchan Patra) linked dynamically to land records, a Geo-Referenced Village Map registry, and a Digital Crop Survey capturing real-time sown area per season. When integrated with the Unified Lending Interface (ULI), Agri-Stack enables banks to sanction collateral-free crop loans within minutes, while allowing tenant farmers and sharecroppers to access targeted PM-KISAN and fertilizer subsidies.\n\nOn the marketing front, scaling inter-mandi and inter-state trade on e-NAM requires establishing scientifically equipped assaying laboratories at APMC gates, third-party quality certification, and integrated e-NWR (electronic Negotiable Warehouse Receipt) pledge financing so farmers are never forced into distress sales immediately after harvest.`
        },

        // ==================== NABARD GRADE A: SECTION 2 (150W FIELD REPORTS / LETTERS) ====================
        'nabard-a-sec2-pair0': {
            topicName: 'NABARD Sec 2 Set 1: Field Report on Solar Cold-Storage Adoption OR Letter to District Collector on Grain Warehousing',
            keywords: ['report', 'solar', 'cold-storage', 'cold storage', 'post-harvest', 'horticulture', 'fpo', 'subsidy', 'district collector', 'warehousing', 'godown', 'pacs', 'enwr', 'distress sale'],
            checklist: [
                { point: 'Official Field Report Memo Block ("To / From / Date / Subject") OR Formal Letter Header', regex: /(subject\s*:|report\s+on)/i },
                { point: 'Field Observations & Quantitative Data (Post-Harvest Wastage Reduction / Storage Capacity Deficit)', regex: /\b(solar|cold-storage|cold\s+storage|wastage|horticulture|warehousing|godown|capacity|metric\s+ton)\b/i },
                { point: 'Financial / Institutional Linkage (AMI Subsidy / NABARD Refinance / FPO Management)', regex: /\b(nabard|subsidy|ami|aif|agriculture\s+infrastructure\s+fund|fpo|pacs|shg)\b/i },
                { point: 'Actionable Field Recommendations / Request', regex: /\b(recommend|propose|request|kindly|expedite|sanction|cluster)\b/i }
            ],
            modelAnswer: `FIELD INSPECTION REPORT\n\nTo: The Chief General Manager, NABARD Regional Office\nFrom: District Development Manager (DDM), Raigarh District\nDate: 24 October 2026\nSubject: Field assessment of decentralized Solar Cold-Storage units adopted by horticulture FPOs.\n\n1. Background & Field Observations:\nAn on-site inspection of 12 decentralized, 5-MT solar-powered cold-storage units installed across three horticulture blocks reveals a 32% reduction in post-harvest spoilage of tomatoes and leafy vegetables. Powered by off-grid solar micro-grids with thermal backup, these units operate independently of erratic rural grid supply.\n\n2. Economic Impact & Bottlenecks:\nParticipating smallholder farmers increased their price realization by 28% by avoiding immediate distress sales. However, high upfront capital costs and lack of trained local technicians for compressor maintenance remain key constraints.\n\n3. Recommendations:\nIt is recommended to converge the 3% interest subvention under the Agriculture Infrastructure Fund (AIF) with NABARD's tribal development grant and mandate annual maintenance contracts (AMCs) with equipment vendors.\n\nSubmitted by,\nXYZ (DDM, NABARD)`
        },
        'nabard-a-sec2-pair1': {
            topicName: 'NABARD Sec 2 Set 2: Field Report on KCC Saturation Drive for Dairy/Fishery OR Letter to LDM on SHG Credit Delays',
            keywords: ['report', 'kcc', 'kisan credit card', 'saturation', 'dairy', 'fishery', 'animal husbandry', 'allied', 'collateral', 'ldm', 'lead district manager', 'shg', 'credit linkage', 'blbc', 'turnaround'],
            checklist: [
                { point: 'Official Report / Letter Header & Clear Subject Line', regex: /(subject\s*:|report\s+on)/i },
                { point: 'Core Ground Issue (KCC for Allied Dairy/Fishery Farmers OR SHG Loan Sanction Pendency)', regex: /\b(kcc|kisan\s+credit\s+card|dairy|fishery|animal\s+husbandry|shg|self-help\s+group|pendency)\b/i },
                { point: 'Specific Regulatory Reference (₹1.6 Lakh Collateral-Free Limit OR BLBC Turnaround Norms)', regex: /\b(1\.6\s+lakh|collateral|interest\s+subvention|blbc|dlcc|turnaround|tat|bc\s+sakhi)\b/i },
                { point: 'Concrete Action Plan / Directive Requested', regex: /\b(camp|direct|review|expedite|sanction|sensitize|recommend)\b/i }
            ],
            modelAnswer: `FIELD INSPECTION REPORT\n\nTo: The General Manager, NABARD Regional Office\nFrom: District Development Manager (DDM)\nDate: 24 October 2026\nSubject: Ground assessment of Kisan Credit Card (KCC) saturation drive for Allied Dairy and Fishery farmers.\n\n1. Key Field Findings:\nDuring the block-level KCC saturation camps, 1,450 applications from landless dairy pourers and inland fishery farmers were reviewed. While cooperative banks achieved 78% sanction targets, several commercial bank branches rejected applications demanding land-title collateral despite RBI's ₹1.60 lakh collateral-free mandate.\n\n2. Operational Bottlenecks:\nLack of awareness among branch officers regarding working-capital KCC norms for animal husbandry and delays in veterinary health certification slowed disbursements.\n\n3. Action Taken & Recommendations:\nThe matter was escalated in the Block Level Bankers' Committee (BLBC) meeting. It is recommended to issue a joint circular with the Lead District Manager (LDM) sensitizing branches on collateral-free allied KCC norms and routing applications through District Milk Unions.\n\nSubmitted by,\nXYZ (DDM, NABARD)`
        },
        'nabard-a-sec2-pair2': {
            topicName: 'NABARD Sec 2 Set 3: Post-Flood Crop Damage & Credit Restructuring Report OR Millet Processing Cluster Letter',
            keywords: ['report', 'flood', 'cyclone', 'crop damage', 'restructuring', 'rescheduling', 'moratorium', 'kcc', 'pmfby', 'relief', 'millet', 'shree anna', 'processing', 'cluster', 'fpo', 'odop', 'machinery'],
            checklist: [
                { point: 'Official Field Report / Letter Header & Subject Line', regex: /(subject\s*:|report\s+on)/i },
                { point: 'Specific Ground Assessment (Inundated Kharif Acreage >33% Loss OR Millet Primary Processing Gap)', regex: /\b(flood|inundat|crop\s+loss|annewari|33%|restructur|millet|de-husking|processing\s+cluster)\b/i },
                { point: 'Policy / RBI / NABARD Relief Mechanism Cited (Short-Term to Medium-Term Loan Conversion / PMFBY / PMFME)', regex: /\b(conversion|reschedul|moratorium|consumption\s+loan|pmfby|pmfme|sfurti|grant)\b/i },
                { point: 'Urgent Actionable Recommendation', regex: /\b(slbc|dcc|notify|sanction|expedite|recommend|request)\b/i }
            ],
            modelAnswer: `FIELD ASSESSMENT REPORT\n\nTo: The Chief General Manager, NABARD Regional Office\nFrom: District Development Manager (DDM)\nDate: 24 October 2026\nSubject: Post-flood crop damage assessment and urgent credit restructuring requirements in affected blocks.\n\n1. Damage Assessment:\nUnprecedented flash floods between 10–15 October 2026 inundated over 18,500 hectares of standing Kharif paddy across four riverine blocks. Joint revenue surveys confirm crop loss exceeding 50% (well above the 33% threshold for natural calamity relief).\n\n2. Impact on Rural Credit:\nOver 22,000 smallholder KCC borrowers face acute liquidity distress, risking widespread loan default if forced to repay short-term crop loans before the Rabi sowing window.\n\n3. Recommendations:\n1) Convene a Special District Consultative Committee (DCC) meeting immediately following the State Government's calamity notification.\n2) Direct banks to convert short-term Kharif crop loans into medium-term loans with a one-year moratorium under RBI's Natural Calamity Relief guidelines and disburse fresh Rabi input credit.\n3) Expedite 25% immediate mid-season adversity relief under PMFBY.\n\nSubmitted by,\nXYZ (DDM, NABARD)`
        }
    };

    // ------------------------------------------------------------------------
    // 2. HINGLISH / HINDI / SONG / NON-ENGLISH DETECTOR
    // ------------------------------------------------------------------------
    const HINGLISH_WORDS_SET = new Set([
        'mera', 'meri', 'mere', 'tera', 'teri', 'tere', 'hamara', 'humara',
        'hai', 'hain', 'tha', 'thi', 'the', 'ho', 'hoon', 'hu', 'hota', 'hoti',
        'kya', 'kyo', 'kyu', 'kyun', 'kahan', 'kaha', 'kaise', 'kese', 'kab', 'kaun',
        'nahi', 'nhi', 'na', 'mat', 'aur', 'ya', 'par', 'lekin', 'magar', 'phir', 'fir',
        'bhi', 'toh', 'hi', 'se', 'ko', 'me', 'mein', 'par', 'pe', 'ka', 'ki', 'ke',
        'juta', 'joota', 'japani', 'patloon', 'sar', 'laal', 'pelall', 'pehne', 'dill', 'dil',
        'gana', 'gaana', 'likh', 'likha', 'rha', 'raha', 'rahi', 'rahe', 'kuch', 'sab',
        'sahi', 'shi', 'galat', 'glt', 'bhai', 'yaar', 'yrr', 'acha', 'accha', 'bahut',
        'bohot', 'zyada', 'kam', 'karo', 'krdo', 'krna', 'karna', 'chahiye', 'chyie',
        'dekho', 'dekh', 'batao', 'bta', 'sikhega', 'samajh', 'pata', 'pta', 'chlega',
        'ooooh', 'oooh', 'aah', 'wah', 'arre', 'abe', 'dost', 'pyar', 'desh',
        'hindustani', 'englishtani', 'tani'
    ]);

    function detectHinglishAndGibberish(text) {
        const words = text.toLowerCase().replace(/[^a-z\s]/g, ' ').split(/\s+/).filter(Boolean);
        const foundHinglish = [];
        const foundGibberish = [];

        words.forEach(w => {
            if (w === 'the' || w === 'hi' || w === 'me' || w === 'par' || w === 'to') return;
            if (HINGLISH_WORDS_SET.has(w)) {
                if (!foundHinglish.includes(w)) foundHinglish.push(w);
            } else if (w.length >= 5 && (/[bcdfghjklmnpqrstvwxz]{5,}/i.test(w) || /(.)\1{3,}/i.test(w))) {
                if (!foundGibberish.includes(w)) foundGibberish.push(w);
            }
        });

        return {
            hinglishWords: foundHinglish,
            gibberishWords: foundGibberish,
            isMostlyHinglish: foundHinglish.length >= 3 || (words.length > 0 && (foundHinglish.length / words.length) > 0.15)
        };
    }

    // ------------------------------------------------------------------------
    // 3. BUILT-IN DEEP SPELLING, PUNCTUATION, CASING & GRAMMAR ENGINE
    // ------------------------------------------------------------------------
    const COMMON_TYPO_MAP = {
        'naime': 'name',
        'sibngh': 'Singh',
        'raiagrh': 'Raigarh',
        'omnline': 'online',
        'hav': 'have',
        'webnsite': 'website',
        'englisgh': 'English',
        'pelall': 'pe laal (Non-English)',
        'dill': 'heart (Avoid Hinglish "dill")',
        'recieve': 'receive',
        'recieved': 'received',
        'occured': 'occurred',
        'occurence': 'occurrence',
        'accomodate': 'accommodate',
        'commitee': 'committee',
        'goverment': 'government',
        'maintenence': 'maintenance',
        'seperate': 'separate',
        'definately': 'definitely',
        'thier': 'their',
        'beleive': 'believe',
        'acheive': 'achieve',
        'neccessary': 'necessary',
        'tommorow': 'tomorrow',
        'wierd': 'weird',
        'arguement': 'argument',
        'enviroment': 'environment',
        'finacial': 'financial',
        'transcation': 'transaction',
        'unauthorised': 'unauthorized',
        'accout': 'account',
        'mananger': 'manager',
        'requestig': 'requesting',
        'immediatly': 'immediately'
    };

    const DEEP_GRAMMAR_PATTERNS = [
        {
            regex: /(?:^|\s)(i)(?=\s+[a-z]+)/g,
            fix: 'I',
            cat: 'Capitalization Error (Lowercase "i")',
            why: 'The personal pronoun "I" must ALWAYS be capitalized in English. Writing lowercase "i" is penalized in TCS iON automated evaluation.'
        },
        {
            regex: /\b(i|I)\s+a\s+(\d+\s+years?\s+old)\b/g,
            fix: 'I am $2',
            cat: 'Missing Auxiliary Verb & Article Error ("i a 22 years old")',
            why: 'The linking verb "am" is missing, and the indefinite article "a" cannot precede a plural phrase like "22 years old". Write: "I am 22 years old".'
        },
        {
            regex: /\bsuch\s+a\s+best(\s+ever)?\b/gi,
            fix: 'such a great / the best$1',
            cat: 'Superlative Determiner Error ("such a best")',
            why: 'Superlative adjectives ("best") always take the definite article "the" ("the best"), never "a" ("such a best" is grammatically incorrect).'
        },
        {
            regex: /^\s*(hi|hello|hey)\b/i,
            fix: 'Respected Sir/Madam,',
            cat: 'Severe Register Violation (Informal Greeting)',
            why: 'Never start an official banking letter or essay with casual greetings like "Hi" or "Hello". Use "Respected Sir/Madam,".'
        },
        {
            regex: /\s+,/g,
            fix: ',',
            cat: 'Punctuation Spacing Error (Space Before Comma)',
            why: 'In standard English typography, never put a space before a comma. Place the comma immediately after the word, followed by a single space.'
        },
        {
            regex: /\b(india|indian)\b/g,
            checkCase: (match) => match[0] === 'i',
            fix: 'India / Indian',
            cat: 'Proper Noun Capitalization Error',
            why: 'Proper nouns and nationalities like "India" and "Indian" must always begin with a capital letter.'
        },
        {
            regex: /\b(enter|entered|entering)\s+into\s+(home|house|the\s+bank|the\s+branch|the\s+room|the\s+hall|the\s+office|the\s+cabin)\b/gi,
            fix: '$1 $2',
            cat: 'Superfluous Preposition Trap (Enter Into Physical Place)',
            why: 'When referring to physical entry into a place (e.g., "enter home", "enter the branch"), never use "into" after "enter" ("enter into" is used only for contracts/agreements).'
        },
        {
            regex: /\ba\s+(honest|hour|hourly|heir|honor|honour|honorable|honourable|s\.?b\.?i\.?|r\.?b\.?i\.?|f\.?i\.?r\.?|m\.?p\.?|m\.?l\.?a\.?|n\.?p\.?a\.?|n\.?b\.?f\.?c\.?|s\.?m\.?e\.?|m\.?s\.?m\.?e\.?|a\.?t\.?m\.?|f\.?p\.?o\.?|r\.?r\.?b\.?)\b/gi,
            fix: 'an $1',
            cat: 'Phonetic Article Error (A vs An)',
            why: 'Acronyms like SBI, RBI, NPA, MSME, ATM and silent-"h" words (honest, hour) begin with a vowel sound. Always use "an".'
        },
        {
            regex: /\ban\s+(university|union|unique|uniform|universal|useful|european|one-rupee|one-time|utility|upi)\b/gi,
            fix: 'a $1',
            cat: 'Phonetic Article Error (A vs An)',
            why: 'Words starting with a consonant "Yu" or "Wa" sound require the article "a", not "an".'
        },
        {
            regex: /\b(discuss|discussed|discussing|describe|described|emphasize|emphasized|stress|stressed|investigate|investigated|comprise|comprises)\s+(about|on|into|of)\b/gi,
            fix: '$1 (remove "$2")',
            cat: 'Superfluous Preposition Trap',
            why: 'Transitive verbs like discuss, emphasize, investigate, and comprise do not take prepositions like about/on/into/of.'
        },
        {
            regex: /\bdespite\s+of\b/gi,
            fix: 'despite (or "in spite of")',
            cat: 'Preposition Trap (Despite Of)',
            why: 'Never use "of" after "despite".'
        },
        {
            regex: /\b(return|returned|revert|reverted|reimburse|repay)\s+back\b/gi,
            fix: '$1',
            cat: 'Redundancy Penalty (Return/Revert Back)',
            why: '"Return" and "revert" already mean coming back; "back" is redundant.'
        },
        {
            regex: /\bcope\s+up\s+with\b/gi,
            fix: 'cope with',
            cat: 'Idiom Error (Cope Up With)',
            why: 'The correct English idiom is "cope with", never "cope up with".'
        },
        {
            regex: /\b(informations|equipments|evidences|feedbacks|researches|luggages|machineries|advices)\b/gi,
            fix: 'information / equipment / evidence / feedback / research / machinery / advice',
            cat: 'Uncountable Noun Pluralization Error',
            why: 'Uncountable nouns never take a plural "-s".'
        },
        {
            regex: /\bone\s+of\s+the\s+([a-z-]+\s+)?(problem|issue|reason|factor|customer|challenge|measure|step|scheme|policy|sector|bank)\b/gi,
            fix: 'one of the $1$2s',
            cat: 'Subject-Verb Agreement (One of the + Plural Noun)',
            why: 'After "One of the...", the noun must be plural.'
        },
        {
            regex: /\bone\s+of\s+the\s+([a-z-]+\s+)?([a-z]+s)\s+are\b/gi,
            fix: 'one of the $1$2 is',
            cat: 'Subject-Verb Agreement (Singular Verb with "One")',
            why: 'The subject "One" is singular, so the verb must be "is", not "are".'
        },
        {
            regex: /\bloose\s+(their|your|his|her|my|our|the)\s+(money|savings|account|trust|credibility|capital|deposits|competitiveness)\b/gi,
            fix: 'lose $1 $2',
            cat: 'Homophone Confusion (Loose vs Lose)',
            why: '"Loose" means not tight. Use the verb "lose".'
        },
        {
            regex: /\b(don't|doesn't|didn't|can't|couldn't|won't|wouldn't|shouldn't|isn't|aren't|wasn't|weren't|haven't|hasn't|hadn't)\b/gi,
            fix: 'do not / cannot / will not / is not / have not',
            cat: 'Formal Register Violation (Contractions)',
            why: 'Avoid contractions in official banking exams; write full words.'
        }
    ];

    const BANKING_VOCAB_UPGRADES = [
        { regex: /\bvery\s+glad\b/gi, weak: 'very glad', strong: 'delighted / privileged / gratified', context: 'Replace casual "very glad" with formal register.' },
        { regex: /\bbest\s+ever\b/gi, weak: 'best ever', strong: 'premier / industry-leading / exemplary', context: 'Avoid hyperbolic slang like "best ever" in formal writing.' },
        { regex: /\bvery\s+important\b/gi, weak: 'very important', strong: 'paramount / pivotal / indispensable', context: 'Ideal for policy priorities & customer trust.' },
        { regex: /\b(big|major|huge)\s+problem(s)?\b/gi, weak: 'big/major problem', strong: 'systemic bottleneck / pressing challenge / structural impediment', context: 'Boosts analytical essay lexical score.' },
        { regex: /\bhelp\s+(the\s+)?(poor|people|farmers|customers|citizens)\b/gi, weak: 'help the poor/people', strong: 'foster financial inclusion / empower marginalized sections', context: 'Official RBI & NABARD terminology.' },
        { regex: /\b(bad|negative)\s+effect(s)?\b/gi, weak: 'bad/negative effect', strong: 'adverse repercussion / detrimental impact', context: 'Used in macroeconomic & banking analysis.' },
        { regex: /\blook\s+into\b/gi, weak: 'look into', strong: 'expedite an inquiry into / thoroughly investigate', context: 'Formal replacement for phrasal verb in grievance letters.' },
        { regex: /\bsolve\s+(this|the)\s+(issue|problem|matter|grievance)\b/gi, weak: 'solve the issue', strong: 'redress the grievance / resolve the discrepancy', context: 'Standard Banking Ombudsman & Branch Manager register.' },
        { regex: /\bgive\s+back\s+(my|the)\s+(money|amount)\b/gi, weak: 'give back the money', strong: 'initiate immediate reversal / reimburse the debited sum', context: 'Essential for unauthorized debit complaint letters.' }
    ];

    const SECTOR_POWER_LEXICON = {
        'sbi-po': [
            { term: 'Fiduciary Trust', meaning: 'Confidence placed by depositors in a bank\'s integrity', usage: 'Prompt grievance redressal is vital to uphold fiduciary trust.' },
            { term: 'Zero-Liability Framework', meaning: 'RBI circular protecting customers from third-party cyber fraud', usage: 'I request immediate reversal under the RBI Zero-Liability Framework.' },
            { term: 'Last-Mile Financial Inclusion', meaning: 'Delivering banking services to unbanked rural households', usage: 'JAM trinity and UPI have revolutionized last-mile financial inclusion.' },
            { term: 'Cyber Hygiene & Multi-Factor Authentication', meaning: 'Preventive digital security practices', usage: 'Branches must sensitize senior citizens regarding cyber hygiene.' }
        ],
        'rbi-grb': [
            { term: 'Monetary Policy Transmission', meaning: 'How repo rate changes affect retail lending/deposit rates', usage: 'Seamless monetary policy transmission is essential to anchor inflation.' },
            { term: 'Macroprudential Oversight', meaning: 'Regulation aimed at mitigating systemic risk across the financial system', usage: 'RBI strengthened macroprudential oversight over unsecured digital lending.' },
            { term: 'Asset Quality & Provisioning Coverage', meaning: 'Health of a bank\'s loan book against NPAs', usage: 'Scheduled Commercial Banks recorded a multi-year low in Gross NPAs.' },
            { term: 'Green Taxonomy & Sovereign Green Bonds', meaning: 'Classification and financing of sustainable climate projects', usage: 'A standardized green taxonomy prevents corporate greenwashing.' }
        ],
        'nabard-a': [
            { term: 'Climate-Resilient Agronomy', meaning: 'Farming practices adapted to weather shocks and droughts', usage: 'Drought-tolerant seeds are central to climate-resilient agronomy.' },
            { term: 'Post-Harvest Value Chain & Cold-Storage', meaning: 'Infrastructure preventing farm produce wastage', usage: 'Solar-powered cold storage can slash post-harvest horticultural losses.' },
            { term: 'Farmer Producer Organizations (FPOs)', meaning: 'Collectives giving smallholders bargaining power & market access', usage: 'Institutional credit linkage for FPOs boosts rural farmgate realization.' },
            { term: 'Micro-Irrigation & Per Drop More Crop', meaning: 'Drip/sprinkler systems optimizing groundwater usage', usage: 'Subsidizing micro-irrigation is critical for water-stressed districts.' }
        ]
    };

    // ------------------------------------------------------------------------
    // 4. LANGUAGETOOL PUBLIC CLOUD API CALL (5+ LAKH WORDS DICTIONARY)
    // ------------------------------------------------------------------------
    async function checkWithLanguageToolPublicAPI(text, secNo) {
        if (!text || text.trim().length < 3) return [];
        try {
            const params = new URLSearchParams();
            params.append('text', text);
            params.append('language', 'en-US');

            const response = await fetch('https://api.languagetool.org/v2/check', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: params.toString()
            });

            if (!response.ok) return [];
            const data = await response.json();
            if (!data || !Array.isArray(data.matches)) return [];

            return data.matches.slice(0, 25).map(m => {
                const wrongSnippet = text.substr(m.offset, m.length);
                const bestReplacements = (m.replacements || []).slice(0, 3).map(r => r.value).join(' / ');
                return {
                    sectionNo: secNo,
                    cat: (m.rule && m.rule.category && m.rule.category.name) ? m.rule.category.name : 'Grammar & Spelling Error',
                    wrong: wrongSnippet,
                    right: bestReplacements || 'Revise phrasing',
                    why: m.message || 'Grammatical or spelling error flagged by dictionary engine.',
                    source: '5-Lakh Word Dictionary & Grammar Engine'
                };
            });
        } catch (err) {
            return [];
        }
    }

    // ------------------------------------------------------------------------
    // 5. EVALUATE QUESTION RELEVANCE & EXPECTED POINTS CHECKLIST
    // ------------------------------------------------------------------------
    function evaluateQuestionRelevance(sec, text, examKey) {
        const totalPairs = (sec.questionPairs && sec.questionPairs.length) ? sec.questionPairs.length : 1;
        const activePairIdx = (sec.pairIndex || 0) % totalPairs;
        const kbKey = `${examKey}-sec${sec.secNo}-pair${activePairIdx}`;
        const fallbackPair = sec.questionPairs ? sec.questionPairs[activePairIdx] : {};
        const promptRaw = ((fallbackPair.a || '') + ' ' + (fallbackPair.b || '')).replace(/<[^>]*>/g, '');

        const activeKB = (window.BankingAnalyzer && window.BankingAnalyzer.QUESTION_KNOWLEDGE_BASE) || QUESTION_KNOWLEDGE_BASE;
        const kb = activeKB[kbKey] || {
            topicName: sec.title,
            keywords: promptRaw.toLowerCase().replace(/[^a-z\s]/g, ' ').split(/\s+/).filter(w => w.length >= 5),
            checklist: [
                { point: 'Addresses the core theme of the prompt directly', regex: new RegExp(promptRaw.toLowerCase().replace(/[^a-z\s]/g, ' ').split(/\s+/).filter(w => w.length >= 6).slice(0, 6).join('|') || 'banking', 'i') },
                { point: 'Uses formal institutional tone without contractions or slang', regex: /\b(therefore|however|moreover|furthermore|request|policy|framework|system|bank|economy|rural)\b/i },
                { point: 'Follows multi-paragraph structure (Intro -> Body -> Conclusion)', regex: /\n\s*\n/ }
            ],
            modelAnswer: `Model Topper Approach for ${sec.title}:\n1. Start with a formal introduction or Subject/Salutation block addressing the prompt directly.\n2. Substantiate your body paragraphs with RBI/NABARD guidelines, institutional terms, and clear cause-effect logic.\n3. Conclude with a constructive Way Forward or formal sign-off ("Yours faithfully,").`
        };

        const lowerText = text.toLowerCase();
        const matchedKeywords = kb.keywords.filter(kw => lowerText.includes(kw.toLowerCase()));
        const evaluatedChecklist = kb.checklist.map(item => ({
            point: item.point,
            covered: item.regex.test(text)
        }));

        const coveredPointsCount = evaluatedChecklist.filter(c => c.covered).length;
        const keywordScore = kb.keywords.length > 0 ? Math.min(1, matchedKeywords.length / Math.max(3, Math.ceil(kb.keywords.length * 0.22))) : 0.5;
        const checklistScore = kb.checklist.length > 0 ? (coveredPointsCount / kb.checklist.length) : 0.5;

        const relevanceRatio = (keywordScore * 0.6) + (checklistScore * 0.4);
        const relevancePct = Math.round(relevanceRatio * 100);
        const isOffTopic = matchedKeywords.length === 0 || relevancePct < 20;

        return {
            kbKey,
            topicName: kb.topicName,
            relevancePct,
            isOffTopic,
            matchedKeywords,
            evaluatedChecklist,
            modelAnswer: kb.modelAnswer
        };
    }

    // ------------------------------------------------------------------------
    // 6. SECTION-SPECIFIC FORMAT & STRUCTURE AUDITOR
    // ------------------------------------------------------------------------
    function auditBankingSectionFormat(sec, text) {
        const titleLower = (sec.title || '').toLowerCase();
        const wc = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
        const paras = text.trim() === '' ? 0 : text.trim().split(/\n\s*\n/).filter(p => p.trim().length > 0).length;
        const checks = [];

        if (titleLower.includes('letter') || titleLower.includes('email') || titleLower.includes('correspondence')) {
            const hasDateOrHeader = /(\b\d{1,2}[\/\-\s][a-zA-Z0-9]+[\/\-\s]\d{2,4}\b|\b(january|february|march|april|may|june|july|august|september|october|november|december)\s+\d{1,2}|to\s*,|to\s*:|the\s+branch\s+manager|the\s+regional\s+manager|the\s+banking\s+ombudsman|the\s+editor|the\s+principal\s+nodal|the\s+chairpersons|circular\s+ref|advisory\s+ref)/i.test(text);
            const hasSubject = /subject\s*:/i.test(text);
            const hasSalutation = /(respected|dear)\s+(sir|madam|branch\s+manager|regional\s+manager|ombudsman|collector|client|customer|director)/i.test(text);
            const hasThreeParas = paras >= 3;
            const hasSignOff = /yours\s+(faithfully|sincerely|truly)|regards,|chief\s+general\s+manager/i.test(text);

            checks.push({ label: 'Recipient Block / Date', passed: hasDateOrHeader, note: hasDateOrHeader ? 'Verified ("To, The..." / Date)' : 'Missing formal recipient block or Date' });
            checks.push({ label: 'Official "Subject:" Line', passed: hasSubject, note: hasSubject ? 'Verified Subject line' : 'Missing "Subject:" line' });
            checks.push({ label: 'Formal Salutation', passed: hasSalutation, note: hasSalutation ? 'Verified ("Respected Sir/Madam,")' : 'Missing "Respected Sir/Madam,"' });
            checks.push({ label: '3-Paragraph Body Flow', passed: hasThreeParas, note: hasThreeParas ? `Verified (${paras} paragraphs)` : `Only ${paras} paragraph(s) (Need Intro, Issue & Action)` });
            checks.push({ label: 'Complimentary Sign-Off', passed: hasSignOff, note: hasSignOff ? 'Verified ("Yours faithfully,")' : 'Missing "Yours faithfully,"' });
        } else if (titleLower.includes('precis')) {
            const lines = text.trim().split(/\n+/).filter(l => l.trim().length > 0);
            const firstLine = lines[0] || '';
            const hasTitle = /^title\s*:/i.test(firstLine) || (lines.length >= 2 && firstLine.split(/\s+/).length <= 12 && !firstLine.endsWith('.'));
            const withinWindow = wc >= (sec.minWords || 90) && wc <= sec.wordLimit;
            const singlePara = paras <= 2;

            checks.push({ label: 'Precis Title at Top', passed: hasTitle, note: hasTitle ? 'Verified Title at top' : 'Missing "Title: ..." at top of Precis' });
            checks.push({ label: '1/3rd Word Window', passed: withinWindow, note: withinWindow ? `Within window (${wc}/${sec.wordLimit}w)` : `Outside ${sec.minWords}–${sec.wordLimit}w window (${wc}w)` });
            checks.push({ label: 'Single-Paragraph Rule', passed: singlePara, note: singlePara ? 'Unified single paragraph' : 'Write Precis in a single compact paragraph' });
        } else if (titleLower.includes('report')) {
            const hasReportHeader = /(report|to\s*:|from\s*:|date\s*:|subject\s*:)/i.test(text);
            const hasFindings = /(finding|observation|assessment|recommend|action|nabard|subsidy)/i.test(text);
            checks.push({ label: 'Official Field Report Memo Block', passed: hasReportHeader, note: hasReportHeader ? 'Verified To/From/Date/Subject block' : 'Missing Report Memo Header (To/From/Date/Subject)' });
            checks.push({ label: 'Field Findings & Recommendations', passed: hasFindings, note: hasFindings ? 'Includes field findings & recommendations' : 'Add structured Findings & Recommendations sections' });
        } else {
            const hasThreeParas = paras >= 3;
            const hasConnectors = /\b(furthermore|moreover|consequently|however|nevertheless|therefore|in\s+conclusion|firstly|secondly|additionally|simultaneously)\b/i.test(text);
            const hasDomainTerms = /\b(rbi|reserve\s+bank|nabard|bank|account|customer|kyc|upi|cbdc|msme|fpo|inflation|inclusion|circular|ombudsman|fraud|credit|digital|pacs|shg)\b/i.test(text);

            checks.push({ label: '3-Part Essay Structure (Intro-Body-Conclusion)', passed: hasThreeParas, note: hasThreeParas ? `Verified (${paras} paragraphs)` : `Only ${paras} paragraph(s) (Use 3+ paragraphs)` });
            checks.push({ label: 'Cohesive Academic Linkers', passed: hasConnectors, note: hasConnectors ? 'Verified transition linkers' : 'Missing linkers ("Moreover", "Consequently", "However")' });
            checks.push({ label: 'Banking Domain Terminology', passed: hasDomainTerms, note: hasDomainTerms ? 'Verified banking/economic terms' : 'Zero banking/economic domain vocabulary used' });
        }

        const minReq = sec.minWords || Math.floor(sec.wordLimit * 0.70);
        const meetsMinWords = wc >= minReq;
        checks.push({
            label: `Word Count Target (${minReq}–${sec.wordLimit}w)`,
            passed: meetsMinWords,
            note: meetsMinWords ? `Met target (${wc}/${sec.wordLimit}w)` : `Under-length (${wc}w written vs ${minReq}w minimum)`
        });

        const passedCount = checks.filter(c => c.passed).length;
        const formatRatio = checks.length > 0 ? (passedCount / checks.length) : 0;

        return {
            secNo: sec.secNo,
            secTitle: sec.title,
            wordCount: wc,
            minWords: minReq,
            wordLimit: sec.wordLimit,
            maxMarks: sec.marks,
            checks,
            formatRatio
        };
    }

    // ------------------------------------------------------------------------
    // 7. MASTER EVALUATION PIPELINE (EARNED MARKS + CLOUD AI + LEARNING HUB)
    // ------------------------------------------------------------------------
    async function evaluateBankingSubmission({ examKey, preset, sectionsState, wpm }) {
        const allMistakes = [];
        const allVocabUpgrades = [];
        const sectionAudits = [];
        let totalEarnedScore = 0;
        let engineMode = 'OptiFile Strict Earned-Marks + 5-Lakh Word Grammar & Relevance Engine (v5.0)';

        for (const sec of sectionsState) {
            const text = (sec.userResponse || '').trim();
            const wc = text === '' ? 0 : text.split(/\s+/).length;
            const formatAudit = auditBankingSectionFormat(sec, text);
            const relevance = evaluateQuestionRelevance(sec, text, examKey);
            const langCheck = detectHinglishAndGibberish(text);

            if (!text) {
                sectionAudits.push({
                    ...formatAudit,
                    relevance,
                    langCheck,
                    earnedMarks: '0.0',
                    statusBanner: '❌ Section Not Attempted (0 Marks)'
                });
                continue;
            }

            if (langCheck.hinglishWords.length > 0) {
                allMistakes.push({
                    sectionNo: sec.secNo,
                    cat: '🚨 CRITICAL: Hinglish / Hindi Words Detected (Non-English Penalty)',
                    wrong: langCheck.hinglishWords.join(', '),
                    right: 'Write 100% in Formal English only',
                    why: `You used Hindi/Hinglish words (${langCheck.hinglishWords.map(w => '"' + w + '"').join(', ')}). In Official Descriptive Exams, writing songs or Hinglish words results in an immediate ZERO score for the section.`,
                    source: 'Language & Register Gate'
                });
            }
            if (langCheck.gibberishWords.length > 0) {
                allMistakes.push({
                    sectionNo: sec.secNo,
                    cat: '🚨 Gibberish / Invalid Word Sequence',
                    wrong: langCheck.gibberishWords.join(', '),
                    right: 'Use valid English vocabulary',
                    why: 'Nonsensical character sequences or repeated letters detected.',
                    source: 'Lexical Gate'
                });
            }

            if (relevance.isOffTopic) {
                allMistakes.push({
                    sectionNo: sec.secNo,
                    cat: '🚨 OFF-TOPIC / IRRELEVANT RESPONSE (0 Marks for Content)',
                    wrong: `"${text.slice(0, 75)}${text.length > 75 ? '...' : ''}"`,
                    right: `Answer must address: ${relevance.topicName}`,
                    why: `Your response has ${relevance.relevancePct}% relevance to Question ${sec.secNo}. Writing personal introductions, unrelated stories, or songs instead of addressing the assigned prompt fetches 0 content marks.`,
                    source: 'Topic Relevance AI Auditor'
                });
            }

            const rawTokens = text.split(/\s+/);
            rawTokens.forEach(tok => {
                const cleanTok = tok.replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, '');
                const lowerTok = cleanTok.toLowerCase();
                if (COMMON_TYPO_MAP[lowerTok]) {
                    const already = allMistakes.some(x => x.sectionNo === sec.secNo && x.wrong.toLowerCase() === cleanTok.toLowerCase());
                    if (!already) {
                        allMistakes.push({
                            sectionNo: sec.secNo,
                            cat: 'Spelling / Typo Error',
                            wrong: cleanTok,
                            right: COMMON_TYPO_MAP[lowerTok],
                            why: `"${cleanTok}" is misspelled. The correct spelling is "${COMMON_TYPO_MAP[lowerTok]}". Each spelling error deducts 0.25 to 0.50 marks in automated evaluation.`,
                            source: 'Spellcheck Engine'
                        });
                    }
                }
            });

            DEEP_GRAMMAR_PATTERNS.forEach(rule => {
                rule.regex.lastIndex = 0;
                let m;
                while ((m = rule.regex.exec(text)) !== null) {
                    if (rule.checkCase && !rule.checkCase(m[0])) continue;
                    const wrongStr = m[0].trim() || m[0];
                    const rightStr = m[0].replace(rule.regex, rule.fix).trim();
                    const alreadyAdded = allMistakes.some(
                        x => x.sectionNo === sec.secNo && x.wrong.toLowerCase() === wrongStr.toLowerCase() && x.cat === rule.cat
                    );
                    if (!alreadyAdded) {
                        allMistakes.push({
                            sectionNo: sec.secNo,
                            cat: rule.cat,
                            wrong: wrongStr,
                            right: rightStr,
                            why: rule.why,
                            source: 'TCS iON Grammar Engine'
                        });
                    }
                }
            });

            const ltMistakes = await checkWithLanguageToolPublicAPI(text, sec.secNo);
            ltMistakes.forEach(ltm => {
                const isHinglishToken = HINGLISH_WORDS_SET.has(ltm.wrong.toLowerCase().trim());
                if (isHinglishToken) return;
                const duplicate = allMistakes.some(
                    existing => existing.sectionNo === sec.secNo &&
                    existing.wrong.toLowerCase().trim() === ltm.wrong.toLowerCase().trim()
                );
                if (!duplicate && ltm.wrong.trim().length > 0) {
                    allMistakes.push(ltm);
                }
            });

            BANKING_VOCAB_UPGRADES.forEach(v => {
                v.regex.lastIndex = 0;
                const match = text.match(v.regex);
                if (match && !allVocabUpgrades.some(u => u.weakWord.toLowerCase() === match[0].toLowerCase())) {
                    allVocabUpgrades.push({
                        weakWord: match[0],
                        premiumOptions: v.strong,
                        contextTip: v.context
                    });
                }
            });

            const secMistakesCount = allMistakes.filter(m => m.sectionNo === sec.secNo).length;
            const lengthFactor = Math.min(1.0, wc / Math.max(45, formatAudit.minWords));

            let secEarned = 0;
            let statusBanner = '';

            if (langCheck.isMostlyHinglish) {
                secEarned = 0.0;
                statusBanner = '🚨 ZERO SCORE: Written in Hinglish / Non-English instead of Formal English.';
            } else if (relevance.isOffTopic) {
                const minimalFormatCredit = formatAudit.formatRatio * (sec.marks * 0.15) * lengthFactor;
                secEarned = Math.max(0.0, minimalFormatCredit - (secMistakesCount * 0.5));
                statusBanner = `🚨 OFF-TOPIC RESPONSE (${relevance.relevancePct}% Question Match) — Content Marks: 0 / ${sec.marks}`;
            } else {
                const contentMarks = (sec.marks * 0.45) * (relevance.relevancePct / 100) * lengthFactor;
                const formatMarks = (sec.marks * 0.30) * formatAudit.formatRatio;
                const fluencyMarks = (sec.marks * 0.25) * lengthFactor;
                const grammarDeduction = secMistakesCount * (sec.marks * 0.055);

                secEarned = Math.max(0.5, contentMarks + formatMarks + fluencyMarks - grammarDeduction);
                statusBanner = relevance.relevancePct >= 65
                    ? `✅ On-Topic Response (${relevance.relevancePct}% Question Match)`
                    : `⚠️ Partial Topic Coverage (${relevance.relevancePct}% Question Match — Add missing key points below)`;
            }

            secEarned = Math.min(sec.marks, Math.round(secEarned * 2) / 2);
            totalEarnedScore += secEarned;

            sectionAudits.push({
                ...formatAudit,
                relevance,
                langCheck,
                earnedMarks: secEarned.toFixed(1),
                statusBanner
            });
        }

        // Optional Cloud Gemini AI Hook for Banking (/api/banking-evaluate)
        if (preset && preset.category === 'banking' && (window.location.protocol === 'http:' || window.location.protocol === 'https:')) {
            try {
                const resp = await fetch('/api/banking-evaluate', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        examKey,
                        examName: preset.name,
                        totalMarks: preset.totalMarks,
                        sections: sectionsState.map(s => {
                            const pair = s.questionPairs?.[s.pairIndex || 0] || {};
                            return {
                                secNo: s.secNo,
                                title: s.title,
                                prompt: (pair.a || '') + ' OR ' + (pair.b || ''),
                                wordLimit: s.wordLimit,
                                marks: s.marks,
                                userResponse: s.userResponse || ''
                            };
                        })
                    })
                });
                if (resp.ok) {
                    const json = await resp.json();
                    if (json && json.success && json.analysis) {
                        engineMode = 'OptiFile Cloud Gemini AI + TCS iON 5-Lakh Word Examiner';
                        if (Array.isArray(json.analysis.grammarMistakes)) {
                            json.analysis.grammarMistakes.forEach(cm => {
                                const exists = allMistakes.some(m => m.wrong.toLowerCase().trim() === String(cm.wrong || '').toLowerCase().trim());
                                if (!exists && cm.wrong && cm.correct) {
                                    allMistakes.push({
                                        sectionNo: cm.sectionNo || 1,
                                        cat: cm.category || 'Banking Grammar & Register Error',
                                        wrong: cm.wrong,
                                        right: cm.correct,
                                        why: cm.why,
                                        source: 'Gemini Banking AI Examiner'
                                    });
                                }
                            });
                        }
                        if (Array.isArray(json.analysis.vocabularyUpgrades)) {
                            json.analysis.vocabularyUpgrades.forEach(vu => {
                                if (vu.weakWord && !allVocabUpgrades.some(v => v.weakWord.toLowerCase() === vu.weakWord.toLowerCase())) {
                                    allVocabUpgrades.push({
                                        weakWord: vu.weakWord,
                                        premiumOptions: vu.premiumOptions,
                                        contextTip: vu.contextTip
                                    });
                                }
                            });
                        }
                    }
                }
            } catch (err) {
                // Gracefully continue with local + LanguageTool hybrid engine
            }
        }

        const finalScore = Math.min(preset.totalMarks, totalEarnedScore).toFixed(1);
        const powerWords = SECTOR_POWER_LEXICON[examKey] || SECTOR_POWER_LEXICON['sbi-po'];

        const anyHinglish = sectionAudits.some(s => s.langCheck && s.langCheck.hinglishWords.length > 0);
        const anyOffTopic = sectionAudits.some(s => s.relevance && s.relevance.isOffTopic && s.wordCount > 0);

        let overallFeedback = '';
        if (anyHinglish) {
            overallFeedback = `🚨 CRITICAL EXAMINER ALERT: Non-English / Hinglish words were detected in your response. In official SBI PO, IBPS PO, RBI Grade B, and NABARD exams, writing Hinglish or song lyrics results in 0 marks. Please read the Question Checklist and Topper Model Answer below to learn how to structure a formal English response.`;
        } else if (anyOffTopic) {
            overallFeedback = `🚨 OFF-TOPIC ALERT: Your response did not address the assigned question prompt! In banking descriptive exams, writing a personal self-introduction or unrelated text awards 0 marks for Content & Relevance. Review the "Expected Key Points Checklist" and "Full Topper Model Answer" below to learn what the examiner looks for.`;
        } else {
            overallFeedback = `Evaluated strictly using Earned-Marks Grading (Content Relevance + Official Format + 5-Lakh Word Spelling/Grammar Dictionary + Word Count Sufficiency). Review your line-by-line corrections and compare your writing with the Topper Model Answer below.`;
        }

        return {
            engineMode,
            finalScore,
            totalMarks: preset.totalMarks,
            mistakes: allMistakes,
            vocabUpgrades: allVocabUpgrades,
            powerWords,
            sectionAudits,
            overallFeedback
        };
    }

    // Preserve any existing QUESTION_KNOWLEDGE_BASE entries from other modules
    const prevKB = (window.BankingAnalyzer && window.BankingAnalyzer.QUESTION_KNOWLEDGE_BASE) || {};
    window.BankingAnalyzer = Object.assign(window.BankingAnalyzer || {}, {
        evaluateBankingSubmission,
        QUESTION_KNOWLEDGE_BASE: Object.assign({}, QUESTION_KNOWLEDGE_BASE, prevKB),
        DEEP_GRAMMAR_PATTERNS,
        BANKING_VOCAB_UPGRADES,
        SECTOR_POWER_LEXICON
    });

})(window);
