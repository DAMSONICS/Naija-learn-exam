import { useState, useEffect } from "react";
import { X, Calculator, Clock, CheckCircle, AlertTriangle, Award, PlayCircle, BookOpen } from "lucide-react";
import { PAST_QUESTIONS, BOARD_COLORS } from "@/data/curriculumData";
import type { Board, PastQuestion } from "@/types/curriculum";

interface TryItCbtModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialBoard?: Board;
}

export default function TryItCbtModal({ isOpen, onClose, initialBoard = "WAEC" }: TryItCbtModalProps) {
  const [board, setBoard] = useState<Board>(initialBoard);
  const [started, setStarted] = useState(false);
  const [questions, setQuestions] = useState<PastQuestion[]>([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [timer, setTimer] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  if (!isOpen) return null;

  const startQuiz = () => {
    const qs = PAST_QUESTIONS.filter((q) => q.board === board);
    setQuestions(qs.slice(0, Math.min(10, qs.length)));
    setIndex(0);
    setAnswers({});
    setSubmitted(false);
    setTimer(0);
    setStarted(true);
    setTimerRunning(true);
  };

  // Timer effect
  useEffect(() => {
    if (!timerRunning || submitted) return;
    const id = setInterval(() => setTimer((t) => t + 1), 1000);
    return () => clearInterval(id);
  }, [timerRunning, submitted]);

  const score = submitted
    ? questions.reduce((a, q, i) => a + (answers[i] === q.correctIndex ? 1 : 0), 0)
    : 0;

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  // Landing view
  if (!started) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-emerald-500 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Calculator size={24} className="text-white" />
              <h2 className="text-lg font-bold text-white">Try It Yourself — CBT Practice</h2>
            </div>
            <button onClick={onClose} className="text-white/80 hover:text-white"><X size={20} /></button>
          </div>
          <div className="p-6 space-y-6">
            {/* Board selector */}
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2 block">Select Exam Board</label>
              <div className="flex gap-2">
                {(Object.keys(BOARD_COLORS) as Board[]).map((b) => (
                  <button
                    key={b}
                    onClick={() => setBoard(b)}
                    className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                      board === b ? "bg-[#04AA6D] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Info cards */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-blue-50 rounded-lg p-3 text-center">
                <BookOpen size={20} className="mx-auto text-blue-600 mb-1" />
                <div className="text-xs text-blue-700 font-medium">{Math.min(10, PAST_QUESTIONS.filter((q) => q.board === board).length)} Questions</div>
              </div>
              <div className="bg-orange-50 rounded-lg p-3 text-center">
                <Clock size={20} className="mx-auto text-orange-600 mb-1" />
                <div className="text-xs text-orange-700 font-medium">Timed</div>
              </div>
              <div className="bg-green-50 rounded-lg p-3 text-center">
                <Award size={20} className="mx-auto text-green-600 mb-1" />
                <div className="text-xs text-green-700 font-medium">Instant Score</div>
              </div>
            </div>

            <button
              onClick={startQuiz}
              className="w-full flex items-center justify-center gap-2 bg-[#04AA6D] text-white py-3 rounded-xl font-semibold hover:bg-[#059660] transition-colors"
            >
              <PlayCircle size={20} /> Start Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Results view
  if (submitted) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-emerald-500 px-6 py-6 text-center">
            <Award size={48} className="mx-auto text-yellow-300 mb-3" />
            <h2 className="text-2xl font-bold text-white">Quiz Complete!</h2>
            <p className="text-3xl font-bold text-white mt-2">{score}/{questions.length}</p>
            <p className="text-white/80 text-sm mt-1">{formatTime(timer)} · {Math.round((score / questions.length) * 100)}% correct</p>
          </div>
          <div className="p-6 space-y-3">
            {questions.map((q, qi) => {
              const isCorrect = answers[qi] === q.correctIndex;
              return (
                <div key={q.id} className={`p-3 rounded-lg border ${isCorrect ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}`}>
                  <div className="flex items-start gap-2">
                    {isCorrect ? <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" /> : <AlertTriangle size={16} className="text-red-500 mt-0.5 flex-shrink-0" />}
                    <div>
                      <p className="text-sm font-medium text-gray-800">{q.question}</p>
                      {!isCorrect && (
                        <p className="text-xs text-gray-500 mt-1">Correct answer: {String.fromCharCode(65 + q.correctIndex)}. {q.explanation}</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="flex gap-3 pt-3">
              <button onClick={startQuiz} className="flex-1 bg-[#04AA6D] text-white py-2 rounded-lg font-medium hover:bg-[#059660] transition-colors">Retake</button>
              <button onClick={onClose} className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Active quiz view
  const currentQ = questions[index];
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#282A35] text-white px-6 py-3 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium">Question {index + 1}/{questions.length}</span>
            <span className={`text-xs px-2 py-0.5 rounded ${BOARD_COLORS[board]}`}>{board}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-mono flex items-center gap-1"><Clock size={14} />{formatTime(timer)}</span>
            <button onClick={onClose} className="text-white/60 hover:text-white"><X size={18} /></button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="bg-gray-100 h-1 flex-shrink-0">
          <div className="bg-[#04AA6D] h-1 transition-all" style={{ width: `${((index + 1) / questions.length) * 100}%` }} />
        </div>

        {/* Question area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
            <p className="text-lg font-medium text-gray-800">{currentQ.question}</p>
          </div>

          <div className="space-y-2">
            {currentQ.options.map((opt, oi) => {
              let cls = "border-gray-200 hover:border-[#04AA6D] hover:bg-green-50";
              if (answers[index] !== undefined) {
                if (oi === currentQ.correctIndex) cls = "border-green-500 bg-green-50";
                else if (answers[index] === oi) cls = "border-red-400 bg-red-50";
                else cls = "border-gray-200 opacity-40";
              }
              return (
                <button
                  key={oi}
                  onClick={() => !submitted && setAnswers((prev) => ({ ...prev, [index]: oi }))}
                  disabled={submitted}
                  className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all ${cls}`}
                >
                  <span className="font-mono text-sm mr-3 text-gray-400">{String.fromCharCode(65 + oi)}.</span>
                  <span className="text-gray-700">{opt}</span>
                </button>
              );
            })}
          </div>

          {answers[index] !== undefined && !submitted && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-xs text-blue-700">Answer selected. Move to next question or submit when done.</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between flex-shrink-0">
          <button
            onClick={() => setIndex(Math.max(0, index - 1))}
            disabled={index === 0}
            className="px-4 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-40 transition-colors"
          >
            Previous
          </button>
          {index < questions.length - 1 ? (
            <button onClick={() => setIndex(index + 1)} className="px-4 py-2 rounded-lg bg-[#04AA6D] text-white hover:bg-[#059660] transition-colors">Next</button>
          ) : (
            <button onClick={() => { setTimerRunning(false); setSubmitted(true); }} className="px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition-colors">Submit Quiz</button>
          )}
        </div>
      </div>
    </div>
  );
}