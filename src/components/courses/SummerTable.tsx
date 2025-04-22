import useMediaQuery from "@/hooks/useMediaQuery";
import React from "react";

//summer 2025 schedule

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
                  AI Explorers 
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">Age</td>
                <td className="p-2">10+</td>
              </tr>
              <tr className="bg-[#EEF0F6]">
                <td className="p-2">Course Period</td>
                <td className="p-2">
                  <div>
                    <p>July 7 - July 11</p>
                    <p className="text-[#5C5C5C] font-dm-mono tracking-tight">
                      5 days
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-2">Time</td>
                <td className="p-2">
                  <div>
                    <p>2:00PM - 4:30PM</p>
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
                  Digital Dangers
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">Age</td>
                <td className="p-2">10+</td>
              </tr>
              <tr className="bg-[#EEF0F6]">
                <td className="p-2">Course Period</td>
                <td className="p-2">
                  <div>
                    <p>July 14 - July 18</p>
                    <p className="text-[#5C5C5C] font-dm-mono tracking-tight">
                      5 days
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-2">Time</td>
                <td className="p-2">
                  <div>
                    <p>2:00PM - 4:00 PM</p>
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
                  AI Explorers
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">Age</td>
                <td className="p-2">10+</td>
              </tr>
              <tr className="bg-[#EEF0F6]">
                <td className="p-2">Course Period</td>
                <td className="p-2">
                  <div>
                    <p>July 28 - Aug 1</p>
                    <p className="text-[#5C5C5C] font-dm-mono tracking-tight">
                      5 days
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-2">Time</td>
                <td className="p-2">
                  <div>
                    <p>1:30PM - 4:00 PM</p>
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
                  Digital Dangers
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">Age</td>
                <td className="p-2">10+</td>
              </tr>
              <tr className="bg-[#EEF0F6]">
                <td className="p-2">Course Period</td>
                <td className="p-2">
                  <div>
                    <p>Aug 4 - Aug 8</p>
                    <p className="text-[#5C5C5C] font-dm-mono tracking-tight">
                      5 days
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-2">Time</td>
                <td className="p-2">
                  <div>
                    <p>2:00PM - 4:00 PM</p>
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
                  Intro to Coding
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
                    <p>July 21 - Aug 1</p>
                    <p className="text-[#5C5C5C] font-dm-mono tracking-tight">
                      10 days. No class on weekends. 
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-2">Time</td>
                <td className="p-2">
                  <div>
                    <p>4:00PM - 6:30 PM</p>
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
                <p>AI Explorers</p>
              </td>
              <td className="px-4 py-7 text-right">10+</td>
              <td className="px-4 py-7 text-right">
                <div className="flex flex-col gap-y-3">
                  <p>July 7 - July 11</p>
                </div>
              </td>
              <td className="px-4 py-7 text-right">
                <div className="flex flex-col gap-y-3">
                  <p>2:00PM - 4:30PM</p>
                </div>
              </td>
            </tr>
            <tr className="text-2xl font-dm-sans bg-[#EEF0F6]">
              <td className="px-4 py-7">
                <p>Digital Dangers</p>
              </td>
              <td className="px-4 py-7 text-right">10+</td>
              <td className="px-4 py-7 text-right">
                <div className="flex flex-col gap-y-3">
                  <p>July 14 - July 18</p>
                </div>
              </td>
              <td className="px-4 py-7 text-right">
                <div className="flex flex-col gap-y-3">
                  <p>2:00PM - 4:00 PM</p>
                </div>
              </td>
            </tr>
            <tr className="text-2xl font-dm-sans ">
              <td className="px-4 py-7">
                <p>AI Explorers</p>
              </td>
              <td className="px-4 py-7 text-right">10+</td>
              <td className="px-4 py-7 text-right">
                <div className="flex flex-col gap-y-3">
                  <p>July 28 - Aug 1</p>
                </div>
              </td>
              <td className="px-4 py-7 text-right">
                <div className="flex flex-col gap-y-3">
                  <p>1:30PM - 4:00 PM</p>
                </div>
              </td>
            </tr>
            <tr className="text-2xl font-dm-sans bg-[#EEF0F6]">
              <td className="px-4 py-7">
                <p>Digital Dangers</p>
              </td>
              <td className="px-4 py-7 text-right">10+</td>
              <td className="px-4 py-7 text-right">
                <div className="flex flex-col gap-y-3">
                  <p>Aug 4 - Aug 8</p>
                </div>
              </td>
              <td className="px-4 py-7 text-right">
                <div className="flex flex-col gap-y-3">
                  <p>2:00PM - 4:00 PM</p>
                </div>
              </td>
            </tr>
            <tr className="text-2xl font-dm-sans ">
              <td className="px-4 py-7">
                <p>Introduction to Coding</p>
                <p className="text-[#5C5C5C] font-dm-mono text-xl tracking-tight">
                  No class on weekends.
                </p>
              </td>
              <td className="px-4 py-7 text-right">12+</td>
              <td className="px-4 py-7 text-right">
                <div className="flex flex-col gap-y-3">
                  <p>July 21 - Aug 1</p>
                  <p className="text-[#5C5C5C] font-dm-mono text-xl tracking-tight">
                    6 days
                  </p>
                </div>
              </td>
              <td className="px-4 py-7 text-right">
                <div className="flex flex-col gap-y-3">
                  <p>4:00PM - 6:30 PM</p>
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
