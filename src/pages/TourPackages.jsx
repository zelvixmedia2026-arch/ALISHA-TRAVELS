import { Link } from "react-router-dom";
import {
  Landmark,
  Waves,
  Mountain,
  MapPinned,
  ArrowRight,
} from "lucide-react";

const tours = [
  {
    icon: Landmark,
    title: "Temple Tours",
    description:
      "Enquire about temple visits across Dakshina Kannada and nearby regions.",
    image:
      "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=900&q=85",
  },
  {
    icon: Waves,
    title: "Coastal & Beach Trips",
    description:
      "Plan a coastal outing and explore beaches around Mangalore and nearby destinations.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85",
  },
  {
    icon: Mountain,
    title: "Nature & Waterfall Visits",
    description:
      "Ask about nature outings and waterfall destinations suitable for your itinerary.",
    image:
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=900&q=85",
  },
  {
    icon: MapPinned,
    title: "Customized Sightseeing",
    description:
      "Build a one-day or multi-day travel plan around your interests and schedule.",
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=900&q=85",
  },
];

function TourPackages() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">DISCOVER THE COAST</span>
          <h1>Explore More with Alisha Travels</h1>
          <p>
            Enquire about temple tours, coastal experiences, and customized trips.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">FIND YOUR NEXT EXPERIENCE</span>
            <h2>Tour Ideas for Every Traveller</h2>
            <p>
              Share your preferred destinations, travel dates, and group size
              to request a personalized quotation.
            </p>
          </div>

          <div className="tour-grid">
            {tours.map(({ icon: Icon, title, description, image }) => (
              <article className="tour-card" key={title}>
                <img src={image} alt={title} loading="lazy" />

                <div className="tour-card-content">
                  <div className="service-icon">
                    <Icon size={25} />
                  </div>

                  <h3>{title}</h3>
                  <p>{description}</p>

                  <Link
                    className="text-link"
                    to={`/contact?tour=${encodeURIComponent(title)}`}
                  >
                    Request a Quotation <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tour-banner">
        <div className="container tour-banner-inner">
          <div>
            <span className="eyebrow">YOUR TRIP, YOUR WAY</span>
            <h2>Let's Plan Your Next Tour</h2>
            <p>
              Tell us your preferred destinations, dates, and group size.
            </p>
          </div>

          <Link to="/contact?tour=Customized%20Tour" className="btn btn-gold">
            Plan My Tour <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}

export default TourPackages;