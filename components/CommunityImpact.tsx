import { LucideIcon, School, Users, Wifi } from "lucide-react";

type MetricProps = {
  icon: LucideIcon;
  title: string;
  value: string;
};

const MetricCard = ({ icon: Icon, title, value }: MetricProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <Icon size={40} className="mx-auto text-zinc-900 mb-4" />
      <h3 className="text-xl font-semibold text-zinc-900">{title}</h3>
      <p className="text-2xl font-bold text-zinc-900">{value}</p>
    </div>
  );
};

export default function CommunityImpact() {
  return (
    <section className="py-16 px-4 bg-zinc-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Digital Bridges Impact</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <MetricCard icon={School} title="Schools Supported" value="10+" />
          <MetricCard icon={Users} title="Students Reached" value="2,000+" />
          <MetricCard icon={Wifi} title="Internet Connections" value="100% Coverage" />
        </div>
      </div>
    </section>
  );
}
