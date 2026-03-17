import Image from 'next/image';
import Link from 'next/link';

export type Student = {
  id: number;
  name: string;
  portfolio_link: string;
  tech_stack: string[];
  picture: string;
  bio: string;
};

// Mock data
export const students: Student[] = [
  {
    id: 1,
    name: 'Emma Johansson',
    portfolio_link: 'https://emma-dev.dev',
    tech_stack: ['Next.js', 'TypeScript', 'Tailwind'],
    picture: 'https://picsum.photos/id/10/200/300',
    bio: 'Frontend developer passionate about clean UI and smooth animations.',
  },
  {
    id: 2,
    name: 'Liam Andersson',
    portfolio_link: 'https://liamcodes.dev',
    tech_stack: ['Node.js', 'Express', 'MongoDB'],
    picture: 'https://picsum.photos/id/11/200/300',
    bio: 'Backend-focused developer who loves building scalable APIs.',
  },
  {
    id: 3,
    name: 'Sofia Nilsson',
    portfolio_link: 'https://sofia-ui.dev',
    tech_stack: ['React', 'Figma', 'CSS'],
    picture: 'https://picsum.photos/id/12/200/300',
    bio: 'UI/UX enthusiast blending design and frontend development.',
  },
  {
    id: 4,
    name: 'Noah Karlsson',
    portfolio_link: 'https://noahdev.dev',
    tech_stack: ['Next.js', 'GraphQL', 'PostgreSQL'],
    picture: 'https://picsum.photos/id/13/200/300',
    bio: 'Fullstack developer with a love for modern web architecture.',
  },
  {
    id: 5,
    name: 'Alice Eriksson',
    portfolio_link: 'https://alicecodes.dev',
    tech_stack: ['Vue', 'TypeScript', 'Firebase'],
    picture: 'https://picsum.photos/id/14/200/300',
    bio: 'Frontend dev exploring real-time apps and reactive UI.',
  },
  {
    id: 6,
    name: 'William Svensson',
    portfolio_link: 'https://william-dev.dev',
    tech_stack: ['Java', 'Spring Boot', 'MySQL'],
    picture: 'https://picsum.photos/id/15/200/300',
    bio: 'Backend engineer focused on robust and secure systems.',
  },
  {
    id: 7,
    name: 'Maja Lindberg',
    portfolio_link: 'https://maja.dev',
    tech_stack: ['Next.js', 'Tailwind', 'Framer Motion'],
    picture: 'https://picsum.photos/id/16/200/300',
    bio: 'Creative frontend dev building interactive experiences.',
  },
  {
    id: 8,
    name: 'Oliver Berg',
    portfolio_link: 'https://olivercode.dev',
    tech_stack: ['Python', 'Django', 'PostgreSQL'],
    picture: 'https://picsum.photos/id/17/200/300',
    bio: 'Fullstack dev who enjoys clean backend logic and APIs.',
  },
  {
    id: 9,
    name: 'Ella Gustafsson',
    portfolio_link: 'https://ella.dev',
    tech_stack: ['React', 'Redux', 'JavaScript'],
    picture: 'https://picsum.photos/id/18/200/300',
    bio: 'Frontend developer specializing in state management.',
  },
  {
    id: 10,
    name: 'Lucas Holm',
    portfolio_link: 'https://lucas.dev',
    tech_stack: ['Next.js', 'TypeScript', 'Prisma'],
    picture: 'https://picsum.photos/id/19/200/300',
    bio: 'Fullstack dev building modern web apps with Prisma.',
  },
  {
    id: 11,
    name: 'Hanna Dahl',
    portfolio_link: 'https://hanna.dev',
    tech_stack: ['Angular', 'TypeScript', 'RxJS'],
    picture: 'https://picsum.photos/id/20/200/300',
    bio: 'Frontend dev with strong experience in Angular ecosystems.',
  },
  {
    id: 12,
    name: 'Elias Norberg',
    portfolio_link: 'https://elias.dev',
    tech_stack: ['Go', 'Docker', 'Kubernetes'],
    picture: 'https://picsum.photos/id/21/200/300',
    bio: 'Backend developer interested in cloud-native systems.',
  },
  {
    id: 13,
    name: 'Sara Björk',
    portfolio_link: 'https://sara.dev',
    tech_stack: ['Next.js', 'Tailwind', 'Sanity'],
    picture: 'https://picsum.photos/id/22/200/300',
    bio: 'Frontend dev focused on headless CMS and content-driven apps.',
  },
  {
    id: 14,
    name: 'Anton Wikström',
    portfolio_link: 'https://anton.dev',
    tech_stack: ['C#', '.NET', 'SQL Server'],
    picture: 'https://picsum.photos/id/24/200/300',
    bio: 'Backend developer working with enterprise applications.',
  },
  {
    id: 15,
    name: 'Julia Sandberg',
    portfolio_link: 'https://julia.dev',
    tech_stack: ['React Native', 'Expo', 'Firebase'],
    picture: 'https://picsum.photos/id/25/200/300',
    bio: 'Mobile developer building cross-platform apps.',
  },
  {
    id: 16,
    name: 'Filip Ek',
    portfolio_link: 'https://filip.dev',
    tech_stack: ['Next.js', 'Node.js', 'MongoDB'],
    picture: 'https://picsum.photos/id/26/200/300',
    bio: 'Fullstack dev who enjoys building complete web platforms.',
  },
  {
    id: 17,
    name: 'Nora Lundqvist',
    portfolio_link: 'https://nora.dev',
    tech_stack: ['Svelte', 'TypeScript', 'CSS'],
    picture: 'https://picsum.photos/id/27/200/300',
    bio: 'Frontend developer exploring lightweight frameworks.',
  },
  {
    id: 18,
    name: 'Axel Pettersson',
    portfolio_link: 'https://axel.dev',
    tech_stack: ['Rust', 'WebAssembly', 'TypeScript'],
    picture: 'https://picsum.photos/id/28/200/300',
    bio: 'Systems-oriented dev bringing performance to the web.',
  },
  {
    id: 19,
    name: 'Ida Falk',
    portfolio_link: 'https://ida.dev',
    tech_stack: ['Next.js', 'GraphQL', 'Apollo'],
    picture: 'https://picsum.photos/id/29/200/300',
    bio: 'Frontend dev focused on GraphQL-powered apps.',
  },
  {
    id: 20,
    name: 'Viktor Lund',
    portfolio_link: 'https://viktor.dev',
    tech_stack: ['Python', 'FastAPI', 'PostgreSQL'],
    picture: 'https://picsum.photos/id/30/200/300',
    bio: 'Backend developer building fast APIs with Python.',
  },
];

export default function Home() {
  return (
    <main className="grid p-2 gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
      {/* STUDENTS */}
      {students.map((e) => (
        <div
          key={e.id}
          className="bg-linear-to-t from-[#0b4763] to-[#0e2b27] border border-white flex flex-col rounded-2xl"
        >
          <section className="flex gap-3 items-center px-2">
            {/* IMAGE */}
            <Image
              className="rounded-full shrink-0 object-cover border border-white h-22 w-22 m-2"
              src={e.picture}
              alt={e.name}
              width={100}
              height={100}
            />
            <div>
              {/* NAME */}
              <div className="font-bold text-xl">{e.name}</div>
              {/* LINK */}
              <Link className="text-blue-400 text-sm" target="_blank" href={e.portfolio_link}>
                {e.portfolio_link}
              </Link>
            </div>
          </section>
          {/* BIO */}
          <section className="p-2 pt-0 rounded-b-2xl">
            <p className=" my-2 mx-1 ">{e.bio}</p>
            {/* TECHSTACK */}
            <div className="flex flex-wrap gap-1">
              {e.tech_stack.map((tech) => (
                <span
                  key={tech}
                  className="bg-linear-to-t text-nowrap from-[#1fb8ff] to-[#27d6bf]  text-black border border-black px-2 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </div>
      ))}
    </main>
  );
}

/*
1. Klassens Portfölj-Hub
Skapa en gemensam landningssida för hela klassen eller gruppen där besökare kan klicka sig 
vidare till era individuella profiler/LinkedIn.

Fokus: Samordnad design och länkstruktur.
Teknisk utmaning: Skapa en snygg filtrering för olika kompetenser.
*/
