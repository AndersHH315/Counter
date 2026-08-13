import { useEffect, useState } from 'react'
import CounterOne from './components/CounterOne.js'
import CounterThree from './components/CounterThree.js'
import CounterTwo from './components/CounterTwo.js'
import CounterFour from './components/CounterFour.js'
import NewCounters from './components/NewCounters.js'
import ResetCountingValue from './components/ResetCountingValue.js'
import type { CounterIdProps } from './types/CounterIdProps.js'

function App() {
  /*Array for each counter*/
  const [counters, setCounters] = useState<CounterIdProps[]>([
    {id: 1, number: 1, value: 0},
    {id: 2, number: 2, value: 0},
    {id: 3, number: 3, value: 0},
    {id: 4, number: 4, value: 0}
  ]);
 
  /*Showing the Sum from all buttons and the totalvalue*/
  const [sumFromAll, setSumFromAll] = useState(0);
  const [totalValue, setTotalValue] = useState(0);
  const [checkNumber, setCheckNumber] = useState(4);

  /*Creates a new counter*/
  const AddCounter = () => {
    const newNumber = checkNumber + 1;

    setCounters(prev => [
        ...prev,
        {
          id: Date.now(),
          number: checkNumber + 1,
          value: 0,
        }
    ]);
    setCheckNumber(newNumber);
  };

  /*Removes a counter*/
  const RemoveCounter = (id: number) => {
    setCounters(prev => prev.filter(counter => counter.id !== id));
  };

  /*Resets the sum, total and the value on each counter*/
  const resetValue = () => {
    setSumFromAll(0);
    setTotalValue(0);

    setCounters(prev => 
      prev.map(counter => ({
        ...counter,
        value: 0
      }))
    );
  };

  /*Increases the value on a counter that increases the value on sum,
   also checks if the current counter has a value thats less than 3*/
const IncreaseValueCounter = (id: number) => {
  setCounters(prev => {
    const counter = prev.find(counter => counter.id === id);

    if (!counter || counter.value >= 3) {
      return prev;
    }

    return prev.map(counter =>
      counter.id === id
        ? {
            ...counter,
            value: counter.value + 1
          }
        : counter
    );
  });

  setSumFromAll(prev => prev + 1);
};
    

/*useEffect for applying sum to total value when the sum from all counters equal 10,
 and also preventing the action to happen twice*/
  useEffect(() => {
    if (sumFromAll === 10) {
      setTotalValue(prev => prev + 10);
      setSumFromAll(0);

      setCounters(prev => prev.map(counter => ({
        ...counter,
        value: 0
      }))
    );
  }
},[sumFromAll]);

  return (
    <>
    <main className="min-h-screen bg-gray-900 flex flex-col items-center p-8">
      <div className="flex flex-col items-center p-22 bg-black">
        <div className="mb-8 flex w-64 flex-col overflow-hidden rounded-xl bg-black text-center shadow-md">
          <p className="text-3xl font-bold text-blue-600">Current amount</p>
          <h2 className="text-4xl font-medium text-white">{sumFromAll}</h2>
          <div className="h-4 w-full overflow-hidden rounded-full bg-gray-700">
          <div
            className="h-full rounded-full bg-blue-600 transition-all duration-300"
            style={{ width: `${(sumFromAll / 10) * 100}%` }}
          />
        </div>
        <div className="border-t border-gray-700 p-6">
          <p className="text-3xl font-bold text-blue-600">Collector</p>
          <h1 className="text-4xl font-medium text-white">{totalValue}</h1>
        </div>
      </div>
        <div className="mb-8 flex gap-4">
          <button onClick={AddCounter} className="rounded-lg bg-blue-900 px-5 py-2.5 font-medium text-white shadow hover:bg-blue-700">Add Counter</button>
          <ResetCountingValue resetValue={resetValue}/>
        </div>
          <div className="grid grid-cols-2 gap-6">
      {counters.find(counter => counter.id === 1) && (
      <CounterOne 
        counterIdProps={counters.find(counter => counter.id === 1)!} 
        increaseCounter={IncreaseValueCounter}
        removeCounter={RemoveCounter}/>
      )}

    {counters.find(counter => counter.id === 2) && (
      <CounterTwo 
        counterIdProps={counters.find(counter => counter.id === 2)!} 
        increaseCounter={IncreaseValueCounter} 
        removeCounter={RemoveCounter}/>
      )}

    {counters.find(counter => counter.id === 3) && (
      <CounterThree 
        counterIdProps={counters.find(counter => counter.id === 3)!} 
        increaseCounter={IncreaseValueCounter}
        removeCounter={RemoveCounter}/>
      )}

    {counters.find(counter => counter.id === 4) && (
      <CounterFour 
        counterIdProps={counters.find(counter => counter.id === 4)!} 
        increaseCounter={IncreaseValueCounter} 
        removeCounter={RemoveCounter}/>
      )}

    {counters
      .filter(counter => counter.id > 4)
      .map(counter => (
        <NewCounters key={counter.id} counterIdProps={counter} increaseCounter={IncreaseValueCounter} removeCounter={RemoveCounter}/>
      ))}
          </div>

      </div>
    </main>
    </>
  )
}

export default App
