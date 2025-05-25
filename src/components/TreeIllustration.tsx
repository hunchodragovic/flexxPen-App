
const TreeIllustration = () => {
  return (
    <div className="absolute bottom-0 right-0 w-96 h-96 opacity-90">
      <svg viewBox="0 0 400 400" className="w-full h-full">
        {/* Tree trunk */}
        <rect x="190" y="300" width="20" height="100" fill="#8B4513" />
        
        {/* Tree roots */}
        <g stroke="#666" strokeWidth="2" fill="none" opacity="0.7">
          <path d="M200 380 Q180 390 160 395" />
          <path d="M200 385 Q220 395 240 390" />
          <path d="M200 390 Q170 400 140 395" />
          <path d="M200 390 Q230 400 260 395" />
        </g>
        
        {/* Tree foliage - multiple layers for depth */}
        <circle cx="200" cy="280" r="80" fill="#2563eb" opacity="0.8" />
        <circle cx="180" cy="260" r="60" fill="#3b82f6" opacity="0.9" />
        <circle cx="220" cy="270" r="65" fill="#1d4ed8" opacity="0.7" />
        
        {/* Orange leaves scattered throughout */}
        {[...Array(25)].map((_, i) => {
          const angle = (i * 360 / 25) * (Math.PI / 180);
          const radius = 50 + Math.random() * 40;
          const x = 200 + Math.cos(angle) * radius;
          const y = 280 + Math.sin(angle) * radius * 0.8;
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={3 + Math.random() * 4}
              fill="#f97316"
              opacity="0.8"
            />
          );
        })}
        
        {/* Additional orange clusters */}
        {[...Array(15)].map((_, i) => {
          const angle = (i * 360 / 15) * (Math.PI / 180);
          const radius = 60 + Math.random() * 30;
          const x = 200 + Math.cos(angle) * radius;
          const y = 280 + Math.sin(angle) * radius * 0.7;
          return (
            <circle
              key={`orange-${i}`}
              cx={x}
              cy={y}
              r={2 + Math.random() * 3}
              fill="#ea580c"
              opacity="0.9"
            />
          );
        })}
      </svg>
    </div>
  );
};

export default TreeIllustration;
