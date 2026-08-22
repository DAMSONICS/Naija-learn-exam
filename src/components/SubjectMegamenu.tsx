import { useState } from "react";
import { Search, ChevronRight, ExternalLink, BookOpen, FileText, Calculator, Beaker, Atom, Scale, Globe, PenTool, Trash2, Plus, Minus, Edit, Eye, Award, Clock, Star, Lightbulb } from "lucide-react";
import { SUBJECTS, CATEGORIES, BOARD_COLORS, getSubjectsByCategory, searchSubjects } from "@/data/curriculumData";
import type { Board, SubjectCategory } from "@/types/curriculum";

const CATEGORY_ICONS: Record<string, typeof BookOpen> = {
  "Sciences & Tech": Atom,
  "Commercial & Business": Scale,
  "Arts & Humanities": Globe,
  "General / Compulsory": BookOpen,
  "Vocational & Technical": PenTool,
};

export default function SubjectMegamenu() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeBoard, setActiveBoard] = useState<Board | "All">("All");
  const [expandedCategory, setExpandedCategory] = useState<string>(CATEGORIES[0]);
  const [expandedSubjects, setExpandedSubjects] = useState<Set<string>>(new Set());

  const toggleSubject = (id: string) => {
    setExpandedSubjects((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  let filtered = SUBJECTS;
  if (activeBoard !== "All") filtered = filtered.filter((s) => s.boards.includes(activeBoard as Board));
  if (searchQuery.trim()) filtered = searchSubjects(searchQuery);

  return (
    <section id="subjects" className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-[#282A35]">Subject Library</h2>
            <p className="text-sm text-gray-500 mt-1">Browse all WAEC, NECO & JAMB subjects by category</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {/* Board filter */}
            <div className="flex bg-white rounded-lg border border-gray-200 overflow-hidden">
              {(["All", "WAEC", "NECO", "JAMB"] as const).map((b) => (
                <button
                  key={b}
                  onClick={() => setActiveBoard(b)}
                  className={`px-3 py-1.5 text-xs font-medium transition-colors ${
                    activeBoard === b
                      ? "bg-[#04AA6D] text-white"
                      : "bg-white text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
            {/* Search */}
            <div className="flex items-center bg-white rounded-lg border border-gray-200 px-2 py-1">
              <Search size={14} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search subjects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none text-xs ml-2 w-36 text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-1 mb-6 border-b border-gray-200 pb-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setExpandedCategory(cat)}
              className={`px-3 py-1.5 text-sm rounded-t transition-colors ${
                expandedCategory === cat
                  ? "bg-[#04AA6D] text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Content area */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left sidebar - categories */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="bg-[#282A35] text-white px-4 py-2 text-sm font-semibold">Categories</div>
              {CATEGORIES.map((cat) => {
                const Icon = CATEGORY_ICONS[cat] || BookOpen;
                const count = getSubjectsByCategory(cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setExpandedCategory(cat)}
                    className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors border-l-4 ${
                      expandedCategory === cat
                        ? "border-[#04AA6D] bg-green-50 text-green-800"
                        : "border-transparent text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <span className="flex items-center gap-2"><Icon size={16} />{cat}</span>
                    <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right content - subject cards */}
          <div className="lg:col-span-3">
            {filtered.length === 0 ? (
              <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
                <BookOpen size={48} className="mx-auto text-gray-300 mb-3" />
                <p className="text-gray-500">No subjects found matching your criteria.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {getSubjectsByCategory(expandedCategory)
                  .filter((s) => activeBoard === "All" || s.boards.includes(activeBoard as Board))
                  .map((subject) => (
                    <div key={subject.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                      <button
                        onClick={() => toggleSubject(subject.id)}
                        className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                            <BookOpen size={20} className="text-green-700" />
                          </div>
                          <div className="text-left">
                            <div className="font-semibold text-sm text-gray-800">{subject.name}</div>
                            <div className="flex gap-1 mt-1">
                              {subject.boards.map((b) => (
                                <span key={b} className={`text-xs px-1.5 py-0.5 rounded ${BOARD_COLORS[b]}`}>{b}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-400">{subject.units.length} units</span>
                          {expandedSubjects.has(subject.id) ? <Minus size={16} className="text-gray-400" /> : <Plus size={16} className="text-gray-400" />}
                        </div>
                      </button>
                      {expandedSubjects.has(subject.id) && (
                        <div className="border-t border-gray-100 bg-gray-50 px-4 py-3 space-y-2">
                          {subject.units.map((unit) => (
                            <div key={unit.id} className="flex items-start gap-3 py-2 border-b border-gray-100 last:border-b-0">
                              <ChevronRight size={14} className="text-[#04AA6D] mt-0.5 flex-shrink-0" />
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-medium text-gray-700">{unit.title}</div>
                                <div className="text-xs text-gray-400 mt-0.5">{unit.objectives.length} objectives · {unit.topics.length} topics</div>
                              </div>
                              <div className="flex gap-1 flex-shrink-0">
                                <button title="View Syllabus" className="p-1.5 hover:bg-white rounded transition-colors"><Eye size={14} className="text-gray-400" /></button>
                                <button title="Past Questions" className="p-1.5 hover:bg-white rounded transition-colors"><FileText size={14} className="text-gray-400" /></button>
                                <button title="CBT Practice" className="p-1.5 hover:bg-white rounded transition-colors"><Calculator size={14} className="text-gray-400" /></button>
                                {subject.formulaSheet && subject.formulaSheet.length > 0 && (
                                  <button title="Formula Sheet" className="p-1.5 hover:bg-white rounded transition-colors"><Lightbulb size={14} className="text-yellow-500" /></button>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
