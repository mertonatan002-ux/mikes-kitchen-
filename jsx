import React, { useState } from 'react';

const meals = [
  { name: 'Jollof Rice', price: 3500, category: 'Rice', emoji: '🍚', desc: 'Delicious Nigerian party jollof rice.' },
  { name: 'Fried Rice', price: 4000, category: 'Rice', emoji: '🥘', desc: 'Special fried rice with vegetables.' },
  { name: 'Egusi Soup', price: 4500, category: 'Soups', emoji: '🍲', desc: 'Traditional egusi soup with assorted meat.' },
  { name: 'Pounded Yam', price: 2000, category: 'Swallow', emoji: '🥣', desc: 'Fresh and smooth pounded yam.' },
  { name: 'Pepper Soup', price: 3500, category: 'Specials', emoji: '🍜', desc: 'Hot and spicy Nigerian pepper soup.' },
  { name: 'Grilled Chicken', price: 5000, category: 'Specials', emoji: '🍗', desc: 'Well-seasoned grilled chicken.' },
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState('All');

  const filtered = category === 'All'
    ? meals
    : meals.filter(meal => meal.category === category);

  const addToCart = meal => setCart([...cart, meal]);
  const total = cart.reduce((sum, meal) => sum + meal.price, 0);

  return (
    <div style={{ background: '#101010', color: '#fff', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ padding: '22px 7%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #333' }}>
        <h2 style={{ color: '#d6a843', margin: 0 }}>MIKE'S KITCHEN</h2>
        <a href="#menu" style={{ color: '#d6a843', textDecoration: 'none' }}>Our Menu</a>
      </header>

      <section style={{ padding: '100px 7%', textAlign: 'center', background: 'linear-gradient(120deg,#171717,#30230d)' }}>
        <p style={{ color: '#d6a843', letterSpacing: 4 }}>WELCOME TO MIKE'S KITCHEN</p>
        <h1 style={{ fontSize: 'clamp(38px,7vw,70px)', margin: '15px 0' }}>
          Where Taste Meets <span style={{ color: '#d6a843' }}>Excellence.</span>
        </h1>
        <p style={{ color: '#ccc', fontSize: 18 }}>Experience delicious Nigerian meals made with passion.</p>
        <a href="#menu" style={{ display: 'inline-block', marginTop: 25, padding: '15px 30px', background: '#d6a843', color: '#111', textDecoration: 'none', borderRadius: 5, fontWeight: 'bold' }}>
          Explore Our Menu
        </a>
      </section>

      <section id="menu" style={{ padding: '65px 7%' }}>
        <h2 style={{ textAlign: 'center', fontSize: 36 }}>Our <span style={{ color: '#d6a843' }}>Menu</span></h2>
        <p style={{ textAlign: 'center', color: '#aaa' }}>Fresh Nigerian favourites prepared just for you.</p>

        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 10, margin: '30px 0' }}>
          {['All', 'Rice', 'Soups', 'Swallow', 'Specials'].map(item => (
            <button key={item} onClick={() => setCategory(item)}
              style={{ padding: '11px 20px', border: '1px solid #d6a843', borderRadius: 25, background: category === item ? '#d6a843' : 'transparent', color: category === item ? '#111' : '#fff', cursor: 'pointer' }}>
              {item}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: 22 }}>
          {filtered.map(meal => (
            <div key={meal.name} style={{ background: '#1d1d1d', padding: 25, borderRadius: 12, border: '1px solid #333' }}>
              <div style={{ fontSize: 55 }}>{meal.emoji}</
