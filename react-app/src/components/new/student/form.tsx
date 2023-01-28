import { memo } from "react";
import { Button, Form, Input, message, Select } from "antd";
import axios from "axios";
import { Rule } from "antd/es/form";

export const NewStudentForm = memo(() => {
  const { Option } = Select;
  const [form] = Form.useForm();

  const [messageApi, contextHolder] = message.useMessage();

  const isInteger = /^[0-9]+$/;
  const manavisCodeRules: { digit: Rule[] } = {
    digit: [
      {
        type: "number",
        required: true,
        validator: async (rule, value) => {
          if (String(value).length !== 6) {
            return Promise.reject("マナビス生番号は６桁の数字です");
          }
          if (!isInteger.test(value)) {
            return Promise.reject("マナビス生番号は６桁の数字です");
          }
        },
      },
    ],
  };

  const onFinish = async (v: {
    user: {
      faistName: string;
      lastName: string;
      grade: number;
      manavisCode: string;
    };
  }) => {
    const params = parseInt(v.user.manavisCode.trim());

    //TODO エラー箇所直す（APIはコールできている）
    await axios
      .post(`new/student/${params}`, {
        headers: { "Content-Type": "application/json" },
      })
      .catch((err) => {
        if (err) {
          messageApi.info("登録に失敗しました");
        } else {
          messageApi.info("登録に成功しました");
        }
      });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      {contextHolder}
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
          hasFeedback
          rules={[{ required: true, message: "Please input new faistName!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="名前"
          name={["user", "lastName"]}
          hasFeedback
          rules={[{ required: true, message: "Please input new lastName!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="学年"
          name={["user", "grade"]}
          hasFeedback
          rules={[
            { required: true, message: "Please input his or her grade!" },
          ]}
        >
          <Select placeholder="Please select a country">
            <Option value={1}>1</Option>
            <Option value={2}>2</Option>
            <Option value={3}>3</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="マナビス番号"
          name={["user", "manavisCode"]}
          hasFeedback
          rules={manavisCodeRules.digit}
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
    </>
  );
});
