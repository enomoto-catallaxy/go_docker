import { memo, useState } from "react";
import { useForm } from "@mantine/form";
import { TextInput, Button, Box, Code } from "@mantine/core";

export const NewStudent = memo(() => {
  const [submittedValues, setSubmittedValues] = useState("");

  const form = useForm({
    initialValues: {
      firstName: "Jane",
      lastName: "Doe",
      manaviscode: "33",
    },

    validate: {
      firstName: (firstName) =>
        firstName.trim().length < 1
          ? "firstName must have at least 1 letters"
          : null,
      lastName: (lastName) =>
        lastName.trim().length < 1
          ? "lastName must have at least 1 letters"
          : null,
      manaviscode: (value) =>
        String(value).length !== 6
          ? "manaviscode must be consist of 6 numbers"
          : null,
    },
  });

  // const handlsubmit = async () => {
  //   if (submittedValues) return;

  //   await axios.get(`seat/${props.seatId}`).then((response) => {
  //     setSeatInfo(response.data);
  //     console.log(seatInfo);
  //   });
  // };

  return (
    <Box sx={{ maxWidth: 400 }} mx="auto">
      <form
        onSubmit={form.onSubmit((values) =>
          setSubmittedValues(JSON.stringify(values, null, 2))
        )}
      >
        <TextInput
          label="苗字"
          placeholder="First name"
          {...form.getInputProps("firstName")}
        />
        <TextInput
          label="名前"
          placeholder="Last name"
          mt="md"
          {...form.getInputProps("lastName")}
        />
        <TextInput
          type="number"
          label="マナビス生番号"
          placeholder="manaviscode"
          mt="md"
          {...form.getInputProps("manaviscode")}
        />
        <Button type="submit" mt="md">
          Submit
        </Button>
      </form>

      {submittedValues && <Code block>{submittedValues}</Code>}
    </Box>
  );
});
