import { useState } from "react";
import { ChevronRight, ChevronDown, BookOpen, FileText, Calculator, Lightbulb, Clock, Award, CheckCircle, AlertTriangle } from "lucide-react";
import { SUBJECTS, BOARD_COLORS, PAST_QUESTIONS } from "@/data/curriculumData";
import type { Board, PastQuestion } from "@/types/curriculum";

const BOARDS: Board[] = ["WAEC", "NECO", "JAMB"];

export default function CurriculumBrowser({ board: initialBoard }: { board?: Board }) {
  const [board, setBoard] = useState<Board>(initialBoard || "WAEC");
  const [selectedSubjectId, setSelectedSubjectId] = useState<string | null>(null);
  const [selectedUnitId, setSelectedUnitId] = useState<string | null>(null);
  const [expandedUnits, setExpandedUnits] = useState<Set<string>>(new Set());
  const [cbtMode, setCbtMode] = useState(false);
  const [cbtQuestions, setCbtQuestions] = useState<PastQuestion[]>([]);
  const [cbtIndex, setCbtIndex] = useState(0);
  const [cbtAnswers, setCbtAnswers] = useState<Record<number, number>>({});
  const [cbtSubmitted, setCbtSubmitted] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const subjects = SUBJECTS.filter((s) => s.boards.includes(board));
  const subject = subjects.find((s) => s.id === selectedSubjectId);
  const unit = subject?.units.find((u) => u.id === selectedUnitId);

  const toggleUnit = (id: string) => {
    setExpandedUnits((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  const startCBT = () => {
    const qs = PAST_QUESTIONS.filter((q) => q.board === board);
    setCbtQuestions(qs.slice(0, Math.min(10, qs.length)));
    setCbtIndex(0);
    setCbtAnswers({});
    setCbtSubmitted(false);
    setCbtMode(true);
  };

  const submitCBT = () => {
    setCbtSubmitted(true);
  };

  const cbtScore = cbtSubmitted
    ? cbtQuestions.reduce((acc, q, i) => acc + (cbtAnswers[i] === q.correctIndex ? 1 : 0), 0)
    : 0;

  // CBT Mode
  if (cbtMode && cbtQuestions.length > 0) {
    const currentQ = cbtQuestions[cbtIndex];
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <button onClick={() => setCbtMode(false)} className="mb-4 text-sm text-[#04AA6D] hover:underline flex items-center gap-1">
          ← Back to Curriculum
        </button>

        {cbtSubmitted ? (
          <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
            <Award size={64} className="mx-auto text-yellow-500 mb-4" />
            <h3 className="text-2xl font-bold text-gray-800">Quiz Complete!</h3>
            <p className="text-4xl font-bold mt-4 text-[#04AA6D]">{cbtScore}/{cbtQuestions.length}</p>
            <p className="text-gray-500 mt-2">{Math.round((cbtScore / cbtQuestions.length) * 100)}% score</p>
            <div className="mt-6 flex justify-center gap-3">
              <button onClick={startCBT} className="bg-[#04AA6D] text-white px-4 py-2 rounded-lg hover:bg-[#059660] transition-colors">Retake Quiz</button>
              <button onClick={() => setCbtMode(false)} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">Back to Topics</button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Progress bar */}
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">Question {cbtIndex + 1} of {cbtQuestions.length}</span>
                <span className="text-sm text-gray-400 flex items-center gap-1"><Clock size={14} />{board} Practice</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-[#04AA6D] h-2 rounded-full transition-all" style={{ width: `${((cbtIndex + 1) / cbtQuestions.length) * 100}%` }} />
              </div>
            </div>

            {/* Question card */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-start gap-2 mb-4">
                <FileText size={18} className="text-[#04AA6D] mt-0.5 flex-shrink-0" />
                <p className="text-lg font-medium text-gray-800">{currentQ.question}</p>
              </div>
              <div className="space-y-2">
                {currentQ.options.map((opt, oi) => {
                  let optClass = "border-gray-200 hover:border-[#04AA6D] hover:bg-green-50";
                  if (cbtAnswers[cbtIndex] !== undefined) {
                    if (oi === currentQ.correctIndex) optClass = "border-green-500 bg-green-50";
                    else if (cbtAnswers[cbtIndex] === oi) optClass = "border-red-400 bg-red-50";
                    else optClass = "border-gray-200 opacity-50";
                  } else if (cbtAnswers[cbtIndex] === oi) {
                    optClass = "border-[#04AA6D] bg-green-50";
                  }
                  return (
                    <button
                      key={oi}
                      onClick={() => !cbtSubmitted && setCbtAnswers((prev) => ({ ...prev, [cbtIndex]: oi }))}
                      disabled={cbtSubmitted}
                      className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all ${optClass}`}
                    >
                      <span className="font-mono text-sm mr-3 text-gray-400">{String.fromCharCode(65 + oi)}.</span>
                      <span className="text-gray-700">{opt}</span>
                      {cbtSubmitted && oi === currentQ.correctIndex && <CheckCircle size={16} className="inline ml-2 text-green-600" />}
                      {cbtSubmitted && cbtAnswers[cbtIndex] === oi && oi !== currentQ.correctIndex && <AlertTriangle size={16} className="inline ml-2 text-red-500" />}
                    </button>
                  );
                })}
              </div>
              {cbtSubmitted && (
                <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm font-semibold text-blue-800 mb-1">Explanation:</p>
                  <p className="text-sm text-blue-700">{currentQ.explanation}</p>
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="flex justify-between">
              <button
                onClick={() => setCbtIndex(Math.max(0, cbtIndex - 1))}
                disabled={cbtIndex === 0}
                className="px-4 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-40 transition-colors"
              >
                Previous
              </button>
              {cbtIndex < cbtQuestions.length - 1 ? (
                <button onClick={() => setCbtIndex(cbtIndex + 1)} className="px-4 py-2 rounded-lg bg-[#04AA6D] text-white hover:bg-[#059660] transition-colors">
                  Next
                </button>
              ) : (
                <button onClick={submitCBT} className="px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition-colors">Submit Quiz</button>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Normal curriculum view
  return (
    <section id="curriculum" className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Board switcher */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-[#282A35]">Current Curriculum</h2>
            <p className="text-sm text-gray-500 mt-1">Explore syllabus topics and learning objectives</p>
          </div>
          <div className="flex bg-gray-100 rounded-lg overflow-hidden">
            {BOARDS.map((b) => (
              <button
                key={b}
                onClick={() => { setBoard(b); setSelectedSubjectId(null); setSelectedUnitId(null); }}
                className={`px-4 py-2 text-sm font-medium transition-colors ${board === b ? "bg-[#04AA6D] text-white" : "text-gray-600 hover:bg-gray-200"}`}
              >
                {b}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-6">
          {/* Left sidebar - subject list */}
          <div className={`${sidebarOpen ? "w-64" : "w-0"} transition-all duration-300 flex-shrink-0 overflow-hidden`}>
            <div className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden sticky top-20">
              <div className="bg-[#282A35] text-white px-4 py-2 text-sm font-semibold flex items-center justify-between">
                <span>{board} Subjects</span>
                <button onClick={() => setSidebarOpen(!sidebarOpen)} className="hover:text-[#04AA6D]"><ChevronRight size={16} /></button>
              </div>
              <div className="max-h-[calc(100vh-200px)] overflow-y-auto">
                {subjects.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => { setSelectedSubjectId(s.id); setSelectedUnitId(null); }}
                    className={`w-full text-left px-4 py-2.5 text-sm border-l-4 transition-colors ${
                      selectedSubjectId === s.id
                        ? "border-[#04AA6D] bg-green-50 text-green-800 font-medium"
                        : "border-transparent text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {s.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar toggle when closed */}
          {!sidebarOpen && (
            <button onClick={() => setSidebarOpen(true)} className="w-8 h-8 bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-200 flex-shrink-0">
              <ChevronRight size={16} className="text-gray-500" />
            </button>
          )}

          {/* Main content area */}
          <div className="flex-1 min-w-0">
            {subject ? (
              <div>
                {/* Subject header */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 p-6 mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <BookOpen size={24} className="text-[#04AA6D]" />
                    <h3 className="text-xl font-bold text-gray-800">{subject.name}</h3>
                  </div>
                  <div className="flex gap-2 mb-3">
                    {subject.boards.map((b) => (
                      <span key={b} className={`text-xs px-2 py-0.5 rounded ${BOARD_COLORS[b]}`}>{b}</span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">{subject.units.length} units · {subject.units.reduce((a, u) => a + u.topics.length, 0)} topics</p>
                  <button onClick={startCBT} className="mt-3 inline-flex items-center gap-2 bg-[#04AA6D] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#059660] transition-colors">
                    <Calculator size={16} /> Try It Yourself — CBT Practice
                  </button>
                </div>

                {/* Units */}
                <div className="space-y-3">
                  {subject.units.map((unit) => (
                    <div key={unit.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                      <button
                        onClick={() => { setSelectedUnitId(unit.id === selectedUnitId ? null : unit.id); toggleUnit(unit.id); }}
                        className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`transition-transform ${expandedUnits.has(unit.id) ? "rotate-90" : ""}`}>
                            <ChevronRight size={16} className="text-[#04AA6D]" />
                          </div>
                          <span className="font-medium text-sm text-gray-700">{unit.title}</span>
                        </div>
                        <span className="text-xs text-gray-400">{unit.topics.length} topics</span>
                      </button>
                      {expandedUnits.has(unit.id) && (
                        <div className="border-t border-gray-100 bg-gray-50 px-4 py-4 space-y-4">
                          {/* Objectives */}
                          <div>
                            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Learning Objectives</h4>
                            <ul className="space-y-1">
                              {unit.objectives.map((obj, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                  <CheckCircle size={14} className="text-[#04AA6D] mt-0.5 flex-shrink-0" />
                                  {obj}
                                </li>
                              ))}
                            </ul>
                          </div>
                          {/* Topics */}
                          <div>
                            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Topics</h4>
                            <div className="flex flex-wrap gap-2">
                              {unit.topics.map((topic) => (
                                <span key={topic} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs text-gray-600 hover:border-[#04AA6D] hover:text-[#04AA6D] cursor-pointer transition-colors">
                                  {topic}
                                </span>
                              ))}
                            </div>
                          </div>
                          {/* Formula sheet if available */}
                          {subject.formulaSheet && subject.formulaSheet.length > 0 && (
                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                              <h4 className="text-xs font-semibold text-yellow-800 uppercase tracking-wider mb-2 flex items-center gap-1">
                                <Lightbulb size={14} /> Quick Reference Formulas
                              </h4>
                              <ul className="space-y-1">
                                {subject.formulaSheet.map((f, i) => (
                                  <li key={i} className="text-sm text-yellow-700 font-mono">{f}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-12 text-center">
                <BookOpen size={48} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-lg font-semibold text-gray-600">Select a Subject</h3>
                <p className="text-sm text-gray-400 mt-1">Choose a {board} subject from the sidebar to explore its curriculum</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
