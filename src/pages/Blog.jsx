import { useEffect } from "react";
import {
  MapPin,
  Clock,
  Route,
  CarFront,
  ShieldCheck,
  Phone,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/918151843165?text=" +
  encodeURIComponent(
    "Hello Alisha Travels! I would like to enquire about a Mangalore to Bekal taxi."
  );

const attractions = [
  {
    number: "01",
    title: "Bekal Fort",
    description:
      "Explore the historic seaside fort and enjoy its views of the Arabian Sea.",
  },
  {
    number: "02",
    title: "Bekal Beach",
    description:
      "Enjoy the coastal scenery and spend some relaxing time by the beach.",
  },
  {
    number: "03",
    title: "Pallikere Beach",
    description:
      "A scenic beach destination for a peaceful outing with family.",
  },
  {
    number: "04",
    title: "Bekal Backwaters",
    description:
      "Experience the natural beauty of the backwaters around Bekal.",
  },
  {
    number: "05",
    title: "Bekal Sunset Views",
    description:
      "Enjoy the coastal atmosphere and beautiful evening views.",
  },
];

const vehicles = [
  "Hatchback Cars",
  "Sedan Cars",
  "Hyundai Exter",
  "Maruti Suzuki Ertiga",
  "SUV Vehicles",
  "Tempo Travellers",
  "35-Seater AC Buses",
];

const benefits = [
  "Professional drivers",
  "Clean and comfortable vehicles",
  "Family-friendly taxi service",
  "Airport pickup and drop enquiries",
  "One-way taxi booking",
  "Round-trip taxi booking",
  "Local and outstation trips",
  "Customised tour packages",
];

function Blog() {
  useEffect(() => {
    document.title =
      "Mangalore to Bekal Taxi Service | Alisha Travels Mangalore";

    let description = document.querySelector(
      'meta[name="description"]'
    );

    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }

    description.content =
      "Book a Mangalore to Bekal taxi with Alisha Travels. Enquire about comfortable cabs, one-way drops, round trips and sightseeing trips to Bekal.";

    return () => {
      document.title = "Alisha Travels Mangalore";
    };
  }, []);

  return (
    <main className="blog-page">
      {/* BLOG HERO */}
      <section className="blog-hero">
        <div className="blog-hero-image" />

        <div className="container blog-hero-content">
          <span className="blog-category">TRAVEL GUIDE · KARNATAKA TO KERALA</span>

          <h1>Mangalore to Bekal Taxi Service</h1>

          <p>
            Book Your Comfortable Cab with Alisha Travels Mangalore
          </p>

          <a href="#blog-content" className="btn btn-gold">
            Explore Travel Guide <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* ARTICLE */}
      <section className="section blog-section" id="blog-content">
        <div className="container blog-layout">
          <article className="blog-article">
            <div className="blog-intro">
              <span className="eyebrow">ALISHA TRAVELS MANGALORE</span>

              <h2>Planning a Trip from Mangalore to Bekal?</h2>

              <p>
                Are you planning a trip from Mangalore to Bekal? Looking
                for a comfortable and convenient taxi service?
              </p>

              <p>
                Alisha Travels Mangalore provides taxi service enquiries
                for families, tourists, couples and business travellers.
                Enjoy a journey from Mangalore to the beautiful coastal
                destination of Bekal in Kerala.
              </p>
            </div>

            {/* DISTANCE */}
            <section className="blog-content-section">
              <h2>Mangalore to Bekal Distance and Travel Time</h2>

              <p>
                Bekal is a popular coastal destination in Kasaragod
                district, Kerala. Here are approximate journey details
                to help you plan your trip.
              </p>

              <div className="distance-grid">
                <div className="distance-card">
                  <Route size={25} />
                  <span>Approximate Distance</span>
                  <strong>65–70 KM</strong>
                </div>

                <div className="distance-card">
                  <Clock size={25} />
                  <span>Estimated Travel Time</span>
                  <strong>1.5–2 Hours</strong>
                </div>
              </div>

              <ul className="blog-detail-list">
                <li>
                  <strong>Route:</strong> Mangalore – Talapady –
                  Kasaragod – Bekal.
                </li>
                <li>
                  <strong>Pickup:</strong> Mangalore City, Railway
                  Station and Mangalore International Airport.
                </li>
              </ul>

              <p className="blog-note">
                Distance and travel time are approximate and may vary
                depending on your pickup location, traffic and road
                conditions.
              </p>
            </section>

            {/* ATTRACTIONS */}
            <section className="blog-content-section">
              <h2>Explore Bekal Tourist Attractions</h2>

              <p>
                Make your journey memorable by exploring some of Bekal's
                popular coastal attractions.
              </p>

              <div className="attraction-list">
                {attractions.map((place) => (
                  <div className="attraction-item" key={place.number}>
                    <span className="attraction-number">
                      {place.number}
                    </span>

                    <div>
                      <h3>{place.title}</h3>
                      <p>{place.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SERVICES */}
            <section className="blog-content-section">
              <h2>Our Mangalore to Bekal Taxi Services</h2>

              <p>
                Alisha Travels offers different vehicle categories
                to enquire about based on your travel requirements
                and availability.
              </p>

              <div className="vehicle-list">
                {vehicles.map((vehicle) => (
                  <div className="vehicle-item" key={vehicle}>
                    <CarFront size={19} />
                    <span>{vehicle}</span>
                  </div>
                ))}
              </div>

              <p className="blog-note">
                Please contact us to confirm the vehicle, availability
                and fare for your selected travel date.
              </p>
            </section>

            {/* WHY CHOOSE US */}
            <section className="blog-content-section">
              <h2>Why Choose Alisha Travels Mangalore?</h2>

              <p>
                We help travellers enquire about suitable transport
                arrangements for their journeys.
              </p>

              <div className="benefit-list">
                {benefits.map((benefit) => (
                  <div className="benefit-item" key={benefit}>
                    <ShieldCheck size={18} />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* BOOKING CTA */}
            <section className="blog-booking-cta">
              <span className="eyebrow">PLAN YOUR BEKAL TRIP</span>

              <h2>Book Your Mangalore to Bekal Taxi Today!</h2>

              <p>
                Whether you need a one-way drop, family trip or
                sightseeing journey, contact Alisha Travels Mangalore
                to discuss your travel requirements.
              </p>

              <h3>ALISHA TRAVELS MANGALORE</h3>

              <div className="blog-contact-details">
                <a href="tel:+918151843165">
                  <Phone size={18} />
                  +91 81518 43165
                </a>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </a>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
              >
                Book Your Taxi Today <ArrowRight size={18} />
              </a>
            </section>
          </article>

          {/* SIDEBAR */}
          <aside className="blog-sidebar">
            <div className="blog-sidebar-card">
              <span className="eyebrow">NEED A TAXI?</span>
              <h3>Travelling to Bekal?</h3>

              <p>
                Contact Alisha Travels to enquire about your Mangalore
                to Bekal journey.
              </p>

              <a href="tel:+918151843165" className="btn btn-primary">
                <Phone size={17} /> Call Now
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
              >
                <MessageCircle size={17} /> WhatsApp Us
              </a>
            </div>

            <div className="blog-sidebar-card blog-route-card">
              <span className="eyebrow">TRAVEL ROUTE</span>
              <h3>Mangalore to Bekal</h3>

              <div className="route-point">
                <MapPin size={18} />
                <span>Mangalore, Karnataka</span>
              </div>

              <div className="route-line" />

              <div className="route-point">
                <MapPin size={18} />
                <span>Bekal, Kerala</span>
              </div>

              <p>Approximately 65–70 KM</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default Blog;