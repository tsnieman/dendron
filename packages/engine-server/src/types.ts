import { DEngineClientV2, DNoteLoc } from "@dendronhq/common-all";

export type ReplaceLinkOpts = { from: DNoteLoc; to: DNoteLoc };
export { DEngineClientV2 };

export type WSMeta = {
  version: string;
  activationTime: number;
};
