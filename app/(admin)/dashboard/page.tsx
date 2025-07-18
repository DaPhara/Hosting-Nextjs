// app/dashboard/page.tsx
export default async function Page() {
  // Simulate a 5 second delay
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    <div className="h-screen grid place-content-center text-purple-700 text-4xl">
      <h1>Dashboard guy...!</h1>
    </div>
  );
}
