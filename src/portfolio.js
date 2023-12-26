// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Manoj Kumar Thapa Portfolio",
  description:
    "I am a software engineer with industry experience building dynamic web applications. I have good knowledge of JavaScript. I also have experience working with React and Redux. I love designing websites.",
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
  nickname: "Software Engineer",
  subTitle:
    "I am a software engineer with industry experience building dynamic web applications. I have good knowledge of JavaScript. I also have experience working with React and Redux. I love designing websites.",
  resumeLink:
    "https://drive.google.com/file/d/1rNzNz7dQFRt_ssygpCQJDzbviAaEr9IX/view?usp=sharing",
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
      profileLink: "https://leetcode.com",
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
        "⚡ Graduated with 9.45 CGPA.",
        "⚡ Department 3rd topper and 2nd Nepali topper during graduation.",
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
      website_link: "https://www.manimukundacollege.edu.np",
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
    "I am a software engineer with industry experience. My expertise extends to a strong command of JavaScript, and I have successfully applied my skills to working with cutting-edge technologies such as React and Redux. Throughout my career, I have been a valuable asset to various evolving startups, contributing my talents as a ReactJS and frontend developer.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Programming and Computer Instructor",
          company: "Birgatha Saving and Credit Co-operative Society Ltd.",
          company_url: "#",
          logo_path: "birgatha_logo.png",
          duration: "May 2023 - October 2023",
          location: "Butwal, Nepal",
          description:
            "As a longstanding member of the Birgatha Savings and Credit Co-operative Society Ltd, I recognized an opportunity to contribute to our community in a unique way. I have taken on the role of a programming and computer instructor. I conducted tailored workshops and interactive sessions to provide computer and programming knowledge to both society members and students within our community.",
          color: "#09D15E",
        },
        {
          title: "Software Engineer",
          company: "Accenture",
          company_url: "https://www.accenture.com",
          logo_path: "accenture_logo.png",
          duration: "October 2021 - April 2023",
          location: "Bangalore, India",
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
            "During my full-stack developer internship at GUVI, I successfully undertook various responsibilities, including the creation of diverse templates such as banner design and resume design. I gained a comprehensive understanding of new ES6 features as well as concepts like callbacks, promises, async/await, and the fetch API. Additionally, I acquired proficiency in different DOM manipulation techniques and developed simple yet effective DOM templates like Pagination Design and HTML Form Design. Furthermore, I expanded my skill set to include the building of RESTful APIs and obtained a solid grasp of MongoDB. As a practical application of my knowledge, I successfully developed a web application capable of fetching market value prices from an API and storing the data in MongoDB.",
          color: "#09D15E",
        },
        {
          title: "Web Development Intern",
          company: "The Sparks Foundation",
          company_url: "https://www.thesparksfoundationsingapore.org",
          logo_path: "sparksfoundation_logo.png",
          duration: "October 2020 - November 2020",
          location: "Work From Home",
          description:
            "During my web developer internship, I actively contributed to the development of new user-facing features, emphasizing the creation of reusable code and libraries for future applications. I played a crucial role in ensuring the technical feasibility of MongoDB, Express.JS, and Node.JS within the projects. Additionally, I focused on optimizing applications for maximum speed and scalability and implemented robust validation processes to assure the integrity of all user inputs before submission to the backend.",
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
    "My projects make use of a vast variety of the latest technological tools. My best experience is creating full-stack web development projects, and I have also worked on machine learning and deep learning projects.",
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
      "I am available on almost every social media site. You can message me, and I will reply within 24 hours. I can help you with web development, React.JS, Node.JS, Express.JS, ML, and AI.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I specialize in crafting insightful technical articles focused on programming. With a keen understanding of complex concepts, my articles aim to provide clear and valuable insights for readers in the programming community.",
    link: "https://codes4real.netlify.app",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Butwal, Nepal",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/8i7v2ikBUBCXx3wn6",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+977 9807519618",
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
