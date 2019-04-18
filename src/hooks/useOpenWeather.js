import React, { useState, useEffect } from "react";
import axios from 'axios';
import { timeout, to } from "../helpers/utils";

const APIHOST = "https://api.openweathermap.org/data/2.5";
const APIKEY = "f106011efd4da51e7d8268d042e021e8";

const prepareData = data => {

  // Mount a new object grouped by day
  const groupedByDays = data.list
    .map(item => {
      const date = new Date(item.dt_txt.replace(/-/g, "/"));
      const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
        date.getDay()
      ];

      const hour = date.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");

      const icon = `http://openweathermap.org/img/w/${
        item.weather[0].icon
      }.png`;
      return Object.assign(
        { weekday: weekday },
        item.weather[0],
        { icon: icon },
        { clouds: item.clouds },
        { main: item.main },
        { day: new Date(item.dt_txt.replace(/-/g, "/")).getDay() },
        { hour: hour },
      );
    })
    .reduce(function(h, obj) {
      h[obj.weekday] = (h[obj.weekday] || []).concat(obj);
      return h;
    }, {});

  // Sort by weekday and return with array format
  const sortedDataSet = Object.keys(groupedByDays)
    .sort(function(a, b) {
      return new Date(b[0].date) - new Date(a[0].date);
    })
    .map(key => ({ weekday: key, items: groupedByDays[key] }));

  return sortedDataSet;
};

const useOpenWeathermapApi = initialCity => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = async (city) => {
    setIsError(false);
    setIsLoading(true);

    const [err, result] = await to(
      axios.get(
        `${APIHOST}/forecast?q=${city}&mode=json&units=metric&appid=${APIKEY}`
      )
    );

    await timeout(1000);

    if (err) {
      setIsLoading(false);
      setData([]);
      return setIsError(true);
    }

    const data = prepareData(result.data);
    setData(data);
    setIsLoading(false);

  };

  useEffect(() => {
    fetchData(initialCity);
  }, []);

  return {
    data,
    isError,
    fetchData,
    isLoading
  };
};

export default useOpenWeathermapApi;
