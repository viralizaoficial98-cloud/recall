import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { fadeInUp, viewportOnce } from '../../utils/motionVariants';
import { EMAIL_REGEX, PHONE_REGEX } from '../../utils/validators';
import { submitProposal } from '../../utils/api';
import SectionHeading from '../SectionHeading/SectionHeading';

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guests: string;
  location: string;
  budget: string;
  message: string;
  privacy: boolean;
}

const initialState: FormState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  eventType: '',
  eventDate: '',
  guests: '',
  location: '',
  budget: '',
  message: '',
  privacy: false,
};

type Errors = Partial<Record<keyof FormState, string>>;

const EVENT_TYPE_KEYS = ['conference', 'congress', 'gala', 'launch', 'workshop', 'teambuilding', 'institutional', 'other'] as const;

export default function ProposalForm() {
  const { t } = useTranslation();
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const setField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = (): Errors => {
    const next: Errors = {};
    if (!form.name.trim()) next.name = t('form.errors.required');
    if (!form.company.trim()) next.company = t('form.errors.required');
    if (!form.email.trim()) next.email = t('form.errors.required');
    else if (!EMAIL_REGEX.test(form.email)) next.email = t('form.errors.email');
    if (!form.phone.trim()) next.phone = t('form.errors.required');
    else if (!PHONE_REGEX.test(form.phone)) next.phone = t('form.errors.phone');
    if (!form.eventType) next.eventType = t('form.errors.required');
    if (!form.eventDate) next.eventDate = t('form.errors.required');
    if (!form.guests.trim() || Number(form.guests) <= 0) next.guests = t('form.errors.minGuests');
    if (!form.location.trim()) next.location = t('form.errors.required');
    if (!form.message.trim()) next.message = t('form.errors.required');
    if (!form.privacy) next.privacy = t('form.errors.privacy');
    return next;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus('submitting');
    try {
      const { ok } = await submitProposal(form);
      if (!ok) throw new Error('submit failed');
      setStatus('success');
      setForm(initialState);
    } catch {
      setStatus('error');
    }
  };

  const inputClass = (field: keyof FormState) =>
    `w-full rounded-lg border bg-white px-4 py-3 text-sm text-brand-black outline-none transition-colors placeholder:text-brand-gray-400 focus:border-brand-red ${
      errors[field] ? 'border-red-500' : 'border-brand-gray-300'
    }`;

  return (
    <section className="section-y bg-brand-gray-50">
      <div className="container-x">
        <SectionHeading tag={t('form.tag')} title={t('form.title')} subtitle={t('form.subtitle')} />

        <motion.form
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          onSubmit={handleSubmit}
          noValidate
          className="mx-auto mt-12 max-w-4xl rounded-2xl border border-brand-gray-200 bg-white p-6 shadow-sm sm:p-10"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-brand-black">{t('form.fields.name')}</label>
              <input
                className={inputClass('name')}
                value={form.name}
                onChange={(e) => setField('name', e.target.value)}
              />
              {errors.name && <FieldError message={errors.name} />}
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-brand-black">{t('form.fields.company')}</label>
              <input
                className={inputClass('company')}
                value={form.company}
                onChange={(e) => setField('company', e.target.value)}
              />
              {errors.company && <FieldError message={errors.company} />}
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-brand-black">{t('form.fields.email')}</label>
              <input
                type="email"
                className={inputClass('email')}
                value={form.email}
                onChange={(e) => setField('email', e.target.value)}
              />
              {errors.email && <FieldError message={errors.email} />}
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-brand-black">{t('form.fields.phone')}</label>
              <input
                type="tel"
                className={inputClass('phone')}
                value={form.phone}
                onChange={(e) => setField('phone', e.target.value)}
              />
              {errors.phone && <FieldError message={errors.phone} />}
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-brand-black">{t('form.fields.eventType')}</label>
              <select
                className={inputClass('eventType')}
                value={form.eventType}
                onChange={(e) => setField('eventType', e.target.value)}
              >
                <option value="">{t('form.eventTypes.placeholder')}</option>
                {EVENT_TYPE_KEYS.map((key) => (
                  <option key={key} value={key}>
                    {t(`form.eventTypes.${key}`)}
                  </option>
                ))}
              </select>
              {errors.eventType && <FieldError message={errors.eventType} />}
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-brand-black">{t('form.fields.eventDate')}</label>
              <input
                type="date"
                className={inputClass('eventDate')}
                value={form.eventDate}
                onChange={(e) => setField('eventDate', e.target.value)}
              />
              {errors.eventDate && <FieldError message={errors.eventDate} />}
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-brand-black">{t('form.fields.guests')}</label>
              <input
                type="number"
                min={1}
                className={inputClass('guests')}
                value={form.guests}
                onChange={(e) => setField('guests', e.target.value)}
              />
              {errors.guests && <FieldError message={errors.guests} />}
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-brand-black">{t('form.fields.location')}</label>
              <input
                className={inputClass('location')}
                value={form.location}
                onChange={(e) => setField('location', e.target.value)}
              />
              {errors.location && <FieldError message={errors.location} />}
            </div>

            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-sm font-semibold text-brand-black">{t('form.fields.budget')}</label>
              <input
                className={inputClass('budget')}
                value={form.budget}
                onChange={(e) => setField('budget', e.target.value)}
              />
            </div>

            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-sm font-semibold text-brand-black">{t('form.fields.message')}</label>
              <textarea
                rows={4}
                className={inputClass('message')}
                value={form.message}
                onChange={(e) => setField('message', e.target.value)}
              />
              {errors.message && <FieldError message={errors.message} />}
            </div>
          </div>

          <label className="mt-6 flex items-start gap-3 text-sm text-brand-gray-600">
            <input
              type="checkbox"
              checked={form.privacy}
              onChange={(e) => setField('privacy', e.target.checked)}
              className="mt-0.5 h-4 w-4 shrink-0 accent-brand-red"
            />
            {t('form.fields.privacy')}
          </label>
          {errors.privacy && <FieldError message={errors.privacy} />}

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-brand-red px-8 py-4 text-sm font-semibold text-white shadow-md transition-transform hover:scale-[1.02] hover:bg-brand-red-dark active:scale-95 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                {t('form.submitting')}
              </>
            ) : (
              t('form.submit')
            )}
          </button>

          {status === 'success' && (
            <p className="mt-4 flex items-center gap-2 rounded-lg bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
              <CheckCircle2 size={18} />
              {t('form.success')}
            </p>
          )}
          {status === 'error' && (
            <p className="mt-4 flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
              <AlertCircle size={18} />
              {t('form.error')}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

function FieldError({ message }: { message: string }) {
  return <p className="mt-1.5 text-xs font-medium text-red-600">{message}</p>;
}
