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

  const borders = "border rounded-xl m-2";

  return (
    <section className="mb-16">
      <h1 className="head_text text-center">Canvas Calculator</h1>
      <p className="sm:my-12 my-4 text-center text-gray-600">
        Chromata LYVE by Breathing Color is the best fine art, archival canvas
        available for printmaking on the market. Chromata LYVE is a 20.5 mil
        white matte canvas. It is an archival giclee canvas free of optical
        brightner additives (OBAs). The fine tooth canvas prints details well
        with an exceptional color gamut and high dmax.
      </p>
      <div className="flex sm:flex-between sm:mx-4 mb-[14px] flex-wrap justify-center ">
        <div className="mb-4 sm:mx-4 w-72 h-auto border rounded-xl p-2 shadow-lg">
          <h2 className="pb-2 text-center font-bold text-lg">
            Enter Image Size
          </h2>
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
      </div>
      <div className="flex sm:flex-between sm:mx-4 mb-[14px] flex-wrap justify-center">
        <div className="mb-10 sm:mx-4 border w-auto h-auto rounded-xl justify-center flex flex-col shadow-lg  p-2 min-h-max">
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
                  ? `${roundToTwo(unstretchedTwoInchBorder)}`
                  : "$0.00"}
              </p>
            </div>
            <div className={`${borders}`}>
              <p className="text-center p-2">Unstretched w/ 3" Border</p>
              <p className="p-2 text-center text-xl">
                {imageHeight && imageWidth
                  ? `${roundToTwo(unstretchedThreeInchBorder)}`
                  : "$0.00"}
              </p>
            </div>
          </div>
        </div>
        <div className="mb-10 sm:mx-4 border w-auto h-auto rounded-xl justify-center flex flex-col shadow-lg  p-2 min-h-max">
          <div>
            <h2 className="text-center font-bold text-lg p-2">
              Stretched Options - ready to hang or frame (includes stretcher
              bar)
            </h2>
          </div>
          <div className="flex">
            <div className={`${borders}`}>
              <p className="text-center p-2">Standard Framing Depth</p>
              <p className="p-2 text-center text-xl">
                {imageHeight && imageWidth
                  ? `${roundToTwo(stretchedStandardFramingDepth)}`
                  : "$0.00"}
              </p>
            </div>
            <div className={`${borders}`}>
              <p className="text-center p-2">Standard Gallery Wrap</p>
              <p className="p-2 text-center text-xl">
                {imageHeight && imageWidth
                  ? `${roundToTwo(stretchedStandardGalleryWrap)}`
                  : "$0.00"}
              </p>
            </div>
            <div className={`${borders}`}>
              <p className="text-center p-2">Deep Gallery Wrap</p>
              <p className="p-2 text-center text-xl">
                {imageHeight && imageWidth
                  ? `${roundToTwo(stretchedDeepGalleryWrap)}`
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
                  ? `${roundToTwo(handAppliedTexturizingBrushstrokes)}`
                  : "$0.00"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="pb-2 text-center font-bold text-lg">
        Prices include choice of protective varnish: matte, satin or gloss.
      </p>
      <p className="pb-2 text-center font-bold text-lg">
        Prices are subject to change without notice.
      </p>
      <p className="pb-2 text-center font-bold text-lg">
        A 10% DISCOUNT is available for 5 or more of same image and size. See
        Price List for Bulk Order Options
      </p>
      <p className="pb-2 text-center font-bold text-lg">
        Maximum image width for LYVE is 54” on 60” roll size.
      </p>
      <p className="pb-2 text-center font-bold text-lg">
        PLEASE NOTE: 36” x 48” is the largest stretched canvas that can be
        shipped via UPS.
      </p>
      <p className="pb-2 text-center font-bold text-lg">
        Standard turnaround is 3-4 days. Stretching and/or texturizing may add
        additional time.
      </p>
      <p className="pb-2 text-center font-bold text-lg">
        RUSH SERVICE AVAILABLE. CALL US TO SCHEDULE. (866) 352-9779
      </p>
    </section>
  );
};
export default canCalc;
