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
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Weight</th>
            <th>Description</th>
            <th>Each</th>
            <th className="px-5">5+</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan="6">
                <div className="text-center p-16">Loading...</div>
              </td>
            </tr>
          ) : (
            fineArtPapers.map((paper) => {
              const priceEach = calculatePriceEach(
                finalSheetSize,
                paper.multiplier
              );
              const priceFiveCopies = roundToTwo(priceEach * 0.9);
              return (
                <tr key={paper.id}>
                  <td className="px-5">{paper.paper_type}</td>
                  <td>{paper.paper_weight}</td>
                  <td>{paper.paper_description}</td>
                  <td>${priceEach.toFixed(2)}</td>
                  <td>${priceFiveCopies.toFixed(2)}</td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
      <button onClick={() => window.print()}>Print</button>
    </div>
  );
};

export default PrintableTable;
