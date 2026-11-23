import { useCallback, useEffect, useRef, useState } from "react";
import {
  CloseIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "./Icons";
import "./MediaModal.css";

export interface MediaItem {
  type: "image" | "video";
  src: string;
  caption?: string;
}

interface MediaModalProps {
  items: MediaItem[];
  initialIndex: number;
  title: string;
  category: string;
  onClose: () => void;
}

export default function MediaModal({
  items,
  initialIndex,
  title,
  category,
  onClose,
}: MediaModalProps) {
  const [index, setIndex] = useState(initialIndex);
  const stripRef = useRef<HTMLDivElement | null>(null);
  const activeThumbRef = useRef<HTMLButtonElement | null>(null);
  const item = items[index];
  const hasMultiple = items.length > 1;

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + items.length) % items.length),
    [items.length],
  );

  const next = useCallback(
    () => setIndex((i) => (i + 1) % items.length),
    [items.length],
  );

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") prev();
      if (event.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  useEffect(() => {
    const strip = stripRef.current;
    const thumb = activeThumbRef.current;
    if (!strip || !thumb) return;
    const target =
      thumb.offsetLeft - (strip.clientWidth - thumb.clientWidth) / 2;
    strip.scrollTo({ left: target, behavior: "smooth" });
  }, [index]);

  return (
    <div
      className="media-modal"
      role="dialog"
      aria-modal="true"
      aria-label={item.type === "video" ? `Reproducir ${title}` : `Ver ${title}`}
      onClick={onClose}
    >
      <div
        className={`media-modal__content${
          hasMultiple ? " media-modal__content--multi" : ""
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="media-modal__close"
          aria-label="Cerrar"
          onClick={onClose}
        >
          <CloseIcon size={22} />
        </button>

        <div className="media-modal__stage">
          {item.type === "video" ? (
            <video
              key={item.src}
              className="media-modal__video"
              src={item.src}
              controls
              autoPlay
            />
          ) : (
            <img
              key={item.src}
              className="media-modal__image"
              src={item.src}
              alt={title}
            />
          )}
        </div>

        {hasMultiple && (
          <>
            <button
              type="button"
              className="media-modal__nav media-modal__nav--prev"
              aria-label="Anterior"
              onClick={prev}
            >
              <ChevronLeftIcon size={26} />
            </button>
            <button
              type="button"
              className="media-modal__nav media-modal__nav--next"
              aria-label="Siguiente"
              onClick={next}
            >
              <ChevronRightIcon size={26} />
            </button>

            <div
              className="media-modal__thumbs"
              ref={stripRef}
              role="tablist"
              aria-label={`Piezas de ${title}`}
            >
              {items.map((thumbItem, itemIndex) => (
                <button
                  key={thumbItem.src}
                  ref={itemIndex === index ? activeThumbRef : undefined}
                  type="button"
                  role="tab"
                  aria-selected={itemIndex === index}
                  aria-label={`Pieza ${itemIndex + 1}${
                    thumbItem.caption ? `: ${thumbItem.caption}` : ""
                  }`}
                  className={`media-modal__thumb${
                    itemIndex === index ? " media-modal__thumb--active" : ""
                  }`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {thumbItem.type === "video" ? (
                    <video src={thumbItem.src} preload="metadata" muted playsInline />
                  ) : (
                    <img src={thumbItem.src} alt="" loading="lazy" />
                  )}
                  <span className="media-modal__thumb-index">
                    {itemIndex + 1}
                  </span>
                </button>
              ))}
            </div>
          </>
        )}

        <div className="media-modal__caption">
          <div>
            <span className="media-modal__category">{category}</span>
            <strong className="media-modal__title">
              {item.caption ?? title}
            </strong>
          </div>
          {hasMultiple && (
            <span className="media-modal__counter">
              {index + 1} / {items.length}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
