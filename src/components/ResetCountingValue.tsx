type ResetCountingValueProps = {
    resetValue:() => void;
}

export default function AddCounters({ resetValue }: ResetCountingValueProps) {
    return(
        <div>
           <button onClick={resetValue} className="rounded-lg bg-blue-900 px-5 py-2.5 font-medium text-white shadow hover:bg-blue-700">Reset Value</button>
        </div>
    );
}

