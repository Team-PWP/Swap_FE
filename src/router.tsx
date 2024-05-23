import { createBrowserRouter, Outlet } from 'react-router-dom';

import Header from '@/components/header';
import ChatlistPage from '@/pages/chatlist/ChatlistPage';
import ChatTestPage from '@/pages/chatting/ChatTestPage';
import ChattingPage from '@/pages/chatting/ChattingPage';
import DetailPage from '@/pages/detail/DetailPage';
import LoginPage from '@/pages/login';
import { RedirectPage } from '@/pages/login/RedirectPage.tsx';
import MainPage from '@/pages/main';
import { NickNamePage } from '@/pages/nickname/NickNamePage.tsx';
import MyProductPage from '@/pages/product/MyProductPage.tsx';
import SellPage from '@/pages/sell/SellPage';
import { ShopPage } from '@/pages/shop';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    children: [
      {
        path: 'chatlist',
        element: <ChatlistPage />,
      },
      {
        path: 'chatroom/:id',
        element: <ChattingPage />,
      },
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'redirection',
        element: <RedirectPage />,
      },
      {
        path: 'nickname',
        element: <NickNamePage />,
      },
      {
        path: 'sell',
        element: <SellPage />,
      },
      {
        path: 'detail',
        element: <DetailPage />,
      },
      {
        path: 'product',
        element: <MyProductPage />,
      },
      {
        path: 'shop',
        element: <ShopPage />,
      },
      {
        path: 'chattest',
        element: <ChatTestPage />,
      },
    ],
  },
]);
