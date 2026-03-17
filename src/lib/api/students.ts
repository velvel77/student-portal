import { Student } from "../../types/student";

export async function getStudents(): Promise<Student[]> {
	const res = await fetch("http://localhost:3000/api/students");

	if (!res.ok) {
		throw new Error("Failed to fetch students");
	}

	return res.json();
}