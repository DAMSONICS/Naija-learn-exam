import { useState } from "react";
import {
  Search,
  Menu,
  X,
  ChevronDown,
  Moon,
  Sun,
  LogIn,
  GraduationCap,
  BookOpen,
} from "lucide-react";
import { BOARD_LABELS, BOARD_DESCRIPTIONS, BOARD_COLORS } from "@/data/curriculumData";
import type { Board } from "@/types/curriculum";

export default function W3Navbar({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: (v: boolean) => void;
}) {
  const [loginOpen, setLoginOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [tutorialsOpen, setTutorialsOpen] = useState(false);
  const [referencesOpen, setReferencesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className="sticky top-0 z-50 bg-[#282A35] text-white shadow-lg">
      {/* Top bar */}
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <span className="text-[#04AA6D] text-2xl">W3</span>
          <span>Exam</span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-1 text-sm">
          {/* Tutorials dropdown */}
          <div className="relative">
            <button
              onClick={() => setTutorialsOpen(!tutorialsOpen)}
              onMouseEnter={() => setTutorialsOpen(true)}
              className="flex items-center gap-1 px-3 py-2 hover:bg-[#04AA6D] rounded transition-colors"
            >
              Tutorials <ChevronDown size={14} />
            </button>
            {tutorialsOpen && (
              <div
                className="absolute top-full left-0 mt-1 w-56 bg-white text-gray-800 rounded-lg shadow-xl border border-gray-200 py-2 animate-in fade-in slide-in-from-top-2"
                onMouseLeave={() => setTutorialsOpen(false)}
              >
                <div className="px-3 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">WAEC Subjects</div>
                {["Mathematics", "English Language", "Physics", "Chemistry", "Biology", "Economics"].map((s) => (
                  <a key={s} href="#subjects" className="block px-4 py-2 text-sm hover:bg-green-50 hover:text-green-700">{s}</a>
                ))}
                <div className="border-t my-1" />
                <div className="px-3 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">NECO Subjects</div>
                {["Mathematics", "English Language", "Government", "Commerce", "Accounting"].map((s) => (
                  <a key={s} href="#subjects" className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700">{s}</a>
                ))}
                <div className="border-t my-1" />
                <div className="px-3 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">JAMB Subjects</div>
                {["Use of English", "Mathematics", "Physics", "Chemistry", "Biology", "Economics"].map((s) => (
                  <a key={s} href="#subjects" className="block px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-700">{s}</a>
                ))}
              </div>
            )}
          </div>

          {/* References dropdown */}
          <div className="relative">
            <button
              onClick={() => setReferencesOpen(!referencesOpen)}
              onMouseEnter={() => setReferencesOpen(true)}
              className="flex items-center gap-1 px-3 py-2 hover:bg-[#04AA6D] rounded transition-colors"
            >
              References <ChevronDown size={14} />
            </button>
            {referencesOpen && (
              <div
                className="absolute top-full left-0 mt-1 w-56 bg-white text-gray-800 rounded-lg shadow-xl border border-gray-200 py-2 animate-in fade-in slide-in-from-top-2"
                onMouseLeave={() => setReferencesOpen(false)}
              >
                <div className="px-3 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">Formula Sheets</div>
                {["Mathematics Formulas", "Physics Formulas", "Chemistry Formulas"].map((s) => (
                  <a key={s} href="#formulas" className="block px-4 py-2 text-sm hover:bg-gray-50">{s}</a>
                ))}
                <div className="border-t my-1" />
                <div className="px-3 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">Past Questions</div>
                {["WAEC Past Questions", "NECO Past Questions", "JAMB Past Questions"].map((s) => (
                  <a key={s} href="#past-questions" className="block px-4 py-2 text-sm hover:bg-gray-50">{s}</a>
                ))}
              </div>
            )}
          </div>

          <a href="#exercises" className="px-3 py-2 hover:bg-[#04AA6D] rounded transition-colors">Exercises</a>
          <a href="#certified" className="px-3 py-2 hover:bg-[#04AA6D] rounded transition-colors">Get Certified</a>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Search */}
          <div className="hidden sm:flex items-center bg-[#1d2a35] rounded-md px-2 py-1 border border-gray-600 focus-within:border-[#04AA6D]">
            <Search size={16} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none outline-none text-sm ml-2 w-32 lg:w-48 text-white placeholder-gray-400"
            />
          </div>

          {/* Theme toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 hover:bg-[#04AA6D] rounded transition-colors"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Login button */}
          <div className="relative">
            <button
              onClick={() => setLoginOpen(!loginOpen)}
              className="flex items-center gap-1 bg-[#04AA6D] hover:bg-[#059660] px-3 py-1.5 rounded text-sm font-medium transition-colors"
            >
              <LogIn size={16} /> Login
            </button>
            {loginOpen && (
              <div
                className="absolute right-0 top-full mt-1 w-64 bg-white text-gray-800 rounded-lg shadow-xl border border-gray-200 py-2 animate-in fade-in slide-in-from-top-2"
                onMouseLeave={() => setLoginOpen(false)}
              >
                <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider border-b">Select Platform</div>
                {(Object.keys(BOARD_LABELS) as Board[]).map((board) => (
                  <button
                    key={board}
                    onClick={() => {
                      setLoginOpen(false);
                      window.location.hash = `#${board.toLowerCase()}-login`;
                    }}
                    className="w-full flex items-start gap-3 px-4 py-3 hover:bg-gray-50 text-left transition-colors border-b last:border-b-0"
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${BOARD_COLORS[board]}`}>
                      <GraduationCap size={16} />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{BOARD_LABELS[board]}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{BOARD_DESCRIPTIONS[board]}</div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden p-2 hover:bg-[#04AA6D] rounded transition-colors"
          >
            {mobileMenu ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenu && (
        <div className="md:hidden bg-[#1d2a35] border-t border-gray-700 py-2">
          <a href="#tutorials" className="block px-4 py-2 hover:bg-[#04AA6D]">Tutorials</a>
          <a href="#references" className="block px-4 py-2 hover:bg-[#04AA6D]">References</a>
          <a href="#exercises" className="block px-4 py-2 hover:bg-[#04AA6D]">Exercises</a>
          <a href="#certified" className="block px-4 py-2 hover:bg-[#04AA6D]">Get Certified</a>
          <div className="border-t border-gray-700 mt-2 pt-2">
            <a href="#subjects" className="block px-4 py-2 hover:bg-[#04AA6D]">Subjects</a>
            <a href="#curriculum" className="block px-4 py-2 hover:bg-[#04AA6D]">Curriculum</a>
          </div>
        </div>
      )}
    </nav>
  );
}
