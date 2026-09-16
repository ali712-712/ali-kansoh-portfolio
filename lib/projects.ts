export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  location: string;
  year: string;
  type: string;
  tools: string;
  cover?: string;
  assetPrefix?: string;
  pages: number[];
  description: string;
  thesis?: boolean;
};

const range = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, index) => start + index);

const hostedAssets = "https://alikansoh-architecture.alikanso725.chatgpt.site/assets";

export const portfolioProjects: Project[] = [
  {
    slug: "beneath-and-beyond",
    title: "Beneath and Beyond",
    subtitle: "Layers of Protection in Beirut",
    location: "Beirut, Lebanon",
    year: "2026",
    type: "Master's Thesis · Urban Regeneration",
    tools: "Rhino · Grasshopper · Ladybug · Karamba 3D · Adobe CC",
    cover: `${hostedAssets}/master/master-01.jpg`,
    assetPrefix: `${hostedAssets}/master/master`,
    pages: range(1, 25),
    thesis: true,
    description: "A vision for Beirut Port that responds to trauma, displacement and collective memory through spatial intelligence and human empathy. Layered slabs, protected inner worlds, public bridges, timber structures and planted levels rebuild not only the site, but relationships between the city, its ecology and its people.",
  },
  {
    slug: "la-calle-viva",
    title: "La Calle Viva",
    subtitle: "Reclaiming urban life through human-centred design",
    location: "Villaviciosa de Odón, Madrid",
    year: "2025",
    type: "Final Year Project · Living Infrastructure",
    tools: "Rhino · Grasshopper · Illustrator · Photoshop · InDesign",
    cover: "/assets/portfolio/page-06.jpg",
    pages: range(6, 23),
    description: "A new vocabulary for public space built through small, adaptable interventions. Rather than a single monumental gesture, the street becomes living infrastructure: inclusive, reconfigurable and open to changing seasons, social habits and community needs.",
  },
  {
    slug: "el-patio-verde",
    title: "El Patio Verde Vet Hub",
    subtitle: "A restorative model for animal care",
    location: "Alcobendas, Madrid",
    year: "2025",
    type: "Veterinary Hospital",
    tools: "Revit · Rhino · Grasshopper · Illustrator · Photoshop · InDesign",
    cover: "/assets/portfolio/page-24.jpg",
    pages: range(24, 37),
    description: "A veterinary hospital organized around landscape, daylight and calm circulation. The project treats the courtyard as a therapeutic centre, bringing nature into clinical spaces while carefully separating public, medical and service flows.",
  },
  {
    slug: "zurich-bloom-haus",
    title: "Zurich Bloom Haus",
    subtitle: "Integrated living for elderly residents and families",
    location: "Zurich, Switzerland",
    year: "2025",
    type: "Residential · Intergenerational Living",
    tools: "Rhino · Grasshopper · Illustrator · Photoshop · InDesign",
    cover: "/assets/portfolio/page-38.jpg",
    pages: range(38, 47),
    description: "A supportive residential community combining a robust concrete base, warm timber upper levels and a planted façade. Two clear circulation cores encourage autonomy and connection, creating a home where architecture and nature support everyday wellbeing.",
  },
  {
    slug: "acacia-edition",
    title: "The Acacia Edition",
    subtitle: "Savanna Swagger · Rooted in Maasai culture",
    location: "Nairobi, Kenya",
    year: "2024",
    type: "Community · Cultural Architecture",
    tools: "Rhino · Grasshopper · Illustrator · Photoshop · InDesign",
    cover: "/assets/portfolio/page-48.jpg",
    pages: range(48, 63),
    description: "A spatial tribute to Maasai culture and the ecological intelligence of the acacia tree. Its branching logic informs elevated platforms, structural supports and layered circulation, translating local rituals and environmental knowledge into a contemporary vertical community.",
  },
  {
    slug: "beam-me-up",
    title: "Beam Me Up",
    subtitle: "A hybrid hotel within an urban park",
    location: "Carabanchel, Madrid",
    year: "2023",
    type: "Urban Hotel Development",
    tools: "Rhino · Grasshopper · Lumion · Illustrator · Photoshop · InDesign",
    cover: "/assets/portfolio/page-64.jpg",
    pages: range(64, 75),
    description: "A hybrid hotel concept set within Carabanchel's urban fabric. The proposal explores movement, public programmes and elevated living, using the building as an active connector between the park and the city.",
  },
];

export const getProject = (slug: string) => portfolioProjects.find((project) => project.slug === slug);
