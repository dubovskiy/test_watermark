import Widget1 from "./Widget1";
import Widget2 from "./Widget2";
import Widget3 from "./Widget3";

const Dashboard = () => {
    return (
        <div>
            <h2>Dashboard</h2>
            <div style={{ display: "flex", justifyContent: "space-around"}}>
                <Widget1 />
                <Widget2 />
            </div>
            <Widget3 />
        </div>
    )
}

export default Dashboard;
