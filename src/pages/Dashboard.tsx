import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Bloc } from "../assets/style/global";
import { AnalysisForm, AnalysisHeatMap } from "../features/analysis";
import { useRedux } from "../hooks/useRedux";

export default () => {
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const { dispatch, useAppSelector } = useRedux();
  const [fetchedData, setFetchedData] = useState();
  
  const { isDataFetched, data, getDataLoading } = useAppSelector(state => ({
    isDataFetched: state.DummyData.isDataFetched,
    data: state.DummyData.data,
    getDataLoading: state.DummyData.getDataLoading
  }));


  const scrollToBottom = () => {
    messagesEndRef?.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom();
  }, [getDataLoading])

  useEffect(() => {
    if (isDataFetched) {
      setFetchedData(data);
    }
  }, [isDataFetched])


  return (
    <Bloc >
      <h4>Consulting</h4>
      <p>The depth of big data is endless</p>
      <AnalysisForm />
      <div ref={messagesEndRef}>
        <AnalysisHeatMap ref={null} fetchedData={fetchedData} />
      </div>
    </Bloc>
  )
};
