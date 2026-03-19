export async function GET() {
	const res = await fetch("http://localhost:5000/students");
	const data = await res.json();

	return Response.json(data);
}
