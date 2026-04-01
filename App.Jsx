import React, { useState } from 'react';
import { MessageCircle, Plus, ChevronRight } from 'lucide-react';

export default function FranchiseeDashboard() {
  const [activeTab, setActiveTab] = useState('performance');
  const [showAddLead, setShowAddLead] = useState(false);
  const [showCoachModal, setShowCoachModal] = useState(false);
  const [leads, setLeads] = useState([
    { id: 1, name: 'ABC Corp', quality: 'Quality', status: 'new', value: null, date: '3/28/25' },
    { id: 2, name: 'Tech Solutions', quality: 'Quality', status: 'contacted', value: null, date: '3/27/25' },
    { id: 3, name: 'Premier Properties', quality: 'Quality', status: 'proposal', value: 8500, date: '3/26/25' },
    { id: 4, name: 'Global Facilities', quality: 'Quality', status: 'won', value: 12000, date: '3/25/25' },
  ]);

  const franchiseeName = 'Orange County, CA';
  const health = 62;
  const visibility = 45;
  const traffic = 1840;
  const keywords = 28;
  const responseTime = '6.2h';
  const closeRate = '16%';
  const totalLeads = 36;
  const qualityLeads = 18;
  const wonLeads = 3;
  const wonRevenue = '$24,500';

  const healthColor = health >= 75 ? '#10b981' : health >= 50 ? '#78b7df' : '#f97316';

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0e1e3c' }}>
      {/* Header */}
      <header className="border-b" style={{ borderColor: '#20376C' }}>
        <div className="max-w-5xl mx-auto px-8 py-8">
          <div className="mb-8">
            <p style={{ color: '#78b7df' }} className="text-xs font-semibold uppercase tracking-widest mb-2">Your Partnership</p>
            <h1 className="text-white font-bold text-3xl leading-tight">{franchiseeName}</h1>
          </div>

          {/* Key Metrics Row */}
          <div className="grid grid-cols-4 gap-8">
            <div>
              <p style={{ color: '#78b7df' }} className="text-xs font-semibold uppercase tracking-widest mb-3">Health Score</p>
              <div className="flex items-baseline gap-2">
                <span className="text-white font-bold text-4xl">{health}</span>
                <span className="text-white/40 text-sm">/100</span>
              </div>
              <div className="mt-3 h-1.5 w-full rounded-full" style={{ backgroundColor: '#20376C' }}>
                <div style={{ width: `${health}%`, backgroundColor: healthColor }} className="h-1.5 rounded-full" />
              </div>
            </div>

            <div>
              <p style={{ color: '#78b7df' }} className="text-xs font-semibold uppercase tracking-widest mb-3">Visibility</p>
              <p className="text-white font-bold text-4xl">{visibility}</p>
              <p className="text-white/40 text-xs mt-2">Search ranking strength</p>
            </div>

            <div>
              <p style={{ color: '#78b7df' }} className="text-xs font-semibold uppercase tracking-widest mb-3">Monthly Traffic</p>
              <p className="text-white font-bold text-4xl">{traffic}</p>
              <p className="text-white/40 text-xs mt-2">Organic visitors</p>
            </div>

            <div>
              <p style={{ color: '#78b7df' }} className="text-xs font-semibold uppercase tracking-widest mb-3">Keywords</p>
              <p className="text-white font-bold text-4xl">{keywords}</p>
              <p className="text-white/40 text-xs mt-2">Currently ranked</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-8 py-10">
        
        {/* Tabs */}
        <div className="flex gap-12 mb-10 border-b" style={{ borderColor: '#20376C' }}>
          <button 
            onClick={() => setActiveTab('performance')} 
            className="pb-3 font-semibold text-sm transition-colors relative"
            style={{ 
              color: activeTab === 'performance' ? '#ffffff' : '#ffffff60'
            }}
          >
            Performance
            {activeTab === 'performance' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ backgroundColor: '#84754D' }} />
            )}
          </button>
          <button 
            onClick={() => setActiveTab('leads')} 
            className="pb-3 font-semibold text-sm transition-colors relative"
            style={{ 
              color: activeTab === 'leads' ? '#ffffff' : '#ffffff60'
            }}
          >
            Lead Management
            {activeTab === 'leads' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ backgroundColor: '#84754D' }} />
            )}
          </button>
        </div>

        {/* PERFORMANCE TAB */}
        {activeTab === 'performance' && (
          <div className="space-y-10">
            {/* Your Execution */}
            <div>
              <h2 className="text-white font-bold text-xl mb-6">Your Execution</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { 
                    metric: 'Response Time', 
                    value: responseTime, 
                    benchmark: '< 2h', 
                    gap: 'Opportunity: 4.2h slower than top performers',
                    impact: '+$6K/month',
                    status: 'needs-attention'
                  },
                  { 
                    metric: 'Close Rate', 
                    value: closeRate, 
                    benchmark: '28%', 
                    gap: 'Opportunity: 12% below benchmark',
                    impact: '+$8K/month',
                    status: 'needs-attention'
                  },
                  { 
                    metric: 'Referral Rate', 
                    value: '8%', 
                    benchmark: '15%', 
                    gap: 'Opportunity: Untapped growth channel',
                    impact: '+$4K/month',
                    status: 'opportunity'
                  }
                ].map((item, i) => (
                  <div key={i} style={{ backgroundColor: '#20376C' }} className="rounded-lg p-6 border" style={{ borderColor: '#20376C' }}>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p style={{ color: '#78b7df' }} className="text-xs font-semibold uppercase tracking-widest mb-2">{item.metric}</p>
                        <p className="text-white font-bold text-3xl">{item.value}</p>
                      </div>
                      <span className="text-xs font-semibold px-2 py-1 rounded" style={{ backgroundColor: item.status === 'needs-attention' ? '#f9731630' : '#10b98130', color: item.status === 'needs-attention' ? '#f97316' : '#10b981' }}>
                        {item.status === 'needs-attention' ? 'Focus' : 'Growth'}
                      </span>
                    </div>
                    <p className="text-white/60 text-xs mb-4">{item.gap}</p>
                    <div className="pt-4 border-t" style={{ borderColor: '#0e1e3c' }}>
                      <p className="text-xs text-white/40 mb-1">Benchmark</p>
                      <p className="text-white/80 text-sm font-semibold">{item.benchmark}</p>
                      <p style={{ color: '#84754D' }} className="text-xs font-bold mt-2">Potential: {item.impact}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Items */}
            <div>
              <h2 className="text-white font-bold text-xl mb-6">Recommended Actions</h2>
              <div className="space-y-3">
                {[
                  { title: 'Set Response Time Alert', desc: 'Configure immediate notification for new leads. Commit to 1-2 hour callback.', icon: '⏱' },
                  { title: 'Review Top Performer Scripts', desc: 'Study how #1 closer handles objections. Adopt 2-3 best practices this month.', icon: '📞' },
                  { title: 'Launch Referral Program', desc: 'Offer $500 bonus per commercial referral. Target past clients first.', icon: '🤝' }
                ].map((action, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-lg" style={{ backgroundColor: '#20376C' }}>
                    <span className="text-xl">{action.icon}</span>
                    <div className="flex-1">
                      <p className="text-white font-semibold text-sm mb-1">{action.title}</p>
                      <p className="text-white/60 text-xs">{action.desc}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-white/30 flex-shrink-0" />
                  </div>
                ))}
              </div>
            </div>

            {/* Coach Contact */}
            <button onClick={() => setShowCoachModal(true)} className="w-full py-3 px-6 rounded-lg font-semibold text-white transition-all hover:opacity-90" style={{ backgroundColor: '#84754D' }}>
              <MessageCircle className="w-4 h-4 inline mr-2" />
              Message Your Coach
            </button>

            {/* Coach Modal */}
            {showCoachModal && (
              <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50" onClick={() => setShowCoachModal(false)}>
                <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-2xl" onClick={(e) => e.stopPropagation()}>
                  <h3 className="font-bold text-lg mb-4 text-gray-900">Send Message to Coach</h3>
                  <textarea placeholder="Your message..." className="w-full p-3 border rounded-lg mb-4 resize-none focus:outline-none focus:ring-2" style={{ borderColor: '#20376C', '--tw-ring-color': '#84754D' }} rows="4" />
                  <div className="flex gap-3">
                    <button onClick={() => setShowCoachModal(false)} className="flex-1 py-2.5 px-4 rounded-lg border text-gray-700 font-semibold hover:bg-gray-50 transition" style={{ borderColor: '#20376C' }}>Cancel</button>
                    <button className="flex-1 py-2.5 px-4 rounded-lg text-white font-semibold hover:opacity-90 transition" style={{ backgroundColor: '#84754D' }}>Send</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* LEAD MANAGEMENT TAB */}
        {activeTab === 'leads' && (
          <div className="space-y-8">
            {/* Lead Stats */}
            <div className="grid grid-cols-4 gap-4">
              {[
                { label: 'Total Leads', value: totalLeads, color: '#78b7df' },
                { label: 'Quality', value: qualityLeads, color: '#10b981' },
                { label: 'Won', value: wonLeads, color: '#84754D' },
                { label: 'Revenue', value: wonRevenue, color: '#78b7df' }
              ].map((stat, i) => (
                <div key={i} style={{ backgroundColor: '#20376C' }} className="rounded-lg p-4 border" style={{ borderColor: '#20376C' }}>
                  <p style={{ color: '#78b7df' }} className="text-xs font-semibold uppercase tracking-widest mb-2">{stat.label}</p>
                  <p className="text-white font-bold text-2xl">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Add Lead */}
            <button onClick={() => setShowAddLead(true)} className="flex items-center gap-2 py-2.5 px-4 rounded-lg font-semibold text-white transition-all hover:opacity-90" style={{ backgroundColor: '#84754D' }}>
              <Plus className="w-4 h-4" />
              Add Lead
            </button>

            {/* Add Lead Modal */}
            {showAddLead && (
              <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50" onClick={() => setShowAddLead(false)}>
                <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-2xl" onClick={(e) => e.stopPropagation()}>
                  <h3 className="font-bold text-lg mb-4 text-gray-900">Add New Lead</h3>
                  <div className="space-y-3 mb-6">
                    <input type="text" placeholder="Company Name" className="w-full p-3 border rounded-lg text-sm focus:outline-none focus:ring-2" style={{ borderColor: '#20376C', '--tw-ring-color': '#84754D' }} />
                    <input type="tel" placeholder="Phone" className="w-full p-3 border rounded-lg text-sm focus:outline-none focus:ring-2" style={{ borderColor: '#20376C', '--tw-ring-color': '#84754D' }} />
                    <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg text-sm focus:outline-none focus:ring-2" style={{ borderColor: '#20376C', '--tw-ring-color': '#84754D' }} />
                    <select className="w-full p-3 border rounded-lg text-sm focus:outline-none focus:ring-2" style={{ borderColor: '#20376C', '--tw-ring-color': '#84754D' }}>
                      <option>Quality Lead</option>
                      <option>Not Qualified</option>
                    </select>
                  </div>
                  <div className="flex gap-3">
                    <button onClick={() => setShowAddLead(false)} className="flex-1 py-2.5 px-4 rounded-lg border text-gray-700 font-semibold hover:bg-gray-50 transition" style={{ borderColor: '#20376C' }}>Cancel</button>
                    <button className="flex-1 py-2.5 px-4 rounded-lg text-white font-semibold hover:opacity-90 transition" style={{ backgroundColor: '#84754D' }}>Add</button>
                  </div>
                </div>
              </div>
            )}

            {/* Leads Table */}
            <div className="overflow-hidden rounded-lg border" style={{ borderColor: '#20376C' }}>
              <table className="w-full">
                <thead style={{ backgroundColor: '#20376C' }}>
                  <tr>
                    <th className="text-left py-4 px-5" style={{ color: '#78b7df' }}><span className="text-xs font-semibold uppercase tracking-wider">Company</span></th>
                    <th className="text-center py-4 px-4" style={{ color: '#78b7df' }}><span className="text-xs font-semibold uppercase tracking-wider">Status</span></th>
                    <th className="text-center py-4 px-4" style={{ color: '#78b7df' }}><span className="text-xs font-semibold uppercase tracking-wider">Value</span></th>
                    <th className="text-center py-4 px-4" style={{ color: '#78b7df' }}><span className="text-xs font-semibold uppercase tracking-wider">Action</span></th>
                  </tr>
                </thead>
                <tbody style={{ borderColor: '#20376C' }}>
                  {leads.map((lead) => (
                    <tr key={lead.id} style={{ borderTop: '1px solid #20376C' }} className="hover:bg-opacity-50 transition">
                      <td className="py-4 px-5 text-white text-sm">{lead.name}</td>
                      <td className="py-4 px-4 text-center">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded" style={{ 
                          backgroundColor: lead.status === 'new' ? '#20376C' : lead.status === 'contacted' ? '#f9731630' : lead.status === 'proposal' ? '#78b7df30' : '#10b98130',
                          color: lead.status === 'new' ? '#78b7df' : lead.status === 'contacted' ? '#f97316' : lead.status === 'proposal' ? '#78b7df' : '#10b981'
                        }}>
                          {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-center text-white text-sm font-semibold">{lead.value ? `$${lead.value.toLocaleString()}` : '—'}</td>
                      <td className="py-4 px-4 text-center">
                        <button className="text-xs font-semibold px-3 py-1.5 rounded transition hover:opacity-80" style={{ backgroundColor: '#20376C', color: '#78b7df' }}>Update</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
