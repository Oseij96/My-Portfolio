export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
  credentialUrl?: string;
}

export const certificates: Certificate[] = [
  {
    id: "1",
    title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    issuer: "Oracle",
    date: "2025",
    imageUrl:
      "/certificates/oracle-oci-foundations.jpg",
    credentialUrl:
      "https://catalog-education.oracle.com/pls/certview/sharebadge?id=CBED80E0A36C4414DF4E4A382138284999C81FAB1B9A1833FFD3425FA677E118",
  },

  {
    id: "2",
    title: "Oracle Data Platform 2025 Certified Foundations Associate",
    issuer: "Oracle",
    date: "2025",
    imageUrl:
      "https://res.cloudinary.com/dexuebsgh/image/upload/v1780007839/APEX%20apps/Oracle_Data_Foundation_Certificate_nqoqup.png",
    credentialUrl:
      "https://catalog-education.oracle.com/pls/certview/sharebadge?id=58A83D850773A5949ADC23FF96F6952A650CBCE745C9080094679C3B823178FB",
  },

  {
    id: "3",
    title: "The Web Development Bootcamp",
    issuer: "Udemy",
    date: "July 2023",
    imageUrl:
      "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    credentialUrl:
      "https://www.udemy.com/certificate/UC-02a8ffc5-49e2-4073-bf93-d33e3c9a4151/",
  },

  {
    id: "4",
    title: "The Ultimate MySQL Bootcamp: Go from SQL Beginner to Expert",
    issuer: "Udemy",
    date: "April 2025",
    imageUrl:
      "https://images.pexels.com/photos/325111/pexels-photo-325111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    credentialUrl:
      "https://www.udemy.com/certificate/UC-8c4325f0-5fcd-4349-b298-f8c5a9bf7f7e/",
  },

  {
    id: "5",
    title: "Website Development Foundations Certification",
    issuer: "Staff Skills Academy+",
    date: "April 2025",
    imageUrl:
      "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    credentialUrl:
      "https://staff-skills-training.beta.staffskillstraining.co.uk/certificate",
  },
];
