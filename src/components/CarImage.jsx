export default function CarImage({ color, big }) {
  return (
    <div className={big ? 'car-img big' : 'car-img'}>
      <svg viewBox="0 0 200 90" aria-hidden="true">
        <path d="M20 62 L28 44 Q34 36 46 34 L70 30 Q84 18 104 18 L132 18 Q148 18 160 32 L176 36 Q186 40 186 52 L186 62 Z"
          fill={color} stroke="#1a1a1a" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M80 32 Q90 23 104 23 L128 23 Q140 23 150 33 Z" fill="#cfe3f2" stroke="#1a1a1a" strokeWidth="2" />
        <circle cx="56" cy="64" r="13" fill="#1a1a1a" /><circle cx="56" cy="64" r="5" fill="#ddd" />
        <circle cx="152" cy="64" r="13" fill="#1a1a1a" /><circle cx="152" cy="64" r="5" fill="#ddd" />
      </svg>
    </div>
  )
}
