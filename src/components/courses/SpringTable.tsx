import useMediaQuery from "@/hooks/useMediaQuery";
import React from "react";

const SpringTable = () => {
  const isBreakPoint = useMediaQuery(768);

  return (
    <>
      {isBreakPoint ? (
        <>
          <table>
            <thead className="w-full">
              <tr className="bg-lighBlue">
                <th
                  colSpan={2}
                  className="text-left p-2 underline underline-offset-4"
                >
                  Website Design (UI/UX)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">Age</td>
                <td className="p-2">12+</td>
              </tr>
              <tr className="bg-[#EEF0F6]">
                <td className="p-2">Course Period</td>
                <td className="p-2">
                  <div>
                    <p>JAN 15 - May 14</p>
                    <p className="text-[#5C5C5C] font-dm-mono tracking-tight">
                      No class Jan 29, Feb 5
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-2">Time</td>
                <td className="p-2">
                  <div>
                    <p>Wed: 5:00-6:30 PM</p>
                    <p>Fri: 5:00-6:30 PM</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead className="w-full">
              <tr className="bg-lighBlue">
                <th
                  colSpan={2}
                  className="text-left p-2 underline underline-offset-4"
                >
                  Introduction to Coding
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">Age</td>
                <td className="p-2">12+</td>
              </tr>
              <tr className="bg-[#EEF0F6]">
                <td className="p-2">Course Period</td>
                <td className="p-2">
                  <div>
                    <p>Jan 14 - Dec 6</p>
                    <p className="text-[#5C5C5C] font-dm-mono tracking-tight">
                      No class Jan 28, Feb 4
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-2">Time</td>
                <td className="p-2">
                  <div>
                    <p>Tue: 5:00-6:30 PM</p>
                    <p>Fri: 3:00-4:30 PM</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead className="w-full">
              <tr className="bg-lighBlue">
                <th
                  colSpan={2}
                  className="text-left p-2 underline underline-offset-4"
                >
                  Introduction to Coding
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">Age</td>
                <td className="p-2">9+</td>
              </tr>
              <tr className="bg-[#EEF0F6]">
                <td className="p-2">Course Period</td>
                <td className="p-2">
                  <div>
                    <p>FEB 8 - JUN 14</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-2">Time</td>
                <td className="p-2">
                  <div>
                    <p>Sat: 10:30-12:30 PM</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      ) : (
        <>
          <table className="border rounded-xl border-grey">
            <thead className="bg-lighBlue">
              <tr className="font-dm-sans text-2xl font-bold">
                <th className="px-4 py-7 text-left">Course Name</th>
                <th className="px-4 py-7 text-right">Age</th>
                <th className="px-4 py-7 text-right">Course Period</th>
                <th className="px-4 py-7 text-right">Time</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-2xl font-dm-sans ">
                <td className="px-4 py-7">Website Design (UI/UX)</td>
                <td className="px-4 py-7 text-right">12+</td>
                <td className="px-4 py-7 text-right">
                  <div className="flex flex-col gap-y-3">
                    <p>JAN 15 - May 14</p>
                    <p className="text-[#5C5C5C] font-dm-mono text-xl tracking-tight">
                      No class Jan 29, Feb 5
                    </p>
                  </div>
                </td>
                <td className="px-4 py-7 text-right">
                  <div className="flex flex-col gap-y-3">
                    <p>Wed: 5:00-6:30 PM</p>
                    <p>Fri: 5:00-6:30 PM</p>
                  </div>
                </td>
              </tr>
              <tr className="text-2xl font-dm-sans bg-[#EEF0F6]">
                <td className="px-4 py-7">
                  <p>Introduction to Coding</p>
                  <p className="text-[#5C5C5C] font-dm-mono text-xl tracking-tight">
                    Weekday session
                  </p>
                </td>
                <td className="px-4 py-7 text-right">12+</td>
                <td className="px-4 py-7 text-right">
                  <div className="flex flex-col gap-y-3">
                    <p>Jan 14 - Dec 6</p>
                    <p className="text-[#5C5C5C] font-dm-mono text-xl tracking-tight">
                      No class Jan 28, Feb 4
                    </p>
                  </div>
                </td>
                <td className="px-4 py-7 text-right">
                  <div className="flex flex-col gap-y-3">
                    <p>Tue: 5:00-6:30 PM</p>
                    <p>Fri: 3:00-4:30 PM</p>
                  </div>
                </td>
              </tr>
              <tr className="text-2xl font-dm-sans ">
                <td className="px-4 py-7">
                  <p>Introduction to Coding</p>
                  <p className="text-[#5C5C5C] font-dm-mono text-xl tracking-tight">
                    Weekend session
                  </p>
                </td>
                <td className="px-4 py-7 text-right">9+</td>
                <td className="px-4 py-7 text-right">
                  <div className="flex flex-col gap-y-3">
                    <p>FEB 8 - JUN 14</p>
                  </div>
                </td>
                <td className="px-4 py-7 text-right">
                  <div className="flex flex-col gap-y-3">
                    <p>Sat: 10:30-12:30 PM</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default SpringTable;
