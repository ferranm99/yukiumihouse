// components/PhotoAlbum.tsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import LoadingSkeleton from "./loading-skeleton";

type Photo = {
  src: string;
  width: number;
  height: number;
  alt?: string;
};

type PhotoAlbumProps = {
  photos: Photo[];
  handlePhotoClick: (index: number) => void;
};

const PhotoAlbum: React.FC<PhotoAlbumProps> = ({
  photos,
  handlePhotoClick,
}) => {
  const getRowDimensions = () => {
    const width = window.innerWidth;
    console.log(width);
    return {
      rowWidth: width * (width >= 1536 ? 0.65 : width >= 768 ? 0.8 : 0.9),
      minRowHeight: width >= 1536 ? 200 : width >= 768 ? 155 : 115,
    };
  };

  const [dimensions, setDimensions] = useState({
    rowWidth: 0,
    minRowHeight: 0,
  });

  useEffect(() => {
    const handleResize = () => setDimensions(getRowDimensions());
    setDimensions(getRowDimensions()); // Initialize dimensions on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const createRows = (photos: Photo[], rowWidth: number) => {
    const rows: Photo[][] = [];
    let currentRow: Photo[] = [];
    let currentRowWidth = 0;

    photos.forEach((photo) => {
      const aspectRatio = photo.width / photo.height;
      const calculatedWidth = aspectRatio * dimensions.minRowHeight;

      if (currentRowWidth + calculatedWidth <= rowWidth) {
        currentRow.push(photo);
        currentRowWidth += calculatedWidth;
      } else {
        if (currentRow.length > 0) {
          rows.push(currentRow);
          currentRow = [photo];
          currentRowWidth = calculatedWidth;
        }
      }
    });

    if (currentRow.length > 0) {
      rows.push(currentRow);
    }

    return rows;
  };

  const rows = createRows(photos, dimensions.rowWidth);
  //Exchange the last two rows to make the layout more balanced
  /*   const temp = rows[rows.length - 1];
  rows[rows.length - 1] = rows[rows.length - 2];
  rows[rows.length - 2] = temp; */

  return (
    <div className="w-full">
      {dimensions.rowWidth === 0 && dimensions.minRowHeight === 0 ? (
        <LoadingSkeleton />
      ) : (
        rows.map((row, rowIndex) => {
          const totalAspectRatio = row.reduce(
            (sum, photo) => sum + photo.width / photo.height,
            0
          );
          const rowHeight = dimensions.rowWidth / totalAspectRatio;

          return (
            <div key={rowIndex} className="flex flex-row">
              {row.map((photo, index) => {
                const photoHeight = rowHeight;
                const photoWidth = (photo.width / photo.height) * photoHeight;
                const photoIndex = photos.indexOf(photo);
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
                      fill
                      style={{ objectFit: "cover" }}
                      className="p-[0.1rem]"
                      onClick={() => handlePhotoClick(photoIndex)}
                    />
                  </div>
                );
              })}
            </div>
          );
        })
      )}
    </div>
  );
};

export default PhotoAlbum;
