
const rolePresets = [
  { value: "accountant", label: "Expert Accountant" },
  { value: "developer", label: "Skilled Software Developer" },
  { value: "teacher", label: "Seasoned Teacher" },
  { value: "sales_rep", label: "Accomplished Sales Representative" },
  { value: "project_manager", label: "Competent Project Manager" },
  { value: "layer", label: "Proficient Layer" },
  { value: "engineer", label: "Qualified Engineer" },
  { value: "architect", label: "Experienced Architect" },
  { value: "marketing_manager", label: "Competent Marketing Manager" },
  { value: "financial_analyst", label: "Knowledgeable Financial Analyst" },
  { value: "graphic_designer", label: "Creative Graphic Designer" },
  { value: "hr_manager", label: "Seasoned Human Resources Manager" },
  { value: "consultant", label: "Trusted Consultant" },
  { value: "doctor", label: "Skilled Doctor" },
  { value: "psychologist", label: "Licensed Psychologist" },
  { value: "researcher", label: "Dedicated Researcher" },
  { value: "data_analyst", label: "Analytical Data Analyst" },
  { value: "economist", label: "Astute Economist" },
  { value: "reporter", label: "Journalistic Reporter" },
  { value: "pharmacist", label: "Professional Pharmacist" },
  { value: "social_worker", label: "Compassionate Social Worker" },
  { value: "it_specialist", label: "Tech-savvy IT Specialist" },
  { value: "business_analyst", label: "Insightful Business Analyst" },
  { value: "operations_manager", label: "Seasoned Operations Manager" },
  { value: "event_planner", label: "Strategic Event Planner" },
  { value: "real_estate_agent", label: "Expert Real Estate Agent" },
  { value: "investment_banker", label: "Seasoned Investment Banker" },
  { value: "web_developer", label: "Proficient Web Developer" },
  { value: "fitness_trainer", label: "Certified Fitness Trainer" },
  { value: "executive_coach", label: "Professional Executive Coach" },
  { value: "scrum_master", label: "Agile Scrum Master" },
  { value: "cyber_security_analyst", label: "Cyber Security Analyst" },
  { value: "ux_researcher", label: "User Experience (UX) Researcher" },
  { value: "blockchain_developer", label: "Blockchain Developer" },
  { value: "ai_engineer", label: "Artificial Intelligence (AI) Engineer" },
  { value: "environmental_consultant", label: "Environmental Consultant" },
  { value: "data_privacy_officer", label: "Data Privacy Officer" },
  { value: "vr_developer", label: "Virtual Reality (VR) Developer" },
  { value: "ethical_hacker", label: "Ethical Hacker" },
]

const tasksVerbs = [
  'Adapt', 'Analyze', 'Automate', 'Calculate', 'Classify', 'Collaborate', 'Convert',
  'Customize', 'Debug', 'Design', 'Detect', 'Diagnose', 'Discover', 'Enhance',
  'Facilitate', 'Filter', 'Generate', 'Identify', 'Improve', 'Optimize', 'Personalize',
  'Predict', 'Rank', 'Recognise', 'Recommend', 'Simulate', 'Streamline', 'Summarize',
  'Track', 'Translate', 'Validate'
];
const tasksPresets = tasksVerbs.map(verb => ({ label: verb, value: verb }));

const outputVerbs = [ 'plain text', 'well structured format', 'JSON', 'CSV', 'HTML', 'XML', 'Markdown code', 'PDF']
const outputPresets = outputVerbs.map(verb => ({ label: verb, value: verb }));

export {
  rolePresets,
  tasksPresets,
  outputPresets
}