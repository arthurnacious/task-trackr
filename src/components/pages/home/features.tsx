import { Headset, Lock, Rocket } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Rocket className="text-4xl text-teal-500" />,
      title: "Fast Performance",
      description:
        "Optimized for high speed, ensuring a smooth experience across multiple tenancies.",
    },
    {
      icon: <Lock className="text-4xl text-teal-500" />,
      title: "Secure Access",
      description:
        "Manage multiple tenancies securely with role-based access controls for different companies.",
    },
    {
      icon: <Headset className="text-4xl text-teal-500" />,
      title: "24/7 Support",
      description:
        "Dedicated support for tenants to ensure seamless operations.",
    },
  ];

  return (
    <section className="bg-teal-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-teal-800">Our Features</h2>
          <p className="text-teal-600 mt-4">
            Empowering your teams across multiple tenancies.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-teal-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-teal-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
