"use client";

import { FiEdit2 } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";
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

  //
  // had to add parsefloat because it was concatenating the strings instead of adding the numbers! Even though state is set to a number, it was still a string when it was being used in the calculation. I.e., 1 + 0 = 10 instead of 1 + 0 = 1
  // discovered while testing various conditions in the calculator: decimals, 0, etc.
  // not using reg. exp. checking for now, but may need to add later (supplied spreadsheet doesn't have validation)
  // I was rounding the width's and heights before supplying the values for finalSheetSize, but the supplied spreadsheet rounds up at the finalSheetSize calculation
  //
  //INTRODUCING.. The unary plus operator!!! (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus)
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

  const isUserLoggedIn = false;

  const cellBorder = "border-r border-t p-4 text-center";
  const iconStyling = "text-2xl mx-1";
  const tableHeadings = "border-r border-t p-6 text-3xl";

  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">Print Cost Calculator</h1>
      <div className="flex sm:flex-between sm:mx-4 mb-[14px] flex-wrap justify-center mt-24">
        {/* image size container */}
        <div className="mb-4 sm:mx-4 w-72 h-auto border rounded-xl p-2 shadow-xl">
          <h2 className="pb-2 text-center font-bold text-lg">
            Enter Image Size
          </h2>
          <p className="pb-4 text-center text-gray-600">
            (Sheet sizes will be rounded up to the next whole number)
          </p>
          <div className="flex flex-col">
            <label className="text-center text-xs text-gray-600">
              Image Width
            </label>
            <input
              type="number"
              className="rounded-xl p-4 my-3 mb-5 mt-1 text-center border-2 "
              onChange={(e) => {
                setImageWidth(e.target.value);
              }}
            />
            <label className="text-center text-xs text-gray-600">
              Image Height
            </label>
            <input
              type="number"
              className="rounded-xl p-4 my-3 mt-1 text-center border-2"
              onChange={(e) => {
                setImageHeight(e.target.value);
              }}
            />
          </div>
        </div>
        {/* border container */}
        <div className="mb-4 sm:mx-4 border w-72 h-auto rounded-xl p-2 min-h-max shadow-xl">
          <h2 className="pb-2 text-center font-bold text-lg">
            Enter Border Size
          </h2>
          <p className="pb-4 h-[64px] text-center text-gray-600">(Per Side)</p>
          <div className="flex flex-col">
            <label className="text-center text-xs text-gray-600">
              Border Width
            </label>
            <input
              type="number"
              inputMode="numeric"
              className="rounded-xl p-4 my-3 mb-5 mt-1 text-center border-2 "
              onChange={(e) => {
                setBorderWidth(e.target.valueAsNumber);
              }}
            />
            <label className="text-center text-xs text-gray-600">
              Border Height
            </label>
            <input
              type="number"
              inputMode="numeric"
              className="rounded-xl p-4 my-3 mt-1 text-center border-2"
              onChange={(e) => {
                setBorderHeight(e.target.valueAsNumber);
              }}
            />
          </div>
        </div>
      </div>
      <div className="mb-10 sm:mx-4 border w-72 h-auto rounded-xl justify-center flex flex-col shadow-xl p-10 min-h-max">
        <h2 className="text-center font-bold text-xl p-2">Final Sheet Size</h2>
        <p className="p-2 text-center text-lg">
          {finalWidth} x {finalHeight}
        </p>
      </div>

      <div className="sm:border sm:rounded-lg sm:shadow-2xl sm:m-10 sm:inline hidden w-[74rem]">
        <span>
          <h1 className="text-center font-bold text-5xl py-16">
            Archival Fine Art Papers (Giclee)
          </h1>
          <p className="text-center text-md pb-10">
            All Fine Art Papers are 100% archival cotton rag without optical
            brightening agents or additives, printed with 12-color pigmented
            inks.
          </p>
          <p className="pb-16 text-center text-lg  font-extrabold">
            Longevity tests estimate lightfastness for 100+ years!
          </p>{" "}
        </span>
        <table>
          <thead>
            <tr className="border-b">
              <th className={`${tableHeadings}`}>Type</th>
              <th className={`${tableHeadings}`}>Weight</th>
              <th className={`${tableHeadings}`}>Description</th>

              <th className={`${tableHeadings}`}>Each</th>
              <th className={`${tableHeadings}`}>5+</th>
              <th className={`${tableHeadings}`}></th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan="6">
                  <div>Loading...</div>
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
                    <td className={`${cellBorder} text-xl font-semibold`}>
                      {paper.paper_type}
                    </td>
                    <td className={`${cellBorder}`}>{paper.paper_weight}</td>
                    <td className={`${cellBorder}`}>
                      {paper.paper_description}
                    </td>
                    <td className={`${cellBorder}`}>${priceEach.toFixed(2)}</td>
                    <td className={`${cellBorder}`}>
                      ${priceFiveCopies.toFixed(2)}
                    </td>
                    <td
                      className={`${cellBorder} hover:bg-slate-300 hover:cursor-pointer font-bold text-xl`}
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
      </div>
      <div className="sm:hidden">
        <span>
          <h1 className="text-center font-bold text-5xl pt-16">
            Archival Fine Art Papers (Giclee)
          </h1>
        </span>
        {fineArtPapers.map((paper) => {
          const priceEach = calculatePriceEach(
            finalSheetSize,
            paper.multiplier
          );
          const priceFiveCopies = roundToTwo(priceEach * 0.9);
          return (
            <div
              key={paper.id}
              className="border-2 border-slate-600 my-12 h-auto rounded-lg p-10"
            >
              <h2 className="font-bold text-center pb-4 text-4xl">
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
              <p className="text-center font-semibold text-4xl mt-8">
                <Link
                  href="https://www.digitalartsstudio.com/"
                  target="_blank"
                  className="font-bold border-2 border-slate-600 p-2 rounded-lg hover:bg-slate-300"
                >
                  Order
                </Link>
              </p>
            </div>
          );
        })}
      </div>
      <div className="sm:border sm:rounded-lg sm:shadow-2xl sm:inline hidden my-16 w-[74rem]">
        <span>
          <h1 className="text-center font-bold text-5xl py-16">
            Photo Quality & Display Media
          </h1>
        </span>
        <table>
          <thead>
            <tr className="border-b">
              <th className={`${tableHeadings}`}>Media Type</th>
              <th className={`${tableHeadings}`}>Media Weight</th>
              <th className={`${tableHeadings}`}>Description</th>

              <th className={`${tableHeadings}`}>Each</th>
              <th className={`${tableHeadings}`}>5+ Copies</th>
              <th className={`${tableHeadings}`}></th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan="6">
                  <div>Loading...</div>
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
                    <td className={`${cellBorder}`}>{paper.paper_type}</td>
                    <td className={`${cellBorder}`}>{paper.paper_weight}</td>
                    <td className={`${cellBorder}`}>
                      {paper.paper_description}
                    </td>
                    <td className={`${cellBorder}`}>${priceEach.toFixed(2)}</td>
                    <td className={`${cellBorder}`}>
                      ${priceFiveCopies.toFixed(2)}
                    </td>
                    <td
                      className={`${cellBorder} hover:bg-slate-300 hover:cursor-pointer font-bold text-xl`}
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
      </div>
      <div className="sm:hidden">
        <span>
          <h1 className="text-center font-bold text-3xl pt-16">
            Photo Quality / Display Media
          </h1>
        </span>
        {photoQualityPapers.map((paper) => {
          const priceEach = calculatePriceEach(
            finalSheetSize,
            paper.multiplier
          );
          const priceFiveCopies = roundToTwo(priceEach * 0.9);
          return (
            <div
              key={paper.id}
              className="border-2 border-slate-600 my-12 h-auto rounded-lg p-10"
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
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Home;
