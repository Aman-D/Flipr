import React, { useEffect, useState } from "react";
import { Button, Flex } from "@chakra-ui/core";
import { Line } from "react-chartjs-2";
import { jsPDF } from "jspdf";
import { Mail } from "../components/index";
const Graph = ({ array, status }) => {
  const [data, setData] = useState({});
  const [state, setState] = useState({});

  useEffect(() => {
    let dic = {};
    if (array.length === 0) {
      setData({});
    } else {
      array.map(({ reportedOn, ...rest }) => {
        if (!dic[reportedOn]) {
          dic[reportedOn] = [{ ...rest, reportedOn }];
        } else {
          dic[reportedOn].push({ ...rest, reportedOn });
        }
        setData(dic);
      });
    }
  }, [array]);

  useEffect(() => {
    let dic = {};
    dic["labels"] = Object.keys(data);
    dic["datasets"] = [
      {
        label: status.toUpperCase(),
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: Object.keys(data).map((value) => data[value].length),
      },
    ];
    setState(dic);
  }, [data]);

  /*
  For printing the cahrt
  */
  const print = () => {
    let canvas = document.getElementsByClassName("chartjs-render-monitor")[0];
    const pdf = new jsPDF({ orientation: "l" });
    pdf.addImage(canvas.toDataURL(), "JPEG", 15, 40, 250, 100);
    pdf.save("download.pdf");
  };

  return (
    <Flex
      p={8}
      objectFit="cover"
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Line
        data={state}
        width={1000}
        height={400}
        id="chart"
        options={{ maintainAspectRatio: false }}
        options={{
          elements: {
            point: {
              radius: 5,
              hoverBorderWidth: 3,
            },
          },
          title: {
            display: true,
            text: ` Number of people ${status}`,
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
          tooltips: {
            mode: "point",
          },
        }}
      />
      <Flex
        backgroundColor="custom.blue2"
        alignItems="center"
        p={4}
        borderRadius="md"
      >
        <Button
          onClick={() => {
            print();
          }}
          backgroundColor="custom.white"
          color="black"
          mx={2}
        >
          Print
        </Button>
      </Flex>
    </Flex>
  );
};

export default Graph;
