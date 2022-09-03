export default function Button({
  children,
  onClick,
  className = '',
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      className={`bg-stone-200 text-stone-700 rounded-md px-4 py-2 cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
