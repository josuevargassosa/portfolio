import {useTranslations} from 'next-intl';
import {Mail, MapPin, Clock} from 'lucide-react';

export function ContactInfo() {
  const t = useTranslations('contact');

  const items = [
    {icon: Mail, label: t('email'), value: 'josuevargass@hotmail.com'},
    {icon: MapPin, label: t('location'), value: 'Guayaquil, Ecuador'},
    {icon: Clock, label: t('responseTime'), value: t('responseNote')},
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-bold font-heading mb-1">{t('info')}</h3>
        <p className="text-sm text-muted-foreground">{t('subtitle')}</p>
      </div>

      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.label} className="flex items-start gap-3">
            <div className="shrink-0 w-9 h-9 rounded-lg bg-secondary flex items-center justify-center">
              <item.icon size={18} className="text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium">{item.label}</p>
              <p className="text-sm text-muted-foreground">{item.value}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
