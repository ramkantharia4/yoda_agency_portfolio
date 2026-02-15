import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { Check, Calendar as CalendarIcon, Clock, ChevronLeft, ChevronRight, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

import { supabase } from '../lib/supabase';

const Meeting: React.FC = () => {
    const [viewDate, setViewDate] = useState(new Date()); // Date for month view
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<string>('11:30 AM');
    const [email, setEmail] = useState('');
    const [goals, setGoals] = useState('');
    const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const navigate = useNavigate();

    useEffect(() => {
        // Protect this route - Check session on mount
        fetch("http://127.0.0.1:8000/check-session", {
            method: "GET",
            credentials: "include",
        })
            .then((res) => res.json())
            .then((data) => {
                if (!data.logged_in) {
                    navigate('/start'); // Redirect to login/start page
                } else if (data.token && data.token.includes('-')) {
                    // Pre-fill email if token contains it
                    const savedEmail = data.token.split('-').pop();
                    if (savedEmail && savedEmail.includes('@')) {
                        setEmail(savedEmail);
                    }
                }
            })
            .catch(err => console.debug("Backend offline, skipping session check"));
    }, [navigate]);
    const handleConfirm = async () => {
        if (!selectedDate || !selectedTime || !email || !goals.trim()) {
            alert('Please fill in all fields.');
            return;
        }

        setFormStatus('loading');
        try {
            // Format date as YYYY-MM-DD in local time
            const year = selectedDate.getFullYear();
            const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
            const day = String(selectedDate.getDate()).padStart(2, '0');
            const dateStr = `${year}-${month}-${day}`;

            const { error } = await supabase
                .from('meetings')
                .insert([
                    {
                        email: email,
                        date: dateStr,
                        time: selectedTime,
                        goals: goals
                    }
                ]);

            if (error) {
                console.error('Supabase Error:', error);
                throw error;
            }
            setFormStatus('success');
        } catch (error: any) {
            console.error('Submission error:', error);
            setFormStatus('error');
            // If it's a 404, it means the table doesn't exist
            if (error?.code === '42P01') {
                alert('Table "meetings" not found. Please run the SQL in your Supabase dashboard.');
            }
        }
    };

    const timeSlots = ['09:00 AM', '11:00 AM', '01:00 PM', '03:00 PM', '05:00 PM'];

    // Dynamic Calendar Logic
    const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

    const currYear = viewDate.getFullYear();
    const currMonth = viewDate.getMonth();
    const monthName = viewDate.toLocaleString('default', { month: 'long' });

    const prevMonth = () => setViewDate(new Date(currYear, currMonth - 1, 1));
    const nextMonth = () => setViewDate(new Date(currYear, currMonth + 1, 1));

    const calendarGrid = [];
    const prevMonthDays = daysInMonth(currYear, currMonth - 1);
    const startDay = firstDayOfMonth(currYear, currMonth);

    // Padding from previous month
    for (let i = startDay - 1; i >= 0; i--) {
        calendarGrid.push({ day: prevMonthDays - i, current: false });
    }
    // Days of current month
    for (let i = 1; i <= daysInMonth(currYear, currMonth); i++) {
        calendarGrid.push({ day: i, current: true });
    }
    // Padding for next month
    const remaining = 42 - calendarGrid.length;
    for (let i = 1; i <= remaining; i++) {
        calendarGrid.push({ day: i, current: false });
    }

    const isToday = (day: number) => {
        const today = new Date();
        return day === today.getDate() && currMonth === today.getMonth() && currYear === today.getFullYear();
    };

    const isPast = (day: number) => {
        const d = new Date(currYear, currMonth, day);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return d < today;
    };

    return (
        <div className="min-h-screen bg-black text-white relative flex flex-col">
            <Header />

            <main className="flex-grow pt-32 pb-20 px-6 lg:px-12 relative z-10">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                    {/* Left Column: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-12"
                    >
                        <div className="space-y-6">
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold tracking-widest uppercase border border-blue-500/20">
                                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                                Booking Available
                            </span>

                            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
                                Book a <br /><span className="text-white">Strategy Call</span>
                            </h1>

                            <p className="text-xl text-zinc-400 leading-relaxed max-w-lg">
                                Ready to scale your digital presence? Choose a time that works for you and our lead designers will walk you through a tailored roadmap for your project.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                "30-minute tailored consultation",
                                "Project scope and timeline estimate",
                                "Live Q&A with our tech leads"
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                        <Check size={16} strokeWidth={3} />
                                    </div>
                                    <span className="text-lg font-medium text-zinc-300">{item}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="pt-8 border-t border-white/10">
                            <button className="flex items-center gap-2 text-white font-bold hover:gap-4 transition-all group">
                                <Sparkles size={20} className="text-amber-400" />
                                View Our Portfolio
                                <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </button>
                        </div>
                    </motion.div>

                    {/* Right Column: Booking Card */}
                    <motion.div
                        layoutId="meeting-transition-container"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-zinc-950 border border-white/10 rounded-3xl p-8 lg:p-10 shadow-2xl relative overflow-hidden"
                    >
                        <AnimatePresence mode="wait">
                            {formStatus === 'success' ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="py-12 flex flex-col items-center text-center"
                                >
                                    <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white mb-6">
                                        <CheckCircle size={40} />
                                    </div>
                                    <h3 className="text-3xl font-bold mb-2">Meeting Confirmed!</h3>
                                    <p className="text-zinc-400">We've added you to our schedule. A Google Meet invitation is on its way to your email.</p>
                                    <button
                                        onClick={() => setFormStatus('idle')}
                                        className="mt-8 text-sm font-bold text-zinc-500 hover:text-white transition-colors underline"
                                    >
                                        Book another slot
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.div key="form">
                                    {/* Glow Effect */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                                    {/* Calendar Header */}
                                    <div className="flex items-center justify-between mb-8">
                                        <button
                                            onClick={prevMonth}
                                            className="p-2 hover:bg-white/10 rounded-full transition-colors"><ChevronLeft size={20} /></button>
                                        <span className="font-bold text-lg">{monthName} {currYear}</span>
                                        <button
                                            onClick={nextMonth}
                                            className="p-2 hover:bg-white/10 rounded-full transition-colors"><ChevronRight size={20} /></button>
                                    </div>

                                    {/* Days Header */}
                                    <div className="grid grid-cols-7 mb-4 text-center">
                                        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                                            <div key={day} className="text-xs font-bold text-zinc-500 uppercase">{day}</div>
                                        ))}
                                    </div>

                                    {/* Calendar Grid */}
                                    <div className="grid grid-cols-7 gap-y-2 mb-8 text-center">
                                        {calendarGrid.map((item, i) => {
                                            const isDateSelected = selectedDate?.getDate() === item.day &&
                                                selectedDate?.getMonth() === currMonth &&
                                                selectedDate?.getFullYear() === currYear &&
                                                item.current;

                                            const isDisabled = !item.current || isPast(item.day);

                                            return (
                                                <button
                                                    key={i}
                                                    type="button"
                                                    disabled={isDisabled}
                                                    onClick={() => setSelectedDate(new Date(currYear, currMonth, item.day))}
                                                    className={`
                            w-10 h-10 mx-auto rounded-full flex flex-col items-center justify-center text-sm font-medium transition-all relative
                            ${!item.current ? 'text-zinc-700 opacity-30 cursor-default' : 'text-zinc-300 hover:bg-white/10'}
                            ${isDateSelected ? 'bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)] scale-110 z-10' : ''}
                            ${isDisabled && item.current ? 'text-zinc-600 cursor-not-allowed' : ''}
                            ${isToday(item.day) && !isDateSelected ? 'border border-blue-500/50' : ''}
                          `}
                                                >
                                                    {item.day}
                                                    {isToday(item.day) && !isDateSelected && (
                                                        <span className="absolute bottom-1 w-1 h-1 bg-blue-500 rounded-full" />
                                                    )}
                                                </button>
                                            );
                                        })}
                                    </div>

                                    <div className="space-y-6">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3 block">Available Times</label>
                                                <div className="grid grid-cols-1 gap-2">
                                                    {timeSlots.map((time) => (
                                                        <button
                                                            key={time}
                                                            onClick={() => setSelectedTime(time)}
                                                            className={`py-2 px-3 rounded-lg text-sm font-medium border transition-all
                             ${selectedTime === time
                                                                    ? 'bg-blue-500 border-blue-500 text-white'
                                                                    : 'bg-zinc-900 border-white/10 text-zinc-400 hover:border-white/30'}
                           `}
                                                        >
                                                            {time}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3 block">Your Email</label>
                                                <input
                                                    type="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    className="w-full bg-zinc-900 border border-white/10 rounded-xl p-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors"
                                                    placeholder="john@company.com"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3 block">Project Goals</label>
                                            <textarea
                                                rows={3}
                                                value={goals}
                                                onChange={(e) => setGoals(e.target.value)}
                                                className="w-full bg-zinc-900 border border-white/10 rounded-xl p-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                                placeholder="Tell us what you want to achieve..."
                                            />
                                        </div>

                                        <button
                                            disabled={formStatus === 'loading' || !goals.trim() || !email}
                                            onClick={handleConfirm}
                                            className={`w-full font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg group ${formStatus === 'loading'
                                                ? 'bg-zinc-800 text-zinc-500'
                                                : 'bg-blue-500 text-white hover:bg-blue-400 shadow-blue-500/20'
                                                }`}
                                        >
                                            {formStatus === 'loading' ? 'Processing...' : 'Confirm Meeting'}
                                            <CalendarIcon size={18} className="group-hover:-translate-y-1 transition-transform" />
                                        </button>

                                        {formStatus === 'error' && (
                                            <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl mt-4">
                                                <p className="text-center text-xs text-red-500 font-bold">
                                                    There was an error booking your meeting.
                                                </p>
                                                <p className="text-center text-[10px] text-red-400/60 mt-1 uppercase tracking-tighter">
                                                    Check console for details or ensure Supabase is configured
                                                </p>
                                            </div>
                                        )}

                                        <p className="text-center text-xs text-zinc-500 mt-4">
                                            A Google Meet invitation will be sent to your email after confirmation.
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                </div>
            </main>

            <Footer />

            {/* Background Texture */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
    );
};

export default Meeting;
