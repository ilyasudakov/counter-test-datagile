const STYLES = {
  empty: '',
  default: 'bg-stone-200 text-stone-800 shadow-sm border border-stone-300',
};
export default function Button({
  children,
  onClick,
  className = '',
  style = 'empty',
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  style?: 'empty' | 'default';
}) {
  return (
    <button
      className={`${STYLES[style]} flex items-center gap-2 rounded-md px-4 py-2 cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
