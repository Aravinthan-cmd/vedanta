import "../graph/chartdash.scss";
import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";

                                                                 // class level
const generateData = (inforeport, startSensorIndex, endSensorIndex) => {
  const data = [];

  for (let index = 0; index < inforeport.length; index++) {
    for (let i = startSensorIndex; i <= endSensorIndex; i++) {
      if(i <= 108) {
        data.push({
          id: `${i}`,
          sensor: `sensor${i}`,
          sensorName: `CBT${i}`,
          updatedAt: inforeport[index]?.time,
        });
      }
    }
    return data;
  }
};
                                                               // function

const ChartDash = ({ openGraph, closeGraph, waveGuideSelected }) => {
  const [infoChart, setInfoChart] = useState([]);
  const [error, setError] = useState(false);
  const [selectedSensorIndexes, setSelectedSensorIndexes] = useState([0]);

  const [info, setInfo] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://52.66.175.77/sensor/find");
        const infoVal = await response.json();
        setInfoChart(infoVal);
        setInfo(infoVal)
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);
  
  const clearSelection = () => {
    setSelectedSensorIndexes([0]);
    closeGraph();
  };

  if (!openGraph) {
    return null;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!infoChart) {
    return <div>Loading...</div>;
  }

  const startSensorIndex = (waveGuideSelected - 1) * 10 + 1;
  const endSensorIndex = waveGuideSelected * 10;

  const chartData = generateData(infoChart, startSensorIndex, endSensorIndex);

  const infoSet = (btn) => {
    if (btn === 'btn1') {
      setInfo(infoChart.slice(0, 100));
    }else if (btn === 'btn2') {
      setInfo(infoChart.slice(0, 200));
    }else if (btn === 'btn3') {
      setInfo(infoChart.slice(0, 500));
    }
  }

  const borderColors = ["#FFBB5C","#93B1A6","#96B6C5","#D0BFFF","#765827","#000000","#E966A0","#84A7A1","#C07F00","#FFED00"];

  const datasets = selectedSensorIndexes.map(index => {
    if (index >= 0 && index < chartData.length) {
      const item = chartData[index];
      const selectedSensorId = item ? item.id : "";
      return {
        label: `CBT${selectedSensorId}`,
        data: infoChart.map(entry => entry[item?.sensor] || null).slice(0, 500),
        fill: false,
        borderColor: borderColors[index % borderColors.length],
        backgroundColor: borderColors[index % borderColors.length],
        tension: 0.1,
      };
    }
    return null; // Handle invalid index gracefully
  });

  var time = [];                                        // for chart time
  for (let index = 0; index < info.length; index++) {
    time[index] = info[index]?.time; 
  }

  const data = {
    labels: time.slice(0, 500),
    datasets,
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const handleSensorClick = index => {
    const isSelected = selectedSensorIndexes.includes(index);
    if (isSelected) {
      setSelectedSensorIndexes(prevIndexes =>
        prevIndexes.filter(prevIndex => prevIndex !== index)
      );
    } else {
      setSelectedSensorIndexes(prevIndexes => [...prevIndexes, index]);
    }
  };

  return (
    <>
      <div className="overlay-graph-dash" onClick={clearSelection} />

      {infoChart.length !== 0 ? (
        <div className="chartdash">
        <div className="chart">
          <div className="btn">
          <div className="btn1 font-mono" onClick={() => infoSet('btn1')}>100 Values</div>
          <div className="btn2 font-mono" onClick={() => infoSet('btn2')}>200 Values</div>
          <div className="btn2 font-mono" onClick={() => infoSet('btn3')}>menu</div>
          </div>
          <Line data={data} options={options} />
        </div>
        <div className="chartSelection">
          <div className="box-dash">
            {chartData.map((item, index) => (
              <div
                className={`box-chart-dash ${
                  selectedSensorIndexes.includes(index) ?"active" : ""
                }`}
                key={index}
                onClick={() => handleSensorClick(index)}
              >
                <span className="text-base">{item.sensorName}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      ) : (
        <div className="load">
          <div class="loader">
            <div class="inner one"></div>
            <div class="inner two"></div>
            <div class="inner three"></div>
          </div>
        </div>
      ) }
    </>
  );
};


export default ChartDash;
