export function SectionSeparator() {
  return (
    <div className="w-full py-8 flex items-center justify-center">
      <div className="flex items-center gap-4 max-w-md w-full px-4">
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-accent/30" />
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-accent flex-shrink-0"
        >
          <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            fill="currentColor"
            fillOpacity="0.2"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-accent flex-shrink-0"
        >
          {/* Waga sprawiedliwości */}
          <path
            d="M7 20H17M12 20V9M12 9L6 4M12 9L18 4M6 4L4 9H8L6 4ZM18 4L16 9H20L18 4Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 9C4 10.1046 4.89543 11 6 11C7.10457 11 8 10.1046 8 9M16 9C16 10.1046 16.8954 11 18 11C19.1046 11 20 10.1046 20 9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-accent flex-shrink-0"
        >
          <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            fill="currentColor"
            fillOpacity="0.2"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-accent/30 to-accent/30" />
      </div>
    </div>
  )
}
