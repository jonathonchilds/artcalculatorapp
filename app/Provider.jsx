"use client";

import React, { createContext, useState, useEffect } from "react";

export const AppStateContext = createContext();

export const Provider = ({ children }) => {
  const [borderWidth, setBorderWidth] = useState(0);
  const [borderHeight, setBorderHeight] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);
  const [fineArtPapers, setFineArtPapers] = useState([]);
  const [photoQualityPapers, setPhotoQualityPapers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/data");
      const data = await response.json();
      const fineArtPapers = data.filter(
        (paper) => paper.category === "Fine Art"
      );
      const photoQualityPapers = data.filter(
        (paper) => paper.category === "Photo"
      );
      console.log(fineArtPapers);
      console.log(photoQualityPapers);
      setFineArtPapers(fineArtPapers);
      setPhotoQualityPapers(photoQualityPapers);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const appState = {
    borderWidth,
    setBorderWidth,
    borderHeight,
    setBorderHeight,
    imageWidth,
    setImageWidth,
    imageHeight,
    setImageHeight,
    fineArtPapers,
    photoQualityPapers,
  };

  return (
    <AppStateContext.Provider value={appState}>
      {children}
    </AppStateContext.Provider>
  );
};
