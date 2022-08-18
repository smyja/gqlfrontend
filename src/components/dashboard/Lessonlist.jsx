import React, { useState, useEffect } from "react";
import { Container, Text, Loader, Paper, Space } from "@mantine/core";
import axios from "axios";
import { useParams, Link, useLocation } from "react-router-dom";

//pass lesson data to another component

const LessonList = (props) => {
  const [lesson, setLesson] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { courseSlug } = useParams();
  const location = useLocation();
  const data = location.state?.title;
  console.log("data", data);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://relenx.herokuapp.com/api/v1/dashboard/lessons/${courseSlug}`
        );
        setLesson(res.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }
    fetchData();
  }, [courseSlug]);

  return (
    <Container>
      {loading && <Loader />}
      <h1> {data.title}</h1>
      <Text
        weight={300}
        style={{
          fontFamily: "Lato",
          fontSize: "24px",
        }}
      >
        Course Lessons
      </Text>
      <Space h="xs" />
      {lesson?.map((lessons) => {
        return (
          <div key={lessons.id}>
            <Paper p="md" style={{ border: "1px solid #000000" }}>
              <Link
                to={`${lessons.slug}`}
                state={{ title: lessons }}
                style={{
                  textDecoration: "none",
                  color: "black",
                  '&:hover': {
                    color: 'red',
                  },
                }}
              >
                {lessons.title}
              </Link>
            </Paper>
            <Space h="md" />
          </div>
        );
      })}{" "}
      {error && <p>{error}</p>}
    </Container>
  );
};

export default LessonList;
