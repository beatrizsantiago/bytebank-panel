import { useSelector } from 'react-redux';

import Item from './components/Item';

const StatementList = () => {
  // @ts-ignore
  const transactions = useSelector((state) => state.transactions.list);

  return (
    <div className="flex flex-col items-center w-full min-h-[calc(100vh-144px)] max-h-[902px] bg-white rounded-lg lg:w-[285px]">
      <p className="w-full text-left sm:text-center font-bold text-lg px-6 mt-6 lg:text-left">
        Extrato
      </p>

      {transactions.map((transaction, idx) => (
        <Item
          key={transaction.id}
          transaction={transaction}
        />
      ))}
    </div>
  );
};

export default StatementList;
