export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  whatsapp: string;
  /** Empty until the owner supplies a real address; hidden when empty. */
  email: string;
  address: string;
  social: {
    /** Empty until the owner supplies real pages; hidden when empty. */
    facebook?: string;
    instagram?: string;
  };
  storefrontUrl: string;
}
