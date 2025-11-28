export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 400"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Square around initials */}
      <rect
        x="50"
        y="50"
        width="260"
        height="260"
        stroke="#C9A961"
        strokeWidth="8"
        fill="none"
      />

      {/* EK monogram – manually centered */}
      <text
        x="105"
        y="250"
        fontFamily="Georgia, serif"
        fontSize="180"
        fontWeight="500"
        fill="#C9A961"
      >
        E
      </text>

      {/* K pulled LEFT to keep entire monogram centered */}
      <text
        x="215"
        y="250"
        fontFamily="Georgia, serif"
        fontSize="180"
        fontWeight="500"
        fill="#C9A961"
      >
        K
      </text>

      {/* Main name */}
      <text
        x="360"
        y="200"
        fontFamily="Inter, sans-serif"
        fontSize="80"
        fontWeight="400"
        fill="#FFFFFF"
        letterSpacing="2"
      >
        Ewelina Kijewska
      </text>

      {/* Subtitle */}
      <text
        x="360"
        y="260"
        fontFamily="Inter, sans-serif"
        fontSize="36"
        fontWeight="300"
        fill="#C9A961"
        letterSpacing="12"
      >
        KANCELARIA ADWOKACKA
      </text>
    </svg>
  );
}
