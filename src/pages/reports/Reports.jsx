import React from "react";
import "../reports/reports.scss";
import { useState, useEffect } from "react";
import ReportPopup from "./ReportPopup";
import * as XLSX from 'xlsx';

const Reports = () => {

  const [isOpenreport, setIsOpenreport] = useState(false);
  const [selectedWaveGuide, setSelectedWaveGuide] = useState();

  const [infoReport, setInfoReport] = useState([]);
  const [errorReport, setErrorReport] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://52.66.175.77/sensor/find");
        const infoVal = await response.json();
        setInfoReport(infoVal);
      } catch (error) {
        setErrorReport(error);
      }
    };

    fetchData();
    // const interval = setInterval(() => {
    //   fetchData();
    // }, 10000);
    // return () => {
    //   clearInterval(interval);
    // };
  }, []);

  if (errorReport) {
    return <div>Error: {errorReport.message}</div>;
  }
  if (!infoReport) {
    return <div>Loading...</div>;
  }

// var sensors = {};
// var updateTimes = {};

// for (let index = 1; index <= 108; index++) {
//   var sensorName = "sensor" + index;
//   sensors[sensorName] = infoReport[index - 1]?.sensor1;
//   updateTimes[sensorName] = infoReport[index - 1]?.updatedAt;
// }

  const sensorData = infoReport.map((item) => {
    const sensorValues = Object.entries(item)
      .filter(([key]) => key.startsWith('sensor'))
      .map(([key, value]) => ({ name: key, value }));
    return sensorValues;
  });

  var sensorNameXl = [];
  for (let index = 1; index <= 108; index++) {
       sensorNameXl[index] = `Sensor ${index}`;
  }

  const generateExcel = () => {
  const workbook = XLSX.utils.book_new();
  const data = [
    [...sensorNameXl.map((sensor) => [sensor]).slice(1)],
    ...sensorData.map((sensorDataExcel) =>
      sensorDataExcel.map((sensor) => sensor.value)
    ),
  ];
  const worksheet = XLSX.utils.aoa_to_sheet(data);
  XLSX.utils.book_append_sheet(workbook, worksheet, "sheet1");
  XLSX.writeFile(workbook, "xyma_vedanta.xlsx");
};

  const handleWaveGuideClick = (waveGuideNumber) => {
    setSelectedWaveGuide(waveGuideNumber);
  };

  return (
    <div className="report">

      <div className="container1">
        <div className="content">
          {infoReport.length !== 0 ? (
            <div className="xl" onClick={()=>generateExcel()}>
            <h1>Total Excel</h1>
          </div>
          ) : (
            <div className="xl">
              <h1>Loading ...</h1>
            </div>
          )}
        </div>
      </div>

      <div className="container2">
      <div 
      className="box-report" 
      onClick={()=>{setIsOpenreport(true);
      handleWaveGuideClick(1)}}>
          <h1>B Side</h1>
          <span className="text-sm">(CBT23-CBT26)</span>
        </div>
        <div 
        className="box-report" 
        onClick={()=>{setIsOpenreport(true);
        handleWaveGuideClick(2)}}>
          <h1>A Side</h1>
          <span className="text-sm">(CBT23-CBT26)</span>
        </div>
        <div 
        className="box-report hide" 
        onClick={()=>{setIsOpenreport(true);
        handleWaveGuideClick(3)}}>
          <h1>waveGuide 3</h1>
          <span className="text-sm">(CBT21-CBT30)</span>
        </div>
        <div 
        className="box-report hide" 
        onClick={()=>{setIsOpenreport(true);
        handleWaveGuideClick(4)}}>
          <h1>waveGuide 4</h1>
          <span className="text-sm">(CBT31-CBT40)</span>
        </div>
        <div 
        className="box-report hide" 
        onClick={()=>{setIsOpenreport(true);
        handleWaveGuideClick(5)}}>
          <h1>waveGuide 5</h1>
          <span className="text-sm">(CBT41-CBT50)</span>
        </div>
        <div 
        className="box-report hide" 
        onClick={()=>{setIsOpenreport(true);
        handleWaveGuideClick(6)}}>
          <h1>waveGuide 6</h1>
          <span className="text-sm">(CBT51-CBT60)</span>
        </div>
        <div 
        className="box-report hide" 
        onClick={()=>{setIsOpenreport(true);
        handleWaveGuideClick(7)}}>
          <h1>waveGuide 7</h1>
          <span className="text-sm">(CBT61-CBT70)</span>
        </div>
        <div 
        className="box-report hide" 
        onClick={()=>{setIsOpenreport(true);
        handleWaveGuideClick(8)}}>
          <h1>waveGuide 8</h1>
          <span className="text-sm">(CBT71-CBT80)</span>
        </div>
        <div 
        className="box-report hide" 
        onClick={()=>{setIsOpenreport(true);
        handleWaveGuideClick(9)}}>
          <h1>waveGuide 9</h1>
          <span className="text-sm">(CBT81-CBT90)</span>
        </div>
        <div 
        className="box-report hide" 
        onClick={()=>{setIsOpenreport(true);
        handleWaveGuideClick(10)}}>
          <h1>waveGuide 10</h1>
          <span className="text-sm">(CBT91-CBT100)</span>
        </div>
        <div 
        className="box-report hide" 
        onClick={()=>{setIsOpenreport(true);
        handleWaveGuideClick(11)}}>
          <h1>waveGuide 11</h1>
          <span className="text-sm">(CBT101-CBT108)</span>
        </div>
        {/* <div className="box-report hide">
          <h1>waveGuide 12</h1>
        </div>
        <div className="box-report hide">
          <h1>waveGuide 13</h1>
        </div>
        <div className="box-report hide">
          <h1>waveGuide 14</h1>
        </div>
        <div className="box-report hide">
          <h1>waveGuide 15</h1>
        </div> */}
      </div>

      <ReportPopup
      Openreportdash={isOpenreport} 
      Closereportdash={()=>setIsOpenreport(false)}
      waveGuide={selectedWaveGuide}
      />

    </div>
  );
};

export default Reports;
