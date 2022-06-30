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

export function Signup() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const { signup } = useContext(AuthContext);

  const history = useNavigate();
  function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    authenticationService
      .signup(username, email, password, confirmPassword)
      .then((res) => {
        setLoading(false);
        signup(res.data.key);
        history("/login");
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
            Create an account
          </Title>
          <Text color="dimmed" size="sm" align="center" mt={5}>
            Do not have an account yet?{" "}
            <Anchor<"a">
              href="#"
              size="sm"
              onClick={(event) => event.preventDefault()}
            >
              Create account
            </Anchor>
          </Text>

          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <TextInput
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              placeholder="you@mantine.dev"
              required
            />
            <TextInput
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              label="Username"
              placeholder="Enter your username"
              required
              mt="md"
            />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              mt="md"
            />
            <PasswordInput
              label="Confirm Password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setconfirmPassword(e.target.value)}
              required
              mt="md"
            />

            <Group position="apart" mt="md">
              <Checkbox label="Remember me" />
              <Anchor<"a">
                onClick={(event) => event.preventDefault()}
                href="#"
                size="sm"
              >
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
              Sign up
            </Button>
          </Paper>
        </Container>
      </form>
    </div>
  );
}
