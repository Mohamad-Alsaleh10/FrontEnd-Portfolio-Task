import ServicesCard from "../../components/ServicesCard/ServicesCard";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdWeb } from "react-icons/md";
import { TbBrandFigma } from "react-icons/tb";
import { MdBrandingWatermark } from "react-icons/md";
import { SiAdobephotoshop } from "react-icons/si";
import { MdAppShortcut } from "react-icons/md";
// import SectionHeader from "../../components/SectionHeader";
const Services = () => {

  // const descriptions =["web design", "Photography", "Web Developer", "App Developing","Branding","Product Strategy" ]
  // const icons = [<IoAnalytics />,]

  const servicesData = [
    { key: 1, desc: "web design", icon: <TbBrandFigma  /> },
    { key: 2, desc: "Photography", icon: <SiAdobephotoshop /> },
    { key: 3, desc: "Web Developer", icon: <MdWeb /> },
    { key: 4, desc: "App Developing", icon: <MdAppShortcut /> },
    { key: 5, desc: "Branding", icon: <MdBrandingWatermark /> },
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
