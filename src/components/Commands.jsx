import { useState } from 'react'
import { Play, Pause, SkipForward, Square, Settings, Shield, Terminal } from 'lucide-react'

const Commands = () => {
  const [activeTab, setActiveTab] = useState('user')

  const commandCategories = {
    user: {
      title: '𝐔𝐬𝐞𝐫 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬',
      icon: Play,
      commands: [
        { cmd: '/play', desc: '𝐏𝐥𝐚𝐲 𝐚 𝐬𝐨𝐧𝐠 𝐟𝐫𝐨𝐦 𝐘𝐨𝐮𝐓𝐮𝐛𝐞 𝐔𝐑𝐋 𝐨𝐫 𝐬𝐞𝐚𝐫𝐜𝐡 𝐪𝐮𝐞𝐫𝐲' },
        { cmd: '/radio', desc: '𝐁𝐫𝐨𝐰𝐬𝐞 𝐚𝐧𝐝 𝐩𝐥𝐚𝐲 𝐟𝐫𝐨𝐦 50+ 𝐥𝐢𝐯𝐞 𝐫𝐚𝐝𝐢𝐨 𝐬𝐭𝐚𝐭𝐢𝐨𝐧𝐬' },
        { cmd: '/queue', desc: '𝐕𝐢𝐞𝐰 𝐜𝐮𝐫𝐫𝐞𝐧𝐭 𝐪𝐮𝐞𝐮𝐞 𝐚𝐧𝐝 𝐧𝐨𝐰 𝐩𝐥𝐚𝐲𝐢𝐧𝐠 𝐭𝐫𝐚𝐜𝐤' },
        { cmd: '/ping', desc: '𝐂𝐡𝐞𝐜𝐤 𝐛𝐨𝐭 𝐬𝐭𝐚𝐭𝐮𝐬 𝐚𝐧𝐝 𝐬𝐲𝐬𝐭𝐞𝐦 𝐬𝐭𝐚𝐭𝐢𝐬𝐭𝐢𝐜𝐬' },
        { cmd: '/help', desc: '𝐃𝐢𝐬𝐩𝐥𝐚𝐲 𝐡𝐞𝐥𝐩 𝐦𝐞𝐧𝐮 𝐰𝐢𝐭𝐡 𝐚𝐥𝐥 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬' },
        { cmd: '/lang', desc: '𝐂𝐡𝐚𝐧𝐠𝐞 𝐛𝐨𝐭 𝐥𝐚𝐧𝐠𝐮𝐚𝐠𝐞 (𝐄𝐧𝐠𝐥𝐢𝐬𝐡/𝐒𝐢𝐧𝐡𝐚𝐥𝐚)' },
      ],
    },
    admin: {
      title: '𝐀𝐝𝐦𝐢𝐧 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬',
      icon: Settings,
      commands: [
        { cmd: '/pause', desc: '𝐏𝐚𝐮𝐬𝐞 𝐜𝐮𝐫𝐫𝐞𝐧𝐭 𝐚𝐮𝐝𝐢𝐨 𝐬𝐭𝐫𝐞𝐚𝐦' },
        { cmd: '/resume', desc: '𝐑𝐞𝐬𝐮𝐦𝐞 𝐩𝐚𝐮𝐬𝐞𝐝 𝐚𝐮𝐝𝐢𝐨 𝐬𝐭𝐫𝐞𝐚𝐦' },
        { cmd: '/skip', desc: '𝐒𝐤𝐢𝐩 𝐭𝐨 𝐧𝐞𝐱𝐭 𝐭𝐫𝐚𝐜𝐤 𝐢𝐧 𝐪𝐮𝐞𝐮𝐞' },
        { cmd: '/stop', desc: '𝐒𝐭𝐨𝐩 𝐩𝐥𝐚𝐲𝐛𝐚𝐜𝐤 𝐚𝐧𝐝 𝐜𝐥𝐞𝐚𝐫 𝐪𝐮𝐞𝐮𝐞' },
        { cmd: '/seek', desc: '𝐉𝐮𝐦𝐩 𝐭𝐨 𝐬𝐩𝐞𝐜𝐢𝐟𝐢𝐜 𝐭𝐢𝐦𝐞𝐬𝐭𝐚𝐦𝐩 𝐢𝐧 𝐭𝐫𝐚𝐜𝐤' },
        { cmd: '/auth', desc: '𝐀𝐮𝐭𝐡𝐨𝐫𝐢𝐳𝐞 𝐮𝐬𝐞𝐫 𝐟𝐨𝐫 𝐩𝐥𝐚𝐲𝐛𝐚𝐜𝐤 𝐜𝐨𝐧𝐭𝐫𝐨𝐥𝐬' },
        { cmd: '/channelplay', desc: '𝐄𝐧𝐚𝐛𝐥𝐞 𝐜𝐡𝐚𝐧𝐧𝐞𝐥 𝐩𝐥𝐚𝐲 𝐦𝐨𝐝𝐞' },
        { cmd: '/reload', desc: '𝐑𝐞𝐥𝐨𝐚𝐝 𝐚𝐝𝐦𝐢𝐧 𝐜𝐚𝐜𝐡𝐞 𝐟𝐨𝐫 𝐠𝐫𝐨𝐮𝐩' },
      ],
    },
    sudo: {
      title: '𝐒𝐮𝐝𝐨 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬',
      icon: Shield,
      commands: [
        { cmd: '/stats', desc: '𝐕𝐢𝐞𝐰 𝐜𝐨𝐦𝐩𝐫𝐞𝐡𝐞𝐧𝐬𝐢𝐯𝐞 𝐛𝐨𝐭 𝐬𝐭𝐚𝐭𝐢𝐬𝐭𝐢𝐜𝐬' },
        { cmd: '/broadcast', desc: '𝐒𝐞𝐧𝐝 𝐦𝐞𝐬𝐬𝐚𝐠𝐞 𝐭𝐨 𝐚𝐥𝐥 𝐛𝐨𝐭 𝐮𝐬𝐞𝐫𝐬' },
        { cmd: '/addsudo', desc: '𝐆𝐫𝐚𝐧𝐭 𝐬𝐮𝐝𝐨 𝐩𝐫𝐢𝐯𝐢𝐥𝐞𝐠𝐞𝐬 𝐭𝐨 𝐮𝐬𝐞𝐫' },
        { cmd: '/blacklist', desc: '𝐁𝐥𝐨𝐜𝐤 𝐮𝐬𝐞𝐫 𝐨𝐫 𝐜𝐡𝐚𝐭 𝐟𝐫𝐨𝐦 𝐮𝐬𝐢𝐧𝐠 𝐛𝐨𝐭' },
        { cmd: '/restart', desc: '𝐑𝐞𝐬𝐭𝐚𝐫𝐭 𝐭𝐡𝐞 𝐛𝐨𝐭 𝐚𝐩𝐩𝐥𝐢𝐜𝐚𝐭𝐢𝐨𝐧' },
        { cmd: '/logs', desc: '𝐑𝐞𝐭𝐫𝐢𝐞𝐯𝐞 𝐛𝐨𝐭 𝐥𝐨𝐠 𝐟𝐢𝐥𝐞𝐬' },
        { cmd: '/eval', desc: '𝐄𝐱𝐞𝐜𝐮𝐭𝐞 𝐏𝐲𝐭𝐡𝐨𝐧 𝐜𝐨𝐝𝐞 (𝐨𝐰𝐧𝐞𝐫 𝐨𝐧𝐥𝐲)' },
      ],
    },
  }

  return (
    <section id="commands" className="section-padding bg-black/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-spotify-green">𝐂𝐨𝐦𝐦𝐚𝐧𝐝 𝐑𝐞𝐟𝐞𝐫𝐞𝐧𝐜𝐞</span>
          </h2>
          <p className="text-gray-400 text-lg">
            𝐂𝐨𝐦𝐩𝐥𝐞𝐭𝐞 𝐥𝐢𝐬𝐭 𝐨𝐟 𝐚𝐯𝐚𝐢𝐥𝐚𝐛𝐥𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬 𝐨𝐫𝐠𝐚𝐧𝐢𝐳𝐞𝐝 𝐛𝐲 𝐩𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧 𝐥𝐞𝐯𝐞𝐥
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(commandCategories).map(([key, category]) => {
            const Icon = category.icon
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-spotify-green text-black shadow-lg shadow-spotify-green/50 scale-105'
                    : 'glass hover:bg-spotify-surface-light hover:border-spotify-green'
                }`}
              >
                <Icon className="w-5 h-5" />
                {category.title}
              </button>
            )
          })}
        </div>

        {/* Commands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {commandCategories[activeTab].commands.map((command, index) => (
            <div
              key={index}
              className="glass p-6 rounded-xl hover:bg-white/15 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-start gap-3">
                <Terminal className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <code className="text-lg font-mono text-blue-300 font-semibold">
                    {command.cmd}
                  </code>
                  <p className="text-gray-400 mt-2 text-sm">{command.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Command Usage Note */}
        <div className="mt-12 glass p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <Terminal className="w-5 h-5 text-spotify-green" />
            𝐔𝐬𝐚𝐠𝐞 𝐍𝐨𝐭𝐞𝐬
          </h3>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-spotify-green mt-1">•</span>
              <span>𝐀𝐝𝐦𝐢𝐧 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬 𝐫𝐞𝐪𝐮𝐢𝐫𝐞 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐭𝐨𝐫 𝐩𝐫𝐢𝐯𝐢𝐥𝐞𝐠𝐞𝐬 𝐢𝐧 𝐭𝐡𝐞 𝐠𝐫𝐨𝐮𝐩</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-spotify-green mt-1">•</span>
              <span>𝐒𝐮𝐝𝐨 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬 𝐚𝐫𝐞 𝐫𝐞𝐬𝐭𝐫𝐢𝐜𝐭𝐞𝐝 𝐭𝐨 𝐛𝐨𝐭 𝐨𝐰𝐧𝐞𝐫 𝐚𝐧𝐝 𝐚𝐮𝐭𝐡𝐨𝐫𝐢𝐳𝐞𝐝 𝐬𝐮𝐝𝐨 𝐮𝐬𝐞𝐫𝐬</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-spotify-green mt-1">•</span>
              <span>
                𝐔𝐬𝐞 <code className="text-spotify-green font-mono px-1">/𝐡𝐞𝐥𝐩</code> 𝐢𝐧 𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦 𝐭𝐨 𝐬𝐞𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐞𝐱𝐚𝐦𝐩𝐥𝐞𝐬 𝐚𝐧𝐝 𝐬𝐲𝐧𝐭𝐚𝐱
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Commands
