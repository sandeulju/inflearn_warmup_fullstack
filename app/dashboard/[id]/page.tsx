export default function DashboardDetailPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { code: string };
}) {
  console.log("params: ", params);
  return (
    <main>
      Dashboard Detail Page {params.id} code={searchParams.code}
    </main>
  );
}
