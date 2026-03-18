import Image from "next/image";
import Link from "next/link";
import { getStudents } from "../lib/api/students";
import { Student } from "../types/student";

export default async function Home() {
	const students: Student[] = await getStudents();

	return (
		<main className="grid p-2 gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
			{/* STUDENTS */}
			{students.map((student) => (
				<div
					key={student.id}
					className="bg-linear-to-t from-[#0b4763] to-[#0e2b27] border border-white flex flex-col rounded-2xl"
				>
					<section className="flex gap-3 items-center px-2">
						{/* IMAGE */}
						{student.picture && (
							<Image
								className="rounded-full shrink-0 object-cover border border-white h-22 w-22 m-2"
								src={student.picture}
								alt={student.name}
								width={100}
								height={100}
							/>
						)}

						<div>
							{/* NAME */}
							<div className="font-bold text-xl">
								{student.name}
							</div>

							{/* LINK */}
							{student.portfolio_link && (
								<Link
									className="text-blue-400 text-sm"
									target="_blank"
									href={student.portfolio_link}
								>
									{student.portfolio_link}
								</Link>
							)}
						</div>
					</section>

					{/* BIO */}
					<section className="p-2 pt-0 rounded-b-2xl">
						{student.bio && (
							<p className=" my-2 mx-1 ">{student.bio}</p>
						)}

						{/* TECHSTACK */}
						<div className="flex flex-wrap gap-1">
							{student.tech_stack?.map((tech) => (
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
