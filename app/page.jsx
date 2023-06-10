"use client";

import { FiEdit2 } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";

import data from "../priceCalculatorData.json";

const Home = () => {
  const [imageWidth, setImageWidth] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);
  const [borderWidth, setBorderWidth] = useState(0);
  const [borderHeight, setBorderHeight] = useState(0);

  // had to add parsefloat because it was concatenating the strings instead of adding the numbers! Even though state is set to a number,
  // it was still a string when it was being used in the calculation. I.e., 1 + 0 = 10 instead of 1 + 0 = 1
  // discovered while testing various conditions in the calculator: decimals, 0, etc.
  // not using reg. exp. checking for now, but may need to add later (supplied spreadsheet doesn't have validation)
  // I was rounding the width's and heights before supplying the values for finalSheetSize, but the supplied spreadsheet rounds up at the finalSheetSize calculation
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
  const iconStyling = "text-2xl mx-1";

  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">Print Cost Calculator</h1>
      <p className="sm:my-12 my-4 text-center text-gray-600">
        Use this calculator for non-standard sizes and/or to compare different
        paper selections.
      </p>
      <div className="flex sm:flex-between sm:mx-4 mb-[14px] flex-wrap justify-center ">
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
              className="rounded-xl p-4 my-3 mb-5 mt-1 text-center "
              onChange={(e) => {
                setImageWidth(e.target.value);
              }}
            />
            <label className="text-center text-xs text-gray-600">
              Image Height
            </label>
            <input
              type="number"
              className="rounded-xl p-4 my-3 mt-1 text-center"
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
              className="rounded-xl p-4 my-3 mb-5 mt-1 text-center "
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
              className="rounded-xl p-4 my-3 mt-1 text-center"
              onChange={(e) => {
                setBorderHeight(e.target.valueAsNumber);
              }}
            />
          </div>
        </div>
      </div>
      <div className="mb-10 sm:mx-4 border w-72 h-auto rounded-xl justify-center flex flex-col shadow-xl  p-2 min-h-max">
        <h2 className="text-center font-bold text-xl p-2">Final Sheet Size</h2>
        <p className="p-2 text-center text-lg">
          {finalWidth} x {finalHeight}
        </p>
      </div>
      <p className="mb-4 text-center text-md sm:w-[38rem]">
        All Fine Art Papers are 100% archival cotton rag without optical
        brightening agents or additives, printed with 12-color pigmented inks.
      </p>
      <p className="mb-4 text-center text-md sm:w-[38rem]">
        Longevity tests estimate lightfastness for 100+ years.
      </p>{" "}
      <p className="mb-4 text-center text-md sm:w-[38rem]">
        {" "}
        More details are on price list or online store.
      </p>
      <div className="border-2 rounded-lg shadow-2xl m-10">
        <table>
          <thead>
            <tr className="border-b">
              <th className="border-r sm:p-2">
                Archival Fine Art Papers (Giclee)
                <br />
                (100% cotton rag unless otherwise noted)
              </th>
              <th className="border-r sm:p-2">Paper Weight</th>
              <th className="border-r sm:p-2">Description</th>

              <th className="border-r sm:p-2">Each</th>
              <th className="border-r sm:p-2">5+ Copies</th>
              <th className="border-r sm:p-2">Actions</th>
              <th className="p-2">Multiplier</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, idx) => {
              const priceEach = calculatePriceEach(
                finalSheetSize,
                data.multiplier
              );
              const priceFiveCopies = roundToTwo(priceEach * 0.9);

              return (
                <tr key={idx}>
                  <td className={`${cellBorder}`}>{data.paperType}</td>
                  <td className={`${cellBorder}`}>{data.paperWeight}</td>
                  <td className={`${cellBorder}`}>{data.description}</td>
                  <td className={`${cellBorder}`}>${priceEach.toFixed(2)}</td>
                  <td className={`${cellBorder}`}>
                    ${priceFiveCopies.toFixed(2)}
                  </td>
                  <td className={`${cellBorder}`}>
                    <span className="flex">
                      <FiEdit2 className={`${iconStyling}`} />
                      <BsTrash className={`${iconStyling}`} />
                      <AiOutlineEye className={`${iconStyling}`} />
                      <AiOutlineEyeInvisible className={`${iconStyling}`} />
                    </span>
                  </td>
                  <td className="border-t p-4 text-center">
                    {data.multiplier}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Home;
