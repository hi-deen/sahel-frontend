import React, { useState } from 'react';
import API_BASE_URL from '../config';

type LeadPayload = {
  name: string;
  email: string;
  serviceType?: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const [form, setForm] = useState<LeadPayload>({ name: '', email: '', serviceType: '', message: '' });
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submit = async (payload: LeadPayload) => {
    setStatus('sending');
    try {
      const res = await fetch(`${API_BASE_URL}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', serviceType: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    } finally {
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div className="card p-4">
      <h5>Contact Us</h5>
      <div className="mb-3">
        <label className="form-label">Full name</label>
        <input name="name" className="form-control" value={form.name} onChange={handleChange} />
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input name="email" type="email" className="form-control" value={form.email} onChange={handleChange} />
      </div>

      <div className="mb-3">
        <label className="form-label">Service interested in</label>
        <select name="serviceType" className="form-select" value={form.serviceType} onChange={handleChange}>
          <option value="">Select service</option>
          <option value="sourcing">Sourcing &amp; Procurement</option>
          <option value="import_export">Import / Export</option>
          <option value="distribution">Distribution</option>
          <option value="consulting">Consulting</option>
          <option value="supplier_vetting">Supplier Vetting</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Message</label>
        <textarea name="message" className="form-control" rows={4} value={form.message} onChange={handleChange} />
      </div>

      <button className="btn btn-primary" onClick={() => submit(form)} disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'success' && <div className="alert alert-success mt-3">Thanks — we will contact you soon.</div>}
      {status === 'error' && <div className="alert alert-danger mt-3">There was an error. Try again later.</div>}
    </div>
  );
};

export default ContactForm;
