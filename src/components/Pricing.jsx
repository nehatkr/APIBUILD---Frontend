import React from "react";

const Pricing = () => {
  const plans = [
    {
      name: "Free Plan",
      price: "₹0",
      duration: "Forever",
      features: [
        "Access to public APIs",
        "Basic API testing tools",
        "Community support",
      ],
      buttonText: "Get Started",
      highlight: false,
    },
    {
      name: "Monthly Plan",
      price: "₹299",
      duration: "/month",
      features: [
        "Unlimited API requests",
        "Advanced analytics",
        "Priority support",
      ],
      buttonText: "Subscribe Now",
      highlight: false,
    },
    {
      name: "Yearly Plan",
      price: "₹999",
      duration: "/year",
      features: [
        "All Monthly Plan features",
        "Early access to beta tools",
        "Exclusive resources",
      ],
      buttonText: "Best Value",
      highlight: true,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Choose Your Plan
        </h2>
        <p className="text-gray-600 mb-12">
          Get access to powerful API tools for developers — start free or go pro.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 shadow-md transition-transform transform hover:scale-105 ${
                plan.highlight
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-2">
                {plan.price}
                <span className="text-lg font-normal">
                  {plan.duration}
                </span>
              </p>

              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center justify-center">
                    <span className="mr-2">✅</span> {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-2 rounded-lg font-medium transition ${
                  plan.highlight
                    ? "bg-white text-blue-600 hover:bg-gray-100"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
