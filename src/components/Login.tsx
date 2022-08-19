import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authenticationService } from "../services/authentication";
import { AuthContext } from "../contexts/AuthContext";
import { showNotification, updateNotification } from "@mantine/notifications";

import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from "@mantine/core";
import { Check } from "tabler-icons-react";

export function AuthenticationTitle() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(undefined);
  const { login } = useContext(AuthContext);
  const history = useNavigate();
  function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    authenticationService
      .login(username, password)
      .then((res) => {
        setLoading(false);
        setStatus({ type: "success" });
        showNotification({
          id: "load-data",
          loading: true,
          title: "Signing in...",
          message:
            "Signing in to your account, please wait while we load your data.",
          autoClose: false,
          disallowClose: true,
        });
        setTimeout(() => {
          updateNotification({
            id: "load-data",
            loading: false,
            title: "Welcome to Relearn",
            message:
              "Welcome to your account, please wait while we load your data.",
            autoClose: true,
            disallowClose: false,
            icon: <Check />,
          });
        }, 4000);
        login(res.data.key);
        history("/dashboard/courses");
      })
      .catch((error) => {
        setLoading(false);
        setStatus({ type: "error", error });
        setError(error.message || error);
      });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Container size={420} my={40}>
          <Title
            align="center"
            sx={(theme) => ({
              fontFamily: `Greycliff CF, ${theme.fontFamily}`,
              fontWeight: 900,
            })}
          >
            Welcome back!
          </Title>

          <Text color="dimmed" size="sm" align="center" mt={5}>
            Do not have an account yet?{" "}
            <Anchor<"a"> href="/#/signup" size="sm">
              Create account
            </Anchor>
          </Text>

          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <TextInput
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              label="Username"
              placeholder="Enter your username"
              required
            />
            <PasswordInput
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              placeholder="Your password"
              required
              mt="md"
            />
            <Group position="apart" mt="md">
              <Checkbox label="Remember me" />
              <Anchor<"a"> href="forgot-password" size="sm">
                Forgot password?
              </Anchor>
            </Group>
            <Button
              fullWidth
              mt="xl"
              type="submit"
              loading={loading}
              disabled={loading}
            >
              Sign in
            </Button>

            {error && <p>{error}</p>}
          </Paper>
        </Container>
      </form>
      <>
        {status?.type === "error" &&
          showNotification({
            id: "load-data",
            loading: false,
            title: "  Error",
            color: "red",
            message: "Something went wrong",
            autoClose: true,
            disallowClose: false,
          })}
      </>
      <> </>
    </div>
  );
}
