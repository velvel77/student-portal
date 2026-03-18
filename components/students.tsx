'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Student } from '../src/types/student';
import { useState } from 'react';
import { Users } from 'lucide-react';

interface headerProps {
  techStack: string[];
  students: Student[];
}

export default function Students({ students, techStack }: headerProps) {
  const [selectTech, setSelectedTech] = useState('');
  const filtered = selectTech ? students.filter((student) => student.tech_stack?.includes(selectTech)) : students;
  // bg-linear-to-t from-[#026694] to-[#276961]
  return (
    <>
      <header className="bg-[#16161d] p-4 mb-4">
        <h1 className="text-3xl font-bold mb-2">
          Search{' '}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#33beff] to-[#19ffe4]">Talent</span>
        </h1>
        <p className=" max-w-[40vw]">
          Connect with top-tier technical experts across the globe. Find your next collaborator.
        </p>
        <div className="flex flex-col my-2">
          <div className="flex text-xl items-center">
            <Users className="size-4 text-[#33beff]" />
            <span>{students.length}</span>
            <small className="text-xs px-2">Active Experts</small>
          </div>
          <div className="flex pt-4 max-w-90">
            <label htmlFor="techSelect" className="pr-4">
              Sort by skillset
            </label>
            <select
              onChange={(e) => setSelectedTech(e.target.value)}
              className="bg-black text-white"
              name="skill"
              id="techSelect"
            >
              <option value={''}>All</option>
              {techStack.sort().map((tech, index) => (
                <option key={index} value={tech}>
                  {tech}
                </option>
              ))}
            </select>
          </div>
        </div>
      </header>

      <main className="grid px-4 gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
        {/* STUDENTS */}
        {filtered.map((student) => (
          <div
            key={student.id}
            className="bg-[#16161d] hover:shadow-blue-300 hover:shadow-[0_0_10px_rgba(255,255,255,0.1)] inset-shadow-fuchsia-800 transition-all duration-300 border border-white flex flex-col rounded-2xl"
          >
            <section className="flex gap-3 items-center px-2">
              {/* IMAGE */}
              {student.picture && (
                <Image
                  className="rounded-2xl shrink-0 object-cover border border-white h-22 w-22 m-2 mt-4"
                  src={student.picture}
                  alt={student.name}
                  width={100}
                  height={100}
                />
              )}

              <div>
                {/* NAME */}
                <div className="font-bold text-xl">{student.name}</div>

                {/* LINK */}
                {student.portfolio_link && (
                  <Link className="text-blue-400 text-sm" target="_blank" href={student.portfolio_link}>
                    {student.portfolio_link}
                  </Link>
                )}
              </div>
            </section>

            {/* BIO */}
            <section className="p-2 pt-0 rounded-b-2xl">
              {student.bio && <p className=" my-2 mx-1 ">{student.bio}</p>}

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
    </>
  );
}
