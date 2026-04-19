export function Footer() {
  return (
    <footer className="shrink-0 border-t border-(--color-line) flex items-center justify-center h-9">
      <p className="text-[11px] text-(--color-fg-faint) tracking-wide select-none">
        Made with{" "}
        <span className="text-red-500">♥</span>
        {" "}by{" "}
        <a
          href="https://github.com/drbarzaga"
          target="_blank"
          rel="noreferrer"
          className="text-(--color-fg-dim) underline decoration-(--color-fg-faint) underline-offset-2 hover:text-(--color-fg-muted) transition-colors"
        >
          @drbarzaga
        </a>
      </p>
    </footer>
  )
}
