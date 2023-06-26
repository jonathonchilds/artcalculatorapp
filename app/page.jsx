"use client";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useEffect, useState } from "react";
import Link from "next/link";

const Home = () => {
  const [imageWidth, setImageWidth] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);
  const [borderWidth, setBorderWidth] = useState(0);
  const [borderHeight, setBorderHeight] = useState(0);
  const [fineArtPapers, setFineArtPapers] = useState([]);
  const [photoQualityPapers, setPhotoQualityPapers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/data")
      .then((response) => response.json())
      .then((data) => {
        const fineArtPapers = data.filter(
          (paper) => paper.category === "Fine Art"
        );
        const photoQualityPapers = data.filter(
          (paper) => paper.category === "Photo"
        );
        setFineArtPapers(fineArtPapers);
        setPhotoQualityPapers(photoQualityPapers);
        setIsLoading(false);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

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
    <section className="flex-center flex-col">
      <h1 className="sm:head_text mobileHeadText">Print Cost Calculator</h1>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center sm:space-x-24 sm:mt-16 sm:mb-32 ">
        <div className="sm:sizingInputContainer mobileSizingInputContainer">
          <h2 className="">Image</h2>
          <p className="text-sm pt-1">Sheet sizes will be rounded up</p>
          <div className="space-x-3 mt-4">
            <input
              type="number"
              placeholder="Width"
              className="inputFields mobileInputFields"
              onChange={(e) => {
                setImageWidth(e.target.value);
              }}
            />
            <input
              type="number"
              placeholder="Height"
              className="mobileInputFields inputFields"
              onChange={(e) => {
                setImageHeight(e.target.value);
              }}
            />
          </div>
          <h2 className="pt-20">Border</h2>
          <p className="text-sm pt-1">Per side</p>
          <div className="space-x-3 mt-4">
            <input
              type="number"
              inputMode="numeric"
              placeholder="Width"
              className="mobileInputFields inputFields"
              onChange={(e) => {
                setBorderWidth(e.target.valueAsNumber);
              }}
            />
            <input
              type="number"
              inputMode="numeric"
              placeholder="Height"
              className="mobileInputFields inputFields"
              onChange={(e) => {
                setBorderHeight(e.target.valueAsNumber);
              }}
            />
          </div>
        </div>
        <div>
          <h2 className="sm:inline-block flex flex-col items-center mt-12 sm:m-auto ">
            <span className="text-decoration underline decoration-purple underline-offset-8 text-2xl sm:text-3xl mb-4 sm:m-auto">
              Final Sheet Size
            </span>{" "}
            {finalWidth ? finalWidth : "0"} x {finalHeight ? finalHeight : "0"}
          </h2>
        </div>
      </div>
      <span className="mt-36">
        <h1 className="sm:tableHeading mobileTableHeading text-center">
          Archival Fine Art Papers
        </h1>
        <h2 className="text-center mt-5 mb-16">(Giclee)</h2>
        <p className="text-center text-md pb-4 mt-4">
          All Fine Art Papers are 100% archival cotton rag without optical
          brightening agents or additives, printed with 12-color pigmented inks.
        </p>
        <p className="pb-16 text-center text-md ">
          Longevity tests estimate lightfastness for 100+ years.
        </p>
      </span>
      <section className="sm:border sm:border-thin sm:rounded-xl sm:shadow-2xl sm:inline hidden sm:w-7xl sm:border-gray-600 sm:shadow-gray-600">
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
                    <td>{paper.paper_type}</td>
                    <td>{paper.paper_weight}</td>
                    <td>{paper.paper_description}</td>
                    <td>${priceEach.toFixed(2)}</td>
                    <td>${priceFiveCopies.toFixed(2)}</td>
                    <td
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

      <h1 className="sm:tableHeading mobileTableHeading text-center sm:pt-48 sm:pb-24 pt-24">
        Photo Quality & Display Media
      </h1>

      <section className="sm:border sm:border-thin sm:rounded-xl sm:shadow-2xl sm:inline hidden mb-20 w-7xl sm:border-gray-600 sm:shadow-gray-600">
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
                    <td>{paper.paper_type}</td>
                    <td>{paper.paper_weight}</td>
                    <td>{paper.paper_description}</td>
                    <td>${priceEach.toFixed(2)}</td>
                    <td>${priceFiveCopies.toFixed(2)}</td>
                    <td
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
    </section>
  );
};

export default Home;
