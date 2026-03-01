"use client"

export function DashboardMockup() {
  return (
    <div className="flex flex-col h-full bg-[#F5F5F5] rounded-2xl overflow-hidden">
      {/* Dashboard header */}
      <div className="flex items-center gap-2 bg-[#FFFFFF] px-3 py-2.5 border-b border-[#E8E8E8]">
        <div className="h-7 w-7 rounded-lg bg-[#2E7D32] flex items-center justify-center">
          <span className="text-[9px] font-bold text-[#FFFFFF]">PX</span>
        </div>
        <div className="flex-1">
          <p className="text-[11px] font-semibold text-[#1A1A1A] leading-tight">Dashboard Pediatrico</p>
          <p className="text-[9px] text-[#888888]">Dr. Martin Lopez</p>
        </div>
        <div className="h-6 w-6 rounded-full bg-[#2E7D32] flex items-center justify-center">
          <span className="text-[8px] font-bold text-[#FFFFFF]">ML</span>
        </div>
      </div>

      {/* Stats row */}
      <div className="px-2.5 pt-2.5 pb-1.5">
        <div className="flex items-center gap-1.5">
          <div className="flex-1 rounded-lg border border-[#E0E0E0] bg-[#FFFFFF] py-1.5 text-center">
            <p className="text-[13px] font-bold text-[#1976D2]">14</p>
            <p className="text-[7px] text-[#1976D2]">Todos</p>
          </div>
          <div className="flex-1 rounded-lg bg-[#2E7D32] py-1.5 text-center">
            <p className="text-[13px] font-bold text-[#FFFFFF]">3</p>
            <p className="text-[7px] text-[#FFFFFF]">Nuevos</p>
          </div>
          <div className="flex-1 rounded-lg border border-[#E0E0E0] bg-[#FFFFFF] py-1.5 text-center">
            <p className="text-[13px] font-bold text-[#2E7D32]">8</p>
            <p className="text-[7px] text-[#2E7D32]">Medico</p>
          </div>
          <div className="flex-1 rounded-lg border border-[#E0E0E0] bg-[#FFFFFF] py-1.5 text-center">
            <p className="text-[13px] font-bold text-[#555555]">3</p>
            <p className="text-[7px] text-[#555555]">Resuelto</p>
          </div>
          <div className="flex-none w-10 h-10 rounded-full bg-[#2E7D32] flex items-center justify-center">
            <div className="text-center">
              <p className="text-[11px] font-bold text-[#FFFFFF] leading-none">0</p>
              <p className="text-[6px] text-[#FFFFFF] leading-tight">Cobradas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sort filters */}
      <div className="px-2.5 pb-1.5">
        <div className="flex items-center gap-1 flex-wrap">
          <span className="text-[7px] text-[#888888]">Ordenar:</span>
          <span className="text-[7px] bg-[#2E7D32] text-[#FFFFFF] px-1.5 py-0.5 rounded-full font-medium">Horario</span>
          <span className="text-[7px] bg-[#FFFFFF] text-[#555555] px-1.5 py-0.5 rounded-full border border-[#E0E0E0]">Criticidad</span>
          <span className="text-[7px] bg-[#FFFFFF] text-[#555555] px-1.5 py-0.5 rounded-full border border-[#E0E0E0]">Estado</span>
        </div>
      </div>

      {/* Section label */}
      <div className="px-2.5 pb-1">
        <p className="text-[8px] font-semibold text-[#888888] tracking-wider">PACIENTES EN ESPERA (3)</p>
      </div>

      {/* Patient cards */}
      <div className="flex-1 px-2.5 flex flex-col gap-1.5 overflow-hidden">
        {/* Patient 1 */}
        <div className="rounded-xl border border-[#E0E0E0] bg-[#FFFFFF] p-2.5 shadow-sm">
          <div className="flex items-start gap-2">
            <div className="h-7 w-7 rounded-full bg-[#1976D2] flex items-center justify-center shrink-0 mt-0.5">
              <span className="text-[8px] font-bold text-[#FFFFFF]">MS</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <p className="text-[10px] font-bold text-[#1A1A1A]">Mateo Sanchez</p>
                  <div className="h-1.5 w-1.5 rounded-full bg-[#1976D2]" />
                </div>
                <span className="text-[11px] font-bold text-[#1A1A1A]">06:43</span>
              </div>
              <p className="text-[8px] text-[#888888]">10 anos 2 meses</p>
              <p className="text-[8px] text-[#555555] mt-0.5">Consulta administrativa</p>
              <span className="inline-block mt-0.5 text-[7px] text-[#888888]">Nuevos</span>
            </div>
          </div>
        </div>

        {/* Patient 2 */}
        <div className="rounded-xl border border-[#E0E0E0] bg-[#FFFFFF] p-2.5 shadow-sm">
          <div className="flex items-start gap-2">
            <div className="h-7 w-7 rounded-full bg-[#F9A825] flex items-center justify-center shrink-0 mt-0.5">
              <span className="text-[8px] font-bold text-[#FFFFFF]">LM</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <p className="text-[10px] font-bold text-[#1A1A1A]">Lucas Martinez</p>
                  <div className="h-1.5 w-1.5 rounded-full bg-[#1976D2]" />
                </div>
                <span className="text-[11px] font-bold text-[#1A1A1A]">06:33</span>
              </div>
              <p className="text-[8px] text-[#888888]">4 anos 6 meses</p>
              <p className="text-[8px] text-[#555555] mt-0.5">Tos persistente</p>
              <span className="inline-block mt-0.5 text-[7px] text-[#888888]">Nuevos</span>
            </div>
          </div>
        </div>

        {/* Patient 3 */}
        <div className="rounded-xl border border-[#E0E0E0] bg-[#FFFFFF] p-2.5 shadow-sm">
          <div className="flex items-start gap-2">
            <div className="h-7 w-7 rounded-full bg-[#D32F2F] flex items-center justify-center shrink-0 mt-0.5">
              <span className="text-[8px] font-bold text-[#FFFFFF]">SG</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <p className="text-[10px] font-bold text-[#1A1A1A]">Santiago Gonzalez</p>
                  <div className="h-1.5 w-1.5 rounded-full bg-[#1976D2]" />
                </div>
                <span className="text-[11px] font-bold text-[#1A1A1A]">06:18</span>
              </div>
              <p className="text-[8px] text-[#888888]">5 anos 3 meses</p>
              <p className="text-[8px] text-[#555555] mt-0.5">Dolor de garganta y fiebre</p>
              <span className="inline-block mt-0.5 text-[7px] text-[#888888]">Nuevos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom padding */}
      <div className="h-2" />
    </div>
  )
}
