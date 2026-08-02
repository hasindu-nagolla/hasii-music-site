import { Github, FileText, Users } from "lucide-react";

const OpenSource = () => {
  return (
    <section className="py-24 bg-brand-surface dark:bg-gray-900/50 relative overflow-hidden border-t border-gray-100 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-dark dark:text-white">
            Open Source & Collaboration
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            HasiiMusicBot is built in the open. We welcome contributions from developers to improve the project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* GitHub Repo */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 text-brand-dark dark:text-white rounded-full flex items-center justify-center mb-6">
              <Github className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-xl text-brand-dark dark:text-white mb-3">
              Source Code
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm">
              The entire source code is available on GitHub. You can fork it, inspect the code, and host it yourself.
            </p>
            <a
              href="https://github.com/hasindu-nagolla/HasiiMusicBot"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto font-semibold text-brand-primary hover:text-brand-dark dark:text-white transition-colors"
            >
              View Repository →
            </a>
          </div>

          {/* Collaboration */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 text-brand-dark dark:text-white rounded-full flex items-center justify-center mb-6">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-xl text-brand-dark dark:text-white mb-3">
              Contribute
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm">
              We actively accept pull requests. Whether it's fixing bugs or adding features, your help is appreciated.
            </p>
            <a
              href="https://github.com/hasindu-nagolla/HasiiMusicBot/pulls"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto font-semibold text-brand-primary hover:text-brand-dark dark:text-white transition-colors"
            >
              Submit a PR →
            </a>
          </div>

          {/* License */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 text-brand-dark dark:text-white rounded-full flex items-center justify-center mb-6">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-xl text-brand-dark dark:text-white mb-3">
              GPL v3 License
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm">
              This project is licensed under the GNU General Public License v3.0, ensuring it remains free and open.
            </p>
            <a
              href="https://github.com/hasindu-nagolla/HasiiMusicBot/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto font-semibold text-brand-primary hover:text-brand-dark dark:text-white transition-colors"
            >
              Read License →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
