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
      <h1 className="head_text  text-center">Canvas Calculator</h1>
      <p className="my-16 text-center text-gray-600">
        Chromata LYVE by Breathing Color is the best fine art, archival canvas
        available for printmaking on the market. Chromata LYVE is a 20.5 mil
        white matte canvas. It is an archival giclee canvas free of optical
        brightner additives (OBAs). The fine tooth canvas prints details well
        with an exceptional color gamut and high dmax.
      </p>
      <div className="flex sm:flex-between sm:mx-4 flex-wrap justify-center mb-24 ">
        <div className=" sm:mx-4 w-80 h-auto border rounded-xl p-8 shadow-lg">
          <h2 className="pb-8 text-center font-bold text-xl">
            Enter Image Size
          </h2>
          <div className="flex flex-col">
            <label className="text-center text-xs text-gray-600 pb-2">
              Image Width
            </label>
            <input
              type="number"
              className="rounded-xl p-4 my-3 mb-5 mt-1 border-2 text-center "
              onChange={(e) => {
                setImageWidth(e.target.value);
              }}
            />
            <label className="text-center text-xs text-gray-600 pb-2 mt-4">
              Image Height
            </label>
            <input
              type="number"
              className="rounded-xl p-4 my-3 mt-1 border-2 text-center"
              onChange={(e) => {
                setImageHeight(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div className="mb-24 sm:mx-4 border w-auto h-auto rounded-xl justify-center flex flex-col shadow-lg  p-8 ">
        <div>
          <h2 className="pb-4 text-center font-bold text-xl">
            Print Only (Rolled)
          </h2>
        </div>
        <div className="flex ">
          <div className={`${borders} m-4`}>
            <p className="text-center p-4">Unstretched w/ 2" Border</p>
            <p className="pb-6 text-center text-xl">
              {imageHeight && imageWidth
                ? `$${roundToTwo(unstretchedTwoInchBorder)}`
                : "$0.00"}
            </p>
          </div>
          <div className={`${borders} m-4`}>
            <p className="text-center p-4">Unstretched w/ 3" Border</p>
            <p className="pb-6 text-center text-xl">
              {imageHeight && imageWidth
                ? `$${roundToTwo(unstretchedThreeInchBorder)}`
                : "$0.00"}
            </p>
          </div>
        </div>
      </div>
      <div className="mb-16 sm:mx-4 border w-auto h-auto rounded-xl justify-center flex flex-col shadow-lg  p-2 min-h-max">
        <div>
          <h2 className="p-6 text-center font-bold text-xl">
            Stretched Options - Ready To Hang Or Frame (includes stretcher bar)
          </h2>
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

      <p className={`${lastParagraphs}`}>
        Prices include choice of protective varnish: matte, satin or gloss.
      </p>
      <p className={`${lastParagraphs}`}>
        Prices are subject to change without notice.
      </p>
      <p className={`${lastParagraphs}`}>
        A 10% DISCOUNT is available for 5 or more of same image and size. See
        Price List for Bulk Order Options
      </p>
      <p className={`${lastParagraphs}`}>
        Maximum image width for LYVE is 54” on 60” roll size.
      </p>
      <p className={`${lastParagraphs}`}>
        PLEASE NOTE: 36” x 48” is the largest stretched canvas that can be
        shipped via UPS.
      </p>
      <p className={`${lastParagraphs}`}>
        Standard turnaround is 3-4 days. Stretching and/or texturizing may add
        additional time.
      </p>
      <p className={`${lastParagraphs}`}>
        RUSH SERVICE AVAILABLE. CALL US TO SCHEDULE. (866) 352-9779
      </p>
    </section>
  );
};
export default canCalc;
