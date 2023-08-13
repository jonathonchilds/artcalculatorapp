"use client";

import { useState } from "react";

const canCalc = () => {
  const [imageWidth, setImageWidth] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);

  const printMultiplier = 16.75;
  const stretchedStandardFramingDepthMultiplier = 1.2;
  const stretchedStandardGalleryWrapMultiplier = 1.34;
  const stretchedDeepGalleryWrapMultiplier = 1.62;
  const handAppliedTexturizingBrushstrokelgultiplier = 15.0;

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
    ((width * height) / 144) * handAppliedTexturizingBrushstrokelgultiplier;

  function roundToTwo(num) {
    const numBeforeFixed = +(Math.round(num + "e+2") + "e-2");
    return numBeforeFixed.toFixed(2);
  }

  const borders = "flex flex-col justify-between m-2 border rounded-xl ";

  return (
    <section className="flex flex-col items-center mt-6 ">
      <h1 className="tableHeading text-center lg:max-w-7xl ">Canvases</h1>
      <p className="px-6 lg:px-auto text-center text-xl max-w-7xl leading-10 my-8">
        Chromata LYVE by Breathing Color - the top choice for fine art
        printmaking. <br /> A 20.5 mil white matte canvas with archival quality,
        this OBA-free giclee canvas delivers exceptional detail, vibrant colors,
        and a high dmax.
      </p>
      <div className="flex flex-col text-center text-sm justify-center items-center mx-10 mb-28 leading-8">
        <p>
          Prices include choice of protective varnish: matte, satin or gloss.
        </p>
        <p>A 10% DISCOUNT is available for 5 or more of same image and size.</p>
        <p>Maximum image width for LYVE is 54” on a 60” roll size.</p>
        <p>
          36” x 48” is the largest stretched canvas that can be shipped via UPS.
        </p>
        <p>
          Standard turnaround is 3-4 days. (Stretching and/or texturizing may
          add additional time.)
        </p>
        <p>RUSH SERVICE AVAILABLE - CALL US TO SCHEDULE!</p>
      </div>

      <section className="flex flex-wrap md:flex-col lg:flex-row justify-center items-center space-y-24 lg:space-y-0 lg:space-x-60 mb-40">
        <div className="flex flex-col justify-evenly items-center h-[325px] w-[325px] shadow-2xl shadow-gray-600 border-2 rounded-2xl border-gray-600">
          <h2 className="">Image</h2>
          <input
            type="number"
            placeholder="Width"
            className="inputFields h-[61.5px]"
            onChange={(e) => {
              setImageWidth(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="Height"
            className="inputFields h-[61.5px]"
            onChange={(e) => {
              setImageHeight(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col justify-evenly items-center h-[325px] w-[325px] shadow-2xl shadow-gray-600 border-2 rounded-2xl border-gray-600">
          <div>
            <h2>Rolled</h2>
          </div>
          <div>
            <span className="text-xl text-center">
              2" Border{" "}
              <div className=" text-purple text-2xl">
                {imageHeight && imageWidth
                  ? `$${roundToTwo(unstretchedTwoInchBorder)}`
                  : "$0.00"}
              </div>
            </span>
          </div>
          <div>
            <span className="text-xl text-center">
              3" Border{" "}
              <div className=" text-purple text-2xl">
                {imageHeight && imageWidth
                  ? `$${roundToTwo(unstretchedThreeInchBorder)}`
                  : "$0.00"}{" "}
              </div>
            </span>
          </div>
        </div>
      </section>
      <section className="flex lg:w-[750px] justify-evenly flex-col shadow-2xl shadow-gray-600 border-2 rounded-2xl w-[350px] p-6 border-gray-600 lg:space-y-6 lg:mt-auto">
        <div className="flex flex-col lg:flex-row mb-6 lg:my-10 justify-evenly">
          <h3 className="hidden lg:inline-block text-center rotate-3 text-purple ">
            Ready To Hang Or Frame!
          </h3>
          <h2 className="text-center">Stretched</h2>

          <h3 className="lg:hidden inline-block text-center">
            Ready To Hang Or Frame!
          </h3>
          <h3 className="lg:hidden inline-block text-center text-lg">
            (Includes Stretcher Bar)
          </h3>
          <h3 className="hidden lg:inline-block text-purple text-center -rotate-3">
            Includes Stretcher Bar
          </h3>
        </div>
        <ul className="space-y-10 text-center">
          <li>
            Standard Framing Depth (3/4"){" "}
            <div className=" pt-4 text-purple">
              {imageHeight && imageWidth
                ? `$${roundToTwo(stretchedStandardFramingDepth)}`
                : "$0.00"}{" "}
            </div>
          </li>
          <li>
            Standard Gallery Wrap (1-1/4"){" "}
            <div className="text-purple pt-4">
              {imageHeight && imageWidth
                ? `$${roundToTwo(stretchedStandardGalleryWrap)}`
                : "$0.00"}
            </div>
          </li>
          <li>
            Deep Gallery Wrap (2"){" "}
            <div className="text-purple pt-4">
              {imageHeight && imageWidth
                ? `$${roundToTwo(stretchedDeepGalleryWrap)}`
                : "$0.00"}
            </div>
          </li>
          <li>
            Add for hand-applied, texturizing brushstrokes. <br /> (3D realistic
            feel of a real painting on canvas){" "}
            <div className="text-purple pt-4">
              {imageHeight && imageWidth
                ? `$${roundToTwo(handAppliedTexturizingBrushstrokes)}`
                : "$0.00"}
            </div>
          </li>
        </ul>
      </section>
    </section>
  );
};
export default canCalc;
