import { useState, useEffect } from "react";
import { Users, Music as MusicIcon, Radio, TrendingUp } from "lucide-react";

const Stats = () => {
  const [counters, setCounters] = useState({
    groups: 0,
    songs: 0,
    stations: 0,
    uptime: 0,
  });

  const stats = [
    {
      icon: Users,
      label: "𝐀𝐜𝐭𝐢𝐯𝐞 𝐆𝐫𝐨𝐮𝐩𝐬",
      value: "𝟏𝟎+",
      target: 10,
      key: "groups",
    },
    {
      icon: MusicIcon,
      label: "𝐒𝐨𝐧𝐠𝐬 𝐏𝐥𝐚𝐲𝐞𝐝",
      value: "𝟐.𝟑𝐊+",
      target: 2300,
      key: "songs",
    },
    {
      icon: Radio,
      label: "𝐑𝐚𝐝𝐢𝐨 𝐒𝐭𝐚𝐭𝐢𝐨𝐧𝐬",
      value: "𝟐𝟎+",
      target: 20,
      key: "stations",
    },
    {
      icon: TrendingUp,
      label: "𝐔𝐩𝐭𝐢𝐦𝐞",
      value: "𝟗𝟎%",
      target: 90,
      key: "uptime",
    },
  ];

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    stats.forEach((stat) => {
      let current = 0;
      const increment = stat.target / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.target) {
          current = stat.target;
          clearInterval(timer);
        }
        setCounters((prev) => ({
          ...prev,
          [stat.key]: Math.floor(current),
        }));
      }, interval);
    });
  }, []);

  return (
    <section className="section-padding bg-spotify-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-spotify-green">Trusted by Users</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Join the growing community of Sri Lankan music lovers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="glass p-8 rounded-2xl text-center transform hover:scale-105 transition-all duration-300 animate-scale-in hover:border-spotify-green"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex p-4 rounded-2xl bg-spotify-green mb-4">
                  <Icon className="w-8 h-8 text-black" />
                </div>
                <div className="text-4xl font-bold mb-2 text-spotify-green">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
