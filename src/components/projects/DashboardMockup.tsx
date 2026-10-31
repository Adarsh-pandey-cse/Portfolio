import { motion } from 'framer-motion'
import {
  TrendingUp,
  Flame,
  Award,
  Users,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Layers,
  Sparkles,
  BarChart2,
} from 'lucide-react'

interface DashboardMockupProps {
  className?: string
  interactive?: boolean
  showFloatingPreview?: boolean
}

export default function DashboardMockup({
  className = '',
  interactive = true,
  showFloatingPreview = true,
}: DashboardMockupProps) {
  return (
    <div className={`relative w-full select-none ${className}`}>
      {/* ── Desktop Browser Window Frame ── */}
      <div className="relative w-full bg-[#0B0F19] border-2 border-border-dark rounded-2xl sm:rounded-3xl shadow-[8px_8px_0px_#111111] overflow-hidden text-slate-100">
        {/* Browser Top Chrome Header */}
        <div className="flex items-center justify-between px-3.5 sm:px-4 py-2.5 bg-[#0F172A] border-b-2 border-border-dark">
          {/* Traffic lights */}
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444] border border-black/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] border border-black/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] border border-black/40" />
          </div>

          {/* Fake URL Bar */}
          <div className="flex items-center gap-2 px-3 py-1 bg-[#1E293B] rounded-full border border-slate-700/60 max-w-[240px] sm:max-w-[280px] w-full mx-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="font-mono text-[10px] sm:text-[11px] text-slate-300 truncate font-medium">
              attendx9.netlify.app/dashboard
            </span>
          </div>

          {/* Version badge */}
          <span className="hidden sm:inline-flex px-2 py-0.5 bg-[#1833FF] text-white font-mono text-[9px] font-bold uppercase rounded border border-border-dark shadow-[1px_1px_0px_#111111]">
            V2.4 LIVE
          </span>
        </div>

        {/* Dashboard Content Container */}
        <div className="p-3.5 sm:p-5 flex flex-col gap-3.5 sm:gap-4 bg-[#0B0F19]">
          {/* Top Sub-Nav: Welcome & Quick Metrics */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-[#FEF08A] text-ink-black font-mono text-[9.5px] font-black uppercase rounded shadow-[1px_1px_0px_#111111]">
                  ACADEMIC YEAR 2024-25
                </span>
                <span className="font-mono text-[10px] text-slate-400">Semester IV</span>
              </div>
              <h4 className="font-display font-extrabold text-base sm:text-lg text-white mt-0.5">
                Executive Attendance Command
              </h4>
            </div>

            {/* Quick Status Chips */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-900 border border-slate-800 rounded-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="font-mono text-[10px] text-slate-300 font-bold">STATUS: SAFE</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-amber-500/10 border border-amber-500/30 rounded-lg">
                <Flame size={12} className="text-amber-400 fill-amber-400" />
                <span className="font-mono text-[10px] text-amber-300 font-bold">18 DAYS STREAK</span>
              </div>
            </div>
          </div>

          {/* Main 4 Metric Cards Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-2.5">
            {/* Metric 1: Overall Rate */}
            <div className="p-2.5 sm:p-3 rounded-xl bg-[#0F172A] border border-slate-800 flex flex-col justify-between shadow-sm">
              <div className="flex items-center justify-between text-slate-400">
                <span className="font-mono text-[9px] uppercase font-bold tracking-wider">Overall Rate</span>
                <TrendingUp size={13} className="text-emerald-400" />
              </div>
              <div className="mt-1.5 flex items-baseline gap-1.5">
                <span className="font-display font-extrabold text-xl sm:text-2xl text-emerald-400 leading-none">
                  96.4%
                </span>
                <span className="font-mono text-[8.5px] text-slate-400">(&gt;75% Req)</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-emerald-400 h-full rounded-full" style={{ width: '96.4%' }} />
              </div>
            </div>

            {/* Metric 2: Safe Absence Margin */}
            <div className="p-2.5 sm:p-3 rounded-xl bg-[#0F172A] border border-slate-800 flex flex-col justify-between shadow-sm">
              <div className="flex items-center justify-between text-slate-400">
                <span className="font-mono text-[9px] uppercase font-bold tracking-wider">Safe Cuts Left</span>
                <CheckCircle2 size={13} className="text-sky-400" />
              </div>
              <div className="mt-1.5 flex items-baseline gap-1.5">
                <span className="font-display font-extrabold text-xl sm:text-2xl text-sky-400 leading-none">
                  14
                </span>
                <span className="font-mono text-[8.5px] text-slate-400">Lectures</span>
              </div>
              <span className="font-mono text-[8.5px] text-slate-400 mt-2">Buffer remains above 75%</span>
            </div>

            {/* Metric 3: Lectures Attended */}
            <div className="p-2.5 sm:p-3 rounded-xl bg-[#0F172A] border border-slate-800 flex flex-col justify-between shadow-sm">
              <div className="flex items-center justify-between text-slate-400">
                <span className="font-mono text-[9px] uppercase font-bold tracking-wider">Attended / Total</span>
                <Layers size={13} className="text-pastel-butter" />
              </div>
              <div className="mt-1.5 flex items-baseline gap-1.5">
                <span className="font-display font-extrabold text-xl sm:text-2xl text-white leading-none">
                  134
                </span>
                <span className="font-mono text-[10px] text-slate-400">/ 139</span>
              </div>
              <span className="font-mono text-[8.5px] text-slate-400 mt-2">5 absences recorded</span>
            </div>

            {/* Metric 4: Weekly Consistency */}
            <div className="p-2.5 sm:p-3 rounded-xl bg-[#0F172A] border border-slate-800 flex flex-col justify-between shadow-sm">
              <div className="flex items-center justify-between text-slate-400">
                <span className="font-mono text-[9px] uppercase font-bold tracking-wider">Consistency Tier</span>
                <Award size={13} className="text-amber-400" />
              </div>
              <div className="mt-1.5 flex items-baseline gap-1.5">
                <span className="font-display font-extrabold text-base sm:text-lg text-amber-300 leading-none">
                  Tier 1 Elite
                </span>
              </div>
              <span className="font-mono text-[8.5px] text-emerald-400 mt-2 font-bold">100% Weekly Streak</span>
            </div>
          </div>

          {/* Lower Row: Subject Breakdown Table & Weekly Visual Chart */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
            {/* Left 7 Cols: Subject Breakdown */}
            <div className="lg:col-span-7 bg-[#0F172A] border border-slate-800 rounded-xl p-3 flex flex-col gap-2">
              <div className="flex items-center justify-between pb-1.5 border-b border-slate-800">
                <span className="font-mono text-[9.5px] text-slate-300 uppercase font-bold">
                  Subject-Wise Drilldown
                </span>
                <span className="font-mono text-[8.5px] text-slate-500">Auto-calculated</span>
              </div>

              <div className="flex flex-col gap-1.5">
                {[
                  { name: 'Computer Networks', attended: 28, total: 29, pct: '96.5%', color: '#10B981', tag: 'Theory' },
                  { name: 'Operating Systems', attended: 32, total: 33, pct: '97.0%', color: '#10B981', tag: 'Core' },
                  { name: 'Algorithms Lab', attended: 16, total: 16, pct: '100%', color: '#38BDF8', tag: 'Practical' },
                  { name: 'Machine Learning', attended: 26, total: 28, pct: '92.8%', color: '#10B981', tag: 'Elective' },
                ].map((s) => (
                  <div
                    key={s.name}
                    className="flex items-center justify-between p-1.5 bg-[#0B0F19] rounded-lg border border-slate-800/80 text-[11px]"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: s.color }} />
                      <span className="font-medium text-slate-200">{s.name}</span>
                      <span className="font-mono text-[8px] px-1 py-0.2 bg-slate-800 text-slate-400 rounded">
                        {s.tag}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[10px] text-slate-400">
                        {s.attended}/{s.total}
                      </span>
                      <span className="font-mono text-[10px] font-bold text-white px-1.5 py-0.5 rounded bg-slate-800">
                        {s.pct}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 5 Cols: Weekly Trend Visual Bar Chart */}
            <div className="lg:col-span-5 bg-[#0F172A] border border-slate-800 rounded-xl p-3 flex flex-col justify-between gap-2">
              <div className="flex items-center justify-between pb-1.5 border-b border-slate-800">
                <span className="font-mono text-[9.5px] text-slate-300 uppercase font-bold">
                  Weekly Attendance Velocity
                </span>
                <BarChart2 size={12} className="text-slate-400" />
              </div>

              {/* Bar visualization */}
              <div className="flex items-end justify-between gap-1.5 h-24 pt-2">
                {[
                  { day: 'Mon', h: '95%', val: '5/5' },
                  { day: 'Tue', h: '100%', val: '6/6' },
                  { day: 'Wed', h: '85%', val: '4/5' },
                  { day: 'Thu', h: '100%', val: '5/5' },
                  { day: 'Fri', h: '100%', val: '5/5' },
                  { day: 'Sat', h: '90%', val: '3/3' },
                ].map((col) => (
                  <div key={col.day} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                    <span className="font-mono text-[7px] text-slate-400">{col.val}</span>
                    <div
                      className="w-full bg-gradient-to-t from-[#1833FF] to-[#38BDF8] rounded-t-sm transition-all duration-300"
                      style={{ height: col.h }}
                    />
                    <span className="font-mono text-[8.5px] text-slate-400">{col.day}</span>
                  </div>
                ))}
              </div>

              <div className="pt-1 border-t border-slate-800/80 flex items-center justify-between font-mono text-[8.5px] text-slate-400">
                <span>Target: 75% Threshold</span>
                <span className="text-emerald-400 font-bold">Passing +21.4%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Secondary Floating Analytics Badge (Bottom-Right) ── */}
      {showFloatingPreview && (
        <motion.div
          className="absolute -bottom-5 -right-3 sm:-right-5 bg-white text-ink-black border-2 border-border-dark rounded-2xl p-3 shadow-[5px_5px_0px_#1833FF] max-w-[210px] hidden sm:flex flex-col gap-1.5 z-20 pointer-events-none"
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
        >
          <div className="flex items-center justify-between">
            <span className="px-1.5 py-0.5 bg-[#FEF08A] text-ink-black font-mono text-[8.5px] font-black uppercase rounded border border-border-dark">
              LIVE BUFFER
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          </div>
          <div className="font-display font-extrabold text-sm text-ink-black leading-tight">
            14 Safe Cuts Left
          </div>
          <div className="font-mono text-[9px] text-ink-muted leading-tight">
            Attendance rate 96.4% stays safely above academic threshold.
          </div>
        </motion.div>
      )}

      {/* ── Floating Badge Top Left: Smart Analytics Engine ── */}
      {showFloatingPreview && (
        <motion.div
          className="absolute -top-3.5 -left-3 sm:-left-4 bg-[#74DEB6] text-ink-black border-2 border-border-dark rounded-full px-3 py-1 shadow-[3px_3px_0px_#111111] hidden md:flex items-center gap-1.5 z-20 pointer-events-none"
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 0.5 }}
        >
          <Sparkles size={12} className="text-emerald-900 fill-emerald-900" />
          <span className="font-mono text-[9.5px] font-black uppercase tracking-wider text-ink-black">
            SUB-SECOND SYNC
          </span>
        </motion.div>
      )}
    </div>
  )
}
