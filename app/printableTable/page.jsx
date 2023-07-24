"use client";

import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import { AppStateContext } from "@app/Provider";

const PrintableTable = () => {
  const {
    borderWidth,
    borderHeight,
    imageWidth,
    imageHeight,
    fineArtPapers,
    photoQualityPapers,
    isLoading,
  } = useContext(AppStateContext);

  const finalWidth = +imageWidth + +borderWidth * 2;
  const finalHeight = +imageHeight + +borderHeight * 2;

  const finalSheetSize = Math.ceil(finalWidth) * Math.ceil(finalHeight);

  function calculatePriceEach(finalSheetSize, multiplier) {
    const priceEach = roundToTwo((finalSheetSize / 144) * multiplier);
    return priceEach;
  }

  function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
  }

  return (
    <div className="flex flex-col justify-center">
      <button
        className="text-2xl border w-20 rounded mx-auto p-2 bg-red no-print
        "
        onClick={() => window.print()}
      >
        Print
      </button>

      <h1 className="mx-auto mt-12 mb-4 text-2xl">Archival Fine Art Papers</h1>
      <table className="max-w-4xl mx-auto text-center">
        <tbody>
          {fineArtPapers.map((paper) => {
            const priceEach = calculatePriceEach(
              finalSheetSize,
              paper.multiplier
            );
            const priceFiveCopies = roundToTwo(priceEach * 0.9);
            return (
              <tr key={paper.id} className="text-sm">
                <td className="px-2 py-2">{paper.paper_type}</td>
                <td className="px-2 py-2">{paper.paper_weight}</td>
                <td className="px-2 py-2">{paper.paper_description}</td>
                <td className="px-2 py-2">${priceEach.toFixed(2)}</td>
                <td className="px-2 py-2">${priceFiveCopies.toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h1 className="mx-auto mt-12 mb-4 text-2xl">
        Photo Quality & Display Media
      </h1>
      <table className="max-w-4xl mx-auto text-center">
        <tbody>
          {photoQualityPapers.map((paper) => {
            const priceEach = calculatePriceEach(
              finalSheetSize,
              paper.multiplier
            );
            const priceFiveCopies = roundToTwo(priceEach * 0.9);
            return (
              <tr key={paper.id} className="text-sm">
                <td className="px-2 py-2">{paper.paper_type}</td>
                <td className="px-2 py-2">{paper.paper_weight}</td>
                <td className="px-2 py-2">{paper.paper_description}</td>
                <td className="px-2 py-2">${priceEach.toFixed(2)}</td>
                <td className="px-2 py-2">${priceFiveCopies.toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PrintableTable;
