import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authenticationService } from "../services/authentication";
import { AuthContext } from "../contexts/AuthContext";
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

export function AuthenticationTitle() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const history = useNavigate();
  function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    authenticationService
      .login(username, password)
      .then((res) => {
        setLoading(false);
        login(res.data.key);
        history("/dashboard");
      })
      .catch((error) => {
        setLoading(false);
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
    </div>
  );
}
