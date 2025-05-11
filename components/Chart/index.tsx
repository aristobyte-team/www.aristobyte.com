"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartTooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { Icons } from "@utils";
import "./Chart.scss";

const data = [
  {
    name: "Jan",
    applicants: 85,
    hired: 75,
    rejected: 65,
  },
  {
    name: "Feb",
    applicants: 70,
    hired: 60,
    rejected: 55,
  },
  {
    name: "Mar",
    applicants: 85,
    hired: 75,
    rejected: 65,
  },
  {
    name: "Apr",
    applicants: 80,
    hired: 70,
    rejected: 60,
  },
  {
    name: "May",
    applicants: 95,
    hired: 85,
    rejected: 75,
  },
  {
    name: "Jun",
    applicants: 80,
    hired: 70,
    rejected: 60,
  },
  {
    name: "Jul",
    applicants: 70,
    hired: 65,
    rejected: 55,
  },
  {
    name: "Aug",
    applicants: 90,
    hired: 85,
    rejected: 75,
  },
];

export type TooltipPropsType = {
  active?: boolean;
  payload?: {
    name: string;
    value: string | number;
  }[];
  label?: string;
};

const Tooltip = ({ active, payload, label }: TooltipPropsType) => {
  if (!active || !payload || !payload.length) {
    return null;
  }

  return (
    <div className="chart__tooltip">
      <span
        className="chart__tooltip-icon"
        dangerouslySetInnerHTML={{ __html: Icons.Logo }}
      />
      <p className="chart__tooltip-label">{label}</p>
      <ul className="chart__tooltip-list">
        {payload.map((entry, index) => (
          <li className="chart__tooltip-item" key={index}>
            <p>
              <span>
                {entry.name.charAt(0).toUpperCase() +
                  entry.name.slice(1) +
                  ": "}
              </span>
              <span>{entry.value + "%"}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Chart = () => (
  <div className="chart">
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} barGap={4}>
        <CartesianGrid strokeDasharray="3 3" stroke="#000" />
        <XAxis dataKey="name" stroke="#aeaeae" />
        <YAxis
          stroke="#aeaeae"
          domain={[0, 100]}
          tickFormatter={(tick) => `${tick}%`}
        />
        <RechartTooltip
          cursor={{ fill: "#1a1b22", opacity: 1 }}
          content={<Tooltip />}
        />
        <Legend
          verticalAlign="top"
          height={36}
          wrapperStyle={{ color: "#aeaeae" }}
        />
        <Bar dataKey="applicants" fill="url(#applicants)" />
        <Bar dataKey="hired" fill="url(#hired)" />
        <Bar dataKey="rejected" fill="url(#rejected)" />
        <defs>
          <linearGradient id="applicants" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffee27" />
            <stop offset="100%" stopColor="#fec800" />
          </linearGradient>
          <linearGradient id="hired" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f18e35" />
            <stop offset="100%" stopColor="#ff8800" />
          </linearGradient>
          <linearGradient id="rejected" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e95f32" />
            <stop offset="100%" stopColor="#e2312d" />
          </linearGradient>
        </defs>
      </BarChart>
    </ResponsiveContainer>
  </div>
);
