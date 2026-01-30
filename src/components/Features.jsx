import {
  Music,
  Radio,
  ListOrdered,
  Gauge,
  Globe,
  Shield,
  Users,
  Zap,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Music,
      title: "High Quality Streaming",
      description:
        "Crystal clear studio-quality audio with Opus codec optimization and WebM container format.",
    },
    {
      icon: Radio,
      title: "Live Radio Stations",
      description:
        "50+ international and local radio stations with instant playback and zero buffering.",
    },
    {
      icon: ListOrdered,
      title: "Queue Management",
      description:
        "Powerful queue system supporting 30+ songs with playlist import and smart organization.",
    },
    {
      icon: Gauge,
      title: "Lightning Fast",
      description:
        "Async architecture with concurrent downloads, 1MB chunks, and optimized performance.",
    },
    {
      icon: Globe,
      title: "Multi-Language",
      description:
        "Localized interface supporting English and Sinhala with easy language switching.",
    },
    {
      icon: Shield,
      title: "Admin Controls",
      description:
        "Comprehensive playback controls, user authorization, and blacklist management",
    },
    {
      icon: Users,
      title: "Multi-Assistant",
      description:
        "Load balancing across 3 assistant bots for handling multiple groups simultaneously",
    },
    {
      icon: Zap,
      title: "Auto Features",
      description:
        "Smart auto-leave from inactive chats and automatic queue progression",
    },
  ];

  return (
    <section
      id="features"
      className="section-padding bg-black/30 relative overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "1.5s" }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-spotify-green">Powerful Features</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need for an exceptional music streaming experience in
            your Telegram groups
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="feature-card group animate-scale-in relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Animated gradient glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-spotify-green/0 via-spotify-green/0 to-spotify-green/0 group-hover:from-spotify-green/20 group-hover:via-spotify-green/5 group-hover:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

                <div className="relative z-10">
                  <div className="p-3 rounded-xl bg-spotify-green w-fit mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-spotify-green/50">
                    <Icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-spotify-green transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
