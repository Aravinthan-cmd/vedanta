import React from 'react'
import { useEffect, useState } from 'react'
import '../2Dmodel/diagram.scss'

const generateColor = (sensorArray) => {
  const color = [];
  for (let index = 0; index < sensorArray.length; index++) {
    const element = parseInt(sensorArray[index].val);
    if (element > 0 && element <= 30) {
      color.push('#059669')
    }else if (element > 30 && element < 400) {
      color.push('#FCD34D')
    }else if (element > 400) {
      color.push('#F87171')
    }else {
      color.push('#112B3C')
    }
  }
  return color;
}

const Diagram = () => {
  const [infoDiagram, setInfoDiagram] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://52.66.175.77/sensor/updated");
        const infoVal = await response.json();
        setInfoDiagram(infoVal);
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

  if (error) {
    return <div>Error: {error.message}</div>;
  }

const sensorArray = [];
  for (let index = 1; index <= 108; index++) {
    const sensor = `sensor${index}`;
    const sensorName = `CBT${index}`;
    const val = infoDiagram[0]?.[sensor];
    sensorArray.push({sensorName, val});
  }

  const color = generateColor(sensorArray);

  return (
    <div className='container-diagram'>

      <div className="outer-frame">
        <div className="sidebar-frame-left"></div>
        
        <div className="frame">
          <div className="container1">
              <div className="bg">
              <div className="line-left"></div>
              <div className="left">
              <div className="bar1" style={{backgroundColor: `${color[0]}`}}>
                <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[0].sensorName}</div>
                    <div className="value">Value: {sensorArray[0].val}</div>
                  </div>
                </div>
              </div>
              </div>
              <div className="right">
              <div className="bar2" style={{backgroundColor: `${color[1]}`}}>
                <div className="popup">
                <div className="stick"></div>
                  <div className="flag">

                    <div className="name">Sensor: {sensorArray[1].sensorName}</div>
                    <div className="value">Value: {sensorArray[1].val}</div>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div className="bg">
              <div className="line-left"></div>
              <div className="left">
                <div className="bar1" style={{backgroundColor: `${color[2]}`}}>
                <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                
                    <div className="name">Sensor: {sensorArray[2].sensorName}</div>
                    <div className="value">Value: {sensorArray[2].val}</div>
                  </div>
                </div>
                </div>
              </div>
              <div className="right">
              <div className="bar2" style={{backgroundColor: `${color[3]}`}}>
              <div className="popup">
                <div className="stick"></div>
                  <div className="flag">
                    
                    <div className="name">Sensor: {sensorArray[3].sensorName}</div>
                    <div className="value">Value: {sensorArray[3].val}</div>
                  </div>
              </div>
              </div>
              </div>
            </div>
            <div className="bg">
              <div className="line-left"></div>
              <div className="left">
                <div className="bar1" style={{backgroundColor: `${color[4]}`}}>
                  <div className="popup">
                    <div className="stick"></div>
                  <div className="flag">
                    
                    <div className="name">Sensor: {sensorArray[4].sensorName}</div>
                    <div className="value">Value: {sensorArray[4].val}</div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="right">
              <div className="bar2" style={{backgroundColor: `${color[5]}`}}>
              <div className="popup">
                <div className="stick"></div>
                  <div className="flag">
                    
                    <div className="name">Sensor: {sensorArray[5].sensorName}</div>
                    <div className="value">Value: {sensorArray[5].val}</div>
                  </div>
              </div>
              </div>
              </div>
            </div>
            <div className="bg">
              <div className="line-left"></div>
              <div className="left">
                <div className="bar1" style={{backgroundColor: `${color[6]}`}}>
                  <div className="popup">
                    <div className="stick"></div>
                  <div className="flag">
                    
                    <div className="name">Sensor: {sensorArray[6].sensorName}</div>
                    <div className="value">Value: {sensorArray[6].val}</div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="right">
              <div className="bar2" style={{backgroundColor: `${color[7]}`}}>
                <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[7].sensorName}</div>
                    <div className="value">Value: {sensorArray[7].val}</div>
                  </div>
                </div>
              </div>
              </div>
            </div><div className="bg">
              <div className="line-left"></div>
              <div className="left">
                <div className="bar1" style={{backgroundColor: `${color[8]}`}}>
                  <div className="popup">
                    <div className="stick"></div>
                  <div className="flag">
                    
                    <div className="name">Sensor: {sensorArray[8].sensorName}</div>
                    <div className="value">Value: {sensorArray[8].val}</div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="right">
              <div className="bar2" style={{backgroundColor: `${color[9]}`}}>
                <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    
                    <div className="name">Sensor: {sensorArray[9].sensorName}</div>
                    <div className="value">Value: {sensorArray[9].val}</div>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div className="bg">
              <div className="line-left"></div>
              <div className="left">
                <div className="bar1" style={{backgroundColor: `${color[10]}`}}>
                  <div className="popup">
                    <div className="stick"></div>
                  <div className="flag">
                    
                    <div className="name">Sensor: {sensorArray[10].sensorName}</div>
                    <div className="value">Value: {sensorArray[10].val}</div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="right">
              <div className="bar2" style={{backgroundColor: `${color[11]}`}}>
                <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    
                    <div className="name">Sensor: {sensorArray[11].sensorName}</div>
                    <div className="value">Value: {sensorArray[11].val}</div>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div className="bg">
              <div className="line-left"></div>
              <div className="left">
                <div className="bar1" style={{backgroundColor: `${color[12]}`}}>
                  <div className="popup">
                    <div className="stick"></div>
                  <div className="flag">
                    
                    <div className="name">Sensor: {sensorArray[12].sensorName}</div>
                    <div className="value">Value: {sensorArray[12].val}</div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="right">
              <div className="bar2" style={{backgroundColor: `${color[13]}`}}>
                <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    
                    <div className="name">Sensor: {sensorArray[13].sensorName}</div>
                    <div className="value">Value: {sensorArray[13].val}</div>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div className="bg">
              <div className="line-left"></div>
              <div className="left">
                <div className="bar1" style={{backgroundColor: `${color[14]}`}}>
                  <div className="popup">
                    <div className="stick"></div>
                  <div className="flag">
                    
                    <div className="name">Sensor: {sensorArray[14].sensorName}</div>
                    <div className="value">Value: {sensorArray[14].val}</div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="right">
              <div className="bar2" style={{backgroundColor: `${color[15]}`}}>
                <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    
                    <div className="name">Sensor: {sensorArray[15].sensorName}</div>
                    <div className="value">Value: {sensorArray[15].val}</div>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div className="bg">
              <div className="line-left"></div>
              <div className="left">
                <div className="bar1" style={{backgroundColor: `${color[16]}`}}>
                  <div className="popup">
                    <div className="stick"></div>
                  <div className="flag">
                    
                    <div className="name">Sensor: {sensorArray[16].sensorName}</div>
                    <div className="value">Value: {sensorArray[16].val}</div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="right">
              <div className="bar2" style={{backgroundColor: `${color[17]}`}}>
                <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    
                    <div className="name">Sensor: {sensorArray[17].sensorName}</div>
                    <div className="value">Value: {sensorArray[17].val}</div>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div className="bg">
              <div className="line-left"></div>
              <div className="left">
                <div className="bar1" style={{backgroundColor: `${color[18]}`}}>
                  <div className="popup">
                    <div className="stick"></div>
                  <div className="flag">
                    
                    <div className="name">Sensor: {sensorArray[18].sensorName}</div>
                    <div className="value">Value: {sensorArray[18].val}</div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="right">
              <div className="bar2" style={{backgroundColor: `${color[19]}`}}>
                <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    
                    <div className="name">Sensor: {sensorArray[19].sensorName}</div>
                    <div className="value">Value: {sensorArray[19].val}</div>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div className="bg">
              <div className="line-left"></div>
              <div className="left">
                <div className="bar1" style={{backgroundColor: `${color[20]}`}}>
                  <div className="popup">
                    <div className="stick"></div>
                  <div className="flag">
                    
                    <div className="name">Sensor: {sensorArray[20].sensorName}</div>
                    <div className="value">Value: {sensorArray[20].val}</div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="right">
              <div className="bar2" style={{backgroundColor: `${color[21]}`}}>
                <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    
                    <div className="name">Sensor: {sensorArray[21].sensorName}</div>
                    <div className="value">Value: {sensorArray[21].val}</div>
                  </div>
                </div>
              </div>
              </div>
            </div><div className="bg">
              <div className="line-left"></div>
              <div className="left">
                <div className="bar1" style={{backgroundColor: `${color[22]}`}}>
                  <div className="popup">
                    <div className="stick"></div>
                  <div className="flag">
                    
                    <div className="name">Sensor: {sensorArray[22].sensorName}</div>
                    <div className="value">Value: {sensorArray[22].val}</div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="right">
              <div className="bar2" style={{backgroundColor: `${color[23]}`}}>
                <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    
                    <div className="name">Sensor: {sensorArray[23].sensorName}</div>
                    <div className="value">Value: {sensorArray[23].val}</div>
                  </div>
                </div>
              </div>
              </div>
            </div><div className="bg">
              <div className="line-left"></div>
              <div className="left">
                <div className="bar1" style={{backgroundColor: `${color[24]}`}}>
                  <div className="popup">
                    <div className="stick"></div>
                  <div className="flag">
                    
                    <div className="name">Sensor: {sensorArray[24].sensorName}</div>
                    <div className="value">Value: {sensorArray[24].val}</div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="right">
              <div className="bar2" style={{backgroundColor: `${color[25]}`}}>
                <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    
                    <div className="name">Sensor: {sensorArray[25].sensorName}</div>
                    <div className="value">Value: {sensorArray[25].val}</div>
                  </div>
                </div>
              </div>
              </div>
            </div><div className="bg">
              <div className="line-left"></div>
              <div className="left">
                <div className="bar1" style={{backgroundColor: `${color[26]}`}}>
                  <div className="popup">
                    <div className="stick"></div>
                  <div className="flag">
                    
                    <div className="name">Sensor: {sensorArray[26].sensorName}</div>
                    <div className="value">Value: {sensorArray[26].val}</div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="right">
              <div className="bar2" style={{backgroundColor: `${color[27]}`}}>
                <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    
                    <div className="name">Sensor: {sensorArray[27].sensorName}</div>
                    <div className="value">Value: {sensorArray[27].val}</div>
                  </div>
                </div>
              </div>
              </div>
            </div><div className="bg">
              <div className="line-left"></div>
              <div className="left">
                <div className="bar1" style={{backgroundColor: `${color[28]}`}}>
                  <div className="popup">
                    <div className="stick"></div>
                  <div className="flag">
                    
                    <div className="name">Sensor: {sensorArray[28].sensorName}</div>
                    <div className="value">Value: {sensorArray[28].val}</div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="right">
              <div className="bar2" style={{backgroundColor: `${color[29]}`}}>
                <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    
                    <div className="name">Sensor: {sensorArray[29].sensorName}</div>
                    <div className="value">Value: {sensorArray[29].val}</div>
                  </div>
                </div>
              </div>
              </div>
            </div><div className="bg">
              <div className="line-left"></div>
              <div className="left">
                <div className="bar1" style={{backgroundColor: `${color[30]}`}}>
                  <div className="popup">
                    <div className="stick"></div>
                  <div className="flag">
                    
                    <div className="name">Sensor: {sensorArray[30].sensorName}</div>
                    <div className="value">Value: {sensorArray[30].val}</div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="right">
              <div className="bar2" style={{backgroundColor: `${color[31]}`}}>
                <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    
                    <div className="name">Sensor: {sensorArray[31].sensorName}</div>
                    <div className="value">Value: {sensorArray[31].val}</div>
                  </div>
                </div>
              </div>
              </div>
            </div><div className="bg">
              <div className="line-left"></div>
              <div className="left">
                <div className="bar1" style={{backgroundColor: `${color[32]}`}}>
                  <div className="popup">
                    <div className="stick"></div>
                  <div className="flag">
                    
                    <div className="name">Sensor: {sensorArray[32].sensorName}</div>
                    <div className="value">Value: {sensorArray[32].val}</div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="right">
              <div className="bar2" style={{backgroundColor: `${color[33]}`}}>
                <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    
                    <div className="name">Sensor: {sensorArray[33].sensorName}</div>
                    <div className="value">Value: {sensorArray[33].val}</div>
                  </div>
                </div>
              </div>
              </div>
            </div><div className="bg">
              <div className="line-left"></div>
              <div className="left">
                <div className="bar1" style={{backgroundColor: `${color[34]}`}}>
                  <div className="popup">
                    <div className="stick"></div>
                  <div className="flag">
                    
                    <div className="name">Sensor: {sensorArray[34].sensorName}</div>
                    <div className="value">Value: {sensorArray[34].val}</div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="right">
              <div className="bar2" style={{backgroundColor: `${color[35]}`}}>
                <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    
                    <div className="name">Sensor: {sensorArray[35].sensorName}</div>
                    <div className="value">Value: {sensorArray[35].val}</div>
                  </div>
                </div>
              </div>
              </div>
            </div><div className="bg">
              <div className="line-left"></div>
              <div className="left">
                <div className="bar1" style={{backgroundColor: `${color[36]}`}}>
                  <div className="popup">
                    <div className="stick"></div>
                  <div className="flag">
                    
                    <div className="name">Sensor: {sensorArray[36].sensorName}</div>
                    <div className="value">Value: {sensorArray[36].val}</div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="right">
              <div className="bar2" style={{backgroundColor: `${color[37]}`}}>
                <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    
                    <div className="name">Sensor: {sensorArray[37].sensorName}</div>
                    <div className="value">Value: {sensorArray[37].val}</div>
                  </div>
                </div>
              </div>
              </div>
            </div><div className="bg">
              <div className="line-left"></div>
              <div className="left">
                <div className="bar1" style={{backgroundColor: `${color[38]}`}}>
                  <div className="popup">
                    <div className="stick"></div>
                  <div className="flag">
                    
                    <div className="name">Sensor: {sensorArray[38].sensorName}</div>
                    <div className="value">Value: {sensorArray[38].val}</div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="right">
              <div className="bar2" style={{backgroundColor: `${color[39]}`}}>
                <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    
                    <div className="name">Sensor: {sensorArray[39].sensorName}</div>
                    <div className="value">Value: {sensorArray[39].val}</div>
                  </div>
                </div>
              </div>
              </div>
            </div><div className="bg">
              <div className="line-left"></div>
              <div className="left">
                <div className="bar1" style={{backgroundColor: `${color[40]}`}}>
                  <div className="popup">
                    <div className="stick"></div>
                  <div className="flag">
                    
                    <div className="name">Sensor: {sensorArray[40].sensorName}</div>
                    <div className="value">Value: {sensorArray[40].val}</div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="right">
              <div className="bar2" style={{backgroundColor: `${color[41]}`}}>
                <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    
                    <div className="name">Sensor: {sensorArray[41].sensorName}</div>
                    <div className="value">Value: {sensorArray[41].val}</div>
                  </div>
                </div>
              </div>
              </div>
            </div><div className="bg">
              <div className="line-left"></div>
              <div className="left">
                <div className="bar1" style={{backgroundColor: `${color[42]}`}}>
                  <div className="popup">
                    <div className="stick"></div>
                  <div className="flag">
                    
                    <div className="name">Sensor: {sensorArray[42].sensorName}</div>
                    <div className="value">Value: {sensorArray[42].val}</div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="right">
              <div className="bar2" style={{backgroundColor: `${color[43]}`}}>
                <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    
                    <div className="name">Sensor: {sensorArray[43].sensorName}</div>
                    <div className="value">Value: {sensorArray[43].val}</div>
                  </div>
                </div>
              </div>
              </div>
            </div><div className="bg">
              <div className="line-left"></div>
              <div className="left">
                <div className="bar1" style={{backgroundColor: `${color[44]}`}}>
                  <div className="popup">
                    <div className="stick"></div>
                  <div className="flag">
                    
                    <div className="name">Sensor: {sensorArray[44].sensorName}</div>
                    <div className="value">Value: {sensorArray[44].val}</div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="right">
              <div className="bar2" style={{backgroundColor: `${color[45]}`}}>
                <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    
                    <div className="name">Sensor: {sensorArray[45].sensorName}</div>
                    <div className="value">Value: {sensorArray[45].val}</div>
                  </div>
                </div>
              </div>
              </div>
            </div><div className="bg">
              <div className="line-left"></div>
              <div className="left">
                <div className="bar1" style={{backgroundColor: `${color[46]}`}}>
                  <div className="popup">
                    <div className="stick"></div>
                  <div className="flag">
                    
                    <div className="name">Sensor: {sensorArray[46].sensorName}</div>
                    <div className="value">Value: {sensorArray[46].val}</div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="right">
              <div className="bar2" style={{backgroundColor: `${color[47]}`}}>
                <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    
                    <div className="name">Sensor: {sensorArray[47].sensorName}</div>
                    <div className="value">Value: {sensorArray[47].val}</div>
                  </div>
                </div>
              </div>
              </div>
            </div><div className="bg">
              <div className="line-left"></div>
              <div className="left">
                <div className="bar1" style={{backgroundColor: `${color[48]}`}}>
                  <div className="popup">
                    <div className="stick"></div>
                  <div className="flag">
                    
                    <div className="name">Sensor: {sensorArray[48].sensorName}</div>
                    <div className="value">Value: {sensorArray[48].val}</div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="right">
              <div className="bar2" style={{backgroundColor: `${color[49]}`}}>
                <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    
                    <div className="name">Sensor: {sensorArray[49].sensorName}</div>
                    <div className="value">Value: {sensorArray[49].val}</div>
                  </div>
                </div>
              </div>
              </div>
            </div><div className="bg">
              <div className="line-left"></div>
              <div className="left">
                <div className="bar1" style={{backgroundColor: `${color[50]}`}}>
                  <div className="popup">
                    <div className="stick"></div>
                  <div className="flag">
                    
                    <div className="name">Sensor: {sensorArray[50].sensorName}</div>
                    <div className="value">Value: {sensorArray[50].val}</div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="right">
              <div className="bar2" style={{backgroundColor: `${color[51]}`}}>
                <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    
                    <div className="name">Sensor: {sensorArray[51].sensorName}</div>
                    <div className="value">Value: {sensorArray[51].val}</div>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div className="bg">
              <div className="line-left"></div>
              <div className="left">
                <div className="bar1" style={{backgroundColor: `${color[52]}`}}>
                  <div className="popup">
                    <div className="stick"></div>
                  <div className="flag">
                    
                    <div className="name">Sensor: {sensorArray[52].sensorName}</div>
                    <div className="value">Value: {sensorArray[52].val}</div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="right">
              <div className="bar2" style={{backgroundColor: `${color[53]}`}}>
                <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[53].sensorName}</div>
                    <div className="value">Value: {sensorArray[53].val}</div>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div className="line"></div>
          </div>

          {/* container2 */}
          <div className="container2">
              <div className="bg">
              <div className="line-left"></div>
              <div className="left">
              <div className="bar1" style={{backgroundColor: `${color[54]}`}}>
              <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[54].sensorName}</div>
                    <div className="value">Value: {sensorArray[54].val}</div>
                  </div>
                </div>
              </div>
              </div>
              <div className="right">
              <div className="bar2" style={{backgroundColor: `${color[55]}`}}>
              <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[55].sensorName}</div>
                    <div className="value">Value: {sensorArray[55].val}</div>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div className="bg">
              <div className="line-left"></div>
              <div className="left">
                <div className="bar1" style={{backgroundColor: `${color[56]}`}}>
                  <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[56].sensorName}</div>
                    <div className="value">Value: {sensorArray[56].val}</div>
                  </div>
                </div>
                </div>
              </div>
              <div className="right">
              <div className="bar2" style={{backgroundColor: `${color[57]}`}}>
              <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[57].sensorName}</div>
                    <div className="value">Value: {sensorArray[57].val}</div>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div className="bg">
              <div className="line-left"></div>
              <div className="left">
                <div className="bar1" style={{backgroundColor: `${color[58]}`}}>
                  <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[58].sensorName}</div>
                    <div className="value">Value: {sensorArray[58].val}</div>
                  </div>
                </div>
                </div>
              </div>
              <div className="right">
              <div className="bar2" style={{backgroundColor: `${color[59]}`}}>
                <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[59].sensorName}</div>
                    <div className="value">Value: {sensorArray[59].val}</div>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div className="bg">
              <div className="line-left"></div>
              <div className="left">
                <div className="bar1" style={{backgroundColor: `${color[60]}`}}>
                  <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[60].sensorName}</div>
                    <div className="value">Value: {sensorArray[60].val}</div>
                  </div>
                </div>
                </div>
              </div>
              <div className="right">
              <div className="bar2" style={{backgroundColor: `${color[61]}`}}>
                <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[61].sensorName}</div>
                    <div className="value">Value: {sensorArray[61].val}</div>
                  </div>
                </div>
              </div>
              </div>
            </div><div className="bg">
              <div className="line-left"></div>
              <div className="left">
                <div className="bar1" style={{backgroundColor: `${color[62]}`}}>
                  <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[62].sensorName}</div>
                    <div className="value">Value: {sensorArray[62].val}</div>
                  </div>
                </div>
                </div>
              </div>
              <div className="right">
              <div className="bar2" style={{backgroundColor: `${color[63]}`}}>
                <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[63].sensorName}</div>
                    <div className="value">Value: {sensorArray[63].val}</div>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div className="bg">
              <div className="line-left"></div>
              <div className="left">
                <div className="bar1" style={{backgroundColor: `${color[64]}`}}>
                  <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[64].sensorName}</div>
                    <div className="value">Value: {sensorArray[64].val}</div>
                  </div>
                </div>
                </div>
              </div>
              <div className="right">
              <div className="bar2" style={{backgroundColor: `${color[65]}`}}>
                <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[65].sensorName}</div>
                    <div className="value">Value: {sensorArray[65].val}</div>
                  </div>
                </div>
              </div>
              </div>
            </div>

            <div className="bg">
              <div className="line-left"></div>
              <div className="left">
                <div className="bar1" style={{backgroundColor: `${color[66]}`}}>
                  <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[66].sensorName}</div>
                    <div className="value">Value: {sensorArray[66].val}</div>
                  </div>
                </div>
                </div>
              </div>
              <div className="right">
              <div className="bar2" style={{backgroundColor: `${color[67]}`}}>
                <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[67].sensorName}</div>
                    <div className="value">Value: {sensorArray[67].val}</div>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div className="bg">
              <div className="line-left"></div>
              <div className="left">
                <div className="bar1" style={{backgroundColor: `${color[68]}`}}>
                  <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[68].sensorName}</div>
                    <div className="value">Value: {sensorArray[68].val}</div>
                  </div>
                </div>
                </div>
              </div>
              <div className="right">
              <div className="bar2" style={{backgroundColor: `${color[69]}`}}>
                <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[69].sensorName}</div>
                    <div className="value">Value: {sensorArray[69].val}</div>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div className="bg">
              <div className="line-left"></div>
              <div className="left">
                <div className="bar1" style={{backgroundColor: `${color[70]}`}}>
                  <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[70].sensorName}</div>
                    <div className="value">Value: {sensorArray[70].val}</div>
                  </div>
                </div>
                </div>
              </div>
              <div className="right">
              <div className="bar2" style={{backgroundColor: `${color[71]}`}}>
                <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[71].sensorName}</div>
                    <div className="value">Value: {sensorArray[71].val}</div>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div className="bg">
              <div className="line-left"></div>
              <div className="left">
                <div className="bar1" style={{backgroundColor: `${color[72]}`}}>
                  <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[72].sensorName}</div>
                    <div className="value">Value: {sensorArray[72].val}</div>
                  </div>
                </div>
                </div>
              </div>
              <div className="right">
              <div className="bar2" style={{backgroundColor: `${color[73]}`}}>
                <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[73].sensorName}</div>
                    <div className="value">Value: {sensorArray[73].val}</div>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div className="bg">
              <div className="line-left"></div>
              <div className="left">
                <div className="bar1" style={{backgroundColor: `${color[74]}`}}>
                  <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[74].sensorName}</div>
                    <div className="value">Value: {sensorArray[74].val}</div>
                  </div>
                </div>
                </div>
              </div>
              <div className="right">
              <div className="bar2" style={{backgroundColor: `${color[75]}`}}>
                <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[75].sensorName}</div>
                    <div className="value">Value: {sensorArray[75].val}</div>
                  </div>
                </div>
              </div>
              </div>
            </div><div className="bg">
              <div className="line-left"></div>
              <div className="left">
                <div className="bar1" style={{backgroundColor: `${color[76]}`}}>
                  <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[76].sensorName}</div>
                    <div className="value">Value: {sensorArray[76].val}</div>
                  </div>
                </div>
                </div>
              </div>
              <div className="right">
              <div className="bar2" style={{backgroundColor: `${color[77]}`}}>
                <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[77].sensorName}</div>
                    <div className="value">Value: {sensorArray[77].val}</div>
                  </div>
                </div>
              </div>
              </div>
            </div><div className="bg">
              <div className="line-left"></div>
              <div className="left">
                <div className="bar1" style={{backgroundColor: `${color[78]}`}}>
                  <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[78].sensorName}</div>
                    <div className="value">Value: {sensorArray[78].val}</div>
                  </div>
                </div>
                </div>
              </div>
              <div className="right">
              <div className="bar2" style={{backgroundColor: `${color[79]}`}}>
                <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[79].sensorName}</div>
                    <div className="value">Value: {sensorArray[79].val}</div>
                  </div>
                </div>
              </div>
              </div>
            </div><div className="bg">
              <div className="line-left"></div>
              <div className="left">
                <div className="bar1" style={{backgroundColor: `${color[80]}`}}>
                  <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[80].sensorName}</div>
                    <div className="value">Value: {sensorArray[80].val}</div>
                  </div>
                </div>
                </div>
              </div>
              <div className="right">
              <div className="bar2" style={{backgroundColor: `${color[81]}`}}>
                <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[81].sensorName}</div>
                    <div className="value">Value: {sensorArray[81].val}</div>
                  </div>
                </div>
              </div>
              </div>
            </div><div className="bg">
              <div className="line-left"></div>
              <div className="left">
                <div className="bar1" style={{backgroundColor: `${color[82]}`}}>
                  <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[82].sensorName}</div>
                    <div className="value">Value: {sensorArray[82].val}</div>
                  </div>
                </div>
                </div>
              </div>
              <div className="right">
              <div className="bar2" style={{backgroundColor: `${color[83]}`}}>
                <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[83].sensorName}</div>
                    <div className="value">Value: {sensorArray[83].val}</div>
                  </div>
                </div>
              </div>
              </div>
            </div><div className="bg">
              <div className="line-left"></div>
              <div className="left">
                <div className="bar1" style={{backgroundColor: `${color[84]}`}}>
                  <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[84].sensorName}</div>
                    <div className="value">Value: {sensorArray[84].val}</div>
                  </div>
                </div>
                </div>
              </div>
              <div className="right">
              <div className="bar2" style={{backgroundColor: `${color[85]}`}}>
                <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[85].sensorName}</div>
                    <div className="value">Value: {sensorArray[85].val}</div>
                  </div>
                </div>
              </div>
              </div>
            </div><div className="bg">
              <div className="line-left"></div>
              <div className="left">
                <div className="bar1" style={{backgroundColor: `${color[86]}`}}>
                  <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[86].sensorName}</div>
                    <div className="value">Value: {sensorArray[86].val}</div>
                  </div>
                </div>
                </div>
              </div>
              <div className="right">
              <div className="bar2" style={{backgroundColor: `${color[87]}`}}>
                <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[87].sensorName}</div>
                    <div className="value">Value: {sensorArray[87].val}</div>
                  </div>
                </div>
              </div>
              </div>
            </div><div className="bg">
              <div className="line-left"></div>
              <div className="left">
                <div className="bar1" style={{backgroundColor: `${color[88]}`}}>
                  <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[88].sensorName}</div>
                    <div className="value">Value: {sensorArray[88].val}</div>
                  </div>
                </div>
                </div>
              </div>
              <div className="right">
              <div className="bar2" style={{backgroundColor: `${color[89]}`}}>
                <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[89].sensorName}</div>
                    <div className="value">Value: {sensorArray[89].val}</div>
                  </div>
                </div>
              </div>
              </div>
            </div><div className="bg">
              <div className="line-left"></div>
              <div className="left">
                <div className="bar1" style={{backgroundColor: `${color[90]}`}}>
                  <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[90].sensorName}</div>
                    <div className="value">Value: {sensorArray[90].val}</div>
                  </div>
                </div>
                </div>
              </div>
              <div className="right">
              <div className="bar2" style={{backgroundColor: `${color[91]}`}}>
                <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[91].sensorName}</div>
                    <div className="value">Value: {sensorArray[91].val}</div>
                  </div>
                </div>
              </div>
              </div>
            </div><div className="bg">
              <div className="line-left"></div>
              <div className="left">
                <div className="bar1" style={{backgroundColor: `${color[92]}`}}>
                  <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[92].sensorName}</div>
                    <div className="value">Value: {sensorArray[92].val}</div>
                  </div>
                </div>
                </div>
              </div>
              <div className="right">
              <div className="bar2" style={{backgroundColor: `${color[93]}`}}>
                <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[93].sensorName}</div>
                    <div className="value">Value: {sensorArray[93].val}</div>
                  </div>
                </div>
              </div>
              </div>
            </div><div className="bg">
              <div className="line-left"></div>
              <div className="left">
                <div className="bar1" style={{backgroundColor: `${color[94]}`}}>
                  <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[94].sensorName}</div>
                    <div className="value">Value: {sensorArray[94].val}</div>
                  </div>
                </div>
                </div>
              </div>
              <div className="right">
              <div className="bar2" style={{backgroundColor: `${color[95]}`}}>
                <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[95].sensorName}</div>
                    <div className="value">Value: {sensorArray[95].val}</div>
                  </div>
                </div>
              </div>
              </div>
            </div><div className="bg">
              <div className="line-left"></div>
              <div className="left">
                <div className="bar1" style={{backgroundColor: `${color[96]}`}}>
                  <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[96].sensorName}</div>
                    <div className="value">Value: {sensorArray[96].val}</div>
                  </div>
                </div>
                </div>
              </div>
              <div className="right">
              <div className="bar2" style={{backgroundColor: `${color[97]}`}}>
                <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[97].sensorName}</div>
                    <div className="value">Value: {sensorArray[97].val}</div>
                  </div>
                </div>
              </div>
              </div>
            </div><div className="bg">
              <div className="line-left"></div>
              <div className="left">
                <div className="bar1" style={{backgroundColor: `${color[98]}`}}>
                  <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[98].sensorName}</div>
                    <div className="value">Value: {sensorArray[98].val}</div>
                  </div>
                </div>
                </div>
              </div>
              <div className="right">
              <div className="bar2" style={{backgroundColor: `${color[99]}`}}>
                <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[99].sensorName}</div>
                    <div className="value">Value: {sensorArray[99].val}</div>
                  </div>
                </div>
              </div>
              </div>
            </div><div className="bg">
              <div className="line-left"></div>
              <div className="left">
                <div className="bar1" style={{backgroundColor: `${color[100]}`}}>
                  <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[100].sensorName}</div>
                    <div className="value">Value: {sensorArray[100].val}</div>
                  </div>
                </div>
                </div>
              </div>
              <div className="right">
              <div className="bar2" style={{backgroundColor: `${color[101]}`}}>
                <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[101].sensorName}</div>
                    <div className="value">Value: {sensorArray[101].val}</div>
                  </div>
                </div>
              </div>
              </div>
            </div><div className="bg">
              <div className="line-left"></div>
              <div className="left">
                <div className="bar1" style={{backgroundColor: `${color[102]}`}}>
                  <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[102].sensorName}</div>
                    <div className="value">Value: {sensorArray[102].val}</div>
                  </div>
                </div>
                </div>
              </div>
              <div className="right">
              <div className="bar2" style={{backgroundColor: `${color[103]}`}}>
                <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[103].sensorName}</div>
                    <div className="value">Value: {sensorArray[103].val}</div>
                  </div>
                </div>
              </div>
              </div>
            </div><div className="bg">
              <div className="line-left"></div>
              <div className="left">
                <div className="bar1" style={{backgroundColor: `${color[104]}`}}>
                  <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[104].sensorName}</div>
                    <div className="value">Value: {sensorArray[104].val}</div>
                  </div>
                </div>
                </div>
              </div>
              <div className="right">
              <div className="bar2" style={{backgroundColor: `${color[105]}`}}>
                <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[105].sensorName}</div>
                    <div className="value">Value: {sensorArray[105].val}</div>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div className="bg">
              <div className="line-left"></div>
              <div className="left">
                <div className="bar1" style={{backgroundColor: `${color[106]}`}}>
                  <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[106].sensorName}</div>
                    <div className="value">Value: {sensorArray[106].val}</div>
                  </div>
                </div>
                </div>
              </div>
              <div className="right">
              <div className="bar2" style={{backgroundColor: `${color[107]}`}}>
              <div className="popup">
                  <div className="stick"></div>
                  <div className="flag">
                    <div className="name">Sensor: {sensorArray[107].sensorName}</div>
                    <div className="value">Value: {sensorArray[107].val}</div>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div className="line"></div>
          </div>
        </div>
        <div className="sidebar-frame-right"></div>
    </div>

    </div>
  )
}

export default Diagram