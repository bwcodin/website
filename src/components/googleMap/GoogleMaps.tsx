"use client";

import React, { useEffect, useRef } from "react";
import { GoogleMapsWrapper } from "./GoogleMapsWrapper";
import useMediaQuery from "@/hooks/useMediaQuery";

const DEFAULT_CENTER = { lat: 22.2770074, lng: 114.1756452 };
const DEFAULT_ZOOM = 16;

export const GoogleMaps = ({
  locations,
}: {
  locations: ReadonlyArray<google.maps.LatLngLiteral>;
}) => {
  const isBreakPoint = useMediaQuery(768);
  const isBreakPoint2 = useMediaQuery(480);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      const map = new window.google.maps.Map(ref.current, {
        center: DEFAULT_CENTER,
        zoom: DEFAULT_ZOOM,
      });

      // New Single Marker code
      addSingleMarkers({ locations, map });
    }
  }, [ref, locations]);

  return (
    <div
      ref={ref}
      style={{
        width: isBreakPoint2 ? "300px" : isBreakPoint ? "375px" : "450px",
        height: isBreakPoint2 ? "200px" : isBreakPoint ? "250px" : "450px",
        borderRadius: "25px",
      }}
    />
  );
};

export const MapComponent = ({
  locations,
}: {
  locations: Array<{ lat: number; lng: number }>;
}) => (
  <GoogleMapsWrapper>
    <GoogleMaps locations={locations} />
  </GoogleMapsWrapper>
);

export const addSingleMarkers = ({
  locations,
  map,
}: {
  locations: ReadonlyArray<google.maps.LatLngLiteral>;
  map: google.maps.Map | null | undefined;
}) =>
  locations.map(
    (position) =>
      new google.maps.Marker({
        position,
        map,
      })
  );
