export function GradientBorder() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <div className="absolute inset-0 border-t border-b border-transparent bg-gradient-to-r from-gray-700/20 via-gray-500/20 to-gray-300/20" />
    </div>
  )
}

