const express = require('express');
const path = require('path');
const { auth, db } = require('../firebaseConfig');
const { createUserWithEmailAndPassword, signInWithEmailAndPassword } = require('firebase/auth');
const { doc, setDoc, getDoc } = require('firebase/firestore');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 1 — Serve static files FIRST
app.use(express.static(path.join(__dirname, '../public')));

// 2 — GLOBAL SHUTDOWN (conditional)
app.use((req, res, next) => {
  if (process.env.SHUTDOWN === 'true') {
    return res.sendFile(path.join(__dirname, '../public/shutdown.html'));
  }
  next();
});

// 3 — Dynamic routes (only work when shutdown = false)
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/register.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/login.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Add your other routes here (courses, etc.)

module.exports = app;
