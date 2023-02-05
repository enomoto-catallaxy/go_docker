import { Tabs } from "@mantine/core";
import {
  IconMessageCircle,
  IconSettings,
  IconScreenShare,
} from "@tabler/icons";
import { memo } from "react";
import styled from "styled-components";
import { GoodbyeForm } from "./manavis-code/Form";

export const SearchHeader = memo(() => {
  return (
    <Tabs defaultValue="coming">
      <Tabs.Panel value="coming" pt="xs">
        <Title>来校状況</Title>
      </Tabs.Panel>

      <Tabs.Panel value="messages" pt="xs">
        <Title>その2</Title>
      </Tabs.Panel>

      <Tabs.Panel value="settings" pt="xs">
        <Title>その3</Title>
      </Tabs.Panel>

      <Tabs.List position="center">
        <Tabs.Tab value="coming" icon={<IconScreenShare size={36} />}>
          来校状況
        </Tabs.Tab>
        <Tabs.Tab value="messages" icon={<IconMessageCircle size={36} />}>
          Messages
        </Tabs.Tab>
        <Tabs.Tab value="settings" icon={<IconSettings size={36} />}>
          Settings
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="coming" pt="xs">
        <GoodbyeForm />
      </Tabs.Panel>

      <Tabs.Panel value="messages" pt="xs">
        Messages tab content
      </Tabs.Panel>

      <Tabs.Panel value="settings" pt="xs">
        Settings tab content
      </Tabs.Panel>
    </Tabs>
  );
});

const Title = styled.div`
  text-align: center;
  font-size: 36px;
  font-weight: 700;
`;
