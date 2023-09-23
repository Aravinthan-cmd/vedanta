import React, { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js/auto';
import '../graph/graph.scss';
import ChartDash from './ChartDash';
import { isEqual } from 'lodash';
// import { Line } from "react-chartjs-2";

const Graph = () => {
  
  const chartRef = useRef(null);

  const [isOpengraph, setIsOpengraph] = useState();

  const [infoGraph, setInfoGraph] = useState([]);
  const [error, setError] = useState(false);

  const [infoFind, setInfoFind] = useState([]);

  const [peakName, setPeakName] = useState();

  const [graphData, setGraphData] = useState([]);
  const [graphUpdateData, setGraphUpdateData] = useState([]);

  const [selectedWaveGuideChart, setSelectedWaveGuideChart] = useState();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://52.66.175.77/sensor/initial");
        const infoVal = await response.json();
        setInfoGraph(infoVal);
      } catch (error) {
        setError(error);
      }
    };
    const interval = setInterval(() => {
      fetchData();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);    

  useEffect(() => {
    const sensorArray = [];
    var topPeak;
    for (let index = 1; index <= 108; index++) {
      let sensorName = `sensor${index}`;
      const val = infoGraph[0]?.[sensorName];
      sensorArray.push({sensorName, val});
      const descending = sensorArray.sort((a, b) => b.val - a.val);
      topPeak = descending.slice(0, 5);
    }
    if(topPeak !== undefined){
      setPeakName(topPeak[0].sensorName);
    }
    },[infoGraph]);

    useEffect(() => {
      let chart = null; // Initialize chart as null
    
      let peakNameChart = peakName;
      var updateName;
      if (peakNameChart) {
        updateName = peakNameChart.replace("sensor", "CBT");
      }
    
      // Function to create or update the chart
      const createOrUpdateChart = () => {
        const DataGraph = graphData.splice(-100)
        const DataGraphUpdate = graphUpdateData.slice(-100);  

        // Sample data for the Line Chart
        const data = {
          labels: DataGraphUpdate,
          datasets: [
            {
              label: `Peak ${updateName}`,
              data: DataGraph,
              borderColor: '#93B1A6',
              backgroundColor: '#93B1A6',
              tension: 0.1,
            },
          ],
        };
    
        // Chart.js configuration options
        const options = {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        };
    
        if (chart) {
          // Check if chart data or options have changed
          const chartDataChanged = !isEqual(chart.data, data);
          const chartOptionsChanged = !isEqual(chart.options, options);
    
          if (chartDataChanged || chartOptionsChanged) {
            // Update the chart data and options
            chart.data = data;
            chart.options = options;
            chart.update(); // Update the chart with new data and options
          }
        } else {
          // Create a new Line Chart instance
          chart = new Chart(chartRef.current, {
            type: 'line',
            data: data,
            options: options,
          });
        }
      };
    
      // Call the createOrUpdateChart function initially
      createOrUpdateChart();
    
      // Cleanup on unmount
      return () => {
        if (chart) {
          chart.destroy();
        }
      };
    }, [graphData, graphUpdateData, peakName]);
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("http://52.66.175.77/sensor/initial");
          const infoVal = await response.json();
          setInfoFind(infoVal);
        } catch (error) {
          console.log(error);
        }
      };
    
      const interval = setInterval(() => {
        fetchData();
      }, 5000);
    
      return () => {
        clearInterval(interval);
      };
    }, []);
    
    useEffect(() => {
      const peakArray = [];
      var updateTime = [];
      for (let index = 0; index < infoFind.length; index++) {
        if (peakName !== undefined || null) {
          peakArray[index] = infoFind[index]?.[peakName];
          updateTime[index] = infoFind[index]?.time;
        }
      }
      setGraphData(peakArray);
      setGraphUpdateData(updateTime);          // reverse
    }, [infoFind, peakName]);

    console.log(graphUpdateData);
    
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!infoGraph) {
    return <div>Loading...</div>;
  }

  // let peakNameChart = peakName;
  //     var updateName;
  //     if (peakNameChart) {
  //       updateName = peakNameChart.replace("sensor", "CBT");
  //     }
      
  // const data = {
  //   labels: graphUpdateData,
  //   datasets: [
  //     {
  //       label: `${updateName}`,
  //       data: graphData,
  //       fill: false,
  //       borderColor: 'rgba(75,192,192,1)',
  //       backgroundColor: 'rgba(75, 192, 192, 0.2)',
  //       tension: 0.1,
  //     },
  //   ],
  // };
  // const options = {
  //   responsive: true,
  //   scales: {
  //     y: {
  //       beginAtZero: true,
  //     },
  //   },
  // };

  const handleWaveGuideClickChart = (waveGuideNumber) => {
    setSelectedWaveGuideChart(waveGuideNumber);
  };

  return (
    <div className="container">
      
      <div className="box-graph">
        <canvas ref={chartRef} height={`70px`}/>
        {/* <Line data={data} options={options} height={`60%`} /> */}
      </div>
      
      <div className="box">
        <div className="box-chart" onClick={()=>{setIsOpengraph(true); handleWaveGuideClickChart(1)}}>
          <h1>waveGuide 1</h1>
          <span className="text-sm">(CBT1-CBT10)</span>
        </div>
        <div className="box-chart" onClick={()=>{setIsOpengraph(true); handleWaveGuideClickChart(2)}}>
          <h1>waveGuide 2</h1>
          <span className="text-sm">(CBT11-CBT20)</span>
        </div>
        <div className="box-chart" onClick={()=>{setIsOpengraph(true); handleWaveGuideClickChart(3)}}>
          <h1>waveGuide 3</h1>
          <span className="text-sm">(CBT21-CBT30)</span>
        </div>
        <div className="box-chart" onClick={()=>{setIsOpengraph(true); handleWaveGuideClickChart(4)}}>
          <h1>waveGuide 4</h1>
          <span className="text-sm">(CBT31-CBT40)</span>
        </div>
        <div className="box-chart" onClick={()=>{setIsOpengraph(true); handleWaveGuideClickChart(5)}}>
          <h1>waveGuide 5</h1>
          <span className="text-sm">(CBT41-CBT50)</span>
        </div>
        <div className="box-chart" onClick={()=>{setIsOpengraph(true); handleWaveGuideClickChart(6)}}>
          <h1>waveGuide 6</h1>
          <span className="text-sm">(CBT51-CBT60)</span>
        </div>
        <div className="box-chart" onClick={()=>{setIsOpengraph(true); handleWaveGuideClickChart(7)}}>
          <h1>waveGuide 7</h1>
          <span className="text-sm">(CBT61-CBT70)</span>
        </div>
        <div className="box-chart" onClick={()=>{setIsOpengraph(true); handleWaveGuideClickChart(8)}}>
          <h1>waveGuide 8</h1>
          <span className="text-sm">(CBT71-CBT80)</span>
        </div>
        <div className="box-chart" onClick={()=>{setIsOpengraph(true); handleWaveGuideClickChart(9)}}>
          <h1>waveGuide 9</h1>
          <span className="text-sm">(CBT81-CBT90)</span>
        </div>
        <div className="box-chart" onClick={()=>{setIsOpengraph(true); handleWaveGuideClickChart(10)}}>
          <h1>waveGuide 10</h1>
          <span className="text-sm">(CBT91-CBT100)</span>
        </div>
        <div className="box-chart" onClick={()=>{setIsOpengraph(true); handleWaveGuideClickChart(11)}}>
          <h1>waveGuide 11</h1>
          <span className="text-sm">(CBT101-CBT108)</span>
        </div>
        {/* <div className="box-chart hide">
          <h1>waveGuide 12</h1>
        </div>
        <div className="box-chart hide">
          <h1>waveGuide 13</h1>
        </div>
        <div className="box-chart hide">
          <h1>waveGuide 14</h1>
        </div>
        <div className="box-chart hide">
          <h1>waveGuide 15</h1>
        </div> */}
        <ChartDash openGraph={isOpengraph} closeGraph={()=>setIsOpengraph(false)} waveGuideSelected={selectedWaveGuideChart} />
      </div>

    </div>
  );
};

export default Graph;