// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Manoj Kumar Thapa Portfolio",
  description:
    "I am a Frontend Developer with industry experience building dynamic web applications. I have good knowledge of JavaScript. I also have experience working with React and Redux. I love designing websites.",
  og: {
    title: "Manoj Kumar Thapa Portfolio",
    type: "website",
    url: "https://manojkumarthapa.netlify.app",
  },
};

//Home Page
const greeting = {
  title: "Manoj Kumar Thapa",
  logo_name: "Manoj Kumar Thapa",
  nickname: "Software Developer",
  subTitle:
    "I am a Frontend Developer with industry experience building dynamic web applications. I have good knowledge of JavaScript. I also have experience working with React and Redux. I love designing websites.",
  resumeLink:
    "https://drive.google.com/file/d/1tBOvkcsNisJ2132b059T1L7v8FrnnAWz/view?usp=sharing",
  portfolio_repository: "https://github.com/Manoj-Thapa",
  githubProfile: "https://github.com/Manoj-Thapa",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Manoj-Thapa",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/manoj-kumar-thapa-7595a5168",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Blog",
    link: "https://codes4real.netlify.app",
    fontAwesomeIcon: "fas fa-blog",
    backgroundColor: "#1DA1F2",
  },
  {
    name: "Gmail",
    link: "mailto:thapam807@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React-Redux",
        "⚡ Creating application backend in Node, Express and MongoDB",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "logos:mongodb",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#402F14",
      },
      profileLink: "https://leetcode.com/Manoj-Thapa",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Dr. Ambedkar Institute of Technology, Bangalore",
      subtitle: "Bachelor of Engineering in Computer Science and Engineering",
      logo_path: "drait_logo.png",
      alt_name: "Dr. AIT, Bangalore",
      duration: "2017 - 2021",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Machine Learning, Data Science and Full Stack Development.",
        "⚡ Graduated with 9.45 CGPA",
      ],
      website_link: "https://www.drait.edu.in",
    },
    {
      title: "Manimukunda College/HSS",
      subtitle: "Class 12",
      logo_path: "mmc_logo.png",
      alt_name: "MMC, Butwal, Nepal",
      duration: "2015 - 2017",
      descriptions: [
        "⚡ I have studied Maths, Biology, Physics, Chemistry, English and Nepali.",
        "⚡ Awarded with Mahatma Gandhi Scholarship.",
        "⚡ Achieved 75.8%.",
      ],
      website_link: "https://www.facebook.com/manimukundacollegehssbutwal",
    },
    {
      title: "New Horizon Institute",
      subtitle: "Class 10",
      logo_path: "nhi_logo.png",
      alt_name: "NHI, Butwal, Nepal",
      duration: "2014 - 2015",
      descriptions: [
        "⚡ I have studied Comp. Maths, Physics, Social Studies, Opt. Maths, Nepali, English, HPE and Computer Science.",
        "⚡ Achieved 85.63%.",
      ],
      website_link: "https://newhorizon.edu.np",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/W29WV2DFL476",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/MLU4694ENBEL",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Convolutional Neural Networks",
      subtitle: "- GUVI Training",
      logo_path: "guvi_logo.png",
      certificate_link: "https://www.guvi.in/certificate?id=gfH250280A8ru61p75",
      alt_name: "guvi.in",
      color_code: "#0C9D5899",
    },
    {
      title: "JavaScript",
      subtitle: "- GUVI Training",
      logo_path: "guvi_logo.png",
      certificate_link:
        "https://www.guvi.in/verify-certificate?id=c1xSTag2216t88671R&course=javascript_en",
      alt_name: "guvi.in",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Visualization using Python",
      subtitle: "- Great Learning",
      logo_path: "greatlearning_logo.png",
      certificate_link:
        "https://olympus1.greatlearning.in/course_certificate/ZMICNLYY",
      alt_name: "Great Learning",
      color_code: "#1F70C199",
    },
    {
      title: "Data Visualization using Tableau",
      subtitle: "- Great Learning",
      logo_path: "greatlearning_logo.png",
      certificate_link:
        "https://olympus1.greatlearning.in/course_certificate/DLEKCAPR",
      alt_name: "Great Learning",
      color_code: "#1F70C199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "I am a Frontend Developer with industry experience building dynamic web applications. I have good knowledge of JavaScript. I also have experience working with React and Redux. I have worked with many evolving startups as ReactJS / Frontend Developer / Software Developer.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "ReactJS Developer",
          company: "Accenture",
          company_url: "https://www.accenture.com",
          logo_path: "accenture_logo.png",
          duration: "October 2021 - June 2022",
          location: "Bangalore, Karnataka",
          description:
            "My Role is to design multiple dynamic and browser-compatible pages using HTML5, CSS3, and Javascript (React, Redux) and produced multiple visual elements of web applications by translating UI/UX design wireframes into code, producing high-quality markup using HTML5 and CSS3.",
          color: "#A100FE",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Full Stack Developer Intern",
          company: "GUVI",
          company_url: "https://www.guvi.in",
          logo_path: "greenguvi_logo.png",
          duration: "April 2021 - October 2021",
          location: "Work From Home",
          description:
            "I worked on websites and software applications designing, building, and maintaining and also conferred with teams to resolve conflicts, prioritize needs, develop content criteria, or choose solutions. I determined the client's needs by analyzing technical requirements.",
          color: "#09D15E",
        },
        {
          title: "Web Development and Designing Intern",
          company: "The Sparks Foundation",
          company_url: "https://www.thesparksfoundationsingapore.org",
          logo_path: "sparksfoundation_logo.png",
          duration: "October 2020 - November 2020",
          location: "Work From Home",
          description:
            "I have developed new user-facing features with reusable code and libraries for future use. also Ensured the technical feasibility of MongoDB, ExpressJS, and NodeJS. I have also optimized applications for maximum speed and scalability and assured that all user input is validated before submitting to the back-end.",
          color: "#040404",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Full Stack Web Development projects and I have also worked on Machine Learning and Deep Learning projects.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "I have worked on and published a few research papers.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "manojkumarthapa.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Web Development, React.JS, Node.JS, Express.JS, ML and AI.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://codes4real.netlify.app",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Bangalore, Karnataka - 560056",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/bzj9WLgcMKj818UX9",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 9148055498",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
