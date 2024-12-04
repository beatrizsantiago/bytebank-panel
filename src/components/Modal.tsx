import React from 'react';
import { CloseOutlined } from '@ant-design/icons';

type Props = {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ isVisible, onClose, children }:Props) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-gray-100 p-6 rounded shadow-lg w-11/12 md:w-7/12 xl:w-5/12">
        <div className="flex justify-end">
          <CloseOutlined className="text-md text-gray-main" onClick={onClose} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
