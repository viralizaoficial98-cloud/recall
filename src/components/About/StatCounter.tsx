import { useTranslation } from 'react-i18next';
import type { StatItem } from '../../data/stats';
import { useCountUp } from '../../hooks/useCountUp';

export default function StatCounter({ stat }: { stat: StatItem }) {
  const { t } = useTranslation();
  const { ref, value } = useCountUp(stat.value);
  const Icon = stat.icon;

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="rounded-2xl border border-brand-gray-200 bg-white p-5 text-center shadow-sm">
      <Icon className="mx-auto mb-2 text-brand-red" size={26} />
      <div className="text-3xl font-extrabold text-brand-black sm:text-4xl">
        {value}
        {stat.suffix}
      </div>
      <div className="mt-1 text-sm font-medium text-brand-gray-600">{t(`about.stats.${stat.translationKey}`)}</div>
    </div>
  );
}
