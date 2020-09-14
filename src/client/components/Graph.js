import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/core";
import { Line } from "react-chartjs-2";

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

  return (
    <Flex p={8} objectFit="cover" backgroundColor="white">
      <Line
        data={state}
        width={1000}
        height={400}
        options={{ maintainAspectRatio: false }}
        options={{
          title: {
            display: true,
            text: ` Number of people ${status}`,
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </Flex>
  );
};

export default Graph;
