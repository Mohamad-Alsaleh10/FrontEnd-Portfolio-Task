import ServicesCard from "../../components/ServicesCard/ServicesCard";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaFlaskVial } from "react-icons/fa6";
import { IoAnalytics } from "react-icons/io5";
// import SectionHeader from "../../components/SectionHeader";
const Services = () => {
  const servicesData = [
    { key: 1, desc: "web design", icon: <IoAnalytics /> },
    { key: 2, desc: "Photography", icon: <FaFlaskVial /> },
    { key: 3, desc: "Web Developer", icon: <HiOutlineLightBulb /> },
    { key: 4, desc: "App Developing", icon: <IoAnalytics /> },
    { key: 5, desc: "Branding", icon: <FaFlaskVial /> },
    { key: 6, desc: "Product Strategy", icon: <HiOutlineLightBulb /> },
  ];
  const services = servicesData.map((data) => {
    return <ServicesCard key={data.key} desc={data.desc} icon={data.icon} />;
  });
  return (
    <div>
      {/* <SectionHeader /> */}
      <div className="container text-center">
        <div className="row align-items-start">{services}</div>
      </div>
    </div>
  );
};

export default Services;
