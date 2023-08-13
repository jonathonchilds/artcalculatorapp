"use client";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { AppStateContext } from "@app/Provider";
import Link from "next/link";

const Home = () => {
  const {
    borderWidth,
    borderHeight,
    imageWidth,
    imageHeight,
    setBorderWidth,
    setBorderHeight,
    setImageWidth,
    setImageHeight,
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

  const cellBorder = "border-r border-t p-4 text-center";

  return (
    <section className="flex items-center flex-col space-y-24 mt-16 z-0">
      <h1 className="tableHeading text-center ">Prints</h1>

      <div className="sizingInputContainer">
        <div className=" h-[230px] flex flex-col justify-evenly items-center ">
          <div className="text-center">
            <h2 className="pb-2">Image</h2>
            <p className="text-sm">Sheet sizes will be rounded up</p>
          </div>
          <div className="space-x-3">
            <input
              type="number"
              placeholder={imageWidth}
              className="inputFields"
              onChange={(e) => {
                setImageWidth(e.target.value);
              }}
            />
            <input
              type="number"
              placeholder={imageHeight}
              className="inputFields"
              onChange={(e) => {
                setImageHeight(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="h-[230px] flex flex-col justify-evenly items-center ">
          <div className="text-center">
            <h2 className="pb-2">Border</h2>
            <p className="text-sm">Per side</p>
          </div>
          <div className="space-x-3">
            <input
              type="number"
              inputMode="numeric"
              placeholder={borderWidth}
              className="inputFields"
              onChange={(e) => {
                setBorderWidth(e.target.valueAsNumber);
              }}
            />
            <input
              type="number"
              inputMode="numeric"
              placeholder={borderHeight}
              className="inputFields"
              onChange={(e) => {
                setBorderHeight(e.target.valueAsNumber);
              }}
            />
          </div>
        </div>
        <div className="flex flex-col justify-evenly items-center ">
          <h2>Final Sheet</h2>
          <span className="sm:text-4xl text-xl h-[53px] flex items-center">
            <div>
              {finalWidth ? finalWidth : "0"} x{" "}
              {finalHeight ? finalHeight : "0"}
            </div>
          </span>
        </div>
        <Link
          href="/printableTable"
          as={"/printableTable"}
          className="font-bold bg-purple border-2 border-slate-600 py-4 px-8 rounded-lg"
        >
          Print Page
        </Link>
      </div>

      <span className="space-y-8">
        <h1 className="tableHeading mt-16 text-center">
          Archival Fine Art Papers
        </h1>
        <h2 className="text-center">(Giclee)</h2>
        <p className="text-center text-md">
          100% archival cotton rag without optical brightening agents or
          additives.
        </p>
        <p className="text-center text-md">
          Printed with 12-color, pigmented inks.
        </p>
        <p className="text-center text-md ">
          Longevity tests estimate lightfastness for 100+ years!
        </p>
      </span>
      <section className="hidden sm:inline sm:w-7xl sm:shadow-2xl sm:shadow-gray-600 sm:border sm:border-thin sm:rounded-xl sm:border-gray-600 ">
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Weight</th>
              <th>Description</th>
              <th>Each</th>
              <th className="px-5">5+</th>
              <th></th>
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
                    <td
                      className="px-5"
                      onClick={() =>
                        window.open(
                          "https://www.digitalartsstudio.com/",
                          "_blank"
                        )
                      }
                    >
                      Order
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </section>
      <div className="sm:hidden">
        {fineArtPapers.map((paper) => {
          const priceEach = calculatePriceEach(
            finalSheetSize,
            paper.multiplier
          );
          const priceFiveCopies = roundToTwo(priceEach * 0.9);
          return (
            <div
              key={paper.id}
              className="border-2 border-slate-600 my-12 h-auto rounded-lg p-10 mx-4"
            >
              <h2 className="font-bold text-center pb-4 text-2xl">
                {paper.paper_type}
              </h2>
              <p className="text-center pb-1 text-lg">{paper.paper_weight}</p>
              <p className="text-center pb-6 text-lg">
                {paper.paper_description}
              </p>
              <p className="text-center pb-3 font-semibold text-xl">
                Each: ${priceEach.toFixed(2)}
              </p>
              <p className="text-center font-semibold text-xl">
                5+ Copies: ${priceFiveCopies.toFixed(2)}
              </p>
              <p className="text-center  font-semibold text-3xl mt-8">
                <Link
                  href="https://www.digitalartsstudio.com/"
                  target="_blank"
                  className="font-bold bg-purple border-2 border-slate-600 p-2 rounded-lg"
                >
                  Order
                </Link>
              </p>
            </div>
          );
        })}
      </div>

      <h1 className="tableHeading text-center pt-16">
        Photo Quality & Display Media
      </h1>

      <section className="sm:border sm:border-thin sm:rounded-xl sm:shadow-2xl sm:inline hidden sm:max-w-7xl sm:border-gray-600 sm:shadow-gray-600">
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Weight</th>
              <th>Description</th>
              <th>Each</th>
              <th className="px-5">5+</th>
              <th></th>
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
              photoQualityPapers.map((paper) => {
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
                    <td
                      className="px-5"
                      onClick={() =>
                        window.open(
                          "https://www.digitalartsstudio.com/",
                          "_blank"
                        )
                      }
                    >
                      Order
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </section>
      <div className="sm:hidden">
        {photoQualityPapers.map((paper) => {
          const priceEach = calculatePriceEach(
            finalSheetSize,
            paper.multiplier
          );
          const priceFiveCopies = roundToTwo(priceEach * 0.9);
          return (
            <div
              key={paper.id}
              className="border-2 border-slate-600 my-12 h-auto rounded-lg p-10 mx-4"
            >
              <h2 className="font-bold text-center pb-4 text-2xl">
                {paper.paper_type}
              </h2>
              <p className="text-center pb-1 text-lg">{paper.paper_weight}</p>
              <p className="text-center pb-6 text-lg">
                {paper.paper_description}
              </p>
              <p className="text-center pb-3 font-semibold text-xl">
                Each: ${priceEach.toFixed(2)}
              </p>
              <p className="text-center font-semibold text-xl">
                5+ Copies: ${priceFiveCopies.toFixed(2)}
              </p>
              <p className="text-center font-semibold text-3xl mt-8">
                <Link
                  href="https://www.digitalartsstudio.com/"
                  target="_blank"
                  className="font-bold bg-purple border-2 border-slate-600 p-2 rounded-lg"
                >
                  Order
                </Link>
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Home;
