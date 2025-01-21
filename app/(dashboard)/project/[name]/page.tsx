export default function ProjectDetails({
  params,
}: {
  params: { name: string };
}) {
  const { name } = params;
  return (
    <main>
      <h1 className="text-3xl font-bold">Project Name: {name}</h1>
    </main>
  );
}
