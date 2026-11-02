import { Link } from "react-router-dom";
import {
  Plane,
  MapPinned,
  Compass,
  Users,
  ArrowRight,
  ShieldCheck,
  Clock,
  MessageCircle,
} from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Airport Transfers",
    text: "Convenient airport pickup and drop services to and from Mangalore International Airport.",
  },
  {
    icon: MapPinned,
    title: "Local & Outstation",
    text: "Book point-to-point rides and outstation trips to Udupi, Manipal, Bekal, and beyond.",
  },
  {
    icon: Compass,
    title: "Custom Tour Packages",
    text: "Explore temples, beaches, waterfalls, and coastal Karnataka with personalized trips.",
  },
  {
    icon: Users,
    title: "Group Transportation",
    text: "Find suitable transport options for families, groups, sightseeing, and special occasions.",
  },
];

const vehicles = [
  {
    name: "Hatchback",
    description: "A compact option for everyday travel.",
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Compact SUV",
    description: "SUV options, including the Hyundai Exter subject to availability.",
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Tempo Traveller",
    description: "Group travel options subject to vehicle availability.",
    image:
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80",
  },
];

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-overlay" />

        <div className="container hero-content">
          <span className="eyebrow">YOUR JOURNEY STARTS HERE</span>

          <h1>
            ALISHA TRAVELS
            <span>MANGALORE</span>
          </h1>

          <h2>Your Trusted Travel Partner in Mangalore</h2>

          <p>
            Comfortable Rides, Reliable Service, and Affordable Travel
            for Every Journey.
          </p>

          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-gold">
              Book Your Taxi <ArrowRight size={18} />
            </Link>

            <a href="tel:+918151843165" className="btn btn-white">
              Call Now
            </a>

            <a
              href="https://wa.me/918151843165"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </div>

          <div className="hero-note">
            <ShieldCheck size={18} />
            Airport Transfers · Local Trips · Outstation Travel
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="container trust-grid">
          <div>
            <Plane />
            <span>Airport Transfers</span>
          </div>
          <div>
            <MapPinned />
            <span>Outstation Travel</span>
          </div>
          <div>
            <Clock />
            <span>Advance Enquiries</span>
          </div>
          <div>
            <Users />
            <span>Group Travel Options</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">WHAT WE OFFER</span>
            <h2>Travel Made More Convenient</h2>
            <p>
              From airport transfers to sightseeing, explore travel options
              suited to your plans.
            </p>
          </div>

          <div className="service-grid">
            {services.map(({ icon: Icon, title, text }) => (
              <article className="service-card" key={title}>
                <div className="service-icon">
                  <Icon size={27} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <Link to="/services" className="text-link">
                  Explore Service <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="airport-section">
        <div className="container airport-grid">
          <div className="airport-image">
            <img
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1100&q=85"
              alt="Airplane ready for a journey"
              loading="lazy"
            />
            <div className="image-badge">
              <Plane size={20} />
              Mangalore Airport Transfers
            </div>
          </div>

          <div className="airport-copy">
            <span className="eyebrow">START YOUR JOURNEY RIGHT</span>
            <h2>Airport Transfers Without the Hassle</h2>
            <p>
              Arrange airport pickup or drop-off for family trips,
              business travel, and personal journeys. Share your arrival
              details when enquiring so the trip can be coordinated.
            </p>

            <ul className="check-list">
              <li>Airport pickup and drop enquiries</li>
              <li>Advance booking requests</li>
              <li>Family and business travel</li>
              <li>Vehicle options based on availability</li>
            </ul>

            <Link to="/contact" className="btn btn-primary">
              Enquire About a Transfer <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section fleet-preview">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">TRAVEL YOUR WAY</span>
            <h2>Explore Our Vehicle Options</h2>
            <p>
              Tell us about your group and journey to enquire about
              suitable vehicles.
            </p>
          </div>

          <div className="fleet-grid">
            {vehicles.map((vehicle) => (
              <article className="fleet-card" key={vehicle.name}>
                <img src={vehicle.image} alt={vehicle.name} loading="lazy" />
                <div className="fleet-card-body">
                  <h3>{vehicle.name}</h3>
                  <p>{vehicle.description}</p>
                  <Link to="/fleet" className="text-link">
                    View Fleet <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="center-button">
            <Link to="/fleet" className="btn btn-primary">
              Explore Vehicle Options
            </Link>
          </div>
        </div>
      </section>

      <section className="tour-banner">
        <div className="container tour-banner-inner">
          <div>
            <span className="eyebrow">DISCOVER COASTAL KARNATAKA</span>
            <h2>Make More of Every Journey</h2>
            <p>
              Plan temple visits, beach outings, sightseeing, and
              customized trips around the region.
            </p>
          </div>

          <Link to="/tour-packages" className="btn btn-gold">
            Explore Tour Packages <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="booking-cta">
        <div className="container booking-cta-inner">
          <div>
            <span className="eyebrow">READY WHEN YOU ARE</span>
            <h2>Where Would You Like to Go?</h2>
            <p>Share your travel details and send us a booking enquiry.</p>
          </div>

          <Link to="/contact" className="btn btn-gold">
            Book Your Taxi <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;