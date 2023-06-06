import React from "react";
import { Steps } from "antd";

const OrderDetail = () => {
  return (
    <div>
      <Steps
        current={3}
        items={[
          {
            title: "Đơn hàng đã đặt",
          },
          {
            title: "Đã xác nhận",
          },
          {
            title: "Đang vận chuyển",
          },
          {
            title: "Đã giao hàng",
          },
          {
            title: "Hoàn thành",
          },
        ]}
      />
      <div>
        <h5>Thông tin nhận hàng</h5>
        <b>Nguyễn Thị Bích Tuệ</b>
        <p>Số điện thoại: 0322665986</p>
        <p>Địa chỉ: 232 Thái Hà, Đống Đa Đống Đa, Hà Nội</p>

      </div>
      <div>
        <h5>Thông tin thanh toán</h5>
      </div>
    </div>
  );
};

export default OrderDetail;
