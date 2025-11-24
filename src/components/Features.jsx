import { Music, Radio, ListOrdered, Gauge, Globe, Shield, Users, Zap } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Music,
      title: '𝐇𝐢𝐠𝐡 𝐐𝐮𝐚𝐥𝐢𝐭𝐲 𝐒𝐭𝐫𝐞𝐚𝐦𝐢𝐧𝐠',
      description: '𝐂𝐫𝐲𝐬𝐭𝐚𝐥 𝐜𝐥𝐞𝐚𝐫 𝐬𝐭𝐮𝐝𝐢𝐨-𝐪𝐮𝐚𝐥𝐢𝐭𝐲 𝐚𝐮𝐝𝐢𝐨 𝐰𝐢𝐭𝐡 𝐎𝐩𝐮𝐬 𝐜𝐨𝐝𝐞𝐜 𝐨𝐩𝐭𝐢𝐦𝐢𝐳𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝗪𝐞𝐛𝐌 𝐜𝐨𝐧𝐭𝐚𝐢𝐧𝐞𝐫 𝐟𝐨𝐫𝐦𝐚𝐭.',
    },
    {
      icon: Radio,
      title: '𝐋𝐢𝐯𝐞 𝐑𝐚𝐝𝐢𝐨 𝐒𝐭𝐚𝐭𝐢𝐨𝐧𝐬',
      description: '𝟓𝟎+ 𝐢𝐧𝐭𝐞𝐫𝐧𝐚𝐭𝐢𝐨𝐧𝐚𝐥 𝐚𝐧𝐝 𝐥𝐨𝐜𝐚𝐥 𝐫𝐚𝐝𝐢𝐨 𝐬𝐭𝐚𝐭𝐢𝐨𝐧𝐬 𝐰𝐢𝐭𝐡 𝐢𝐧𝐬𝐭𝐚𝐧𝐭 𝐩𝐥𝐚𝐲𝐛𝐚𝐜𝐤 𝐚𝐧𝐝 𝐳𝐞𝐫𝐨 𝐛𝐮𝐟𝐟𝐞𝐫𝐢𝐧𝐠.',
    },
    {
      icon: ListOrdered,
      title: '𝐐𝐮𝐞𝐮𝐞 𝐌𝐚𝐧𝐚𝐠𝐞𝐦𝐞𝐧𝐭',
      description: '𝐏𝐨𝐰𝐞𝐫𝐟𝐮𝐥 𝐪𝐮𝐞𝐮𝐞 𝐬𝐲𝐬𝐭𝐞𝐦 𝐬𝐮𝐩𝐩𝐨𝐫𝐭𝐢𝐧𝐠 𝟑𝟎+ 𝐬𝐨𝐧𝐠𝐬 𝐰𝐢𝐭𝐡 𝐩𝐥𝐚𝐲𝐥𝐢𝐬𝐭 𝐢𝐦𝐩𝐨𝐫𝐭 𝐚𝐧𝐝 𝐬𝐦𝐚𝐫𝐭 𝐨𝐫𝐠𝐚𝐧𝐢𝐳𝐚𝐭𝐢𝐨𝐧.',
    },
    {
      icon: Gauge,
      title: '𝐋𝐢𝐠𝐡𝐭𝐧𝐢𝐧𝐠 𝐅𝐚𝐬𝐭',
      description: '𝐀𝐬𝐲𝐧𝐜 𝐚𝐫𝐜𝐡𝐢𝐭𝐞𝐜𝐭𝐮𝐫𝐞 𝐰𝐢𝐭𝐡 𝐜𝐨𝐧𝐜𝐮𝐫𝐫𝐞𝐧𝐭 𝐝𝐨𝐰𝐧𝐥𝐨𝐚𝐝𝐬, 𝟏𝐌𝐁 𝐜𝐡𝐮𝐧𝐤𝐬, 𝐚𝐧𝐝 𝐨𝐩𝐭𝐢𝐦𝐢𝐳𝐞𝐝 𝐩𝐞𝐫𝐟𝐨𝐫𝐦𝐚𝐧𝐜𝐞.',
    },
    {
      icon: Globe,
      title: '𝐌𝐮𝐥𝐭𝐢-𝐋𝐚𝐧𝐠𝐮𝐚𝐠𝐞',
      description: '𝐋𝐨𝐜𝐚𝐥𝐢𝐳𝐞𝐝 𝐢𝐧𝐭𝐞𝐫𝐟𝐚𝐜𝐞 𝐬𝐮𝐩𝐩𝐨𝐫𝐭𝐢𝐧𝐠 𝐄𝐧𝐠𝐥𝐢𝐬𝐡 𝐚𝐧𝐝 𝐒𝐢𝐧𝐡𝐚𝐥𝐚 𝐰𝐢𝐭𝐡 𝐞𝐚𝐬𝐲 𝐥𝐚𝐧𝐠𝐮𝐚𝐠𝐞 𝐬𝐰𝐢𝐭𝐜𝐡𝐢𝐧𝐠.',
    },
    {
      icon: Shield,
      title: '𝐀𝐝𝐦𝐢𝐧 𝐂𝐨𝐧𝐭𝐫𝐨𝐥𝐬',
      description: '𝐂𝐨𝐦𝐩𝐫𝐞𝐡𝐞𝐧𝐬𝐢𝐯𝐞 𝐩𝐥𝐚𝐲𝐛𝐚𝐜𝐤 𝐜𝐨𝐧𝐭𝐫𝐨𝐥𝐬, 𝐮𝐬𝐞𝐫 𝐚𝐮𝐭𝐡𝐨𝐫𝐢𝐳𝐚𝐭𝐢𝐨𝐧, 𝐚𝐧𝐝 𝐛𝐥𝐚𝐜𝐤𝐥𝐢𝐬𝐭 𝐦𝐚𝐧𝐚𝐠𝐞𝐦𝐞𝐧𝐭',
    },
    {
      icon: Users,
      title: '𝐌𝐮𝐥𝐭𝐢-𝐀𝐬𝐬𝐢𝐬𝐭𝐚𝐧𝐭',
      description: '𝐋𝐨𝐚𝐝 𝐛𝐚𝐥𝐚𝐧𝐜𝐢𝐧𝐠 𝐚𝐜𝐫𝐨𝐬𝐬 𝟑 𝐚𝐬𝐬𝐢𝐬𝐭𝐚𝐧𝐭 𝐛𝐨𝐭𝐬 𝐟𝐨𝐫 𝐡𝐚𝐧𝐝𝐥𝐢𝐧𝐠 𝐦𝐮𝐥𝐭𝐢𝐩𝐥𝐞 𝐠𝐫𝐨𝐮𝐩𝐬 𝐬𝐢𝐦𝐮𝐥𝐭𝐚𝐧𝐞𝐨𝐮𝐬𝐥𝐲',
    },
    {
      icon: Zap,
      title: '𝐀𝐮𝐭𝐨 𝐅𝐞𝐚𝐭𝐮𝐫𝐞𝐬',
      description: '𝐒𝐦𝐚𝐫𝐭 𝐚𝐮𝐭𝐨-𝐥𝐞𝐚𝐯𝐞 𝐟𝐫𝐨𝐦 𝐢𝐧𝐚𝐜𝐭𝐢𝐯𝐞 𝐜𝐡𝐚𝐭𝐬 𝐚𝐧𝐝 𝐚𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐜 𝐪𝐮𝐞𝐮𝐞 𝐩𝐫𝐨𝐠𝐫𝐞𝐬𝐬𝐢𝐨𝐧',
    },
  ]

  return (
    <section id="features" className="section-padding bg-black/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-spotify-green">𝐏𝐨𝐰𝐞𝐫𝐟𝐮𝐥 𝐅𝐞𝐚𝐭𝐮𝐫𝐞𝐬</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            𝐄𝐯𝐞𝐫𝐲𝐭𝐡𝐢𝐧𝐠 𝐲𝐨𝐮 𝐧𝐞𝐞𝐝 𝐟𝐨𝐫 𝐚𝐧 𝐞𝐱𝐜𝐞𝐩𝐭𝐢𝐨𝐧𝐚𝐥 𝐦𝐮𝐬𝐢𝐜 𝐬𝐭𝐫𝐞𝐚𝐦𝐢𝐧𝐠 𝐞𝐱𝐩𝐞𝐫𝐢𝐞𝐧𝐜𝐞 𝐢𝐧 𝐲𝐨𝐮𝐫 𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦 𝐠𝐫𝐨𝐮𝐩𝐬
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="feature-card group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-3 rounded-xl bg-spotify-green w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
