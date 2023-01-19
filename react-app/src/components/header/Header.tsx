import { memo, useMemo } from "react";
import styled from "styled-components";
import { Text } from "@mantine/core";

export const Header = memo(() => {
  const today = useMemo(() => {
    return new Date();
  }, []);

  const month = useMemo(() => {
    return today.getMonth() + 1;
  }, [today]);

  const date = useMemo(() => {
    return today.getDate();
  }, [today]);

  return (
    <Wrapper>
      <Text fs="italic" size={40}>
        {month} / {date}
      </Text>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  height: 60px;
  text-align: center;
  top: 0px;
`;
