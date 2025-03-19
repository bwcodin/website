import React from "react";
import { Wrapper } from "@googlemaps/react-wrapper";

export const GoogleMapsWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return <div>Oops! Cannot display the map: We are located in Wanchai, opposite the Caltex and next to McDonalds</div>;
  }

  return <Wrapper apiKey={apiKey}>{children}</Wrapper>;
};
