export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  role: string;
  text: string;
  rating: number;
  initial: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface TrustItem {
  icon: string;
  label: string;
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  errandType: string;
  location: string;
  date: string;
  description: string;
}
