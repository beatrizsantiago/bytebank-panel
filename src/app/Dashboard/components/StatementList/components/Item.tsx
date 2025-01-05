import { useState } from 'react';
import { StatementItem } from '@bytebank/styleguide';

import { ITransactionData } from '../../../../../feature/transactions/types';
import EditModal from './EditModal';

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
