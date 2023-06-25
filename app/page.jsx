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
  const tableHeadings = "border-r border-t p-6 text-3xl";

  return (
    <section className="flex-center flex-col">
      <h1 className="head_text">Print Cost Calculator</h1>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center sm:space-x-24 sm:mt-32 sm:mb-32">
        <div className="text-center">
          <h2 className="">Image</h2>
          <p className="text-sm pt-1">Sheet sizes will be rounded up</p>
          <div className="space-x-2 mt-4">
            <input
              type="number"
              placeholder="Width"
              className="inputFields"
              onChange={(e) => {
                setImageWidth(e.target.value);
              }}
            />
            <input
              type="number"
              placeholder="Height"
              className="inputFields"
              onChange={(e) => {
                setImageHeight(e.target.value);
              }}
            />
          </div>
          <h2 className="pt-20">Border</h2>
          <p className="text-sm pt-1">Per side</p>
          <div className="space-x-2 mt-4">
            <input
              type="number"
              inputMode="numeric"
              placeholder="Width"
              className="inputFields"
              onChange={(e) => {
                setBorderWidth(e.target.valueAsNumber);
              }}
            />
            <input
              type="number"
              inputMode="numeric"
              placeholder="Height"
              className="inputFields"
              onChange={(e) => {
                setBorderHeight(e.target.valueAsNumber);
              }}
            />
          </div>
        </div>
        <div>
          <h2>
            <span className="text-decoration underline decoration-purple underline-offset-8">
              Final Sheet Size
            </span>
            : {finalWidth} x {finalHeight}
          </h2>
        </div>
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
