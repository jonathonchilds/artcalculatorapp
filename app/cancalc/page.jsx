"use client";

import { useState } from "react";

const canCalc = () => {
  const [imageWidth, setImageWidth] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);

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

  function roundToTwo(num) {
    const numBeforeFixed = +(Math.round(num + "e+2") + "e-2");
    return numBeforeFixed.toFixed(2);
  }

  const borders = "flex flex-col justify-between m-2 border rounded-xl ";

  return (
    <section className="flex flex-col items-center space-y-10 sm:mt-10 mt-6 ">
      <h1 className="tableHeading text-center sm:max-w-7xl ">
        Canvas Calculator
      </h1>
      <p className="px-4 sm:px-auto text-center text-xl max-w-7xl">
        Chromata LYVE by Breathing Color is the best fine art, archival canvas
        available for printmaking on the market. Chromata LYVE is a 20.5 mil
        white matte canvas. It is an archival giclee canvas free of optical
        brightner additives (OBAs). The fine tooth canvas prints details well
        with an exceptional color gamut and high dmax.
      </p>
      <div className="flex w-full justify-center items-center sm:px-auto px-8">
        <ul className="space-y-2 list-disc">
          <li>
            Prices include choice of protective varnish: matte, satin or gloss.
          </li>
          <li>
            A 10% DISCOUNT is available for 5 or more of same image and size.
            See price list for bulk order options
          </li>
          <li>Maximum image width for LYVE is 54” on 60” roll size.</li>
          <li>
            PLEASE NOTE: 36” x 48” is the largest stretched canvas that can be
            shipped via UPS.
          </li>
          <li>
            Standard turnaround is 3-4 days. Stretching and/or texturizing may
            add additional time.
          </li>
          <li>RUSH SERVICE AVAILABLE - CALL US TO SCHEDULE!</li>
        </ul>
      </div>

      <div className="flex flex-wrap justify-center items-center space-y-24 sm:space-y-0 sm:space-x-20">
        <div className="flex flex-col justify-evenly items-center h-[325px] w-[325px] shadow-2xl shadow-gray-600 border rounded-2xl border-gray-600 ">
          <div className="h-[64px]">
            <h2 className="underline underline-offset-[8px] decoration-purple">
              Image
            </h2>
          </div>
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
        <div className="flex flex-col justify-evenly items-center h-[325px] w-[325px] shadow-2xl shadow-gray-600 border rounded-2xl border-gray-600 text-center">
          <div>
            <h2 className="underline underline-offset-[8px] decoration-purple mb-3">
              Print Only
            </h2>
            <h3 className="text-center">Rolled & Unstretched</h3>
          </div>
          <div>
            <span className="text-xl">
              With 2" Border{" "}
              <div className=" text-purple text-2xl">
                {imageHeight && imageWidth
                  ? `$${roundToTwo(unstretchedTwoInchBorder)}`
                  : "$0.00"}
              </div>
            </span>
          </div>
          <div>
            <span className="text-xl">
              With 3" Border{" "}
              <div className=" text-purple text-2xl">
                {imageHeight && imageWidth
                  ? `$${roundToTwo(unstretchedThreeInchBorder)}`
                  : "$0.00"}{" "}
              </div>
            </span>
          </div>
        </div>
      </div>
      <div className="flex sm:w-[750px] justify-evenly flex-col shadow-2xl shadow-gray-600 border rounded-2xl w-[350px] p-6 border-gray-600 sm:p-12 sm:space-y-6 sm:mt-auto">
        <div className="flex flex-col sm:flex-row mb-6 sm:mb-auto sm:space-y-0">
          <h3 className="hidden sm:inline-block text-center rotate-3">
            Ready To Hang Or Frame!
          </h3>
          <h2 className="underline underline-offset-[8px] decoration-purple mb-3 text-center leading-10">
            Stretched Options
          </h2>
          <h3 className="sm:hidden inline-block text-center underline decoration-purple underline-offset-[5px] ">
            Includes Stretcher Bar
          </h3>
          <h3 className="sm:hidden inline-block text-center">
            Ready To Hang Or Frame!
          </h3>
          <h3 className="hidden sm:inline-block text-center underline decoration-purple underline-offset-[5px] -rotate-3">
            Includes Stretcher Bar
          </h3>
        </div>
        <ul className="space-y-5 text-xl text-center">
          <li>
            Standard Framing Depth (3/4"){" "}
            <div className=" text-purple text-2xl">
              {imageHeight && imageWidth
                ? `$${roundToTwo(stretchedStandardFramingDepth)}`
                : "$0.00"}{" "}
            </div>
          </li>
          <li>
            Standard Gallery Wrap (1-1/4"){" "}
            <div className="text-purple text-2xl">
              {imageHeight && imageWidth
                ? `$${roundToTwo(stretchedStandardGalleryWrap)}`
                : "$0.00"}
            </div>
          </li>
          <li>
            Deep Gallery Wrap (2"){" "}
            <div className="text-purple text-2xl">
              {imageHeight && imageWidth
                ? `$${roundToTwo(stretchedDeepGalleryWrap)}`
                : "$0.00"}
            </div>
          </li>
          <li>
            Add for hand-applied, texturizing brushstrokes. <br /> (3D realistic
            feel of a real painting on canvas){" "}
            <div className="text-purple text-2xl">
              {imageHeight && imageWidth
                ? `$${roundToTwo(handAppliedTexturizingBrushstrokes)}`
                : "$0.00"}
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default canCalc;
