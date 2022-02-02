interface gif {
  url: string;
  loading: boolean;
  error: boolean;
}

export interface RootState {
  gif: gif;
}

export default gif;
