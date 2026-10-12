import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import { UI } from "./ui";
import { EN } from "../constants/en";

// lang  : "id" | "en"
// t     : teks antarmuka sesuai bahasa
// tr    : tr(group, key, field, fallback) -> terjemahan English bila tersedia, kalau tidak teks aslinya
const useLang = () => {
  const { lang, setLang } = useContext(LanguageContext);
  const t = UI[lang];
  const tr = (group, key, field, fallback) =>
    lang === "en" ? EN[group]?.[key]?.[field] ?? fallback : fallback;
  return { lang, setLang, t, tr };
};

export default useLang;
