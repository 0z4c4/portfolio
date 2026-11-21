import { useCallback, useEffect, useState } from "react";
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

  return (
    <div
      className="media-modal"
      role="dialog"
      aria-modal="true"
      aria-label={item.type === "video" ? `Reproducir ${title}` : `Ver ${title}`}
      onClick={onClose}
    >
      <div
        className="media-modal__content"
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
