import React, { useEffect, useState } from "react";
import "../../index.css";
import { Icon } from "@iconify/react";
import axios from "axios";
import { api } from "../../helpers/api";
import { NavLink } from "react-router-dom";
import {
  SimpleGrid,
  createStyles,
  Text,
  Button,
  Space,
  Badge,
  Loader,
} from "@mantine/core";

const useStyles = createStyles(() => ({
  boxPosition: {
    "@media (max-width: 800px)": {
      margin: "0 auto",
      width: "219px",
      height: "209px",
      left: "488px",
      top: "21.8px",
      background: "#FFFFFF",
      border: "1px solid #000000",
    },
  },
  boxP: {
    "@media (min-width: 800px)": {
      marginLeft: "79px",
      width: "219px",
      height: "180px",
      left: "488px",
      top: "21.8px",
      background: "white",
      border: "1px solid #000000",
    },
  },
}));

const Courses = () => {
  const { classes, cx } = useStyles();
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const ac = new AbortController();
    async function fetchCourses() {
      setLoading(true);
      try {
        const res = await axios.get(api.courses.list);
        console.log(res.data);

        setCourses(res.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchCourses();
    return () => ac.abort();
  }, []);
  return (
    <div>
      Available Courses
      <SimpleGrid
        breakpoints={[
          { minWidth: "sm", cols: 2, spacing: 12 },
          { minWidth: "md", cols: 3, spacing: 12 },
          { minWidth: 1200, cols: 3, spacing: 52 },
          { minWidth: "lg", cols: 4, spacing: 52 },
        ]}
      >
        {loading && <Loader />}
        {courses?.map((course) => {
          return (
            <div
              key={course.id}
              className={cx(classes.boxPosition, classes.boxP)}
            >
              <Space h="sm" />
              <Icon
                icon="emojione:maple-leaf"
                height="50"
                rotate={2}
                hFlip={true}
                vFlip={true}
                // style={{marginLeft:"79px"}}
              />
              <NavLink to={`${course.slug}`}>
                <Text weight={400} style={{ marginLeft: "10px" }}>
                  {course.title}
                </Text>
              </NavLink>

              {/* <Space h={5}/> */}
              <Text
                weight={300}
                style={{
                  marginLeft: "10px",
                  fontFamily: "Lato",
                  fontSize: "14px",
                }}
              >
                {course.description}
              </Text>
            </div>
          );
        })}
      </SimpleGrid>
    </div>
  );
};

export default Courses;
