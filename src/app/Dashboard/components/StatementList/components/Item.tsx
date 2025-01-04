import { useState } from 'react';
import { StatementItem } from '@bytebank/styleguide';

import EditModal from './EditModal';

interface ITransactionData {
  id: string;
  accountId: string;
  type: 'Credit' | 'Debit';
  value: number;
  date: string;
  from: string;
  to: string;
};

type Props = {
  transaction: ITransactionData;
}

const Item = ({ transaction }:Props) => {
  const [showEditModal, setShowEditModal] = useState(false);

  const onDeleteClick = async () => {
    console.log('delete');
  };

  return (
    <div className="w-full p-6 sm:max-w-[500px] lg:w-full">
      <StatementItem
        date={transaction.date}
        value={transaction.value}
        type={transaction.type}
        onDeleteClick={onDeleteClick}
        onEditClick={() => setShowEditModal(true)}
      />

      {showEditModal && (
        <EditModal
          onClose={() => setShowEditModal(false)}
          transaction={transaction}
        />
      )}
    </div>
  );
};

export default Item;
