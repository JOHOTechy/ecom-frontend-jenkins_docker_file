import { Heart, Users, Award, Globe } from 'lucide-react';
import './About.css';

export default function About() {
  const stats = [
    { icon: <Users size={28} />, value: '50K+', label: 'Happy Customers' },
    { icon: <Award size={28} />, value: '200+', label: 'Premium Brands' },
    { icon: <Globe size={28} />, value: '30+', label: 'Countries' },
    { icon: <Heart size={28} />, value: '99%', label: 'Satisfaction' },
  ];

  const team = [
    { name: 'Alex Chen', role: 'Founder & CEO', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop' },
    { name: 'Sarah Miller', role: 'Head of Design', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop' },
    { name: 'James Park', role: 'CTO', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop' },
  ];

  return (
    <main className="about-page">
      {/* Hero */}
      <section className="about-hero" id="about-hero">
        <div className="about-hero__orb about-hero__orb--1" />
        <div className="about-hero__orb about-hero__orb--2" />
        <div className="container about-hero__content">
          <span className="badge badge-primary">Our Story</span>
          <h1 className="about-hero__title">
            Redefining the Way <br />
            <span className="about-hero__accent">You Shop Online</span>
          </h1>
          <p className="about-hero__desc">
            ShopVerse was born from a simple idea: shopping should be an experience, not a chore.
            We curate the finest products from around the world, bringing premium quality to your doorstep.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats" id="about-stats">
        <div className="container">
          <div className="about-stats__grid">
            {stats.map((stat, i) => (
              <div className="about-stat glass-card" key={i}>
                <div className="about-stat__icon">{stat.icon}</div>
                <div className="about-stat__value">{stat.value}</div>
                <div className="about-stat__label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section" id="about-mission">
        <div className="container about-mission">
          <div className="about-mission__content">
            <h2 className="section-title">Our Mission</h2>
            <p className="about-mission__text">
              We believe everyone deserves access to premium products. Our team works tirelessly to
              discover, verify, and deliver the best items from trusted brands worldwide. Quality,
              sustainability, and customer happiness drive everything we do.
            </p>
            <p className="about-mission__text">
              From cutting-edge electronics to timeless fashion pieces, every product in our catalog
              has been handpicked by our expert curation team. We don't just sell products — we
              deliver experiences.
            </p>
          </div>
          <div className="about-mission__visual">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
              alt="Our mission"
              className="about-mission__image"
            />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section" id="about-team">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Meet Our Team</h2>
          <p className="section-subtitle" style={{ textAlign: 'center' }}>The people behind ShopVerse</p>
          <div className="about-team__grid">
            {team.map((member, i) => (
              <div className="about-team__card glass-card" key={i}>
                <img src={member.avatar} alt={member.name} className="about-team__avatar" />
                <h3 className="about-team__name">{member.name}</h3>
                <p className="about-team__role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
