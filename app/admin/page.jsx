// Make admin icons actionable:
//// add paper (with confirmation & cancel)
//// edit paper (with confirmation & cancel)
//// delete paper (with confirmation & cancel)

// Create API endpoint for Create paper
// Create API endpoint for Update paper
// Create API endpoint for Delete paper

// Add available y/n to paper model & update existing data

// Add styling logic to admin page for available y/n - green for active, red for inactive
// Add conditional logic to client-facing pages to only show available papers (Change query params in API for GET papers or handle on client-side render)

// Add components on admin page to update/delete:
//// printMultiplier
//// stretchedStandardFramingDepthMultiplier
//// stretchedStandardGalleryWrapMultiplier
//// stretchedDeepGalleryWrapMultiplier
//// handAppliedTexturizingBrushstrokesMultiplier

// Create new table in database to store canvas multipliers

// Create API endpoint to GET canvas multipliers
// Create API endpoint to POST canvas multipliers
// Create API endpoint to PUT canvas multipliers
// Create API endpoint to DELETE canvas multipliers

"use client";

import { FiEdit2 } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useEffect, useState } from "react";

const Admin = () => {
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
  // Fine Art Paper Calculator
  const finalWidth = +imageWidth + +borderWidth * 2;
  const finalHeight = +imageHeight + +borderHeight * 2;
  const finalSheetSize = Math.ceil(finalWidth) * Math.ceil(finalHeight);
  // Canvas Calculator
  const printMultiplier = 16.75;
  const stretchedStandardFramingDepthMultiplier = 1.2;
  const stretchedStandardGalleryWrapMultiplier = 1.34;
  const stretchedDeepGalleryWrapMultiplier = 1.62;
  const handAppliedTexturizingBrushstrokesMultiplier = 15.0;
  const width = parseFloat(imageWidth);
  const height = parseFloat(imageHeight);
  const unstretchedTwoInchBorder =
    (((width + 4) * (height + 4)) / 144) * printMultiplier;
  const unstretchedThreeInchBorder =
    (((width + 6) * (height + 6)) / 144) * printMultiplier;
  const stretchedStandardFramingDepth =
    unstretchedTwoInchBorder +
    (width + height) * stretchedStandardFramingDepthMultiplier;
  const stretchedStandardGalleryWrap =
    unstretchedTwoInchBorder +
    (width + height) * stretchedStandardGalleryWrapMultiplier;
  const stretchedDeepGalleryWrap =
    unstretchedThreeInchBorder +
    (width + height) * stretchedDeepGalleryWrapMultiplier;
  const handAppliedTexturizingBrushstrokes =
    ((width * height) / 144) * handAppliedTexturizingBrushstrokesMultiplier;

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
  const tableHeadings = "border-r border-t p-6";
  const borders = "border rounded-xl m-2";

  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center mb-16">Admin Page</h1>
      <div className="flex sm:flex-between sm:mx-4 mb-[14px] flex-wrap justify-center ">
        {/* image size container */}
        <div className="mb-4 sm:mx-4 w-72 h-auto border rounded-xl p-2 shadow-xl">
          <h2 className="pb-2 text-center font-bold text-lg">Image Size</h2>

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
          <h2 className="pb-2 text-center font-bold text-lg">Border Size</h2>

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
      <div className="mb-10 sm:mx-4 border w-72 h-auto rounded-xl justify-center flex flex-col shadow-xl  p-2 min-h-max">
        <h2 className="text-center font-bold text-xl p-2">Final Sheet Size</h2>
        <p className="p-2 text-center text-lg">
          {finalWidth} x {finalHeight}
        </p>
      </div>

      <div className="sm:border sm:rounded-lg sm:shadow-2xl sm:m-10 sm:inline hidden ">
        <span>
          <h1 className="text-center font-bold text-2xl pt-4 pb-6">
            Archival Fine Art Papers (Giclee)
          </h1>
        </span>
        <table>
          <thead>
            <tr className="border-b">
              <th className={`${tableHeadings}`}>
                Paper Type
                <br />
                (100% cotton rag unless otherwise noted)
              </th>
              <th className={`${tableHeadings}`}>Paper Weight</th>
              <th className={`${tableHeadings}`}>Description</th>
              <th className={`${tableHeadings}`}>Each</th>
              <th className={`${tableHeadings}`}>5+ Copies</th>
              <th className={`${tableHeadings}`}>Actions</th>
              <th className={`${tableHeadings}`}>Multiplier</th>
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
                    <td className={`${cellBorder}`}>{paper.paper_type}</td>
                    <td className={`${cellBorder}`}>{paper.paper_weight}</td>
                    <td className={`${cellBorder}`}>
                      {paper.paper_description}
                    </td>
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
                      {paper.multiplier}
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
              <div className="my-6">
                <div className="flex justify-between">
                  <FiEdit2 className={`${iconStyling}`} />
                  <BsTrash className={`${iconStyling}`} />
                  <AiOutlineEye className={`${iconStyling}`} />
                  <AiOutlineEyeInvisible className={`${iconStyling}`} />
                </div>
                <p className="text-center mt-6">
                  Multiplier: {paper.multiplier}
                </p>{" "}
              </div>
            </div>
          );
        })}
      </div>
      <div className="sm:border sm:rounded-lg sm:shadow-2xl sm:m-10 sm:inline hidden ">
        <span>
          <h1 className="text-center font-bold text-2xl pt-4 pb-6">
            Photo Quality / Display Media
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
              <th className={`${tableHeadings}`}>Actions</th>
              <th className={`${tableHeadings}`}>Multiplier</th>
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
                    <td className={`${cellBorder}`}>
                      <span className="flex">
                        <FiEdit2 className={`${iconStyling}`} />
                        <BsTrash className={`${iconStyling}`} />
                        <AiOutlineEye className={`${iconStyling}`} />
                        <AiOutlineEyeInvisible className={`${iconStyling}`} />
                      </span>
                    </td>
                    <td className="border-t p-4 text-center">
                      {paper.multiplier}
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
              <div className="my-6">
                <div className="flex justify-between">
                  <FiEdit2 className={`${iconStyling}`} />
                  <BsTrash className={`${iconStyling}`} />
                  <AiOutlineEye className={`${iconStyling}`} />
                  <AiOutlineEyeInvisible className={`${iconStyling}`} />
                </div>
                <p className="text-center mt-6">
                  Multiplier: {paper.multiplier}
                </p>{" "}
              </div>
            </div>
          );
        })}
      </div>
      <div className="mb-10 sm:mx-4 border w-auto h-auto rounded-xl justify-center flex flex-col shadow-lg  p-2 ">
        <div>
          <h2 className="text-center font-bold text-lg p-2">
            Print Only (Rolled)
          </h2>
        </div>
        <div className="flex ">
          <div className={`${borders}`}>
            <p className="text-center p-2">Unstretched w/ 2" Border</p>
            <p className="p-2 text-center text-xl">
              {imageHeight && imageWidth
                ? `$${roundToTwo(unstretchedTwoInchBorder)}`
                : "$0.00"}
            </p>
          </div>
          <div className={`${borders}`}>
            <p className="text-center p-2">Unstretched w/ 3" Border</p>
            <p className="p-2 text-center text-xl">
              {imageHeight && imageWidth
                ? `$${roundToTwo(unstretchedThreeInchBorder)}`
                : "$0.00"}
            </p>
          </div>
        </div>
      </div>
      <div className="mb-10 sm:mx-4 border w-auto h-auto rounded-xl justify-center flex flex-col shadow-lg  p-2 min-h-max">
        <div>
          <h2 className="text-center font-bold text-lg p-2">
            Stretched Options - Ready To Hang Or Frame (includes stretcher bar)
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row">
          <div className={`${borders}`}>
            <p className="text-center p-2">Standard Framing Depth</p>
            <p className="p-2 text-center text-xl">
              {imageHeight && imageWidth
                ? `$${roundToTwo(stretchedStandardFramingDepth)}`
                : "$0.00"}
            </p>
          </div>
          <div className={`${borders}`}>
            <p className="text-center p-2">Standard Gallery Wrap</p>
            <p className="p-2 text-center text-xl">
              {imageHeight && imageWidth
                ? `$${roundToTwo(stretchedStandardGalleryWrap)}`
                : "$0.00"}
            </p>
          </div>
          <div className={`${borders}`}>
            <p className="text-center p-2">Deep Gallery Wrap</p>
            <p className="p-2 text-center text-xl">
              {imageHeight && imageWidth
                ? `$${roundToTwo(stretchedDeepGalleryWrap)}`
                : "$0.00"}
            </p>
          </div>
          <div className={`${borders}`}>
            <p className="text-center p-2">
              Add for hand-applied, texturizing brushstrokes. <br /> (3D
              realistic feel of a real painting on canvas)
            </p>
            <p className="p-2 text-center text-xl">
              {imageHeight && imageWidth
                ? `$${roundToTwo(handAppliedTexturizingBrushstrokes)}`
                : "$0.00"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;
