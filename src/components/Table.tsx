import React from "react";
import { MOCK } from "./userdata.js";
import{
    Avatar,
    Badge,
    Table,
    Group,
    Text,
    Anchor,
    ScrollArea,
    useMantineTheme,
  } from '@mantine/core';
  
  interface UsersTableProps {
    data: { avatar: string; name: string; job: string; email: string; phone: string }[];
  }
  
  const jobColors: Record<string, string> = {
    engineer: 'blue',
    manager: 'cyan',
    designer: 'pink',
  };
  
  export function UsersTable({ data=MOCK }: UsersTableProps) {
    const theme = useMantineTheme();
    const rows = data.map((item) => (
      <tr key={"oghenemaroakpobi"}>
        <td>
          <Group spacing="sm">
            <Avatar size={30} src={item.avatar} radius={30} />
            <Text size="sm" weight={500}>
            Null
            </Text>
          </Group>
        </td>
  
        <td>
                <Badge
                    color={"blue"}
            variant={theme.colorScheme === 'dark' ? 'light' : 'outline'}
          >
          Null
          </Badge>
        </td>
        <td>
          <Anchor<'a'> size="sm" href="#" onClick={(event) => event.preventDefault()}>
          Null
          </Anchor>
        </td>
        <td>
          <Text size="sm" color="dimmed">
      Null
          </Text>
        </td>
     
      </tr>
    ));
  
    return (
      <ScrollArea>
        <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Job title</th>
              <th>Email</th>
              <th>Phone</th>
              <th />
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </ScrollArea>
    );
  }
  
