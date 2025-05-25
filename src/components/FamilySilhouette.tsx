
const FamilySilhouette = () => {
  return (
    <div className="absolute bottom-0 left-20 w-64 h-48 opacity-40">
      <svg viewBox="0 0 300 200" className="w-full h-full">
        {/* Family silhouette - adult male */}
        <ellipse cx="80" cy="40" rx="15" ry="20" fill="#1e40af" />
        <rect x="70" y="55" width="20" height="45" fill="#1e40af" />
        <rect x="60" y="65" width="15" height="25" fill="#1e40af" />
        <rect x="85" y="65" width="15" height="25" fill="#1e40af" />
        <rect x="72" y="100" width="7" height="35" fill="#1e40af" />
        <rect x="81" y="100" width="7" height="35" fill="#1e40af" />
        
        {/* Adult female */}
        <ellipse cx="120" cy="42" rx="12" ry="18" fill="#1e40af" />
        <rect x="112" y="55" width="16" height="40" fill="#1e40af" />
        <rect x="105" y="65" width="12" height="20" fill="#1e40af" />
        <rect x="123" y="65" width="12" height="20" fill="#1e40af" />
        <rect x="115" y="95" width="5" height="30" fill="#1e40af" />
        <rect x="122" y="95" width="5" height="30" fill="#1e40af" />
        
        {/* Child */}
        <ellipse cx="50" cy="55" rx="8" ry="12" fill="#1e40af" />
        <rect x="45" y="65" width="10" height="25" fill="#1e40af" />
        <rect x="40" y="70" width="7" height="15" fill="#1e40af" />
        <rect x="53" y="70" width="7" height="15" fill="#1e40af" />
        <rect x="47" y="90" width="3" height="20" fill="#1e40af" />
        <rect x="52" y="90" width="3" height="20" fill="#1e40af" />
        
        {/* Small child */}
        <ellipse cx="150" cy="65" rx="6" ry="10" fill="#1e40af" />
        <rect x="147" y="72" width="6" height="18" fill="#1e40af" />
        <rect x="144" y="76" width="4" height="10" fill="#1e40af" />
        <rect x="152" y="76" width="4" height="10" fill="#1e40af" />
        <rect x="148" y="90" width="2" height="15" fill="#1e40af" />
        <rect x="151" y="90" width="2" height="15" fill="#1e40af" />
      </svg>
    </div>
  );
};

export default FamilySilhouette;
