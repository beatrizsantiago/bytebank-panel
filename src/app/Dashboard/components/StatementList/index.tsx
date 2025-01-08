import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  CloseOutlined, FilterFilled, LeftOutlined,
  RightOutlined, SearchOutlined,
} from '@ant-design/icons';

import { ITransactionData } from '../../../../feature/transactions/types';
import { RootState } from '../../../store';
import Item from './components/Item';
import TYPE_LABELS from '../../../../utils/typeLabels';

const StatementList = () => {
  const transactions = useSelector<RootState, ITransactionData[]>((state) => state.transactions.list);
  
  const [transactionsList, setTransactionsList] = useState<ITransactionData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const [searchTimer, setSearchTimer] = useState<NodeJS.Timeout | null>(null);

  console.log(transactions.length);

  console.log(new Date(transactionsList[0]?.date)?.getMonth());

  // get the integer part of the division and add 1 if there is a remainder
  const numberOfPages = Math.trunc(transactionsList.length / 5) + (((transactionsList.length / 5) % 1) > 0 ? 1 : 0);

  const disableNextButton = currentPage === numberOfPages;
  const disablePreviousButton = currentPage === 1;

  const updateSearchValue = (value) => {
    if (value !== searchValue) {
      setSearchValue(value);
      clearTimeout(searchTimer as unknown as number);
      setSearchTimer(setTimeout(() => {
        setTransactionsList(current => current.filter((transaction) => transaction.value.toString().includes(value)));
        setCurrentPage(1);
      }, 1000));
    }
    if (!value) {
      setTransactionsList([...transactions].reverse());
      setCurrentPage(1);
    }
  };

  useEffect(() => {
    setTransactionsList([...transactions].reverse());
  }, [transactions])

  return (
    <div className="flex flex-col items-center w-full min-h-[calc(100vh-144px)] max-h-[902px] bg-white rounded-lg lg:w-[285px] overflow-hidden">
      <div className="w-full flex items-center justify-between px-6 mt-6">
        <p className="w-full text-left sm:text-center font-bold text-lg lg:text-left">
          Extrato
        </p>
        <button className="text-primary-main">
          <FilterFilled />
        </button>
      </div>

      <div className="w-full py-2 px-6 mt-2">
        <div className="w-full h-[38px] pl-3 py-2 flex items-center justify-between border border-primary-main rounded-md text-primary-main">
          <input
            className="w-[85%] outline-none ring-0 text-sm"
            placeholder="Pesquisar valor"
            type="number"
            value={searchValue || ''}
            onChange={(e) => updateSearchValue(e.target.value)}
          />
          {searchValue ? (
            <button>
              <CloseOutlined className="mx-2" />
            </button>
          ) : (
            <SearchOutlined className="mx-2" />
          )}
        </div>
      </div>

      {transactionsList.slice((currentPage * 5 - 5), currentPage * 5).map((transaction) => (
        <Item
          key={transaction.id}
          transaction={transaction}
        />
      ))}

      <div className="flex justify-center w-full mt-6 text-primary-main m-2">
        <button
          className={`min-w-8 h-8 rounded-md flex items-center justify-center ${disablePreviousButton ? 'text-gray-light' : 'hover:bg-primary-light'}`}
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={disablePreviousButton}
        >
          <LeftOutlined />
        </button>
        {Array.from({ length: numberOfPages }, (_, i) => (
          <button
            key={i}
            className={`min-w-8 h-8 rounded-md flex items-center justify-center hover:bg-primary-light ${currentPage === i + 1 ? 'bg-primary-light' : ''}`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button
          className={`min-w-8 h-8 rounded-md flex items-center justify-center ${disableNextButton ? 'text-gray-light' : 'hover:bg-primary-light'}`}
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={disableNextButton}
        >
          <RightOutlined />
        </button>
      </div>
    </div>
  );
};

export default StatementList;
