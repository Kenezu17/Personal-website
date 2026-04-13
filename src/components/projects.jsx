
const tanks = import.meta.glob('../assets/tanks/*.{jpg,png}', { eager: true });
const portfolio = import.meta.glob('../assets/portfolio/*.{jpg,png}', { eager: true });
const brewpos = import.meta.glob('../assets/Brewpos/*.{jpg, png}', {eager:true})
const weather = import.meta.glob('../assets/weather/*.{jpg,png}', {eager:true})
const todo = import.meta.glob('../assets/todolist/*.{jpg,png}', {eager:true})
const calcu = import.meta.glob('../assets/calculator/*.{jpg,png}', {eager:true})

function importAll(imgobj) {
  return Object.values(imgobj).map((mod) => mod.default || mod);
}

const tankimage = importAll(tanks)
const portfolioImg = importAll(portfolio)
const Brewpos = importAll(brewpos)
const Weathers = importAll(weather)
const todo_list = importAll(todo)
const calcualtor = import(calcu)
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
    github: "https://github.com/Kenezu17",
    demo: "https://github.com/Kenezu17/Personal-website",
  },
  {
    id: 2,
    title: "Tank destroyer",
    desc: "A 2D action game developed using python and pygame llibrary.The player control a tank and must eliminate enemy tanks until to  progeress through increasingly difficult levels.",
    tags: ["Python", "Pygame", 'Vscode'],
    badge: "game",
    badgeClass: "badge-tool",
    thumb: "purple",
    Image: tankimage[0],
    github: "https://github.com/Kenezu17",
    demo: "https://github.com/Kenezu17/Tank-Destroyer",
  },
  {
    id: 3,
    title: "Pos App",
    desc: "The all-in-one POS app for small coffee shop owners. Track your inventory with barcode scanning, monitor product sales, and get alerts when items are running low. Accept payments easily via GCash QR code, making transactions fast and convenient. Manage your shop efficiently and never worry about running out of stock.",
    tags: ["flutter", "Spring Boot", 'Android Studio', "IntelliJ" ],
    badge: "app",
    badgeClass: "badge-tool",
    thumb: "teal",
    Image: Brewpos,
    github: "https://github.com/Kenezu17",
    demo: "#",
  },
  {
    id: 4,
    title: "Weather ",
    desc: "Simple weather app",
    tags: ["React", "Tailwind", 'Vscode' ],
    badge: "app",
    badgeClass: "badge-tool",
    thumb: "teal",
    Image: Weathers,
    github: "https://github.com/Kenezu17",
    demo: "https://github.com/Kenezu17/weather-app",
  },
  {
    id: 5,
    title: "To Do web",
    desc: "Simple TO DO List ",
    tags: ["React", "Tailwind", 'Vscode' ],
    badge: "web",
    badgeClass: "badge-tool",
    thumb: "teal",
    Image: todo_list,
    github: "https://github.com/Kenezu17",
    demo: "https://github.com/Kenezu17/To-Do_List",
  },
   {
    id: 6,
    title: "Calculator web",
    desc: "Simple calculator ",
    tags: ["React", "Tailwind", 'Vscode' ],
    badge: "web",
    badgeClass: "badge-tool",
    thumb: "teal",
    Image: calcualtor,
    github: "https://github.com/Kenezu17",
    demo: "https://github.com/Kenezu17/calculator",
  }
  
];

export default projects