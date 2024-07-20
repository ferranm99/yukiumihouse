// components/PhotoAlbum.tsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

type Photo = {
  src: string;
  width: number;
  height: number;
  alt?: string;
};

type PhotoAlbumProps = {
  photos: Photo[];
};

const PhotoAlbum: React.FC<PhotoAlbumProps> = ({ photos }) => {
  // Calculate row width based on screen size
  const getRowDimensions = () => {
    const width = window.innerWidth;

    return {
      rowWidth: width * (width >= 1536 ? 0.65 : width >= 768 ? 0.8 : 0.9),
      rowHeight: width >= 1536 ? 200 : width >= 768 ? 155 : 115,
    };
  };

  const [{ rowWidth, rowHeight }, setRowDimensions] = useState(
    getRowDimensions()
  );

  useEffect(() => {
    const handleResize = () => setRowDimensions(getRowDimensions());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const createRows = (photos: Photo[], rowWidth: number) => {
    const rows: Photo[][] = [];
    let currentRow: Photo[] = [];
    let currentRowWidth = 0;

    photos.forEach((photo) => {
      const aspectRatio = photo.width / photo.height;
      const calculatedWidth = aspectRatio * rowHeight; // Default height assumption for calculations

      if (currentRowWidth + calculatedWidth <= rowWidth) {
        currentRow.push(photo);
        currentRowWidth += calculatedWidth;
      } else {
        if (currentRow.length > 0) {
          rows.push(currentRow);
        }
        currentRow = [photo];
        currentRowWidth = calculatedWidth;
      }
    });

    if (currentRow.length > 0) {
      rows.push(currentRow);
    }

    return rows;
  };

  const rows = createRows(photos, rowWidth);

  return (
    <div className="w-[90%] md:w-[80%] 2xl:w-[65%] mx-auto">
      {rows.map((row, rowIndex) => {
        const totalAspectRatio = row.reduce(
          (sum, photo) => sum + photo.width / photo.height,
          0
        );
        const rowHeight = rowWidth / totalAspectRatio;

        return (
          <div key={rowIndex} className="flex flex-row">
            {row.map((photo, index) => {
              const photoHeight = rowHeight;
              const photoWidth = (photo.width / photo.height) * photoHeight;

              return (
                <div
                  key={index}
                  className="relative"
                  style={{
                    height: `${photoHeight}px`,
                    width: `${photoWidth}px`,
                  }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt || `Photo ${index + 1}`}
                    layout="fill"
                    style={{ objectFit: "cover" }}
                    className="p-[0.1rem]"
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default PhotoAlbum;
