"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { type Lang, translations } from "./translations"

type LanguageContextType = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: typeof translations
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es")

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}
