import logo from './logo.svg';
// import logo_dark from './logo_dark.svg';
import cross_icon from './cross_icon.svg';
import menu_icon from './menu_icon.svg';
import star_icon from './star_icon.svg';
import left_arrow from './left_arrow.svg';
import right_arrow from './right_arrow.svg';
import header_img from './header_img.jpg';
import brand_img from './brand_img.png';

import project_img_1 from './Project_img_1.jpg';
import project_img_2 from './Project_img_2.jpg';
import project_img_3 from './Project_img_3.png';
import project_img_4 from './project_img_4.jpg';
import project_img_5 from './Project_img_5.jpg';
import project_img_6 from './Project_img_6.jpg';
import project_img_7 from './Project_img_7.jpg';

import profile_img_1 from './profile_img_1.png';
import profile_img_2 from './profile_img_2.png';
import profile_img_3 from './profile_img_3.png';
// import icon from './icon.svg';

import vidh1 from './vidh1.mp4'

export const assets = {
  logo,
  vidh1,
  // logo_dark,
  cross_icon,
  menu_icon,
  star_icon,
  header_img,
  brand_img,
  project_img_1,
  project_img_2,
  project_img_3,
  project_img_4,
  project_img_5,
  project_img_6,
  project_img_7,
  left_arrow,
  right_arrow,
};

export const portfolioData = [
  {
    title: "Feight Forwarding",
    image: project_img_1,
    text: "Coordination of cargo shipment from origin to destination via air, sea, or land, including documentation and logistics.",
  },
  {
    title: "Custom Clearance",
    image: project_img_2,
    text: "Handling legal and procedural formalities for goods at customs to ensure smooth import or export.",
  },
  {
    title: "DGFT / ICEGATE",
    image: project_img_3,
    text: "Assistance with DGFT (Directorate General of Foreign Trade) licensing and ICEGATE (Indian Customs Electronic Gateway) filings for export-import operations.",
  },
  {
    title: "Import / Export Counsultant",
    image: project_img_4,
    text: "Expert guidance on trade regulations, documentation, compliance, and strategy for global trade.",
  },
  {
    title: "Warehousing",
    image: project_img_5,
    text: "Safe storage of goods before distribution, often with inventory management and value-added services.",
  },
  {
    title: "Transportation",
    image: project_img_6,
    text: "Movement of goods by road, rail, air, or sea from one location to another.",
  },
  {
    title: "Courier Services",
    image: project_img_7,
    text: "Fast and secure delivery of parcels and documents, often with tracking and express options.",
  },
];

export const testimonialsData = [
  {
    name: "Donald Jackman",
    title: "Marketing Manager",
    image: profile_img_1,
    alt: "Portrait of Donald Jackman",
    rating: 5,
    text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
  },
  {
    name: "Richard Nelson",
    title: "Manager",
    image: profile_img_2,
    alt: "Portrait of Richard Nelson",
    rating: 4,
    text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
  },
  {
    name: "James Washington",
    title: "Co-Founder",
    image: profile_img_3,
    alt: "Portrait of James Washington",
    rating: 5,
    text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
  },
];

export const questionsAnswers = [
  {
    question: "How many team members can I invite?",
    answer:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  },
  {
    question: "What is the maximum file upload size?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    question: "How do I reset my password?",
    answer:
      `Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.`,
  },
  {
    question: "Can I cancel my subscription?",
    answer: `Yes! Send us a message and we’ll process your request no questions asked.`,
  },
  {
    question: "Do you provide additional support?",
    answer: `Chat and email support is available 24/7. Phone lines are open during normal business hours.`,
  },
];
