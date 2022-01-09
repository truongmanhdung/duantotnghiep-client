import { useEffect } from "react";
import { Layout } from "antd";
import PropTypes from "prop-types";
import Head from "../../components/website/home/Head";
import Banner from "../../components/website/home/Banner";
import Infomation from "../../components/website/home/Infomation";
import SlidePage from "../../components/website/home/SlidePage";
import ForumHome from "../../components/website/home/ForumHome";
import Foot from "../../components/website/home/Foot";
const { Content } = Layout;
const HomeContainer = (props) => {
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
        <Foot />
      </Layout>
    </>
  );
};

HomeContainer.propTypes = {
  default: PropTypes.object,
};

export default HomeContainer;
