import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Subscription from "./Subscription";
import Payment from "./Payment";
import Invoice from "./Invoice";
import "./BillingPage.css";

const EmailInput = ({ setEmail }) => {
    const [inputEmail, setInputEmail] = useState("");
    const [isValid, setIsValid] = useState(false);

    const handleEmailChange = (e) => {
        const email = e.target.value;
        setInputEmail(email);
        setIsValid(validateEmail(email));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid) {
            setEmail(inputEmail);
        }
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <form onSubmit={handleSubmit} className="email-form">
            <input
                type="email"
                value={inputEmail}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                required
            />
            <button type="submit" disabled={!isValid}>Submit</button>
        </form>
    );
};

const BillingLayout = ({ email }) => {
    const location = useLocation();
    const [isPaymentEnabled, setPaymentEnabled] = useState(false);
    const [isInvoiceEnabled, setInvoiceEnabled] = useState(false);

    const handleSubscriptionComplete = () => {
        setPaymentEnabled(true);
    };

    const handlePaymentComplete = () => {
        setInvoiceEnabled(true);
    };

    return (
        <div className="billing-container">
            <nav className="tab-navigation">
                <Link
                    to="/subscription"
                    className={location.pathname === '/subscription' ? 'tab-active' : 'tab'}
                >
                    Subscription
                </Link>
                <Link
                    to="/payment"
                    className={isPaymentEnabled ? (location.pathname === '/payment' ? 'tab-active' : 'tab') : 'tab-disabled'}
                    onClick={(e) => !isPaymentEnabled && e.preventDefault()}
                >
                    Payment Method
                </Link>
                <Link
                    to="/invoice"
                    className={isInvoiceEnabled ? (location.pathname === '/invoice' ? 'tab-active' : 'tab') : 'tab-disabled'}
                    onClick={(e) => !isInvoiceEnabled && e.preventDefault()}
                >
                    Invoice
                </Link>
            </nav>

            <div className="tab-content">
                <Outlet context={{ handleSubscriptionComplete, handlePaymentComplete, email }} />
            </div>
        </div>
    );
};

export default function BillingPage() {
    const [email, setEmail] = useState("");

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/subscription" replace />} />

                <Route element={email ? <BillingLayout email={email} /> : <EmailInput setEmail={setEmail} />}>
                    <Route
                        path="subscription"
                        element={<Subscription />}
                    />
                    <Route
                        path="payment"
                        element={<Payment />}
                    />
                    <Route
                        path="invoice"
                        element={<Invoice />}
                    />
                </Route>
            </Routes>
        </Router>
    );
}
