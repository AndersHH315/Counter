import type { CounterIdProps } from "./CounterIdProps";

export type CounterProps = {
    counterIdProps: CounterIdProps;
    increaseCounter: (id: number) => void;
    removeCounter: (index: number) => void;
}