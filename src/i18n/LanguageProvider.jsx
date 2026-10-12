import { useCallback, useEffect, useMemo, useState } from "react";
import { LanguageContext } from "./LanguageContext";

const STORAGE_KEY = "lang";

// Bahasa terakhir yang dipilih diingat di perangkat pengunjung. Bawaannya Indonesia.
const readSaved = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === "en" || saved === "id" ? saved : "id";
  } catch {
    return "id";
  }
};

const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(readSaved);

  // Atribut lang pada <html> ikut berubah (membantu pembaca layar & mesin pencari)
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* penyimpanan diblokir: abaikan, pilihan tetap berlaku selama halaman terbuka */
    }
  }, []);

  const value = useMemo(() => ({ lang, setLang }), [lang, setLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export default LanguageProvider;
