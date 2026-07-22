export interface ProposalPayload {
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
}

/**
 * Placeholder submit handler. Replace the body with a real integration:
 * fetch('/api/proposals', { method: 'POST', body: JSON.stringify(payload) })
 * or a Formspree/Supabase/custom backend call.
 */
export async function submitProposal(payload: ProposalPayload): Promise<{ ok: boolean }> {
  await new Promise((resolve) => setTimeout(resolve, 1200));
  return { ok: Boolean(payload) };
}

export interface QuickContactPayload {
  name: string;
  email: string;
  message: string;
}

export async function submitQuickContact(payload: QuickContactPayload): Promise<{ ok: boolean }> {
  await new Promise((resolve) => setTimeout(resolve, 900));
  return { ok: Boolean(payload) };
}
