import { Chart } from "react-google-charts";
import { useSelector } from "react-redux";

import { money } from "../../../utils/formats";
import { RootState } from "../../store";
import { ITransactionData } from "../../../feature/transactions/types";
import Pixel2Img from '../../../assets/pixels_2.svg';

const AnalysisContainer = ():JSX.Element => {
  const transactions = useSelector<RootState, ITransactionData[]>((state) => state.transactions.list);

  const totalDeposit = transactions.filter((transaction) => transaction.type === 'Credit')
    .reduce((acc, transaction) => acc + transaction.value, 0);

  const totalWithdraw = transactions.filter((transaction) => transaction.type === 'Debit')
    .reduce((acc, transaction) => acc + transaction.value, 0);

  return (
    <div className="p-8 bg-gray-medium rounded-lg mt-6 relative h-[450px] md:h-[478px]">
      <img
        src={Pixel2Img}
        alt="Pixels"
        width={180}
        height={177}
        className="absolute top-0 xs:left-0 md:right-0 z-0"
      />

      <img
        src={Pixel2Img}
        alt="Pixels"
        width={180}
        height={177}
        className="absolute bottom-0 right-0 md:left-0 rotate-180 z-0"
      />

      <div className="relative z-10">
        <h2 className="font-bold text-lg mb-2">
          Análise financeira
        </h2>

        <div className="flex justify-between gap-4 my-8">
          <div className="w-full flex flex-col items-center justify-center gap-2 bg-primary-main text-white p-4 rounded-lg">
            <p className="text-sm text-center">Total depositado</p>
            <p className="text-sm md:text-md lg:text-lg">{money(totalDeposit)}</p>
          </div>

          <div className="w-full flex flex-col items-center justify-center gap-2 bg-primary-main text-white p-4 rounded-lg">
            <p className="text-sm text-center">Total sacado</p>
            <p className="text-sm md:text-md lg:text-lg">{money(totalWithdraw)}</p>
          </div>
        </div>

        <div className="w-full rounded-lg overflow-hidden">
          <Chart
            chartType="PieChart"
            data={[
              ['Transactions', 'Value'],
              ['Depósito', totalDeposit],
              ['Saque', Math.abs(totalWithdraw)],
            ]}
            options={{
              pieHole: 0.4,
            }}
            width="100%"
            height="200px"
          />
        </div>
      </div>
    </div>
  );
};

export default AnalysisContainer;
