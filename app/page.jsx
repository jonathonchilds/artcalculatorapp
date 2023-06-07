"use client";

import { FiEdit2 } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";

import data from "../data.json";

const Home = () => {
  const [imageWidth, setImageWidth] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);
  const [borderWidth, setBorderWidth] = useState(0);
  const [borderHeight, setBorderHeight] = useState(0);

  const cellBorder = "border-r border-t p-4 text-center";
  const iconStyling = "text-2xl mx-1";

  const multiplier = 20.5;
  const finalWidth = Math.ceil(imageWidth) + Math.ceil(borderWidth) * 2;
  const finalHeight = Math.ceil(imageHeight) + Math.ceil(borderHeight) * 2;
  const finalSheetSize = finalWidth * finalHeight;
  const priceEachPiece = roundToTwo((finalSheetSize / 144) * multiplier);
  const priceFiveCopies = roundToTwo(priceEachPiece * 0.9);

  function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
  }

  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">Print Cost Calculator</h1>
      <p className="my-12 text-center text-gray-600">
        Use this calculator for non-standard sizes and/or to compare different
        paper selections.
      </p>

      <div className="flex sm:flex-between sm:mx-4 mb-[14px] flex-wrap justify-center ">
        {/* image size container */}
        <div className="mb-4 sm:mx-4 w-72 h-auto border rounded-xl p-2 shadow-lg">
          <h2 className="pb-2 text-center font-bold text-lg">
            Enter Image Size
          </h2>
          <p className="pb-4 text-center text-gray-600">
            (Sheet sizes will be rounded up to the next whole number)
          </p>
          <div className="flex flex-col">
            <input
              type="number"
              placeholder="Image Width"
              className="rounded-xl p-4 m-2 text-center "
              onChange={(e) => {
                setImageWidth(e.target.value);
              }}
            />
            <input
              type="number"
              placeholder="Image Height"
              className="rounded-xl p-4 m-2 text-center"
              onChange={(e) => {
                setImageHeight(e.target.value);
              }}
            />
          </div>
        </div>
        {/* border container */}
        <div className="mb-4 sm:mx-4 border w-72 h-auto rounded-xl p-2 min-h-max shadow-lg">
          <h2 className="pb-2 text-center font-bold text-lg">
            Enter Border Size
          </h2>
          <p className="pb-4 h-[64px] text-center text-gray-600">(Per Side)</p>
          <div className="flex flex-col">
            <input
              type="number"
              placeholder="Border Width"
              className="rounded-xl p-4 m-2 text-center "
              onChange={(e) => {
                setBorderWidth(e.target.value);
              }}
            />
            <input
              type="number"
              placeholder="Border Height"
              className="rounded-xl p-4 m-2 text-center"
              onChange={(e) => {
                setBorderHeight(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div className="mb-10 sm:mx-4 border w-72 h-auto rounded-xl justify-center flex flex-col shadow-lg  p-2 min-h-max">
        <h2 className="text-center font-bold text-xl p-2">Final Sheet Size</h2>
        <p className="p-2 text-center text-2xl">
          {finalWidth} x {finalHeight}{" "}
        </p>
      </div>
      <p className="mb-4 text-center text-sm sm:w-[38rem] text-gray-600">
        All Fine Art Papers are 100% archival cotton rag without optical
        brightening agents or additives, printed with 12-color pigmented inks.
        Longevity tests estimate lightfastness for 100+ years. More details are
        on price list or online store.
      </p>
      <div className="border rounded-lg shadow-xl m-10">
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
              return (
                <tr key={idx}>
                  <td className={`${cellBorder}`}>{data.paperType}</td>
                  <td className={`${cellBorder} text-gray-600`}>
                    {data.paperWeight}
                  </td>
                  <td className={`${cellBorder}`}>{data.description}</td>
                  <td className={`${cellBorder}`}>${data.priceEach}</td>
                  <td className={`${cellBorder}`}>${data.fiveCopies}</td>
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
