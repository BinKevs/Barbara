import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
function Biography() {
  return (
    <>
      <div className="bg-black h-full">
        <div>
          <img
            className="mx-auto"
            src="https://media.istockphoto.com/photos/intense-portrait-of-a-man-with-beard-picture-id839214266?k=20&m=839214266&s=612x612&w=0&h=ARByhaEKcV3_I_chI2jRsv_TkCpXBDOKDDI2D5aSKus="
            alt=""
          />
        </div>
        <div className="text-white font-Montserrat text-center text-2xl w-[40%] mx-auto">
          DR. Lorem Ipsum <br /> is one of America’s foremost historians and
          leading antiracist scholars. He is a National Book Award-winning and
          #1 New York Times bestselling author of six books for adults and four
          books for children.
        </div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#6966FF", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #6966FF" }}
            date="2011 - present"
            iconStyle={{ background: "#6966FF", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Creative Director
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2010 - 2011"
            iconStyle={{ background: "#6966FF", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">Art Director</h3>
            <h4 className="vertical-timeline-element-subtitle">
              San Francisco, CA
            </h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online
              Marketing
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2008 - 2010"
            iconStyle={{ background: "#6966FF", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Los Angeles, CA
            </h4>
            <p>User Experience, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2006 - 2008"
            iconStyle={{ background: "#6966FF", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              San Francisco, CA
            </h4>
            <p>User Experience, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="April 2013"
            iconStyle={{ background: "#6966FF", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Content Marketing for Web, Mobile and Social Media
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Online Course
            </h4>
            <p>Strategy, Social Media</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="November 2012"
            iconStyle={{ background: "#6966FF", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Agile Development Scrum Master
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Certification
            </h4>
            <p>Creative Direction, User Experience, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2002 - 2006"
            iconStyle={{ background: "#6966FF", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor of Science in Interactive Digital Media Visual Imaging
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bachelor Degree
            </h4>
            <p>Creative Direction, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "#6966FF", color: "#fff" }}
          />
        </VerticalTimeline>
      </div>
    </>
  );
}

export default Biography;
