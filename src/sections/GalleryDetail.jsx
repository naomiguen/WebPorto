import { useParams, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { GALLERY_DATA, hasPhotos } from "../constants";
import { ArrowLeft, ChevronLeft, ChevronRight, ImageOff, Images, Maximize2, X } from "lucide-react";
import Starfield, { GlowStar } from "../components/Starfield";
import LangSwitch from "../components/LangSwitch";
import useLang from "../i18n/useLang";

// "/organisasi/hmif-kadep/wepestaff10.JPG" -> "/thumbs/organisasi/hmif-kadep/wepestaff10.jpg"
// (versi kecil di public/thumbs, struktur foldernya sama dengan foto aslinya)
const thumbOf = (src) => src.replace(/^\/(.+)\.[^./]+$/, "/thumbs/$1.jpg");

// Foto penuh: thumbnail tampil dulu, lalu diganti foto asli begitu selesai dimuat
const FullPhoto = ({ photo, alt }) => {
  const [loaded, setLoaded] = useState(false);
  const box = "col-start-1 row-start-1 h-[72vh] w-[92vw] max-w-6xl object-contain";

  return (
    <div className="grid place-items-center">
      {/* Dilepas setelah foto asli siap: elemen ber-blur dilukis di atas saudaranya dan akan menutupi foto asli */}
      {!loaded && <img src={thumbOf(photo.src)} alt="" aria-hidden="true" className={`${box} blur-sm`} />}
      <img
        src={photo.src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`${box} transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
};

const Lightbox = ({ photos, index, label, onClose, onChange }) => {
  const { t } = useLang();
  const touchStartX = useRef(null);
  const total = photos.length;
  const photo = photos[index];

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") onChange((index - 1 + total) % total);
      else if (e.key === "ArrowRight") onChange((index + 1) % total);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, total, onClose, onChange]);

  // Kunci scroll halaman selama foto terbuka
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null || total < 2) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) onChange((index + (diff > 0 ? 1 : -1) + total) % total);
    touchStartX.current = null;
  };

  const navBtn =
    "absolute top-1/2 -translate-y-1/2 rounded-full bg-white/15 p-2.5 sm:p-3 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#AC1754]";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={t.gallery.dialog(label)}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 p-4"
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <button
        onClick={onClose}
        aria-label={t.gallery.close}
        className="absolute right-4 top-4 rounded-full bg-white/15 p-2.5 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#AC1754]"
      >
        <X size={22} />
      </button>

      <div onClick={(e) => e.stopPropagation()}>
        <FullPhoto key={photo.src} photo={photo} alt={photo.caption || t.gallery.photoAlt(label, index + 1)} />
      </div>

      <p className="mt-4 text-center text-sm font-semibold text-white">
        {photo.caption && <span className="mr-2 font-medium">{photo.caption} ·</span>}
        {index + 1} / {total}
      </p>

      {total > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); onChange((index - 1 + total) % total); }}
            aria-label={t.gallery.prev}
            className={`${navBtn} left-2 sm:left-5`}
          >
            <ChevronLeft size={26} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onChange((index + 1) % total); }}
            aria-label={t.gallery.next}
            className={`${navBtn} right-2 sm:right-5`}
          >
            <ChevronRight size={26} />
          </button>
        </>
      )}
    </div>
  );
};

const PhotoGrid = ({ photos, label }) => {
  const { t } = useLang();
  const [open, setOpen] = useState(null);
  if (!photos || photos.length === 0) return null;

  // Satu foto saja: tampil lebih besar supaya tidak terlihat sendirian di grid
  const single = photos.length === 1;

  return (
    <>
      <div
        className={
          single
            ? "mx-auto grid max-w-3xl grid-cols-1"
            : "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4"
        }
      >
        {photos.map((photo, i) => (
          <button
            key={`${photo.src}-${i}`}
            onClick={() => setOpen(i)}
            aria-label={t.gallery.openPhoto(i + 1, photos.length, label)}
            className={`group relative overflow-hidden rounded-2xl border-4 border-white bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-[#AC1754]/60 ${
              single ? "aspect-[16/10]" : "aspect-square"
            }`}
          >
            <img
              src={thumbOf(photo.src)}
              alt={photo.caption || t.gallery.photoAlt(label, i + 1)}
              loading="lazy"
              decoding="async"
              draggable="false"
              onError={(e) => {
                const img = e.currentTarget;
                if (!img.dataset.fallback) {
                  img.dataset.fallback = "1";
                  img.src = photo.src;
                }
              }}
              className="h-full w-full object-cover object-[50%_30%] transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#AC1754]/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="absolute bottom-2.5 right-2.5 translate-y-2 rounded-xl bg-white p-2 text-[#AC1754] opacity-0 shadow-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <Maximize2 size={16} />
            </span>
          </button>
        ))}
      </div>

      {/* Portal ke <body>: elemen induk yang punya filter/transform akan mengurung elemen fixed di dalamnya */}
      {open !== null &&
        createPortal(
          <Lightbox
            photos={photos}
            index={open}
            label={label}
            onClose={() => setOpen(null)}
            onChange={setOpen}
          />,
          document.body
        )}
    </>
  );
};

const GalleryDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { t, tr } = useLang();
  const gallery = GALLERY_DATA[slug];
  const isEmpty = !gallery || !hasPhotos(slug);

  // Halaman baru selalu mulai dari atas, bukan dari posisi scroll halaman utama
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Kalau halaman dibuka langsung lewat link (tanpa riwayat), kembali ke beranda
  const goBack = () => {
    if (window.history.state?.idx > 0) navigate(-1);
    else navigate("/");
  };

  if (isEmpty) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#DB3280] via-[#C72A72] to-[#AC1754] flex items-center justify-center p-6 text-center">
        <div className="bg-white rounded-3xl p-12 shadow-2xl max-w-sm">
          <ImageOff size={60} className="text-[#F7A8C4] mx-auto mb-6" />
          <h2 className="text-2xl font-black text-[#AC1754] mb-2">{t.gallery.emptyTitle}</h2>
          <p className="text-gray-400 mb-8">{t.gallery.emptyText}</p>
          <button
            onClick={goBack}
            className="w-full bg-[#AC1754] text-white font-black py-4 rounded-2xl hover:bg-[#E53888] transition-colors"
          >
            {t.gallery.backCaps}
          </button>
        </div>
      </div>
    );
  }

  const totalPhotos = gallery.kegiatan.reduce((sum, k) => sum + k.photos.length, 0);
  const isMulti = gallery.kegiatan.length > 1;
  const title = tr("gallery", slug, "title", gallery.title);
  const kegiatanEn = tr("gallery", slug, "kegiatan", null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#DB3280] via-[#C72A72] to-[#AC1754]">
      {/* Bintang berkelip yang menempel di layar, tetap terlihat saat halaman di-scroll */}
      <Starfield fixed count={40} seed={7} edgeBias={0.45} mobileCount={20} />

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 pb-16 pt-6 sm:px-8 sm:pb-24 sm:pt-8 lg:px-12">
        {/* Tombol kembali + ganti bahasa */}
        <div className="flex items-center justify-between gap-3">
          <button
            onClick={goBack}
            className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-bold text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white hover:text-[#AC1754]"
          >
            <ArrowLeft size={18} />
            {t.gallery.back}
          </button>
          <LangSwitch tone="pink" />
        </div>

        {/* Judul halaman */}
        <header className="relative mb-10 mt-8 text-center sm:mb-14 sm:mt-10">
          {/* Dua bintang besar mengapit judul */}
          <GlowStar kind="star" size={44} color="gold" className="left-[8%] top-2 hidden sm:block" twinkleDur={3.6} driftDur={8} />
          <GlowStar kind="star" size={34} color="gold" className="right-[10%] top-16 hidden sm:block" twinkleDur={2.8} twinkleDelay={-1.4} driftDur={10} driftDelay={-3} />
          <GlowStar kind="sparkle" size={30} color="white" className="right-[22%] top-0 hidden sm:block" twinkleDur={2.4} twinkleDelay={-0.8} />
          <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm">
            <Images size={14} />
            {t.gallery.docs}
          </span>
          <h1 className="mt-4 text-balance text-3xl font-black leading-tight text-white drop-shadow-lg sm:text-4xl md:text-5xl">
            {title}
          </h1>
          <p className="mt-3 text-sm font-medium text-white sm:text-base">
            {isMulti ? t.gallery.statsMulti(gallery.kegiatan.length, totalPhotos) : t.gallery.statsSingle(totalPhotos)}
          </p>
          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-white/60" />
        </header>

        {/* Daftar kegiatan: tiap kegiatan = satu panel berisi grid foto */}
        <div className="space-y-8 sm:space-y-12">
          {gallery.kegiatan.map((item, idx) => {
            const nama = kegiatanEn?.[item.nama] ?? item.nama;
            return (
            <section
              key={idx}
              className="rounded-3xl border border-white/20 bg-white/10 p-4 shadow-xl sm:p-6 lg:p-8"
            >
              <div className={`mb-5 flex items-start gap-3 sm:mb-6 ${isMulti ? "" : "justify-center text-center"}`}>
                {isMulti && (
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-sm font-black text-[#AC1754] shadow-md">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                )}
                <div className="min-w-0">
                  <h2 className="text-xl font-extrabold leading-snug text-white drop-shadow-sm sm:text-2xl">
                    {nama}
                  </h2>
                  {isMulti && (
                    <p className="text-xs font-medium text-white sm:text-sm">
                      {t.gallery.photoCount(item.photos.length)}
                    </p>
                  )}
                  {item.deskripsi && (
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white sm:text-base">
                      {item.deskripsi}
                    </p>
                  )}
                </div>
              </div>

              <PhotoGrid photos={item.photos} label={nama} />
            </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GalleryDetail;
