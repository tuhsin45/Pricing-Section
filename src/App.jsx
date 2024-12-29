import React from 'react';

const hostingPlans = [
  {
    plan: 'Single',
    description: 'A great solution for beginners',
    price: '₹ 399.00',
    discount: 'SAVE 83%',
    discountedPrice: '₹ 69.00',
    perMonth: '₹ 69.00/mo',
    renewalPrice: '₹ 179.00/mo when you renew',
    features: [
      '1 website',
      'Managed Hosting for WordPress',
      '50 GB SSD storage',
      'Free automatic website migration',
      'Unlimited free SSL',
      'WooCommerce',
      'Dedicated IP address',
      'Priority support',
    ],
    isPopular: false,
  },
  {
    plan: 'Premium',
    description: 'Everything you need to create your website',
    price: '₹ 599.00',
    discount: 'SAVE 75%',
    discountedPrice: '₹ 149.00',
    perMonth: '₹ 149.00/mo + 3 months free',
    renewalPrice: '₹ 299.00/mo when you renew',
    features: [
      '100 websites',
      'Managed Hosting for WordPress',
      '100 GB SSD storage',
      'Hostinger Website Builder',
      'Free domain (₹749.00 value)',
      'Free automatic website migration',
      'Free email',
      'Unlimited free SSL',
    ],
    isPopular: true,
  },
  {
    plan: 'Business',
    description: 'Level up with more power and enhanced features.',
    price: '₹ 699.00',
    discount: 'SAVE 64%',
    discountedPrice: '₹ 249.00',
    perMonth: '₹ 249.00/mo + 3 months free',
    renewalPrice: '₹ 499.00/mo when you renew',
    features: [
      '100 websites',
      'Managed Hosting for WordPress',
      '200 GB NVMe storage',
      'Hostinger Website Builder',
      'Free email',
      'Unlimited free SSL',
      'Daily backups (₹2,149.00 value)',
      'Basic WooCommerce Optimisation',
      'Free CDN',
    ],
    isPopular: false,
  },
];

function App() {
  return (
    <div className='flex flex-col md:flex-row justify-center w-full h-auto mx-auto px-4 py-8 gap-6 md:gap-12'>
      {hostingPlans.map((plan, idx) => {
        return (
          <div
            key={idx}
            className={`relative w-full max-w-full md:max-w-sm p-6 rounded-2xl border-2 ${
              plan.isPopular ? 'border-[#8c85ff]' : 'border-slate-300'
            } hover:shadow-2xl bg-slate-100 flex flex-col justify-between`}
          >
            <div>
              <h1 className='text-2xl md:text-3xl font-bold text-[#2f1c61] text-center md:text-left'>
                {plan.plan}
              </h1>
              <p className='text-sm md:text-lg text-gray-600 mb-6 text-center md:text-left'>
                {plan.description}
              </p>

              {plan.isPopular && (
                <div className='absolute top-0 -translate-y-1/2 px-4 py-2 rounded-full bg-[#2f1c6a] text-white'>
                  Most popular
                </div>
              )}
              <div className='space-y-4'>
                <div className='flex items-center gap-4 justify-center md:justify-start'>
                  <span className='text-sm md:text-xl text-gray-500 line-through'>
                    {plan.price}
                  </span>
                  <span className='text-sm md:text-xl font-semibold text-[#2f1c61] bg-[#d5dfff] px-4 py-1 rounded-full'>
                    {plan.discount}
                  </span>
                </div>
                <h1 className='text-lg md:text-2xl text-[#2f1c61] bg-slate-200 p-4 rounded-md border-2 border-gray-300 text-center'>
                  &#x20b9;
                  <span className='text-3xl md:text-5xl font-bond'>
                    {plan.discountedPrice}
                  </span>{' '}
                  /mo
                </h1>
                <h2 className='text-sm md:text-lg font-semibold text-slate-500 text-center md:text-left'>
                  {plan.renewalPrice}
                </h2>
                <ul className='list-none mt-2 text-xs md:text-sm text-gray-600 space-y-2'>
                  {plan.features.map((feature, id) => (
                    <li className='flex items-center gap-2' key={id}>
                      <span>&#x2714;</span> <p>{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <button className='mt-auto text-sm md:text-lg w-full bg-[#673de5] font-semibold p-3 text-white rounded-lg hover:bg-[#2f1c6a] transition'>
              Choose plan
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;


