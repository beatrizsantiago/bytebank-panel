import Item from './components/Item';

const StatementList = () => (
  <div className="flex flex-col items-center w-full min-h-[calc(100vh-144px)] max-h-[902px] bg-white rounded-lg lg:w-[285px]">
    <p className="w-full text-left sm:text-center font-bold text-lg px-6 mt-6 lg:text-left">
      Extrato
    </p>

    <Item
      transaction={{
        _id: '1',
        kind: 'DEPOSIT',
        value: 100,
        date: new Date().toISOString(),
      }}
    />
  </div>
);

export default StatementList;
