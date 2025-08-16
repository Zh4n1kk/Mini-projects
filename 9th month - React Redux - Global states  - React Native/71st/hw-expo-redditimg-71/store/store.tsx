import { create } from "zustand";

export interface IRedditPost {
  data: {
    author_fullname: string;
    thumbnail: string;
    title: string
    id: string
  }
}

export interface IStore {
  data: IRedditPost[];
  setData: (newData: IRedditPost[]) => void
  appendData: (newData: IRedditPost[], newAfter: string) => void
  after: string | null
  setAfter: (after: string) => void
}

export const useStoreReddit = create<IStore>((set) => ({
  data: [],
  setData: (newData) => set({ data: newData }),
  after: null,
  appendData: (newData, newAfter) => set((state) => ({
  data: [...state.data, ...newData],
  after: newAfter,
  })),
  setAfter: (after) => set({ after }),
}));