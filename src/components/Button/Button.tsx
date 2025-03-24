interface ButtonProps {
  children: React.ReactNode
  disabled?: boolean
  variant?: "success" | "danger" | null
}

export const Button = ({ children, disabled, variant }: ButtonProps) => {
  // pt-3 pb-3 pr-2 pl-2"
  // min-w-[128px] min-w-32
  return (
    <button
      disabled={disabled}
      className={`px-3 py-2 rounded-md min-w-[128px] disabled:cursor-not-allowed 
        ${
          variant === "success"
            ? "bg-lime-500 hover:bg-lime-600 text-neutral-100 disabled:bg-lime-300 disabled:text-neutral-400"
            : "bg-zinc-200 hover:bg-zinc-300 disabled:bg-zinc-100 disabled:text-zinc-500 text-zinc-800"
        }`}
    >
      {children}
    </button>
  )
}
