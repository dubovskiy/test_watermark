import logo from './logo.svg';
import './App.css';
import Dashboard from "./components/Dashboard";
import html2canvas from "html2canvas";
import {useRef} from "react";
import { jsPDF } from "jspdf";

function App() {
    const ref = useRef(null);
    const savePdf = () => {

        const image = new Image();
        image.src = logo;
        image.onload = () => {
            html2canvas(ref.current).then(function(canvas) {
                const context = canvas.getContext('2d');
                const { width, height } = image;
                const componentWidth = ref.current.offsetWidth;

                context.globalAlpha = 0.2;
                context.drawImage(image, componentWidth - width, height / 2);
                const doc = new jsPDF("p", "mm", "a4");
                const imgData = canvas.toDataURL('image/png');
                const imgProps = doc.getImageProperties(imgData);
                const pdfWidth = doc.internal.pageSize.getWidth();
                const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
                doc.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
                doc.save("dashboard.pdf");
            });
        }
    }

    return (
        <>
            <button onClick={savePdf}>Save as PDF</button>
            <div style={{textAlign: "center", maxWidth: 800, width: 800}} ref={ref}>
                <Dashboard />
            </div>
        </>
    );
}

export default App;
