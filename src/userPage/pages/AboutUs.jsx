import React from 'react';
import { AboutLayout, AboutUsLayout } from '../styles/AboutUsStyle';
import { Col, Row } from 'antd';

const AboutUs = () => {
    return (
        <AboutLayout>
            <AboutUsLayout>
                <Row>
                    <Col span={12}>
                    <h3><span>Về</span> chúng tôi</h3>
                    <p>Xuất phát từ con số 0, chúng tôi đã rất nỗ lực để cái tâm vào nghề để có được ngày hôm nay</p>
                    <p>Đến nay chúng tôi đã đạt được mở rộng được quy mô kinh doanh nhưng vẫn giữ cái tâm trong nghề này,
                        luôn đặt nhu cầu của khách hàng lên hàng đầu
                    </p>
                    </Col>
                    <Col span={12}>
                        <img src='https://i.pinimg.com/564x/aa/cd/9d/aacd9dbe52bbeddc69d6770fbb6d0162.jpg'/>
                    </Col>
                </Row>
            </AboutUsLayout>
        </AboutLayout>
    );
};

export default AboutUs;