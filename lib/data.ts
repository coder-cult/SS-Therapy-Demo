export type Therapist = {
  id: string;
  name: string;
  credentials: string;
  years: number;
  rating: number;
  reviews: number;
  specialties: string[];
  modalities: string[];
  bio: string;
  availability: string;
  languages: string[];
  initials: string;
  color: string;
};

export const therapists: Therapist[] = [
  {
    id: "amara-whitfield",
    name: "Amara Whitfield",
    credentials: "LCSW",
    years: 9,
    rating: 4.9,
    reviews: 182,
    specialties: ["Anxiety", "Work stress", "Life transitions"],
    modalities: ["CBT", "Mindfulness"],
    bio: "I help busy professionals untangle anxious thinking and rebuild a sense of calm, one small practice at a time. My style is warm, direct, and practical.",
    availability: "Mon, Wed, Thu evenings",
    languages: ["English"],
    initials: "AW",
    color: "#2d9a76",
  },
  {
    id: "jordan-petrov",
    name: "Jordan Petrov",
    credentials: "LMFT",
    years: 12,
    rating: 4.8,
    reviews: 241,
    specialties: ["Couples", "Communication", "Trust"],
    modalities: ["Gottman", "Emotion-focused"],
    bio: "Couples find me when conversations keep ending the same way. Together we slow things down, listen under the words, and build a shared way forward.",
    availability: "Tue, Fri, Sat",
    languages: ["English", "Bulgarian"],
    initials: "JP",
    color: "#1f7c5f",
  },
  {
    id: "nia-okafor",
    name: "Nia Okafor",
    credentials: "PsyD",
    years: 7,
    rating: 4.9,
    reviews: 118,
    specialties: ["Depression", "Grief", "Identity"],
    modalities: ["ACT", "Narrative"],
    bio: "The heavy days don't have to be a dead end. I bring curiosity and patience to the stories we tell ourselves, and I'm not afraid of the quiet moments.",
    availability: "Mon–Fri daytime",
    languages: ["English"],
    initials: "NO",
    color: "#1a634d",
  },
  {
    id: "ethan-ramirez",
    name: "Ethan Ramirez",
    credentials: "LPC",
    years: 5,
    rating: 4.7,
    reviews: 76,
    specialties: ["Teens", "ADHD", "Self-esteem"],
    modalities: ["CBT", "Strengths-based"],
    bio: "Teens and young adults can feel talked at from every direction. In our sessions you get to be heard first — then we figure out what you actually want to try.",
    availability: "Wed, Thu, Sat",
    languages: ["English", "Spanish"],
    initials: "ER",
    color: "#4bb48e",
  },
  {
    id: "priya-sundaram",
    name: "Priya Sundaram",
    credentials: "LCSW",
    years: 14,
    rating: 5.0,
    reviews: 309,
    specialties: ["Trauma", "PTSD", "First responders"],
    modalities: ["EMDR", "Somatic"],
    bio: "You can heal from things that still feel too close. I move at your pace, and I trust the body as much as the story — because both carry the memory.",
    availability: "Mon, Tue, Thu",
    languages: ["English", "Tamil"],
    initials: "PS",
    color: "#184f3f",
  },
  {
    id: "marcus-abiola",
    name: "Marcus Abiola",
    credentials: "LMHC",
    years: 10,
    rating: 4.8,
    reviews: 164,
    specialties: ["Men's mental health", "Anger", "Fatherhood"],
    modalities: ["CBT", "ACT"],
    bio: "A lot of guys walk in saying \"I don't really do this.\" That's fine. We'll find language that fits you, and we won't waste time on anything that doesn't.",
    availability: "Mon, Wed, Fri evenings",
    languages: ["English"],
    initials: "MA",
    color: "#2d9a76",
  },
  {
    id: "sofia-lindqvist",
    name: "Sofia Lindqvist",
    credentials: "PhD",
    years: 16,
    rating: 4.9,
    reviews: 287,
    specialties: ["OCD", "Perfectionism", "Burnout"],
    modalities: ["ERP", "CBT"],
    bio: "Perfectionism promises safety and delivers exhaustion. We'll trade a few of its rules for ones that actually let you rest — and still get things done.",
    availability: "Tue, Wed, Thu",
    languages: ["English", "Swedish"],
    initials: "SL",
    color: "#1f7c5f",
  },
  {
    id: "daniel-cho",
    name: "Daniel Cho",
    credentials: "LMFT",
    years: 8,
    rating: 4.8,
    reviews: 142,
    specialties: ["LGBTQ+", "Family", "Coming out"],
    modalities: ["Narrative", "Family systems"],
    bio: "Identity isn't a crisis to resolve, it's a life to live. I offer a steady room for the hard family conversations and the private ones you've been holding alone.",
    availability: "Thu, Fri, Sat",
    languages: ["English", "Korean"],
    initials: "DC",
    color: "#1a634d",
  },
];

export const faqs = [
  {
    q: "How is online therapy different from meeting in person?",
    a: "The relationship with your therapist is the same — only the room changes. Most people find that video or messaging makes it easier to stay consistent, because sessions fit around work, caregiving, and travel instead of competing with them.",
  },
  {
    q: "Who are the therapists?",
    a: "Every therapist on the platform is independently licensed in the state where they practice, with a graduate degree and at least three years of post-licensure experience. We verify credentials before anyone joins and re-check them each year.",
  },
  {
    q: "What if I don't click with my therapist?",
    a: "That happens, and it's not a setback. Switching is a two-tap action from your dashboard, no awkward email required. Your notes and preferences move with you.",
  },
  {
    q: "Is this covered by insurance?",
    a: "We work out-of-network with most major carriers. After each session we generate a superbill you can submit for reimbursement, and we'll help you check your out-of-network benefits before you commit.",
  },
  {
    q: "Can I message my therapist between sessions?",
    a: "Yes. Every plan includes unlimited asynchronous messaging. Your therapist responds on the days you've agreed on together, usually within 24 hours during the work week.",
  },
  {
    q: "Is my information private?",
    a: "Sessions and messages are encrypted end-to-end. We never sell data, and nothing from your sessions is used to train anything. You can request a copy or deletion of your records at any time.",
  },
  {
    q: "What if I'm in crisis?",
    a: "This service isn't the right fit for an acute crisis. If you're in immediate danger, please call or text 988 in the US, or your local emergency number. Your therapist can also help you build a crisis plan during regular sessions.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes — plans are month-to-month, and canceling takes about thirty seconds. You keep access until the end of your billing cycle.",
  },
];

export const plans = [
  {
    name: "Messaging",
    price: 55,
    cadence: "/week",
    tagline: "For steady support between the bigger moments.",
    features: [
      "Unlimited messaging with your therapist",
      "Replies on agreed days, usually within 24h",
      "Guided journaling prompts",
      "Switch therapists anytime",
    ],
    cta: "Start messaging",
    featured: false,
  },
  {
    name: "Live + Messaging",
    price: 85,
    cadence: "/week",
    tagline: "Our most popular plan — the full experience.",
    features: [
      "Everything in Messaging",
      "One 45-minute live session each week",
      "Video, voice, or in-app chat",
      "Shared goals and progress notes",
    ],
    cta: "Get matched",
    featured: true,
  },
  {
    name: "Couples",
    price: 110,
    cadence: "/week",
    tagline: "Two people, one plan, one shared space to work.",
    features: [
      "Weekly 50-minute live couples session",
      "Shared messaging thread",
      "Individual check-ins when needed",
      "Specialized couples therapists",
    ],
    cta: "Start together",
    featured: false,
  },
];

export const stats = [
  { value: "35,000+", label: "licensed therapists" },
  { value: "4.8/5", label: "average session rating" },
  { value: "190+", label: "countries served" },
  { value: "24h", label: "typical response time" },
];

export const testimonials = [
  {
    name: "Rae K.",
    role: "Teacher · 6 months in",
    quote:
      "I'd put off therapy for years because I couldn't picture fitting it in. Having the first session on my couch after work made it feel possible instead of impossible.",
  },
  {
    name: "Diego M.",
    role: "New parent · 1 year in",
    quote:
      "Being able to message my therapist on the harder nights is what kept me going. By our live session we already had a running start.",
  },
  {
    name: "Hannah B.",
    role: "Nurse · 4 months in",
    quote:
      "After night shifts I just needed someone who could meet me where I was, not where my schedule should be. I found that here.",
  },
];
