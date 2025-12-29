
import React, { useState } from 'react';
import { RSVPData } from '../types';
import { EVENT_DETAILS } from '../constants';

const RSVPSection: React.FC = () => {
  const [formData, setFormData] = useState<RSVPData>({
    name: '',
    guests: 1,
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('RSVP Submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-24 px-4 bg-orange-50 text-center">
        <div className="max-w-xl mx-auto p-12 bg-white rounded-3xl shadow-xl border border-orange-100">
           <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
             <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
           </div>
           <h2 className="text-4xl font-cursive text-orange-600 mb-4">Sampai Jumpa!</h2>
           <p className="text-gray-600">Terima kasih atas konfirmasi Anda. Kami tidak sabar untuk merayakannya bersama Anda!</p>
           <button 
             onClick={() => setSubmitted(false)}
             className="mt-8 text-orange-500 hover:text-orange-600 font-medium underline"
           >
             Perlu mengubah sesuatu?
           </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-4 bg-orange-50">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-cursive text-orange-600 mb-4">Konfirmasi Kehadiran</h2>
          <p className="text-gray-500 uppercase tracking-widest text-sm">Mohon RSVP sebelum 10 Agustus</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-orange-100 space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Nama Lengkap</label>
            <input 
              required
              type="text" 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all"
              placeholder="Nama Anda"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Jumlah Tamu</label>
              <select 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all"
                value={formData.guests}
                onChange={(e) => setFormData({...formData, guests: parseInt(e.target.value)})}
              >
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Orang' : 'Orang'}</option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Alamat Email</label>
              <input 
                required
                type="email" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all"
                placeholder="email@anda.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Pesan untuk {EVENT_DETAILS.name} (Opsional)</label>
            <textarea 
              rows={3}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all"
              placeholder="Tulis pesan manis..."
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg transform hover:-translate-y-1 transition-all active:scale-95 text-lg"
          >
            Konfirmasi RSVP
          </button>
        </form>
      </div>
    </section>
  );
};

export default RSVPSection;
