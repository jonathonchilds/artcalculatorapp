"use client";

import { useState } from "react";

const canCalc = () => {
  const [imageWidth, setImageWidth] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);

  const unstretchedTwoInchBorder =
    (((parseFloat(imageWidth) + 4) * (parseFloat(imageHeight) + 4)) / 144) *
    16.75;
  const unstretchedThreeInchBorder =
    (((parseFloat(imageWidth) + 6) * (parseFloat(imageHeight) + 6)) / 144) *
    16.75;

  const stretchedStandardFramingDepth =
    unstretchedTwoInchBorder +
    (parseFloat(imageWidth) + parseFloat(imageHeight)) * 1.2;
  const stretchedStandardGalleryWrap =
    unstretchedTwoInchBorder +
    (parseFloat(imageWidth) + parseFloat(imageHeight)) * 1.34;
  const stretchedDeepGalleryWrap =
    unstretchedThreeInchBorder +
    (parseFloat(imageWidth) + parseFloat(imageHeight)) * 1.62;

  const handAppliedTexturizingBrushstrokes =
    ((parseFloat(imageWidth) + parseFloat(imageHeight)) / 144) * 15;

  function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
  }

  return (
    <section>
      <h1 className="head_text text-center">Canvas Calculator?</h1>
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
            <h2 className="text-center font-bold text-xl p-2">
              Print Only (Rolled)
            </h2>
          </div>
          <div className="flex">
            <div>
              <h3 className="text-center font-bold text-lg p-2">
                Unstretched w/ 2" Border
              </h3>
              <p className="p-2 text-center text-2xl">
                ${roundToTwo(unstretchedTwoInchBorder)}
              </p>
            </div>
            <div>
              <h3 className="text-center font-bold text-lg p-2">
                Unstretched w/ 3" Border
              </h3>
              <p className="p-2 text-center text-2xl">
                ${roundToTwo(unstretchedThreeInchBorder)}
              </p>
            </div>
          </div>
        </div>
        <div className="mb-10 sm:mx-4 border w-auto h-auto rounded-xl justify-center flex flex-col shadow-lg  p-2 min-h-max">
          <div>
            <h2 className="text-center font-bold text-xl p-2">
              Stretched Options (Ready to Hang or Frame - with stretcher bar)
            </h2>
          </div>
          <div className="flex">
            <div>
              <h3 className="text-center font-bold text-lg p-2">
                Standard Framing Depth
              </h3>
              <p className="p-2 text-center text-2xl">
                ${roundToTwo(stretchedStandardFramingDepth)}
              </p>
            </div>
            <div>
              <h3 className="text-center font-bold text-lg p-2">
                Standard Gallery Wrap
              </h3>
              <p className="p-2 text-center text-2xl">
                ${roundToTwo(stretchedStandardGalleryWrap)}
              </p>
            </div>
            <div>
              <h3 className="text-center font-bold text-lg p-2">
                Deep Gallery Wrap
              </h3>
              <p className="p-2 text-center text-2xl">
                ${roundToTwo(stretchedDeepGalleryWrap)}
              </p>
            </div>
            <div>
              <h3 className="text-center font-bold text-lg p-2">
                Add for hand-applied, texturizing brushstrokes. (3D realistic
                feel of a real painting on canvas)
              </h3>
              <p className="p-2 text-center text-2xl">
                ${roundToTwo(stretchedDeepGalleryWrap)}
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
