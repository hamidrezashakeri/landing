import {
  LineChart,
  CartesianGrid,
  XAxis,
  Tooltip,
  Line,
  YAxis,
  AreaChart,
  ResponsiveContainer,
  Label,
} from 'recharts';
const Chart = ({ data }) => {

  return (
    <div className="p-12 xl:mx-80 overflow-hidden">
      <h3 className="mb-8 text-primary text-2xl">
        فراتر از بانک و اوراق بهادار ثابت حرکت کنید
      </h3>
      <div className="flex justify-between flex-col gap-4 items-center mb-8 2xl:flex-row">
        <div className="right flex justify-center gap-8 2xl:gap-1 w-full">
          <button className="btn bg-primary">
            بورس
          </button>
          <button className="btn bg-[#e5b700] ">
            طلا
          </button>
          <button className="btn bg-[#e53535] ">
            ارز
          </button>
          <button className="btn bg-[#05a560]">
            مسکن
          </button>
        </div>
        <div className="left flex gap-2">
          <button className="btn-1">
            1 سال اخیر
          </button>
          <button className="btn-1 bg-primary"> 
            5 سال اخیر
          </button>
          <button className="btn-1">
            10 سال اخیر
          </button>
          <button className="btn-1">
            20 سال اخیر
          </button>
        </div>
      </div>
      <ResponsiveContainer height={400}>
        <LineChart data={data}>
          <YAxis />
          <XAxis dataKey="date" padding={20} tick={{ fontSize: 12}}/>
          <Tooltip />
          <CartesianGrid stroke="#f9f9f9" />
          <Line
            type="monotoneX"
            name="طلا"
            dataKey="gold"
            stroke="#e5b700"
            dot={false}
          />
          <Line
            type="natural"
            name="مسکن"
            dataKey="house"
            stroke="#05a560"
            dot={false}
          />
          <Line
            type="natural"
            name="ارز"
            dataKey="dollar"
            stroke="#e53535"
            dot={false}
          />
          <Line
            type="natural"
            name="بورس"
            dataKey="stock"
            stroke="#133780"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
