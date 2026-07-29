"use client";

import { env } from "@/env";
import {
  AuthType,
  CustomActionsPosition,
  CustomActionTarget,
  init,
} from "@thoughtspot/visual-embed-sdk/react";
import { useEffect, useState } from "react";

export interface TsInitProps {
  children: React.ReactNode;
}

export const TsInit = ({ children }: TsInitProps) => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!isInitialized) {
      init({
        thoughtSpotHost: env.NEXT_PUBLIC_TS_HOST,
        authType: AuthType.None,
        customActions: [
          {
            name: "Show Action Payload",
            id: "ca1",
            position: CustomActionsPosition.MENU,
            target: CustomActionTarget.LIVEBOARD,
          },
          {
            name: "Show Context Action Payload",
            id: "ca2",
            position: CustomActionsPosition.CONTEXTMENU,
            target: CustomActionTarget.VIZ,
          },
        ],
      });
      setIsInitialized(true);
    }
  }, [isInitialized]);

  if (!isInitialized) return null;

  return children;
};
