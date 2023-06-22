export type MapEntry = {
  name: string;
  abbreviation: string;
  drawing: string;
  visited: boolean;
};

export interface UpdatedMapEntry extends MapEntry {
  hovered?: boolean;
}
