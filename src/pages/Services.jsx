import { Link } from "react-router-dom";
import {
  Plane,
  CarFront,
  MapPinned,
  Landmark,
  Users,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Airport Transfers",
    description:
      "Arrange pickup and drop services to and from Mangalore International Airport.",
    features: [
      "Airport pickup and drop",
      "Flight arrival coordination enquiries",
      "Family and business travel",
      "Advance booking requests",
    ],
  },
  {
    icon: CarFront,
    title: "Local Cab Rentals",
    description:
      "Enquire about point-to-point transportation within Mangalore and surrounding areas.",
    features: [
      "Local journeys",
      "Point-to-point transfers",
      "Personal and family travel",
      "Vehicle selection by requirement",
    ],
  },
  {
    icon: MapPinned,
    title: "Outstation Taxi Services",
    description:
      "Plan journeys from Mangalore to regional destinations in Karnataka and Kerala.",
    features: [
      "Mangalore to Udupi",
      "Mangalore to Manipal",
      "Trips to Bekal",
      "Other destinations on request",
    ],
  },
  {
    icon: Landmark,
    title: "Temple & Tour Packages",
    description:
      "Enquire about customized temple visits, sightseeing, and coastal tours.",
    features: [
      "Temple tours",
      "Beach sightseeing",
      "Waterfall visits",
      "One-day and multi-day trip enquiries",
    ],
  },
  {
    icon: Users,
    title: "Group Transportation",
    description:
      "Ask about larger vehicles for family outings, group tours, and special occasions.",
    features: [
      "Tempo traveller enquiries",
      "Family and group trips",
      "Bus options up to 35 seats",
      "Availability confirmed on enquiry",
    ],
  },
];

function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">TRAVEL SERVICES</span>
          <h1>Services Designed Around Your Journey</h1>
          <p>Explore travel options from local trips to group transportation.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="service-list">
            {services.map(({ icon: Icon, title, description, features }, index) => (
              <article className="service-detail" key={title}>
                <div className="service-detail-icon">
                  <Icon size={32} />
                  <span>0{index + 1}</span>
                </div>

                <div className="service-detail-content">
                  <h2>{title}</h2>
                  <p>{description}</p>

                  <ul className="check-list two-column-list">
                    {features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>

                  <Link to="/contact" className="text-link">
                    Enquire Now <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="booking-cta">
        <div className="container booking-cta-inner">
          <div>
            <span className="eyebrow">HAVE A TRIP IN MIND?</span>
            <h2>Tell Us What You Need</h2>
            <p>Send your travel details to enquire about availability and pricing.</p>
          </div>

          <Link to="/contact" className="btn btn-gold">
            Make an Enquiry <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}

export default Services;