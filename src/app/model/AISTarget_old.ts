export interface AIStarget {
  mmsi: number;
  typeCode: number;
  type: string;
  lat: number;
  lon: number;
  cog: number;
  sog: number;
  trueHeading: number;
  rot: number;
  navStateCode: number;
  navState: string;
  msgTime: number;
  pchannelId: number;
  channel: string;
  imo: number;
  callSign: string;
  name: string;
  length: number;
  width: number;
  draught: number;
  country: string;
  destination: string;
  eta: number;
  typeDetail: string;
}
