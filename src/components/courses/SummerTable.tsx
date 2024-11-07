import useMediaQuery from "@/hooks/useMediaQuery";
import React from "react";

//summer 2024 schedule

const SummerTable = () => {
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
                  Introduction to Coding
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">Age</td>
                <td className="p-2">9-12</td>
              </tr>
              <tr className="bg-[#EEF0F6]">
                <td className="p-2">Course Period</td>
                <td className="p-2">
                  <div>
                    <p>Jun 22 - July 23</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-2">Time</td>
                <td className="p-2">
                  <div>
                    <p>Tue: 5:00-7:00 PM</p>
                    <p>Sat: 10:00AM-1:00 PM</p>
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
                    <p>July 3-5, 8-10</p>
                    <p className="text-[#5C5C5C] font-dm-mono tracking-tight">
                      6 days
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-2">Time</td>
                <td className="p-2">
                  <div>
                    <p>1:00-5:00 PM</p>
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
                    <p>July 24-26, 29-31</p>
                    <p className="text-[#5C5C5C] font-dm-mono tracking-tight">
                      6 days
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-2">Time</td>
                <td className="p-2">
                  <div>
                    <p>1:00-5:00 PM</p>
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
                  Web App Development
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
                    <p>July 15-19, 22-23</p>
                    <p className="text-[#5C5C5C] font-dm-mono tracking-tight">
                      7 days
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-2">Time</td>
                <td className="p-2">
                  <div>
                    <p>1:00-5:00 PM</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      ) : (
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
              <td className="px-4 py-7">
                <p>Introduction to Coding</p>
                <p className="text-[#5C5C5C] font-dm-mono text-xl tracking-tight">
                  Juniors
                </p>
              </td>
              <td className="px-4 py-7 text-right">9-12</td>
              <td className="px-4 py-7 text-right">
                <div className="flex flex-col gap-y-3">
                  <p>JUN 22 - July 23</p>
                </div>
              </td>
              <td className="px-4 py-7 text-right">
                <div className="flex flex-col gap-y-3">
                  <p>Tue: 5:00-7:00 PM</p>
                  <p>Sat: 10:00AM-1:00 PM</p>
                </div>
              </td>
            </tr>
            <tr className="text-2xl font-dm-sans bg-[#EEF0F6]">
              <td className="px-4 py-7">
                <p>Introduction to Coding</p>
                <p className="text-[#5C5C5C] font-dm-mono text-xl tracking-tight">
                  First session
                </p>
              </td>
              <td className="px-4 py-7 text-right">12+</td>
              <td className="px-4 py-7 text-right">
                <div className="flex flex-col gap-y-3">
                  <p>July 3-5, 8-10</p>
                  <p className="text-[#5C5C5C] font-dm-mono text-xl tracking-tight">
                    6 days
                  </p>
                </div>
              </td>
              <td className="px-4 py-7 text-right">
                <div className="flex flex-col gap-y-3">
                  <p>1:00-5:00 PM</p>
                </div>
              </td>
            </tr>
            <tr className="text-2xl font-dm-sans ">
              <td className="px-4 py-7">
                <p>Introduction to Coding</p>
                <p className="text-[#5C5C5C] font-dm-mono text-xl tracking-tight">
                  Second Session
                </p>
              </td>
              <td className="px-4 py-7 text-right">12+</td>
              <td className="px-4 py-7 text-right">
                <div className="flex flex-col gap-y-3">
                  <p>July 24-26, 29-31</p>
                  <p className="text-[#5C5C5C] font-dm-mono text-xl tracking-tight">
                    6 days
                  </p>
                </div>
              </td>
              <td className="px-4 py-7 text-right">
                <div className="flex flex-col gap-y-3">
                  <p>1:00-5:00 PM</p>
                </div>
              </td>
            </tr>
            <tr className="text-2xl font-dm-sans bg-[#EEF0F6]">
              <td className="px-4 py-7">
                <p>Web App Development</p>
              </td>
              <td className="px-4 py-7 text-right">12+</td>
              <td className="px-4 py-7 text-right">
                <div className="flex flex-col gap-y-3">
                  <p>July 15-19, 22-23</p>
                  <p className="text-[#5C5C5C] font-dm-mono text-xl tracking-tight">
                    7 days
                  </p>
                </div>
              </td>
              <td className="px-4 py-7 text-right">
                <div className="flex flex-col gap-y-3">
                  <p>1:00-5:00 PM</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
};

export default SummerTable;
