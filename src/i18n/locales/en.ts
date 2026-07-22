import type { Translation } from './pt';

const en: Translation = {
  meta: {
    title: 'RE-CALL Business & Services | Corporate Events',
    description:
      'Organization and production of corporate events, conferences, galas, product launches, workshops and tailored business experiences.',
  },
  nav: {
    home: 'Home',
    about: 'About Us',
    services: 'Services',
    portfolio: 'Portfolio',
    process: 'How We Work',
    video: 'Video',
    contact: 'Contact',
    cta: 'Request a Proposal',
  },
  hero: {
    slides: [
      {
        title: 'We turn ideas into memorable corporate experiences',
        description:
          'We plan, produce and deliver business events with excellence, creativity and attention to every detail.',
        primary: 'Request a Proposal',
        secondary: 'Discover Services',
      },
      {
        title: 'Events that strengthen brands and bring people closer',
        description:
          'We create strategic experiences that showcase your company identity and generate real impact with your audience.',
        primary: 'View Portfolio',
        secondary: 'Talk to Us',
      },
      {
        title: 'From planning to execution, we handle everything',
        description:
          'A team ready to manage every stage of your event with professionalism, innovation and results.',
        primary: 'How We Work',
        secondary: 'Request a Quote',
      },
    ],
    scrollHint: 'Scroll to discover',
  },
  about: {
    tag: 'About RE-CALL',
    title: 'We create experiences that leave a mark',
    text: 'RE-CALL Business & Services, Lda is a company specialized in designing, organizing and delivering corporate events. We work with creativity, strategy and operational rigor to turn every event into a unique experience, aligned with each client’s goals and identity.',
    cta: 'Discover RE-CALL',
    imageAlt: 'RE-CALL team coordinating a corporate event',
    stats: {
      events: 'Events delivered',
      clients: 'Clients served',
      partners: 'Strategic partners',
      years: 'Years of experience',
    },
  },
  services: {
    tag: 'Services',
    title: 'Services designed for every corporate moment',
    subtitle:
      'Complete, tailored solutions for every type of business event, from concept to execution.',
    more: 'Learn more',
    items: {
      conferences: {
        title: 'Conferences and Seminars',
        description: 'Full-scale organization of conferences and seminars with impact and technical rigor.',
      },
      congresses: {
        title: 'Congresses and Business Forums',
        description: 'Complete management of congresses and forums that bring together industry leaders.',
      },
      galas: {
        title: 'Galas and Corporate Dinners',
        description: 'Sophisticated celebration and networking moments with premium production.',
      },
      launches: {
        title: 'Product and Brand Launches',
        description: 'Memorable presentations that put your brand in the spotlight.',
      },
      workshops: {
        title: 'Workshops and Training',
        description: 'Dynamic, productive environments for learning and team development.',
      },
      teambuilding: {
        title: 'Team Building',
        description: 'Experiences that strengthen team spirit and organizational culture.',
      },
      institutional: {
        title: 'Institutional Ceremonies',
        description: 'Formal events conducted with protocol, elegance and precision.',
      },
      fairs: {
        title: 'Fairs and Exhibitions',
        description: 'Design and management of high-impact stands and exhibition spaces.',
      },
      audiovisual: {
        title: 'Audiovisual Production',
        description: 'Professional capture, streaming and production for the entire event.',
      },
      logistics: {
        title: 'Technical and Logistics Management',
        description: 'Complete technical coordination to ensure operational perfection.',
      },
      scenography: {
        title: 'Scenography and Decoration',
        description: 'Custom scenic environments aligned with your event identity.',
      },
      accreditation: {
        title: 'Guest Accreditation and Reception',
        description: 'Access management and reception with fluidity, elegance and full control.',
      },
    },
  },
  video: {
    tag: 'Institutional Video',
    title: 'Discover the RE-CALL experience',
    description:
      'See how we turn concepts into remarkable corporate events, combining planning, innovation, production and operational excellence.',
    placeholder: 'Institutional video coming soon. Add the file at public/assets/video-apresentacao-recall.mp4',
    mute: 'Unmute',
    unmute: 'Mute',
    play: 'Play',
    pause: 'Pause',
  },
  why: {
    tag: 'What Sets Us Apart',
    title: 'Why choose RE-CALL',
    subtitle: 'A complete partner to turn your event vision into reality.',
    items: {
      planning: { title: 'Strategic Planning', description: 'Every event starts with a clear strategy and well-defined goals.' },
      team: { title: 'Specialized Team', description: 'Experienced professionals dedicated to every detail of your project.' },
      custom: { title: 'Tailored Solutions', description: 'Every client is unique, and every event is designed to match.' },
      management: { title: 'Complete Event Management', description: 'From briefing to final evaluation, we take care of everything.' },
      creativity: { title: 'Creativity and Innovation', description: 'Original concepts that set your brand apart in the market.' },
      deadlines: { title: 'Commitment to Deadlines', description: 'Rigor and discipline to meet every stage of the schedule.' },
      network: { title: 'Partner Network', description: 'A solid network of trusted suppliers and partners.' },
      support: { title: 'End-to-End Support', description: 'Close support before, during and after the event.' },
    },
  },
  portfolio: {
    tag: 'Portfolio',
    title: 'Events that already tell our story',
    subtitle: 'A selection of projects that reflect our rigor, creativity and professionalism.',
    filters: {
      all: 'All',
      conferences: 'Conferences',
      galas: 'Galas',
      launches: 'Launches',
      workshops: 'Workshops',
      teambuilding: 'Team Building',
      institutional: 'Institutional',
    },
    viewAll: 'View all projects',
    close: 'Close',
  },
  process: {
    tag: 'Methodology',
    title: 'From concept to delivery',
    subtitle: 'A structured process that ensures consistency and excellence at every stage.',
    steps: {
      briefing: { title: 'Briefing and Needs Assessment', description: 'We understand the goals, audience and vision for your event.' },
      planning: { title: 'Strategic Planning', description: 'We define timeline, budget and detailed operational structure.' },
      concept: { title: 'Creative Concept', description: 'We develop the event’s creative identity and narrative.' },
      production: { title: 'Production and Logistics', description: 'We coordinate suppliers, venues and technical resources.' },
      execution: { title: 'Event Execution', description: 'We manage every moment with precision and full presence on-site.' },
      evaluation: { title: 'Evaluation and Follow-up', description: 'We analyze results and maintain post-event follow-up.' },
    },
  },
  testimonials: {
    tag: 'Testimonials',
    title: 'The trust of those who worked with us',
    subtitle: 'Real experiences from clients who trusted RE-CALL with their events.',
  },
  partners: {
    tag: 'Partners',
    title: 'Companies that trust RE-CALL',
  },
  form: {
    tag: 'Contact',
    title: 'Request Your Proposal',
    subtitle: 'Fill out the form and our team will get back to you within 24 hours.',
    fields: {
      name: 'Full name',
      company: 'Company',
      email: 'Email',
      phone: 'Phone',
      eventType: 'Event type',
      eventDate: 'Expected date',
      guests: 'Estimated number of attendees',
      location: 'Location',
      budget: 'Estimated budget',
      message: 'Message',
      privacy: 'I have read and accept the Privacy Policy',
    },
    eventTypes: {
      placeholder: 'Select the event type',
      conference: 'Conference / Seminar',
      congress: 'Congress / Forum',
      gala: 'Gala / Corporate Dinner',
      launch: 'Product Launch',
      workshop: 'Workshop / Training',
      teambuilding: 'Team Building',
      institutional: 'Institutional Ceremony',
      fair: 'Fair / Exhibition',
      other: 'Other',
    },
    submit: 'Request Proposal',
    submitting: 'Sending...',
    success: 'Request sent successfully! Our team will contact you shortly.',
    error: 'An error occurred while sending the form. Please try again.',
    errors: {
      required: 'This field is required',
      email: 'Enter a valid email address',
      phone: 'Enter a valid phone number',
      privacy: 'You must accept the privacy policy',
      minGuests: 'Enter a valid number of attendees',
    },
  },
  contact: {
    tag: 'Contact',
    title: "Let's plan your next event",
    subtitle: 'We are available to answer questions and prepare the ideal proposal for you.',
    address: 'Address',
    addressValue: 'Avenida de Portugal, Ingombota, Luanda, Angola',
    phone: 'Phone',
    phoneValue: '+244 921 483 399',
    whatsapp: 'WhatsApp',
    email: 'Email',
    emailValue: 'geral@recallcom.com',
    hours: 'Business Hours',
    hoursValue: 'Monday to Friday: 9:00 AM - 6:00 PM (placeholder)',
    social: 'Social Media',
    mapButton: 'View Location',
    quickForm: {
      title: 'Quick Contact',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
    },
  },
  whatsapp: {
    tooltip: 'Chat with us',
  },
  footer: {
    description:
      'Specialists in organizing and delivering corporate events, with creativity, strategy and operational rigor.',
    quickLinks: 'Quick Links',
    servicesTitle: 'Services',
    contactTitle: 'Contact',
    langTitle: 'Language',
    privacy: 'Privacy Policy',
    terms: 'Terms and Conditions',
    rights: '© 2026 RE-CALL Business & Services, Lda. All rights reserved.',
    backToTop: 'Back to top',
  },
  common: {
    loading: 'Loading...',
  },
};

export default en;
