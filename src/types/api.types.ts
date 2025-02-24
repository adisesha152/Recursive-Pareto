// Hero Section Data
export interface HeroData {
  tagline: string;
  title: string;
  description: string;
  heroImage: string;
}

// Core Services Data
export type CoreService = string;

// Service Section Data
export interface Service {
  title: string;
  description: string;
  icon: any;
}

// Project Data
export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
}

// Process Steps (from Index.tsx)
export interface ProcessStep {
  title: string;
  description: string;
  icon: any; // Lucide icon component type
}

// Testimonial Data
export interface Testimonial {
  quote: string;
  name: string;
  position: string;
  avatar: string;
}

// Benefits (from Index.tsx)
export interface Benefit {
  title: string;
  description: string;
  icon: any; // Lucide icon component type
}

// FAQ Items (from Index.tsx)
export interface FaqItem {
  question: string;
  answer: string;
}

// Team Member Data
export interface TeamMember {
  name: string;
  position: string;
  avatar: string;
}

// Career/Job Data
export interface JobOpening {
  title: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

// Key Investors (from Investors.tsx)
export interface Investor {
  name: string;
  role: string;
  investment: string;
  image: string;
  description: string;
}

// Metrics (from Investors.tsx)
export interface Metric {
  label: string;
  value: string;
  icon: any; // Lucide icon component type
}

// Contact Form Data
export interface ContactFormData {
  fullName: string;
  companyName?: string;
  businessEmail: string;
  phoneNumber: string;
  businessNeeds: string;
}

// Company Information
export interface CompanyInfo {
  name: string;
  logo: {
    light: string;
    dark: string;
  };
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
  };
  contact: {
    email: string;
    phone: string;
    socialMedia: {
      facebook?: string;
      twitter?: string;
      linkedin?: string;
      instagram?: string;
    };
  };
  about: {
    mission: string;
    vision: string;
    values: string[];
    founded: string;
    highlights: string[];
  };
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

// API Error
export interface ApiError {
  code: string;
  message: string;
  details?: any;
}

// Query Parameters
export interface QueryParams {
  page?: number;
  limit?: number;
  search?: string;
  sort?: string;
  filter?: Record<string, any>;
  include?: string[];
}
