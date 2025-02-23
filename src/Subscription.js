import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import './Email.css'
import './Subscription.css';

/**
 * todo:
 *  1. record user credential ✅
 *  1. show available plans when unsubscribe ✅
 *  2. checkout selected plans ✅
 *  3. show subscription details after subscribed ✅
 *  4. show subscription history
 *  5. split component
 */

export default function Subscription() {
    const { email } = useOutletContext();
    const [isLoading, setIsLoading] = useState(true);
    const [hasSubscription, setHasSubscription] = useState(false);
    const [subscriptionInfo, setSubscriptionInfo] = useState(null);
    const [availablePlans, setAvailablePlans] = useState([]);
    const [selectedPlans, setSelectedPlans] = useState([]);

    useEffect(() => {
        const fetchSubscriptionStatus = async () => {
            try {
                const response = await fetch('/subscription.php?list');
                const result = await response.json();

                console.log(result.data);

                if (result.data.length > 0) {
                    setHasSubscription(true);
                    setSubscriptionInfo(result.data)
                }

                setTimeout(function () {
                    console.log(subscriptionInfo)
                }, 2000);

            } catch (error) {
                console.error('Failed to fetch subscription status:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchSubscriptionStatus();
    }, []);

    useEffect(() => {
        if (!hasSubscription) {
            // 如果没有订阅，获取可订阅列表
            const fetchAvailablePlans = async () => {
                try {
                    const response = await fetch('plan.php');
                    const result = await response.json();
                    setAvailablePlans(result.data);
                } catch (error) {
                    console.error('Failed to fetch available subscriptions:', error);
                }
            };

            fetchAvailablePlans();
        }
    }, [hasSubscription]);

    const handleCheckboxChange = (subId) => {
        setSelectedPlans(prev =>
            prev.includes(subId)
                ? prev.filter(id => id !== subId)
                : [...prev, subId]
        );
    };

    const handleSubscribe = async () => {
        try {
            const response = await fetch('checkout.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ plans: selectedPlans, email: email })
            });

            const result = await response.json();

            // redirect to stripe checkout page
            window.location.href = result.data.redirect_url;
        } catch (error) {
            console.error('订阅失败:', error);
        }
    };


    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {hasSubscription ?
                <div>
                    <h2>Subscribed subscriptions</h2>
                    {subscriptionInfo.map((subscription) => {
                        return (
                            <div>
                                <p>订阅 ID: {subscription.id}</p>
                                <p>Your subscription renews on {new Date(subscription.current_period_end * 1000).toLocaleDateString()}</p>
                            </div>
                        )
                    })}

                    <form action="/manage.php" method="POST">
                        <button type="submit">
                            Manage Subscription
                        </button>
                    </form>
                </div>

                : (
                    <>
                        <div className="sub-list">
                            {availablePlans.map((plan) => (
                                <label key={plan.id} className="plan-item">
                                    <input
                                        type="checkbox"
                                        checked={selectedPlans.includes(plan.id)}
                                        onChange={() => handleCheckboxChange(plan.id)}
                                    />
                                    <span className="plan-info">
                                      <h3>{plan.nickname}</h3>
                                      <div className="price">${(plan.unit_amount / 100).toFixed(2)}/monthly</div>
                                    </span>
                                </label>
                            ))}
                        </div>

                        {(
                            <button
                                className="subscribe-btn"
                                onClick={handleSubscribe}
                            >
                                Subscribe
                            </button>
                        )}
                    </>
                )}
        </div>
    );
}
