import { useState } from 'react';
import { Input, Select, Button } from '@bytebank/styleguide';
import { useDispatch, useSelector } from 'react-redux';

import { ITransactionData } from '../../../../../feature/transactions/types';
import { currentBalance } from '../../../../../feature/transactions/selectors';
import { editTransaction } from '../../../../../feature/transactions/slice';
import Modal from '../../../../../components/Modal';

type Props = {
  onClose: () => void;
  transaction: ITransactionData;
};

type OptionType = {
  label: string;
  value: 'Credit' | 'Debit';
};

const LABELS:{[key:string]:string} = {
  Credit: 'Depósito',
  Debit: 'Saque',
};

const OPTIONS = Object.keys(LABELS).map((key) => ({ label: LABELS[key], value: key }));

const EditTransactionModal = ({ onClose, transaction }:Props) => {
  const [type, setType] = useState<OptionType | null>({
    label: LABELS[transaction.type],
    value: transaction.type,
  })
  const [value, setValue] = useState(transaction.value.toString());
  const [errors, setErrors] = useState<{ [key:string]: string } | null>(null);

  const balance = useSelector(currentBalance);

  const dispatch = useDispatch();

  const onEditClick = async () => {
    const floatValue = value ? parseFloat(value.replace(',', '.')) : 0;
    const absValue = Math.abs(floatValue);

    if (!type) {
      setErrors({ type: 'Selecione o tipo de transação' });
      return;
    };

    if (absValue > balance && type.value === 'Debit') {
      setErrors({ value: 'Saldo insuficiente' });
      return;
    };

    if (absValue === 0) {
      setErrors({ value: 'Informe um valor' });
      return;
    };

    const formattedValue = type.value === 'Debit' ? -absValue : absValue;

    const data = {
      id: transaction.id,
      type: type.value,
      value: formattedValue,
    }

    dispatch(editTransaction({ ...data }));

    setValue('');
    setType(null);
    setErrors(null);
    onClose();
  };

  return (
    <Modal isVisible onClose={onClose}>
      <div className="w-full flex flex-col items-center z-10 relative">
        <h2 className="font-bold text-center text-lg text-primary-main mb-8">
          Editar transação
        </h2>

        <div className="w-full">
          <div className="mb-6">
            <Select
              placeholder="Selecione o tipo de transação"
              options={OPTIONS}
              selected={type}
              onChange={(opt) => setType(opt)}
            />
            {errors?.type && <p className="text-red-500 text-sm">{errors.type}</p>}
          </div>

          <label className="font-semibold text-primary-main mb-1 text-sm">
            Valor
          </label>
          <div className="mb-8 max-w-[300px]">
            <Input
              placeholder="0,00"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              error={!!errors?.value}
              className="w-full"
              type="number"
            />
            {errors?.value && <p className="text-red-500 text-sm">{errors.value}</p>}
          </div>
        </div>

        <Button
          text="Atualizar"
          className="max-w-[250px]"
          onClick={onEditClick}
        />
      </div>
    </Modal>
  );
};

export default EditTransactionModal;
