export interface Location {
  lat: number;
  lng: number;
  height: number;
}

export interface LocationState {
  payload: Location[];
  error: string | undefined;
  loading: boolean;
}
