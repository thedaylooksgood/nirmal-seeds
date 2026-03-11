"use client";

import React, { useState, useEffect } from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import { accreditationTabsData, nablData } from "../accreditation-data";

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// Configure PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

import axios from "axios";

// Helper component that fetches the PDF via a low-level blob to prevent IDM URL hijacking
const PdfProxyViewer = ({ src, containerWidth }: { src: string, containerWidth: number }) => {
    const [blobUrl, setBlobUrl] = useState<string | null>(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchPdf = async () => {
            try {
                // Fetch as arraybuffer blob with custom headers
                const response = await axios.get(src, {
                    responseType: "blob",
                    headers: {
                        'Cache-Control': 'no-cache, no-store, must-revalidate',
                        'Pragma': 'no-cache',
                        'Expires': '0',
                    }
                });
                const url = URL.createObjectURL(new Blob([response.data], { type: "application/pdf" }));
                setBlobUrl(url);
            } catch (err) {
                console.error("Failed to fetch PDF directly:", err);
                setError(true);
            }
        };
        fetchPdf();
        return () => {
            if (blobUrl) URL.revokeObjectURL(blobUrl);
        };
    }, [src]);

    if (error) return <p className="py-10 text-red-500">Failed to securely load PDF.</p>;
    if (!blobUrl) return <p className="py-10 text-[#111]">Securely loading PDF...</p>;

    return (
        <div className="max-h-[350px] md:max-h-[450px] overflow-y-auto overflow-x-hidden border border-gray-200 shadow-inner w-full flex justify-center bg-gray-100">
            <Document
                file={blobUrl}
                loading={<p className="py-10 text-[#111]">Rendering PDF...</p>}
                error={<p className="py-10 text-red-500">Failed to render PDF.</p>}
            >
                <Page
                    pageNumber={1}
                    width={containerWidth > 800 ? 800 : containerWidth}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                />
            </Document>
        </div>
    );
}

export function AccreditationContent() {
    const [activeTab, setActiveTab] = useState(0);

    const handlePrev = () => {
        setActiveTab((prev) => (prev === 0 ? accreditationTabsData.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setActiveTab((prev) => (prev === accreditationTabsData.length - 1 ? 0 : prev + 1));
    };

    // To adjust PDF size based on container width
    const [containerWidth, setContainerWidth] = useState<number>(600);
    const pdfContainerRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => {
            if (pdfContainerRef.current) {
                setContainerWidth(pdfContainerRef.current.clientWidth - 40); // 40px padding
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [activeTab]);

    return (
        <section className="w-full">
            {/* Top Section - Tabs and Title */}
            <div className="w-full bg-white pt-8 sm:pt-12 pb-12 px-4 sm:px-6">
                <div className="mx-auto w-full max-w-[1000px]">
                    <h1 className="text-center font-bold text-[30px] sm:text-[36px] leading-tight text-[#3c8e00] mb-6 uppercase tracking-wide">
                        ACCREDITATION
                    </h1>

                    {/* Tabs Navigation */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 shadow-sm rounded-sm overflow-hidden mb-0">
                        {accreditationTabsData.map((tab, idx) => {
                            const inactiveBg = idx % 2 === 0 ? "bg-[#b0b0b0] hover:bg-[#a0a0a0]" : "bg-[#c9c9c9] hover:bg-[#b9b9b9]";
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(idx)}
                                    className={`px-2 py-1 sm:px-3 sm:py-1 text-[10px] sm:text-[11px] md:text-[12px] font-bold text-left border-r border-[#d5d5d5] last:border-r-0 transition-colors duration-200 flex items-center justify-start min-h-[48px] ${activeTab === idx
                                        ? "bg-[#3c8e00] text-white"
                                        : `${inactiveBg} text-[#111]`
                                        }`}
                                >
                                    {tab.title}
                                </button>
                            );
                        })}
                    </div>

                    {/* Image Viewer Area */}
                    <div className="w-full bg-[#edf5e1] p-4 sm:p-8 pb-10 flex items-center justify-between mb-0 relative">
                        {/* Prev Button */}
                        <button
                            onClick={handlePrev}
                            className="bg-transparent border border-gray-400 rounded-full w-10 h-10 flex items-center justify-center hover:bg-white/50 transition z-10 shrink-0"
                        >
                            <MoveLeft className="w-5 h-5 text-[#111]" strokeWidth={1.5} />
                        </button>

                        {/* Media Container */}
                        <div
                            ref={pdfContainerRef}
                            className="flex-1 max-w-[850px] mx-4 bg-white rounded-md shadow-[0px_4px_12px_rgba(0,0,0,0.08)] p-3 sm:p-4 flex flex-col items-center justify-center relative min-h-[250px] md:min-h-[350px]"
                        >
                            {accreditationTabsData[activeTab].media?.type === "image" && (
                                <img
                                    src={accreditationTabsData[activeTab].media.src as string}
                                    alt={accreditationTabsData[activeTab].title}
                                    className="w-full h-auto max-h-[350px] md:max-h-[450px] object-contain"
                                />
                            )}
                            {accreditationTabsData[activeTab].media?.type === "pdf" && (
                                <PdfProxyViewer src={accreditationTabsData[activeTab].media.src as string} containerWidth={containerWidth} />
                            )}
                            {accreditationTabsData[activeTab].media?.type === "none" && (
                                <div className="flex flex-col items-center justify-center text-center p-8 bg-gray-50 rounded-sm w-full h-full min-h-[200px] md:min-h-[300px]">
                                    <p className="text-[#3c8e00] font-bold text-[18px] sm:text-[22px] mb-2">Certificate Unavailable</p>
                                    <p className="text-[#111] text-[14px]">The document for this accreditation is currently not available to view online.</p>
                                </div>
                            )}
                        </div>

                        {/* Next Button */}
                        <button
                            onClick={handleNext}
                            className="bg-transparent border border-gray-400 rounded-full w-10 h-10 flex items-center justify-center hover:bg-white/50 transition z-10 shrink-0"
                        >
                            <MoveRight className="w-5 h-5 text-[#111]" strokeWidth={1.5} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Content Area with yellowish gradient */}
            <div className="w-full pb-20 pt-16 px-4 sm:px-6" style={{ background: "linear-gradient(180deg, #fee0a0 0%, #FFFDF7 40%, #FFFFFF 100%)" }}>
                <div className="max-w-4xl mx-auto flex flex-col gap-10">

                    {/* NABL Intro Paragraphs */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-[22px] sm:text-[26px] font-bold text-[#111]">
                            {nablData.title}
                        </h2>
                        {nablData.paragraphs.map((p, idx) => (
                            <p key={idx} className="text-[16px] sm:text-[17px] leading-[1.7] font-medium text-[#111]">
                                {p}
                            </p>
                        ))}
                    </div>

                    <div className="border-t border-dotted border-gray-300 w-full" />

                    {/* Why NABL Accreditation Matters */}
                    <div className="flex flex-col gap-5 mt-2">
                        <h2 className="text-[20px] sm:text-[24px] font-bold text-[#111]">
                            {nablData.whyNabl.title}
                        </h2>
                        <ul className="flex flex-col gap-5 pl-2">
                            {nablData.whyNabl.points.map((point, idx) => (
                                <li key={idx} className="flex relative items-start text-[16px] sm:text-[17px] text-[#111] font-medium leading-[1.6]">
                                    <span className="mr-3 text-black font-bold mt-[2px] text-[20px] leading-none">•</span>
                                    <span>
                                        {point.normal}
                                        {point.bold && <span className="font-bold text-[#000]">{point.bold}</span>}
                                        {point.end}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="border-t border-dotted border-gray-300 w-full" />

                    {/* Testing Services Offered */}
                    <div className="flex flex-col gap-5 mt-2">
                        <h2 className="text-[20px] sm:text-[24px] font-bold text-[#111] mb-5">
                            {nablData.services.title}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-5">
                            {nablData.services.columns.map((col, idx) => (
                                <div key={idx} className="flex flex-col gap-4">
                                    <h3 className="font-bold text-[17px] sm:text-[19px] text-[#111]">{col.title}</h3>
                                    <ul className="flex flex-col gap-4 pl-2">
                                        {col.items.map((item, idxx) => (
                                            <li key={idxx} className="flex relative items-start text-[16px] sm:text-[17px] font-medium text-[#111] leading-[1.6]">
                                                <span className="mr-3 text-black font-bold mt-[2px] text-[20px] leading-none">•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <p className="text-[16px] sm:text-[17px] leading-[1.7] border-t-2 border-green-200 pt-6 font-medium text-[#111] mt-4">
                            {nablData.services.footerText}
                        </p>
                    </div>

                    <div className="border-t border-dotted border-gray-300 w-full" />

                </div>
            </div>
        </section>
    );
}
