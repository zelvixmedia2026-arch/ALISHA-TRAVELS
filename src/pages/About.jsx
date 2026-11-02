import { Link } from "react-router-dom";
import { ArrowRight, MapPin, CarFront, Compass } from "lucide-react";

function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">GET TO KNOW US</span>
          <h1>About Alisha Travels</h1>
          <p>Your travel partner in Mangalore and beyond.</p>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=85"
              alt="Scenic mountain destination"
              loading="lazy"
            />
          </div>

          <div className="about-copy">
            <span className="eyebrow">OUR INTRODUCTION</span>
            <h2>Every Journey, A Better Experience</h2>

            <p>
              Alisha Travels Mangalore offers travel and transportation
              enquiries for airport transfers, local journeys, outstation
              trips, sightseeing, and group transportation.
            </p>

            <p>
              Whether you're planning a family outing, a business journey,
              a temple visit, or a trip along the coast, share your
              requirements with us to enquire about suitable travel options.
            </p>

            <div className="about-highlights">
              <div>
                <MapPin />
                <span>
                  <strong>Mangalore</strong>
                  <small>Based in coastal Karnataka</small>
                </span>
              </div>

              <div>
                <CarFront />
                <span>
                  <strong>Travel Options</strong>
                  <small>Vehicles for different journeys</small>
                </span>
              </div>

              <div>
                <Compass />
                <span>
                  <strong>Custom Trips</strong>
                  <small>Enquiries for personalized itineraries</small>
                </span>
              </div>
            </div>

            <Link to="/contact" className="btn btn-primary">
              Plan Your Journey <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section soft-bg">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">WHY ALISHA TRAVELS?</span>
            <h2>Travel Options for Different Needs</h2>
            <p>
              Explore available services and share your requirements
              before confirming your journey.
            </p>
          </div>

          <div className="service-grid">
            <article className="service-card">
              <div className="service-icon"><CarFront /></div>
              <h3>Flexible Travel</h3>
              <p>Enquire about vehicle options for individual and group trips.</p>
            </article>

            <article className="service-card">
              <div className="service-icon"><MapPin /></div>
              <h3>Regional Journeys</h3>
              <p>Plan trips around Mangalore and nearby destinations.</p>
            </article>

            <article className="service-card">
              <div className="service-icon"><Compass /></div>
              <h3>Personalized Plans</h3>
              <p>Discuss your itinerary and request a suitable travel quotation.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;