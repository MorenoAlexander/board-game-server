export default function OthelloLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-row justify-between gap-2">
      <div className="flex flex-col">
        <span>Chat</span>
        <div>Hello</div>
        <div>Hi.</div>
      </div>
      <div>{children}</div>
      <div className="flex flex-col">
        <span>History</span>
      </div>
    </div>
  )
}
