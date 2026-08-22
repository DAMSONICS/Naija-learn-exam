import type { Board, Subject, PastQuestion } from "@/types/curriculum";

export const BOARD_COLORS: Record<Board, string> = {
  WAEC: "bg-green-600 text-white",
  NECO: "bg-blue-600 text-white",
  JAMB: "bg-orange-500 text-white",
};

export const BOARD_LABELS: Record<Board, string> = {
  WAEC: "WAEC Learning Platform",
  NECO: "NECO Learning Platform",
  JAMB: "JAMB Learning Platform",
};

export const BOARD_DESCRIPTIONS: Record<Board, string> = {
  WAEC: "West African Senior School Certificate Examination — Full WASSCE syllabus coverage",
  NECO: "National Examinations Council SSCE/BECE — Complete curriculum guide",
  JAMB: "Joint Admissions & Matriculation Board — UTME e-Facility & CBT Practice",
};

export const PAST_QUESTIONS: PastQuestion[] = [
  // Mathematics
  { id: "math-1", question: "Simplify: 2x + 3y - x + 2y", options: ["x + 5y", "3x + 5y", "x + y", "2x + 3y"], correctIndex: 0, explanation: "Combine like terms: (2x - x) + (3y + 2y) = x + 5y", year: 2023, board: "WAEC" },
  { id: "math-2", question: "If log₁₀2 = 0.3010, find log₁₀8", options: ["0.9030", "0.6020", "1.2040", "0.4771"], correctIndex: 0, explanation: "log₁₀8 = log₁₀(2³) = 3 × log₁₀2 = 3 × 0.3010 = 0.9030", year: 2022, board: "WAEC" },
  { id: "math-3", question: "Evaluate: 5! / 3!", options: ["20", "10", "120", "60"], correctIndex: 0, explanation: "5!/3! = (5×4×3!)/3! = 5×4 = 20", year: 2023, board: "JAMB" },
  { id: "math-4", question: "Find the gradient of the line passing through (2,3) and (4,7)", options: ["2", "1/2", "4", "3"], correctIndex: 0, explanation: "Gradient = (7-3)/(4-2) = 4/2 = 2", year: 2021, board: "NECO" },
  // English
  { id: "eng-1", question: "Choose the option that best completes: 'The man, together with his children, ___ going to the park.'", options: ["is", "are", "were", "have been"], correctIndex: 0, explanation: "'Together with' does not change the subject. The singular subject 'man' takes 'is'.", year: 2023, board: "WAEC" },
  { id: "eng-2", question: "Which figure of speech is used: 'The wind whispered through the trees'?", options: ["Personification", "Simile", "Metaphor", "Hyperbole"], correctIndex: 0, explanation: "Wind cannot literally whisper — giving human quality to non-human thing = personification.", year: 2022, board: "WAEC" },
  { id: "eng-3", question: "Select the word closest in meaning to 'UBIQUITOUS':", options: ["Omnipresent", "Rare", "Unique", "Visible"], correctIndex: 0, explanation: "Ubiquitous means present everywhere, i.e., omnipresent.", year: 2023, board: "JAMB" },
  // Physics
  { id: "phy-1", question: "A body of mass 5kg moves at 10m/s. Its kinetic energy is:", options: ["250J", "500J", "100J", "50J"], correctIndex: 0, explanation: "KE = ½mv² = ½ × 5 × 100 = 250J", year: 2023, board: "WAEC" },
  { id: "phy-2", question: "The SI unit of electric current is:", options: ["Ampere", "Volt", "Ohm", "Watt"], correctIndex: 0, explanation: "Electric current is measured in Amperes (A).", year: 2022, board: "NECO" },
  { id: "phy-3", question: "Which electromagnetic wave has the shortest wavelength?", options: ["Gamma rays", "X-rays", "Ultraviolet", "Microwaves"], correctIndex: 0, explanation: "Gamma rays have the shortest wavelength and highest frequency in the EM spectrum.", year: 2023, board: "JAMB" },
  // Chemistry
  { id: "chem-1", question: "What is the IUPAC name of CH₃CH₂OH?", options: ["Ethanol", "Methanol", "Propanol", "Ethane"], correctIndex: 0, explanation: "CH₃CH₂OH is a 2-carbon alcohol → Ethanol.", year: 2023, board: "WAEC" },
  { id: "chem-2", question: "Which gas is evolved when zinc reacts with dilute HCl?", options: ["Hydrogen", "Chlorine", "Oxygen", "Zinc chloride vapour"], correctIndex: 0, explanation: "Zn + 2HCl → ZnCl₂ + H₂(g)", year: 2022, board: "NECO" },
  { id: "chem-3", question: "The process of coating iron with zinc is called:", options: ["Galvanization", "Anodizing", "Electroplating", "Smelting"], correctIndex: 0, explanation: "Galvanization protects iron from rust by coating with zinc.", year: 2023, board: "JAMB" },
  // Biology
  { id: "bio-1", question: "Which organelle is known as the powerhouse of the cell?", options: ["Mitochondria", "Ribosome", "Nucleus", "Golgi body"], correctIndex: 0, explanation: "Mitochondria produce ATP through cellular respiration.", year: 2023, board: "WAEC" },
  { id: "bio-2", question: "The basic unit of classification is:", options: ["Species", "Genus", "Family", "Order"], correctIndex: 0, explanation: "Species is the fundamental/basic unit of biological classification.", year: 2022, board: "NECO" },
  { id: "bio-3", question: "Which blood group is the universal donor?", options: ["O negative", "AB positive", "A positive", "B negative"], correctIndex: 0, explanation: "O negative lacks A, B, and Rh antigens, making it universally compatible.", year: 2023, board: "JAMB" },
  // Economics
  { id: "eco-1", question: "The law of demand states that, ceteris paribus:", options: ["Price and quantity demanded are inversely related", "Price and quantity demanded are directly related", "Demand increases with income only", "Supply determines price"], correctIndex: 0, explanation: "As price rises, quantity demanded falls (inverse relationship), all else equal.", year: 2023, board: "WAEC" },
  { id: "eco-2", question: "GDP stands for:", options: ["Gross Domestic Product", "General Domestic Price", "Growth Development Plan", "Government Direct Policy"], correctIndex: 0, explanation: "GDP = Gross Domestic Product, the total value of goods/services produced.", year: 2022, board: "NECO" },
  // Government
  { id: "gov-1", question: "The Nigerian Constitution of 1999 is based on the constitution of which year?", options: ["1979", "1960", "1963", "1992"], correctIndex: 0, explanation: "The 1999 Constitution is modelled on the 1979 Constitution.", year: 2023, board: "WAEC" },
  { id: "gov-2", question: "Which organ of government makes laws?", options: ["Legislature", "Executive", "Judiciary", "Council of State"], correctIndex: 0, explanation: "The Legislature (National Assembly/Senate + House of Reps) makes laws.", year: 2022, board: "JAMB" },
];

export const SUBJECTS: Subject[] = [
  // General / Compulsory
  {
    id: "english",
    name: "English Language",
    category: "General / Compulsory",
    boards: ["WAEC", "NECO", "JAMB"],
    units: [
      { id: "eng-u1", title: "Oral English & Phonetics", objectives: ["Master vowel and consonant sounds", "Understand stress and intonation patterns", "Apply schwa rule correctly"], topics: ["Vowel Sounds", "Consonant Sounds", "Stress Patterns", "Intonation", "Schwa Sound"] },
      { id: "eng-u2", title: "Comprehension & Summary", objectives: ["Develop skimming and scanning skills", "Identify main ideas and supporting details", "Write effective summaries within word limits"], topics: ["Reading Strategies", "Inference Skills", "Summary Writing Techniques", "Note-taking Methods"] },
      { id: "eng-u3", title: "Essay Writing", objectives: ["Structure essays with clear introduction, body, conclusion", "Use appropriate formal/informal register", "Apply varied sentence structures"], topics: ["Narrative Essays", "Argumentative Essays", "Descriptive Essays", "Letter Writing", "Report Writing"] },
      { id: "eng-u4", title: "Lexis & Structure", objectives: ["Master synonyms, antonyms, and homophones", "Apply grammar rules accurately", "Understand word formation processes"], topics: ["Synonyms & Antonyms", "Homophones & Homographs", "Word Formation", "Prepositions", "Conjunctions", "Tenses"] },
    ],
    formulaSheet: [],
  },
  {
    id: "civic",
    name: "Civic Education",
    category: "General / Compulsory",
    boards: ["WAEC", "NECO"],
    units: [
      { id: "civ-u1", title: "Citizenship & Rights", objectives: ["Define citizenship and its types", "Understand fundamental human rights", "Know civic responsibilities"], topics: ["Types of Citizenship", "Fundamental Human Rights", "Duties & Responsibilities", "National Values"] },
      { id: "civ-u2", title: "Governance & Democracy", objectives: ["Explain principles of democracy", "Understand separation of powers", "Analyse electoral processes"], topics: ["Principles of Democracy", "Separation of Powers", "Electoral System", "Political Parties"] },
    ],
    formulaSheet: [],
  },
  // Sciences & Tech
  {
    id: "mathematics",
    name: "Mathematics",
    category: "Sciences & Tech",
    boards: ["WAEC", "NECO", "JAMB"],
    units: [
      { id: "math-u1", title: "Algebra & Variations", objectives: ["Solve linear and quadratic equations", "Apply laws of indices", "Understand direct and inverse variations"], topics: ["Linear Equations", "Quadratic Equations", "Simultaneous Equations", "Laws of Indices", "Direct Variation", "Inverse Variation", "Partial Variation"] },
      { id: "math-u2", title: "Geometry & Trigonometry", objectives: ["Apply angle properties", "Use trigonometric ratios", "Calculate areas and volumes"], topics: ["Angles & Lines", "Triangles", "Polygons", "Circle Theorems", "Trigonometric Ratios", "Bearings", "Areas & Volumes"] },
      { id: "math-u3", title: "Statistics & Probability", objectives: ["Organise data using tables and graphs", "Calculate mean, median, mode", "Apply basic probability rules"], topics: ["Data Presentation", "Measures of Central Tendency", "Range & Standard Deviation", "Probability Rules", "Sample Spaces"] },
      { id: "math-u4", title: "Coordinate Geometry & Calculus", objectives: ["Find gradients and midpoints", "Derive equation of a line", "Apply basic differentiation and integration"], topics: ["Gradient & Midpoint", "Equation of a Line", "Parallel & Perpendicular Lines", "Differentiation Basics", "Integration Basics"] },
    ],
    formulaSheet: ["Area of triangle = ½bh", "Area of circle = πr²", "Volume of cylinder = πr²h", "Quadratic formula: x = (-b ± √(b²-4ac)) / 2a", "sin²θ + cos²θ = 1", "Distance = Speed × Time"],
  },
  {
    id: "physics",
    name: "Physics",
    category: "Sciences & Tech",
    boards: ["WAEC", "NECO", "JAMB"],
    units: [
      { id: "phy-u1", title: "Mechanics", objectives: ["Apply Newton's laws of motion", "Calculate work, energy, and power", "Understand circular motion"], topics: ["Scalars & Vectors", "Newton's Laws", "Work, Energy & Power", "Circular Motion", "Gravitation", "Equilibrium of Forces"] },
      { id: "phy-u2", title: "Waves & Optics", objectives: ["Describe wave properties", "Apply reflection and refraction laws", "Understand optical instruments"], topics: ["Wave Types & Properties", "Sound Waves", "Reflection of Light", "Refraction of Light", "Lenses & Mirrors", "Optical Instruments"] },
      { id: "phy-u3", title: "Electricity & Magnetism", objectives: ["Apply Ohm's law", "Calculate electrical power", "Understand magnetic fields"], topics: ["Electric Current", "Ohm's Law", "Electrical Circuits", "Electrical Power", "Magnetic Fields", "Electromagnetic Induction"] },
      { id: "phy-u4", title: "Modern Physics", objectives: ["Understand atomic structure", "Apply radioactivity concepts", "Know basic nuclear physics"], topics: ["Atomic Structure", "Radioactivity", "Nuclear Reactions", "Photoelectric Effect", "Quantum Theory Basics"] },
    ],
    formulaSheet: ["F = ma", "KE = ½mv²", "PE = mgh", "P = W/t", "V = IR", "P = IV", "v = fλ", "E = mc²"],
  },
  {
    id: "chemistry",
    name: "Chemistry",
    category: "Sciences & Tech",
    boards: ["WAEC", "NECO", "JAMB"],
    units: [
      { id: "chem-u1", title: "Chemical Combination & Stoichiometry", objectives: ["Apply Dalton's atomic theory", "Balance chemical equations", "Perform mole calculations"], topics: ["Laws of Chemical Combination", "Atomic Structure", "Balancing Equations", "Mole Concept", "Gas Laws", "Empirical & Molecular Formulae"] },
      { id: "chem-u2", title: "States of Matter & Mixtures", objectives: ["Describe solid, liquid, gas properties", "Apply gas laws", "Separate mixtures using appropriate methods"], topics: ["Kinetic Theory", "Gas Laws (Boyle, Charles, Ideal)", "Solutions & Concentration", "Crystallisation", "Distillation", "Chromatography"] },
      { id: "chem-u3", title: "Acids, Bases & Salts", objectives: ["Define acids, bases, salts", "Apply pH scale", "Perform titration calculations"], topics: ["Definitions & Properties", "pH Scale & Indicators", "Strong vs Weak Acids/Bases", "Titration", "Salt Preparation", "Hygroscopic & Deliquescent Substances"] },
      { id: "chem-u4", title: "Organic Chemistry", objectives: ["Name organic compounds using IUPAC", "Understand homologous series", "Describe reactions of hydrocarbons"], topics: ["Hydrocarbons (Alkanes, Alkenes, Alkynes)", "Functional Groups", "Alcohols & Carboxylic Acids", "Polymers", "Petroleum Products", "Isomerism"] },
    ],
    formulaSheet: ["n = m/M", "PV = nRT", "C₁V₁ = C₂V₂", "pH = -log[H⁺]", "Molarity = moles/volume(L)"],
  },
  {
    id: "biology",
    name: "Biology",
    category: "Sciences & Tech",
    boards: ["WAEC", "NECO", "JAMB"],
    units: [
      { id: "bio-u1", title: "Cell Biology", objectives: ["Identify cell organelles and functions", "Compare plant and animal cells", "Understand cell division"], topics: ["Cell Structure", "Plant vs Animal Cells", "Cell Division (Mitosis & Meiosis)", "Osmosis & Diffusion", "Enzymes"] },
      { id: "bio-u2", title: "Nutrition & Transport", objectives: ["Describe photosynthesis process", "Understand transport in plants and animals", "Know dietary requirements"], topics: ["Photosynthesis", "Respiration", "Transport in Plants", "Circulatory System", "Blood Groups", "Nutrition & Diet"] },
      { id: "bio-u3", title: "Classification & Ecology", objectives: ["Apply classification principles", "Understand ecosystems", "Analyse ecological relationships"], topics: ["Classification Systems", "Taxonomy", "Ecosystems", "Food Chains & Webs", "Energy Flow", "Pollution & Conservation"] },
      { id: "bio-u4", title: "Genetics & Evolution", objectives: ["Apply Mendelian genetics", "Understand variation and evolution", "Know DNA structure"], topics: ["Mendel's Laws", "DNA Structure", "Protein Synthesis", "Variation", "Evolution Theories", "Genetic Engineering"] },
    ],
    formulaSheet: [],
  },
  // Commercial & Business
  {
    id: "economics",
    name: "Economics",
    category: "Commercial & Business",
    boards: ["WAEC", "NECO", "JAMB"],
    units: [
      { id: "eco-u1", title: "Basic Economic Concepts", objectives: ["Define scarcity and choice", "Understand opportunity cost", "Apply law of demand and supply"], topics: ["Scarcity & Choice", "Opportunity Cost", "Law of Demand", "Law of Supply", "Market Equilibrium", "Elasticity"] },
      { id: "eco-u2", title: "Production & Cost", objectives: ["Understand factors of production", "Apply production functions", "Analyse cost concepts"], topics: ["Factors of Production", "Production Function", "Law of Diminishing Returns", "Fixed & Variable Costs", "Economies of Scale"] },
      { id: "eco-u3", title: "Money & Banking", objectives: ["Define money and its functions", "Understand banking systems", "Analyse monetary policy"], topics: ["Functions of Money", "Banking System", "Central Bank Functions", "Monetary Policy", "Inflation", "Foreign Exchange"] },
    ],
    formulaSheet: ["PED = %ΔQd / %ΔP", "YED = %ΔQd / %ΔIncome", "XED = %ΔQd of X / %ΔP of Y", "PS = TR - TC"],
  },
  {
    id: "commerce",
    name: "Commerce",
    category: "Commercial & Business",
    boards: ["WAEC", "NECO"],
    units: [
      { id: "com-u1", title: "Trade & Business", objectives: ["Distinguish between home and foreign trade", "Understand commercial services", "Analyse business organisations"], topics: ["Home Trade", "Foreign Trade", "Auxiliaries to Trade", "Business Organisations", "Partnership & Companies"] },
      { id: "com-u2", title: "Marketing & Consumer Rights", objectives: ["Apply marketing mix principles", "Understand consumer protection", "Analyse market research methods"], topics: ["Marketing Mix (4Ps)", "Market Research", "Consumer Rights", "Advertising", "Branding"] },
    ],
    formulaSheet: [],
  },
  {
    id: "accounting",
    name: "Accounting",
    category: "Commercial & Business",
    boards: ["WAEC", "NECO"],
    units: [
      { id: "acc-u1", title: "Bookkeeping Principles", objectives: ["Apply double-entry system", "Prepare trial balance", "Understand accounting equations"], topics: ["Accounting Equation", "Double Entry System", "Ledger Accounts", "Trial Balance", "Correction of Errors"] },
      { id: "acc-u2", title: "Financial Statements", objectives: ["Prepare final accounts", "Calculate gross profit and net profit", "Understand adjustments"], topics: ["Trading Account", "Profit & Loss Account", "Balance Sheet", "Adjustments", "Depreciation"] },
    ],
    formulaSheet: ["Assets = Liabilities + Capital", "Gross Profit = Sales - COGS", "Net Profit = GP - Expenses"],
  },
  // Arts & Humanities
  {
    id: "literature",
    name: "Literature in English",
    category: "Arts & Humanities",
    boards: ["WAEC", "NECO", "JAMB"],
    units: [
      { id: "lit-u1", title: "Literary Devices & Terms", objectives: ["Identify literary devices in texts", "Understand genre characteristics", "Analyse narrative techniques"], topics: ["Figures of Speech", "Narrative Techniques", "Genre Characteristics", "Theme & Symbolism", "Characterisation"] },
      { id: "lit-u2", title: "Prose Study", objectives: ["Analyse prose texts critically", "Understand plot development", "Evaluate character development"], topics: ["Plot Analysis", "Character Analysis", "Setting & Atmosphere", "Point of View", "Themes in Prose"] },
      { id: "lit-u3", title: "Poetry Study", objectives: ["Analyse poetic devices", "Understand tone and mood", "Interpret poetry themes"], topics: ["Poetic Devices", "Rhyme & Rhythm", "Tone & Mood", "Poetic Forms", "Interpretation"] },
      { id: "lit-u4", title: "Drama Study", objectives: ["Analyse dramatic structure", "Understand stage directions", "Evaluate dramatic conflict"], topics: ["Dramatic Structure", "Stage Directions", "Conflict & Resolution", "Dramatic Irony", "Tragedy & Comedy"] },
    ],
    formulaSheet: [],
  },
  {
    id: "government",
    name: "Government",
    category: "Arts & Humanities",
    boards: ["WAEC", "NECO", "JAMB"],
    units: [
      { id: "gov-u1", title: "Political Concepts", objectives: ["Define key political terms", "Understand ideologies", "Analyse political systems"], topics: ["State & Nation", "Sovereignty", "Democracy & Authoritarianism", "Political Ideologies", "Constitutionalism"] },
      { id: "gov-u2", title: "Nigerian Government", objectives: ["Understand Nigerian political structure", "Analyse the 1999 Constitution", "Know arms of government"], topics: ["Structure of Government", "1999 Constitution", "Executive Arm", "Legislative Arm", "Judicial Arm", "Federalism"] },
      { id: "gov-u3", title: "Political Parties & Elections", objectives: ["Understand political party systems", "Analyse electoral processes", "Know voting systems"], topics: ["Political Parties", "Electoral System", "Voting Systems", "Campaign Finance", "Electoral Commission"] },
    ],
    formulaSheet: [],
  },
  {
    id: "crk",
    name: "Christian Religious Knowledge",
    category: "Arts & Humanities",
    boards: ["WAEC", "NECO"],
    units: [
      { id: "crk-u1", title: "Old Testament Studies", objectives: ["Study creation and fall", "Understand patriarchal narratives", "Know prophetic messages"], topics: ["Creation & Fall", "The Patriarchs", "The Exodus", "The Prophets", "Kingdom Period"] },
      { id: "crk-u2", title: "New Testament Studies", objectives: ["Study life of Jesus Christ", "Understand early church", "Know Pauline epistles"], topics: ["Life of Jesus", "Ministry of Jesus", "Early Church", "Pauline Epistles", "Revelation"] },
    ],
    formulaSheet: [],
  },
  {
    id: "irs",
    name: "Islamic Religious Knowledge",
    category: "Arts & Humanities",
    boards: ["WAEC", "NECO"],
    units: [
      { id: "irs-u1", title: "Quranic Studies", objectives: ["Understand Quranic revelation", "Study major surahs", "Apply Quranic teachings"], topics: ["Revelation of Quran", "Major Surahs", "Quranic Teachings", "Tafsir Basics"] },
      { id: "irs-u2", title: "Hadith & Islamic History", objectives: ["Study major hadith collections", "Understand Islamic civilization", "Know Islamic jurisprudence"], topics: ["Hadith Collections", "Islamic Civilization", "Fiqh (Jurisprudence)", "Islamic Calendar"] },
    ],
    formulaSheet: [],
  },
  // Vocational & Technical
  {
    id: "agricultural",
    name: "Agricultural Science",
    category: "Vocational & Technical",
    boards: ["WAEC", "NECO"],
    units: [
      { id: "agr-u1", title: "Soil Science", objectives: ["Understand soil formation", "Classify soil types", "Apply soil conservation methods"], topics: ["Soil Formation", "Soil Profile", "Soil Types", "Soil Fertility", "Soil Conservation"] },
      { id: "agr-u2", title: "Crop Production", objectives: ["Understand crop cultivation", "Apply pest control methods", "Know crop improvement techniques"], topics: ["Crop Cultivation", "Pest & Disease Control", "Crop Improvement", "Harvesting & Storage"] },
    ],
    formulaSheet: [],
  },
  {
    id: "data_processing",
    name: "Data Processing",
    category: "Vocational & Technical",
    boards: ["WAEC", "NECO", "JAMB"],
    units: [
      { id: "dp-u1", title: "Computer Fundamentals", objectives: ["Understand computer systems", "Know input/output devices", "Understand number systems"], topics: ["Computer Definition & Types", "Input/Output Devices", "Storage Media", "Number Systems (Binary, Hex)", "CPU Architecture"] },
      { id: "dp-u2", title: "Software & Applications", objectives: ["Distinguish system and application software", "Use spreadsheet applications", "Understand databases"], topics: ["System Software", "Application Software", "Spreadsheets", "Databases", "Networking Basics"] },
    ],
    formulaSheet: [],
  },
];

export const CATEGORIES = Array.from(new Set(SUBJECTS.map((s) => s.category)));

export function getSubjectsForBoard(board: Board): Subject[] {
  return SUBJECTS.filter((s) => s.boards.includes(board));
}

export function getSubjectsByCategory(category: string): Subject[] {
  return SUBJECTS.filter((s) => s.category === category);
}

export function searchSubjects(query: string): Subject[] {
  const q = query.toLowerCase();
  return SUBJECTS.filter(
    (s) =>
      s.name.toLowerCase().includes(q) ||
      s.units.some((u) => u.title.toLowerCase().includes(q)) ||
      s.units.some((u) => u.topics.some((t) => t.toLowerCase().includes(q)))
  );
}