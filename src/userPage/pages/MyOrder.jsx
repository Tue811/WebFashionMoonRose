import React, { useState } from 'react';
import CardOrder from '../components/CardOrder';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';  




const items = [
    {
      label: 'Tất Cả',
      key: 'all',
    },
    {
      label: 'Chưa Xác Nhận',
      key: 'unconfimred',
    },
    {
      label: 'Đã Xác Nhận ',
      key: 'comfirmed',
    },
    {
        label: 'Đang Vận Chuyện ',
        key: 'shipping',
      },
      {
        label: 'Đã Giao Hàng ',
        key: 'shipped',
      },
      {
        label: 'Đã Hủy ',
        key: 'cancelled',
      },
      {
        label: 'Hoàn Thành ',
        key: 'complete',
      },
  ];
const MyOrder = () => {
    const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
    return (
        <div
        style={{
            padding:"50px "
        }}
        >
            <Menu 
            style={{
                display:"flex",
                justifyContent:"space-between",
                paddingBottom:50
            }}
            onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
            <div>
            <CardOrder/>
            <CardOrder/>
            <CardOrder/>
            <CardOrder/>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default MyOrder;