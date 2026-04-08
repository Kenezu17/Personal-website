
const tanks = import.meta.glob('../assets/tanks/*.{jpg,png}', { eager: true });
const portfolio = import.meta.glob('../assets/portfolio/*.{jpg,png}', { eager: true });

function importAll(imgobj) {
  return Object.values(imgobj).map((mod) => mod.default || mod);
}

const tankimage = importAll(tanks)
const portfolioImg = importAll(portfolio)

const projects = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    desc: "A fully responsive portfolio built with React and Tailwind CSS. Features smooth animations, dark theme, and sections for projects, skills, and contact.",
    tags: ["React", "Tailwind", "CSS", "Vite"],
    badge: "Web",
    badgeClass: "badge-web",
    thumb: "blue",
    Image: portfolioImg[0],
    featured: true,
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Tank destroyer",
    desc: "A 2D action game developed using python and pygame llibrary.The player control a tank and must eliminate enemy tanks until to  progeress through increasingly difficult levels.",
    tags: ["Python", "Pygame"],
    badge: "Tool",
    badgeClass: "badge-tool",
    thumb: "purple",
    Image: tankimage[0],
    github: "https://github.com/Kenezu17",
    demo: "https://github.com/Kenezu17/Tank-Destroyer",
  },
  {
    id: 3,
    title: "Network Monitor Dashboard",
    desc: "A dashboard for monitoring network device status, ping latency, and uptime across a local network.",
    tags: ["Python", "React", "Node.js"],
    badge: "Tool",
    badgeClass: "badge-tool",
    thumb: "teal",
    icon: "📊",
    github: "#",
    demo: "#",
  },
  
  
];

export default projects