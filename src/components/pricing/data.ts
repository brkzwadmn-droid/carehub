export type PlanId = "basic" | "professional" | "premium" | "custom";

export type Plan = {
  id: PlanId;
  name: string;
  description: string;
  annualPricePerUser: number;
  features: string[];
  plusLabel?: string;
  extraFeatures?: string[];
  cta: string;
  tagline: string;
  summary: string;
  summarySubtitle: string;
  highlighted?: boolean;
};

export const pricingPlans: Plan[] = [
  {
    id: "basic",
    name: "Basic",
    description: "For small agencies getting compliant and organized fast",
    annualPricePerUser: 8,
    features: [
      "Home Care Scheduling and Rostering",
      "EVV Timesheets",
      "EVV Verified Clock-ins with Audit Ready Records",
      "Admin Mobile App",
      "Staff Mobile App",
      "Offline EVV for Reliable Connectivity",
      "Shift Notes and Tasks",
      "Staff Onboarding and Documents",
      "Visit and EVV Reporting for Compliance",
      "Payroll and Accounting Integrations",
      "Multiple Tax Rate Support",
    ],
    cta: "Try Basic for Free",
    tagline: "Get compliant, reduce manual admin, and confidently run day to day operations",
    summary: "Basic",
    summarySubtitle: "For simple Scheduling and Notes",
  },
  {
    id: "professional",
    name: "Professional",
    description:
      "For HCBS, IDD, and private pay providers scaling staff, shifts, and services",
    annualPricePerUser: 13,
    plusLabel: "Everything in Basic, plus...",
    features: [
      "Claim Ready Invoicing and Billing",
      "Smart Staff and Client Matching",
      "Advertise Vacant Shifts",
      "Mileage and Travel Tracking",
      "Team Messaging",
      "Automated Document Expiry Reminders",
      "Staff Utilisation and Service Delivery Insights",
      "Advanced Operational Reports",
      "Built for Medicaid, HCBS, and Waiver Programs",
    ],
    cta: "Try Professional for Free",
    tagline: "Scale schedules and billing with fewer errors and better staff utilisation",
    summary: "Professional",
    summarySubtitle: "Ideal for Visit Verification",
  },
  {
    id: "premium",
    name: "Premium",
    description:
      "For Medicaid, HCBS, Regional Center and mixed funding providers managing complex authorizations",
    annualPricePerUser: 20,
    plusLabel: "Everything in Professional, plus...",
    features: [
      "Role Based Tasks for Care and Coordination Teams",
      "Care Plans and Goals Tracking",
      "Incidents and Risk Management",
      "Medication Tracking with eMAR",
      "Authorisations and Funding Balances with Alerts",
      "Family and Participant Portal",
      "Custom Program and State Forms",
      "Quotes and Service Agreements",
      "AI Generated Visit Summaries",
      "Multiple Facilities and Services",
    ],
    cta: "Try Premium for Free",
    tagline:
      "Protect revenue, reduce audit risk, and build confidence with families and funders",
    summary: "Premium",
    summarySubtitle: "Best for Advanced Scheduling",
    highlighted: true,
  },
  {
    id: "custom",
    name: "Custom Pricing",
    description:
      "For large providers and organizations operating across regions, programs, or brands",
    annualPricePerUser: 0,
    plusLabel: "Everything in Premium, plus...",
    features: [
      "Advanced Workforce Management",
      "Custom Pay Rules and Agreements",
      "Multi Entity Account Hierarchy",
      "Franchise and Group Configuration",
      "Single Sign On Security (SSO)",
      "Open API and Payroll, Billing, and EVV Integrations",
      "Guided Implementation Support",
      "Dedicated Customer Success Manager",
      "Priority Support Channels",
    ],
    cta: "Talk to an expert",
    tagline:
      "Operate at scale across programs with control, consistency, and enterprise grade governance",
    summary: "Custom Pricing",
    summarySubtitle: "Bespoke pricing for your unique requirements",
  },
];

export type FeatureAvailability = boolean | string;

export type ComparisonRow = {
  name: string;
  isNew?: boolean;
  hasInfo?: boolean;
  values: [FeatureAvailability, FeatureAvailability, FeatureAvailability, FeatureAvailability];
};

export type ComparisonCategory = {
  title: string;
  rows: ComparisonRow[];
};

export const comparisonCategories: ComparisonCategory[] = [
  {
    title: "Care & Client Management",
    rows: [
      { name: "Minimum Number of Staff", hasInfo: true, values: ["5 Staff", "5 Staff", "5 Staff", "50 Staff"] },
      { name: "Unlimited Clients", values: [true, true, true, true] },
      { name: "Client & Staff Profiles", values: [true, true, true, true] },
      { name: "Task Management & Notes", values: [true, true, true, true] },
      { name: "Custom Roles & Permissions", hasInfo: true, values: [true, true, true, true] },
      { name: "Offline Mode for Mobile Apps", values: [true, true, true, true] },
      { name: "Care Plans & Goals", isNew: true, values: [false, false, true, true] },
      { name: "Advanced Incident Management", values: [false, false, true, true] },
      { name: "eMAR Medication Tracking", isNew: true, values: [false, false, true, true] },
    ],
  },
  {
    title: "Rostering & Workforce Scheduling",
    rows: [
      { name: "Scheduler", hasInfo: true, values: [true, true, true, true] },
      { name: "Group Rosters", hasInfo: true, values: [true, true, true, true] },
      { name: "Support Worker App", hasInfo: true, values: [true, true, true, true] },
      { name: "Recurring Shifts", hasInfo: true, values: [true, true, true, true] },
      { name: "Break Time Tracking", isNew: true, values: [true, true, true, true] },
      { name: "Advertise Vacant shifts with Job Board", hasInfo: true, values: [false, true, true, true] },
      { name: "Smart Carer Matching", isNew: true, values: [false, true, true, true] },
      { name: "Drop-off Address", values: [false, true, true, true] },
      { name: "Plan & Publish Shifts", values: [false, false, true, true] },
      { name: "Shift Change Notifications (Client/Family)", isNew: true, values: [false, false, true, true] },
      { name: "Carer Attendance Management", hasInfo: true, values: [false, false, true, true] },
      { name: "Automated mileage verification", isNew: true, values: [false, false, true, true] },
      { name: "Shift Activity Log", values: [false, false, true, true] },
    ],
  },
  {
    title: "Team Management & Compliance",
    rows: [
      { name: "Manage Staff Availability", values: [true, true, true, true] },
      { name: "Document Management & Staff Uploads", hasInfo: true, values: [true, true, true, true] },
      { name: "Staff Onboarding & Bulk updates", isNew: true, values: [true, true, true, true] },
      { name: "Business Reporting", values: [false, true, true, true] },
      { name: "Real-time team insights", values: [false, true, true, true] },
      { name: "Activity Log & Audit Trails", isNew: true, hasInfo: true, values: [false, false, true, true] },
      { name: "Custom Forms", hasInfo: true, values: [false, false, true, true] },
      { name: "Leave Management", values: [false, false, false, true] },
      { name: "Franchise & Account Hierarchy", values: [false, false, false, true] },
      { name: "Franchise Group Configuration", values: [false, false, false, true] },
    ],
  },
  {
    title: "Timesheets, Payroll & Attendance",
    rows: [
      { name: "Hours, Expenses, Mileage & Allowances", values: [true, true, true, true] },
      { name: "Custom Timesheets (Notes, Tasks)", values: [true, true, true, true] },
      { name: "Integrations (Xero, QBO, Paychex, Viventium)", values: [true, true, true, true] },
      { name: "Easy Clock In & Clock Out (Geo Fenced)", values: [true, true, true, true] },
      { name: "Staff Timesheets in Mobile", isNew: true, values: [true, true, true, true] },
      { name: "Break Time Tracking", isNew: true, values: [false, false, true, true] },
      { name: "Late Clock In Notifications", hasInfo: true, values: [false, false, true, true] },
      { name: "Split Mileage & Verification", isNew: true, hasInfo: true, values: [false, false, true, true] },
      { name: "Client Signatures", hasInfo: true, values: [false, false, true, true] },
    ],
  },
  {
    title: "Invoicing, Compliance & Billing Automation",
    rows: [
      { name: "HubSpot Integration", isNew: true, values: [true, true, true, true] },
      { name: "Cost Centre Sync (Xero)", isNew: true, values: [true, true, true, true] },
      { name: "Medicaid compliant EVV submissions", isNew: true, values: [true, true, true, true] },
      { name: "Split Invoicing", isNew: true, values: [true, true, true, true] },
      { name: "Support for Single or Multiple Tax Rates", isNew: true, values: [true, true, true, true] },
      { name: "Bulk Invoicing & Claiming", values: [false, true, true, true] },
      { name: "Automated Invoice reminders", values: [false, true, true, true] },
      { name: "Accounting Integrations", values: [true, true, true, true] },
      { name: "Client Billing Records", values: [false, true, true, true] },
      { name: "Recurring Billing", values: [false, false, true, true] },
    ],
  },
  {
    title: "Communication & Engagement",
    rows: [
      { name: "In-App Notifications", values: [true, true, true, true] },
      { name: "Auto-Save Drafts", isNew: true, values: [true, true, true, true] },
      { name: "Team Messaging", isNew: true, hasInfo: true, values: [false, true, true, true] },
    ],
  },
  {
    title: "Support, Security & Integrations",
    rows: [
      { name: "Live Chat", values: [true, true, true, true] },
      { name: "Onboarding & Training", values: [true, true, true, true] },
      { name: "Free Webinars", values: [true, true, true, true] },
      { name: "Two-Factor Authentication", values: [true, true, true, true] },
      { name: "Multi-Account Login", values: [false, false, true, true] },
      { name: "Dedicated Account Manager*", hasInfo: true, values: [false, false, true, true] },
      { name: "24/7 Support (Chat, Email, & Phone)", values: [false, false, false, true] },
      { name: "Open API", values: [false, false, false, true] },
      { name: "Single Sign-On (SSO)", isNew: true, values: [false, false, false, true] },
      { name: "Custom Implementation", values: [false, false, false, true] },
    ],
  },
  {
    title: "Add-Ons",
    rows: [
      { name: "Family Portal", values: [false, false, true, true] },
      { name: "SMS", values: ["$0.05 /sms", "$0.05 /sms", "$0.05 /sms", "$0.05 /sms"] },
    ],
  },
];

export const pricingFaqs = [
  {
    question: "How do I start using ShiftCare?",
    answer:
      "Simply start your 7-day free trial. At the end of your trial, select the plan most suitable to your requirements and enter your payment information.",
  },
  { question: "What type of support will I receive and what hours are the support team available?" },
  { question: "Can I request training for my team?" },
  { question: "How secure is ShiftCare with data safety and backups?" },
  { question: "Do you charge additional fees per client added to the system?" },
  { question: "Can I download my data?" },
  { question: "What happens when I get more staff or someone leaves?" },
  { question: "What happens when one of my staff leaves?" },
  { question: "How will I be billed for ShiftCare's software and app?" },
  { question: "Is there a cost for sending emails or SMS messages?" },
  {
    question:
      "Do admin users/managers get charged and is everyone on the same subscription across the account?",
  },
  { question: "Is there a minimum cost to use ShiftCare?" },
  { question: "What is your refund policy?" },
  { question: "How much does ShiftCare cost?" },
  { question: "Is there a free trial?" },
  { question: "Are there setup fees?" },
  { question: "Can I cancel anytime?" },
  { question: "Does the price change based on team size?" },
];
