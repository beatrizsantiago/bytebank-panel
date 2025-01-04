import { useState } from 'react';
import { Input, Select, Button } from '@bytebank/styleguide';
import { useDispatch, useSelector } from 'react-redux';

import { addTransaction } from '../../../feature/transactions/slice';
import Pixel2Img from '../../../assets/pixels_2.svg';
import WomanWithCreditCardImg from '../../../assets/woman_with_credit_card.svg';
import useApi from '../../../services/useApi';

type OptionType = {
  label: string;
  value: string;
};

const TYPE_LABEL = {
  Credit: 'Depósito',
  Debit: 'Saque',
};

const NewTransaction = ():JSX.Element => {
  const [type, setType] = useState<OptionType | null>(null)
  const [value, setValue] = useState('');
  const [errors, setErrors] = useState<{ [key:string]: string } | null>(null)

  // @ts-ignore
  const transactionTypes = useSelector((state) => state.transactionTypes.list);
  // @ts-ignore
  const accountId = useSelector((state) => state.account.id);

  const dispatch = useDispatch();

  const onAddTransactionClick = async () => {
    const floatValue = value ? parseFloat(value.replace(',', '.')) : 0;
    const absValue = Math.abs(floatValue);

    if (!type) {
      setErrors({ type: 'Selecione o tipo de transação' });
      return;
    };

    if (absValue === 0) {
      setErrors({ value: 'Informe um valor' });
      return;
    };

    const formattedValue = type.value === 'Debit' ? -absValue : absValue;

    const response = await useApi({
      url: 'account/transaction',
      options: {
        method: 'POST',
        body: JSON.stringify({
          accountId,
          type: type.value,
          value: formattedValue,
          from: "",
          to: "",
          anexo: "text",
        }),
      },
    });

    const data = await response.json();

    dispatch(addTransaction({ ...data.result }));

    setErrors(null);
  };

  return (
    <div className="p-8 bg-gray-medium rounded-lg mt-6 relative h-[630px] md:h-[478px]">
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

      <img
        src={WomanWithCreditCardImg}
        alt="Mulher com cartão de crédito"
        width={327}
        height={230}
        className="absolute bottom-8 right-8 z-0"
      />

      <div className="w-full flex flex-col items-center z-10 relative md:items-start">
        <h2 className="font-bold text-lg text-primary-light mb-8">
          Nova transação
        </h2>

        <div className="min-w-[280px] md:min-w-[350px] mb-6">
          <Select
            placeholder="Selecione o tipo de transação"
            options={transactionTypes.map((t) => ({ label: TYPE_LABEL[t], value: t }))}
            selected={type}
            onChange={(opt) => setType(opt)}
          />
          {errors?.type && <p className="text-red-500 text-sm">{errors.type}</p>}
        </div>

        <label className="font-semibold text-primary-light mb-1">
          Valor
        </label>
        <div className="max-w-[250px] mb-6">
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

        <Button
          text="Concluir transação"
          className="max-w-[250px]"
          onClick={onAddTransactionClick}
        />
      </div>
    </div>
  );
};

export default NewTransaction;
