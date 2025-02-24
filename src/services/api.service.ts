import axios from 'axios';
import type * as API from '../types/api.types';

const BASE_URL = process.env.REACT_APP_API_URL || 'https://api.recursivepareto.com';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const ApiService = {
  // Hero Section
  getHeroData: async (): Promise<API.ApiResponse<API.HeroData>> => {
    const response = await apiClient.get('/hero');
    return response.data;
  },

  // Services
  getServices: async (params?: API.QueryParams): Promise<API.ApiResponse<API.Service[]>> => {
    const response = await apiClient.get('/services', { params });
    return response.data;
  },

  // Projects
  getProjects: async (params?: API.QueryParams): Promise<API.ApiResponse<API.Project[]>> => {
    const response = await apiClient.get('/projects', { params });
    return response.data;
  },

  // Testimonials
  getTestimonials: async (params?: API.QueryParams): Promise<API.ApiResponse<API.Testimonial[]>> => {
    const response = await apiClient.get('/testimonials', { params });
    return response.data;
  },

  // Team Members
  getTeamMembers: async (params?: API.QueryParams): Promise<API.ApiResponse<API.TeamMember[]>> => {
    const response = await apiClient.get('/team', { params });
    return response.data;
  },

  // Career/Jobs
  getJobOpenings: async (params?: API.QueryParams): Promise<API.ApiResponse<API.JobOpening[]>> => {
    const response = await apiClient.get('/careers', { params });
    return response.data;
  },

  // Contact Form
  submitContactForm: async (data: API.ContactFormData): Promise<API.ApiResponse<void>> => {
    const response = await apiClient.post('/contact', data);
    return response.data;
  },

  // Company Info
  getCompanyInfo: async (): Promise<API.ApiResponse<API.CompanyInfo>> => {
    const response = await apiClient.get('/company');
    return response.data;
  },

  // Investors
  getInvestors: async (params?: API.QueryParams): Promise<API.ApiResponse<API.InvestorData[]>> => {
    const response = await apiClient.get('/investors', { params });
    return response.data;
  },
};

export default ApiService;
