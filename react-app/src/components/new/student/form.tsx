import { memo } from "react";
import { Button, Form, Input } from "antd";
import axios from "axios";

export const NewStudentForm = memo(() => {
  const [form] = Form.useForm();

  const param = form.getFieldValue(["user", "manavisCode"]);

  const onFinish = async (v: string) => {
    console.log(param, "params");

    //TODO エラー箇所直す（APIはコールできている）
    await axios.post(`new/student/${parseInt(v.user.manavisCode)}`, {
      headers: { "Content-Type": "application/json" },
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 900 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="苗字"
        name={["user", "faistName"]}
        rules={[{ required: true, message: "Please input new faistName!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="名前"
        name={["user", "lastName"]}
        rules={[{ required: true, message: "Please input new lastName!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="マナビス番号"
        name={["user", "manavisCode"]}
        rules={[{ required: true, message: "Please input new manavisCode!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button
          type="primary"
          htmlType="submit"
          onClick={() => {
            console.log(form.getFieldsValue());
          }}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
});
