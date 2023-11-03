import Image from "next/image";
import { Row, Col } from "antd";
import {
  MdPersonOutline,
  MdCallEnd,
  MdOutlineMic,
  MdCall,
} from "react-icons/md";

import copy from "clipboard-copy";

export default function Home() {
  const textToCopy = "Hello2, World!";
  const handleCopyClick = async () => {
    try {
      await copy(textToCopy);
      alert("Text copied to clipboard: " + textToCopy);
    } catch (err) {
      console.error("Failed to copy text: " + err);
    }
  };

  return (
    <div >
      <section className="px-10 text-center py-10">
        <Row>
          {Array.from({ length: 12 }, (_, index) => (
            <Col xl={4} className="px-2" key={index}>
              <MdPersonOutline
                className="text-[150px]  py-5 text-gray-500"
                onClick={handleCopyClick}
              />

              <Row>
                <Col xl={6} className="bg-red-500 flex px-3">
                  <MdCallEnd className="text-[30px] text-white" />
                </Col>

                <Col xl={6} className="bg-black flex px-3">
                  <MdOutlineMic className="text-[30px] text-white" />
                </Col>

                <Col xl={6} className="bg-green-500 flex px-3">
                  <MdCall className="text-[30px] text-white" />
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
      </section>
    </div>
  );
}
