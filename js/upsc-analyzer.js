/**
 * ============================================================================
 * OPTIFILE HYBRID UPSC + DEEP GRAMMAR & VOCABULARY EXAMINER ENGINE (v5.0)
 * File Path: /js/upsc-analyzer.js
 * ============================================================================
 * COMBINES:
 * 1. Complete UPSC Question Bank (18 Sets / 36 PYQ & Expected Prompts) for:
 *    - UPSC CSE Essay Paper (Section A Philosophical + Section B Governance)
 *    - UPSC CSE GS Mains (Q1: 10-Marker 150w + Q2: 15-Marker 250w)
 *    - UPSC CAPF (AC) Paper-II (Sec 1: 300w Essay + Sec 2: 200w Official Report)
 * 2. Strict Earned-Marks Grading (Starts at 0.0, NOT full marks) + Hinglish Gate.
 * 3. UPSC 5-Pillar Dimension Tracker (Polity/Articles, Economy, Social/Ethics,
 *    Tech/Ecology, Committees/SC Judgments/2nd ARC) + Directive Word Audit.
 * 4. Connects to Unhackable Cloud Gemini AI (/api/upsc-evaluate) +
 *    5-Lakh Word LanguageTool API + Banking Deep Grammar & Lexicon Engine.
 */

(function (window) {
    'use strict';

    // ------------------------------------------------------------------------
    // 1. EXPANDED UPSC PRESET QUESTIONS (18 SETS / 36 PROMPTS)
    // ------------------------------------------------------------------------
    const UPSC_EXPANDED_PRESETS = {
        'upsc-essay': [
            // SECTION 1: PHILOSOPHICAL & REFLECTIVE ESSAY (1200W | 125 MARKS)
            [
                {
                    setTag: 'UPSC Essay Set 1 of 3 • Philosophical & Algorithmic Ethics',
                    a: '<strong>Topic A (Philosophical — UPSC PYQ Pattern):</strong> "A ship in harbor is safe, but that is not what ships are built for: Civilizational Courage, Scientific Temper, and Constitutional Morality."',
                    b: '<strong>Topic B (Reflective — UPSC PYQ Pattern):</strong> "Wisdom finds truth, whereas knowledge merely discovers facts: Navigating Ethical Dilemmas in an Algorithmic Age."'
                },
                {
                    setTag: 'UPSC Essay Set 2 of 3 • Public Empathy & Historical Consciousness',
                    a: '<strong>Topic A (Ethics &amp; Humanism):</strong> "The best way to find yourself is to lose yourself in the service of others: Empathy as the Foundation of Public Administration."',
                    b: '<strong>Topic B (Philosophical):</strong> "History is a gallery of pictures in which there are few originals and many copies."'
                },
                {
                    setTag: 'UPSC Essay Set 3 of 3 • Dialectics & Epistemic Humility (PYQ)',
                    a: '<strong>Topic A (UPSC CSE PYQ):</strong> "Thinking is like a game; it does not begin unless there is an opposite team: Dialectics, Constructive Dissent, and Democratic Deliberation."',
                    b: '<strong>Topic B (UPSC CSE PYQ):</strong> "Not all who wander are lost: Curiosity, Epistemic Humility, and the Uncharted Pathways of Human Progress."'
                }
            ],
            // SECTION 2: GOVERNANCE & SOCIO-ECONOMIC ESSAY (1200W | 125 MARKS)
            [
                {
                    setTag: 'UPSC Essay Set 1 of 3 • Digital Public Infrastructure & Urban Ecology',
                    a: '<strong>Topic A (Governance &amp; Tech):</strong> "Digital Public Infrastructure (DPI) is the new social contract: Bridging the last-mile welfare divide without compromising citizen privacy."',
                    b: '<strong>Topic B (Urbanization &amp; Ecology):</strong> "Urbanization in India: Engines of economic growth or islands of ecological vulnerability?"'
                },
                {
                    setTag: 'UPSC Essay Set 2 of 3 • Women-Led Development & Climate Justice',
                    a: '<strong>Topic A (Social Justice — UPSC PYQ Theme):</strong> "Patriarchy is the least noticed yet the most significant structure of social inequality: Women-Led Development as the Catalyst for Viksit Bharat."',
                    b: '<strong>Topic B (Global Governance &amp; Ecology):</strong> "Climate Justice and the Global South: Balancing Developmental Energy Security with Net-Zero 2070 Commitments."'
                },
                {
                    setTag: 'UPSC Essay Set 3 of 3 • Cooperative Federalism & Value-Based Education',
                    a: '<strong>Topic A (Polity &amp; Economy):</strong> "Cooperative Federalism in the 21st Century: Navigating Fiscal Autonomy, Demographic Divergence, and National Integration."',
                    b: '<strong>Topic B (Education &amp; Ethics):</strong> "Education without values, as useful as it is, seems rather to make man a more clever devil: Ethical AI and Human-Centric Innovation."'
                }
            ]
        ],
        'upsc-gs': [
            // SECTION 1: GS 10-MARKER (150 WORDS | 7 MINS | 10 MARKS)
            [
                {
                    setTag: 'GS Set 1 of 3 • Finance Commission (GS-II) & Agri-Stack (GS-III)',
                    a: '<strong>Q1 (GS-II Polity &amp; Federalism):</strong> "Examine the role of the Finance Commission in addressing vertical and horizontal fiscal imbalances in India in light of recent demographic shifts." (150 Words, 10 Marks)',
                    b: '<strong>Q1 (GS-III Agriculture &amp; Tech):</strong> "Evaluate how the Digital Agriculture Mission and Agri-Stack can resolve fragmented landholding inefficiencies for Indian smallholders." (150 Words, 10 Marks)'
                },
                {
                    setTag: 'GS Set 2 of 3 • Simultaneous Elections (GS-II) & Demographic Ageing (GS-I)',
                    a: '<strong>Q1 (GS-II Polity &amp; Governance):</strong> "Critically examine the constitutional and logistical implications of holding Simultaneous Elections (\'One Nation, One Election\') on Indian federalism." (150 Words, 10 Marks)',
                    b: '<strong>Q1 (GS-I Indian Society):</strong> "Discuss the socio-economic implications of rapid demographic ageing in Southern Indian states compared to the youth bulge in Northern states." (150 Words, 10 Marks)'
                },
                {
                    setTag: 'GS Set 3 of 3 • Narco-Drone Security (GS-III) & Constitutional Morality (GS-IV)',
                    a: '<strong>Q1 (GS-III Internal Security):</strong> "Analyze the emerging nexus between cross-border narco-terrorism, rogue drones, and cryptocurrency laundering along India\'s borders." (150 Words, 10 Marks)',
                    b: '<strong>Q1 (GS-IV Ethics &amp; Governance):</strong> "\'Constitutional morality is not a natural sentiment; it has to be cultivated.\' Elucidate the statement in the context of civil service neutrality." (150 Words, 10 Marks)'
                }
            ],
            // SECTION 2: GS 15-MARKER (250 WORDS | 11 MINS | 15 MARKS)
            [
                {
                    setTag: 'GS Set 1 of 3 • Net-Zero 2070 (GS-III) & Global South (GS-II)',
                    a: '<strong>Q2 (GS-III Environment &amp; Economy):</strong> "Critically analyze the challenges of achieving India\'s Net-Zero 2070 target while ensuring energy security and affordable industrial growth." (250 Words, 15 Marks)',
                    b: '<strong>Q2 (GS-II International Relations):</strong> "Discuss the strategic significance of the Global South in reforming multilateral institutions and global climate financing architecture." (250 Words, 15 Marks)'
                },
                {
                    setTag: 'GS Set 2 of 3 • Right to Privacy & DPDP Act (GS-II) & Middle-Income Trap (GS-III)',
                    a: '<strong>Q2 (GS-II Constitution &amp; Rights):</strong> "Evaluate the evolution of the Fundamental Right to Privacy (Article 21) since the Justice K.S. Puttaswamy judgment and examine the adequacy of the Digital Personal Data Protection (DPDP) Act." (250 Words, 15 Marks)',
                    b: '<strong>Q2 (GS-III Economic Growth):</strong> "Examine the structural causes of the \'Middle-Income Trap\' and suggest policy reforms in R&amp;D, skilling, and female labor force participation to achieve Viksit Bharat by 2047." (250 Words, 15 Marks)'
                },
                {
                    setTag: 'GS Set 3 of 3 • Urban Flooding (GS-I) & Emotional Intelligence in Administration (GS-IV)',
                    a: '<strong>Q2 (GS-I Urbanization &amp; Geography):</strong> "Urban floods in Indian metropolises are less a hydrological phenomenon and more a failure of urban governance and wetland encroachment. Critically comment." (250 Words, 15 Marks)',
                    b: '<strong>Q2 (GS-IV Ethics in Public Administration):</strong> "Discuss how Emotional Intelligence and the principle of \'Nishkama Karma\' can guide a District Magistrate when handling communal polarization and synthetic social-media rumours." (250 Words, 15 Marks)'
                }
            ]
        ],
        'capf-ac': [
            // SECTION 1: CAPF PAPER-II ESSAY (300 WORDS | 25 MINS | 20 MARKS)
            [
                {
                    setTag: 'CAPF Set 1 of 3 • Asymmetric Drone Warfare & Left-Wing Extremism',
                    a: '<strong>Option A (Internal Security Essay — 300w):</strong> "Asymmetric Drone Warfare and Grey-Zone Operations: Modernizing India\'s Border Management Architecture."',
                    b: '<strong>Option B (Internal Security Essay — 300w):</strong> "Left-Wing Extremism in India: Synergy of Security Operations, Tribal Welfare, and Last-Mile Connectivity."'
                },
                {
                    setTag: 'CAPF Set 2 of 3 • Role of CAPFs & Critical Cyber Infrastructure',
                    a: '<strong>Option A (Forces &amp; Nation-Building — 300w):</strong> "Role of Central Armed Police Forces (CAPFs) in Internal Security, Disaster Response, and Grassroot Nation-Building."',
                    b: '<strong>Option B (Cyber Security Essay — 300w):</strong> "Cyber Warfare and Critical Information Infrastructure Protection: Securing India\'s Power Grids, Banking, and Defence Networks."'
                },
                {
                    setTag: 'CAPF Set 3 of 3 • Border Management (CIBMS) & Himalayan Ecology',
                    a: '<strong>Option A (Border Security — 300w):</strong> "Illegal Migration, Demographic Shifts, and Comprehensive Integrated Border Management System (CIBMS) in Northeast India."',
                    b: '<strong>Option B (Non-Traditional Security — 300w):</strong> "Climate Change as a Non-Traditional Security Threat: Ecological Fragility in the Indian Himalayas and Maritime Domain Awareness."'
                }
            ],
            // SECTION 2: CAPF OFFICIAL REPORT WRITING (200 WORDS | 15 MINS | 10 MARKS)
            [
                {
                    setTag: 'CAPF Report Set 1 of 3 • Deepfake Misinformation & Himalayan GLOFs',
                    a: '<strong>Option A (Official Report — 200w):</strong> Prepare an official report on the impact of deepfakes and synthetic misinformation on internal law and order.',
                    b: '<strong>Option B (Official Report — 200w):</strong> Write a field report on Glacial Lake Outburst Floods (GLOFs) and disaster preparedness in Himalayan border states.'
                },
                {
                    setTag: 'CAPF Report Set 2 of 3 • Synthetic Drug Trafficking & Vibrant Villages',
                    a: '<strong>Option A (Official Report — 200w):</strong> Write an official report on the surge in synthetic drug trafficking through maritime and drone corridors.',
                    b: '<strong>Option B (Official Report — 200w):</strong> Prepare an official report on the implementation of the Vibrant Villages Programme (VVP) along India\'s northern border.'
                },
                {
                    setTag: 'CAPF Report Set 3 of 3 • Urban Heatwave Action Plans & Women in CAPFs',
                    a: '<strong>Option A (Official Report — 200w):</strong> Write an official report on rising heatwave fatalities in urban India and the efficacy of State Heat Action Plans.',
                    b: '<strong>Option B (Official Report — 200w):</strong> Prepare an official report on the recruitment and operational integration of women personnel in Central Armed Police Forces.'
                }
            ]
        ]
    };

    // ------------------------------------------------------------------------
    // 2. COMPLETE UPSC QUESTION KNOWLEDGE BASE (18 SETS)
    // ------------------------------------------------------------------------
    const UPSC_QUESTION_KNOWLEDGE_BASE = {
        'upsc-essay-sec1-pair0': {
            topicName: 'Philosophical Set 1: Ship in Harbor (Courage & Constitutional Morality) OR Wisdom vs Knowledge in an Algorithmic Age',
            keywords: ['harbor', 'ship', 'courage', 'scientific temper', 'constitutional morality', 'article 51a', 'ambedkar', 'wisdom', 'knowledge', 'truth', 'facts', 'algorithm', 'ethical', 'artificial intelligence', 'empathy', 'humanism', 'socrates', 'kant', 'gandhi'],
            checklist: [
                { point: 'Philosophical Hook / Metaphor Unpacking (Shedd / Socrates / Buddha / Upanishadic Charaiveti)', regex: /\b(metaphor|ship|harbor|wisdom|knowledge|socrates|buddha|gandhi|ambedkar|charaiveti)\b/i },
                { point: 'Constitutional Morality & Polity Dimension (Articles 14, 19, 21, 51A(h) Scientific Temper)', regex: /\b(constitution|constitutional\s+morality|article\s+51a|scientific\s+temper|democracy|rights|justice)\b/i },
                { point: 'Technological & Ethical Dilemma (AI Algorithms, Value-Neutral Knowledge vs Compassionate Viveka)', regex: /\b(algorithm|artificial\s+intelligence|data|ethics|ethical|compassion|empathy|viveka)\b/i },
                { point: 'Balanced Counter-Thesis (Prudence vs Recklessness) & Humanistic Synthesis Conclusion', regex: /\b(however|balance|prudence|synthesis|ultimately|conclude|conclusion|sarvodaya)\b/i }
            ],
            modelAnswer: `"A ship in harbor is safe, but that is not what ships are built for." This aphorism captures the core paradox of human and institutional evolution: stagnation disguised as security is the ultimate existential risk.\n\nFrom Siddhartha Gautama renouncing his palace to Galileo challenging dogma, progress has always demanded venturing into uncharted waters, echoing the Upanishadic call of 'Charaiveti' (Keep Moving Forward). At independence, India rejected colonial paternalism and chose the audacious voyage of universal adult franchise and transformative constitutionalism. As Dr. B.R. Ambedkar emphasized, Constitutional Morality—anchored in Articles 14, 19, 21, and Fundamental Duty 51A(h) (scientific temper)—requires dismantling entrenched hierarchies through progressive judicial landmarks like Justice Puttaswamy and Navtej Johar.\n\nSimilarly, in an algorithmic age, when knowledge merely accumulates data without ethical wisdom (Viveka), humanity risks algorithmic bias and surveillance. Pairing scientific boldness (Chandrayaan-3, Green Hydrogen) with Gandhian Sarvodaya ensures our civilizational vessel sails with both courage and a moral compass.`
        },
        'upsc-essay-sec1-pair1': {
            topicName: 'Philosophical Set 2: Service & Empathy in Public Administration OR History as Originals and Copies',
            keywords: ['service', 'empathy', 'find yourself', 'lose yourself', 'gandhi', 'public administration', 'antodaya', 'compassion', 'civil servant', '2nd arc', 'sevottam', 'history', 'gallery', 'originals', 'copies', 'tocqueville'],
            checklist: [
                { point: 'Philosophical Unpacking of Selfless Service (Gandhi\'s Talisman / Nishkama Karma) OR Tocqueville\'s Quote', regex: /\b(gandhi|talisman|nishkama\s+karma|empathy|service|history|originals|copies|tocqueville)\b/i },
                { point: 'Public Administration & Governance Application (2nd ARC, Sevottam, Citizen-Centricity)', regex: /\b(administration|governance|civil\s+serv|citizen|2nd\s+arc|sevottam|antodaya|welfare)\b/i },
                { point: 'Socio-Economic & Vulnerable Sections Perspective (Tribal, Women, Disabled, Last-Mile)', regex: /\b(vulnerable|marginalized|women|tribal|dalit|inclusion|poverty|dignity|justice)\b/i },
                { point: 'Synthesis Conclusion Anchored in Constitutional Fraternity', regex: /\b(preamble|fraternity|constitution|ultimately|conclude|conclusion|humanity)\b/i }
            ],
            modelAnswer: `Mahatma Gandhi's assertion that "The best way to find yourself is to lose yourself in the service of others" dissolves the divide between self-actualization and collective welfare, offering the ultimate ethical compass for public administration.\n\nAcross philosophical traditions—from the Bhagavad Gita's 'Nishkama Karma' and Vivekananda's 'Daridra Narayana' to Kant's Categorical Imperative—true identity is forged in relational empathy rather than egoistic accumulation. In a Weberian bureaucracy, rigid rule-following without compassion degenerates into red-tapism and institutional apathy, where a starving widow is denied rations due to a biometric mismatch.\n\nAs the 2nd Administrative Reforms Commission (ARC) highlighted in 'Ethics in Governance', empathy transforms a civil servant from a regulator into a development facilitator, exemplified by grassroot administrators building community roads and eradicating malnutrition. Recalling Gandhi's Talisman ensures policy design remains anchored in Antyodaya and the Preamble's promise of Justice and Fraternity.`
        },
        'upsc-essay-sec1-pair2': {
            topicName: 'Philosophical Set 3: Thinking & Dialectics (Opposite Team) OR Curiosity & Epistemic Humility (Not All Who Wander Are Lost)',
            keywords: ['thinking', 'game', 'opposite team', 'dialectic', 'dissent', 'debate', 'democracy', 'deliberation', 'socrates', 'hegel', 'mill', 'wander', 'lost', 'curiosity', 'discovery', 'science'],
            checklist: [
                { point: 'Philosophical Framing of Dialectics (Vada-Vivada-Samvada / Hegel / J.S. Mill) OR Exploratory Curiosity', regex: /\b(dialectic|samvada|hegel|socrates|mill|dissent|curiosity|wander|discovery)\b/i },
                { point: 'Democratic & Constitutional Dimension (Parliamentary Opposition, Article 19(1)(a), Deliberation)', regex: /\b(parliament|democracy|opposition|article\s+19|deliberation|constitution|federal)\b/i },
                { point: 'Scientific & Digital Echo-Chamber Critique (Confirmation Bias vs Rigvedic Openness)', regex: /\b(science|scientific|innovation|echo\s+chamber|algorithm|polarization|rigveda)\b/i },
                { point: 'Balanced Synthesis (Constructive Dissent vs Obstructionism)', regex: /\b(constructive|balance|synthesis|conclude|conclusion|therefore|truth)\b/i }
            ],
            modelAnswer: `"Thinking is like a game; it does not begin unless there is an opposite team." Genuine cognition is inherently dialogical: without an opposing perspective to challenge our assumptions, thought calcifies into dogma.\n\nFrom the Socratic method and Hegel's dialectic (Thesis–Antithesis–Synthesis) to the Indian tradition of 'Shastrartha' and 'Vada-Vivada-Samvada', intellectual progress has always thrived on respectful contestation. As John Stuart Mill argued in 'On Liberty', silencing dissent robs humanity of the collision through which truth is refined.\n\nIn constitutional democracies, a vigilant Parliamentary Opposition, independent judiciary, free press under Article 19(1)(a), and civil society audits prevent executive groupthink—as seen in the grassroot dialectics that shaped the RTI Act. In an era where social-media algorithms trap citizens in polarized echo chambers, reviving the Rigvedic spirit—'Let noble thoughts come to us from all directions'—is vital for democratic and scientific vitality.`
        },
        'upsc-essay-sec2-pair0': {
            topicName: 'Governance Set 1: Digital Public Infrastructure (DPI) as Social Contract OR Urbanization & Ecological Vulnerability',
            keywords: ['digital public infrastructure', 'dpi', 'social contract', 'jam trinity', 'upi', 'aadhaar', 'ondc', 'privacy', 'puttaswamy', 'dpdp', 'exclusion', 'urbanization', 'ecological', 'flood', 'wetland', '74th amendment', 'sponge city'],
            checklist: [
                { point: 'Strong Governance Thesis (Rousseau\'s Social Contract to India Stack OR Urban-Ecological Paradox)', regex: /\b(social\s+contract|dpi|digital\s+public|india\s+stack|urbanization|ecological|vulnerability)\b/i },
                { point: 'Constitutional & Legal Anchor (Article 21 Right to Privacy / Puttaswamy / DPDP Act / 74th Amendment)', regex: /\b(article\s+21|puttaswamy|privacy|dpdp|74th\s+amendment|municipal|constitutional)\b/i },
                { point: 'Economic & Welfare Data (DBT ₹38L Cr Savings / UPI Inclusion OR Urban GDP vs Wetland Loss)', regex: /\b(dbt|leakage|upi|inclusion|gdp|wetland|drainage|heat\s+island)\b/i },
                { point: 'Vulnerability Audit & Way Forward (Bridging Digital Divide / Offline Grievance Redressal / Sponge Cities)', regex: /\b(exclusion|digital\s+divide|biometric|marginalized|sponge\s+cit|2nd\s+arc|conclude)\b/i }
            ],
            modelAnswer: `Rousseau's classical 'Social Contract' envisioned citizens partnering with the State for security and welfare; in 21st-century India, Digital Public Infrastructure (DPI)—Aadhaar, UPI, DigiLocker, Account Aggregator, and ONDC—has emerged as the new architecture of this social contract.\n\nEconomically, DPI achieved in under a decade what traditional models took half a century: Direct Benefit Transfers (DBT) have plugged middlemen leakages across 300+ schemes, while UPI processes over 15 billion monthly transactions, formalizing street vendors and MSMEs. However, a social contract is legitimate only when inclusive and rights-respecting. Biometric failures denying rations to tribal laborers or opaque profiling threaten informational autonomy.\n\nAs affirmed in the 9-judge Justice K.S. Puttaswamy judgment (2017), the Right to Privacy is intrinsic to Article 21. Enforcing the Digital Personal Data Protection (DPDP) Act with independent oversight, mandating offline grievance alternatives, and bridging the gender digital divide will ensure DPI empowers the last citizen.`
        },
        'upsc-essay-sec2-pair1': {
            topicName: 'Governance Set 2: Patriarchy & Women-Led Development OR Climate Justice & Net-Zero 2070',
            keywords: ['patriarchy', 'women', 'gender', 'inequality', 'care economy', 'lfpr', '106th amendment', 'nari shakti', 'shg', 'lakhpati didi', 'climate justice', 'global south', 'cbdr', 'net-zero', '2070', 'panchamrit', 'just transition'],
            checklist: [
                { point: 'Sociological / Global Governance Thesis Unpacking Structural Inequality', regex: /\b(patriarchy|gender|women-led|climate\s+justice|global\s+south|cbdr)\b/i },
                { point: 'Constitutional & Policy Milestones (Art 14/15, 73rd & 106th Amendment Nari Shakti OR Panchamrit / Paris Agreement)', regex: /\b(article\s+14|article\s+15|106th\s+amendment|73rd|nari\s+shakti|panchamrit|net-zero)\b/i },
                { point: 'Economic & Empirical Data (Unpaid Care Work / NFHS-5 / SHG Lakhpati Didis OR Per-Capita Emissions / Coal)', regex: /\b(care\s+economy|lfpr|nfhs|shg|lakhpati\s+didi|per-capita|coal|green\s+hydrogen)\b/i },
                { point: 'Transformative Way Forward (Safety, STEM, Care Infrastructure OR Just Transition & Climate Finance)', regex: /\b(stem|crèche|palna|just\s+transition|viksit\s+bharat|conclude|therefore)\b/i }
            ],
            modelAnswer: `Patriarchy operates as an invisible yet pervasive structure of social inequality from womb to workplace—manifesting in nutritional deprivation (NFHS-5 anemia data) and the disproportionate burden of the unpaid care economy, where Indian women spend nearly 300 minutes daily on unremunerated domestic work, suppressing Female Labor Force Participation.\n\nTransitioning from 'welfare of women' to 'Women-Led Development' is the cornerstone of Viksit Bharat@2047. Politically, the 73rd Amendment empowered 1.4 million elected women in Panchayats, now culminated by the 106th Constitutional Amendment Act (Nari Shakti Vandan Adhiniyam) reserving 33% seats in the Lok Sabha and State Assemblies. Economically, 10 crore women in Self-Help Groups (Lakhpati Didis and Drone Didis) and women scientists leading ISRO missions exemplify transformative agency.\n\nTrue emancipation under Articles 14, 15, and 21 requires monetizing and redistributing care work through crèche infrastructure (Palna scheme), safe public transit, STEM scholarships, and dismantling patriarchal social norms.`
        },
        'upsc-essay-sec2-pair2': {
            topicName: 'Governance Set 3: Cooperative Federalism & Demographic Divergence OR Education Without Values & Ethical AI',
            keywords: ['cooperative federalism', 'fiscal', 'finance commission', 'article 280', 'gst', 'demographic', 'delimitation', 'sarkaria', 'punchhi', 'article 263', 'education', 'values', 'ethical ai', 'nep 2020'],
            checklist: [
                { point: 'Constitutional & Conceptual Framing (Granville Austin / Article 1 / Article 280 OR Gandhi\'s Nai Talim)', regex: /\b(granville\s+austin|article\s+1|article\s+280|federalism|sarkaria|punchhi|values|nep\s+2020)\b/i },
                { point: 'Fiscal & Demographic Analysis (Cesses/Surcharges, 16th FC Devolution, North-South TFR Divergence)', regex: /\b(gst\s+council|cess|devolution|16th\s+finance|delimitation|fertility|ageing|deepfake)\b/i },
                { point: 'Supreme Court / Commission Citations (Mohit Minerals Case, Sarkaria/Punchhi, Inter-State Council Art 263)', regex: /\b(mohit\s+minerals|inter-state\s+council|article\s+263|niti\s+aayog|kothari)\b/i },
                { point: 'Balanced Way Forward', regex: /\b(sdg|consensus|73rd|74th|human-centric|conclude|therefore)\b/i }
            ],
            modelAnswer: `Granville Austin characterized the Indian Constitution as a social document anchored in Cooperative Federalism. Sustaining this compact in the 21st century requires harmonizing fiscal autonomy with stark North-South demographic divergence.\n\nWhile States incur over 60% of developmental expenditure in health and education, they raise ~38% of revenue, and the rising share of non-divisible Union cesses and surcharges has shrunk the divisible tax pool. Furthermore, debates before the 16th Finance Commission (Article 280) and upcoming delimitation highlight the tension between rapidly ageing Southern states (TFR <1.7) and youthful Northern states.\n\nAs the Supreme Court held in the Mohit Minerals case (2022), federal institutions like the GST Council (Article 279A) must function through collaborative consensus. Revitalizing the Inter-State Council under Article 263 (Sarkaria and Punchhi Commission recommendations), capping cesses, and linking horizontal devolution to SDG outcomes and elderly-care needs will strengthen national integration.`
        },

        // ==================== UPSC CSE GS MAINS: 10-MARKERS (150W) ====================
        'upsc-gs-sec1-pair0': {
            topicName: 'GS 10M Set 1: Finance Commission Fiscal Imbalances (GS-II) OR Digital Agriculture & Agri-Stack (GS-III)',
            keywords: ['finance commission', 'article 280', 'vertical', 'horizontal', 'imbalance', 'devolution', 'cess', 'demographic', '15th', '16th', 'digital agriculture', 'agri-stack', 'smallholder', 'fragmented', 'landholding', 'uli', 'enam', 'fpo'],
            checklist: [
                { point: 'Concise Introduction Citing Article 280 (Finance Commission) OR 86% Smallholder Context', regex: /\b(article\s+280|finance\s+commission|16th|86%|smallholder|fragmented|agri-stack)\b/i },
                { point: 'Addresses Core Directive ("Examine" / "Evaluate") with Structured Points', regex: /\b(vertical|horizontal|divisible|registry|crop\s+survey|credit)\b/i },
                { point: 'Covers Key Bottlenecks (Non-Divisible Cesses & Ageing States OR Digital Divide & Tenant Farmers)', regex: /\b(cess|surcharge|tfr|income\s+distance|uli|enam|tenant|privacy)\b/i },
                { point: 'Actionable Way Forward (16th FC Reforms / FPO Integration)', regex: /\b(way\s+forward|conclude|conclusion|therefore|fpo|sdg)\b/i }
            ],
            modelAnswer: `Constituted under Article 280 of the Constitution, the Finance Commission (FC) acts as the institutional balancing wheel of Indian fiscal federalism.\n\n1. Vertical Fiscal Imbalance (Union vs States):\n• States incur ~62% of developmental expenditure while collecting ~38% of revenue. Although the 14th and 15th FCs kept tax devolution at 42% and 41%, rising non-divisible Union cesses and surcharges (~15–18% of Gross Tax Revenue) have shrunk the effective divisible pool.\n\n2. Horizontal Imbalance Amid Demographic Shifts:\n• The 15th FC assigned 12.5% weight to 'Demographic Performance' alongside Income Distance (45%) to reward population stabilization.\n• However, rapidly ageing Southern states face declining shares despite rising geriatric healthcare costs, while Northern states require youth skilling funds.\n\nWay Forward:\nThe 16th FC should recommend bringing cesses into the divisible pool, introduce an 'Elderly Dependency' metric, and expand performance-linked grants for 73rd/74th Amendment local bodies.`
        },
        'upsc-gs-sec1-pair1': {
            topicName: 'GS 10M Set 2: Simultaneous Elections ONOE (GS-II) OR North-South Demographic Ageing Divide (GS-I)',
            keywords: ['simultaneous elections', 'one nation one election', 'kovind committee', 'article 83', 'article 172', 'federalism', 'mcc', 'demographic', 'ageing', 'fertility', 'tfr', 'southern', 'northern', 'migration', 'silver economy'],
            checklist: [
                { point: 'Sharp Introduction (Kovind Committee / Articles 83, 172 OR NFHS-5 TFR 2.0 Data)', regex: /\b(kovind|article\s+83|article\s+172|simultaneous|nfhs|tfr|demographic)\b/i },
                { point: 'Balanced Pros & Cons (MCC Continuity & Cost vs Unexpired Term & Regional Issues)', regex: /\b(mcc|model\s+code|expenditure|federalism|unexpired\s+term|youth\s+bulge|ageing)\b/i },
                { point: 'Constitutional / Socio-Economic Implications (Basic Structure / Care Economy & Migration)', regex: /\b(basic\s+structure|bommai|delimitation|silver\s+economy|skilling|migration)\b/i },
                { point: 'Constructive Way Forward (Constructive Vote of No-Confidence / Portable Welfare)', regex: /\b(law\s+commission|constructive\s+vote|consensus|way\s+forward|conclude)\b/i }
            ],
            modelAnswer: `While India held simultaneous elections until 1967, the Kovind Committee (2024) has proposed synchronizing Lok Sabha, State Assembly, and local body elections via constitutional amendments (Articles 82A, 83, and 172).\n\n1. Governance & Economic Benefits:\n• Prevents policy paralysis caused by frequent Model Code of Conduct (MCC) impositions.\n• Curbs massive poll expenditure (~₹1.35 lakh crore in 2024) and frees CAPFs and school teachers from perpetual election duties.\n\n2. Constitutional & Federal Concerns:\n• Truncating state assembly tenures to an "unexpired term" after mid-term dissolution weakens executive accountability to the state legislature.\n• National campaigns may overshadow regional aspirations, testing the Basic Structure doctrine of federalism (S.R. Bommai case).\n\nWay Forward:\nAdopting the Law Commission's 'Constructive Vote of No-Confidence' (German model) and holding elections in two bi-annual clusters through federal consensus offers a balanced middle path.`
        },
        'upsc-gs-sec1-pair2': {
            topicName: 'GS 10M Set 3: Narco-Drone & Crypto Border Nexus (GS-III) OR Constitutional Morality in Civil Services (GS-IV)',
            keywords: ['narco-terrorism', 'drone', 'uav', 'cryptocurrency', 'darknet', 'golden crescent', 'golden triangle', 'bsf', 'cibms', 'ncb', 'constitutional morality', 'ambedkar', 'neutrality', 'integrity', 'article 14'],
            checklist: [
                { point: 'Direct Contextual Opening (Golden Crescent/Triangle OR Dr. B.R. Ambedkar\'s Definition)', regex: /\b(golden\s+crescent|golden\s+triangle|narco|drone|ambedkar|constitutional\s+morality)\b/i },
                { point: 'Core Dimensions Unpacked (UAV Payload Drops & Crypto Hawala OR Political Neutrality vs Constitutional Commitment)', regex: /\b(uav|cryptocurrency|darknet|hawala|neutrality|impartiality|article\s+14|rule\s+of\s+law)\b/i },
                { point: 'Institutional / Ethical Challenges Highlighted', regex: /\b(radar|jammer|fiu|politicization|majoritarian|discretion)\b/i },
                { point: 'Actionable Way Forward (CIBMS Anti-Drone Grid / 2nd ARC Code of Ethics)', regex: /\b(cibms|anti-drone|ncb|2nd\s+arc|karmayogi|way\s+forward|conclude)\b/i }
            ],
            modelAnswer: `Invoked by Dr. B.R. Ambedkar in the Constituent Assembly, 'Constitutional Morality' signifies paramount adherence to the core values of the Constitution—liberty, equality, fraternity, and due process—over transient majoritarian impulses or personal prejudice.\n\n1. Why It Must Be Cultivated:\n• In a society historically stratified by caste, gender, and feudal hierarchies, constitutional egalitarianism (Articles 14–17) is not automatic; it requires deliberate institutional nurturing.\n\n2. Application to Civil Service Neutrality:\n• Political Neutrality vs Constitutional Commitment: While civil servants must remain strictly non-partisan toward political parties, they cannot be passive or "neutral" when constitutional rights are violated.\n• Checking Arbitrary Discretion: In policing and welfare delivery, constitutional morality ensures procedural fairness (Article 21) and protects vulnerable minorities.\n\nWay Forward:\nEmbedding case-based ethical training under Mission Karmayogi and enacting the 2nd ARC's Public Service Code will institutionalize constitutional morality.`
        },

        // ==================== UPSC CSE GS MAINS: 15-MARKERS (250W) ====================
        'upsc-gs-sec2-pair0': {
            topicName: 'GS 15M Set 1: Net-Zero 2070 vs Energy Security (GS-III) OR Global South & Multilateral Reform (GS-II)',
            keywords: ['net-zero', '2070', 'panchamrit', 'energy security', 'coal', 'renewable', 'green hydrogen', 'grid', 'cbam', 'climate finance', 'global south', 'multilateral', 'unsc', 'bretton woods', 'imf', 'world bank', 'african union', 'g20'],
            checklist: [
                { point: 'Comprehensive Introduction (COP26 Panchamrit / 500 GW Target OR India\'s G20 Voice of Global South)', regex: /\b(panchamrit|net-zero\s+2070|500\s+gw|global\s+south|g20|african\s+union|multilateral)\b/i },
                { point: 'Critical Bottlenecks Analyzed (Baseload Coal ~70%, BESS Storage, Critical Minerals, DISCOM Debt, CBAM)', regex: /\b(coal|baseload|discom|critical\s+mineral|battery|cbam|climate\s+finance|veto)\b/i },
                { point: 'Multi-Dimensional Coverage (Economy, Ecology, Tech, Global Equity & Just Transition)', regex: /\b(green\s+hydrogen|just\s+transition|carbon\s+market|ccts|cbdr|bretton\s+woods)\b/i },
                { point: 'Structured Way Forward Conclusion', regex: /\b(way\s+forward|conclude|conclusion|therefore|taxonomy)\b/i }
            ],
            modelAnswer: `At COP26, India pledged its 'Panchamrit' targets—including 500 GW non-fossil electricity capacity by 2030 and Net-Zero emissions by 2070—while striving to ensure energy security for a rapidly industrializing economy.\n\n1. Structural Challenges in Achieving Net-Zero 2070:\n• Baseload Coal Dependency: Coal generates ~70% of India's electricity. With surging industrial and cooling demand, premature coal phase-out risks energy poverty and industrial uncompetitiveness.\n• Grid Intermittency & Critical Minerals: Renewable energy requires costly Battery Energy Storage Systems (BESS), Pumped Hydro, and imported critical minerals (Lithium, Cobalt) dominated by geopolitical monopolies.\n• Financial & Trade Hurdles: Financially stressed state DISCOMs delay renewable PPAs, global climate finance remains below commitment, and the EU's Carbon Border Adjustment Mechanism (CBAM) penalizes Indian steel and aluminium exports.\n\nWay Forward — A 'Just and Phased Transition':\n1) Operationalize the Indian Carbon Credit Trading Scheme (CCTS) and a national Green Taxonomy to mobilize Sovereign Green Bonds.\n2) Scale the National Green Hydrogen Mission, Small Modular Nuclear Reactors (SMRs), and domestic critical-mineral recycling.\n3) Create a 'Just Transition Fund' to reskill coal-dependent workers in eastern India.`
        },
        'upsc-gs-sec2-pair1': {
            topicName: 'GS 15M Set 2: Right to Privacy & DPDP Act (GS-II) OR Middle-Income Trap & Viksit Bharat 2047 (GS-III)',
            keywords: ['privacy', 'article 21', 'puttaswamy', 'proportionality', 'dpdp act', 'data protection board', 'consent', 'exemption', 'rti', 'middle-income trap', 'viksit bharat', 'r&d', 'manufacturing', 'skilling', 'female lfpr'],
            checklist: [
                { point: 'Authoritative Opening (9-Judge Puttaswamy 2017 Proportionality Test OR World Bank Middle-Income Trap Report)', regex: /\b(puttaswamy|article\s+21|proportionality|dpdp|middle-income\s+trap|world\s+bank)\b/i },
                { point: 'Balanced Evaluation (Consent Architecture & ₹250 Cr Penalty vs Sec 17 State Exemptions & RTI Dilution)', regex: /\b(consent|data\s+fiduciary|section\s+17|data\s+protection\s+board|rti|r&d|female\s+lfpr)\b/i },
                { point: 'Constitutional, Technological & Governance Critique', regex: /\b(surveillance|autonomy|section\s+8|srikrishna|automation|skilling)\b/i },
                { point: 'Actionable Reform Way Forward', regex: /\b(srikrishna|independent|oversight|anrf|way\s+forward|conclude)\b/i }
            ],
            modelAnswer: `In the landmark 9-judge Justice K.S. Puttaswamy judgment (2017), the Supreme Court affirmed the Right to Privacy as intrinsic to Article 21, establishing a four-fold test of legality, legitimate state aim, proportionality, and procedural safeguards.\n\n1. Strengths of the Digital Personal Data Protection (DPDP) Act, 2023:\n• Empowers 'Data Principals' with notice-and-consent in 22 languages, right to erasure, and 'Consent Managers'.\n• Imposes strict penalties up to ₹250 crore on Data Fiduciaries for data breaches and mandates verifiable parental consent for children.\n\n2. Critical Lacunae Against Puttaswamy Standards:\n• Sweeping State Exemptions (Section 17(2)): Allows the executive to exempt state agencies on broad grounds of public order and security without judicial authorization or sunset clauses.\n• Dilution of RTI Act (Section 8(1)(j)): Replaces the public-interest override with a blanket exemption for all personal data, weakening social audits.\n• Data Protection Board (DPB): Central appointment and short two-year tenures raise independence concerns.\n\nWay Forward:\nIncorporating Justice Srikrishna Committee's judicial-oversight safeguards for surveillance, restoring the RTI public-interest proviso, and regulating algorithmic AI profiling will balance digital innovation with fundamental rights.`
        },
        'upsc-gs-sec2-pair2': {
            topicName: 'GS 15M Set 3: Urban Flooding & Wetland Encroachment (GS-I) OR Emotional Intelligence & Nishkama Karma (GS-IV)',
            keywords: ['urban flood', 'wetland', 'encroachment', 'concretization', 'stormwater', 'ndma', 'sponge city', '74th amendment', 'emotional intelligence', 'goleman', 'nishkama karma', 'bhagavad gita', 'district magistrate', 'communal'],
            checklist: [
                { point: 'Sharp Opening Thesis (Anthropogenic Governance Failure vs Hydrology OR Goleman\'s EI + Nishkama Karma)', regex: /\b(urban\s+flood|anthropogenic|wetland|hydrological|emotional\s+intelligence|goleman|nishkama\s+karma)\b/i },
                { point: 'Concrete Examples & Multi-Dimensional Causes (Bengaluru Rajakaluves / Chennai Pallikaranai / Impervious Concrete)', regex: /\b(chennai|bengaluru|mumbai|delhi|pallikaranai|stormwater|concretization|empathy|equanimity)\b/i },
                { point: 'Institutional & Administrative Analysis (74th Amendment ULBs & NDMA Guidelines)', regex: /\b(ndma|74th\s+amendment|drainage|master\s+plan|peace\s+committee|cyber)\b/i },
                { point: 'Sponge Cities & Blue-Green Infrastructure Way Forward', regex: /\b(sponge\s+cit|blue-green|bioswale|permeable|way\s+forward|conclude)\b/i }
            ],
            modelAnswer: `Recurrent inundation in Indian metropolises—from Bengaluru and Chennai to Mumbai and Delhi—proves that urban flooding is less a meteorological anomaly and more an anthropogenic failure of urban governance and wetland encroachment.\n\n1. Governance & Ecological Root Causes:\n• Encroachment of Natural Sponges: Bengaluru lost over 75% of its interconnected 'Rajakaluve' lake channels to real-estate concretization, while Chennai's Pallikaranai marshland shrunk drastically.\n• Unplanned Concretization: Violation of Master Plans has replaced permeable soil with impervious concrete, raising surface runoff from 20% to over 85%.\n• Obsolete Stormwater Drains: Drains designed for 12–25 mm/hr rainfall are choked with unsegregated plastic waste and silt.\n• Institutional Fragmentation: Overlapping jurisdiction between Development Authorities, ULBs, and PWD paralyzes accountability.\n\nWay Forward — Building 'Sponge Cities' (NDMA 2010 Guidelines):\n1) Geo-map and notify urban wetlands and floodplains as inviolate 'No-Development Zones'.\n2) Mandate Blue-Green Infrastructure—permeable pavements, bioswales, and rainwater harvesting.\n3) Financially empower Urban Local Bodies under the 74th Amendment and deploy Doppler radar hyper-local early warning systems.`
        },

        // ==================== UPSC CAPF PAPER-II: SECTION 1 (300W ESSAYS) ====================
        'capf-ac-sec1-pair0': {
            topicName: 'CAPF Essay Set 1: Asymmetric Drone Warfare & Border Management OR Left-Wing Extremism (LWE) Holistic Strategy',
            keywords: ['drone', 'uav', 'asymmetric', 'grey-zone', 'border', 'cibms', 'bsf', 'counter-drone', 'narco', 'left-wing extremism', 'lwe', 'naxal', 'samadhan', 'tribal', 'pesa', 'fra', 'connectivity', 'crpf', 'fob'],
            checklist: [
                { point: 'Clear Internal Security Thesis (Grey-Zone UAV Proliferation OR Declining LWE via SAMADHAN Doctrine)', regex: /\b(drone|uav|asymmetric|grey-zone|border|left-wing\s+extremism|lwe|naxal|samadhan)\b/i },
                { point: 'Operational & Tactical Analysis (Cross-Border Narcotics/Arms Drops OR 250+ Forward Operating Bases & CoBRA)', regex: /\b(payload|narcotics|radar|swarm|fob|forward\s+operating|crpf|cobra|intelligence)\b/i },
                { point: 'Technological & Developmental Counter-Measures (DRDO D4S, CIBMS OR PESA, Forest Rights Act, 4G/Roads)', regex: /\b(cibms|jammer|drdo|d4s|pesa|forest\s+rights|road|4g|eklavya)\b/i },
                { point: 'Balanced Way Forward Integrating Security with Local Community Trust', regex: /\b(synergy|community|vibrant\s+villages|rehabilitation|conclude|therefore)\b/i }
            ],
            modelAnswer: `Left-Wing Extremism (LWE) has historically posed a severe internal security challenge; however, a calibrated synergy of decisive security operations, last-mile connectivity, and tribal empowerment under the 'SAMADHAN' doctrine has shrunk the Red Corridor by over 75% in the past decade.\n\n1. Security & Area Domination:\nThe establishment of over 250 fortified Forward Operating Bases (FOBs) by the CRPF, CoBRA battalions, and state police in core bastions like Bastar and Abujhmad has dismantled Maoist safe havens and choked illegal levy networks.\n\n2. Last-Mile Connectivity & Tribal Rights:\nUnder the Road Requirement Plan and USOF, thousands of kilometers of all-weather roads, 4G mobile towers, and bank branches have integrated remote villages. Simultaneously, enforcing the PESA Act (1996), Forest Rights Act (2006), MSP for Minor Forest Produce (Van Dhan Kendras), and Eklavya Model Residential Schools has addressed legitimate socio-economic grievances.\n\nWay Forward:\nSustaining the 'Hold and Develop' approach, modernizing surrender-cum-rehabilitation policies, and deepening civic action programmes will permanently replace insurgent violence with constitutional democracy.`
        },
        'capf-ac-sec1-pair1': {
            topicName: 'CAPF Essay Set 2: Role of CAPFs in Nation-Building OR Cyber Warfare & Critical Information Infrastructure',
            keywords: ['capf', 'crpf', 'bsf', 'itbp', 'cisf', 'ssb', 'internal security', 'disaster', 'ndrf', 'civic action', 'election', 'cyber warfare', 'critical information infrastructure', 'ciip', 'nciipc', 'cert-in', 'power grid', 'ransomware'],
            checklist: [
                { point: 'Strong Opening Recognizing CAPFs as Sentinels of the Nation OR Cyber as Fifth Domain of Warfare', regex: /\b(capf|central\s+armed\s+police|sentinel|internal\s+security|cyber\s+warfare|critical\s+information)\b/i },
                { point: 'Multi-Dimensional Operational Analysis (Border Guarding, Elections, CISF Industrial Shield, NDRF OR Power/Banking Grid Attacks)', regex: /\b(bsf|itbp|crpf|cisf|ndrf|election|power\s+grid|scada|ransomware|aiims)\b/i },
                { point: 'Institutional & Technological Modernization (Smart Fencing, Troop Welfare OR NCIIPC, CERT-In, Zero-Trust)', regex: /\b(modernization|mental\s+health|civic\s+action|nciipc|cert-in|zero-trust|indigenous)\b/i },
                { point: 'Forward-Looking Conclusion', regex: /\b(nation-building|welfare|resilience|conclude|therefore)\b/i }
            ],
            modelAnswer: `Serving as the 'Sentinels of the Nation,' India's Central Armed Police Forces (CRPF, BSF, ITBP, CISF, SSB, and Assam Rifles) form the indispensable backbone of border integrity, internal security, and democratic continuity.\n\n1. Multi-Dimensional Operational Spectrum:\n• Border & Internal Security: While the ITBP, BSF, and SSB guard hostile high-altitude, riverine, and open borders against infiltration and narco-drones, the CRPF spearheads counter-insurgency in J&K and LWE theatres and ensures peaceful parliamentary and assembly elections.\n• Economic Shield & Disaster Rescue: The CISF protects airports, nuclear reactors, space installations, and metro networks, while CAPF battalions deputed to the NDRF execute life-saving rescues during floods, cyclones, and earthquakes.\n• Grassroot Nation-Building: Through Civic Action Programmes—medical camps, skill development, and youth sports in border and tribal belts—CAPFs win hearts and minds.\n\nWay Forward:\nAccelerating technological modernization (CIBMS, counter-UAVs) while strengthening troop housing, mental-health counseling, and family welfare will keep force morale at its peak.`
        },
        'capf-ac-sec1-pair2': {
            topicName: 'CAPF Essay Set 3: Illegal Migration & CIBMS in Northeast OR Climate Change & Himalayan/Maritime Security',
            keywords: ['illegal migration', 'demographic', 'cibms', 'northeast', 'myanmar', 'fmr', 'free movement regime', 'bangladesh', 'assam rifles', 'bsf', 'climate change', 'himalaya', 'glof', 'maritime', 'indian ocean', 'cyclone', 'security'],
            checklist: [
                { point: 'Strategic Opening Framing Porous Borders / Free Movement Regime (FMR) OR Climate as Threat Multiplier', regex: /\b(migration|demographic|cibms|northeast|myanmar|fmr|climate\s+change|himalaya|maritime)\b/i },
                { point: 'Security & Socio-Political Implications (Insurgency, Drug Corridor, Ethnic Friction OR GLOFs, Coastal Inundation)', regex: /\b(insurgency|golden\s+triangle|ethnic|biometric|glof|glacial|cyclone|eez|indian\s+ocean)\b/i },
                { point: 'Technological & Policy Counter-Measures (CIBMS Smart Fencing, BOLD-QIT, Border Haats, Vibrant Villages)', regex: /\b(bold-qit|smart\s+fencing|radar|vibrant\s+villages|ndma|icg|navy|sustainable)\b/i },
                { point: 'Balanced Way Forward', regex: /\b(indigenous|diplomacy|ecological|conclude|therefore)\b/i }
            ],
            modelAnswer: `India's 4,096-km Indo-Bangladesh and 1,643-km Indo-Myanmar borders traverse complex riverine, char, and densely forested mountainous terrain in the Northeast, making illegal migration, narcotic smuggling, and insurgent movement major internal security challenges.\n\n1. Security & Demographic Dimensions:\nUnregulated cross-border movement and the exploitation of the erstwhile Free Movement Regime (FMR) along the Myanmar border have fueled synthetic drug trafficking from the Golden Triangle, small-arms proliferation, and fragile ethnic-demographic tensions in border states.\n\n2. Technological Modernization via CIBMS:\nWhere physical fencing is washed away by shifting riverine channels like the Brahmaputra, the Comprehensive Integrated Border Management System (CIBMS)—deployed under Project BOLD-QIT—creates an electronic virtual fence using thermal imagers, underground seismic sensors, laser barriers, aerostats, and all-weather radars.\n\nWay Forward:\nCombining smart border fencing and mandatory biometric border passes with diplomatic coordination, border haats, and the Vibrant Villages Programme will secure India's eastern frontier while supporting legitimate border livelihoods.`
        },

        // ==================== UPSC CAPF PAPER-II: SECTION 2 (200W OFFICIAL REPORTS) ====================
        'capf-ac-sec2-pair0': {
            topicName: 'CAPF Official Report Set 1: Deepfakes & Law and Order OR Glacial Lake Outburst Floods (GLOFs) in Himalayas',
            keywords: ['report', 'deepfake', 'synthetic', 'misinformation', 'law and order', 'communal', 'election', 'it rules', 'cyber', 'glof', 'glacial lake', 'himalaya', 'sikkim', 'ndma', 'early warning', 'itbp', 'ndrf'],
            checklist: [
                { point: 'Official Report Header Block (Title, Place/Date, "By Special Correspondent / Field Officer")', regex: /(report|date\s*:|place\s*:|correspondent|subject\s*:)/i },
                { point: 'Written Strictly in 3rd-Person Objective Register (No casual "I think" / "In my opinion")', regex: /\b(observed|reported|assessment|reveals|indicates|authorities|committee|ministry|ndma)\b/i },
                { point: 'Factual Cause-and-Effect Findings (AI Voice/Video Spoofing & Communal Panic OR South Lhonak Lake GLOF & Dam Damage)', regex: /\b(deepfake|synthetic|algorithm|communal|it\s+rules|glof|glacial|sikkim|teesta|hydropower|ndrf)\b/i },
                { point: 'Institutional Response & Actionable Way Forward', regex: /\b(cert-in|watermark|fact-check|bathymetric|siphon|early-warning|ndma|recommend)\b/i }
            ],
            modelAnswer: `OFFICIAL REPORT: IMPACT OF DEEPFAKES AND SYNTHETIC MISINFORMATION ON INTERNAL LAW AND ORDER\n\nPlace: New Delhi\nDate: 24 October 2026\nBy: Special Internal Security Correspondent\n\n1. Incident & Threat Assessment:\nRecent law-and-order assessments by the Ministry of Home Affairs (MHA) and the Indian Cyber Crime Coordination Centre (I4C) indicate an alarming surge in generative-AI "deepfake" audio and video clips weaponized to incite communal polarization, electoral manipulation, and financial panic.\n\n2. Operational Challenges for Policing:\nHyper-realistic synthetic videos impersonating community leaders or fabricating sacrilege incidents go viral across encrypted messaging platforms within minutes, triggering flash mobs before district administrations can issue clarifications. Furthermore, voice-cloning scams have targeted defence personnel and senior citizens.\n\n3. Institutional Measures & Way Forward:\nUnder the Information Technology (Intermediary Guidelines) Rules, social media intermediaries are mandated to remove flagged synthetic content within strict timelines and embed cryptographic provenance watermarks (C2PA standards). Establishing district-level 24x7 AI Social Media Labs and training CAPF and state police intelligence units in digital forensics remain imperative.`
        },
        'capf-ac-sec2-pair1': {
            topicName: 'CAPF Official Report Set 2: Synthetic Drug Trafficking (Maritime/Drones) OR Vibrant Villages Programme (VVP)',
            keywords: ['report', 'synthetic drug', 'methamphetamine', 'fentanyl', 'maritime', 'drone', 'ncb', 'navy', 'coast guard', 'darknet', 'vibrant villages', 'vvp', 'northern border', 'lac', 'itbp', 'out-migration', 'tourism', 'connectivity'],
            checklist: [
                { point: 'Official Report Heading, Place, Date & Correspondent Line', regex: /(report|date\s*:|place\s*:|correspondent|subject\s*:)/i },
                { point: 'Objective 3rd-Person Factual Reporting', regex: /\b(ncb|ministry|seizure|corridor|border|village|infrastructure|itbp)\b/i },
                { point: 'Specific Data/Operational Details (Operation Samudragupta / UAV Drops OR ₹4,800 Cr VVP across 4 States & 1 UT)', regex: /\b(samudragupta|methamphetamine|coast\s+guard|narco|4,800|arunachal|ladakh|himachal|uttarakhand|migration)\b/i },
                { point: 'Institutional Coordination & Way Forward', regex: /\b(ncord|scanner|anti-drone|homestay|solar|4g|livelihood|recommend)\b/i }
            ],
            modelAnswer: `OFFICIAL REPORT: IMPLEMENTATION OF THE VIBRANT VILLAGES PROGRAMME (VVP) ALONG INDIA'S NORTHERN BORDER\n\nPlace: Itanagar / Leh\nDate: 24 October 2026\nBy: Field Development & Border Security Correspondent\n\n1. Background & Strategic Objective:\nLaunched as a Centrally Sponsored Scheme with an outlay of ₹4,800 crore (including ₹2,500 crore dedicated to road connectivity), the Vibrant Villages Programme (VVP) aims to transform 2,967 border villages across Arunachal Pradesh, Himachal Pradesh, Sikkim, Uttarakhand, and Ladakh to reverse distress out-migration.\n\n2. Field Implementation Highlights:\nField audits indicate rapid progress in 662 priority villages in Phase-I. All-weather border roads, 4G telecom saturation, off-grid solar micro-grids, and eco-tourism homestays are being developed in convergence with ITBP civic action initiatives. Local 'One District One Product' (ODOP) handicrafts, yak dairy, and medicinal herbs are being linked with cooperative markets.\n\n3. Bottlenecks & Way Forward:\nHarsh winter working seasons and delayed forest clearances remain operational hurdles. Empowering Gram Panchayats and integrating VVP youth into border tourism and local scouting will turn India's "last villages" into vibrant "first villages."`
        },
        'capf-ac-sec2-pair2': {
            topicName: 'CAPF Official Report Set 3: Urban Heatwave Fatalities & Heat Action Plans OR Women Personnel in CAPFs',
            keywords: ['report', 'heatwave', 'fatalities', 'urban heat island', 'heat action plan', 'hap', 'ndma', 'imd', 'informal workers', 'women', 'capf', 'mahila', 'battalion', 'crpf', 'bsf', 'cisf', 'itbp', 'gender', 'infrastructure'],
            checklist: [
                { point: 'Official Report Header Block (Title, Place, Date, Correspondent)', regex: /(report|date\s*:|place\s*:|correspondent|subject\s*:)/i },
                { point: 'Strict 3rd-Person Factual & Analytical Tone', regex: /\b(imd|ndma|ministry|personnel|battalion|mortality|temperature)\b/i },
                { point: 'Key Empirical Findings (Wet-Bulb Temperature & Outdoor Workers OR Mahila Battalions, Bastar/LOC Deployment)', regex: /\b(wet-bulb|heat\s+island|gig\s+worker|shaded|cool\s+roof|mahila|crpf|cisf|bsf|creche|restroom)\b/i },
                { point: 'Policy & Operational Recommendations', regex: /\b(notified\s+disaster|ors|staggered|gender-neutral|maternity|recommend)\b/i }
            ],
            modelAnswer: `OFFICIAL REPORT: OPERATIONAL INTEGRATION AND WELFARE OF WOMEN PERSONNEL IN CAPFs\n\nPlace: New Delhi\nDate: 24 October 2026\nBy: Internal Security Correspondent\n\n1. Current Recruitment & Operational Deployment:\nPursuant to the Ministry of Home Affairs (MHA) mandate to increase female representation in Central Armed Police Forces (CAPFs), women personnel ("Mahila Praharis" and "Veeranganas") are now actively deployed across combat, border-guarding, aviation security (CISF), and anti-Naxal theatres. The CRPF's dedicated Mahila Battalions and ITBP's deployment of women at high-altitude forward posts exemplify operational parity.\n\n2. Field Impact:\nWomen contingents have proven indispensable during cordon-and-search operations, crowd management involving female protesters, riot control, and UN Peacekeeping Missions, fostering trust among local women in conflict zones.\n\n3. Infrastructure Gaps & Way Forward:\nDespite operational successes, remote Border Outposts (BOPs) and mobile detachments still face shortages of gender-specific prefabricated restrooms, crèche facilities, and spousal co-posting options. Fast-tracking gender-sensitive barrack infrastructure and flexible maternity-linked postings is vital to achieve the 15% representation target.`
        }
    };

    // ------------------------------------------------------------------------
    // 3. UPSC + EDITORIAL VOCABULARY UPGRADE DICTIONARY
    // ------------------------------------------------------------------------
    const UPSC_VOCAB_UPGRADES = [
        { regex: /\bpoor\s+people\b/gi, weak: 'poor people', strong: 'marginalized & vulnerable sections / socio-economically disadvantaged cohorts', context: 'Standard UPSC GS-I & GS-II terminology.' },
        { regex: /\bgood\s+government\b/gi, weak: 'good government', strong: 'participatory, transparent & accountable governance (Su-Raj)', context: '2nd ARC Ethics & Governance phrasing.' },
        { regex: /\b(big|major|huge)\s+problem(s)?\b/gi, weak: 'big/major problem', strong: 'structural impediment / systemic bottleneck / institutional lacuna', context: 'Elevates GS Mains analytical tone.' },
        { regex: /\bvery\s+important\b/gi, weak: 'very important', strong: 'imperative / sine qua non / pivotal', context: 'High-scoring UPSC Essay & GS collocation.' },
        { regex: /\bhelp\s+(the\s+)?(poor|farmers|women|citizens)\b/gi, weak: 'help the poor/citizens', strong: 'empower the last-mile citizen (Antyodaya) / foster inclusive welfare', context: 'Constitutional & NITI Aayog register.' },
        { regex: /\b(bad|negative)\s+effect(s)?\b/gi, weak: 'bad/negative effect', strong: 'adverse ramification / deleterious impact / cascading externality', context: 'Used in GS-III Economy & Ecology answers.' },
        { regex: /\bsolve\s+(the|this)\s+(problem|issue)\b/gi, weak: 'solve the problem', strong: 'mitigate the underlying structural deficit / redress the anomaly', context: 'Ideal for Way Forward conclusions.' },
        { regex: /\bmake\s+laws\b/gi, weak: 'make laws', strong: 'enact statutory guardrails / codify legislative frameworks', context: 'GS-II Polity & Constitution register.' }
    ];

    const UPSC_POWER_LEXICON = {
        'upsc-essay': [
            { term: 'Transformative Constitutionalism', meaning: 'Using the Constitution as an engine of social emancipation', usage: 'Articles 14, 19, and 21 anchor India\'s transformative constitutionalism.' },
            { term: 'Antyodaya & Sarvodaya', meaning: 'Upliftment of the last person & welfare of all', usage: 'Digital Public Infrastructure must be guided by Gandhian Antyodaya.' },
            { term: 'Epistemic Humility & Scientific Temper', meaning: 'Openness to questioning dogma (Article 51A(h))', usage: 'Algorithmic echo chambers erode epistemic humility and democratic dialogue.' },
            { term: 'Inter-Generational Climate Equity', meaning: 'Preserving ecological capital for future generations', usage: 'Mission LiFE operationalizes inter-generational climate equity.' }
        ],
        'upsc-gs': [
            { term: 'Doctrine of Proportionality (Puttaswamy)', meaning: '4-prong test for any restriction on Fundamental Rights', usage: 'State exemptions under the DPDP Act must satisfy the Puttaswamy proportionality test.' },
            { term: 'Competitive-Cooperative Federalism', meaning: 'States collaborating with the Union while competing on SDG outcomes', usage: 'NITI Aayog indices foster competitive-cooperative federalism.' },
            { term: 'Just Energy Transition', meaning: 'Phasing down fossil fuels while protecting coal-belt workers\' livelihoods', usage: 'India\'s Net-Zero 2070 roadmap requires a Just Energy Transition.' },
            { term: 'Blue-Green Urban Infrastructure', meaning: 'Integrating wetlands, bioswales & permeable surfaces in cities', usage: 'Restoring urban sponges via Blue-Green infrastructure is vital to curb urban floods.' }
        ],
        'capf-ac': [
            { term: 'Grey-Zone & Asymmetric Warfare', meaning: 'Sub-conventional hostilities (narco-drones, deepfakes, cyber attacks)', usage: 'Rogue UAVs represent a classic grey-zone asymmetric threat along the IB.' },
            { term: 'SAMADHAN Doctrine & Area Domination', meaning: 'Holistic counter-LWE strategy combining FOBs with tribal welfare', usage: 'Forward Operating Bases (FOBs) have enabled decisive area domination in Bastar.' },
            { term: 'Comprehensive Integrated Border Management (CIBMS)', meaning: 'Smart virtual fencing using thermal, radar & seismic sensors', usage: 'CIBMS plugs riverine gaps along the Indo-Bangladesh border.' },
            { term: '3rd-Person Institutional Objectivity', meaning: 'Factual reporting style mandatory for CAPF Paper-II Reports', usage: 'Field assessments indicate a 32% decline in infiltration incidents.' }
        ]
    };

    // ------------------------------------------------------------------------
    // 4. 5-PILLAR UPSC DIMENSION & STRUCTURE AUDITOR
    // ------------------------------------------------------------------------
    function analyzeUpsc5Pillars(text) {
        return {
            polity: /\b(constitution|constitutional|article|amendment|fundamental|parliament|federal|federalism|democracy|democratic|governance|judiciary|citizen|rights|directive|preamble|73rd|74th|106th)\b/i.test(text),
            economy: /\b(economy|economic|gdp|fiscal|monetary|inflation|employment|infrastructure|growth|inclusive|msme|poverty|budget|investment|trade|devolution|lfpr|care\s+economy)\b/i.test(text),
            social: /\b(social|society|women|gender|education|health|welfare|ethical|ethics|morality|justice|equity|marginalized|vulnerable|empowerment|caste|tribal|antodaya|sarvodaya|empathy)\b/i.test(text),
            tech: /\b(technology|digital|dpi|ai|artificial\s+intelligence|cyber|drone|uav|cibms|innovation|climate|environment|ecological|sustainable|sustainability|renewable|carbon|green|wetland|glof)\b/i.test(text),
            committee: /\b(committee|commission|supreme\s+court|niti\s+aayog|report|index|2nd\s+arc|arc|sarkaria|punchhi|kovind|srikrishna|kesavananda|puttaswamy|bommai|mohit\s+minerals|ndma|sdg|nfhs)\b/i.test(text)
        };
    }

    function auditUpscSectionStructure(sec, text, examKey) {
        const titleLower = (sec.title || '').toLowerCase();
        const wc = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
        const paras = text.trim() === '' ? 0 : text.trim().split(/\n\s*\n/).filter(p => p.trim().length > 0).length;
        const dims = analyzeUpsc5Pillars(text);
        const coveredDimsCount = Object.values(dims).filter(Boolean).length;
        const checks = [];

        if (titleLower.includes('report')) {
            const hasHeader = /(report|place\s*:|date\s*:|correspondent|subject\s*:)/i.test(text);
            const hasFirstPersonViolation = /\b(i\s+think|in\s+my\s+opinion|i\s+believe|i\s+feel|my\s+view)\b/i.test(text);
            const hasFindingsAndWayForward = /\b(assessment|finding|indicate|reveal|ministry|ndma|mha|recommend|way\s+forward)\b/i.test(text);

            checks.push({
                label: 'CAPF Official Report Header (Title / Place / Date / Correspondent)',
                passed: hasHeader,
                note: hasHeader ? 'Verified Official Report Header block' : 'Missing Report Title / Place / Date / Correspondent header'
            });
            checks.push({
                label: 'Strict 3rd-Person Objectivity Rule',
                passed: !hasFirstPersonViolation && wc >= 20,
                note: hasFirstPersonViolation ? '❌ Used 1st-person ("I think/my opinion") — strictly prohibited in CAPF Reports!' : 'Verified objective 3rd-person reporting tone'
            });
            checks.push({
                label: 'Factual Assessment & Institutional Way Forward',
                passed: hasFindingsAndWayForward,
                note: hasFindingsAndWayForward ? 'Includes official findings & institutional measures' : 'Add factual MHA/NDMA findings & institutional recommendations'
            });
        } else if (examKey === 'upsc-gs') {
            const hasIntroBodyConclusion = paras >= 3;
            const hasSubHeadingsOrBullets = /(\n\s*\d+[\.\)]|\n\s*[•\-]|\bway\s+forward\b)/i.test(text);
            const hasSubstantiation = dims.polity || dims.committee;

            checks.push({
                label: 'Intro – Structured Body – Way Forward Layout',
                passed: hasIntroBodyConclusion,
                note: hasIntroBodyConclusion ? `Verified (${paras} paragraphs/sections)` : `Only ${paras} paragraph(s) (Use Intro, Point-wise Body & Way Forward)`
            });
            checks.push({
                label: 'Point-Wise / Sub-Heading Presentation (QCA Standard)',
                passed: hasSubHeadingsOrBullets,
                note: hasSubHeadingsOrBullets ? 'Uses numbered points/bullets & Way Forward' : 'Use numbered points (1., 2., •) and a "Way Forward:" sub-heading for faster examiner scanning'
            });
            checks.push({
                label: 'Constitutional Articles / SC Judgments / Committee Citations',
                passed: hasSubstantiation,
                note: hasSubstantiation ? 'Substantiated with Articles / SC / Committees' : 'Cite specific Articles (e.g., Art 21, 280), SC Judgments, 2nd ARC, or NITI Aayog data'
            });
            checks.push({
                label: '5-Pillar Multi-Dimensional Coverage (Target: 3+ Pillars)',
                passed: coveredDimsCount >= 3,
                note: `${coveredDimsCount}/5 UPSC Pillars integrated (${Object.entries(dims).filter(x => x[1]).map(x => x[0].toUpperCase()).join(', ') || 'None'})`
            });
        } else {
            const hasMultiParas = paras >= 3;
            const hasTransitions = /\b(furthermore|moreover|consequently|however|nevertheless|therefore|simultaneously|ultimately|in\s+conclusion)\b/i.test(text);
            const minPillarTarget = examKey === 'upsc-essay' ? 4 : 3;

            checks.push({
                label: 'Multi-Paragraph Essay Architecture (Hook -> Body -> Synthesis)',
                passed: hasMultiParas,
                note: hasMultiParas ? `Verified (${paras} paragraphs)` : `Only ${paras} paragraph(s) (Use 4+ paragraphs for smooth multidimensional unfolding)`
            });
            checks.push({
                label: '5-Pillar PESTLE & Constitutional Integration',
                passed: coveredDimsCount >= minPillarTarget,
                note: `${coveredDimsCount}/5 Pillars covered (Polity:${dims.polity ? '✅' : '⚪'} Econ:${dims.economy ? '✅' : '⚪'} Social:${dims.social ? '✅' : '⚪'} Tech/Eco:${dims.tech ? '✅' : '⚪'} SC/ARC:${dims.committee ? '✅' : '⚪'})`
            });
            checks.push({
                label: 'Philosophical / Institutional Cohesive Linkers',
                passed: hasTransitions,
                note: hasTransitions ? 'Verified smooth discourse transitions' : 'Add analytical connectors ("However", "Consequently", "Simultaneously")'
            });
        }

        const minReq = sec.minWords || Math.floor(sec.wordLimit * 0.75);
        const meetsMinWords = wc >= minReq;
        checks.push({
            label: `Word Count Sufficiency (${minReq}–${sec.wordLimit}w)`,
            passed: meetsMinWords,
            note: meetsMinWords ? `Optimal QCA length (${wc}/${sec.wordLimit}w)` : `Under-length (${wc}w written vs ${minReq}w recommended)`
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
            dims,
            coveredDimsCount,
            checks,
            formatRatio
        };
    }

    // ------------------------------------------------------------------------
    // 5. INITIALIZE & HOOK SEAMLESSLY INTO BANKING ANALYZER & EXAM_PRESETS
    // ------------------------------------------------------------------------
    function initUpscIntegration() {
        // 1. Inject Expanded 18-Set UPSC Questions into global EXAM_PRESETS
        if (typeof EXAM_PRESETS !== 'undefined') {
            Object.keys(UPSC_EXPANDED_PRESETS).forEach(examKey => {
                if (EXAM_PRESETS[examKey] && Array.isArray(EXAM_PRESETS[examKey].sections)) {
                    UPSC_EXPANDED_PRESETS[examKey].forEach((pairsArray, secIdx) => {
                        if (EXAM_PRESETS[examKey].sections[secIdx]) {
                            EXAM_PRESETS[examKey].sections[secIdx].questionPairs = pairsArray;
                        }
                    });
                }
            });
        }

        // 2. Register all 18 UPSC Question Sets into BankingAnalyzer.QUESTION_KNOWLEDGE_BASE
        if (window.BankingAnalyzer && window.BankingAnalyzer.QUESTION_KNOWLEDGE_BASE) {
            Object.assign(window.BankingAnalyzer.QUESTION_KNOWLEDGE_BASE, UPSC_QUESTION_KNOWLEDGE_BASE);
        }

        // 3. Wrap BankingAnalyzer.evaluateBankingSubmission for UPSC Hybrid AI + 5-Pillar Evaluation
        if (window.BankingAnalyzer && !window.BankingAnalyzer._upscHybridHooked) {
            const origEvaluate = window.BankingAnalyzer.evaluateBankingSubmission;

            window.BankingAnalyzer.evaluateBankingSubmission = async function (params) {
                const { examKey, preset, sectionsState } = params;
                const baseReport = await origEvaluate.call(window.BankingAnalyzer, params);

                if (!preset || preset.category !== 'upsc') {
                    return baseReport;
                }

                // Call Unhackable Cloud Gemini UPSC Endpoint (/api/upsc-evaluate)
                let cloudUpsc = null;
                let engineMode = 'OptiFile UPSC QCA 5-Pillar + 5-Lakh Word Grammar & Lexicon Engine (v5.0)';

                if (window.location.protocol === 'http:' || window.location.protocol === 'https:') {
                    try {
                        const resp = await fetch('/api/upsc-evaluate', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                examKey,
                                examName: preset.name,
                                sections: sectionsState.map(s => {
                                    const pair = s.questionPairs?.[s.pairIndex || 0] || {};
                                    return {
                                        secNo: s.secNo,
                                        title: s.title,
                                        prompt: (pair.a || '') + ' OR ' + (pair.b || ''),
                                        minWords: s.minWords || 125,
                                        wordLimit: s.wordLimit || 250,
                                        marks: s.marks || 15,
                                        userResponse: s.userResponse || ''
                                    };
                                })
                            })
                        });
                        if (resp.ok) {
                            const json = await resp.json();
                            if (json && json.success && json.analysis) {
                                cloudUpsc = json.analysis;
                                engineMode = 'OptiFile Cloud Gemini AI + UPSC Dholpur House QCA Examiner';
                            }
                        }
                    } catch (e) {
                        // Continues with Local 5-Pillar + LanguageTool Hybrid Engine
                    }
                }

                // Merge Cloud AI Grammar Mistakes & Vocabulary Upgrades
                if (cloudUpsc && Array.isArray(cloudUpsc.grammarMistakes)) {
                    cloudUpsc.grammarMistakes.forEach(cm => {
                        const exists = baseReport.mistakes.some(
                            m => m.wrong.toLowerCase().trim() === String(cm.wrong || '').toLowerCase().trim()
                        );
                        if (!exists && cm.wrong && cm.correct) {
                            baseReport.mistakes.push({
                                sectionNo: cm.sectionNo || 1,
                                cat: cm.category || 'UPSC QCA Grammar & Register Audit',
                                wrong: cm.wrong,
                                right: cm.correct,
                                why: cm.why,
                                source: 'Gemini UPSC AI Examiner'
                            });
                        }
                    });
                }

                if (cloudUpsc && Array.isArray(cloudUpsc.vocabularyUpgrades)) {
                    cloudUpsc.vocabularyUpgrades.forEach(vu => {
                        if (vu.weakWord && !baseReport.vocabUpgrades.some(v => v.weakWord.toLowerCase() === vu.weakWord.toLowerCase())) {
                            baseReport.vocabUpgrades.push({
                                weakWord: vu.weakWord,
                                premiumOptions: vu.premiumOptions,
                                contextTip: vu.contextTip
                            });
                        }
                    });
                }

                let upscTotalEarned = 0;

                baseReport.sectionAudits = sectionsState.map((sec, idx) => {
                    const prevAudit = baseReport.sectionAudits[idx] || {};
                    const text = (sec.userResponse || '').trim();
                    const upscAudit = auditUpscSectionStructure(sec, text, examKey);
                    const rel = prevAudit.relevance || { relevancePct: 0, isOffTopic: true };
                    const langCheck = prevAudit.langCheck || { isMostlyHinglish: false, hinglishWords: [] };

                    if ((sec.title || '').toLowerCase().includes('report') && /\b(i\s+think|in\s+my\s+opinion|i\s+believe|i\s+feel)\b/i.test(text)) {
                        const match1p = text.match(/\b(i\s+think|in\s+my\s+opinion|i\s+believe|i\s+feel)\b/i)[0];
                        const already = baseReport.mistakes.some(m => m.sectionNo === sec.secNo && m.cat.includes('CAPF Report Tone'));
                        if (!already) {
                            baseReport.mistakes.push({
                                sectionNo: sec.secNo,
                                cat: '🚨 CAPF Report Tone Violation (1st-Person Opinion)',
                                wrong: match1p,
                                right: 'It is observed that / Field assessments indicate that',
                                why: 'Official Reports in UPSC CAPF Paper-II must be written strictly in 3rd-person objective register.',
                                source: 'UPSC QCA Format Gate'
                            });
                        }
                    }

                    if (!text) {
                        return { ...prevAudit, ...upscAudit, earnedMarks: '0.0', statusBanner: '❌ Question Not Attempted (0 Marks)' };
                    }

                    const secMistakesCount = baseReport.mistakes.filter(m => m.sectionNo === sec.secNo).length;
                    const effectiveMinWords = examKey === 'upsc-essay' ? 220 : Math.max(50, upscAudit.minWords);
                    const lengthFactor = Math.min(1.0, upscAudit.wordCount / effectiveMinWords);
                    const dimBonusRatio = Math.min(1.0, upscAudit.coveredDimsCount / 4);

                    let secEarned = 0;
                    let statusBanner = '';

                    if (langCheck.isMostlyHinglish) {
                        secEarned = 0.0;
                        statusBanner = '🚨 ZERO SCORE: Written in Hinglish / Non-English instead of Formal English.';
                    } else if (rel.isOffTopic) {
                        const minimalStructureCredit = upscAudit.formatRatio * (sec.marks * 0.12) * lengthFactor;
                        secEarned = Math.max(0.0, minimalStructureCredit - (secMistakesCount * 0.5));
                        statusBanner = `🚨 OFF-TOPIC / IRRELEVANT ANSWER (${rel.relevancePct}% Prompt Match) — Content Marks: 0 / ${sec.marks}`;
                    } else {
                        const contentMarks = (sec.marks * 0.40) * (rel.relevancePct / 100) * lengthFactor;
                        const dimensionMarks = (sec.marks * 0.25) * dimBonusRatio * lengthFactor;
                        const structureMarks = (sec.marks * 0.20) * upscAudit.formatRatio;
                        const fluencyMarks = (sec.marks * 0.15) * lengthFactor;
                        const grammarPenalty = secMistakesCount * (sec.marks * 0.04);

                        secEarned = Math.max(0.5, contentMarks + dimensionMarks + structureMarks + fluencyMarks - grammarPenalty);
                        statusBanner = `✅ On-Topic UPSC Response (${rel.relevancePct}% Prompt Match • ${upscAudit.coveredDimsCount}/5 PESTLE Pillars Integrated)`;
                    }

                    secEarned = Math.min(sec.marks, Math.round(secEarned * 2) / 2);
                    upscTotalEarned += secEarned;

                    return { ...prevAudit, ...upscAudit, earnedMarks: secEarned.toFixed(1), statusBanner };
                });

                const combinedText = sectionsState.map(s => s.userResponse || '').join('\n\n');
                UPSC_VOCAB_UPGRADES.forEach(u => {
                    u.regex.lastIndex = 0;
                    const m = combinedText.match(u.regex);
                    if (m && !baseReport.vocabUpgrades.some(v => v.weakWord.toLowerCase() === m[0].toLowerCase())) {
                        baseReport.vocabUpgrades.push({ weakWord: m[0], premiumOptions: u.strong, contextTip: u.context });
                    }
                });

                baseReport.finalScore = Math.min(preset.totalMarks, upscTotalEarned).toFixed(1);
                baseReport.powerWords = UPSC_POWER_LEXICON[examKey] || UPSC_POWER_LEXICON['upsc-gs'];
                baseReport.engineMode = engineMode;

                const anyHinglish = baseReport.sectionAudits.some(s => s.langCheck && s.langCheck.hinglishWords && s.langCheck.hinglishWords.length > 0);
                const anyOffTopic = baseReport.sectionAudits.some(s => s.relevance && s.relevance.isOffTopic && s.wordCount > 0);

                if (!anyHinglish && !anyOffTopic) {
                    baseReport.overallFeedback = `Evaluated against official UPSC Mains QCA rubrics (Directive Word Compliance + 5-Pillar Constitutional/PESTLE Multi-Dimensionality + 5-Lakh Word English Grammar/Spelling Dictionary). Compare your answer with the UPSC Topper Model Answer and Key-Point Checklist below.`;
                }

                if (cloudUpsc && Array.isArray(cloudUpsc.valueAdditionPoints) && cloudUpsc.valueAdditionPoints.length > 0) {
                    const vaHtml = cloudUpsc.valueAdditionPoints.map(v => `
                        <div class="p-2 rounded-xl bg-white border border-emerald-200 text-xs">
                            <span class="font-extrabold text-emerald-800">[${v.pillar}] ${v.citationOrFact}:</span>
                            <span class="text-zinc-700"> ${v.howToUse}</span>
                        </div>
                    `).join('');
                    baseReport.overallFeedback = `
                        <div>${cloudUpsc.examinerVerdict || baseReport.overallFeedback}</div>
                        <div class="mt-2 pt-2 border-t border-emerald-200 space-y-1.5">
                            <div class="font-extrabold text-[11px] uppercase tracking-wider text-emerald-900">🏛️ AI Value-Addition Citations (Articles, SC Judgments &amp; Committees to Boost +3 Marks):</div>
                            ${vaHtml}
                        </div>
                    `;
                }

                return baseReport;
            };

            window.BankingAnalyzer._upscHybridHooked = true;
        }
    }

    initUpscIntegration();
    window.addEventListener('DOMContentLoaded', initUpscIntegration);

    window.UpscAnalyzer = {
        UPSC_EXPANDED_PRESETS,
        UPSC_QUESTION_KNOWLEDGE_BASE,
        UPSC_VOCAB_UPGRADES,
        UPSC_POWER_LEXICON,
        analyzeUpsc5Pillars
    };

})(window);
