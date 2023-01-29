import { memo } from "react";
import { Button, Form, Input, message } from "antd";
import axios from "axios";
import { Rule } from "antd/es/form";

export const GoodbyeForm = memo(() => {
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
      manavisCode: string;
    };
  }) => {
    const params = parseInt(v.user.manavisCode.trim());

    await axios
      .post(`goodbye/${params}`, {
        headers: { "Content-Type": "application/json" },
      })
      .catch((err) => {
        if (err) {
          messageApi.info("登録に失敗しました");
        }
      })
      .then((res) => {
        if (res) {
          messageApi.success("お疲れ様でした");
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
        labelCol={{ span: 12 }}
        wrapperCol={{ span: 28 }}
        style={{ maxWidth: 1500 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="マナビス生番号"
          name={["user", "manavisCode"]}
          hasFeedback
          rules={manavisCodeRules.digit}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            下校を完了する！
          </Button>
        </Form.Item>
      </Form>
    </>
  );
});
