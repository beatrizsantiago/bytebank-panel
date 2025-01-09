import { useState } from 'react';
import { StatementItem } from '@bytebank/styleguide';
import { useDispatch } from 'react-redux';

import { ITransactionData } from '../../../feature/transactions/types';
import { deleteTransaction } from '../../../feature/transactions/slice';
import EditModal from './EditModal';
import toast from '../../../utils/toast';

type Props = {
  transaction: ITransactionData;
}

const Item = ({ transaction }:Props) => {
  const [showEditModal, setShowEditModal] = useState(false);

  const dispatch = useDispatch();

  const onDeleteClick = async () => {
    dispatch(deleteTransaction(transaction.id));
    toast({ type: 'SUCCESS', text: 'Transação excluída com sucesso' });
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
