// Static content configuration for MAWARIDNA documentation

export const content = {
  siteName: "MAWARIDNA Documentation",
  description: "Complete documentation for MAWARIDNA HR Management System",

  // Navigation structure
  navigation: [
    {
      group: "Getting Started",
      links: [{ title: "Dashboard", slug: "dashboard" }],
    },
    {
      group: "Recruitment & Hiring",
      links: [
        { title: "Recruitment", slug: "recruitment" },
        { title: "Onboarding", slug: "onboarding" },
      ],
    },
    {
      group: "Employee Management",
      links: [
        { title: "Employee", slug: "employee" },
        { title: "Attendance", slug: "attendance" },
        { title: "Leave", slug: "leave" },
      ],
    },
    {
      group: "Payroll & Performance",
      links: [
        { title: "Payroll", slug: "payroll" },
        { title: "Performance", slug: "performance" },
      ],
    },
    {
      group: "Exit & Assets",
      links: [
        { title: "Offboarding", slug: "offboarding" },
        { title: "Assets", slug: "assets" },
      ],
    },
  ],

  // Page metadata
  pages: {
    dashboard: {
      title: "Dashboard",
      description: "Overview of the MAWARIDNA dashboard and its features",
      sections: [],
    },
    recruitment: {
      title: "Recruitment",
      description: "Complete recruitment management system",
      sections: [],
    },
    onboarding: {
      title: "Onboarding",
      description: "Employee onboarding process and management",
      sections: [],
    },
    employee: {
      title: "Employee",
      description: "Employee profile and management",
      sections: [],
    },
    attendance: {
      title: "Attendance",
      description: "Attendance tracking and management",
      sections: [],
    },
    leave: {
      title: "Leave",
      description: "Leave management system",
      sections: [],
    },
    payroll: {
      title: "Payroll",
      description: "Payroll processing and management",
      sections: [],
    },
    performance: {
      title: "Performance",
      description: "Performance management and reviews",
      sections: [],
    },
    offboarding: {
      title: "Offboarding",
      description: "Employee exit process management",
      sections: [],
    },
    assets: {
      title: "Assets",
      description: "Asset management and tracking",
      sections: [],
    },
  },
};

export const ProductionSlug = "mawaridna";
