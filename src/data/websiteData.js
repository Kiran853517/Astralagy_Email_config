// =========================================================================
// websiteData.js
// -------------------------------------------------------------------------
// Every piece of "real content" for the site lives in this ONE file:
// text, phone numbers, image links, services, testimonials, FAQs, etc.
//
// WHY? Because it makes the site easy for a beginner to edit.
// If you want to change the phone number, or add a new service card,
// you only ever need to touch THIS file — never the component files.
// =========================================================================

// ---- 1. SITE-WIDE SETTINGS (change these first) -------------------------
export const siteConfig = {
  siteName: 'Sri Siddhi Vinayaka Astrology & Vastu Centre',
  shortName: 'Sri Siddhi Vinayaka',
  tagline: 'Authentic Vedic Astrology • Vastu • Spiritual Guidance',
  phone: '+91 90191 95095',
  // WhatsApp needs the number WITHOUT "+" or spaces, that's why it's separate:
  whatsappNumber: '919019195095',
  email: 'info@example.com',
  address: 'Sri Siddhi Vinayaka Astrology Centre, Bengaluru, Karnataka, India',
  hours: 'Monday – Sunday, 9:00 AM – 8:00 PM',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31112.32!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDAuNiJF!5e0!3m2!1sen!2sin!4v1620000000000',
  socials: {
    instagram: 'http://localhost:5173/',
    facebook: 'http://localhost:5173/',
    youtube: 'http://localhost:5173/',
    whatsapp: 'http://localhost:5173/',
  },
}

// ---- 2. HERO SECTION ------------------------------------------------------
export const heroContent = {
  heading: "Guidance for Life's Important Moments",
  subheading: 'Authentic Vedic Astrology, Vastu & Spiritual Guidance',
  description:
    'Receive personalized astrology consultation rooted in traditional Vedic wisdom — helping you navigate marriage, career, family and life decisions with clarity and confidence.',
  bgImage:
    'https://images.unsplash.com/photo-1507502707541-f369a3b18502?q=80&w=1740&auto=format&fit=crop',
}

// ---- 3. QUICK SERVICE CARDS (shown right below hero) ---------------------
// icon names below map to lucide-react icons imported inside QuickServices.jsx
export const quickServices = [
  {
    icon: 'HeartHandshake',
    title: 'Marriage & Relationship',
    description: 'Guidance for marriage compatibility and relationship concerns.',
  },
  {
    icon: 'Briefcase',
    title: 'Career & Finance',
    description: 'Astrological guidance for career and financial decisions.',
  },
  {
    icon: 'Users',
    title: 'Family Problems',
    description: 'Guidance for family harmony and personal relationships.',
  },
  {
    icon: 'Home',
    title: 'Vastu Consultation',
    description: 'Traditional Vastu guidance for home, office and business.',
  },
  {
    icon: 'ScrollText',
    title: 'Horoscope Reading',
    description: 'Personalized birth-chart and horoscope consultation.',
  },
]

// ---- 4. ABOUT SECTION ------------------------------------------------------
export const aboutContent = {
  heading: 'Trusted Vedic Guidance With Traditional Wisdom',
  image:
    'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop',
  paragraphs: [
    'With over 15 years of experience in Vedic astrology and Vastu Shastra, our centre offers guidance that blends ancient scriptures with a practical, modern understanding of everyday life.',
    'Every consultation is personalized — we study your birth chart in detail before offering remedies or advice, and every session is kept completely confidential.',
    'Consultations are available both online and in person, so you can seek guidance whether you are visiting our centre in Bengaluru or joining from anywhere in the world.',
  ],
  trustPoints: [
    'Personalized Consultation',
    'Traditional Vedic Methods',
    'Confidential Guidance',
    'Experienced Practitioner',
  ],
}

// ---- 5. STATS SECTION -------------------------------------------------------
export const stats = [
  { value: 15, suffix: '+', label: 'Years Experience' },
  { value: 10000, suffix: '+', label: 'Consultations' },
  { value: 8500, suffix: '+', label: 'Happy Clients' },
  { value: 20, suffix: '+', label: 'Specialized Services' },
]

// ---- 6. MAIN SERVICES SECTION -----------------------------------------------
export const services = [
  { icon: 'ScrollText', title: 'Horoscope Reading', description: 'In-depth analysis of your birth chart to understand life patterns and timing.' },
  { icon: 'HeartHandshake', title: 'Marriage Consultation', description: 'Compatibility and timing guidance for a harmonious married life.' },
  { icon: 'Heart', title: 'Love & Relationship Guidance', description: 'Astrological insight into relationship challenges and compatibility.' },
  { icon: 'Briefcase', title: 'Career & Business Guidance', description: 'Guidance on career direction, job changes and business decisions.' },
  { icon: 'Coins', title: 'Financial Guidance', description: 'Astrological perspective on financial growth and stability.' },
  { icon: 'Home', title: 'Vastu Consultation', description: 'Vastu review for homes, offices and commercial spaces.' },
  { icon: 'Users', title: 'Family Problem Guidance', description: 'Guidance to help restore peace and understanding within the family.' },
  { icon: 'GitCompare', title: 'Kundali Matching', description: 'Detailed matching of horoscopes for marriage alliances.' },
  { icon: 'ShieldAlert', title: 'Dosha Consultation', description: 'Identification and remedies for doshas such as Manglik or Kaal Sarp.' },
  { icon: 'Flame', title: 'Puja & Spiritual Remedies', description: 'Traditional pujas and remedies recommended based on your chart.' },
]

// ---- 7. EXPERTISE SECTION ----------------------------------------------------
export const expertise = [
  {
    title: 'Vedic Astrology',
    image: 'https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?q=80&w=1200&auto=format&fit=crop',
    description: 'Birth chart analysis, planetary positions, timing (dasha) and personalized guidance based on classical Vedic texts.',
  },
  {
    title: 'Vastu Shastra',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    description: 'Guidance for homes, offices, businesses and property layouts to bring balance and positive energy.',
  },
  {
    title: 'Spiritual Remedies',
    image: 'https://images.unsplash.com/photo-1604881991720-f91add269bed?q=80&w=1200&auto=format&fit=crop',
    description: 'Traditional prayers, pujas, meditation guidance and positive spiritual practices for wellbeing.',
  },
]

// ---- 8. WHY CHOOSE US ---------------------------------------------------------
export const whyChooseUs = [
  { icon: 'Award', title: 'Experienced Guidance', description: '15+ years of dedicated practice in Vedic astrology and Vastu.' },
  { icon: 'UserCheck', title: 'Personalized Consultation', description: 'Every session is tailored to your unique birth chart.' },
  { icon: 'BookOpen', title: 'Traditional Knowledge', description: 'Guidance rooted in classical Vedic scriptures and methods.' },
  { icon: 'Lock', title: 'Confidential Sessions', description: 'Your personal details and concerns stay strictly private.' },
  { icon: 'Video', title: 'Online Consultation', description: 'Connect with us from anywhere through video or phone.' },
  { icon: 'CheckCircle2', title: 'Practical Guidance', description: 'Clear, actionable advice rather than vague predictions.' },
]

// ---- 9. FAQ ---------------------------------------------------------------------
export const faqs = [
  {
    question: 'What is Vedic Astrology?',
    answer:
      'Vedic Astrology, or Jyotish, is a traditional Indian system of astrology that studies the positions of planets at the time of your birth to understand personality, life events and timing.',
  },
  {
    question: 'How does a horoscope consultation work?',
    answer:
      'We prepare your birth chart using your date, time and place of birth, then discuss the planetary influences relevant to your question during a one-on-one session.',
  },
  {
    question: 'What information is required for a consultation?',
    answer:
      'We typically need your full name, date of birth, exact time of birth and place of birth to prepare an accurate chart.',
  },
  {
    question: 'Can I consult online?',
    answer:
      'Yes, we offer consultations over video call or phone for clients who cannot visit the centre in person.',
  },
  {
    question: 'How long does a consultation take?',
    answer:
      'A typical consultation lasts between 30 to 60 minutes, depending on the complexity of the questions discussed.',
  },
  {
    question: 'What is Vastu consultation?',
    answer:
      'Vastu consultation involves reviewing the layout and direction of your home, office or property to suggest improvements based on Vastu Shastra principles.',
  },
  {
    question: 'Do I need to visit the centre?',
    answer:
      'It is not compulsory — many clients prefer online consultations, though in-person visits are welcome by appointment.',
  },
  {
    question: 'How can I book an appointment?',
    answer:
      'You can book directly through the "Book Consultation" button on this website, or contact us via phone or WhatsApp.',
  },
]

// ---- 10. TESTIMONIALS (sample placeholders — replace with real reviews) ----------
export const testimonials = [
  { name: 'Ramesh Kumar', location: 'Bengaluru', rating: 5, review: 'The consultation gave me real clarity about my career decisions. Very insightful and grounded advice.' },
  { name: 'Priya S.', location: 'Chennai', rating: 5, review: 'Helped us with kundali matching before our wedding. Explained everything patiently and clearly.' },
  { name: 'Anil Verma', location: 'Hyderabad', rating: 4, review: 'The Vastu suggestions for our new office were practical and easy to implement.' },
  { name: 'Lakshmi N.', location: 'Bengaluru', rating: 5, review: 'A calm, honest and detailed reading. I felt heard throughout the session.' },
  { name: 'Suresh Rao', location: 'Mysuru', rating: 5, review: 'Online consultation was smooth and just as personal as an in-person visit.' },
  { name: 'Deepa Iyer', location: 'Pune', rating: 4, review: 'Good guidance on family matters, offered with genuine care and traditional insight.' },
]

// ---- 11. VIDEO / WISDOM SECTION -------------------------------------------------
export const videos = [
  {
    title: 'Understanding Your Birth Chart',
    thumbnail: 'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Introduction to Vastu',
    thumbnail: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Importance of Spiritual Remedies',
    thumbnail: 'https://images.unsplash.com/photo-1518481852452-9415b262eba4?q=80&w=1200&auto=format&fit=crop',
  },
]

// ---- 12. GALLERY -----------------------------------------------------------------
export const galleryImages = [
  { alt: 'Astrology consultation session', src: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=800&auto=format&fit=crop' },
  { alt: 'Temple visit', src: 'https://images.unsplash.com/photo-1609951651556-5334e2706168?q=80&w=800&auto=format&fit=crop' },
  { alt: 'Puja ceremony', src: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop' },
  { alt: 'Meditation session', src: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop' },
  { alt: 'Spiritual ceremony', src: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=800&auto=format&fit=crop' },
  { alt: 'Guru guidance session', src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop' },
  { alt: 'Vastu consultation visit', src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop' },
  { alt: 'Devotional event', src: 'https://images.unsplash.com/photo-1571907480495-3c8b2a2c2b1f?q=80&w=800&auto=format&fit=crop' },
]

// ---- 13. PUJAS & RITUALS ----------------------------------------------------------
export const pujas = [
  { title: 'Ganapati Puja', image: 'https://images.unsplash.com/photo-1600691249779-ee42f6c2b1d2?q=80&w=800&auto=format&fit=crop', description: 'Performed to remove obstacles and bring auspicious beginnings.' },
  { title: 'Navagraha Puja', image: 'https://images.unsplash.com/photo-1604881991720-f91add269bed?q=80&w=800&auto=format&fit=crop', description: 'Performed to balance the influence of the nine planets.' },
  { title: 'Maha Mrityunjaya Puja', image: 'https://images.unsplash.com/photo-1609951651556-5334e2706168?q=80&w=800&auto=format&fit=crop', description: 'Performed for health, longevity and protection from difficulties.' },
  { title: 'Lakshmi Puja', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop', description: 'Performed to invite prosperity and abundance into the home.' },
  { title: 'Durga Puja', image: 'https://images.unsplash.com/photo-1567591414240-8a55f0a53f4a?q=80&w=800&auto=format&fit=crop', description: 'Performed to seek strength, courage and protection.' },
  { title: 'Rudrabhishek', image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=800&auto=format&fit=crop', description: 'A sacred ritual dedicated to Lord Shiva for peace and wellbeing.' },
]

// ---- 14. SERVICE OPTIONS FOR THE CONTACT FORM DROPDOWN -----------------------------
export const serviceOptions = [
  'Horoscope Reading',
  'Marriage Consultation',
  'Career & Business Guidance',
  'Vastu Consultation',
  'Kundali Matching',
  'Dosha Consultation',
  'Puja & Spiritual Remedies',
  'Other',
]
