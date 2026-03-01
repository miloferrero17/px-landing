"use client"

function MicIcon() {
  return (
    <svg width="8" height="10" viewBox="0 0 8 10" fill="none" className="shrink-0">
      <path d="M4 0C2.9 0 2 0.9 2 2V5C2 6.1 2.9 7 4 7C5.1 7 6 6.1 6 5V2C6 0.9 5.1 0 4 0Z" fill="#25D366" />
      <path d="M7 5C7 6.66 5.66 8 4 8C2.34 8 1 6.66 1 5H0C0 7.08 1.62 8.78 3.5 8.97V10H4.5V8.97C6.38 8.78 8 7.08 8 5H7Z" fill="#25D366" />
    </svg>
  )
}

function ChatRow({
  name,
  lastMsg,
  time,
  unread,
  isAudio,
  pinned,
}: {
  name: string
  lastMsg: string
  time: string
  unread?: number
  isAudio?: boolean
  pinned?: boolean
}) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()

  const bgColors = [
    "#6B8E23", "#8B4513", "#4682B4", "#B8860B", "#556B2F",
    "#8B008B", "#2F4F4F", "#CD853F",
  ]
  const colorIndex = name.length % bgColors.length

  return (
    <div className="flex items-center gap-2.5 px-3 py-2.5">
      {/* Avatar */}
      <div
        className="h-10 w-10 shrink-0 rounded-full flex items-center justify-center"
        style={{ backgroundColor: bgColors[colorIndex] }}
      >
        <span className="text-[10px] font-bold text-[#FFFFFF]">{initials}</span>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 border-b border-[#2A2E30] pb-2.5">
        <div className="flex items-center justify-between">
          <p className="text-[12px] font-semibold text-[#E9EDEF] truncate">{name}</p>
          <span className={`text-[10px] shrink-0 ml-2 ${unread ? "text-[#25D366]" : "text-[#8696A0]"}`}>
            {time}
          </span>
        </div>
        <div className="flex items-center justify-between mt-0.5">
          <div className="flex items-center gap-1 flex-1 min-w-0">
            {isAudio && <MicIcon />}
            <p className="text-[11px] text-[#8696A0] truncate">
              {isAudio ? `Mensaje de voz (${lastMsg})` : lastMsg}
            </p>
          </div>
          <div className="flex items-center gap-1.5 shrink-0 ml-2">
            {pinned && (
              <svg width="10" height="10" viewBox="0 0 16 16" fill="#8696A0" className="opacity-60">
                <path d="M11.35 3.65l-1-1L7 6l-3.35-3.35-1 1L6 7l-3.35 3.35 1 1L7 8l3.35 3.35 1-1L8 7z" transform="rotate(45 8 8)" />
              </svg>
            )}
            {unread && (
              <div className="h-4.5 min-w-4.5 px-1 rounded-full bg-[#25D366] flex items-center justify-center">
                <span className="text-[9px] font-bold text-[#111B21]">{unread}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export function WhatsAppChaosMockup() {
  return (
    <div className="flex flex-col h-full bg-[#111B21] rounded-2xl overflow-hidden">
      {/* Status bar */}
      <div className="flex items-center justify-between px-4 pt-2 pb-1">
        <span className="text-[10px] font-semibold text-[#E9EDEF]">6:42</span>
        <div className="flex items-center gap-1">
          <div className="flex items-end gap-[1px]">
            <div className="w-[2px] h-[4px] bg-[#E9EDEF] rounded-sm" />
            <div className="w-[2px] h-[6px] bg-[#E9EDEF] rounded-sm" />
            <div className="w-[2px] h-[8px] bg-[#E9EDEF] rounded-sm" />
            <div className="w-[2px] h-[10px] bg-[#E9EDEF] rounded-sm" />
          </div>
          <svg width="12" height="9" viewBox="0 0 12 9" fill="#E9EDEF">
            <path d="M6 0L0.8 5.3C2.2 3.9 4 3 6 3s3.8.9 5.2 2.3L6 0z" />
            <circle cx="6" cy="8" r="1" />
          </svg>
          <div className="flex items-center">
            <div className="w-[16px] h-[8px] rounded-sm border border-[#E9EDEF] relative">
              <div className="absolute inset-[1px] right-[4px] bg-[#E9EDEF] rounded-[1px]" />
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp header area */}
      <div className="flex items-center justify-between px-3 pt-0.5 pb-1">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded-full bg-[#8696A0]/30 flex items-center justify-center">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#8696A0" strokeWidth="2.5">
              <circle cx="12" cy="5" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="12" cy="19" r="1" />
            </svg>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8696A0" strokeWidth="2">
            <rect x="2" y="2" width="20" height="20" rx="4" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          <div className="h-6 w-6 rounded-full bg-[#25D366] flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#111B21" stroke="none">
              <path d="M12 5v14M5 12h14" strokeWidth="3" stroke="#111B21" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* "Chats" title */}
      <div className="px-3 pb-1.5">
        <p className="text-[18px] font-bold text-[#E9EDEF]">Chats</p>
      </div>

      {/* Search bar */}
      <div className="px-3 pb-2">
        <div className="flex items-center gap-2 bg-[#222E35] rounded-lg px-2.5 py-1.5">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#8696A0" strokeWidth="2">
            <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
          </svg>
          <span className="text-[10px] text-[#8696A0]">Preguntar a Meta AI o buscar</span>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="flex items-center gap-1.5 px-3 pb-2">
        <span className="text-[9px] bg-[#25D366] text-[#111B21] px-2 py-0.5 rounded-full font-semibold">Todos</span>
        <span className="text-[9px] bg-[#222E35] text-[#8696A0] px-2 py-0.5 rounded-full">No leidos 5</span>
        <span className="text-[9px] bg-[#222E35] text-[#8696A0] px-2 py-0.5 rounded-full">Grupos 1</span>
      </div>

      {/* Chat list */}
      <div className="flex-1 overflow-hidden">
        <ChatRow
          name="Mama de Mateo"
          lastMsg="1:47"
          time="06:43"
          unread={4}
          isAudio
        />
        <ChatRow
          name="Dani"
          lastMsg="como la valoran a eshhha"
          time="Ayer"
          pinned
        />
        <ChatRow
          name="Papa de Lucas"
          lastMsg="2:14"
          time="06:33"
          unread={5}
          isAudio
        />
        <ChatRow
          name="Mama de Santi"
          lastMsg="0:52"
          time="06:18"
          unread={3}
          isAudio
        />
        <ChatRow
          name="Alice"
          lastMsg="Buen dia Milito...."
          time="06:10"
        />
        <ChatRow
          name="Papa de Julieta"
          lastMsg="1:23"
          time="06:02"
          unread={4}
          isAudio
        />
        <ChatRow
          name="Mama de Valentina"
          lastMsg="3:02"
          time="05:48"
          unread={5}
          isAudio
        />
        <ChatRow
          name="Papa de Tomas"
          lastMsg="0:34"
          time="05:31"
          unread={3}
          isAudio
        />
      </div>

      {/* Bottom tab bar */}
      <div className="flex items-center justify-around bg-[#1F2C33] px-2 py-1.5 border-t border-[#2A2E30]">
        <div className="flex flex-col items-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8696A0" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" /><path d="M8 12h8M12 8v8" />
          </svg>
          <span className="text-[7px] text-[#8696A0] mt-0.5">Novedades</span>
        </div>
        <div className="flex flex-col items-center relative">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8696A0" strokeWidth="1.5">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72" />
          </svg>
          <span className="text-[7px] text-[#8696A0] mt-0.5">Llamadas</span>
        </div>
        <div className="flex flex-col items-center relative">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E9EDEF" strokeWidth="1.5">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
          <div className="absolute -top-1 -right-2 h-3 min-w-3 px-0.5 rounded-full bg-[#25D366] flex items-center justify-center">
            <span className="text-[6px] font-bold text-[#111B21]">29</span>
          </div>
          <span className="text-[7px] text-[#E9EDEF] mt-0.5">Chats</span>
        </div>
        <div className="flex flex-col items-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8696A0" strokeWidth="1.5">
            <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83" />
          </svg>
          <span className="text-[7px] text-[#8696A0] mt-0.5">Ajustes</span>
        </div>
      </div>
    </div>
  )
}
