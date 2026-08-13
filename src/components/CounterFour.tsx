
import type { CounterProps } from "../types/CounterProps";

export default function CounterFour({ counterIdProps, increaseCounter, removeCounter}: CounterProps) {
    return(
        <div className="relative flex w-50 flex-col items-center border border-blue-500 rounded-xl bg-black p-8 shadow-md">
            <p className="absolute left-2 top-2 flex mb-4 text-1xl font-bold text-blue-300">Counter#{counterIdProps.number}</p>
            <p className="mb-4 text-3xl font-bold text-white">{counterIdProps.value}</p>
            <button onClick={() => increaseCounter(counterIdProps.id)} 
                disabled={counterIdProps.value >= 3}
                className="rounded-lg bg-blue-900 px-4 py-2 font-medium text-white shadow-sm 
                 hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-gray-400">Increase value</button>
            <button onClick={() => removeCounter(counterIdProps.id)}
                className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center 
                rounded-full bg-red-700 text-sm font-bold text-white hover:bg-red-600">X</button>
        </div>
    );
}