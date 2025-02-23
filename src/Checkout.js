import React from "react";

export default function Checkout() {
    return (
        <section>
            <div className="product">
                <img
                    src="https://i.imgur.com/EHyR2nP.png"
                    alt="The cover of Stubborn Attachments"
                />
                <div className="description">
                    <h3>Basic</h3>
                    <h5>$20.00</h5>
                </div>
            </div>
            <form action="/checkout.php" method="POST">
                <button type="submit">
                    Checkout
                </button>
            </form>
        </section>
    )
    ;
}
