import { useState } from 'react';
import { Input, Select, Button } from '@bytebank/styleguide';

import Modal from '../../../../../components/Modal';

type KindType = 'DEPOSIT' | 'CURRENCY_EXCHANGE' | 'DOC_TED' | 'LEASING';

interface ITransactionData {
  _id: string;
  kind: KindType;
  value: number;
  date: string;
};

type Props = {
  onClose: () => void;
  transaction: ITransactionData;
};

type OptionType = {
  label: string;
  value: string;
};

const LABELS:{[key:string]:string} = {
  CURRENCY_EXCHANGE: 'Câmbio de Moeda',
  DOC_TED: 'DOC/TED',
  LEASING: 'Empréstimo e Financiamento',
  DEPOSIT: 'Depósito',
};

const OPTIONS = Object.keys(LABELS).map((key) => ({ label: LABELS[key], value: key }));

const EditTransactionModal = ({ onClose, transaction }:Props) => {
  const [kind, setKind] = useState<OptionType | null>({
    label: LABELS[transaction.kind],
    value: transaction.kind,
  })
  const [value, setValue] = useState(transaction.value.toString());
  const [errors, setErrors] = useState<{ [key:string]: string } | null>(null)

  const onEditClick = async () => {
    const floatValue = value ? parseFloat(value.replace(',', '.')) : 0;

    if (!kind) {
      setErrors({ kind: 'Selecione o tipo de transação' });
      return;
    };

    if (floatValue <= 0) {
      setErrors({ value: 'O valor da transação deve ser maior que zero' });
      return;
    };

    setErrors(null);

    console.log('edit');
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
              selected={kind}
              onChange={(opt) => setKind(opt)}
            />
            {errors?.kind && <p className="text-red-500 text-sm">{errors.kind}</p>}
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
