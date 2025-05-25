
const Birds = () => {
  return (
    <div className="absolute top-20 left-1/4 w-32 h-16 opacity-60">
      <svg viewBox="0 0 120 60" className="w-full h-full">
        {/* Flying birds */}
        <path d="M10 20 Q15 15 20 20 Q25 15 30 20" stroke="#1e40af" strokeWidth="2" fill="none" />
        <path d="M40 25 Q45 20 50 25 Q55 20 60 25" stroke="#1e40af" strokeWidth="2" fill="none" />
        <path d="M70 15 Q75 10 80 15 Q85 10 90 15" stroke="#1e40af" strokeWidth="2" fill="none" />
        <path d="M25 35 Q30 30 35 35 Q40 30 45 35" stroke="#1e40af" strokeWidth="1.5" fill="none" />
      </svg>
    </div>
  );
};

export default Birds;
