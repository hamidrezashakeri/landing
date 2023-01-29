import { ChevronDownIcon } from '@heroicons/react/24/outline';
const Accordian = ({question, answer, show, setShow}) => {
  return (
    <div className="accordian mt-8">
      <button className="flex items-center gap-2 border-2 border-primary w-full p-2 rounded-md relative" onClick={()=>setShow(!show)}>
        <p className="number flex justify-center items-center bg-primary text-white w-8 h-8 rounded-md">
          1
        </p>
        <p className="text-secondary text-sm">
          {question}
        </p>
        <ChevronDownIcon className="w-4 h-4 absolute left-2 text-primary" />
      </button>
      <div className={`${show ? 'block': 'hidden'}` }>
        <p className="px-12 py-4">{answer}</p>
      </div>
    </div>
  );
};

export default Accordian;
