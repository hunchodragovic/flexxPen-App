
const Cityscape = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-64 opacity-30">
      <svg viewBox="0 0 1200 200" className="w-full h-full" preserveAspectRatio="xMidYEnd slice">
        {/* City buildings silhouettes */}
        <rect x="0" y="120" width="80" height="80" fill="#1e40af" />
        <rect x="90" y="100" width="60" height="100" fill="#1d4ed8" />
        <rect x="160" y="130" width="70" height="70" fill="#2563eb" />
        <rect x="240" y="90" width="90" height="110" fill="#1e40af" />
        <rect x="340" y="110" width="50" height="90" fill="#3b82f6" />
        <rect x="400" y="80" width="80" height="120" fill="#1d4ed8" />
        <rect x="490" y="95" width="65" height="105" fill="#2563eb" />
        <rect x="565" y="105" width="75" height="95" fill="#1e40af" />
        <rect x="650" y="85" width="55" height="115" fill="#3b82f6" />
        <rect x="715" y="115" width="85" height="85" fill="#1d4ed8" />
        <rect x="810" y="95" width="70" height="105" fill="#2563eb" />
        <rect x="890" y="125" width="60" height="75" fill="#1e40af" />
        <rect x="960" y="100" width="80" height="100" fill="#3b82f6" />
        <rect x="1050" y="110" width="65" height="90" fill="#1d4ed8" />
        <rect x="1125" y="130" width="75" height="70" fill="#2563eb" />
        
        {/* Some building details */}
        <rect x="410" y="90" width="15" height="15" fill="#60a5fa" opacity="0.6" />
        <rect x="430" y="95" width="15" height="15" fill="#60a5fa" opacity="0.6" />
        <rect x="410" y="110" width="15" height="15" fill="#60a5fa" opacity="0.6" />
        <rect x="670" y="95" width="12" height="12" fill="#60a5fa" opacity="0.6" />
        <rect x="820" y="105" width="12" height="12" fill="#60a5fa" opacity="0.6" />
      </svg>
    </div>
  );
};

export default Cityscape;
