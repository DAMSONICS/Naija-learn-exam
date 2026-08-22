import { useState, useEffect } from "react";
import W3Navbar from "@/components/W3Navbar";
import SubjectMegamenu from "@/components/SubjectMegamenu";
import CurriculumBrowser from "@/components/CurriculumBrowser";
import TryItCbtModal from "@/components/TryItCbtModal";
import { BookOpen, Calculator, Award, Users, ChevronRight, PlayCircle, Star, Zap, ArrowRight } from "lucide-react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cbtOpen, setCbtOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<"home" | "subjects" | "curriculum">("home");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "") as typeof activeSection;
    if (["home", "subjects", "curriculum"].includes(hash)) setActiveSection(hash);
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white text-gray-800">
        <W3Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#282A35] via-[#1d2a35] to-[#282A35] text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-[#04AA6D]/20 text-[#04AA6D] px-3 py-1 rounded-full text-xs font-semibold mb-4">
                <Zap size={14} /> Nigeria's #1 Exam Prep Platform
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-none mb-4">
                Learn WAEC, NECO & JAMB
                <span className="text-[#04AA6D]"> with W3Schools Style</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl mb-8 leading-relaxed">
                Interactive tutorials, past questions, formula sheets, and CBT practice — all in one place. Master every subject for your exams.
              </p>
              <div className="flex flex-wrap gap-3">
                <button onClick={() => setActiveSection("curriculum")} className="bg-[#04AA6D] hover:bg-[#059660] text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
                  Start Learning <ArrowRight size={18} />
                </button>
                <button onClick={() => setCbtOpen(true)} className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 border border-white/20">
                  <PlayCircle size={18} /> Try It Yourself
                </button>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {[
                { icon: BookOpen, label: "Subjects", value: "15+" },
                { icon: Calculator, label: "CBT Practice", value: "500+" },
                { icon: Award, label: "Boards", value: "3" },
                { icon: Users, label: "Students", value: "50K+" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <stat.icon size={24} className="text-[#04AA6D] mb-2" />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Board Quick Links */}
        <section className="bg-green-50 py-8 border-b border-green-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: "WAEC", color: "green", desc: "WASSCE syllabus coverage", link: "#waec-login" },
                { name: "NECO", color: "blue", desc: "SSCE/BECE complete guide", link: "#neco-login" },
                { name: "JAMB", color: "orange", desc: "UTME e-Facility & CBT", link: "#jamb-login" },
              ].map((board) => (
                <a
                  key={board.name}
                  href={board.link}
                  className="bg-white rounded-xl p-5 border border-gray-200 hover:border-[#04AA6D] hover:shadow-md transition-all group"
                >
                  <div className={`w-12 h-12 rounded-lg bg-${board.color}-100 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <Star size={24} className={`text-${board.color}-600`} />
                  </div>
                  <h3 className="font-bold text-gray-800">{board.name} Learning Platform</h3>
                  <p className="text-sm text-gray-500 mt-1">{board.desc}</p>
                  <span className="text-sm text-[#04AA6D] font-medium mt-2 inline-block group-hover:translate-x-1 transition-transform">
                    Explore →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-[#282A35]">Why Students Love W3Exam</h2>
              <p className="text-gray-500 mt-2 max-w-xl mx-auto">Everything you need to pass your exams, organized exactly like W3Schools makes learning easy.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: BookOpen, title: "Complete Syllabus", desc: "Every WAEC, NECO, and JAMB topic covered with detailed objectives." },
                { icon: Calculator, title: "CBT Practice", desc: "Timed quizzes with instant scoring and detailed explanations." },
                { icon: Award, title: "Formula Sheets", desc: "Quick reference formulas for Mathematics, Physics, and Chemistry." },
                { icon: Users, title: "Past Questions", desc: "Real exam questions from 2020-2023 with step-by-step solutions." },
              ].map((feature) => (
                <div key={feature.title} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-[#04AA6D] hover:shadow-md transition-all">
                  <feature.icon size={32} className="text-[#04AA6D] mb-3" />
                  <h3 className="font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Active section content */}
        {activeSection === "subjects" && <SubjectMegamenu />}
        {activeSection === "curriculum" && <CurriculumBrowser />}
        {activeSection === "home" && (
          <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
              <div className="bg-gradient-to-r from-[#04AA6D] to-emerald-600 rounded-2xl p-8 md:p-12 text-white text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Start Your Exam Prep?</h2>
                <p className="text-white/80 max-w-xl mx-auto mb-6">Choose your board and dive into interactive lessons, practice quizzes, and study materials.</p>
                <div className="flex flex-wrap justify-center gap-3">
                  <button onClick={() => setActiveSection("curriculum")} className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Browse Curriculum</button>
                  <button onClick={() => setCbtOpen(true)} className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors border border-white/30">Start CBT Practice</button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="bg-[#282A35] text-gray-400 py-10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 font-bold text-xl text-white mb-3">
                  <span className="text-[#04AA6D] text-2xl">W3</span>Exam
                </div>
                <p className="text-sm leading-relaxed">Nigeria's premier exam preparation platform. Learn WAEC, NECO & JAMB with W3Schools-style interactive tutorials.</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3">Exams</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#waec" className="hover:text-[#04AA6D] transition-colors">WAEC WASSCE</a></li>
                  <li><a href="#neco" className="hover:text-[#04AA6D] transition-colors">NECO SSCE</a></li>
                  <li><a href="#jamb" className="hover:text-[#04AA6D] transition-colors">JAMB UTME</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3">Resources</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#subjects" className="hover:text-[#04AA6D] transition-colors">Subject Library</a></li>
                  <li><a href="#curriculum" className="hover:text-[#04AA6D] transition-colors">Curriculum Guide</a></li>
                  <li><a href="#past-questions" className="hover:text-[#04AA6D] transition-colors">Past Questions</a></li>
                  <li><a href="#formulas" className="hover:text-[#04AA6D] transition-colors">Formula Sheets</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3">Tools</h4>
                <ul className="space-y-2 text-sm">
                  <li><button onClick={() => setCbtOpen(true)} className="hover:text-[#04AA6D] transition-colors">CBT Practice</button></li>
                  <li><a href="#" className="hover:text-[#04AA6D] transition-colors">Study Planner</a></li>
                  <li><a href="#" className="hover:text-[#04AA6D] transition-colors">Progress Tracker</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-6 text-center text-sm">
              <p>&copy; {new Date().getFullYear()} W3Exam — Built for Nigerian students preparing for WAEC, NECO & JAMB.</p>
            </div>
          </div>
        </footer>

        {/* CBT Modal */}
        <TryItCbtModal isOpen={cbtOpen} onClose={() => setCbtOpen(false)} />
      </div>
    </div>
  );
}
