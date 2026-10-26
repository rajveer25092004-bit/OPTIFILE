/**
 * ============================================================================
 * OPTIFILE CAMBRIDGE CD-IELTS BAND 9.0 + HYBRID AI & GRAMMAR ENGINE (v5.0)
 * File Path: /js/ielts-analyzer.js
 * ============================================================================
 * FEATURES:
 * 1. Connects to Unhackable Cloud Gemini AI (/api/ielts-evaluate) +
 *    LanguageTool 5-Lakh+ Word API + Deep Offline Grammar/Collocation Engine.
 * 2. Official 4-Pillar Band Descriptors (TA/TR, CC, LR, GRA) on 0.0–9.0 Scale
 *    with Official 1:2 Task Weighting & CEFR Level Classification (A1–C2).
 * 3. 15 Complete Cambridge IELTS Question Sets (30 Prompts) + 3 SVG Data Charts
 *    with Auto-Daily Rotation, Shuffle Support & Band 9.0 Model Answers.
 */

(function (window) {
    'use strict';

    // ------------------------------------------------------------------------
    // 1. THIRD SVG DATA CHART FOR ACADEMIC TASK 1 (SET 3: AI ADOPTION)
    // ------------------------------------------------------------------------
    const THIRD_IELTS_SVG_CHART = {
        title: '🤖 Industrial AI & Robotics Adoption Rate by Sector (2018 vs 2026)',
        svg: `
            <svg viewBox="0 0 420 135" class="w-full h-32">
                <line x1="35" y1="15" x2="395" y2="15" stroke="#F1F5F9"/>
                <line x1="35" y1="60" x2="395" y2="60" stroke="#F1F5F9"/>
                <line x1="35" y1="105" x2="395" y2="105" stroke="#CBD5E1"/>
                <text x="4" y="19" font-size="9" fill="#64748B">80%</text>
                <text x="4" y="64" font-size="9" fill="#64748B">40%</text>
                <text x="10" y="109" font-size="9" fill="#64748B">0%</text>
                <rect x="52" y="55" width="20" height="50" rx="3" fill="#64748B"/>
                <rect x="76" y="18" width="20" height="87" rx="3" fill="#E11D48"/>
                <text x="48" y="122" font-size="9.5" font-weight="bold" fill="#1E293B">Automotive</text>
                <rect x="152" y="65" width="20" height="40" rx="3" fill="#64748B"/>
                <rect x="176" y="25" width="20" height="80" rx="3" fill="#E11D48"/>
                <text x="154" y="122" font-size="9.5" font-weight="bold" fill="#1E293B">FinTech</text>
                <rect x="252" y="80" width="20" height="25" rx="3" fill="#64748B"/>
                <rect x="276" y="42" width="20" height="63" rx="3" fill="#E11D48"/>
                <text x="248" y="122" font-size="9.5" font-weight="bold" fill="#1E293B">Healthcare</text>
                <rect x="345" y="88" width="20" height="17" rx="3" fill="#64748B"/>
                <rect x="369" y="68" width="20" height="37" rx="3" fill="#E11D48"/>
                <text x="342" y="122" font-size="9.5" font-weight="bold" fill="#1E293B">Agriculture</text>
            </svg>
            <div class="flex justify-center gap-5 text-[10px] font-bold text-zinc-600">
                <span class="flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-sm bg-slate-500"></span> 2018</span>
                <span class="flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-sm bg-rose-600"></span> 2026</span>
            </div>
        `
    };

    // ------------------------------------------------------------------------
    // 2. EXPANDED CAMBRIDGE IELTS PRESET QUESTIONS (15 SETS / 30 PROMPTS)
    // ------------------------------------------------------------------------
    const IELTS_EXPANDED_PRESETS = {
        'ielts-full': [
            // SECTION 1: ACADEMIC TASK 1 CHART REPORT (MIN 150W | 20 MINS)
            [
                {
                    setTag: 'Cambridge Set 1 of 3 • Renewable Electricity Bar Chart (2015 vs 2026)',
                    a: '<strong>Task 1 Prompt (Bar Chart below):</strong> The chart below shows the percentage of total electricity generated from renewable sources across four countries (Norway, Germany, India, and Japan) in 2015 and 2026. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.',
                    b: '<strong>Examiner Rule (Min 150 Words):</strong> Include a clear "Overall" overview paragraph highlighting the highest producer (Norway) and the fastest proportional riser (India). Do NOT include personal opinions.'
                },
                {
                    setTag: 'Cambridge Set 2 of 3 • Weekly Household Expenditure Chart (UK vs India)',
                    a: '<strong>Task 1 Prompt (Expenditure Chart below):</strong> The bar chart illustrates the average weekly percentage of household income spent on four categories (Housing, Food, Transport, and Leisure) in the UK and Urban India. Summarize the main features and make analytical comparisons.',
                    b: '<strong>Examiner Rule (Min 150 Words):</strong> Contrast the primary expenditure in the UK (Housing) with Urban India (Food), and report exact percentage comparisons.'
                },
                {
                    setTag: 'Cambridge Set 3 of 3 • Industrial AI & Robotics Adoption Chart (2018 vs 2026)',
                    a: '<strong>Task 1 Prompt (AI Adoption Chart below):</strong> The bar chart compares the percentage of enterprises adopting Artificial Intelligence and robotics across four sectors (Automotive, FinTech, Healthcare, and Agriculture) in 2018 and 2026. Summarize the main features and make comparisons.',
                    b: '<strong>Examiner Rule (Min 150 Words):</strong> Include an "Overall" summary of the upward trajectory across all four industries, contrasting Automotive/FinTech with Agriculture.'
                }
            ],
            // SECTION 2: ACADEMIC TASK 2 ESSAY (MIN 250W | 40 MINS)
            [
                {
                    setTag: 'Cambridge Set 1 of 3 • Universal Basic Income (AI Era) & Ageing Society',
                    a: '<strong>Task 2 Option A (Discussion + Opinion):</strong> Some people believe that universal basic income (UBI) is essential in an era of widespread AI automation, while others argue that it reduces the incentive to work and burdens public finances. Discuss both views and give your own opinion.',
                    b: '<strong>Task 2 Option B (Outweigh Essay):</strong> In many nations, the proportion of older citizens is steadily increasing. Do the positive socio-economic effects of an ageing population outweigh the drawbacks?'
                },
                {
                    setTag: 'Cambridge Set 2 of 3 • High-Speed Rail vs Highways & Graduate Unemployment',
                    a: '<strong>Task 2 Option A (Agree / Disagree):</strong> Governments should spend more public money on high-speed rail networks and mass transit rather than expanding urban highways. To what extent do you agree or disagree?',
                    b: '<strong>Task 2 Option B (Causes &amp; Solutions):</strong> Many university graduates today struggle to find employment matching their qualifications. What are the primary causes of this trend, and what solutions can universities and employers implement?'
                },
                {
                    setTag: 'Cambridge Set 3 of 3 • Climate Treaties vs Lifestyle & Space Expenditure',
                    a: '<strong>Task 2 Option A (Discussion + Opinion):</strong> Some people argue that global environmental crises can only be solved through binding international treaties, whereas others believe individual lifestyle changes are more impactful. Discuss both views and give your opinion.',
                    b: '<strong>Task 2 Option B (Agree / Disagree):</strong> Billions of dollars are spent annually on space exploration while millions on Earth lack clean water and healthcare. To what extent do you agree that space budgets should be redirected to human welfare?'
                }
            ]
        ],
        'ielts-task2': [
            [
                {
                    setTag: 'Task 2 Set 1 of 3 • Climate Treaties vs Lifestyle & Remote Work Impact',
                    a: '<strong>Prompt Option A (Discussion + Opinion):</strong> Some people argue that global environmental challenges can only be solved through international treaties, whereas others believe individual lifestyle changes are more impactful. Discuss both views and state your opinion.',
                    b: '<strong>Prompt Option B (Positive / Negative Development):</strong> With the rise of remote work, many employees no longer live near their workplaces. Is this a positive or negative development for urban communities and work-life balance?'
                },
                {
                    setTag: 'Task 2 Set 2 of 3 • AI Translation vs Foreign Languages & Congestion Taxes',
                    a: '<strong>Prompt Option A (Agree / Disagree):</strong> As AI translation tools become instantaneous and accurate, learning foreign languages in school is no longer necessary. To what extent do you agree or disagree?',
                    b: '<strong>Prompt Option B (Outweigh Essay):</strong> Many metropolitan cities are introducing heavy congestion taxes on private cars entering city centers during peak hours. Do the advantages of this policy outweigh the disadvantages?'
                },
                {
                    setTag: 'Task 2 Set 3 of 3 • Tuition-Free Universities & Algorithmic Social Media',
                    a: '<strong>Prompt Option A (Agree / Disagree):</strong> Higher education at universities should be completely tuition-free for all students, regardless of their financial background. To what extent do you agree or disagree?',
                    b: '<strong>Prompt Option B (Causes &amp; Solutions):</strong> Algorithmic social media platforms are increasingly linked to shortened attention spans and anxiety among young people. What are the causes of this issue, and how can parents and regulators address it?'
                }
            ]
        ],
        'ielts-gt': [
            // SECTION 1: GT TASK 1 LETTER (MIN 150W | 20 MINS)
            [
                {
                    setTag: 'GT Letter Set 1 of 3 • Lost Conference Folder & Public Library Closure',
                    a: '<strong>Option A (Formal Letter):</strong> You recently attended a professional certification workshop at a hotel, and you left an important folder of documents in the conference hall. Write a letter to the Hotel Manager: 1) Describe the folder and where you sat, 2) Explain why the documents are urgent, 3) State how you would like them returned.',
                    b: '<strong>Option B (Semi-Formal Letter):</strong> Your local council plans to close a neighbourhood public library and replace it with a commercial gym. Write a letter to the Council Director explaining how the library benefits local residents and proposing an alternative solution.'
                },
                {
                    setTag: 'GT Letter Set 2 of 3 • Flight Delay Compensation & Landlord Heating Repair',
                    a: '<strong>Option A (Formal Complaint Letter):</strong> Your international flight was delayed by over 14 hours, causing you to miss an important business conference. Write a letter to the Airline Customer Relations Director: 1) Give flight details, 2) Describe the inconvenience caused, 3) Demand statutory compensation.',
                    b: '<strong>Option B (Semi-Formal Letter to Landlord):</strong> The central heating boiler in your rented apartment has stopped working at the start of winter. Write a letter to your landlord: 1) Explain the issue, 2) Describe how it affects your family, 3) Propose a timeline for urgent repair.'
                },
                {
                    setTag: 'GT Letter Set 3 of 3 • Hybrid Work Request to Manager & Bicycle Lanes Letter',
                    a: '<strong>Option A (Semi-Formal Workplace Letter):</strong> You want to transition to a hybrid (3 days remote, 2 days office) schedule to attend an evening professional course. Write a letter to your Department Manager: 1) Explain your reason, 2) Show how your output will be maintained, 3) Suggest a trial period.',
                    b: '<strong>Option B (Formal Letter to Editor):</strong> Commuters in your city face severe traffic congestion and unsafe roads for cyclists. Write a letter to the Editor of a local newspaper: 1) Describe the hazard, 2) Explain the benefits of dedicated cycle lanes, 3) Urge municipal authorities to act.'
                }
            ],
            // SECTION 2: GT TASK 2 ESSAY (MIN 250W | 40 MINS)
            [
                {
                    setTag: 'GT Essay Set 1 of 3 • Children Outdoor Play & Mandatory Financial Literacy',
                    a: '<strong>Option A (Causes &amp; Solutions):</strong> Nowadays, children spend significantly less time playing outdoors than in the past. Why is this happening, and how can parents and schools encourage active outdoor habits?',
                    b: '<strong>Option B (Agree / Disagree):</strong> Some people believe that practical financial education (budgeting, taxes, and investing) should be a mandatory subject in secondary schools. To what extent do you agree or disagree?'
                },
                {
                    setTag: 'GT Essay Set 2 of 3 • Four-Day Workweek & Fast Fashion Waste',
                    a: '<strong>Option A (Outweigh Essay):</strong> Several companies are experimenting with a four-day workweek (32 hours) without reducing employee salaries. Do the advantages of a shorter workweek outweigh the disadvantages?',
                    b: '<strong>Option B (Causes &amp; Solutions):</strong> The "fast fashion" industry encourages consumers to buy cheap clothes and discard them quickly, creating massive environmental waste. Why has this trend grown, and how can it be curbed?'
                },
                {
                    setTag: 'GT Essay Set 3 of 3 • Nuclear vs Extended Families & Cashless Society',
                    a: '<strong>Option A (Discussion + Opinion):</strong> Some people prefer living in small nuclear families, while others believe that growing up in an extended family with grandparents is far more beneficial for children. Discuss both views and give your opinion.',
                    b: '<strong>Option B (Outweigh Essay):</strong> Many countries are rapidly moving toward a 100% cashless society where all payments are digital. Do the benefits of a cashless economy outweigh the risks for elderly and vulnerable citizens?'
                }
            ]
        ]
    };

    // ------------------------------------------------------------------------
    // 3. COMPLETE CAMBRIDGE IELTS QUESTION KNOWLEDGE BASE (15 SETS)
    // ------------------------------------------------------------------------
    const IELTS_QUESTION_KNOWLEDGE_BASE = {
        'ielts-full-sec1-pair0': {
            topicName: 'Academic Task 1 Set 1: Renewable Electricity Share Bar Chart (Norway, Germany, India, Japan)',
            keywords: ['overall', 'renewable', 'electricity', 'norway', 'germany', 'india', 'japan', '2015', '2026', 'percentage', 'proportion', '90%', '75%', 'rose', 'increased', 'upward', 'chart'],
            checklist: [
                { point: 'Paraphrased Opening Sentence + Mandatory "Overall" Overview Paragraph', regex: /\b(overall|in\s+summary|generally\s+speaking|it\s+is\s+evident\s+that)\b/i },
                { point: 'Identifies Key Extremes: Norway Highest (~75% to >90%) & India Fastest Proportional Surge', regex: /\b(norway|india|highest|largest|fastest|doubled|surged)\b/i },
                { point: 'Cites Specific Numerical Data / Percentages from the Chart (2015 vs 2026)', regex: /(\d+\s*%|\bpercent\b|\bpercentage\b|\b2015\b|\b2026\b)/i },
                { point: 'Uses Comparative Structures ("Whereas", "In contrast", "Outpaced") & Zero Personal Opinion', regex: /\b(whereas|while|in\s+contrast|compared\s+to|conversely|respectively|outpaced)\b/i }
            ],
            modelAnswer: `The bar chart compares the proportion of total electricity generated from renewable sources across four nations—Norway, Germany, India, and Japan—between 2015 and 2026.\n\nOverall, it is evident that all four countries witnessed a pronounced upward trajectory in renewable electricity share over the eleven-year period. While Norway consistently remained the dominant producer of clean power, India recorded the most dramatic proportional surge.\n\nIn 2015, Norway already generated approximately 75% of its electricity from renewable sources, far outpacing the other three nations. By 2026, this figure climbed further to slightly over 90%. Similarly, Germany demonstrated robust expansion, with its renewable share rising from roughly 43% in 2015 to nearly 73% in 2026.\n\nIn contrast, India and Japan started from significantly lower baselines in 2015, at roughly 23% and 31% respectively. However, India's renewable generation more than doubled to reach 60% by 2026, overtaking Japan, whose renewable share grew more moderately to approximately 55%.`
        },
        'ielts-full-sec1-pair1': {
            topicName: 'Academic Task 1 Set 2: Weekly Household Expenditure Bar Chart (UK vs Urban India)',
            keywords: ['overall', 'household', 'expenditure', 'income', 'housing', 'food', 'transport', 'leisure', 'uk', 'india', 'urban', 'percentage', 'proportion', 'spent', 'allocated'],
            checklist: [
                { point: 'Paraphrased Opening + Clear "Overall" Overview Paragraph', regex: /\b(overall|in\s+summary|broadly\s+speaking|it\s+is\s+clear\s+that)\b/i },
                { point: 'Highlights Primary Contrast: UK Spends Most on Housing vs Urban India on Food', regex: /\b(housing|food|uk|india|highest|largest|dominant)\b/i },
                { point: 'Includes Accurate Data Comparisons Across Transport & Leisure Categories', regex: /\b(transport|leisure|percent|%|proportion|allocated|expenditure)\b/i },
                { point: 'Uses Band 9 Comparative Linkers ("Conversely", "Whereas", "Accounted for")', regex: /\b(conversely|whereas|while|in\s+contrast|accounted\s+for|allocated)\b/i }
            ],
            modelAnswer: `The bar chart illustrates the average percentage of weekly household income allocated to four expenditure categories—Housing, Food, Transport, and Leisure—by households in the UK and Urban India.\n\nOverall, the most striking feature is the inverse priority given to basic necessities: whereas British households allocate the largest share of their budget to Housing, families in Urban India spend the highest proportion on Food. Leisure accounts for the smallest expenditure in Urban India.\n\nRegarding primary living costs, Housing represents the single largest expense in the UK at roughly 42% of weekly income, compared to approximately 31% in Urban India. Conversely, Indian urban households devote nearly 36% of their income to Food, noticeably higher than the 26% recorded in the UK.\n\nIn terms of mobility and recreation, Transport expenditure is relatively comparable at around 22% in Urban India and 18% in the UK. However, British households spend nearly double the proportion on Leisure (approximately 24%) compared to their Indian counterparts (14%).`
        },
        'ielts-full-sec1-pair2': {
            topicName: 'Academic Task 1 Set 3: Industrial AI & Robotics Adoption Chart (2018 vs 2026)',
            keywords: ['overall', 'artificial intelligence', 'ai', 'robotics', 'adoption', 'enterprises', 'automotive', 'fintech', 'healthcare', 'agriculture', '2018', '2026', 'percentage', 'sector'],
            checklist: [
                { point: 'Paraphrased Introduction + Mandatory "Overall" Overview Paragraph', regex: /\b(overall|in\s+summary|it\s+is\s+apparent\s+that)\b/i },
                { point: 'Identifies Key Leaders (Automotive & FinTech >70%) vs Laggard (Agriculture)', regex: /\b(automotive|fintech|agriculture|healthcare|highest|lowest|lagged)\b/i },
                { point: 'Cites Specific 2018 vs 2026 Percentage Figures Accurately', regex: /(\d+\s*%|\b2018\b|\b2026\b|\bpercent\b)/i },
                { point: 'Maintains Objective Academic Register with Varied Trend Verbs', regex: /\b(surged|doubled|climbed|outpaced|whereas|in\s+contrast)\b/i }
            ],
            modelAnswer: `The bar chart compares the percentage of enterprises utilizing Artificial Intelligence (AI) and robotics across four economic sectors—Automotive, FinTech, Healthcare, and Agriculture—in 2018 and 2026.\n\nOverall, AI and robotics adoption expanded substantially across all four industries over the eight-year period. Automotive and FinTech consistently led technological integration, whereas Agriculture remained the least automated sector despite more than doubling its adoption rate.\n\nIn 2018, the Automotive sector recorded the highest automation rate at roughly 44%, followed closely by FinTech at 36%. By 2026, both industries experienced a pronounced surge, with Automotive reaching nearly 78% and FinTech climbing to 72%.\n\nMeanwhile, Healthcare witnessed the steepest relative acceleration among mid-tier sectors, more than doubling from 22% in 2018 to 56% in 2026. In contrast, Agriculture started at a modest 15% in 2018 and rose to 33% by 2026, still trailing the other three sectors.`
        },
        'ielts-full-sec2-pair0': {
            topicName: 'Academic Task 2 Set 1: Universal Basic Income (AI Era) OR Ageing Population Impact',
            keywords: ['universal basic income', 'ubi', 'automation', 'artificial intelligence', 'incentive', 'work', 'welfare', 'tax', 'inflation', 'ageing', 'older', 'elderly', 'pension', 'healthcare', 'workforce'],
            checklist: [
                { point: 'Clear Paraphrased Introduction + Explicit Thesis Statement / Opinion', regex: /\b(in\s+my\s+view|i\s+firmly\s+believe|this\s+essay\s+argues|while\s+some\s+contend|outweigh)\b/i },
                { point: 'Well-Developed Body Paragraph 1 Exploring the First Perspective / Drawbacks', regex: /\b(on\s+the\s+one\s+hand|firstly|proponents|automation|displacement|healthcare|pension)\b/i },
                { point: 'Well-Developed Body Paragraph 2 Exploring the Opposing View + Own Stance', regex: /\b(on\s+the\s+other\s+hand|however|conversely|nevertheless|fiscal|incentive|silver\s+economy)\b/i },
                { point: 'C1/C2 Academic Lexicon & Complex Subordinate Clauses ("Although", "Whereas")', regex: /\b(although|whereas|despite|consequently|furthermore|sustainable|mitigate)\b/i }
            ],
            modelAnswer: `The rapid proliferation of Artificial Intelligence and robotics has sparked intense debate over whether governments should guarantee a Universal Basic Income (UBI) to all citizens, or whether such unconditional transfers would erode the work ethic and strain public treasuries. While unconditional handouts pose legitimate fiscal risks, I firmly believe that a targeted, reskilling-linked basic income is becoming indispensable to cushion technological displacement.\n\nOn the one hand, proponents of UBI argue that algorithmic automation displaces both manual and white-collar cognitive jobs simultaneously. Providing a baseline financial safety net prevents structural poverty, reduces mental-health distress, and empowers displaced workers to pursue vocational reskilling without facing immediate destitution.\n\nOn the other hand, critics rightly point out that financing a universal payout for every citizen—including affluent households—would require punitive taxation or massive sovereign borrowing, potentially fueling inflation and disincentivizing entry-level labor.\n\nIn conclusion, rather than implementing an indiscriminate blanket UBI, governments should adopt a means-tested guaranteed minimum income tied to skill-upgradation programs, safeguarding human dignity while preserving fiscal sustainability.`
        },
        'ielts-full-sec2-pair1': {
            topicName: 'Academic Task 2 Set 2: High-Speed Rail vs Urban Highways OR Graduate Unemployment',
            keywords: ['high-speed rail', 'public transport', 'rail', 'highway', 'road', 'congestion', 'carbon', 'emissions', 'commuter', 'graduate', 'university', 'unemployment', 'qualification', 'skill', 'curriculum', 'internship'],
            checklist: [
                { point: 'Paraphrased Prompt + Clear Thesis Addressing Task Directive', regex: /\b(agree|disagree|extent|causes|solutions|this\s+essay|in\s+my\s+opinion)\b/i },
                { point: 'Logical 4-Paragraph Structure (Intro -> Body 1 -> Body 2 -> Conclusion)', regex: /\n\s*\n/ },
                { point: 'Substantiated Arguments with Concrete Examples (Induced Demand / Shinkansen / Curriculum Mismatch)', regex: /\b(for\s+instance|for\s+example|such\s+as|consequently|therefore|carbon|curriculum|internship)\b/i },
                { point: 'Advanced Lexical Resource & Complex Sentence Variety', regex: /\b(infrastructure|decarbonization|mismatch|obsolete|collaborate|vocational|sustainable)\b/i }
            ],
            modelAnswer: `Allocating public infrastructure budgets between high-speed rail networks and urban highway expansion is a critical policy dilemma. I strongly agree that prioritizing high-speed rail and mass transit yields far superior long-term economic and environmental returns compared to widening urban roads.\n\nFirstly, expanding urban highways rarely resolves traffic congestion due to the phenomenon of "induced demand": wider roads simply encourage more commuters to purchase private vehicles, quickly restoring gridlock and escalating tailpipe carbon emissions. In contrast, electrified high-speed rail corridors transport thousands of passengers per hour with a fraction of the per-capita carbon footprint.\n\nSecondly, high-speed rail acts as a regional economic equalizer. By shrinking travel times between megacities and secondary towns—as demonstrated by Japan's Shinkansen network—rail connectivity disperses commercial investment and reduces housing pressure in overcrowded capitals.\n\nIn conclusion, shifting fiscal priorities toward high-speed rail and integrated urban metro systems is essential to build sustainable, low-carbon, and economically inclusive cities.`
        },
        'ielts-full-sec2-pair2': {
            topicName: 'Academic Task 2 Set 3: International Climate Treaties vs Individual Action OR Space vs Earth Welfare',
            keywords: ['environmental', 'climate', 'international treaties', 'government', 'individual', 'lifestyle', 'carbon', 'renewable', 'corporation', 'space', 'exploration', 'satellite', 'poverty', 'healthcare', 'budget'],
            checklist: [
                { point: 'Clear Opening Paraphrase & Explicit Thesis Position', regex: /\b(treaties|individual|climate|space|welfare|believe|argue|opinion)\b/i },
                { point: 'Balanced Analysis of Systemic Policy vs Individual Responsibility', regex: /\b(governments|corporations|legislation|consumers|lifestyle|satellites|innovation)\b/i },
                { point: 'Cohesive Transitions & Academic Register (Zero Contractions)', regex: /\b(furthermore|moreover|however|consequently|nevertheless|in\s+conclusion)\b/i },
                { point: '250+ Words with Strong Concluding Synthesis', regex: /\b(in\s+conclusion|to\s+conclude|ultimately)\b/i }
            ],
            modelAnswer: `Addressing global environmental degradation has polarized opinion between those who advocate binding international treaties and those who emphasize individual lifestyle changes. While conscious consumer habits play a supportive role, I contend that systemic international agreements and state regulations are the primary drivers of ecological recovery.\n\nOn the one hand, individual actions—such as reducing single-use plastics and conserving household energy—cultivate environmental stewardship and pressure corporations to adopt greener packaging.\n\nOn the other hand, individual choices alone are powerless against macroeconomic industrial emissions. Nearly 70% of global greenhouse gases originate from energy generation, heavy manufacturing, and global shipping—sectors that individuals cannot directly control. Only binding multilateral treaties, such as the Paris Agreement, possess the legal authority to enforce carbon pricing, phase out coal subsidies, and finance cross-border renewable technology transfers.\n\nIn conclusion, although ethical individual lifestyles create cultural momentum, global environmental crises can only be resolved when sovereign governments enforce binding international treaties on industrial polluters.`
        },
        'ielts-task2-sec1-pair0': {
            topicName: 'Task 2 Set 1: Global Environmental Treaties vs Individual Lifestyle OR Remote Work Impact',
            keywords: ['environmental', 'climate', 'treaties', 'individual', 'lifestyle', 'carbon', 'remote work', 'workplace', 'commute', 'urban', 'work-life balance', 'productivity'],
            checklist: [
                { point: 'Clear Introduction with Paraphrased Prompt & Direct Thesis Statement', regex: /\b(in\s+my\s+view|i\s+believe|this\s+essay|positive|negative|treaties|remote\s+work)\b/i },
                { point: 'Two Fully Developed Body Paragraphs with Topic Sentences & Examples', regex: /\b(firstly|secondly|furthermore|moreover|for\s+instance|for\s+example)\b/i },
                { point: 'C1/C2 Academic Vocabulary & Complex Subordinate Clauses', regex: /\b(although|whereas|consequently|nevertheless|sustainable|autonomy|emissions)\b/i },
                { point: '250+ Words & Clear Concluding Summary', regex: /\b(in\s+conclusion|to\s+conclude|ultimately)\b/i }
            ],
            modelAnswer: `The widespread shift toward remote and hybrid work arrangements has enabled millions of employees to relocate away from expensive city centers. Although this transition poses minor challenges for downtown commercial landlords, I believe it is an overwhelmingly positive development for employee well-being and sustainable urban planning.\n\nFirstly, eliminating daily commuting restores two to three hours of productive time to workers each day. This flexibility allows parents to balance childcare responsibilities, reduces chronic commuting stress, and lowers urban traffic congestion and vehicular carbon emissions. Furthermore, geographically distributed hiring enables companies to recruit talented professionals from smaller towns.\n\nAdmittedly, prolonged remote work can blur work-life boundaries and reduce spontaneous mentorship for junior staff. However, organizations are effectively mitigating these drawbacks through structured hybrid schedules.\n\nIn conclusion, decoupling employment from physical proximity to offices revitalizes regional towns, enhances work-life harmony, and reduces the ecological footprint of modern cities.`
        },
        'ielts-task2-sec1-pair1': {
            topicName: 'Task 2 Set 2: AI Translation vs Learning Foreign Languages OR Urban Congestion Taxes',
            keywords: ['translation', 'artificial intelligence', 'ai', 'foreign language', 'school', 'culture', 'cognitive', 'congestion tax', 'traffic', 'private car', 'public transport', 'pollution'],
            checklist: [
                { point: 'Clear Thesis Position Stated in the Introduction', regex: /\b(disagree|agree|outweigh|language|translation|congestion|tax)\b/i },
                { point: 'Cognitive / Cultural / Socio-Economic Arguments Developed Clearly', regex: /\b(cognitive|empathy|cultural|nuance|public\s+transport|emissions|low-income)\b/i },
                { point: 'Cohesive Linkers & Complex Sentence Structures Used Accurately', regex: /\b(although|while|moreover|consequently|however|furthermore)\b/i },
                { point: '250+ Words & Cohesive Conclusion', regex: /\b(in\s+conclusion|to\s+conclude)\b/i }
            ],
            modelAnswer: `The rapid advancement of real-time AI translation applications has led some commentators to suggest that teaching foreign languages in schools has become obsolete. I strongly disagree with this view, as language acquisition imparts irreplaceable cognitive, cultural, and interpersonal benefits that algorithms cannot replicate.\n\nFirst and foremost, learning a second language is a rigorous cognitive exercise that enhances executive brain function, memory retention, and analytical problem-solving in children. Neurological research consistently demonstrates that bilingual students exhibit greater mental flexibility across academic disciplines.\n\nFurthermore, language is the vessel of culture, humor, and historical nuance. Relying on a mechanical translation device creates a barrier to genuine human empathy and diplomatic rapport. While AI translators are convenient for tourists navigating foreign menus, they cannot substitute for the deep cross-cultural understanding forged through mastering another tongue.\n\nIn conclusion, schools must continue to champion foreign language education to cultivate cognitively agile and culturally empathetic global citizens.`
        },
        'ielts-task2-sec1-pair2': {
            topicName: 'Task 2 Set 3: Tuition-Free University Education OR Algorithmic Social Media & Youth Attention',
            keywords: ['university', 'tuition-free', 'higher education', 'student', 'debt', 'taxpayer', 'merit', 'social media', 'algorithm', 'attention span', 'anxiety', 'youth', 'mental health', 'regulation'],
            checklist: [
                { point: 'Paraphrased Introduction + Clear Thesis Position / Causes & Solutions Overview', regex: /\b(tuition|university|education|social\s+media|algorithm|attention|anxiety|causes|solutions)\b/i },
                { point: 'Structured Body Paragraphs with Clear Cause-Effect Reasoning', regex: /\b(firstly|secondly|consequently|furthermore|dopamine|scrolling|means-tested|scholarship)\b/i },
                { point: 'C1/C2 Academic Collocations & Complex Grammar', regex: /\b(albeit|whereas|notwithstanding|proliferate|exacerbate|mitigate|equitable)\b/i },
                { point: '250+ Words & Balanced Conclusion', regex: /\b(in\s+conclusion|to\s+conclude|ultimately)\b/i }
            ],
            modelAnswer: `The proliferation of algorithm-driven social media platforms has been closely linked to declining attention spans and rising anxiety among adolescents. This essay examines the underlying psychological and commercial causes of this phenomenon and proposes practical interventions for parents and regulators.\n\nThe primary cause of this crisis lies in the "attention economy" business model. Social media platforms deploy sophisticated machine-learning algorithms designed to maximize user screen time through infinite scrolling, variable dopamine rewards, and sensationalized short-form videos. Constant exposure to fragmented 15-second clips rewires adolescent neural pathways, eroding the capacity for sustained deep reading. Simultaneously, curated upward social comparison fuels body-image insecurity and fear of missing out (FOMO).\n\nMitigating this challenge requires a dual approach. Regulators must enforce age-verification guardrails, ban manipulative autoplay features for minors, and mandate algorithmic transparency. At home, parents should establish screen-free zones during meals and bedtime while encouraging offline team sports and reading habits.\n\nIn conclusion, curbing digital anxiety requires holding tech conglomerates accountable for addictive design while fostering mindful digital literacy in households.`
        },
        'ielts-gt-sec1-pair0': {
            topicName: 'GT Task 1 Letter Set 1: Lost Conference Folder at Hotel OR Closing Neighbourhood Public Library',
            keywords: ['dear', 'hotel', 'manager', 'folder', 'conference', 'workshop', 'documents', 'urgent', 'courier', 'library', 'council', 'director', 'gym', 'community', 'elderly', 'students', 'yours'],
            checklist: [
                { point: 'Appropriate Formal Salutation ("Dear Sir or Madam," / "Dear Hotel Manager,")', regex: /dear\s+(sir|madam|hotel\s+manager|council\s+director|mr|ms)/i },
                { point: 'Covers Bullet 1: Clear Context & Description (Folder Details / Library Role)', regex: /\b(workshop|conference|folder|leather|front\s+row|library|residents|students)\b/i },
                { point: 'Covers Bullet 2: Explains Urgency / Impact on Community', regex: /\b(urgent|passport|contract|presentation|elderly|low-income|quiet\s+study)\b/i },
                { point: 'Covers Bullet 3: Specific Action / Alternative Proposed + Matching Sign-Off ("Yours faithfully,")', regex: /yours\s+(faithfully|sincerely)/i }
            ],
            modelAnswer: `Dear Sir or Madam,\n\nI am writing to report a misplaced document portfolio that I accidentally left behind in the Grand Ballroom of your hotel yesterday, 23 October, while attending the Annual FinTech Certification Workshop.\n\nThe item in question is a dark brown leather zip-folder bearing my initials "R.S." in gold embossing on the front cover. I was seated in the third row on the left-hand aisle, near the podium, and I believe I left the folder on the table during the afternoon networking break at 4:30 PM.\n\nThis folder contains original client contracts, property deeds, and my professional certification transcripts, which are urgently required for a statutory audit scheduled this Friday.\n\nCould you kindly check with your housekeeping and lost-and-found department to see if the folder has been handed in? If located, please contact me immediately at +91-9876543210 and arrange for an insured express courier to my office address, for which I will gladly reimburse all postage costs.\n\nYours faithfully,\nRajveer Singh`
        },
        'ielts-gt-sec1-pair1': {
            topicName: 'GT Task 1 Letter Set 2: 14-Hour Flight Delay Compensation OR Landlord Central Heating Repair',
            keywords: ['dear', 'flight', 'delayed', 'airline', 'conference', 'accommodation', 'compensation', 'refund', 'landlord', 'heating', 'boiler', 'apartment', 'winter', 'repair', 'plumber', 'yours'],
            checklist: [
                { point: 'Proper Formal / Semi-Formal Salutation ("Dear Sir or Madam," / "Dear Mr. ...")', regex: /dear\s+(sir|madam|director|mr|ms|mrs)/i },
                { point: 'Covers Bullet 1: Specific Flight Metadata / Heating Breakdown Details', regex: /\b(flight|booking|delayed|14\s+hours|heating|boiler|radiator|thermostat)\b/i },
                { point: 'Covers Bullet 2: Details Inconvenience / Impact on Family Health', regex: /\b(missed|conference|hotel|voucher|freezing|winter|children|elderly)\b/i },
                { point: 'Covers Bullet 3: Clear Demand for Compensation / Repair Timeline + Matching Sign-Off', regex: /yours\s+(faithfully|sincerely)/i }
            ],
            modelAnswer: `Dear Sir or Madam,\n\nI am writing to lodge a formal complaint and claim statutory compensation regarding the severe 14-hour delay of Flight AI-102 from London Heathrow to Mumbai on 20 October 2026 (Booking Reference: KLP892).\n\nAlthough the flight was scheduled to depart at 09:30 AM, passengers were kept waiting at the departure gate until 11:45 PM due to a technical fault. Throughout this grueling 14-hour ordeal, airline ground staff failed to provide meal vouchers, hotel accommodation, or transparent status updates.\n\nAs a direct consequence of this delay, I missed the keynote session of an international trade summit in Mumbai, resulting in significant professional embarrassment and a non-refundable hotel penalty of $250.\n\nUnder international aviation passenger rights regulations for delays exceeding four hours, I request full statutory compensation of $600 along with reimbursement of my out-of-pocket expenses within 14 days.\n\nYours faithfully,\nRajveer Singh`
        },
        'ielts-gt-sec1-pair2': {
            topicName: 'GT Task 1 Letter Set 3: Hybrid Work Request to Manager OR Dedicated Bicycle Lanes Letter to Editor',
            keywords: ['dear', 'hybrid', 'remote', 'office', 'course', 'upskilling', 'productivity', 'trial', 'manager', 'editor', 'bicycle', 'cyclist', 'traffic', 'congestion', 'lanes', 'safety', 'yours'],
            checklist: [
                { point: 'Appropriate Salutation ("Dear Mr./Ms. [Name]," or "Dear Sir or Madam,")', regex: /dear\s+(sir|madam|editor|mr|ms|mrs)/i },
                { point: 'Covers Bullet 1: Reason for Hybrid Request / Current Traffic Hazard', regex: /\b(hybrid|remote|course|certification|traffic|cyclist|hazard|accident)\b/i },
                { point: 'Covers Bullet 2: Productivity Assurance / Benefits of Cycle Lanes', regex: /\b(productivity|deadlines|targets|pollution|health|commuters|safety)\b/i },
                { point: 'Covers Bullet 3: Trial Period Proposal / Call to Action + Matching Sign-Off', regex: /yours\s+(faithfully|sincerely)/i }
            ],
            modelAnswer: `Dear Mr. Sharma,\n\nI am writing to formally request a transition from my current full-time in-office schedule to a hybrid working arrangement—specifically working three days remotely and two days from the office—effective next month.\n\nI have recently enrolled in an advanced six-month evening certification program in Cloud Data Analytics. Eliminating my two-hour daily commute on Mondays, Wednesdays, and Fridays will allow me to attend live evening lectures punctually while applying these new analytical skills directly to our department's upcoming Q4 projects.\n\nPlease be assured that my core deliverables and client responsiveness will remain completely unaffected. I will remain online during all standard business hours, attend Tuesday and Thursday team sprints in person, and share a daily progress tracker.\n\nI would be grateful if we could trial this hybrid arrangement for an initial four-week period to evaluate its effectiveness.\n\nYours sincerely,\nRajveer Singh`
        },
        'ielts-gt-sec2-pair0': {
            topicName: 'GT Task 2 Set 1: Children Playing Outdoors Less OR Mandatory School Financial Literacy',
            keywords: ['children', 'outdoors', 'play', 'screen', 'video games', 'safety', 'parents', 'schools', 'physical', 'financial education', 'budgeting', 'taxes', 'investing', 'debt', 'mandatory', 'curriculum'],
            checklist: [
                { point: 'Clear Paraphrased Introduction + Direct Thesis / Overview', regex: /\b(outdoors|children|financial|education|schools|causes|solutions|agree|disagree)\b/i },
                { point: 'Body Paragraph 1: Primary Causes / First Key Argument with Examples', regex: /\b(screen|smartphones|urban|safety|academic|debt|credit\s+card|inflation)\b/i },
                { point: 'Body Paragraph 2: Practical Solutions / Second Key Argument', regex: /\b(parents|schools|parks|extracurricular|budgeting|compounding|practical)\b/i },
                { point: '250+ Words with Cohesive Linkers & Clear Conclusion', regex: /\b(in\s+conclusion|to\s+conclude|ultimately)\b/i }
            ],
            modelAnswer: `In recent decades, active outdoor play among children has declined precipitously in favor of sedentary indoor routines. This essay examines the technological and urban causes behind this shift and outlines practical measures for parents and educators to reverse it.\n\nThe primary driver of indoor sedentary behavior is the ubiquity of addictive digital entertainment—ranging from smartphones to online multiplayer video games—coupled with shrinking urban green spaces. Furthermore, heightened parental anxiety regarding traffic hazards and neighborhood safety, alongside intense academic pressure from after-school tuition classes, leaves children with minimal unstructured time for outdoor recreation.\n\nReversing this trend requires coordinated intervention from both families and schools. Parents should enforce daily screen-time limits and participate in weekend outdoor activities such as cycling or community sports. Simultaneously, schools must protect daily physical education periods from academic encroachment and upgrade playground facilities.\n\nIn conclusion, reclaiming outdoor childhood play is vital for physical and mental development, requiring parents to model active habits and municipalities to invest in safe neighborhood parks.`
        },
        'ielts-gt-sec2-pair1': {
            topicName: 'GT Task 2 Set 2: Four-Day Workweek (32 Hours) OR Fast Fashion Environmental Waste',
            keywords: ['four-day', 'workweek', '32 hours', 'salary', 'productivity', 'burnout', 'work-life balance', 'fast fashion', 'clothes', 'discard', 'environmental', 'waste', 'landfill', 'recycling'],
            checklist: [
                { point: 'Clear Opening Paraphrase & Direct Thesis Statement', regex: /\b(four-day|workweek|fast\s+fashion|outweigh|advantages|disadvantages|causes|solutions)\b/i },
                { point: 'Well-Structured Body Paragraphs with Clear Topic Sentences', regex: /\b(productivity|burnout|retention|microplastics|landfill|influencers|circular)\b/i },
                { point: 'Uses Band 8+ Vocabulary & Complex Sentence Structures', regex: /\b(although|whereas|consequently|furthermore|sustainable|overconsumption)\b/i },
                { point: '250+ Words & Strong Concluding Summary', regex: /\b(in\s+conclusion|to\s+conclude|ultimately)\b/i }
            ],
            modelAnswer: `Experimentation with a four-day, 32-hour workweek at full pay has gained global momentum in recent years. Although certain round-the-clock service industries face scheduling complexities, I firmly believe the advantages of a shorter workweek far outweigh its drawbacks.\n\nOn the positive side, empirical trials across Europe and Japan demonstrate that compressing work hours sharpens employee focus, eliminates unproductive meetings, and drastically reduces occupational burnout. Well-rested workers exhibit lower absenteeism, higher job retention, and greater creativity, enabling companies to maintain—or even exceed—their five-day output targets.\n\nAdmittedly, customer-facing sectors such as healthcare, hospitality, and manufacturing cannot simply shut down on Fridays without hiring additional shift staff, which may raise operational costs. Nevertheless, these sectors can implement staggered four-day rotational rosters.\n\nIn conclusion, transitioning toward a four-day workweek represents a win-win evolution that enhances employee well-being while sustaining corporate productivity.`
        },
        'ielts-gt-sec2-pair2': {
            topicName: 'GT Task 2 Set 3: Nuclear vs Extended Joint Families OR 100% Cashless Society Risks & Benefits',
            keywords: ['nuclear family', 'extended family', 'grandparents', 'children', 'upbringing', 'childcare', 'values', 'cashless', 'digital payment', 'elderly', 'cyber', 'privacy', 'exclusion', 'convenience'],
            checklist: [
                { point: 'Clear Paraphrased Introduction & Explicit Opinion / Outweigh Stance', regex: /\b(nuclear|extended|grandparents|cashless|digital|outweigh|opinion|believe)\b/i },
                { point: 'Balanced Exploration of Both Sides (Autonomy vs Intergenerational Support OR Convenience vs Exclusion)', regex: /\b(autonomy|privacy|childcare|emotional|transparency|tax|elderly|cyber)\b/i },
                { point: 'Academic Linkers & Grammatical Accuracy', regex: /\b(while|whereas|moreover|however|consequently|in\s+conclusion)\b/i },
                { point: '250+ Words & Clear Conclusion', regex: /\b(in\s+conclusion|to\s+conclude|ultimately)\b/i }
            ],
            modelAnswer: `The rapid transition toward a cashless economy—where physical currency is replaced by mobile wallets and contactless cards—has transformed modern commerce. While digital payments offer unmatched convenience and fiscal transparency, I believe moving to a 100% cashless society carries severe risks for vulnerable citizens unless physical cash is preserved as a backup option.\n\nOn the one hand, digital transactions eliminate the cost of printing currency, curb tax evasion and black-market crime, and allow consumers to settle bills instantaneously. Small merchants also benefit from verifiable digital transaction histories that help them access formal bank credit.\n\nOn the other hand, completely abolishing physical cash disenfranchises elderly citizens, rural residents lacking smartphones, and low-income unbanked workers. Furthermore, a 100% digital payment grid is vulnerable to nationwide server outages, power blackouts, and cyber-extortion, while exposing every private purchase to corporate surveillance.\n\nIn conclusion, while governments should promote digital payment infrastructure, preserving legal-tender cash remains essential to protect financial inclusion and system resilience.`
        }
    };

    // ------------------------------------------------------------------------
    // 4. BAND 9 ACADEMIC VOCABULARY UPGRADES & COLLOCATION LEXICON
    // ------------------------------------------------------------------------
    const IELTS_VOCAB_UPGRADES = [
        { regex: /\b(big|huge|large)\s+(increase|rise|growth)\b/gi, weak: 'big/huge increase', strong: 'pronounced upward trajectory / substantial surge / exponential rise', context: 'Band 9 Academic Task 1 trend collocation.' },
        { regex: /\b(big|huge|large)\s+(decrease|drop|fall)\b/gi, weak: 'big/huge decrease', strong: 'precipitous decline / marked contraction / steep downward trend', context: 'Band 9 Academic Task 1 trend collocation.' },
        { regex: /\bmany\s+people\s+think\b/gi, weak: 'many people think', strong: 'a prevailing consensus suggests / proponents contend that', context: 'Essential for Academic Task 2 introductions & body openings.' },
        { regex: /\bnowadays\b/gi, weak: 'nowadays', strong: 'in the contemporary era / in recent decades', context: 'Replaces overused "nowadays" with C1 academic register.' },
        { regex: /\b(big|major)\s+problem(s)?\b/gi, weak: 'big/major problem', strong: 'pressing socio-economic challenge / systemic bottleneck', context: 'Elevates Lexical Resource (LR) band score.' },
        { regex: /\bgood\s+for\b/gi, weak: 'good for', strong: 'conducive to / advantageous for / instrumental in', context: 'High-scoring C1/C2 academic adjective phrase.' },
        { regex: /\bbad\s+for\b/gi, weak: 'bad for', strong: 'detrimental to / counterproductive to / deleterious to', context: 'High-scoring C1/C2 academic adjective phrase.' },
        { regex: /\bsolve\s+(the|this)\s+(problem|issue)\b/gi, weak: 'solve the problem', strong: 'mitigate the underlying challenge / ameliorate the crisis', context: 'Band 9 Task 2 solution phrasing.' },
        { regex: /\ba\s+lot\s+of\b/gi, weak: 'a lot of', strong: 'a substantial proportion of / a myriad of / considerable', context: 'Avoid informal "a lot of" in IELTS Academic writing.' }
    ];

    const IELTS_POWER_LEXICON = {
        'ielts-full': [
            { term: 'Pronounced Upward Trajectory', meaning: 'A clear, strong rising trend in a chart', usage: 'Renewable generation exhibited a pronounced upward trajectory between 2015 and 2026.' },
            { term: 'Inverse Proportion / Disparity', meaning: 'When two categories move in opposite directions', usage: 'There is a striking disparity between Housing and Food expenditure across the two nations.' },
            { term: 'Mitigate Technological Displacement', meaning: 'Reduce job losses caused by automation', usage: 'Conditional basic income can mitigate technological displacement caused by AI.' },
            { term: 'Catalyst for Socio-Economic Mobility', meaning: 'Something that accelerates social and economic progress', usage: 'High-speed rail acts as a catalyst for regional socio-economic mobility.' }
        ],
        'ielts-task2': [
            { term: 'Unintended Negative Externalities', meaning: 'Side-effects not originally intended', usage: 'Algorithmic social media has generated unintended negative externalities for youth mental health.' },
            { term: 'Cognitive Agility & Cultural Empathy', meaning: 'Mental flexibility and cross-cultural understanding', usage: 'Mastering a foreign language fosters cognitive agility and cultural empathy.' },
            { term: 'Systemic Multilateral Intervention', meaning: 'Coordinated global policy action by governments', usage: 'Climate change demands systemic multilateral intervention rather than isolated consumer choices.' },
            { term: 'Equitable Access to Tertiary Education', meaning: 'Fair access to university regardless of wealth', usage: 'Means-tested scholarships ensure equitable access to tertiary education.' }
        ],
        'ielts-gt': [
            { term: 'Statutory Passenger Compensation', meaning: 'Legally mandated payout for flight delays', usage: 'I am writing to claim statutory passenger compensation for the 14-hour flight delay.' },
            { term: 'Unstructured Outdoor Recreation', meaning: 'Free physical play outside without screens', usage: 'Unstructured outdoor recreation is vital for children\'s physical and social development.' },
            { term: 'Occupational Burnout & Attrition', meaning: 'Workplace exhaustion and staff quitting', usage: 'A four-day workweek significantly reduces occupational burnout and staff attrition.' },
            { term: 'Intergenerational Emotional Support', meaning: 'Care and wisdom shared between grandparents, parents & children', usage: 'Extended families provide invaluable intergenerational emotional support.' }
        ]
    };

    // ------------------------------------------------------------------------
    // 5. OFFICIAL IELTS 4-PILLAR BAND CALCULATOR & SECTION AUDITOR
    // ------------------------------------------------------------------------
    function roundToHalfBand(val) {
        return Math.max(0.0, Math.min(9.0, Math.round(val * 2) / 2));
    }

    function getCefrBadge(band) {
        if (band >= 8.5) return { code: 'C2', label: 'C2 Mastery (Expert User)', color: 'bg-emerald-100 text-emerald-900 border-emerald-400' };
        if (band >= 7.0) return { code: 'C1', label: 'C1 Effective Operational Proficiency (Advanced)', color: 'bg-blue-100 text-blue-900 border-blue-400' };
        if (band >= 5.5) return { code: 'B2', label: 'B2 Vantage (Upper-Intermediate)', color: 'bg-amber-100 text-amber-900 border-amber-400' };
        if (band >= 4.0) return { code: 'B1', label: 'B1 Threshold (Intermediate)', color: 'bg-orange-100 text-orange-900 border-orange-400' };
        return { code: 'A1/A2', label: 'Below B1 / Non-User or Off-Topic', color: 'bg-rose-100 text-rose-900 border-rose-400' };
    }

    function auditIeltsSection4Pillars(sec, text, examKey, relevance, langCheck, secMistakesCount) {
        const wc = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
        const paras = text.trim() === '' ? 0 : text.trim().split(/\n\s*\n/).filter(p => p.trim().length > 0).length;
        const minReq = sec.minWords || (sec.secNo === 1 && examKey !== 'ielts-task2' ? 150 : 250);
        const isChartTask = Boolean(sec.hasVisualChart);
        const isGtLetter = examKey === 'ielts-gt' && sec.secNo === 1;
        const checks = [];
        const extraMistakes = [];

        const meetsMinWords = wc >= minReq;
        checks.push({
            label: `Official IELTS Minimum Word Count (${minReq}+ Words)`,
            passed: meetsMinWords,
            note: meetsMinWords ? `Met requirement (${wc} words written)` : `Under-length (${wc}/${minReq} words — automatic TA/TR penalty)`
        });

        const minParas = isChartTask || isGtLetter ? 3 : 4;
        const hasGoodParas = paras >= minParas;
        checks.push({
            label: `Logical Paragraphing (${minParas}+ Paragraphs)`,
            passed: hasGoodParas,
            note: hasGoodParas ? `Verified (${paras} paragraphs)` : `Only ${paras} paragraph(s) (Use ${minParas}+ clear paragraphs)`
        });

        const linkerMatches = text.match(/\b(overall|moreover|furthermore|consequently|however|nevertheless|in\s+contrast|conversely|therefore|whereas|meanwhile|firstly|secondly|in\s+conclusion|to\s+conclude)\b/gi) || [];
        const uniqueLinkers = new Set(linkerMatches.map(l => l.toLowerCase())).size;
        checks.push({
            label: 'Cohesive Devices & Discourse Linkers (CC)',
            passed: uniqueLinkers >= 3,
            note: uniqueLinkers >= 3 ? `Verified (${uniqueLinkers} distinct academic linkers used)` : `Only ${uniqueLinkers} linker(s) found (Add "Overall", "In contrast", "Consequently")`
        });

        const complexMatches = text.match(/\b(although|even\s+though|whereas|while|despite|in\s+spite\s+of|provided\s+that|notwithstanding|which|whereby|unless)\b/gi) || [];
        const hasComplexClauses = complexMatches.length >= 2;
        checks.push({
            label: 'Complex Subordinate Clauses (GRA)',
            passed: hasComplexClauses,
            note: hasComplexClauses ? `Verified (${complexMatches.length} complex clause structures)` : 'Use complex subordinate clauses ("Although...", "Whereas...", "Despite...") for Band 7.5+ GRA'
        });

        if (isChartTask) {
            const hasOverview = /\b(overall|in\s+summary|broadly\s+speaking|it\s+is\s+evident\s+that|it\s+is\s+clear\s+that)\b/i.test(text);
            const hasDataFigures = /(\d+\s*%|\bpercent\b|\bpercentage\b|\bdoubled\b|\bquarter\b|\bthird\b)/i.test(text);
            const hasPersonalOpinionTrap = /\b(i\s+think|in\s+my\s+opinion|i\s+believe|i\s+feel|personally)\b/i.test(text);

            checks.push({
                label: 'Academic Task 1 "Overall" Overview Paragraph (Band 7+ Gate)',
                passed: hasOverview,
                note: hasOverview ? 'Verified clear "Overall" overview statement' : 'CRITICAL: Missing "Overall," overview paragraph (Caps Task Achievement at Band 5.5!)'
            });
            checks.push({
                label: 'Specific Numerical Data / Percentage Comparisons',
                passed: hasDataFigures,
                note: hasDataFigures ? 'Substantiated with chart percentages/figures' : 'Cite specific percentages (%) from the chart to support comparisons'
            });
            checks.push({
                label: 'Zero Personal Opinion Rule (Task 1 Objectivity)',
                passed: !hasPersonalOpinionTrap && wc >= 20,
                note: hasPersonalOpinionTrap ? '❌ Used personal opinion ("I think/believe") in Task 1 Chart Report!' : 'Verified objective data reporting tone'
            });

            if (hasPersonalOpinionTrap) {
                const opMatch = text.match(/\b(i\s+think|in\s+my\s+opinion|i\s+believe|i\s+feel|personally)\b/i)[0];
                extraMistakes.push({
                    sectionNo: sec.secNo,
                    cat: '🚨 IELTS Task 1 Register Trap (Personal Opinion in Data Report)',
                    wrong: opMatch,
                    right: 'The chart indicates that / It is evident from the data that',
                    why: 'In IELTS Academic Writing Task 1, you must only report factual data from the chart. Never insert personal opinions ("I think" / "In my opinion").',
                    source: 'Cambridge IELTS Task 1 Gate'
                });
            }
        } else if (isGtLetter) {
            const hasDear = /dear\s+(sir|madam|mr|ms|mrs|director|manager|editor)/i.test(text);
            const isSirMadam = /dear\s+sir(\s+or\s+madam)?/i.test(text);
            const hasFaithfully = /yours\s+faithfully/i.test(text);
            const hasSincerely = /yours\s+sincerely/i.test(text);
            const signOffMismatch = isSirMadam && hasSincerely;

            checks.push({
                label: 'GT Letter Salutation & Sign-Off Convention',
                passed: hasDear && (hasFaithfully || hasSincerely) && !signOffMismatch,
                note: signOffMismatch
                    ? '❌ Mismatch: "Dear Sir/Madam" requires "Yours faithfully,", NOT "Yours sincerely,"!'
                    : (hasDear && (hasFaithfully || hasSincerely) ? 'Verified matching Salutation & Sign-Off' : 'Include formal "Dear ...," and "Yours faithfully/sincerely,"')
            });

            if (signOffMismatch) {
                extraMistakes.push({
                    sectionNo: sec.secNo,
                    cat: 'IELTS GT Letter Convention Error (Salutation vs Sign-Off)',
                    wrong: 'Dear Sir/Madam ... Yours sincerely',
                    right: 'Dear Sir or Madam, ... Yours faithfully,',
                    why: 'In British/IELTS letter conventions, when addressing an unnamed recipient ("Dear Sir or Madam,"), always sign off with "Yours faithfully,". Use "Yours sincerely," only with a named recipient ("Dear Mr. Sharma,").',
                    source: 'Cambridge GT Letter Rubric'
                });
            }
        } else {
            const hasClearThesis = /\b(believe|contend|argue|opinion|view|agree|disagree|outweigh|causes|solutions|conclude|conclusion)\b/i.test(text);
            checks.push({
                label: 'Clear Authorial Position & Conclusion (Task 2 TR)',
                passed: hasClearThesis,
                note: hasClearThesis ? 'Clear thesis position & conclusion detected' : 'State a clear position in your introduction and reinforce it in your conclusion'
            });
        }

        if (!text || langCheck.isMostlyHinglish) {
            return {
                secNo: sec.secNo,
                secTitle: sec.title,
                wordCount: wc,
                minWords: minReq,
                wordLimit: sec.wordLimit,
                maxMarks: 9.0,
                checks,
                extraMistakes,
                pillars: { taTr: 0.0, cc: 0.0, lr: 0.0, gra: 0.0 },
                sectionBand: 0.0,
                earnedMarks: '0.0',
                statusBanner: !text ? '❌ Task Not Attempted (Band 0.0)' : '🚨 Band 0.0: Written in Hinglish / Non-English instead of English.'
            };
        }

        if (relevance.isOffTopic) {
            const minimalBand = wc >= 20 ? 2.0 : 1.0;
            return {
                secNo: sec.secNo,
                secTitle: sec.title,
                wordCount: wc,
                minWords: minReq,
                wordLimit: sec.wordLimit,
                maxMarks: 9.0,
                checks,
                extraMistakes,
                pillars: { taTr: 1.0, cc: minimalBand, lr: minimalBand, gra: Math.max(1.0, 3.0 - secMistakesCount * 0.5) },
                sectionBand: 1.5,
                earnedMarks: '1.5',
                statusBanner: `🚨 OFF-TOPIC / MEMORIZED RESPONSE (${relevance.relevancePct}% Prompt Match) — Capped at Band 1.5`
            };
        }

        const lengthRatio = Math.min(1.0, wc / minReq);

        let taTrRaw = 4.5 + (relevance.relevancePct / 100) * 2.8 + (lengthRatio * 1.7);
        if (isChartTask && !/\boverall\b/i.test(text)) taTrRaw = Math.min(taTrRaw, 6.0);
        if (wc < minReq) taTrRaw -= (1.0 - lengthRatio) * 2.5;

        let ccRaw = 4.5 + (Math.min(1, paras / minParas) * 2.2) + (Math.min(1, uniqueLinkers / 4) * 2.3);
        if (wc < minReq * 0.6) ccRaw = Math.min(ccRaw, 5.0);

        const c1Words = (text.match(/\b(trajectory|proportion|substantial|proliferate|mitigate|paradigm|socio-economic|consequently|nevertheless|furthermore|infrastructure|decarbonization|indispensable|disparity|ramification|autonomous|sustainable|empiric|demographic|statutory)\b/gi) || []).length;
        let lrRaw = 5.5 + Math.min(3.5, c1Words * 0.45) - (secMistakesCount * 0.2);
        if (wc < minReq * 0.6) lrRaw = Math.min(lrRaw, 5.5);

        let graRaw = 6.0 + Math.min(3.0, complexMatches.length * 0.55) - (secMistakesCount * 0.45);
        if (wc < minReq * 0.6) graRaw = Math.min(graRaw, 5.5);

        const pillars = {
            taTr: roundToHalfBand(taTrRaw),
            cc: roundToHalfBand(ccRaw),
            lr: roundToHalfBand(lrRaw),
            gra: roundToHalfBand(graRaw)
        };

        const sectionBand = roundToHalfBand((pillars.taTr + pillars.cc + pillars.lr + pillars.gra) / 4);

        return {
            secNo: sec.secNo,
            secTitle: sec.title,
            wordCount: wc,
            minWords: minReq,
            wordLimit: sec.wordLimit,
            maxMarks: 9.0,
            checks,
            extraMistakes,
            pillars,
            sectionBand,
            earnedMarks: sectionBand.toFixed(1),
            statusBanner: `✅ Official Task ${sec.secNo} Band: ${sectionBand.toFixed(1)} / 9.0 (TA/TR: ${pillars.taTr.toFixed(1)} • CC: ${pillars.cc.toFixed(1)} • LR: ${pillars.lr.toFixed(1)} • GRA: ${pillars.gra.toFixed(1)})`
        };
    }

    // ------------------------------------------------------------------------
    // 6. INITIALIZE & HOOK SEAMLESSLY INTO SIMULATOR & BANKING ANALYZER
    // ------------------------------------------------------------------------
    function initIeltsIntegration() {
        if (typeof IELTS_SVG_CHARTS !== 'undefined' && Array.isArray(IELTS_SVG_CHARTS) && IELTS_SVG_CHARTS.length < 3) {
            IELTS_SVG_CHARTS.push(THIRD_IELTS_SVG_CHART);
        }

        if (typeof EXAM_PRESETS !== 'undefined') {
            Object.keys(IELTS_EXPANDED_PRESETS).forEach(examKey => {
                if (EXAM_PRESETS[examKey] && Array.isArray(EXAM_PRESETS[examKey].sections)) {
                    IELTS_EXPANDED_PRESETS[examKey].forEach((pairsArray, secIdx) => {
                        if (EXAM_PRESETS[examKey].sections[secIdx]) {
                            EXAM_PRESETS[examKey].sections[secIdx].questionPairs = pairsArray;
                        }
                    });
                }
            });
        }

        if (window.BankingAnalyzer && window.BankingAnalyzer.QUESTION_KNOWLEDGE_BASE) {
            Object.assign(window.BankingAnalyzer.QUESTION_KNOWLEDGE_BASE, IELTS_QUESTION_KNOWLEDGE_BASE);
        }

        if (window.BankingAnalyzer && !window.BankingAnalyzer._ieltsHybridHooked) {
            const prevEvaluate = window.BankingAnalyzer.evaluateBankingSubmission;

            window.BankingAnalyzer.evaluateBankingSubmission = async function (params) {
                const { examKey, preset, sectionsState } = params;
                const baseReport = await prevEvaluate.call(window.BankingAnalyzer, params);

                if (!preset || preset.category !== 'ielts') {
                    return baseReport;
                }

                let cloudIelts = null;
                let engineMode = 'OptiFile Cambridge CD-IELTS 4-Pillar + 5-Lakh Word Grammar Engine (v5.0)';

                if (window.location.protocol === 'http:' || window.location.protocol === 'https:') {
                    try {
                        const resp = await fetch('/api/ielts-evaluate', {
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
                                        minWords: s.minWords || 150,
                                        wordLimit: s.wordLimit || 350,
                                        userResponse: s.userResponse || ''
                                    };
                                })
                            })
                        });
                        if (resp.ok) {
                            const json = await resp.json();
                            if (json && json.success && json.analysis) {
                                cloudIelts = json.analysis;
                                engineMode = 'OptiFile Cloud Gemini AI + Cambridge CD-IELTS 4-Pillar Examiner';
                            }
                        }
                    } catch (e) {
                        // Uses built-in + LanguageTool hybrid engine
                    }
                }

                if (cloudIelts && Array.isArray(cloudIelts.grammarMistakes)) {
                    cloudIelts.grammarMistakes.forEach(cm => {
                        const exists = baseReport.mistakes.some(
                            m => m.wrong.toLowerCase().trim() === String(cm.wrong || '').toLowerCase().trim()
                        );
                        if (!exists && cm.wrong && cm.correct) {
                            baseReport.mistakes.push({
                                sectionNo: cm.sectionNo || 1,
                                cat: cm.category || 'Cambridge IELTS Grammar & Collocation Audit',
                                wrong: cm.wrong,
                                right: cm.correct,
                                why: cm.why,
                                source: 'Gemini IELTS AI Examiner'
                            });
                        }
                    });
                }

                baseReport.sectionAudits = sectionsState.map((sec, idx) => {
                    const prevAudit = baseReport.sectionAudits[idx] || {};
                    const text = (sec.userResponse || '').trim();
                    const rel = prevAudit.relevance || { relevancePct: 0, isOffTopic: true };
                    const langCheck = prevAudit.langCheck || { isMostlyHinglish: false, hinglishWords: [] };
                    const secMistakesCount = baseReport.mistakes.filter(m => m.sectionNo === sec.secNo).length;

                    const ieltsAudit = auditIeltsSection4Pillars(sec, text, examKey, rel, langCheck, secMistakesCount);

                    if (ieltsAudit.extraMistakes && ieltsAudit.extraMistakes.length > 0) {
                        ieltsAudit.extraMistakes.forEach(em => baseReport.mistakes.push(em));
                    }

                    return {
                        ...prevAudit,
                        ...ieltsAudit
                    };
                });

                let overallBand = 0.0;
                let aggPillars = { taTr: 0.0, cc: 0.0, lr: 0.0, gra: 0.0 };

                if (baseReport.sectionAudits.length === 2) {
                    const s1 = baseReport.sectionAudits[0];
                    const s2 = baseReport.sectionAudits[1];
                    if (s1.wordCount > 0 && s2.wordCount === 0) {
                        overallBand = roundToHalfBand(s1.sectionBand * 0.5);
                        aggPillars = s1.pillars;
                    } else if (s1.wordCount === 0 && s2.wordCount > 0) {
                        overallBand = roundToHalfBand(s2.sectionBand * 0.67);
                        aggPillars = s2.pillars;
                    } else {
                        overallBand = roundToHalfBand((s1.sectionBand + 2 * s2.sectionBand) / 3);
                        aggPillars = {
                            taTr: roundToHalfBand((s1.pillars.taTr + 2 * s2.pillars.taTr) / 3),
                            cc: roundToHalfBand((s1.pillars.cc + 2 * s2.pillars.cc) / 3),
                            lr: roundToHalfBand((s1.pillars.lr + 2 * s2.pillars.lr) / 3),
                            gra: roundToHalfBand((s1.pillars.gra + 2 * s2.pillars.gra) / 3)
                        };
                    }
                } else if (baseReport.sectionAudits.length === 1) {
                    const s1 = baseReport.sectionAudits[0];
                    overallBand = s1.sectionBand;
                    aggPillars = s1.pillars;
                }

                if (cloudIelts && typeof cloudIelts.overallBand === 'number' && overallBand > 1.5) {
                    overallBand = roundToHalfBand((overallBand + cloudIelts.overallBand) / 2);
                    if (cloudIelts.criteriaBands) {
                        aggPillars = {
                            taTr: roundToHalfBand((aggPillars.taTr + (cloudIelts.criteriaBands.taTr || aggPillars.taTr)) / 2),
                            cc: roundToHalfBand((aggPillars.cc + (cloudIelts.criteriaBands.cc || aggPillars.cc)) / 2),
                            lr: roundToHalfBand((aggPillars.lr + (cloudIelts.criteriaBands.lr || aggPillars.lr)) / 2),
                            gra: roundToHalfBand((aggPillars.gra + (cloudIelts.criteriaBands.gra || aggPillars.gra)) / 2)
                        };
                    }
                }

                const combinedText = sectionsState.map(s => s.userResponse || '').join('\n\n');
                IELTS_VOCAB_UPGRADES.forEach(u => {
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

                const cefr = getCefrBadge(overallBand);
                baseReport.finalScore = overallBand.toFixed(1);
                baseReport.engineMode = engineMode;
                baseReport.powerWords = IELTS_POWER_LEXICON[examKey] || IELTS_POWER_LEXICON['ielts-full'];

                const bandRewritesHtml = (cloudIelts && Array.isArray(cloudIelts.band6ToBand9Rewrites) && cloudIelts.band6ToBand9Rewrites.length > 0)
                    ? cloudIelts.band6ToBand9Rewrites.map(r => `
                        <div class="mt-2 p-2.5 rounded-xl bg-white border border-rose-200 text-xs">
                            <div><span class="text-rose-700 font-bold">Your Sentence:</span> <em>"${r.studentSentence}"</em></div>
                            <div class="mt-1"><span class="text-emerald-800 font-extrabold">✨ Band 9.0 Upgrade:</span> <strong>"${r.band9Rewrite}"</strong></div>
                            <div class="text-[10px] text-zinc-500 mt-0.5">${r.upgradeReason}</div>
                        </div>
                    `).join('')
                    : `<div class="mt-2 p-2.5 rounded-xl bg-white border border-rose-200 text-xs">
                           <div><span class="text-rose-700 font-bold">Band 6.0 Phrasing:</span> <em>"There was a big increase in renewable energy in India and many people think it is good."</em></div>
                           <div class="mt-1"><span class="text-emerald-800 font-extrabold">✨ Band 9.0 Upgrade:</span> <strong>"India witnessed a pronounced upward trajectory in renewable electricity generation, a transition widely regarded as indispensable for decarbonization."</strong></div>
                       </div>`;

                const fourPillarGridHtml = `
                    <div class="mt-2.5 pt-2.5 border-t border-rose-200/80">
                        <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <span class="font-extrabold text-[11px] uppercase tracking-wider text-rose-900">
                                🎯 Official 4-Pillar Cambridge IELTS Band Breakdown (1:2 Task Weighting)
                            </span>
                            <span class="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold border ${cefr.color}">
                                CEFR Level: ${cefr.label}
                            </span>
                        </div>
                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                            <div class="p-2 rounded-xl bg-white border border-zinc-200">
                                <div class="text-[10px] font-bold text-zinc-500">Task Achievement / Response</div>
                                <div class="font-mono-num text-lg font-extrabold text-rose-700">Band ${aggPillars.taTr.toFixed(1)}</div>
                            </div>
                            <div class="p-2 rounded-xl bg-white border border-zinc-200">
                                <div class="text-[10px] font-bold text-zinc-500">Coherence &amp; Cohesion</div>
                                <div class="font-mono-num text-lg font-extrabold text-rose-700">Band ${aggPillars.cc.toFixed(1)}</div>
                            </div>
                            <div class="p-2 rounded-xl bg-white border border-zinc-200">
                                <div class="text-[10px] font-bold text-zinc-500">Lexical Resource (C1/C2)</div>
                                <div class="font-mono-num text-lg font-extrabold text-rose-700">Band ${aggPillars.lr.toFixed(1)}</div>
                            </div>
                            <div class="p-2 rounded-xl bg-white border border-zinc-200">
                                <div class="text-[10px] font-bold text-zinc-500">Grammatical Range &amp; Accuracy</div>
                                <div class="font-mono-num text-lg font-extrabold text-rose-700">Band ${aggPillars.gra.toFixed(1)}</div>
                            </div>
                        </div>
                        ${bandRewritesHtml}
                    </div>
                `;

                const baseSummaryText = cloudIelts?.examinerSummary || baseReport.overallFeedback;
                baseReport.overallFeedback = baseSummaryText + fourPillarGridHtml;

                return baseReport;
            };

            window.BankingAnalyzer._ieltsHybridHooked = true;
        }
    }

    initIeltsIntegration();
    window.addEventListener('DOMContentLoaded', initIeltsIntegration);

    window.IeltsAnalyzer = {
        IELTS_EXPANDED_PRESETS,
        IELTS_QUESTION_KNOWLEDGE_BASE,
        IELTS_VOCAB_UPGRADES,
        IELTS_POWER_LEXICON
    };

})(window);
