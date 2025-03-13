export default function DashboardDetailPage({ params, searchParams }) {
  console.log("params: ", params);
  return (
    <main>
      Dashboard Detail Page {params.id} code={searchParams.code}
    </main>
  );
}
