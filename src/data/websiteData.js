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
import image2 from '../images/2.jpeg'
import image3 from '../images/3.jpeg'
import image4 from '../images/4.jpeg'
import image5 from '../images/5.jpeg'
import birthChartVideo from '../images/From Klickpin.com- Handmade Card Ideas That Will Inspire You 84842-pin-id-971581319628306679.mp4'
import vastuVideo from '../images/From Klickpin.com- Handmade Card Ideas That Will Inspire You 84842-pin-id-94857135899160858.mp4'
import pujaVideo from '../images/From Klickpin.com- Handmade Card Ideas That Will Inspire You 84842-pin-id-883690758154734125.mp4'

export const siteConfig = {
  siteName: 'Sri Guru Raghavendra Astro Centre',
  shortName: 'Sri Guru Raghavendra',
  tagline: 'Authentic Vedic Astrology • Vastu • Spiritual Guidance',
  phone: '+91 63639 13202',
  // WhatsApp needs the number WITHOUT "+" or spaces, that's why it's separate:
  whatsappNumber: '916363913202',
  email: 'srigururaghavendraastro001@gmail.com',
  address: 'Sri Guru Raghavendra Astro Centre, Bengaluru, Karnataka, India',
  hours: 'Monday – Sunday, 9:00 AM – 8:00 PM',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.093014392857!2d77.39479159999999!3d13.093291299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae258840759251%3A0xd3ac31544253c551!2sSri%20Guru%20Raghavendra%20astro%20centre!5e0!3m2!1sen!2sin!4v1787740449197!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy ',
  socials: {
    instagram: 'https://www.instagram.com/sri_guru_raghavendra_astro?igsi=MTZpNGo1dGZ2ZHM1Ng==',
    facebook: 'https://www.facebook.com/share/1EQ5gvCQRW/',
    youtube: 'https://www.youtube.com/@SriGuruRaghavendraastrocentregit ',
    whatsapp: 'https://wa.me/916363913202',
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
  image: image4,
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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtALvm6qzTnasJzsP3m53WRwohty0YCd49CN54pn4IYQ&s=10 ',
    description: 'Birth chart analysis, planetary positions, timing (dasha) and personalized guidance based on classical Vedic texts.',
  },
  {
    title: 'Vastu Shastra',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_jI09sOANSW7OqfHm_uh7T26_0J5vqf62PsQugwLGuZT4VykJcPxwWHoP&s=10',
    description: 'Guidance for homes, offices, businesses and property layouts to bring balance and positive energy.',
  },
  {
    title: 'Spiritual Remedies',
    image: 'https://m.media-amazon.com/images/I/81HjGIwgwLL._UF1000,1000_QL80_.jpg ',
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
    title: 'How to Read Your Birth Chart',
    src: birthChartVideo,
  },
  {
    title: 'Vastu Principles for a Balanced Home',
    src: vastuVideo,
  },
  {
    title: 'Traditional Puja and Spiritual Remedies',
    src: pujaVideo,
  },
]

// ---- 12. GALLERY -----------------------------------------------------------------
export const galleryImages = [
  { alt: 'Astrology consultation session', src: image2 },
  { alt: 'Temple visit', src: image3 },
  { alt: 'Puja ceremony', src: image4 },
  { alt: 'Meditation session', src: image5 },
]

// ---- 13. PUJAS & RITUALS ----------------------------------------------------------
export const pujas = [
  { title: 'Ganapati Puja', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDC584D9UmfP_Iz8WXGvEaZPeeQw5jOvHwxgHVJoor5Q&s=10', description: 'Performed to remove obstacles and bring auspicious beginnings.' },
  { title: 'Navagraha Puja', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXGXeVIq7bHoj__YUNrPGhZ2hTgVsNkPh08UHIdW-utesr4qprROM-uGqK&s=10', description: 'Performed to balance the influence of the nine planets.' },
  { title: 'Maha Mrityunjaya Puja', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToW7T4PuCFFxsv7UeW7IB6C7DGmsRgHzdAepHArBnCmePGzIIy9fJRS2E&s=10', description: 'Performed for health, longevity and protection from difficulties.' },
  { title: 'Lakshmi Puja', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC5kNoZSlKugJ1TUNdT7RMSDix32dxQvOpPWwURFn4x_rnJQw4enO8TA8&s=10', description: 'Performed to invite prosperity and abundance into the home.' },
  { title: 'Durga Puja', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ssMpyh8pdjanmyt_KE_SSZCewuVFvASC9QgxGfzNni948IL8nKMefQY&s=10', description: 'Performed to seek strength, courage and protection.' },
  { title: 'Rudrabhishek', image: 'https://temple.yatradham.org/public/Product/puja-rituals/puja-rituals_59LUZYof_202503271645010.webp', description: 'A sacred ritual dedicated to Lord Shiva for peace and wellbeing.' },
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
