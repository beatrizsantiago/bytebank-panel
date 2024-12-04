import { useState } from 'react';
import { StatementItem } from '@bytebank/styleguide';

import EditModal from './EditModal';

type KindType = 'DEPOSIT' | 'CURRENCY_EXCHANGE' | 'DOC_TED' | 'LEASING';

interface ITransactionData {
  _id: string;
  kind: KindType;
  value: number;
  date: string;
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
        kind={transaction.kind}
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
