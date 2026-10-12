import useLang from "../i18n/useLang";

// Tombol ganti bahasa ID | EN.
// tone="light": di atas latar terang (navbar). tone="pink": di atas latar pink/gradasi.
const LangSwitch = ({ tone = "light", className = "" }) => {
  const { lang, setLang } = useLang();

  const wrap =
    tone === "light"
      ? "bg-white/70 border border-[#AC1754]/20"
      : "bg-white/20 border border-white/30 backdrop-blur-sm";
  const active = tone === "light" ? "bg-[#AC1754] text-white shadow" : "bg-white text-[#AC1754] shadow";
  const idle =
    tone === "light" ? "text-[#AC1754] hover:bg-[#AC1754]/10" : "text-white hover:bg-white/20";

  return (
    <div role="group" aria-label="Language" className={`inline-flex items-center rounded-full p-1 ${wrap} ${className}`}>
      {[
        { code: "id", label: "ID" },
        { code: "en", label: "EN" },
      ].map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`rounded-full px-3 py-1 text-xs font-extrabold tracking-wide transition-colors duration-200 ${
            lang === code ? active : idle
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default LangSwitch;
