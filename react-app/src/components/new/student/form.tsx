import { memo } from "react";
import { Button, Form, Input, message, Select } from "antd";
import axios from "axios";
import { Rule } from "antd/es/form";

export const NewStudentForm = memo(() => {
  const { Option } = Select;

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
      firstName: string;
      lastName: string;
      grade: number;
      manavisCode: string;
    };
  }) => {
    const params = parseInt(v.user.manavisCode.trim());

    await axios
      .post(
        `new/student/${params}/${v.user.grade}?fn=${v.user.firstName}&ln=${v.user.lastName}`,
        {
          headers: { "Content-Type": "application/json" },
        }
      )
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
        labelCol={{ span: 12 }}
        wrapperCol={{ span: 28 }}
        style={{ maxWidth: 1500 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="姓名"
          name={["user", "firstName"]}
          hasFeedback
          rules={[{ required: true, message: "姓名が入力されていません" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="名前"
          name={["user", "lastName"]}
          hasFeedback
          rules={[{ required: true, message: "名前が入力されていません" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="学年"
          name={["user", "grade"]}
          hasFeedback
          rules={[{ required: true, message: "学年が入力されていません" }]}
        >
          <Select>
            <Option value={1}>1</Option>
            <Option value={2}>2</Option>
            <Option value={3}>3</Option>
          </Select>
        </Form.Item>

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
            登録する
          </Button>
        </Form.Item>
      </Form>
    </>
  );
});
