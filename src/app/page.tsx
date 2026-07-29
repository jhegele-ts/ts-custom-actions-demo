"use client";

import { env } from "@/env";
import { Box, Flex } from "@chakra-ui/react";
import {
  EmbedEvent,
  LiveboardEmbed,
  useEmbedRef,
} from "@thoughtspot/visual-embed-sdk/react";
import { useEffect, useState } from "react";
import { JsonView } from "react-json-view-lite";
import "react-json-view-lite/dist/index.css";

const PageHome = () => {
  const embedRef = useEmbedRef<typeof LiveboardEmbed>();
  const [json, setJson] = useState<unknown>(null);

  useEffect(() => {
    if (embedRef.current) {
      embedRef.current.on(EmbedEvent.CustomAction, (payload) => {
        setJson(payload.data);
      });
    }
  }, [embedRef]);

  return (
    <Flex w={"full"} h={"full"}>
      <Flex flex={1} h={"full"} w={"full"}>
        <LiveboardEmbed
          ref={embedRef}
          style={{ width: "100%" }}
          liveboardId={env.NEXT_PUBLIC_TS_LIVEBOARD_ID}
          isLiveboardMasterpiecesEnabled={true}
        />
      </Flex>
      <Flex w={"600px"} h={"full"} overflowY={"hidden"}>
        <Box overflowY={"auto"}>
          {json !== null && <JsonView data={json as object} />}
        </Box>
      </Flex>
    </Flex>
  );
};

export default PageHome;
