// components/modal.jsx
import React, { useEffect, useId, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styles from "../styles/Home.module.css";

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  ariaLabel,
  wide,
  cardClassName,
}) {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const lastFocused = useRef(null);
  const titleId = useId();

  // Create a portal node on the client
  useEffect(() => {
    if (typeof window === "undefined") return;
    const node = document.createElement("div");
    node.setAttribute("data-portal", "modal-root");
    containerRef.current = node;
    document.body.appendChild(node);
    setMounted(true);
    return () => {
      try {
        if (containerRef.current?.parentNode) {
          containerRef.current.parentNode.removeChild(containerRef.current);
        }
      } finally {
        containerRef.current = null;
        setMounted(false);
      }
    };
  }, []);

  // Open/close effects: ESC, scroll lock, focus trap, restore focus, hide app from SR
  useEffect(() => {
    if (!isOpen) return;

    lastFocused.current = document.activeElement;

    const onKey = (e) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose();
      } else if (e.key === "Tab") {
        const root = cardRef.current;
        if (!root) return;
        const focusables = root.querySelectorAll(
          'a[href], area[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) {
          e.preventDefault();
          return;
        }
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement;

        if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        } else if (e.shiftKey && active === first) {
          e.preventDefault();
          last.focus();
        }
      }
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);

    // focus the dialog after paint
    setTimeout(() => cardRef.current?.focus(), 0);

    // hide app for screen readers while modal is open
    const appRoot = document.getElementById("__next");
    const prevAriaHidden = appRoot?.getAttribute("aria-hidden");
    appRoot?.setAttribute("aria-hidden", "true");

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow || "";
      if (prevAriaHidden === null) appRoot?.removeAttribute("aria-hidden");
      else if (prevAriaHidden !== undefined)
        appRoot?.setAttribute("aria-hidden", prevAriaHidden);
      lastFocused.current?.focus?.();
    };
  }, [isOpen, onClose]);

  const overlayA11y = useMemo(
    () => (title ? { "aria-labelledby": titleId } : { "aria-label": ariaLabel ?? "Dialog" }),
    [title, titleId, ariaLabel]
  );

  if (!mounted || !isOpen || !containerRef.current) return null;

  const stop = (e) => e.stopPropagation();

  const cardClasses = [
    styles.modalCard,
    wide ? styles.modalCardWide : "",
    cardClassName || "",
  ]
    .filter(Boolean)
    .join(" ");

  return createPortal(
    <div
      className={styles.modalOverlay}
      role="dialog"
      aria-modal="true"
      {...overlayA11y}
      onClick={onClose}
    >
      <div ref={cardRef} tabIndex={-1} className={cardClasses} onClick={stop}>
        <button
          type="button"
          aria-label="Close dialog"
          className={styles.modalClose}
          onClick={onClose}
        >
          <span aria-hidden>×</span>
        </button>

        {title && (
          <header className={styles.modalHeader}>
            <h3 id={titleId} className={styles.modalTitle}>
              {title}
            </h3>
          </header>
        )}

        <div className={styles.modalBody}>{children}</div>
      </div>
    </div>,
    containerRef.current
  );
}
