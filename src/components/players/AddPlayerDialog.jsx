import React from "react";
import styled from "styled-components";
import Elevation from "components/common/Elevation";
import { spacing } from "styles/variables";
import { useForm } from "antd/lib/form/Form";
import { Form, Input } from "antd";

export const firstnameField = "firstname";
export const lastnameField = "lastname";

const AddPlayerDialog = () => {
  const [form] = useForm();

  const add = (values) => {};

  return (
    <Root>
      <Form
        form={form}
        name="player"
        validateTrigger="onBlur"
        onFinish={add}
      >
        <Form.Item name={firstnameField}>
        <Input  placeholder="Imię" />

        </Form.Item>
        <Form.Item  name={lastnameField}>

      <Input placeholder="Nazwisko"/>
        </Form.Item>
     </Form>
    </Root>
  );
};

const Root = styled(Elevation)`
  display: flex;

  width: 612px;
  margin-top: ${spacing.large};
  padding: ${spacing.medium};
`;

export default AddPlayerDialog;
