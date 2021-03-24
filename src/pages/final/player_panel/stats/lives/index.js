import React, { useState } from "react";
import styled from "styled-components";
import Elevation from "components/common/Elevation";
import { spacing } from "styles/variables";
import { useForm } from "antd/lib/form/Form";
import { Typography } from 'antd';
import { HeartTwoTone } from '@ant-design/icons';

const { Title } = Typography;

const Lives = (props) => {
    let style = {
        fontSize: '50px'
    };
    return (
        <Root>
            <Content>
                <HeartTwoTone style = {style} twoToneColor="#eb2f96" />
                <HeartTwoTone style = {style} twoToneColor="#eb2f96" />
                <HeartTwoTone style = {style} twoToneColor="#eb2f96" />
            </Content>
        </Root>
    );
};

const Root = styled.div`
    margin-top: 20px;
    width: auto;
`;

const MyTitle = styled(Title)`
  text-align: center;
`;

const Content = styled.div`
    display: flex;
    justify-content: space-evenly'
`;

export default Lives;
