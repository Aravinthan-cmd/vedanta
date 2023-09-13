import React from 'react';

const NonActive = ({ nonActive }) => {
  const nonActiveSensors = nonActive.map((item) => item.sensorName);

  return (
    <div className="box-content h-72 w-auto bg-slate-200 mb-2 my-7 rounded-xl p-4 media">
      <span className='text-base font-bold'>Non-Active Sensors</span>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      colSpan={1}
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase" >
                      SENSOR
                    </th>
                    <th
                      colSpan={1}
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase" >
                      ACTIVE-STATE
                    </th>
                  </tr>
                </thead>
                <tbody>
                    {nonActiveSensors.length > 0 ? (
                      nonActiveSensors.map((sensor, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                            {sensor}
                          </td>
                          <td className="py-4 px-28 text-sm text-gray-800 whitespace-nowrap">
                            Non-active
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap"
                          colSpan={2} >
                          No items
                        </td>
                      </tr>
                    )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NonActive;
