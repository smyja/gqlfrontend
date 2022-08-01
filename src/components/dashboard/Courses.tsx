import React from "react";
import "../../index.css";
import { Icon } from "@iconify/react";
import {
  SimpleGrid,
  createStyles,
  Text,
  Button,
  Space,
  Badge,
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
      border:"1px solid #000000",
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
      border:"1px solid #000000",
    },
  },
}));

const Courses = () => {
  const { classes, cx } = useStyles();
  return (
    <div>
      <SimpleGrid
        breakpoints={[
          { minWidth: "sm", cols: 2 ,spacing:12},
          { minWidth: "md", cols: 3,spacing:12 },
          { minWidth: 1200, cols: 3,spacing:52 }
          
        ]}
      >
        <div className={cx(classes.boxPosition, classes.boxP)}>
        <Space h="sm" />
          <Icon
            icon="emojione:maple-leaf"
            height="50"
            rotate={2}
            hFlip={true}
            vFlip={true}
            style={{marginLeft:"79px"}}
          />
          <Text weight={400} style={{marginLeft:"10px"}}>
            Python
          </Text>
     
          <Space h="xs" />
          <Text align="center" color="#63BA86" weight={400}>
            {" "}
            STATUS: <Badge color="teal">ACTIVE</Badge>
          </Text>
          <Space h="xs" />
          <Button
            style={{ backgroundColor: "#63BA86", marginLeft: "67px" }}
            size="xs"
          >
            <Text align="center" color="white" weight={400}>
              START
            </Text>
          </Button>{" "}
        </div>
        <div className={cx(classes.boxPosition, classes.boxP)}>
        <Space h="sm" />
          <Icon
            icon="emojione:maple-leaf"
            height="50"
            rotate={2}
            hFlip={true}
            vFlip={true}
            style={{marginLeft:"79px"}}
          />
          <Text align="center" color="#63BA86" weight={700}>
            Python
          </Text>
        
          <Space h="xs" />
          <Text align="center" color="#63BA86" weight={400}>
            {" "}
            STATUS: <Badge color="teal">ACTIVE</Badge>
          </Text>
          <Space h="xs" />
          <Button
            style={{ backgroundColor: "#63BA86", marginLeft: "67px" }}
            size="xs"
          >
            <Text align="center" color="white" weight={400}>
              START
            </Text>
          </Button>{" "}
        </div>
        <div className={cx(classes.boxPosition, classes.boxP)}>
        <Space h="sm" />
          <Icon
            icon="emojione:maple-leaf"
            height="50"
            rotate={2}
            hFlip={true}
            vFlip={true}
            style={{marginLeft:"79px"}}
          />
          <Text align="center" color="#63BA86" weight={700}>
            Python
          </Text>
          <Text align="center" color="#63BA86" weight={400}>
            10AM - 5PM
          </Text>
          <Space h="xs" />
          <Text align="center" color="#63BA86" weight={400}>
            {" "}
            STATUS: <Badge color="teal">ACTIVE</Badge>
          </Text>
          <Space h="xs" />
          <Button
            style={{ backgroundColor: "#63BA86", marginLeft: "67px" }}
            size="xs"
          >
            <Text align="center" color="white" weight={400}>
              START
            </Text>
          </Button>{" "}
        </div>
        <div className={cx(classes.boxPosition, classes.boxP)}>
        <Space h="sm" />
          <Icon
            icon="emojione:maple-leaf"        
            height="50"
            rotate={2}
            hFlip={true}
            vFlip={true}
            // style={{marginLeft:"79px"}}
          />
       <Text weight={400} style={{marginLeft:"10px"}}>
            Python
          </Text>
          <Space h="xs" />
        
        </div>
        <div className={cx(classes.boxPosition, classes.boxP)}>
        <Space h="sm" />
          <Icon
            icon="emojione:maple-leaf"
            height="50"
            rotate={2}
            hFlip={true}
            vFlip={true}
            style={{marginLeft:"79px"}}
          />
          <Text align="center" color="#63BA86" weight={700}>
            Python
          </Text>
          <Text align="center" color="#63BA86" weight={400}>
            10AM - 5PM
          </Text>
          <Space h="xs" />
          <Text align="center" color="#63BA86" weight={400}>
            {" "}
            STATUS: <Badge color="teal">ACTIVE</Badge>
          </Text>
          <Space h="xs" />
          <Button
            style={{ backgroundColor: "#63BA86", marginLeft: "67px" }}
            size="xs"
          >
            <Text align="center" color="white" weight={400}>
              START
            </Text>
          </Button>{" "}
        </div>
      </SimpleGrid>
    </div>
  );
};

export default Courses;
