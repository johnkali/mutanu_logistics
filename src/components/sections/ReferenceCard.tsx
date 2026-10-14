
import { Download, ExternalLink, FileText } from "lucide-react";
import type { ClientReference } from "../../data/references";
// import { useState } from "react";
// import ReferenceViewer from "./ReferenceViewer";

interface ReferenceCardProps {
    reference: ClientReference;
}

export default function ReferenceCard({
    reference,
}: ReferenceCardProps) {
    // const [isViewerOpen, setIsViewerOpen] = useState(false);
    return (
        <article className="group flex h-full flex-col rounded-sm border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#d9232e]/40 hover:shadow-lg">
            {/* Document icon */}
            <div className="mb-5 flex h-12 w-12 items-center justify-center bg-slate-100 text-[#0b1b2b] transition group-hover:bg-[#d9232e] group-hover:text-white">
                <FileText size={23} aria-hidden="true" />
            </div>

            <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-[#d9232e]">
                Client reference
            </p>

            <h2 className="mb-2 font-heading text-xl leading-snug text-[#0b1b2b]">
                {reference.organization}
            </h2>

            <h3 className="mb-3 text-sm font-semibold text-slate-700">
                {reference.title}
            </h3>

            <p className="mb-6 flex-1 text-sm leading-7 text-slate-600">
                {reference.description}
            </p>

            {reference.date && (
                <p className="mb-4 text-xs text-slate-500">
                    Reference date: {reference.date}
                </p>
            )}

            {/* Document actions */}
            <div className="mt-auto flex flex-wrap gap-3 border-t border-slate-100 pt-5">
                <a
          href={reference.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View reference letter from ${reference.organization}`}
          className="inline-flex items-center gap-2 bg-[#d9232e] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#b91d27] focus:outline-none focus:ring-2 focus:ring-[#d9232e] focus:ring-offset-2"
        >
          View Reference
          <ExternalLink size={15} aria-hidden="true" />
        </a>
                {/* <button
                    type="button"
                    onClick={() => setIsViewerOpen(true)}
                    className="inline-flex items-center gap-2 bg-[#d9232e] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#b91d27] focus:outline-none focus:ring-2 focus:ring-[#d9232e] focus:ring-offset-2"
                >
                    View Reference
                    <ExternalLink size={15} aria-hidden="true" />
                </button> */}

                <a
                    href={reference.pdfUrl}
                    download
                    aria-label={`Download reference letter from ${reference.organization}`}
                    className="inline-flex items-center gap-2 border border-slate-300 px-4 py-3 text-sm font-semibold text-[#0b1b2b] transition hover:border-[#0b1b2b] hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#d9232e] focus:ring-offset-2"
                >
                    <Download size={15} aria-hidden="true" />
                    PDF
                </a>
            </div>
            {/* {isViewerOpen && (
                <ReferenceViewer
                    title={reference.organization}
                    pdfUrl={reference.pdfUrl}
                    onClose={() => setIsViewerOpen(false)}
                />
            )} */}
        </article>
    );
}
