import { getStudents } from '../lib/api/students';
import { Student } from '../types/student';
import Students from '../../components/students';

export default async function Home() {
  const students: Student[] = await getStudents();

  function gatherTechStack() {
    const set = new Set<string>();
    students.map((student) => {
      student.tech_stack?.forEach((tech) => {
        set.add(tech);
      });
    });
    return Array.from(set);
  }

  const techStack = gatherTechStack();

  return (
    <>
      <Students techStack={techStack} students={students} />
    </>
  );
}

/*
1. Klassens Portfölj-Hub
Skapa en gemensam landningssida för hela klassen eller gruppen där besökare kan klicka sig 
vidare till era individuella profiler/LinkedIn.

Fokus: Samordnad design och länkstruktur.
Teknisk utmaning: Skapa en snygg filtrering för olika kompetenser.
*/
