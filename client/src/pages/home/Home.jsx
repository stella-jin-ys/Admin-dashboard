import "./home.scss";
import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import MyTable from "../../components/table/Table";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Home() {
  return (
    <div className="home" style={{ display: "flex" }}>
      <Sidebar style={{ flex: 1 }} />
      <div className="homeContainer" style={{ flex: 4 }}>
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Lastest Transactions</div>
          <MyTable />
        </div>
      </div>
    </div>
  );
}
