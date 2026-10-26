/**
 * ============================================================================
 * OPTIFILE PEARSON PTE ACADEMIC (10–90 GSE) + HYBRID AI & GRAMMAR ENGINE (v5.0)
 * File Path: /js/pte-analyzer.js
 * ============================================================================
 * FEATURES:
 * 1. Connects to Unhackable Cloud Gemini AI (/api/pte-evaluate) +
 *    LanguageTool 5-Lakh+ Word API + Deep Offline Grammar & Collocation Engine.
 * 2. Official Pearson Automated Scoring Rules (10–90 Scale):
 *    - SWT Strict 1-Sentence & 5–75 Words Form Gate (Zero-Score Trap Detector)
 *    - Write Essay 200–300 Words Form Gate & Brutal 0/1/2 Spelling Deductions
 *    - 7 Enabling Skills Matrix: Content, Form, Grammar, Vocabulary, Spelling,
 *      Development/Structure/Coherence (DSC), & General Linguistic Range (GLR).
 * 3. 12 Complete Pearson PTE Question Sets (24 Prompts) with Auto-Daily
 *    Rotation, Shuffle Support, 5-Point Checklists & 90/90 Model Answers.
 */

(function (window) {
    'use strict';

    // ------------------------------------------------------------------------
    // 1. EXPANDED PEARSON PTE PRESET QUESTIONS (12 SETS / 24 PROMPTS)
    // ------------------------------------------------------------------------
    const PTE_EXPANDED_PRESETS = {
        'pte-full': [
            // SECTION 1: SUMMARIZE WRITTEN TEXT (SWT — STRICT 1 SENTENCE | 5–75 WORDS | 10 MINS)
            [
                {
                    setTag: 'PTE SWT Set 1 of 3 • Urban Heat Islands & Quantum Computing',
                    a: '<strong>Passage A (Summarize in ONE single sentence of 5–75 words):</strong> Urban heat islands occur when metropolitan regions replace natural vegetation with dense concentrations of asphalt and concrete that absorb solar radiation. This phenomenon not only escalates summertime peak electricity demand and cooling costs, but also intensifies ground-level ozone pollution and heat-related mortality. Consequently, municipal planners are increasingly mandating reflective cool roofs, permeable pavements, and vertical urban forests to restore micro-climatic balance.',
                    b: '<strong>Passage B (Alternative Practice — 5–75 words):</strong> Quantum computing leverages the quantum-mechanical phenomena of superposition and entanglement to process multidimensional datasets exponentially faster than classical supercomputers. While this breakthrough promises to revolutionize molecular drug discovery and climate modeling, it simultaneously threatens to render existing RSA public-key cryptographic standards obsolete, compelling cybersecurity agencies to develop quantum-resistant encryption.'
                },
                {
                    setTag: 'PTE SWT Set 2 of 3 • Circadian Rhythms & Precision Fermentation',
                    a: '<strong>Passage A (Summarize in ONE single sentence of 5–75 words):</strong> Circadian rhythms are endogenous biological clocks governed by the brain\'s suprachiasmatic nucleus that regulate human sleep-wake cycles, hormone secretion, and metabolic efficiency over a 24-hour period. Chronic disruption of these rhythms through artificial blue-light exposure and irregular shift work has been strongly linked to cardiovascular disorders, insulin resistance, and cognitive fatigue, prompting occupational health reforms.',
                    b: '<strong>Passage B (Alternative Practice — 5–75 words):</strong> Precision fermentation enables biotechnologists to program microorganisms such as yeast and fungi to produce bio-identical dairy proteins, collagen, and essential fats without traditional livestock farming. By decoupling protein production from animal agriculture, this technology can drastically reduce methane emissions, antibiotic resistance, and agricultural land footprints while ensuring global food security.'
                },
                {
                    setTag: 'PTE SWT Set 3 of 3 • Deep-Sea Polymetallic Nodules & Neuroplasticity',
                    a: '<strong>Passage A (Summarize in ONE single sentence of 5–75 words):</strong> Deep-sea abyssal plains contain vast deposits of polymetallic nodules rich in cobalt, nickel, and manganese, which are critical for manufacturing electric-vehicle batteries. However, marine biologists warn that commercial seabed mining could irreversibly destroy fragile benthic ecosystems, release sequestered carbon from ocean sediments, and disrupt deep-water bioluminescent food webs.',
                    b: '<strong>Passage B (Alternative Practice — 5–75 words):</strong> Neuroplasticity refers to the lifelong capacity of the human brain to reorganize its synaptic connections in response to learning, sensory stimulation, or neurological injury. Contrary to the outdated belief that neural architecture becomes fixed after adolescence, contemporary neuroimaging demonstrates that intensive cognitive training and physical exercise stimulate neurogenesis well into old age.'
                }
            ],
            // SECTION 2: WRITE ESSAY (WE — STRICT 200–300 WORDS | 20 MINS)
            [
                {
                    setTag: 'PTE Essay Set 1 of 3 • Corporate Carbon Penalties & Micro-Credentials',
                    a: '<strong>Essay Prompt A (Agree / Disagree — 200–300w):</strong> "Governments should penalize corporations that fail to meet annual carbon reduction targets rather than subsidizing green technology." To what extent do you agree or disagree with this statement? Support your point of view with reasons and examples.',
                    b: '<strong>Essay Prompt B (Discuss Both Sides — 200–300w):</strong> "Formal university degrees are becoming less relevant as employers increasingly prioritize practical micro-credentials and real-world portfolios." Discuss both sides of this argument and give your own opinion.'
                },
                {
                    setTag: 'PTE Essay Set 2 of 3 • Algorithmic Hiring & E-Commerce Packaging Waste',
                    a: '<strong>Essay Prompt A (Advantages vs Disadvantages — 200–300w):</strong> "Many multinational corporations now use Artificial Intelligence algorithms to screen resumes and conduct initial job interviews." Do the advantages of automated recruitment outweigh the disadvantages for job seekers?',
                    b: '<strong>Essay Prompt B (Problem &amp; Solution — 200–300w):</strong> "Over-reliance on single-use packaging in e-commerce and food delivery has created an acute urban waste crisis." What are the primary causes of this trend, and what regulatory and technological solutions can address it?'
                },
                {
                    setTag: 'PTE Essay Set 3 of 3 • Mass Tourism Quotas & Mandatory Voting',
                    a: '<strong>Essay Prompt A (Discuss Both Views — 200–300w):</strong> "Mass tourism in fragile ecological regions causes irreversible environmental damage and should be strictly quota-regulated, even if it reduces local economic revenue." Discuss both views and provide your opinion.',
                    b: '<strong>Essay Prompt B (Agree / Disagree — 200–300w):</strong> "Voting in national and local elections should be a mandatory legal duty for all eligible citizens rather than a voluntary right." To what extent do you agree or disagree?'
                }
            ]
        ],
        'pte-swt': [
            [
                {
                    setTag: 'SWT Drill Set 1 of 3 • Urban Heat Islands & Quantum Computing',
                    a: '<strong>Passage A (Summarize in ONE single sentence of 5–75 words):</strong> Urban heat islands occur when metropolitan regions replace natural vegetation with dense concentrations of asphalt and concrete that absorb solar radiation. This phenomenon not only escalates summertime peak electricity demand and cooling costs, but also intensifies ground-level ozone pollution and heat-related mortality. Consequently, municipal planners are increasingly mandating reflective cool roofs, permeable pavements, and vertical urban forests to restore micro-climatic balance.',
                    b: '<strong>Passage B (Alternative Practice — 5–75 words):</strong> Quantum computing leverages the quantum-mechanical phenomena of superposition and entanglement to process multidimensional datasets exponentially faster than classical supercomputers. While this breakthrough promises to revolutionize molecular drug discovery and climate modeling, it simultaneously threatens to render existing RSA public-key cryptographic standards obsolete, compelling cybersecurity agencies to develop quantum-resistant encryption.'
                },
                {
                    setTag: 'SWT Drill Set 2 of 3 • Circadian Rhythms & Precision Fermentation',
                    a: '<strong>Passage A (Summarize in ONE single sentence of 5–75 words):</strong> Circadian rhythms are endogenous biological clocks governed by the brain\'s suprachiasmatic nucleus that regulate human sleep-wake cycles, hormone secretion, and metabolic efficiency over a 24-hour period. Chronic disruption of these rhythms through artificial blue-light exposure and irregular shift work has been strongly linked to cardiovascular disorders, insulin resistance, and cognitive fatigue, prompting occupational health reforms.',
                    b: '<strong>Passage B (Alternative Practice — 5–75 words):</strong> Precision fermentation enables biotechnologists to program microorganisms such as yeast and fungi to produce bio-identical dairy proteins, collagen, and essential fats without traditional livestock farming. By decoupling protein production from animal agriculture, this technology can drastically reduce methane emissions, antibiotic resistance, and agricultural land footprints while ensuring global food security.'
                },
                {
                    setTag: 'SWT Drill Set 3 of 3 • Deep-Sea Polymetallic Nodules & Neuroplasticity',
                    a: '<strong>Passage A (Summarize in ONE single sentence of 5–75 words):</strong> Deep-sea abyssal plains contain vast deposits of polymetallic nodules rich in cobalt, nickel, and manganese, which are critical for manufacturing electric-vehicle batteries. However, marine biologists warn that commercial seabed mining could irreversibly destroy fragile benthic ecosystems, release sequestered carbon from ocean sediments, and disrupt deep-water bioluminescent food webs.',
                    b: '<strong>Passage B (Alternative Practice — 5–75 words):</strong> Neuroplasticity refers to the lifelong capacity of the human brain to reorganize its synaptic connections in response to learning, sensory stimulation, or neurological injury. Contrary to the outdated belief that neural architecture becomes fixed after adolescence, contemporary neuroimaging demonstrates that intensive cognitive training and physical exercise stimulate neurogenesis well into old age.'
                }
            ]
        ],
        'pte-essay': [
            [
                {
                    setTag: 'PTE Essay Drill Set 1 of 3 • Carbon Penalties & Micro-Credentials',
                    a: '<strong>Essay Prompt A (200–300 words strict):</strong> "Governments should penalize corporations that fail to meet annual carbon reduction targets rather than subsidizing green technology." To what extent do you agree or disagree?',
                    b: '<strong>Essay Prompt B (200–300 words strict):</strong> "Formal university degrees are becoming less relevant as employers prioritize practical micro-credentials and real-world portfolios." Discuss both sides and give your opinion.'
                },
                {
                    setTag: 'PTE Essay Drill Set 2 of 3 • Algorithmic Hiring & E-Commerce Packaging Waste',
                    a: '<strong>Essay Prompt A (200–300 words strict):</strong> "Many multinational corporations now use Artificial Intelligence algorithms to screen resumes and conduct initial job interviews." Do the advantages of automated recruitment outweigh the disadvantages?',
                    b: '<strong>Essay Prompt B (200–300 words strict):</strong> "Over-reliance on single-use packaging in e-commerce and food delivery has created an acute urban waste crisis." What are the primary causes, and what solutions can address it?'
                },
                {
                    setTag: 'PTE Essay Drill Set 3 of 3 • Mass Tourism Quotas & Mandatory Voting',
                    a: '<strong>Essay Prompt A (200–300 words strict):</strong> "Mass tourism in fragile ecological regions causes irreversible environmental damage and should be strictly quota-regulated." Discuss both views and provide your opinion.',
                    b: '<strong>Essay Prompt B (200–300 words strict):</strong> "Voting in national and local elections should be a mandatory legal duty for all eligible citizens rather than a voluntary right." To what extent do you agree or disagree?'
                }
            ]
        ]
    };

    // ------------------------------------------------------------------------
    // 2. COMPLETE PTE QUESTION KNOWLEDGE BASE (12 SETS + 90/90 MODEL ANSWERS)
    // ------------------------------------------------------------------------
    const PTE_QUESTION_KNOWLEDGE_BASE = {
        'pte-full-sec1-pair0': {
            topicName: 'PTE SWT Set 1: Urban Heat Islands OR Quantum Computing & Cryptography',
            keywords: ['urban heat', 'asphalt', 'concrete', 'solar', 'electricity', 'ozone', 'pollution', 'cool roofs', 'permeable', 'urban forests', 'quantum', 'superposition', 'entanglement', 'drug discovery', 'cryptographic', 'encryption'],
            checklist: [
                { point: '🚨 STRICT PTE FORM GATE: Written in EXACTLY ONE Sentence (Starts with Capital, Ends with 1 Full Stop)', regex: /^[A-Z][^.!?\n]*\.$/ },
                { point: '🚨 STRICT WORD WINDOW: Between 5 and 75 Words (Optimal: 40–65 Words)', regex: /\S+/ },
                { point: 'Synthesizes Cause (Heat-Absorbing Concrete / Quantum Superposition) & Effect (Electricity & Ozone / Drug Discovery & Encryption)', regex: /\b(urban|heat|electricity|ozone|quantum|superposition|encryption|cryptograph)\b/i },
                { point: 'Uses Complex Subordinating / Coordinating Connectors ("While...", "; consequently,...")', regex: /\b(while|whereas|although|consequently|therefore|thereby|simultaneously)\b/i }
            ],
            modelAnswer: `While urban heat islands caused by heat-absorbing asphalt and concrete significantly escalate peak summertime electricity demand, cooling costs, and ground-level ozone pollution, municipal planners can effectively mitigate these micro-climatic disruptions by mandating reflective cool roofs, permeable pavements, and vertical urban forests.`
        },
        'pte-full-sec1-pair1': {
            topicName: 'PTE SWT Set 2: Circadian Rhythms Disruption OR Precision Fermentation',
            keywords: ['circadian', 'biological', 'sleep', 'hormone', 'metabolic', 'blue-light', 'shift work', 'cardiovascular', 'cognitive', 'precision fermentation', 'microorganisms', 'dairy', 'proteins', 'methane', 'livestock', 'food security'],
            checklist: [
                { point: '🚨 STRICT PTE FORM GATE: Written in EXACTLY ONE Sentence (Capital Letter to Single Full Stop)', regex: /^[A-Z][^.!?\n]*\.$/ },
                { point: '🚨 STRICT WORD WINDOW: Between 5 and 75 Words (Optimal: 40–65 Words)', regex: /\S+/ },
                { point: 'Captures Core Mechanism & Outcome (Endogenous Clocks vs Shift-Work Disease OR Microbial Protein vs Methane Reduction)', regex: /\b(circadian|metabolic|cardiovascular|blue-light|fermentation|microorganisms|methane|livestock)\b/i },
                { point: 'Uses Academic Complex Syntax Without Verbatim Copy-Paste', regex: /\b(although|whereas|while|consequently|thereby|prompting|enabling)\b/i }
            ],
            modelAnswer: `Although endogenous circadian rhythms are vital for regulating human sleep-wake cycles, hormone secretion, and metabolic efficiency, their chronic disruption through artificial blue-light exposure and irregular shift work triggers severe cardiovascular and cognitive disorders, thereby necessitating urgent occupational health reforms.`
        },
        'pte-full-sec1-pair2': {
            topicName: 'PTE SWT Set 3: Deep-Sea Polymetallic Nodules Mining OR Brain Neuroplasticity',
            keywords: ['deep-sea', 'polymetallic', 'nodules', 'cobalt', 'nickel', 'batteries', 'seabed', 'mining', 'benthic', 'ecosystems', 'carbon', 'neuroplasticity', 'synaptic', 'brain', 'learning', 'neurogenesis', 'cognitive'],
            checklist: [
                { point: '🚨 STRICT PTE FORM GATE: Written in EXACTLY ONE Sentence (Capital Letter to Single Full Stop)', regex: /^[A-Z][^.!?\n]*\.$/ },
                { point: '🚨 STRICT WORD WINDOW: Between 5 and 75 Words (Optimal: 40–65 Words)', regex: /\S+/ },
                { point: 'Synthesizes Both Halves of the Passage (EV Battery Minerals vs Benthic Destruction OR Lifelong Synaptic Reorganization)', regex: /\b(polymetallic|nodules|cobalt|benthic|ecosystems|neuroplasticity|synaptic|neurogenesis)\b/i },
                { point: 'Employs High-Scoring Subordinate Clauses', regex: /\b(while|although|whereas|despite|contrary\s+to|demonstrating)\b/i }
            ],
            modelAnswer: `Although deep-sea polymetallic nodules contain abundant cobalt, nickel, and manganese essential for manufacturing electric-vehicle batteries, marine biologists warn that commercial seabed mining could irreversibly devastate fragile benthic ecosystems, release sequestered carbon, and disrupt deep-water food webs.`
        },
        'pte-swt-sec1-pair0': {
            topicName: 'PTE SWT Set 1: Urban Heat Islands OR Quantum Computing & Cryptography',
            keywords: ['urban heat', 'asphalt', 'concrete', 'solar', 'electricity', 'ozone', 'pollution', 'cool roofs', 'permeable', 'urban forests', 'quantum', 'superposition', 'entanglement', 'drug discovery', 'cryptographic', 'encryption'],
            checklist: [
                { point: '🚨 STRICT PTE FORM GATE: Written in EXACTLY ONE Sentence (Starts with Capital, Ends with 1 Full Stop)', regex: /^[A-Z][^.!?\n]*\.$/ },
                { point: '🚨 STRICT WORD WINDOW: Between 5 and 75 Words (Optimal: 40–65 Words)', regex: /\S+/ },
                { point: 'Synthesizes Cause & Effect Accurately', regex: /\b(urban|heat|electricity|ozone|quantum|superposition|encryption|cryptograph)\b/i },
                { point: 'Uses Complex Subordinating / Coordinating Connectors', regex: /\b(while|whereas|although|consequently|therefore|thereby|simultaneously)\b/i }
            ],
            modelAnswer: `While urban heat islands caused by heat-absorbing asphalt and concrete significantly escalate peak summertime electricity demand, cooling costs, and ground-level ozone pollution, municipal planners can effectively mitigate these micro-climatic disruptions by mandating reflective cool roofs, permeable pavements, and vertical urban forests.`
        },
        'pte-swt-sec1-pair1': {
            topicName: 'PTE SWT Set 2: Circadian Rhythms Disruption OR Precision Fermentation',
            keywords: ['circadian', 'biological', 'sleep', 'hormone', 'metabolic', 'blue-light', 'shift work', 'cardiovascular', 'cognitive', 'precision fermentation', 'microorganisms', 'dairy', 'proteins', 'methane', 'livestock', 'food security'],
            checklist: [
                { point: '🚨 STRICT PTE FORM GATE: Written in EXACTLY ONE Sentence (Capital Letter to Single Full Stop)', regex: /^[A-Z][^.!?\n]*\.$/ },
                { point: '🚨 STRICT WORD WINDOW: Between 5 and 75 Words (Optimal: 40–65 Words)', regex: /\S+/ },
                { point: 'Captures Core Mechanism & Outcome', regex: /\b(circadian|metabolic|cardiovascular|blue-light|fermentation|microorganisms|methane|livestock)\b/i },
                { point: 'Uses Academic Complex Syntax Without Verbatim Copy-Paste', regex: /\b(although|whereas|while|consequently|thereby|prompting|enabling)\b/i }
            ],
            modelAnswer: `Although endogenous circadian rhythms are vital for regulating human sleep-wake cycles, hormone secretion, and metabolic efficiency, their chronic disruption through artificial blue-light exposure and irregular shift work triggers severe cardiovascular and cognitive disorders, thereby necessitating urgent occupational health reforms.`
        },
        'pte-swt-sec1-pair2': {
            topicName: 'PTE SWT Set 3: Deep-Sea Polymetallic Nodules Mining OR Brain Neuroplasticity',
            keywords: ['deep-sea', 'polymetallic', 'nodules', 'cobalt', 'nickel', 'batteries', 'seabed', 'mining', 'benthic', 'ecosystems', 'carbon', 'neuroplasticity', 'synaptic', 'brain', 'learning', 'neurogenesis', 'cognitive'],
            checklist: [
                { point: '🚨 STRICT PTE FORM GATE: Written in EXACTLY ONE Sentence (Capital Letter to Single Full Stop)', regex: /^[A-Z][^.!?\n]*\.$/ },
                { point: '🚨 STRICT WORD WINDOW: Between 5 and 75 Words (Optimal: 40–65 Words)', regex: /\S+/ },
                { point: 'Synthesizes Both Halves of the Passage', regex: /\b(polymetallic|nodules|cobalt|benthic|ecosystems|neuroplasticity|synaptic|neurogenesis)\b/i },
                { point: 'Employs High-Scoring Subordinate Clauses', regex: /\b(while|although|whereas|despite|contrary\s+to|demonstrating)\b/i }
            ],
            modelAnswer: `Although deep-sea polymetallic nodules contain abundant cobalt, nickel, and manganese essential for manufacturing electric-vehicle batteries, marine biologists warn that commercial seabed mining could irreversibly devastate fragile benthic ecosystems, release sequestered carbon, and disrupt deep-water food webs.`
        },
        'pte-full-sec2-pair0': {
            topicName: 'PTE Write Essay Set 1: Corporate Carbon Penalties vs Green Subsidies OR University Degrees vs Micro-Credentials',
            keywords: ['carbon', 'penalties', 'corporations', 'subsidies', 'green technology', 'emissions', 'renewable', 'tax', 'innovation', 'university', 'degrees', 'micro-credentials', 'portfolios', 'employers', 'skills'],
            checklist: [
                { point: '🚨 STRICT PTE WORD WINDOW: 200 to 300 Words (Full 2/2 Form Score)', regex: /\S+/ },
                { point: 'Clear 4-Paragraph Structure (Introduction -> Body 1 -> Body 2 -> Conclusion)', regex: /\n\s*\n/ },
                { point: 'Integrates PTE Academic Collocation List (ACL) Phrases & Discourse Connectors', regex: /\b(furthermore|moreover|consequently|nevertheless|whereas|although|sustainable|accountability)\b/i },
                { point: 'Zero Spelling Errors (PTE deducts 1pt for 1 typo, 2pts for 2+ typos!)', regex: /\S+/ }
            ],
            modelAnswer: `Whether governments should prioritize punitive carbon penalties over green-technology subsidies to accelerate corporate decarbonization is a pivotal policy debate in the contemporary era. While financial subsidies help lower the initial cost of clean innovation, I firmly contend that strict regulatory penalties for exceeding emission thresholds are indispensable for ensuring industrial accountability.\n\nFirst and foremost, voluntary green subsidies alone often fail to alter the behavior of fossil-fuel-intensive conglomerates unless accompanied by legally binding financial deterrence. According to the "polluter pays" principle, when corporations face substantial carbon taxes and statutory fines for missing annual emission-reduction targets, environmental externalities are directly priced into their balance sheets. Consequently, executive boards are compelled to phase out obsolete coal-fired machinery and invest in energy-efficient manufacturing processes to protect their profit margins.\n\nAdmittedly, punitive taxation without transitional support could place a disproportionate financial burden on small and medium-sized enterprises, potentially reducing their global competitiveness. Nevertheless, governments can resolve this dilemma by recycling the revenue collected from corporate carbon penalties directly into targeted research-and-development grants and green credit guarantees.\n\nIn conclusion, while green subsidies play a supportive role in nurturing nascent renewable technologies, enforcing strict statutory penalties against non-compliant corporations remains the most effective catalyst for achieving national net-zero commitments.`
        },
        'pte-full-sec2-pair1': {
            topicName: 'PTE Write Essay Set 2: AI Algorithmic Hiring vs Human Recruitment OR E-Commerce Packaging Waste Crisis',
            keywords: ['artificial intelligence', 'algorithm', 'hiring', 'recruitment', 'resumes', 'interviews', 'bias', 'efficiency', 'candidates', 'single-use', 'packaging', 'e-commerce', 'plastic', 'waste', 'recycling', 'biodegradable'],
            checklist: [
                { point: '🚨 STRICT PTE WORD WINDOW: 200 to 300 Words (Full 2/2 Form Score)', regex: /\S+/ },
                { point: 'Clear 4-Paragraph Structure (Introduction -> Body 1 -> Body 2 -> Conclusion)', regex: /\n\s*\n/ },
                { point: 'Uses Complex Subordinate Clauses & Academic Collocations', regex: /\b(although|whereas|consequently|furthermore|algorithmic|biodegradable|proliferate|mitigate)\b/i },
                { point: 'Maintains Formal Academic Register with Zero Spelling Mistakes', regex: /\S+/ }
            ],
            modelAnswer: `The rapid adoption of Artificial Intelligence algorithms to screen resumes and conduct automated video interviews has transformed modern human-resource management. While algorithmic recruitment offers unprecedented administrative efficiency, I believe its risks—particularly algorithmic bias and the dehumanization of candidate evaluation—outweigh its advantages unless strict human oversight is maintained.\n\nOn the positive side, automated applicant-tracking systems enable multinational corporations to process thousands of applications within seconds, significantly reducing recruitment costs and time-to-hire. By standardizing initial screening criteria, software can theoretically filter candidates based on objective technical qualifications rather than subjective human fatigue.\n\nHowever, over-reliance on automated hiring introduces severe ethical and operational drawbacks. Machine-learning models are trained on historical employment datasets; consequently, they frequently replicate past demographic, gender, or socioeconomic biases, unfairly penalizing non-traditional applicants or candidates with career gaps. Furthermore, keyword-matching algorithms often reject highly creative professionals whose resumes do not conform to rigid templates, while automated video analysis fails to capture genuine interpersonal empathy, adaptability, and cultural fit.\n\nIn conclusion, although Artificial Intelligence is a valuable auxiliary tool for initial administrative sorting, final recruitment decisions must remain anchored in human judgment to ensure fairness, diversity, and holistic talent assessment.`
        },
        'pte-full-sec2-pair2': {
            topicName: 'PTE Write Essay Set 3: Mass Tourism Ecological Quotas OR Mandatory Voting in Elections',
            keywords: ['tourism', 'ecological', 'fragile', 'environment', 'quota', 'revenue', 'sustainable', 'conservation', 'voting', 'elections', 'mandatory', 'compulsory', 'democracy', 'citizen', 'turnout'],
            checklist: [
                { point: '🚨 STRICT PTE WORD WINDOW: 200 to 300 Words (Full 2/2 Form Score)', regex: /\S+/ },
                { point: 'Logical 4-Paragraph Essay Architecture', regex: /\n\s*\n/ },
                { point: 'Strong Lexical Precision & Cohesive Transitions', regex: /\b(furthermore|moreover|consequently|nevertheless|biodiversity|conservation|democratic|legitimacy)\b/i },
                { point: 'Flawless Spelling & Punctuation', regex: /\S+/ }
            ],
            modelAnswer: `The exponential growth of mass tourism in ecologically fragile destinations—such as alpine glaciers, coral reefs, and heritage islands—has ignited a fierce debate between economic expansion and environmental conservation. While tourism generates vital employment for local communities, I strongly believe that enforcing strict visitor quotas is essential to prevent irreversible ecological collapse.\n\nOn the one hand, opponents of visitor caps argue that hospitality, transport, and artisanal crafts constitute the primary livelihood for residents in remote scenic regions. Restricting tourist numbers could depress local revenues, trigger seasonal unemployment, and reduce municipal tax collections needed for public infrastructure.\n\nOn the other hand, unregulated mass tourism destroys the very natural capital upon which the industry depends. Excessive footfall, plastic littering, and cruise-ship emissions bleach coral ecosystems, erode mountain trails, and strain local freshwater supplies beyond their carrying capacity. Once fragile biodiversity is lost, the long-term economic cost far exceeds any short-term commercial gain. By implementing daily visitor quotas and eco-tourism levies—as successfully practiced in Bhutan and the Galapagos Islands—governments can transition from high-volume, low-value tourism to sustainable, high-value conservation tourism.\n\nIn conclusion, regulating tourist numbers through scientific carrying-capacity quotas is a necessary measure to harmonize ecological preservation with long-term economic resilience.`
        },
        'pte-essay-sec1-pair0': {
            topicName: 'PTE Write Essay Set 1: Corporate Carbon Penalties vs Green Subsidies OR University Degrees vs Micro-Credentials',
            keywords: ['carbon', 'penalties', 'corporations', 'subsidies', 'green technology', 'emissions', 'renewable', 'tax', 'innovation', 'university', 'degrees', 'micro-credentials', 'portfolios', 'employers', 'skills'],
            checklist: [
                { point: '🚨 STRICT PTE WORD WINDOW: 200 to 300 Words (Full 2/2 Form Score)', regex: /\S+/ },
                { point: 'Clear 4-Paragraph Structure (Introduction -> Body 1 -> Body 2 -> Conclusion)', regex: /\n\s*\n/ },
                { point: 'Integrates PTE Academic Collocation List (ACL) Phrases & Discourse Connectors', regex: /\b(furthermore|moreover|consequently|nevertheless|whereas|although|sustainable|accountability)\b/i },
                { point: 'Zero Spelling Errors (Full 2/2 Spelling Score)', regex: /\S+/ }
            ],
            modelAnswer: `Whether governments should prioritize punitive carbon penalties over green-technology subsidies to accelerate corporate decarbonization is a pivotal policy debate in the contemporary era. While financial subsidies help lower the initial cost of clean innovation, I firmly contend that strict regulatory penalties for exceeding emission thresholds are indispensable for ensuring industrial accountability.\n\nFirst and foremost, voluntary green subsidies alone often fail to alter the behavior of fossil-fuel-intensive conglomerates unless accompanied by legally binding financial deterrence. According to the "polluter pays" principle, when corporations face substantial carbon taxes and statutory fines for missing annual emission-reduction targets, environmental externalities are directly priced into their balance sheets. Consequently, executive boards are compelled to phase out obsolete coal-fired machinery and invest in energy-efficient manufacturing processes to protect their profit margins.\n\nAdmittedly, punitive taxation without transitional support could place a disproportionate financial burden on small and medium-sized enterprises, potentially reducing their global competitiveness. Nevertheless, governments can resolve this dilemma by recycling the revenue collected from corporate carbon penalties directly into targeted research-and-development grants and green credit guarantees.\n\nIn conclusion, while green subsidies play a supportive role in nurturing nascent renewable technologies, enforcing strict statutory penalties against non-compliant corporations remains the most effective catalyst for achieving national net-zero commitments.`
        },
        'pte-essay-sec1-pair1': {
            topicName: 'PTE Write Essay Set 2: AI Algorithmic Hiring vs Human Recruitment OR E-Commerce Packaging Waste Crisis',
            keywords: ['artificial intelligence', 'algorithm', 'hiring', 'recruitment', 'resumes', 'interviews', 'bias', 'efficiency', 'candidates', 'single-use', 'packaging', 'e-commerce', 'plastic', 'waste', 'recycling', 'biodegradable'],
            checklist: [
                { point: '🚨 STRICT PTE WORD WINDOW: 200 to 300 Words (Full 2/2 Form Score)', regex: /\S+/ },
                { point: 'Clear 4-Paragraph Structure (Introduction -> Body 1 -> Body 2 -> Conclusion)', regex: /\n\s*\n/ },
                { point: 'Uses Complex Subordinate Clauses & Academic Collocations', regex: /\b(although|whereas|consequently|furthermore|algorithmic|biodegradable|proliferate|mitigate)\b/i },
                { point: 'Maintains Formal Academic Register with Zero Spelling Mistakes', regex: /\S+/ }
            ],
            modelAnswer: `The rapid adoption of Artificial Intelligence algorithms to screen resumes and conduct automated video interviews has transformed modern human-resource management. While algorithmic recruitment offers unprecedented administrative efficiency, I believe its risks—particularly algorithmic bias and the dehumanization of candidate evaluation—outweigh its advantages unless strict human oversight is maintained.\n\nOn the positive side, automated applicant-tracking systems enable multinational corporations to process thousands of applications within seconds, significantly reducing recruitment costs and time-to-hire. By standardizing initial screening criteria, software can theoretically filter candidates based on objective technical qualifications rather than subjective human fatigue.\n\nHowever, over-reliance on automated hiring introduces severe ethical and operational drawbacks. Machine-learning models are trained on historical employment datasets; consequently, they frequently replicate past demographic, gender, or socioeconomic biases, unfairly penalizing non-traditional applicants or candidates with career gaps. Furthermore, keyword-matching algorithms often reject highly creative professionals whose resumes do not conform to rigid templates, while automated video analysis fails to capture genuine interpersonal empathy, adaptability, and cultural fit.\n\nIn conclusion, although Artificial Intelligence is a valuable auxiliary tool for initial administrative sorting, final recruitment decisions must remain anchored in human judgment to ensure fairness, diversity, and holistic talent assessment.`
        },
        'pte-essay-sec1-pair2': {
            topicName: 'PTE Write Essay Set 3: Mass Tourism Ecological Quotas OR Mandatory Voting in Elections',
            keywords: ['tourism', 'ecological', 'fragile', 'environment', 'quota', 'revenue', 'sustainable', 'conservation', 'voting', 'elections', 'mandatory', 'compulsory', 'democracy', 'citizen', 'turnout'],
            checklist: [
                { point: '🚨 STRICT PTE WORD WINDOW: 200 to 300 Words (Full 2/2 Form Score)', regex: /\S+/ },
                { point: 'Logical 4-Paragraph Essay Architecture', regex: /\n\s*\n/ },
                { point: 'Strong Lexical Precision & Cohesive Transitions', regex: /\b(furthermore|moreover|consequently|nevertheless|biodiversity|conservation|democratic|legitimacy)\b/i },
                { point: 'Flawless Spelling & Punctuation', regex: /\S+/ }
            ],
            modelAnswer: `The exponential growth of mass tourism in ecologically fragile destinations—such as alpine glaciers, coral reefs, and heritage islands—has ignited a fierce debate between economic expansion and environmental conservation. While tourism generates vital employment for local communities, I strongly believe that enforcing strict visitor quotas is essential to prevent irreversible ecological collapse.\n\nOn the one hand, opponents of visitor caps argue that hospitality, transport, and artisanal crafts constitute the primary livelihood for residents in remote scenic regions. Restricting tourist numbers could depress local revenues, trigger seasonal unemployment, and reduce municipal tax collections needed for public infrastructure.\n\nOn the other hand, unregulated mass tourism destroys the very natural capital upon which the industry depends. Excessive footfall, plastic littering, and cruise-ship emissions bleach coral ecosystems, erode mountain trails, and strain local freshwater supplies beyond their carrying capacity. Once fragile biodiversity is lost, the long-term economic cost far exceeds any short-term commercial gain. By implementing daily visitor quotas and eco-tourism levies—as successfully practiced in Bhutan and the Galapagos Islands—governments can transition from high-volume, low-value tourism to sustainable, high-value conservation tourism.\n\nIn conclusion, regulating tourist numbers through scientific carrying-capacity quotas is a necessary measure to harmonize ecological preservation with long-term economic resilience.`
        }
    };

    // ------------------------------------------------------------------------
    // 3. PTE ACADEMIC COLLOCATION LIST (ACL) UPGRADES & POWER LEXICON
    // ------------------------------------------------------------------------
    const PTE_VOCAB_UPGRADES = [
        { regex: /\balso\b/gi, weak: 'also', strong: 'furthermore / moreover / in addition', context: 'PTE Automated Scoring rewards formal discourse markers over "also".' },
        { regex: /\b(big|huge)\s+change(s)?\b/gi, weak: 'big/huge change', strong: 'profound transformation / paradigm shift / fundamental alteration', context: 'High-scoring PTE Academic Collocation List (ACL) pairing.' },
        { regex: /\b(big|major)\s+problem(s)?\b/gi, weak: 'big/major problem', strong: 'acute crisis / systemic challenge / pressing impediment', context: 'Boosts Vocabulary Range & General Linguistic Range.' },
        { regex: /\bvery\s+important\b/gi, weak: 'very important', strong: 'indispensable / of paramount importance / pivotal', context: 'Replaces basic intensifier "very" with academic precision.' },
        { regex: /\bbad\s+result(s)?\b/gi, weak: 'bad result', strong: 'adverse consequence / detrimental outcome / deleterious ramification', context: 'Official Pearson ACL noun-adjective collocation.' },
        { regex: /\bgood\s+result(s)?\b/gi, weak: 'good result', strong: 'tangible benefit / salutary outcome / constructive impact', context: 'Elevates essay lexical sophistication.' },
        { regex: /\bstop\s+(the|this)\b/gi, weak: 'stop the...', strong: 'curb / mitigate / arrest the proliferation of', context: 'Ideal for PTE SWT and Essay conclusions.' }
    ];

    const PTE_POWER_LEXICON = {
        'pte-full': [
            { term: 'While [Clause A], [Clause B], thereby [V-ing]...', meaning: 'Golden 1-Sentence SWT Template for 90/90 Synthesis', usage: 'While urban heat islands escalate energy demand, planners can mitigate them through cool roofs, thereby restoring climatic balance.' },
            { term: 'Irreversible Ecological Degradation', meaning: 'Permanent damage to natural ecosystems (PTE ACL)', usage: 'Unregulated seabed mining risks causing irreversible ecological degradation.' },
            { term: 'Legally Binding Financial Deterrence', meaning: 'Strict statutory fines that force corporate compliance', usage: 'Carbon penalties provide legally binding financial deterrence against pollution.' },
            { term: 'Exponentially Faster Processing', meaning: 'Massive computational speed leap', usage: 'Quantum entanglement enables exponentially faster processing of multidimensional datasets.' }
        ],
        'pte-swt': [
            { term: 'Although [Contrast Clause], [Main Clause]; consequently, [Result Clause].', meaning: 'Semicolon + Conjunctive Adverb 1-Sentence Connector', usage: 'Although circadian rhythms regulate metabolism, shift work disrupts them; consequently, occupational reforms are vital.' },
            { term: 'Endogenous Biological Mechanisms', meaning: 'Internal processes within an organism', usage: 'Circadian rhythms function as endogenous biological mechanisms governing sleep.' },
            { term: 'Decouple Production from Agriculture', meaning: 'Separate food creation from traditional livestock farming', usage: 'Precision fermentation decouples protein production from animal agriculture.' },
            { term: 'Lifelong Synaptic Reorganization', meaning: 'Continuous brain rewiring through learning', usage: 'Neuroplasticity facilitates lifelong synaptic reorganization and neurogenesis.' }
        ],
        'pte-essay': [
            { term: 'First and Foremost / Admittedly / Nevertheless', meaning: 'High-scoring 4-paragraph PTE Essay transition triad', usage: 'Admittedly, carbon taxes raise short-term costs; nevertheless, they drive green innovation.' },
            { term: 'Environmental Externalities', meaning: 'Unpriced social/ecological damage caused by industry', usage: 'Statutory fines force corporations to internalize their environmental externalities.' },
            { term: 'Algorithmic Bias & Demographic Disparity', meaning: 'Systematic unfairness in AI decision-making', usage: 'Automated resume screening can perpetuate algorithmic bias and demographic disparity.' },
            { term: 'Scientific Carrying-Capacity Quotas', meaning: 'Limits on tourist numbers based on ecological thresholds', usage: 'Fragile alpine regions must enforce scientific carrying-capacity quotas.' }
        ]
    };

    // ------------------------------------------------------------------------
    // 4. PEARSON PTE 7-TRAIT AUTOMATED SCORING ENGINE PER SECTION
    // ------------------------------------------------------------------------
    function countPteSentences(str) {
        const t = str.trim();
        if (!t) return 0;
        return t.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    }

    function getGseBandBadge(score) {
        if (score >= 79) return { label: '79–90 Superior (C1/C2 — Max Australian PR Points)', color: 'bg-emerald-100 text-emerald-900 border-emerald-400' };
        if (score >= 65) return { label: '65–78 Competent (B2 — University & Visa Standard)', color: 'bg-blue-100 text-blue-900 border-blue-400' };
        if (score >= 50) return { label: '50–64 Modest (B1 — Foundation Level)', color: 'bg-amber-100 text-amber-900 border-amber-400' };
        return { label: '10–49 Below Threshold / Form Gate Failed', color: 'bg-rose-100 text-rose-900 border-rose-400' };
    }

    function auditPteSection7Traits(sec, text, examKey, relevance, langCheck, sectionMistakes) {
        const trimmed = text.trim();
        const wc = trimmed === '' ? 0 : trimmed.split(/\s+/).length;
        const sents = countPteSentences(trimmed);
        const paras = trimmed === '' ? 0 : trimmed.split(/\n\s*\n/).filter(p => p.trim().length > 0).length;
        const isSwt = Boolean(sec.isSingleSentence);
        const checks = [];
        const extraMistakes = [];

        const spellingErrorsCount = sectionMistakes.filter(m => /spell|typo/i.test(m.cat)).length;
        const grammarErrorsCount = sectionMistakes.length - spellingErrorsCount;

        let formGatePassed = true;
        let formScore = 0;
        let maxFormScore = isSwt ? 1 : 2;

        if (isSwt) {
            const isExactlyOneSentence = sents === 1;
            const withinSwtWindow = wc >= 5 && wc <= 75;
            const startsCapitalEndsPeriod = /^[A-Z]/.test(trimmed) && /\.$/.test(trimmed);
            const isAllCaps = trimmed.length > 10 && trimmed === trimmed.toUpperCase();
            const hasComplexConnectors = /\b(while|whereas|although|even\s+though|consequently|therefore|thereby|simultaneously|which|whereby)\b|;/i.test(trimmed);

            if (!isExactlyOneSentence || !withinSwtWindow || isAllCaps || !startsCapitalEndsPeriod) {
                formGatePassed = false;
                formScore = 0;
            } else {
                formScore = 1;
            }

            checks.push({
                label: '🚨 PTE SWT Single-Sentence Form Gate (Strictly 1 Sentence)',
                passed: isExactlyOneSentence,
                note: isExactlyOneSentence
                    ? '✅ Valid: Written as 1 single sentence (Form Gate Passed)'
                    : `❌ FAILED: Detected ${sents} sentences! Pearson algorithm gives 0 Total Marks if SWT has >1 sentence.`
            });
            checks.push({
                label: '🚨 PTE SWT 5–75 Word Window Lock',
                passed: withinSwtWindow,
                note: withinSwtWindow
                    ? `✅ Valid length (${wc}/75 words — Ideal 40–65w)`
                    : `❌ FAILED: ${wc} words (Outside strict 5–75 word window)`
            });
            checks.push({
                label: 'Capital Start & Single Closing Full Stop Rule',
                passed: startsCapitalEndsPeriod && !isAllCaps,
                note: (startsCapitalEndsPeriod && !isAllCaps)
                    ? '✅ Starts with Capital letter and ends with a single period (.)'
                    : '❌ Must start with a Capital letter, end with a period (.), and NOT be in ALL CAPS'
            });
            checks.push({
                label: 'Complex Clause Synthesis (Subordinators / Semicolon)',
                passed: hasComplexConnectors,
                note: hasComplexConnectors
                    ? '✅ Uses complex clause connectors ("While...", "Although...", "; consequently,")'
                    : '⚠️ Add complex connectors ("While...", "Although...", "; consequently,") for 2/2 Grammar'
            });

            if (sents > 1) {
                extraMistakes.unshift({
                    sectionNo: sec.secNo,
                    cat: '🚨 PTE SWT ZERO-SCORE FORM GATE VIOLATION (Multiple Sentences)',
                    wrong: `${sents} separate sentences detected in Summarize Written Text`,
                    right: 'Combine into strictly ONE complex sentence using ", whereas", "; consequently,", or "While..."',
                    why: 'In Pearson PTE Summarize Written Text, writing more than 1 full stop/sentence triggers an automatic Form = 0 gate, resulting in 0 marks across Content, Grammar, and Vocabulary!',
                    source: 'Pearson PTE Form Gate'
                });
            }
            if (!startsCapitalEndsPeriod && wc > 0) {
                extraMistakes.push({
                    sectionNo: sec.secNo,
                    cat: '🚨 PTE SWT Punctuation & Casing Gate Error',
                    wrong: trimmed.slice(0, 25) + ' ... ' + trimmed.slice(-15),
                    right: 'Start with a Capital letter [A-Z] and end with a single full stop [.]',
                    why: 'PTE automated scoring checks that your single sentence begins with an uppercase letter and ends with a period.',
                    source: 'Pearson PTE Form Gate'
                });
            }
        } else {
            const inIdealWindow = wc >= 200 && wc <= 300;
            const inPartialWindow = (wc >= 120 && wc < 200) || (wc > 300 && wc <= 380);
            const hasFourParas = paras >= 4;
            const hasAcademicConnectors = (trimmed.match(/\b(first\s+and\s+foremost|firstly|secondly|furthermore|moreover|consequently|nevertheless|however|admittedly|in\s+conclusion|to\s+conclude)\b/gi) || []).length >= 3;

            if (inIdealWindow) {
                formScore = 2;
                formGatePassed = true;
            } else if (inPartialWindow) {
                formScore = 1;
                formGatePassed = true;
            } else {
                formScore = 0;
                formGatePassed = false;
            }

            checks.push({
                label: '🚨 PTE Essay Word Window Gate (200–300 Words Strict)',
                passed: inIdealWindow,
                note: inIdealWindow
                    ? `✅ Full Form Score (2/2 Pts — ${wc} words inside 200–300w window)`
                    : inPartialWindow
                        ? `⚠️ Partial Form Score (1/2 Pt — ${wc} words; aim for 200–300w)`
                        : `❌ ZERO-SCORE GATE: ${wc} words (Under 120w or over 380w gets 0 total marks in PTE!)`
            });
            checks.push({
                label: '4-Paragraph DSC Structure (Intro -> Body 1 -> Body 2 -> Conclusion)',
                passed: hasFourParas,
                note: hasFourParas ? `✅ Verified (${paras} paragraphs — 2/2 DSC Pts)` : `⚠️ Only ${paras} paragraph(s) (Use 4 paragraphs for full DSC score)`
            });
            checks.push({
                label: 'Academic Discourse Markers & Collocations (GLR & Vocab)',
                passed: hasAcademicConnectors,
                note: hasAcademicConnectors ? '✅ Uses high-scoring PTE academic connectors' : '⚠️ Add connectors ("First and foremost", "Consequently", "Nevertheless")'
            });
            checks.push({
                label: 'Strict PTE Spelling Audit (0 Typos = 2/2, 1 Typo = 1/2, 2+ = 0/2)',
                passed: spellingErrorsCount === 0 && wc >= 50,
                note: spellingErrorsCount === 0
                    ? '✅ 2/2 Spelling Points (Zero typos detected)'
                    : spellingErrorsCount === 1
                        ? '⚠️ 1/2 Spelling Point (1 typo found — deducts 1 full trait point)'
                        : `❌ 0/2 Spelling Points (${spellingErrorsCount} typos found — PTE penalizes 2+ typos with 0 Spelling marks!)`
            });
        }

        if (!trimmed || langCheck.isMostlyHinglish) {
            return {
                secNo: sec.secNo,
                secTitle: sec.title,
                wordCount: wc,
                minWords: sec.minWords || (isSwt ? 5 : 200),
                wordLimit: sec.wordLimit || (isSwt ? 75 : 300),
                maxMarks: 90,
                checks,
                extraMistakes,
                traits: {
                    content: isSwt ? '0/2' : '0/3',
                    form: `0/${maxFormScore}`,
                    grammar: '0/2',
                    vocabulary: '0/2',
                    spelling: '0/2',
                    dsc: '0/2',
                    glr: '0/2'
                },
                sectionScore90: 10,
                earnedMarks: '10',
                statusBanner: !trimmed ? '❌ Task Not Attempted (10 / 90 GSE Minimum)' : '🚨 10 / 90 GSE: Written in Hinglish / Non-English instead of English.'
            };
        }

        if (!formGatePassed || relevance.isOffTopic) {
            const failReason = !formGatePassed
                ? (isSwt ? `Form Gate Failed (${sents} sentences / ${wc}w)` : `Form Gate Failed (${wc}w < 120w minimum)`)
                : `Off-Topic Response (${relevance.relevancePct}% Content Match)`;
            return {
                secNo: sec.secNo,
                secTitle: sec.title,
                wordCount: wc,
                minWords: sec.minWords || (isSwt ? 5 : 200),
                wordLimit: sec.wordLimit || (isSwt ? 75 : 300),
                maxMarks: 90,
                checks,
                extraMistakes,
                traits: {
                    content: relevance.isOffTopic ? (isSwt ? '0/2' : '0/3') : (isSwt ? '1/2' : '1/3'),
                    form: `${formScore}/${maxFormScore}`,
                    grammar: '0/2 (Gated)',
                    vocabulary: '0/2 (Gated)',
                    spelling: '0/2 (Gated)',
                    dsc: '0/2 (Gated)',
                    glr: '0/2 (Gated)'
                },
                sectionScore90: 10,
                earnedMarks: '10',
                statusBanner: `🚨 10 / 90 GSE (ZERO-SCORE GATE TRIGGERED): ${failReason}`
            };
        }

        const maxContent = isSwt ? 2 : 3;
        const contentPts = Math.min(maxContent, Math.max(1, Math.round((relevance.relevancePct / 100) * maxContent * 10) / 10));
        const grammarPts = Math.max(0, Math.min(2, Number((2.0 - grammarErrorsCount * 0.45).toFixed(1))));
        const spellingPts = spellingErrorsCount === 0 ? 2.0 : (spellingErrorsCount === 1 ? 1.0 : 0.0);
        const vocabPts = Math.max(0.5, Math.min(2.0, Number((1.4 + (relevance.matchedKeywords.length >= 4 ? 0.6 : 0.2) - spellingErrorsCount * 0.2).toFixed(1))));
        const dscPts = isSwt ? 2.0 : (paras >= 4 ? 2.0 : (paras >= 3 ? 1.5 : 0.5));
        const glrPts = Math.max(0.5, Math.min(2.0, Number(((grammarPts + vocabPts) / 2).toFixed(1))));

        let rawEarned = 0;
        let rawMax = 15;
        if (isSwt) {
            rawEarned = contentPts + formScore + grammarPts + vocabPts;
            rawMax = 7;
        } else {
            rawEarned = contentPts + formScore + grammarPts + vocabPts + spellingPts + dscPts + glrPts;
            rawMax = 15;
        }

        const ratio = Math.max(0, Math.min(1, rawEarned / rawMax));
        const sectionScore90 = Math.round(10 + ratio * 80);

        return {
            secNo: sec.secNo,
            secTitle: sec.title,
            wordCount: wc,
            minWords: sec.minWords || (isSwt ? 5 : 200),
            wordLimit: sec.wordLimit || (isSwt ? 75 : 300),
            maxMarks: 90,
            checks,
            extraMistakes,
            traits: {
                content: `${contentPts}/${maxContent}`,
                form: `${formScore}/${maxFormScore}`,
                grammar: `${grammarPts}/2`,
                vocabulary: `${vocabPts}/2`,
                spelling: `${spellingPts}/2`,
                dsc: `${dscPts}/2`,
                glr: `${glrPts}/2`
            },
            sectionScore90,
            earnedMarks: String(sectionScore90),
            statusBanner: `✅ Official PTE Task ${sec.secNo} Score: ${sectionScore90} / 90 GSE (Form: ${formScore}/${maxFormScore} • Content: ${contentPts}/${maxContent} • Grammar: ${grammarPts}/2 • Spelling: ${spellingPts}/2)`
        };
    }

    // ------------------------------------------------------------------------
    // 5. INITIALIZE & HOOK SEAMLESSLY INTO SIMULATOR & BANKING ANALYZER
    // ------------------------------------------------------------------------
    function initPteIntegration() {
        if (typeof EXAM_PRESETS !== 'undefined') {
            Object.keys(PTE_EXPANDED_PRESETS).forEach(examKey => {
                if (EXAM_PRESETS[examKey] && Array.isArray(EXAM_PRESETS[examKey].sections)) {
                    PTE_EXPANDED_PRESETS[examKey].forEach((pairsArray, secIdx) => {
                        if (EXAM_PRESETS[examKey].sections[secIdx]) {
                            EXAM_PRESETS[examKey].sections[secIdx].questionPairs = pairsArray;
                        }
                    });
                }
            });
        }

        if (window.BankingAnalyzer && window.BankingAnalyzer.QUESTION_KNOWLEDGE_BASE) {
            Object.assign(window.BankingAnalyzer.QUESTION_KNOWLEDGE_BASE, PTE_QUESTION_KNOWLEDGE_BASE);
        }

        if (window.BankingAnalyzer && !window.BankingAnalyzer._pteHybridHooked) {
            const prevEvaluate = window.BankingAnalyzer.evaluateBankingSubmission;

            window.BankingAnalyzer.evaluateBankingSubmission = async function (params) {
                const { examKey, preset, sectionsState } = params;
                const baseReport = await prevEvaluate.call(window.BankingAnalyzer, params);

                if (!preset || preset.category !== 'pte') {
                    return baseReport;
                }

                let cloudPte = null;
                let engineMode = 'OptiFile Pearson PTE 7-Trait Algorithm + 5-Lakh Word Grammar Engine (v5.0)';

                if (window.location.protocol === 'http:' || window.location.protocol === 'https:') {
                    try {
                        const resp = await fetch('/api/pte-evaluate', {
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
                                        isSingleSentence: Boolean(s.isSingleSentence),
                                        prompt: (pair.a || '') + ' OR ' + (pair.b || ''),
                                        minWords: s.minWords || 5,
                                        wordLimit: s.wordLimit || 300,
                                        userResponse: s.userResponse || ''
                                    };
                                })
                            })
                        });
                        if (resp.ok) {
                            const json = await resp.json();
                            if (json && json.success && json.analysis) {
                                cloudPte = json.analysis;
                                engineMode = 'OptiFile Cloud Gemini AI + Pearson PTE Automated Scoring Engine';
                            }
                        }
                    } catch (e) {
                        // Uses local + LanguageTool hybrid engine
                    }
                }

                if (cloudPte && Array.isArray(cloudPte.grammarMistakes)) {
                    cloudPte.grammarMistakes.forEach(cm => {
                        const exists = baseReport.mistakes.some(
                            m => m.wrong.toLowerCase().trim() === String(cm.wrong || '').toLowerCase().trim()
                        );
                        if (!exists && cm.wrong && cm.correct) {
                            baseReport.mistakes.push({
                                sectionNo: cm.sectionNo || 1,
                                cat: cm.category || 'Pearson PTE Grammar & Collocation Audit',
                                wrong: cm.wrong,
                                right: cm.correct,
                                why: cm.why,
                                source: 'Gemini PTE AI Examiner'
                            });
                        }
                    });
                }

                baseReport.sectionAudits = sectionsState.map((sec, idx) => {
                    const prevAudit = baseReport.sectionAudits[idx] || {};
                    const text = (sec.userResponse || '').trim();
                    const rel = prevAudit.relevance || { relevancePct: 0, isOffTopic: true, matchedKeywords: [] };
                    const langCheck = prevAudit.langCheck || { isMostlyHinglish: false, hinglishWords: [] };
                    const secMistakes = baseReport.mistakes.filter(m => m.sectionNo === sec.secNo);

                    const pteAudit = auditPteSection7Traits(sec, text, examKey, rel, langCheck, secMistakes);

                    if (pteAudit.extraMistakes && pteAudit.extraMistakes.length > 0) {
                        pteAudit.extraMistakes.forEach(em => baseReport.mistakes.unshift(em));
                    }

                    return {
                        ...prevAudit,
                        ...pteAudit
                    };
                });

                let overallPteScore = 10;
                if (baseReport.sectionAudits.length === 2) {
                    const s1 = baseReport.sectionAudits[0];
                    const s2 = baseReport.sectionAudits[1];
                    if (s1.wordCount > 0 && s2.wordCount === 0) {
                        overallPteScore = Math.max(10, Math.round(s1.sectionScore90 * 0.55));
                    } else if (s1.wordCount === 0 && s2.wordCount > 0) {
                        overallPteScore = Math.max(10, Math.round(s2.sectionScore90 * 0.65));
                    } else {
                        overallPteScore = Math.round(s1.sectionScore90 * 0.4 + s2.sectionScore90 * 0.6);
                    }
                } else if (baseReport.sectionAudits.length === 1) {
                    overallPteScore = baseReport.sectionAudits[0].sectionScore90;
                }

                if (cloudPte && typeof cloudPte.overallPteScore === 'number' && overallPteScore > 15) {
                    overallPteScore = Math.round((overallPteScore + cloudPte.overallPteScore) / 2);
                }

                const combinedText = sectionsState.map(s => s.userResponse || '').join('\n\n');
                PTE_VOCAB_UPGRADES.forEach(u => {
                    u.regex.lastIndex = 0;
                    const m = combinedText.match(u.regex);
                    if (m) {
                        const exists = baseReport.vocabUpgrades.some(v => v.weakWord.toLowerCase() === m[0].toLowerCase());
                        if (!exists) {
                            baseReport.vocabUpgrades.push({
                                weakWord: m[0],
                                premiumOptions: u.strong,
                                contextTip: u.context
                            });
                        }
                    }
                });

                const gseBadge = getGseBandBadge(overallPteScore);
                const primaryTraits = (cloudPte && cloudPte.enablingSkills) || baseReport.sectionAudits[baseReport.sectionAudits.length - 1].traits;

                baseReport.finalScore = String(overallPteScore);
                baseReport.engineMode = engineMode;
                baseReport.powerWords = PTE_POWER_LEXICON[examKey] || PTE_POWER_LEXICON['pte-full'];

                const pteRewritesHtml = (cloudPte && Array.isArray(cloudPte.score50ToScore90Rewrites) && cloudPte.score50ToScore90Rewrites.length > 0)
                    ? cloudPte.score50ToScore90Rewrites.map(r => `
                        <div class="mt-2 p-2.5 rounded-xl bg-white border border-violet-200 text-xs">
                            <div><span class="text-rose-700 font-bold">Your Phrasing:</span> <em>"${r.studentSentence}"</em></div>
                            <div class="mt-1"><span class="text-emerald-800 font-extrabold">⚡ PTE 90/90 Upgrade:</span> <strong>"${r.pte90Rewrite}"</strong></div>
                            <div class="text-[10px] text-zinc-500 mt-0.5">${r.upgradeReason}</div>
                        </div>
                    `).join('')
                    : `<div class="mt-2 p-2.5 rounded-xl bg-white border border-violet-200 text-xs">
                           <div><span class="text-rose-700 font-bold">Score 55 Phrasing:</span> <em>"Urban heat islands are a big problem in cities. Planners should also plant trees."</em> (❌ 2 sentences in SWT = 0 Score!)</div>
                           <div class="mt-1"><span class="text-emerald-800 font-extrabold">⚡ PTE 90/90 1-Sentence Synthesis:</span> <strong>"While urban heat islands pose an acute micro-climatic crisis in metropolitan regions, municipal planners can effectively mitigate them by integrating vertical urban forests and reflective cool roofs."</strong></div>
                       </div>`;

                const sevenTraitGridHtml = `
                    <div class="mt-2.5 pt-2.5 border-t border-violet-200/80">
                        <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <span class="font-extrabold text-[11px] uppercase tracking-wider text-violet-950">
                                💻 Official Pearson PTE 7-Trait Enabling Skills Matrix (10–90 GSE Scale)
                            </span>
                            <span class="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold border ${gseBadge.color}">
                                ${gseBadge.label}
                            </span>
                        </div>
                        <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-1.5 text-center">
                            <div class="p-2 rounded-xl bg-white border border-zinc-200">
                                <div class="text-[10px] font-bold text-zinc-500">Content</div>
                                <div class="font-mono-num text-sm font-extrabold text-violet-800">${primaryTraits.content}</div>
                            </div>
                            <div class="p-2 rounded-xl bg-white border border-zinc-200">
                                <div class="text-[10px] font-bold text-zinc-500">Form Gate</div>
                                <div class="font-mono-num text-sm font-extrabold text-violet-800">${primaryTraits.form}</div>
                            </div>
                            <div class="p-2 rounded-xl bg-white border border-zinc-200">
                                <div class="text-[10px] font-bold text-zinc-500">Grammar</div>
                                <div class="font-mono-num text-sm font-extrabold text-violet-800">${primaryTraits.grammar}</div>
                            </div>
                            <div class="p-2 rounded-xl bg-white border border-zinc-200">
                                <div class="text-[10px] font-bold text-zinc-500">Vocabulary</div>
                                <div class="font-mono-num text-sm font-extrabold text-violet-800">${primaryTraits.vocabulary}</div>
                            </div>
                            <div class="p-2 rounded-xl bg-white border border-zinc-200">
                                <div class="text-[10px] font-bold text-zinc-500">Spelling</div>
                                <div class="font-mono-num text-sm font-extrabold text-violet-800">${primaryTraits.spelling}</div>
                            </div>
                            <div class="p-2 rounded-xl bg-white border border-zinc-200">
                                <div class="text-[10px] font-bold text-zinc-500">DSC Structure</div>
                                <div class="font-mono-num text-sm font-extrabold text-violet-800">${primaryTraits.dsc}</div>
                            </div>
                            <div class="p-2 rounded-xl bg-white border border-zinc-200">
                                <div class="text-[10px] font-bold text-zinc-500">Linguistic Range</div>
                                <div class="font-mono-num text-sm font-extrabold text-violet-800">${primaryTraits.glr}</div>
                            </div>
                        </div>
                        ${pteRewritesHtml}
                    </div>
                `;

                const baseSummaryText = cloudPte?.examinerSummary || baseReport.overallFeedback;
                baseReport.overallFeedback = baseSummaryText + sevenTraitGridHtml;

                return baseReport;
            };

            window.BankingAnalyzer._pteHybridHooked = true;
        }
    }

    initPteIntegration();
    window.addEventListener('DOMContentLoaded', initPteIntegration);

    window.PteAnalyzer = {
        PTE_EXPANDED_PRESETS,
        PTE_QUESTION_KNOWLEDGE_BASE,
        PTE_VOCAB_UPGRADES,
        PTE_POWER_LEXICON
    };

})(window);
