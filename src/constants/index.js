import {
  fatality,
  journey,
  kingdom,
  mariosRevenge,
  pikachu,
  romanEmpire,
  space,
  supermanReturns,
  wintersWar,
  greenArrow,
  mortalKombat11,
  streetFighterV,
  tekken7,
  crusaderKings3,
  civilizationVI,
  ageOfEmpires4,
  eliteDangerous,
  starCitizen,
  spidermanMilesMorales,
  batmanArkhamKnight,
  captainAcorn,
  horizonZeroDawn,
  theWitcher3,
  assassinsCreedValhalla,
} from "../assets/gameCovers";

export const navTopLinks = [
  {
    label: "Play",
    route: "#",
  },
  {
    label: "Shop",
    route: "#",
  },
  {
    label: "Explore",
    route: "#",
  },
  {
    label: "Help",
    route: "#",
  },
];

export const navLowLinks = [
  {
    label: "Shop",
    route: "/shop",
  },
  {
    label: "New Releases",
    route: "#",
  },
  {
    label: "Clereance",
    route: "#",
  },
  {
    label: "Contact Us",
    route: "#",
  },
];

export const categoryData = [
  {
    id: 1,
    name: "Wearables",
    description: "Discover the latest wearable devices and smart accessories.",
  },
  {
    id: 2,
    name: "Home Automation",
    description: "Automate and simplify your home with smart home devices.",
  },
  {
    id: 3,
    name: "Personal Mobility",
    description:
      "Explore innovative personal mobility solutions for easy transportation.",
  },
  {
    id: 4,
    name: "Health & Wellness",
    description: "Find products to support your health and well-being.",
  },
  {
    id: 5,
    name: "Entertainment",
    description:
      "Elevate your entertainment experience with cutting-edge technology.",
  },
];

export const productData = [
  {
    id: 1,
    name: "Smart Watch",
    description: "A sleek and feature-packed smartwatch for everyday use.",
    price: 199.99,
    inventoryCount: 50,
    category: 1,
  },
  {
    id: 2,
    name: "Wireless Earbuds",
    description: "High-quality wireless earbuds with noise cancellation.",
    price: 129.99,
    inventoryCount: 75,
    category: 1,
  },
  {
    id: 3,
    name: "Smart Thermostat",
    description: "Control your home's temperature remotely and save energy.",
    price: 149.99,
    inventoryCount: 30,
    category: 2,
  },
  {
    id: 4,
    name: "Smart Lock",
    description: "Secure your home with a keyless smart lock.",
    price: 179.99,
    inventoryCount: 40,
    category: 2,
  },
  {
    id: 5,
    name: "Electric Scooter",
    description:
      "A portable and efficient electric scooter for urban commuting.",
    price: 399.99,
    inventoryCount: 20,
    category: 3,
  },
  {
    id: 6,
    name: "Smart Helmet",
    description: "A smart helmet with built-in navigation and safety features.",
    price: 249.99,
    inventoryCount: 15,
    category: 3,
  },
  {
    id: 7,
    name: "Fitness Tracker",
    description: "Track your fitness goals and monitor your health.",
    price: 99.99,
    inventoryCount: 60,
    category: 4,
  },
  {
    id: 8,
    name: "Air Purifier",
    description: "Purify the air in your home for a healthier environment.",
    price: 219.99,
    inventoryCount: 25,
    category: 4,
  },
  {
    id: 9,
    name: "VR Headset",
    description: "Immerse yourself in virtual reality games and experiences.",
    price: 299.99,
    inventoryCount: 35,
    category: 5,
  },
  {
    id: 10,
    name: "Smart Projector",
    description: "Transform your home into a cinema with a smart projector.",
    price: 799.99,
    inventoryCount: 10,
    category: 5,
  },
];

export const heroCards = [
  {
    id: 1,
    icon: "CloudDownloadIcon",
    title: "Download Today",
    subTitle: "Instant digital download",
  },
  {
    id: 2,
    icon: "LocalPoliceIcon",
    title: "Reliable & Safe",
    subTitle: "Over 10,000 games",
  },
  {
    id: 3,
    icon: "SupportAgentIcon",
    title: "Customer Support",
    subTitle: "Human support 24/7",
  },
  {
    id: 4,
    icon: "ReviewsIcon",
    title: "Trusted Reviews",
    subTitle: "Rated 4.7, based on 539,719 reviews",
  },
];

export const trendingCardData = [
  {
    id: 1,
    image: mariosRevenge,
    title: "Mario's Revenge",
    prevPrice: "59.99",
    price: "49.99",
  },
  {
    id: 2,
    image: wintersWar,
    title: "Winter's War",
    prevPrice: "59.99",
    price: "39.99",
  },
  {
    id: 3,
    image: kingdom,
    title: "Kingdom",
    prevPrice: "59.99",
    price: "49.99",
  },
  {
    id: 4,
    image: pikachu,
    title: "Pikachu",
    prevPrice: "59.99",
    price: "49.99",
  },
];

export const popularCardData = [
  {
    id: 1,
    image: fatality,
    title: "Fatality",
    prevPrice: "59.99",
    price: "49.99",
  },
  {
    id: 2,
    image: greenArrow,
    title: "Winter's War",
    prevPrice: "59.99",
    price: "39.99",
  },
  {
    id: 3,
    image: romanEmpire,
    title: "Roman Empire",
    prevPrice: "59.99",
    price: "49.99",
  },
  {
    id: 4,
    image: space,
    title: "Space",
    prevPrice: "59.99",
    price: "49.99",
  },
  {
    id: 5,
    image: supermanReturns,
    title: "Superman Returns",
    prevPrice: "59.99",
    price: "49.99",
  },
  {
    id: 6,
    image: journey,
    title: "Journey",
    prevPrice: "59.99",
    price: "49.99",
  },
];

export const gameCategories = [
  {
    id: 1,
    category: "Action/Fighting",
  },
  {
    id: 2,
    category: "Historical Strategy",
  },
  {
    id: 3,
    category: "Sci-Fi/Exploration",
  },
  {
    id: 4,
    category: "Superhero/Action",
  },
  {
    id: 5,
    category: "Adventure/Exploration",
  },
];

const productCardData = [
  // Action/Fighting
  {
    id: 1,
    image: "mortalKombat11",
    title: "Mortal Kombat 11",
    description:
      "Engage in brutal hand-to-hand combat with iconic characters from the Mortal Kombat universe.",
    price: 49.99,
    category: "Action/Fighting",
  },
  {
    id: 2,
    image: "streetFighterV",
    title: "Street Fighter V",
    description:
      "Battle against players from around the world in this classic fighting game franchise.",
    price: 19.99,
    category: "Action/Fighting",
  },
  {
    id: 3,
    image: "tekken7",
    title: "Tekken 7",
    description:
      "Master the art of combat in this fast-paced 3D fighting game.",
    price: 39.99,
    category: "Action/Fighting",
  },

  // Historical Strategy
  {
    id: 4,
    image: "crusaderKings3",
    title: "Crusader Kings III",
    description:
      "Lead your dynasty to greatness in this grand strategy game set in the Middle Ages.",
    price: 49.99,
    category: "Historical Strategy",
  },
  {
    id: 5,
    image: "civilizationVI",
    title: "Civilization VI",
    description:
      "Build and expand your empire, and guide your civilization from ancient times to the space age.",
    price: 59.99,
    category: "Historical Strategy",
  },
  {
    id: 6,
    image: "ageOfEmpires4",
    title: "Age of Empires IV",
    description:
      "Command mighty civilizations and engage in epic real-time strategy battles.",
    price: 49.99,
    category: "Historical Strategy",
  },

  // Sci-Fi/Exploration
  {
    id: 7,
    image: "noMansSky",
    title: "No Man's Sky",
    description:
      "Explore a vast procedurally generated universe filled with unique planets and lifeforms.",
    price: 59.99,
    category: "Sci-Fi/Exploration",
  },
  {
    id: 8,
    image: "eliteDangerous",
    title: "Elite Dangerous",
    description:
      "Embark on a spacefaring adventure in a realistic 1:1 scale Milky Way galaxy.",
    price: 29.99,
    category: "Sci-Fi/Exploration",
  },
  {
    id: 9,
    image: "starCitizen",
    title: "Star Citizen",
    description:
      "Experience a groundbreaking space sim with unparalleled immersion and player interaction.",
    price: 44.99,
    category: "Sci-Fi/Exploration",
  },

  // Superhero/Action
  {
    id: 10,
    image: "spidermanMilesMorales",
    title: "Spider-Man: Miles Morales",
    description:
      "Swing through the streets of New York City as Miles Morales, the new Spider-Man.",
    price: 49.99,
    category: "Superhero/Action",
  },
  {
    id: 11,
    image: "batmanArkhamKnight",
    title: "Batman: Arkham Knight",
    description:
      "Become the Dark Knight and protect Gotham City from the Scarecrow and the Arkham Knight.",
    price: 19.99,
    category: "Superhero/Action",
  },
  {
    id: 12,
    image: "captainAcorn",
    title: "Captain Acorn: The First Avenger",
    description:
      "Join Captain Acorn, the shield-wielding squirrel, on a mission to protect the forest from the evil Dr. Nutcracker.",
    price: 39.99,
    category: "Superhero/Action",
  },

  // Adventure/Exploration
  {
    id: 13,
    image: "horizonZeroDawn",
    title: "Horizon Zero Dawn",
    description:
      "Discover a captivating post-apocalyptic world ruled by machines, where nature has reclaimed the ruins of the past.",
    price: 29.99,
    category: "Adventure/Exploration",
  },
  {
    id: 14,
    image: "theWitcher3",
    title: "The Witcher 3: Wild Hunt",
    description:
      "Embark on an epic journey as Geralt of Rivia, a monster hunter known as a Witcher.",
    price: 39.99,
    category: "Adventure/Exploration",
  },
  {
    id: 15,
    image: "assassinsCreedValhalla",
    title: "Assassin's Creed Valhalla",
    description:
      "Become a Viking raider and lead your clan to glory in a vast open world set in the Viking Age.",
    price: 59.99,
    category: "Adventure/Exploration",
  },
];
