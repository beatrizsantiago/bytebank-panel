import { useState } from 'react';
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons';
import { formatDate } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { money } from '../../../utils/formats';
import Pixel1Img from '../../../assets/pixels_1.svg';
import AccountBalanceImg from '../../../assets/account_balance.svg';

const Jumbotron = () => {
  const [showBalance, setShowBalance] = useState(false)

  const today = new Date();

  return (
    <div className="w-full h-[655px] bg-primary-main rounded-lg p-8 flex flex-col text-white sm:flex-row sm:h-[400px] relative">
      <img
        src={Pixel1Img}
        alt="pixels"
        width={180}
        height={177}
        className="absolute top-0 xs:left-0 sm:right-0 z-0"
      />

      <img
        src={Pixel1Img}
        alt="pixels"
        width={180}
        height={177}
        className="absolute bottom-0 right-0 rotate-180 sm:left-0 z-0"
      />

      <img
        src={AccountBalanceImg}
        alt="Jumbotron"
        width={280}
        height={220}
        className="absolute left-8 bottom-8 z-0"
      />

      <div className="flex flex-col items-center mb-6 sm:mr-6 sm:mb-0 sm:items-start z-10">
        <h1 className="font-semibold text-xl leading-6">
          Olá, Bia :)
        </h1>
        <p className="text-sm mt-6">
          {formatDate(today, 'EEEE, dd/MM/yyyy', { locale: ptBR })}
        </p>
      </div>

      <div className="flex justify-center sm:flex-1 sm:items-center z-10">
        <div>
          <div className="flex items-center">
            <p className="text-lg font-semibold mr-5">Saldo</p>
            <div className="cursor-pointer" onClick={() => setShowBalance((current) => !current)}>
              {showBalance ? (
                <EyeInvisibleFilled className="text-lg" />
              ) : (
                <EyeFilled className="text-lg" />
              )}
            </div>
          </div>
          <div className="bg-white w-[180px] h-[2px] my-4" />
          <p className="mb-2">
            Conta Corrente
          </p>
          <p className="text-3xl">
            {showBalance ? money(100) : 'R$ ********'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
