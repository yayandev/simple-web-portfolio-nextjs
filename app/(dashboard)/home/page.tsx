import { getServerSession } from "next-auth";

const Dashboard = async () => {
  const session = await getServerSession();
  return (
    <section className="w-full my-3 p-3 border space-y-3">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <h1 className="text-sm font-semibold">Welcome {session?.user?.name}!</h1>
    </section>
  );
};

export default Dashboard;
