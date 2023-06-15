export type MapEntry = {
  name: string;
  abbreviation: string;
  d: string;
  visited: boolean;
};

export interface UpdatedMapEntry extends MapEntry {
  hovered?: boolean;
}
