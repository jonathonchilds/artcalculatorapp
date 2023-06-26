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
    return +(Math.round(num + "e+2") + "e-2");
  }

  const borders = "border rounded-xl m-2 flex flex-col justify-between";

  const lastParagraphs = "pb-6 text-center font-bold text-lg";

  return (
    <section className="mb-16 w-full flex-center flex-col">
      <h1 className="head_text pt-28 text-center">Canvas Calculator</h1>
      <p className="text-center text-md my-10 max-w-7xl mb-24">
        Chromata LYVE by Breathing Color is the best fine art, archival canvas
        available for printmaking on the market. Chromata LYVE is a 20.5 mil
        white matte canvas. It is an archival giclee canvas free of optical
        brightner additives (OBAs). The fine tooth canvas prints details well
        with an exceptional color gamut and high dmax.
      </p>

      <div className="flex sm:flex-between sm:mx-4 flex-wrap justify-center mb-24 ">
        <div className="text-center border rounded-2xl border-gray-600 shadow-2xl shadow-gray-600 p-12">
          <h2 className="py-4">Image</h2>

          <div className="space-x-3 mt-4">
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
        </div>
      </div>
      <div className="flex justify-between space-x-20 items-center mb-24 ">
        <div className="  border w-auto h-auto rounded-xl justify-center flex flex-col shadow-lg  p-8 ">
          <div className="mb-4">
            <h2 className="text-center mb-1">Print Only</h2>
            <h3 className="text-center">Rolled & Unstretched</h3>
          </div>
          <div className="flex ">
            <div className={`${borders} m-4`}>
              <p className="text-center p-4">With 2" Border</p>
              <p className="pb-6 text-center text-xl">
                {imageHeight && imageWidth
                  ? `$${roundToTwo(unstretchedTwoInchBorder)}`
                  : "$0.00"}
              </p>
            </div>
            <div className={`${borders} m-4`}>
              <p className="text-center p-4">With 3" Border</p>
              <p className="pb-6 text-center text-xl">
                {imageHeight && imageWidth
                  ? `$${roundToTwo(unstretchedThreeInchBorder)}`
                  : "$0.00"}
              </p>
            </div>
          </div>
        </div>
        <div>
          <ul className="space-y-2 list-disc">
            <li>
              Prices include choice of protective varnish: matte, satin or
              gloss.
            </li>
            <li>Prices are subject to change without notice.</li>
            <li>
              A 10% DISCOUNT is available for 5 or more of same image and size.
              See Price List for Bulk Order Options
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
            <li>RUSH SERVICE AVAILABLE. CALL US TO SCHEDULE!</li>
          </ul>
        </div>
      </div>
      <div className="mb-16 sm:mx-4 border w-auto h-auto rounded-xl justify-center flex flex-col shadow-lg  p-2 min-h-max">
        <div className="my-8">
          <h2 className="text-center mb-1">Stretched Options</h2>
          <h3 className="text-center">Ready To Hang Or Frame</h3>
          <h3 className="text-center">Includes Stretcher Bar</h3>
        </div>
        <div className="flex flex-col sm:flex-row">
          <div className={`${borders} m-4`}>
            <p className="text-center p-4 ">Standard Framing Depth</p>
            <p className="text-center p-4 ">3/4"</p>
            <p className="p-2 text-center text-xl">
              {imageHeight && imageWidth
                ? `$${roundToTwo(stretchedStandardFramingDepth)}`
                : "$0.00"}
            </p>
          </div>
          <div className={`${borders} flex flex-col content-between m-4`}>
            <p className="text-center p-4 ">Standard Gallery Wrap</p>
            <p className="text-center p-4 ">1 1/4"</p>
            <p className="p-2 text-center text-xl">
              {imageHeight && imageWidth
                ? `$${roundToTwo(stretchedStandardGalleryWrap)}`
                : "$0.00"}
            </p>
          </div>
          <div className={`${borders} m-4`}>
            <p className="text-center p-4 ">Deep Gallery Wrap</p>
            <p className="text-center p-4 ">2"</p>
            <p className="p-2 text-center text-xl">
              {imageHeight && imageWidth
                ? `$${roundToTwo(stretchedDeepGalleryWrap)}`
                : "$0.00"}
            </p>
          </div>
          <div className={`${borders} m-4 `}>
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
export default canCalc;
