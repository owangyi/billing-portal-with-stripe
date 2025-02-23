import React from "react";

/**
 * todo
 * 1. show payment method detail after subscribing
 * 2. support delete and update payment method（don't have to keep multiple methods)
 * 3. default label
 *
 * @returns {JSX.Element}
 * @constructor
 */

export default function Payment() {
    return (
        <section>
            <div className="product">
                <img
                    src="https://i.imgur.com/EHyR2nP.png"
                    alt="The cover of Stubborn Attachments"
                />
                <div className="description">
                    <h3>Update PaymentMethod</h3>
                </div>
            </div>
            <form action="/manage.php" method="POST">
                <button type="submit">
                    Update
                </button>
            </form>
        </section>
    );
}
