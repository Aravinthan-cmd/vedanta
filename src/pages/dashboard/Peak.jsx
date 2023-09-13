

const Peak = ({Peak}) => {

const sensorPeakName1 = Peak.length > 0 ? Peak[0].sensorName : "";
const sensorPeakName2 = Peak.length > 1 ? Peak[1].sensorName : "";
const sensorPeakName3 = Peak.length > 2 ? Peak[2].sensorName : "";
const sensorPeakName4 = Peak.length > 3 ? Peak[3].sensorName : "";
// const sensorPeakName5 = Peak.length > 4 ? Peak[4].sensorName : "";
const sensorPeackValue1 = Peak.length > 0 ? Peak[0].val : "";
const sensorPeackValue2 = Peak.length > 1 ? Peak[1].val : "";
const sensorPeackValue3 = Peak.length > 2 ? Peak[2].val : "";
const sensorPeackValue4 = Peak.length > 3 ? Peak[3].val : "";
// const sensorPeackValue5 = Peak.length > 4 ? Peak[4].val : "";

var sensor1Percentage;
var sensor2Percentage;
var sensor3Percentage;
var sensor4Percentage;
if(sensorPeackValue1) {
  const maxSensorValue = 200;
  sensor1Percentage = (sensorPeackValue1 / maxSensorValue) * 100;
  sensor2Percentage = (sensorPeackValue2 / maxSensorValue) * 100;
  sensor3Percentage = (sensorPeackValue3 / maxSensorValue) * 100;
  sensor4Percentage = (sensorPeackValue4 / maxSensorValue) * 100;
}

  return (
        <div className="box-content h-auto w-auto p-4 border-1 bg-slate-200 bg-blend-overlay my-8 rounded-xl media">
          <span className='text-base font-bold'>Peak sensors</span>
          <div className="flex flex-col">
            <div className="overflow-x-auto">
              <div className="p-1.5 w-full inline-block align-middle">
                <div className="overflow-hidden border rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                          S.NO
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                          Sensor
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                          Value
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                          Percentage
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 overflow-x-auto">
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          1
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {sensorPeakName1}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {sensorPeackValue1} °c
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          <div className="w-24 bg-gray-400">
                          <div
                              className="h-3.5 bg-blue-500 text-xs font-bold text-center text-white p-0.5 leading-none"
                              style={{ width: sensor1Percentage }}
                            >{sensor1Percentage}%</div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          2
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {sensorPeakName2}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {sensorPeackValue2} °c
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          <div className="w-24 bg-gray-400">
                          <div
                              className="h-3.5 bg-blue-500 text-xs font-bold text-center text-white p-0.5 leading-none"
                              style={{ width: sensor2Percentage }}
                            >{sensor2Percentage}%</div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          3
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {sensorPeakName3}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {sensorPeackValue3} °c
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          <div className="w-24 bg-gray-400">
                          <div
                              className="h-3.5 bg-blue-500 text-xs font-bold text-center text-white p-0.5 leading-none"
                              style={{ width: sensor3Percentage }}
                            >{sensor3Percentage}%</div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          4
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {sensorPeakName4}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {sensorPeackValue4} °c
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          <div className="w-24 bg-gray-400">
                            <div
                              className="h-3.5 bg-blue-500 text-xs font-bold text-center text-white p-0.5 leading-none"
                              style={{ width: sensor4Percentage }}
                            >{sensor4Percentage}%</div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Peak