const Logo = ({ className }) => (
  <svg 
    width="160" 
    height="32" 
    viewBox="0 0 320 64" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    {/* icon */}
    <circle cx="32" cy="32" r="28" fill="#D1FAE5" className="dark:fill-brand-primary/20"></circle>
    <path d="M24 18L48 32L24 46V18Z" fill="#10B981"></path>
    <path d="M32 22V40" stroke="white" strokeWidth="4" strokeLinecap="round"></path>
    <circle cx="32" cy="44" r="6" fill="white"></circle>

    {/* text */}
    <text x="72" y="42" fontFamily="Inter, Arial, sans-serif" fontSize="34" fontWeight="700" className="fill-brand-dark dark:fill-white">
      Hasii
    </text>

    <text x="158" y="42" fontFamily="Inter, Arial, sans-serif" fontSize="34" fontWeight="700" fill="#10B981">
      Music
    </text>
  </svg>
);

export default Logo;
