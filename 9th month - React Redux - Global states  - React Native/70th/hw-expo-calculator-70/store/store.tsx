import { create, ExtractState } from "zustand";

type TuseCalc = {
    count: number | null
    expression: string
    setExpression: (expression: string) => void
}

const useCalc = create<TuseCalc>()((set) => ({
    count: null,
    expression: '',
    setExpression: (newExpression: string) => set({expression: newExpression})
}))

export default useCalc