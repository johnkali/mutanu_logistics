
import { useEffect } from "react";
import { Download, ExternalLink, X } from "lucide-react";

interface ReferenceViewerProps {
  title: string;
  pdfUrl: string;
  onClose: () => void;
}

export default function ReferenceViewer({
  title,
  pdfUrl,
  onClose,
}: ReferenceViewerProps) {
  // Allow visitors to close the viewer using Escape.
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#071321]/80 p-3 backdrop-blur-sm sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="reference-viewer-title"
        className="flex h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-sm bg-white shadow-2xl"
      >
        {/* Viewer toolbar */}
        <header className="flex items-center justify-between gap-3 border-b border-slate-200 px-4 py-3 sm:px-6">
          <div className="min-w-0">
            <h2
              id="reference-viewer-title"
              className="truncate font-heading text-sm font-bold text-[#0b1b2b] sm:text-base"
            >
              {title}
            </h2>
            <p className="mt-1 text-xs text-slate-500">
              Original client reference · PDF
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href={pdfUrl}
              download
              aria-label={`Download ${title}`}
              className="inline-flex items-center gap-2 border border-slate-300 px-3 py-2 text-sm font-semibold text-[#0b1b2b] hover:bg-slate-50"
            >
              <Download size={16} />
              <span className="hidden sm:inline">Download</span>
            </a>

            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${title} in a new tab`}
              className="border border-slate-300 p-2 text-[#0b1b2b] hover:bg-slate-50"
            >
              <ExternalLink size={17} />
            </a>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close reference viewer"
              className="p-2 text-slate-600 hover:bg-slate-100 hover:text-[#d9232e] focus:outline-none focus:ring-2 focus:ring-[#d9232e]"
            >
              <X size={20} />
            </button>
          </div>
        </header>

        {/* Embedded PDF */}
        <div className="min-h-0 flex-1 bg-slate-100">
          <iframe
            key={pdfUrl}
            src={pdfUrl}
            title={title}
            className="h-full w-full border-0"
          />
        </div>
      </section>
    </div>
  );
}
