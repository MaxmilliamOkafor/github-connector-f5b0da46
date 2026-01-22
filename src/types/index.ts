// Job types
export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string | null;
  description: string | null;
  requirements: string[];
  platform: string | null;
  url: string | null;
  postedDate?: string;
  posted_date?: string;
  matchScore?: number;
  match_score?: number;
  status: 'new' | 'pending' | 'applied' | 'interviewing' | 'offered' | 'rejected';
  appliedAt?: string;
  applied_at?: string | null;
}

// User Profile types
export interface WorkExperience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  skills?: string[];
  bullets?: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
}

export interface Skill {
  name: string;
  years: number;
  category: 'technical' | 'tools' | 'soft';
}

export interface Language {
  name: string;
  proficiency: string;
}

export interface Achievement {
  title: string;
  issuer: string;
  date: string;
  description: string;
}

export interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  citizenship: string;
  linkedin: string;
  github: string;
  portfolio: string;
  currentSalary: string;
  expectedSalary: string;
  noticePeriod: string;
  totalExperience: string;
  highestEducation: string;
  willingToRelocate: boolean;
  drivingLicense: boolean;
  visaRequired: boolean;
  authorizedCountries: string[];
  veteranStatus: boolean;
  disability: boolean;
  raceEthnicity: string;
  securityClearance: boolean;
  coverLetter: string;
  workExperience: WorkExperience[];
  education: Education[];
  skills: Skill[];
  certifications: string[];
  languages: Language[];
  achievements: Achievement[];
  excludedCompanies: string[];
  atsStrategy: string;
}
