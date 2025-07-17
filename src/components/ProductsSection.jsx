import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

import gelblackdiamond from '../assets/gelblackdiamond.webp';
import gelprotax from '../assets/gelprotax.webp';
import kgel from '../assets/k-gel.webp';
import optimum from '../assets/optimum.webp';
import protax from '../assets/protax.webp';
import reformer from '../assets/reformer.webp';
import wondercombi from '../assets/wondercombi.webp';
import wondercombiPlus from '../assets/wondercombi+.webp';
import sparkle from '../assets/sparkle.png';
import protaxgold from '../assets/protaxgold.png';
import energizer from '../assets/energizer.webp';
import gainmore from '../assets/gainmore.webp';
import blackdiamond from '../assets/blackdiamond1.webp';
import Activator from '../assets/Activator.png';

const ProductCard = ({ product }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={`relative w-80 h-96 perspective cursor-pointer transition-all duration-700 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {inView && (
        <div
          className="relative w-full h-full duration-700 transform-style-preserve-3d"
          style={{
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            transition: 'transform 0.7s',
          }}
        >
          {/* Front */}
          <div
            className="absolute w-full h-full rounded-xl bg-white shadow-lg overflow-hidden"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <div
              className="w-full h-2/3 bg-center bg-cover"
              style={{ backgroundImage: `url(${product.image})` }}
            ></div>
            <div className="p-4 h-1/3 flex flex-col justify-between">
              <h3 className="text-gray-900 font-bold text-xl">{product.title}</h3>
              <p className="text-gray-700 text-sm">{product.description}</p>
            </div>
          </div>

          {/* Back */}
          <div
            className="absolute w-full h-full rounded-xl bg-green-700 text-white p-6 shadow-xl overflow-y-auto"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            <h3 className="text-2xl font-bold mb-4">{product.title}</h3>
            <ul className="list-disc ml-4 space-y-1 text-sm whitespace-pre-line">
              {product.details.split('\n').map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

const ProductsSection = ({ bgImage }) => {
  const products = [
    {
      id: 1,
      title: 'Gel Black Diamond',
      description: 'Improves nitrogen content and drought resistance.',
      details: `Boosts nitrogen content in soil\nImproves water retention\nEnhances photosynthesis\nImproves drought tolerance and vigor`,
      image: gelblackdiamond,
    },
    {
      id: 2,
      title: 'Gel Protax',
      description: 'Boosts plant immunity and yield.',
      details: `Stimulates plant immunity\nImproves nutrient absorption\nEnhances fruit color and taste\nPromotes healthy root system`,
      image: gelprotax,
    },
    {
      id: 3,
      title: 'K-Gel',
      description: 'Rich potassium content for fruiting.',
      details: `Promotes flowering and fruit set\nImproves taste and color\nReduces dropping\nBoosts immunity`,
      image: kgel,
    },
    {
      id: 4,
      title: 'Optimum',
      description: 'All-in-one growth solution.',
      details: `Increases photosynthesis\nStrengthens roots\nEnhances flowering and fruiting\nStress resistance for all crops`,
      image: optimum,
    },
    {
      id: 5,
      title: 'Protax',
      description: 'Activates natural defense.',
      details: `Improves plant metabolism\nResistance to pests\nBoosts immunity\nEnhances crop quality`,
      image: protax,
    },
    {
      id: 6,
      title: 'Reformer',
      description: 'Revives soil and plant.',
      details: `Improves soil fertility\nSupports root/shoot growth\nDetoxifies soil\nEnhances microbial life`,
      image: reformer,
    },
    {
      id: 7,
      title: 'Wonder Combi',
      description: 'Improves Micrbial Activity.',
      details: `Improves chlorophyll synthesis\nCorrects micronutrient deficiency\nEnsures better fruiting\nUniversal for crops`,
      image: wondercombi,
    },
    {
      id: 8,
      title: 'Wonder Combi+',
      description: 'Enhanced micronutrients.',
      details: `Fortified with bio-stimulants\nImproves fruit size\nTreats hidden hunger\nResists diseases`,
      image: wondercombiPlus,
    },
    {
      id: 9,
      title: 'Sparkle',
      description: 'Boosts chlorophyll & vigor.',
      details: `Enhances photosynthesis\nIncreases chlorophyll\nStimulates growth\nImproves resistance`,
      image: sparkle,
    },
    {
      id: 10,
      title: 'Protax Gold',
      description: 'Advanced immunity booster.',
      details: `Next-gen formula\nFights stress and disease\nEnhances root development\nIncreases yield`,
      image: protaxgold,
    },
    {
      id: 11,
      title: 'Energizer',
      description: 'Crop revitalizer and growth booster.',
      details: `Activates metabolic activity\nImproves plant vigor\nStimulates growth\nRevives tired crops`,
      image: energizer,
    },
    {
      id: 12,
      title: 'Gain More',
      description: 'Increases fruit size and weight.',
      details: `Improves fruit size\nBoosts crop weight\nIncreases sugar and taste\nEnhances productivity`,
      image: gainmore,
    },
    {
      id: 13,
      title: 'Black Diamond',
      description: 'Organic carbon-rich bio stimulant.',
      details: `Rich in organic carbon\nImproves soil structure\nBoosts microbial activity\nEnhances plant vitality`,
      image: blackdiamond,
    },
    {
      id: 14,
      title: 'Activator',
      description: 'Improves spray coverage and penetration.',
      details: `Enhances performance of agricultural products such as Growth Promoters, 
Herbicides, Fungicides and Insecticides.\nSticks properly, enhances adhesion and penetration of droplets.\nSustainable plant support`,
      image: Activator,
    },
  ];

  return (
    <section
      id="products"
      className="relative py-16 text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div
        className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm"
        aria-hidden="true"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 5%)',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%)',
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Products</h2>
        <div className="flex justify-center gap-8 flex-wrap">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
