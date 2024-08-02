import { link } from "fs";

export const navItems = [
    { name: "About", link: "#about" },
    {name:"Socials",link:"#socials"},
    { name: "Projects", link: "#projects" },
    { name: "UX/UI", link: "#uxui" },
    {name:"Education", link:"#Education"},
    // { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className:"lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building CARTHAIR, An app designed to streamline customer management for salons.",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "CARTHAIR - A Salon Management App",
      des: "Simplify your customer mangaement experience with CartHair.",
      img: "/carthair.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
      link: "https://carthair.vercel.app",
    },     
    {
      id: 2,
      title: "A Next-js Dashboard",
      des: "Developed a Dashboard using the nextjs and react",
      img: "/opengraph-image.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/nextjs.svg"],
      link: "https://github.com/ruthvikthimmoji/nextjs-dashboard.git",
    },
    {
      id: 3,
      title: "A Netlix Clone Landing Page",
      des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
      img: "/image.png",
      iconLists: ["/re.svg", "/tail.svg", "/js.svg"],
      link: "https://github.com/ruthvikthimmoji/netflix_Landingpage.git",
    },
    // {
    //   id: 4,
    //   title: "Animated Apple Iphone 3D Website",
    //   des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    //   img: "/p4.svg",
    //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    //   link: "https://github.com/adrianhajdin/iphone",
    // },
  ];
  
  export const testimonials = [
    {
      quote:  "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    
  ];

  export const uxui = [
    {
      id: 1,
      title: "Rider App",
      des: "A modern ui of Rider App where it is for booking of the cab service",
      img: "/Rider-app.svg",
      iconLists: ["/figma.svg"],
      link: "",
    },
    {
      id: 2,
      title: "Dashboard for a Travel company",
      des: "his dashboard provides real-time insights, detailed analytics, and customizable reports to help travel agents and companies plan, monitor, and optimize their travel packages.",
      img: "/Rome.svg",
      iconLists: ["/figma.svg"],
      link: "",
    },
    {
      id: 3,
      title: "Dashboard ",
      des: "This dashboard provides real-time insights, detailed analytics, and customizable reports to help social media enagae and companies plan, monitor, and optimize their travel packages.",
      img: "/Dashboard.svg",
      iconLists: ["/figma.svg"],
      link: "",
    },
    {
      id: 4,
      title: "LMS ",
      des: "A New Learning Management System where user will get their personalised analytics and insights about their journey of learning.",
      img: "/Frame.svg",
      iconLists: ["/figma.svg"],
      link: "",
    },

  ];
  
  export const companies = [
    {
      id: 1,
      name: "Next.js",
      img: "/nextjs.svg",
      nameImg: "/nextjs-13.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const education = [
    {
      id: 1,
      title: "East West Institute of Technology",
      desc: "B.E in Computer Science, CGPA - 7.0",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "St.John's Pu Science college",
      desc: "12th PCMB , percentage - 81%",
      className: "md:col-span-2", 
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Sri Taralabalu Central school",
      desc: "10th in Central Board of Secondary Education, CGPA - 8.0",
      className: "md:col-span-2", 
      thumbnail: "/exp3.svg",
    },
    // {
    //   id: 4,
    //   title: "Lead Frontend Developer",
    //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
    //   className: "md:col-span-2",
    //   thumbnail: "/exp4.svg",
    // },
  ];

  export const certificates = [
    {

    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      url:'https://github.com/ruthvikthimmoji'
    },
    {
      id: 2,
      img: "/link.svg",
      url:'https://www.linkedin.com/in/ruthvik-thimmoji-200b1a216/'
    },
    {
      id: 3,
      img: "/phone.svg",
      url:'tel:+916361906550'
    },
  ];

  export const socials = [
    {
      id:1,
      url:'https://dev.to/ruthvik_thimmoji_6fde5e61',
      img:'/dev.svg'
    },
    {
      id:2,
      url:'https://www.behance.net/ruthvikthimmoji',
      img:'/behance.svg'
    },
    {
      id:3,
      url:'https://dribbble.com/ruthvik_p',
      img:'/dribble.svg'
    },
    {
      id:4,
      url:'https://github.com/ruthvikthimmoji',
      img:'/git.svg'
    },
    {
      id:4,
      url:'https://medium.com/@thimmojiruthvik',
      img:'/medium.svg'
    },
    {
      id:4,
      url:'https://www.leetcode.com/thimmojiruthvik/',
      img:'/leetcode.svg'
    },
    {
      id:4,
      url:'https://www.hackerrank.com/thimmojiruthvik',
      img:'/hackerank1.svg'
    },
  ]