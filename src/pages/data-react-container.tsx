import { useState } from "react";
import Header from "./header";
import { TradingData } from "../interfaces/trading-data";
import "./data-react-container.scss";

export default function DataReactContainer() {
  const tradingDataInitValue: Array<TradingData> = [
    {
      id: 1,
      symbol: "AAPL",
      price: 929.63,
      quantity: 97,
      date: "2023-07-16",
      transaction_type: "BUY",
      market: "NASDAQ",
      status: "PENDING",
      broker: "Broker B",
      open_price: 824.31,
      high_price: 823.81,
      low_price: 397.76,
      closing_price: 222.64,
      net_change: -20.21,
      currency: "EUR",
    },
    {
      id: 2,
      symbol: "AMZN",
      price: 519.47,
      quantity: 51,
      date: "2015-02-26",
      transaction_type: "BUY",
      market: "HKEX",
      status: "COMPLETE",
      broker: "Broker A",
      open_price: 208.16,
      high_price: 693.88,
      low_price: 786.16,
      closing_price: 220.12,
      net_change: -26.3,
      currency: "USD",
    },
    {
      id: 3,
      symbol: "MSFT",
      price: 562.06,
      quantity: 58,
      date: "2013-09-25",
      transaction_type: "BUY",
      market: "CME",
      status: "COMPLETE",
      broker: "Broker A",
      open_price: 105.69,
      high_price: 782.56,
      low_price: 920.57,
      closing_price: 199.26,
      net_change: 13.49,
      currency: "EUR",
    },
  ];

  const [tradingData, setTradingData] = useState(tradingDataInitValue);
  return (
    <div>
      <Header headerTitle="Data React" />
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Date</th>
            <th>Type</th>
            <th>Market</th>
            <th>Status</th>
            <th>Broker</th>
            <th>Open</th>
            <th>High</th>
            <th>Low</th>
            <th>Closing</th>
            <th>Net Change</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {tradingData.map((tradingInfo) => (
            <tr key={tradingInfo.id}>
              <td>{tradingInfo.symbol}</td>
              <td>{tradingInfo.price}</td>
              <td>{tradingInfo.quantity}</td>
              <td>{tradingInfo.date}</td>
              <td>{tradingInfo.transaction_type}</td>
              <td>{tradingInfo.market}</td>
              <td>{tradingInfo.status}</td>
              <td>{tradingInfo.broker}</td>
              <td>{tradingInfo.open_price}</td>
              <td>{tradingInfo.high_price}</td>
              <td>{tradingInfo.low_price}</td>
              <td>{tradingInfo.closing_price}</td>
              <td>{tradingInfo.net_change}</td>
              <td>{tradingInfo.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
