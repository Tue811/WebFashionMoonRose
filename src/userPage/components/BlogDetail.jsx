// import React, { useState, useEffect } from "react";
// import {
//   TitleImgStyle,
//   TitleStyle,
//   TitleHeadStyle,
//   TitleFooterStyle,
// } from "../styles/blogdetailStyle";
// import { Button } from "antd";
// import {
//   FacebookOutlined,
//   InstagramOutlined,
//   TwitterOutlined,
// } from "@ant-design/icons";
// import UserContext from "../context/UserContext";
// import { useParams } from "react-router-dom";
// import { listBlog } from "../services/productAction";

// const BlogDetail = ({blog}) => {
//   const { state, dispatch } = React.useContext(UserContext);
//   const { idblog } = useParams();
//   const [blogs, setBlogs] = useState([]);
//   const [avatar, setAvatar] = useState("");
//   const [title, setTitle] = useState("");
//   const [part1, setPart1] = useState("");
//   const [pic1, setPic1] = useState("");
//   const [des, setDes] = useState("");

//   useEffect(() => {
//     refresh();
//   }, []);

//   const refresh = async () => {
//     const t = await listBlog;

//     setBlogs(t);
//   };

//   useEffect(() => {
//     blogs?.map((e) => {
//       if (e.id === idblog) {
//         setAvatar(e.avatar);
//         setTitle(e.title);
//         setPart1(e.part1);
//         setPic1(e.picture1);
//       }
//     });
//   });
//   console.log(blogs);

//   return (
//     <section>
//       <div className="container mt-5">
//         <TitleHeadStyle className="row mb-5">
//           <div className="col-6">
//             <TitleStyle className="box-title">
//               <h1 className="mb-5">{title}</h1>
//               <p>2 phút đọc</p>
//             </TitleStyle>
//           </div>
//           <div className="col-6 right">
//             <TitleImgStyle>
//               <img
//                 className="mb-5"
//                 src={avatar}
//               />
//             </TitleImgStyle>
//           </div>
//         </TitleHeadStyle>
//         <div className="row mb-5">
//           <div className="col-1"></div>
//           <div className="col-10">
//             <div className="row mt-5 mb-5">
//               <div className="col-1"></div>
//               <div className="col-10">
//                 <p>{part1}</p>
//               </div>
//             </div>
//             <img
//               className="mb-5"
//               src={pic1}
//             />
//             <div className="row">
//               <div className="col-1"></div>
//               <div className="col-10">
//                 <p className="mb-4">
//                   Ai, trừ khi bạn phải được chuộc lại, tất cả đức tính, mọi đức
//                   tính, tất cả những sự thật khen ngợi cho sa mạc. Nhưng người
//                   đã lắng nghe, vì họ có thể, bảo vệ ý kiến ​​của họ. Tất cả các
//                   stoics đều được cho là tuyệt vời, không phải là nguyên nhân
//                   của Zenoni, đã được.
//                 </p>
//                 <p className="mb-4">
//                   Đối với họ sau đó chuyển đổi bạn, xin vui lòng. Hai vị vua:
//                   Xây dựng Internet. Có một cái gì đó tự nó là sự tâng bốc, ngay
//                   cả khi không có phỉ báng. Một cái gì đó cho tiện ích của rất
//                   nhiều tiền. Có hai loại điều đó, anh ấy đã làm ba điều. Và
//                   nhiệm vụ mà công việc của trí tuệ là gì. Nhưng trong rõ ràng
//                   nhất là quá dài .quos trừ khi bạn phải khắc phục, mọi đức
//                   tính, mọi đức tính, tất cả vinh quang của tất cả những sự thật
//                   của sự khen ngợi cho sa mạc. Nhưng người đã lắng nghe, vì họ
//                   có thể, bảo vệ ý kiến ​​của họ. Tất cả các stoics đều được cho
//                   là tuyệt vời, không phải là nguyên nhân của Zenoni, đã được.
//                   Người xứng đáng với một người đàn ông muốn trở thành một loại
//                   niềm vui. Đối với họ sau đó chuyển đổi bạn, xin vui lòng. Hai
//                   vị vua: Xây dựng Internet. Có một cái gì đó tự nó là sự tâng
//                   bốc, ngay cả khi không có phỉ báng. Lợi thế của số tiền là gì?
//                   Có hai loại điều đó, anh ấy đã làm ba điều. Và vai trò của
//                   công việc của trí tuệ là gì? Tuy nhiên, trong rõ ràng nhất
//                   chúng ta quá dài.
//                 </p>
//               </div>
//             </div>
//             <Button className="mt-4" type="text">
//               Chia sẻ câu chuyện này
//             </Button>
//             <div className="mb-5">
//               <Button type="text">
//                 <FacebookOutlined />
//               </Button>
//               <Button type="text">
//                 <InstagramOutlined />
//               </Button>
//               <Button type="text">
//                 <TwitterOutlined />
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default BlogDetail;

import React, { useState, useEffect } from "react";
import {
  TitleImgStyle,
  TitleStyle,
  TitleHeadStyle,
  TitleFooterStyle,
} from "../styles/blogdetailStyle";
import { Button } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import UserContext from "../context/UserContext";
import { useParams } from "react-router-dom";
import { listBlog } from "../services/productAction";

const BlogDetail = () => {
  const { state, dispatch } = React.useContext(UserContext);
  const { idblog } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [avatar, setAvatar] = useState("");
  const [title, setTitle] = useState("");
  const [par1, setPart1] = useState("");
  const [par2, setPar2] = useState("");
  const [par3, setPar3] = useState("");
  const [par4, setPar4] = useState("");
  const [par5, setPar5] = useState("");
  const [pic1, setPic1] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    refresh();
  }, []);

  const refresh = async () => {
    const t = await listBlog();
    setBlogs(t);
  };

  useEffect(() => {
    blogs?.map((e) => {
      if (e.id === idblog) {
        setAvatar(e.avatar);
        setTitle(e.title);
        setPart1(e.par1);
        setPic1(e.picture1);
        setPar2(e.par2);
        setPar3(e.par3);
        setPar4(e.par4);
        setPar5(e.par5);
        setDate(e.date);
      }
    });
  }, [idblog, blogs]);

  return (
    <section>
      <div className="container mt-5">
        <TitleHeadStyle className="row mb-5">
          <div className="col-6">
            <TitleStyle className="box-title">
              Ngày đăng :<span>{date}</span>
              <h1 className="mb-5 mt-3">{title}</h1>
              <p>2 phút đọc</p>
            </TitleStyle>
          </div>
          <div className="col-6 right">
            <TitleImgStyle>
              <img
                className="mb-5"
                src={avatar}
                alt="Avatar"
                style={{
                  width: "100%",
                  height: "600",
                  padding: "50px 50px 0 0",
                }}
              />
            </TitleImgStyle>
          </div>
        </TitleHeadStyle>
        <div className="row mb-5">
          <div className="col-1"></div>
          <div className="col-10">
            <div className="row mt-5 mb-5">
              <div className="col-1"></div>
              <div className="col-10">
                <p>{par1}</p>
              </div>
            </div>
            <img className="mb-5" src={pic1} alt="Picture"  />
            <div className="row">
              <div className="col-1"></div>
              <div className="col-10">
                <p className="mb-4">{par2}</p>
                <p className="mb-4">{par3}</p>
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
