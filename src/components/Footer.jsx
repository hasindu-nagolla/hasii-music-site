import { Github, MessageCircle, ExternalLink } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const links = {
    product: [
      { name: '𝐅𝐞𝐚𝐭𝐮𝐫𝐞𝐬', href: '#features' },
      { name: '𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬', href: '#commands' },
      { name: '𝐃𝐨𝐜𝐮𝐦𝐞𝐧𝐭𝐚𝐭𝐢𝐨𝐧', href: 'https://github.com/hasindu-nagolla/HasiiMusicBot#readme' },
    ],
    community: [
      { name: '𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦 𝐂𝐡𝐚𝐧𝐧𝐞𝐥', href: 'https://t.me/hasiimusic' },
      { name: '𝐒𝐮𝐩𝐩𝐨𝐫𝐭 𝐆𝐫𝐨𝐮𝐩', href: 'https://t.me/+VWlXK8QrYfZlYjNl' },
      { name: '𝐂𝐨𝐧𝐭𝐫𝐢𝐛𝐮𝐭𝐞', href: 'https://github.com/hasindu-nagolla/HasiiMusicBot/pulls' },
    ],
    resources: [
      { name: '𝐆𝐢𝐭𝐇𝐮𝐛 𝐑𝐞𝐩𝐨', href: 'https://github.com/hasindu-nagolla/HasiiMusicBot' },
      { name: '𝐋𝐢𝐜𝐞𝐧𝐬𝐞 (𝐌𝐈𝐓)', href: 'https://github.com/hasindu-nagolla/HasiiMusicBot/blob/main/LICENSE' },
      { name: '𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐒𝐭𝐫𝐮𝐜𝐭𝐮𝐫𝐞', href: 'https://github.com/hasindu-nagolla/HasiiMusicBot/blob/main/PROJECT_STRUCTURE.md' },
    ],
  }

  return (
    <footer className="relative z-10 bg-black border-t border-spotify-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 rounded-lg bg-spotify-green">
                <MessageCircle className="w-6 h-6 text-black" />
              </div>
              <span className="text-xl font-bold text-spotify-green">𝐇𝐚𝐬𝐢𝐢𝐌𝐮𝐬𝐢𝐜𝐁𝐨𝐭</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              𝐀𝐝𝐯𝐚𝐧𝐜𝐞𝐝 𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦 𝐦𝐮𝐬𝐢𝐜 𝐬𝐭𝐫𝐞𝐚𝐦𝐢𝐧𝐠 𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐬𝐭𝐮𝐝𝐢𝐨-𝐪𝐮𝐚𝐥𝐢𝐭𝐲 𝐚𝐮𝐝𝐢𝐨 𝐚𝐧𝐝 𝐩𝐨𝐰𝐞𝐫𝐟𝐮𝐥 𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/hasindu-nagolla/HasiiMusicBot"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg glass hover:bg-spotify-surface-light hover:text-spotify-green transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://t.me/+VWlXK8QrYfZlYjNl"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg glass hover:bg-spotify-surface-light hover:text-spotify-green transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">𝐏𝐫𝐨𝐝𝐮𝐜𝐭</h3>
            <ul className="space-y-2">
              {links.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1"
                  >
                    {link.name}
                    {link.href.startsWith('http') && <ExternalLink className="w-3 h-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">𝐂𝐨𝐦𝐦𝐮𝐧𝐢𝐭𝐲</h3>
            <ul className="space-y-2">
              {links.community.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-spotify-green transition-colors text-sm flex items-center gap-1"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">𝐑𝐞𝐬𝐨𝐮𝐫𝐜𝐞𝐬</h3>
            <ul className="space-y-2">
              {links.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-spotify-green transition-colors text-sm flex items-center gap-1"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-spotify-surface-light">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} 𝐇𝐚𝐬𝐢𝐢𝐌𝐮𝐬𝐢𝐜𝐁𝐨𝐭. 𝐀𝐥𝐥 𝐫𝐢𝐠𝐡𝐭𝐬 𝐫𝐞𝐬𝐞𝐫𝐯𝐞𝐝. 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐝 𝐛𝐲{' '}
              <a
                href="https://github.com/hasindu-nagolla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-spotify-green hover:text-spotify-green-light transition-colors"
              >
                𝐇𝐚𝐬𝐢𝐧𝐝𝐮 𝐍𝐚𝐠𝐨𝐥𝐥𝐚.
              </a>
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#home" className="hover:text-spotify-green transition-colors">
                𝐁𝐚𝐜𝐤 𝐭𝐨 𝐓𝐨𝐩 ↑
              </a>
            </div>
          </div>
        </div>

        {/* Tech Stack Badge */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐛𝐲 𝐑𝐞𝐚𝐜𝐭 & 𝐓𝐚𝐢𝐥𝐰𝐢𝐧𝐝 𝐂𝐒𝐒
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
