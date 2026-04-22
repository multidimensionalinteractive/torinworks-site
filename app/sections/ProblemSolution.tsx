import { MailWarning, XCircle, UserX, Unlink } from 'lucide-react';

const problems = [
  {
    icon: MailWarning,
    title: 'Missed or delayed follow-up',
    text: 'Inquiries go unanswered or lose momentum.',
  },
  {
    icon: XCircle,
    title: 'Leads that never convert',
    text: 'Opportunities fall through the cracks.',
  },
  {
    icon: UserX,
    title: 'Staff buried in manual tasks',
    text: 'Time is spent on repetitive work, not revenue.',
  },
  {
    icon: Unlink,
    title: "Tools that don't work together",
    text: 'Disconnected systems create friction and gaps.',
  },
];

export default function ProblemSolution() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left */}
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Most businesses aren't short on leads. They're not getting enough from them.
            </h2>
            <p className="text-gray-600 text-lg">
              Opportunities are lost in small gaps that add up to significant revenue left behind.
            </p>
          </div>

          {/* Right */}
          <div className="grid sm:grid-cols-2 gap-6">
            {problems.map((p) => (
              <div key={p.title} className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center">
                  <p.icon className="w-5 h-5 text-brand-600" />
                </div>
                <h3 className="text-gray-900 font-semibold">{p.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-gray-700 text-lg mt-16 font-medium">
          Better workflows close the gaps—and improve results.
        </p>
      </div>
    </section>
  );
}
