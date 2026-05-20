import { Host } from '@/types';

interface HostSummaryProps {
  host: Host;
}

export const HostSummary = ({ host }: HostSummaryProps) => {
  return (
    <section className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4">
      <img src={host.avatarUrl} alt={host.name} className="h-14 w-14 rounded-full object-cover" />

      <div>
        <p className="text-sm text-slate-500">Anfitrion</p>
        <p className="font-semibold text-slate-900">{host.name}</p>
        <p className="text-sm text-slate-600">
          {host.isSuperhost ? 'Superhost' : 'Host verificado'} · Respuesta {host.responseRate}%
        </p>
      </div>
    </section>
  );
};