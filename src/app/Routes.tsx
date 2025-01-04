import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import useApi from "../services/useApi";
import Dashboard from "./Dashboard";
import Profile from "./Profile";

import { setTransactionsList } from '../feature/transactions/slice';
import { setAccount } from '../feature/account/slice';
import toast from "../utils/toast";

import "../styles/global.css";

const router = createBrowserRouter([
  {
    path: "/painel",
    element: <Dashboard />,
  },
  {
    path: "/painel/perfil",
    element: <Profile />,
  },
]);

const Routes = (): JSX.Element => {
  const dispatch = useDispatch();

  const getAccount = async () => {
    const response = await useApi({
      url: 'account',
      options: {
        method: 'GET',
      },
    });

    const data = await response.json();
    
    if (data?.result) {
      const account = data?.result.account?.[0];
      dispatch(setAccount({
        id: account.id,
        userId: account.userId,
      }));

      const transactions = data?.result.transactions;
      dispatch(setTransactionsList(transactions));

    } else {
      toast({ text: 'Erro ao buscar conta, realize novamente o login!', type: 'ERROR' });
    }
  };

  useEffect(() => {
    getAccount();
  }, []);
  
  return <RouterProvider router={router} />;
};

export default Routes;
