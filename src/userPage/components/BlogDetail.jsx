import React from "react";
import {
  TitleImgStyle,
  TitleStyle,
  TitleHeadStyle,
  TitleFooterStyle,
} from "../style/blogdetailStyle";
import { Button } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
const BlogDetail = () => {
  return (
    <section>
      <div className="container">
        <TitleHeadStyle className="row mb-5">
          <div className="col-6">
            <TitleStyle className="box-title">
              <h1 className="mb-5">Một thương hiệu là một giọng nói</h1>
              <p>2 phút đọc</p>
            </TitleStyle>
          </div>
          <div className="col-6 right">
            <TitleImgStyle></TitleImgStyle>
          </div>
        </TitleHeadStyle>
        <div className="row mb-5">
          <div className="col-1"></div>
          <div className="col-10">
            <div className="row mt-5 mb-5">
              <div className="col-1"></div>
              <div className="col-10">
                <p>
                  Tôi nghe, các nhà triết học về tiếng nói của triết gia, sử
                  thi, nhưng những gì bạn đã quên bạn. Và ngươi sẽ đưa ra, và
                  lời nói của bạn là. Ông coi thường để thảo luận về những cuộc
                  nói chuyện thanh lịch, khó hiểu. Nhưng hàng hóa của cơ thể, đó
                  là, về phía sau của bạn, cũng như nó. Rằng khi nó là như vậy,
                  rõ ràng là tất cả những điều thẳng đứng và đáng khen ngợi được
                  nhắc đến, như với niềm vui vẫn còn sống. Hai vị vua: Xây dựng
                  Internet. Có một cái gì đó tự nó là sự tâng bốc, ngay cả khi
                  không có phỉ báng. Lợi thế của số tiền là gì? Người xứng đáng
                  với một người đàn ông muốn trở thành một loại niềm vui. Đối
                  với họ sau đó chuyển đổi bạn, xin vui lòng. Hai vị vua: Xây
                  dựng Internet. Có một cái gì đó tự nó là sự tâng bốc, ngay cả
                  khi không có phỉ báng. Lợi thế của số tiền là gì? Có hai loại
                  điều đó, anh ấy đã làm ba điều. Và vai trò của công việc của
                  trí tuệ là gì? Tuy nhiên, trong rõ ràng nhất chúng ta quá dài.
                </p>
              </div>
            </div>
            <img
              className="mb-5"
              src="https://images.unsplash.com/photo-1547738765-ee82a7f07da8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&fm=jpg&fit=crop&w=1080&q=80"
            />
            <div className="row">
              <div className="col-1"></div>
              <div className="col-10">
                <p className="mb-4">
                  Ai, trừ khi bạn phải được chuộc lại, tất cả đức tính, mọi đức
                  tính, tất cả những sự thật khen ngợi cho sa mạc. Nhưng người
                  đã lắng nghe, vì họ có thể, bảo vệ ý kiến ​​của họ. Tất cả các
                  stoics đều được cho là tuyệt vời, không phải là nguyên nhân
                  của Zenoni, đã được.
                </p>
                <p className="mb-4">
                  Đối với họ sau đó chuyển đổi bạn, xin vui lòng. Hai vị vua:
                  Xây dựng Internet. Có một cái gì đó tự nó là sự tâng bốc, ngay
                  cả khi không có phỉ báng. Một cái gì đó cho tiện ích của rất
                  nhiều tiền. Có hai loại điều đó, anh ấy đã làm ba điều. Và
                  nhiệm vụ mà công việc của trí tuệ là gì. Nhưng trong rõ ràng
                  nhất là quá dài .quos trừ khi bạn phải khắc phục, mọi đức
                  tính, mọi đức tính, tất cả vinh quang của tất cả những sự thật
                  của sự khen ngợi cho sa mạc. Nhưng người đã lắng nghe, vì họ
                  có thể, bảo vệ ý kiến ​​của họ. Tất cả các stoics đều được cho
                  là tuyệt vời, không phải là nguyên nhân của Zenoni, đã được.
                  Người xứng đáng với một người đàn ông muốn trở thành một loại
                  niềm vui. Đối với họ sau đó chuyển đổi bạn, xin vui lòng. Hai
                  vị vua: Xây dựng Internet. Có một cái gì đó tự nó là sự tâng
                  bốc, ngay cả khi không có phỉ báng. Lợi thế của số tiền là gì?
                  Có hai loại điều đó, anh ấy đã làm ba điều. Và vai trò của
                  công việc của trí tuệ là gì? Tuy nhiên, trong rõ ràng nhất
                  chúng ta quá dài.
                </p>
              </div>
            </div>
            <Button className="mt-4" type="text">
              Chia sẻ câu chuyện này
            </Button>
            <div className="mb-5">
              <Button type="text">
                <FacebookOutlined />
              </Button>
              <Button type="text">
                <InstagramOutlined />
              </Button>
              <Button type="text">
                <TwitterOutlined />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BlogDetail;
