import { useEffect } from "react";
import Banner from "./layout/Banner";
import Infomation from "./layout/Infomation";
import Foot from "./layout/Foot";
import Head from "./layout/Head";
import Partnership from "./layout/Partnership";
import SlidePage from "./layout/SlidePage";
import ForumHome from "./layout/ForumHome";
import { Layout } from "antd";
const { Content } = Layout;

const Home = () => {
  useEffect(() => {
    document.title = "MoonFi Protocol";
  }, []);

  return (
    <>
      <Layout>
        <Head />
        <Content>
          <Banner />
          <Infomation />
          <SlidePage />
          <ForumHome />
        </Content>
        {/* <Partnership /> */}
        <Foot />
      </Layout>
    </>
  );
};

export default Home;
