/**
 * Mock plugin for development and production.
 * https://github.com/anncwb/vite-plugin-mock
 */
import Unocss from 'unocss/vite';
import { presetWind } from 'unocss';
import UnocssIcons from '@unocss/preset-icons';

export function configUnoCssPlugin() {
  return Unocss({
    preflights: createEnterPreflights(),
    presets: [
      presetWind(),
      UnocssIcons({
        // options
        prefix: 'i-',
        extraProperties: {
          display: 'inline-block',
        },
      }),
    ],
  });
}

function createEnterPreflights(maxOutput = 10) {
  const createCss = (index, d = 'x') => {
    const upd = d.toUpperCase();
    return {
      getCSS: () => `
        *> .enter-${d}:nth-child(${index}) {
          transform: translate${upd}(50px);
        }
        *> .-enter-${d}:nth-child(${index}) {
          transform: translate${upd}(-50px);
        }
        *> .enter-${d}:nth-child(${index}),* > .-enter-${d}:nth-child(${index}) {
          z-index: ${10 - index};
          opacity: 0;
          animation: enter-${d}-animation 0.4s ease-in-out 0.3s;
          animation-fill-mode: forwards;
          animation-delay: ${(index * 1) / 10}s;
        }
      `,
    };
  };
  const handler = () => {
    const addRawCss: any = [];
    for (let index = 1; index < maxOutput; index++) {
      addRawCss.push(createCss(index, 'x'));
      addRawCss.push(createCss(index, 'y'));
    }
    addRawCss.push({
      getCSS: () => `
      @keyframes enter-x-animation {
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      @keyframes enter-y-animation {
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
       `,
    });
    return addRawCss;
  };
  return handler();
}
