import React, { useState, useEffect } from "react";
import "../dashboard/dashboard.scss";
import PopupDashboard from "../../components/popup_dashboard/PopupDashboard";
import Peak from "./Peak";
import NonActive from "./NonActive";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedWaveGuide, setSelectedWaveGuide] = useState(false);

  const [info, setInfo] = useState([]);
  const [error, setError] = useState(false);

  const [peak, setPeak] = useState([]);
  const [nonActive, setNonActive] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch("http://52.66.175.77/sensor/updated");
        const infoVal = await response.json();
        setInfo(infoVal);
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
  const nonActivelist = [];
  for (let index = 1; index <= 108; index++) {
    const sensor = `sensor${index}`;
    const sensorName = `CBT${index}`;
    const val = info[0]?.[sensor];
    sensorArray.push({sensor, sensorName, val});
    if(val === 0) {
      nonActivelist.push({sensorName});
    }
  }
  setNonActive(nonActivelist);
  const descending = sensorArray.sort((a, b) => b.val - a.val);
  setPeak (descending.slice(0, 5));
  },[info]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!info) {
    return <div>Loading...</div>;
  }
  const handleWaveGuideClick = (waveGuideNumber) => {
    setSelectedWaveGuide(waveGuideNumber);
  };

  return (
    <div className="dashboard">
      <div className="top">
        <div
          className="box bg-slate-200"
          onClick={() => {
            setIsOpen(true);
            handleWaveGuideClick(1);
          }}
        >
          <h3>waveGuide 1</h3>
          <span className="text-sm">(CBT1-CBT10)</span>
        </div>
        <div
          className="box"
          onClick={() => {
            setIsOpen(true);
            handleWaveGuideClick(2);
          }}
        >
          <h3>waveGuide 2</h3>
          <span className="text-sm">(CBT11-CBT20)</span>
        </div>
        <div
          className="box"
          onClick={() => {
            setIsOpen(true);
            handleWaveGuideClick(3);
          }}
        >
          <h3>waveGuide 3</h3>
          <span className="text-sm">(CBT21-CBT30)</span>
        </div>
        <div
          className="box"
          onClick={() => {
            setIsOpen(true);
            handleWaveGuideClick(4);
          }}
        >
          <h3>waveGuide 4</h3>
          <span className="text-sm">(CBT31-CBT40)</span>
        </div>
        <div
          className="box"
          onClick={() => {
            setIsOpen(true);
            handleWaveGuideClick(5);
          }}
        >
          <h3>waveGuide 5</h3>
          <span className="text-sm">(CBT41-CBT50)</span>
        </div>
        <div
          className="box"
          onClick={() => {
            setIsOpen(true);
            handleWaveGuideClick(6);
          }}
        >
          <h3>waveGuide 6</h3>
          <span className="text-sm">(CBT51-CBT60)</span>
        </div>
        <div
          className="box"
          onClick={() => {
            setIsOpen(true);
            handleWaveGuideClick(7);
          }}
        >
          <h3>waveGuide 7</h3>
          <span className="text-sm">(CBT61-CBT70)</span>
        </div>
        <div
          className="box"
          onClick={() => {
            setIsOpen(true);
            handleWaveGuideClick(8);
          }}
        >
          <h3>waveGuide 8</h3>
          <span className="text-sm">(CBT71-CBT80)</span>
        </div>
        <div
          className="box"
          onClick={() => {
            setIsOpen(true);
            handleWaveGuideClick(9);
          }}
        >
          <h3>waveGuide 9</h3>
          <span className="text-sm">(CBT81-CBT90)</span>
        </div>
        <div
          className="box"
          onClick={() => {
            setIsOpen(true);
            handleWaveGuideClick(10);
          }}
        >
          <h3>waveGuide 10</h3>
          <span className="text-sm">(CBT91-CBT100)</span>
        </div>
        <div
          className="box"
          onClick={() => {
            setIsOpen(true);
            handleWaveGuideClick(11);
          }}
        >
          <h3>waveGuide 11</h3>
          <span className="text-sm">(CBT101-CBT108)</span>
        </div>
        {/* <div className="box hide">
          <h3>waveGuide 12</h3>
        </div>
        <div className="box hide">
          <h3>waveGuide 13</h3>
        </div>
        <div className="box hide">
          <h3>waveGuide 14</h3>
        </div>
        <div className="box hide">
          <h3>waveGuide 15</h3>
        </div> */}

        <PopupDashboard
          open_dash={isOpen}
          onClose={() => setIsOpen(false)}
          waveGuide={selectedWaveGuide}
        />

      </div>

      <div className="bottom">
        <div className="peak"><Peak Peak={peak}/></div>
        <div className="nonactive w-1/3 "><NonActive nonActive={nonActive} /></div>
      </div>
    </div>

  );
};

export default Dashboard;
