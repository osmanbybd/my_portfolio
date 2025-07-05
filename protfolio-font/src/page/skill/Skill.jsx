import React, { useState } from "react";

// Custom SVG Icons
const Icons = {
  HTML5: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
    </svg>
  ),
  CSS3: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
    </svg>
  ),
  JavaScript: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
    </svg>
  ),
  React: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.866.728-.064 1.466-.099 2.21-.099zm-3.635.875c-.34.653-.66 1.318-.955 1.981-.29-.651-.615-1.295-.955-1.981.64-.05 1.298-.075 1.955-.075.64 0 1.298.025 1.955.075zm7.271 0c.34.653.66 1.318.955 1.981.29-.651.615-1.295.955-1.981-.64-.05-1.298-.075-1.955-.075-.64 0-1.298.025-1.955.075zM15.365 14.02c-.34.653-.66 1.318-.955 1.981.29-.651.615-1.295.955-1.981.64.05 1.298.075 1.955.075.64 0 1.298-.025 1.955-.075zm-7.271 0c.34.653.66 1.318.955 1.981-.29-.651-.615-1.295-.955-1.981-.64.05-1.298.075-1.955.075-.64 0-1.298-.025-1.955-.075z"/>
    </svg>
  ),
  TailwindCSS: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C7.666,17.818,9.027,19.2,12.001,19.2c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
    </svg>
  ),
  Node: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
    </svg>
  ),
  MongoDB: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/>
    </svg>
  ),
  Firebase: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M5.229 4.382l3.821 3.848-.888-6.908c-.143-.988.229-1.953.993-2.565.764-.613 1.772-.854 2.760-.711.988.143 1.953.229 2.565.993.613.764.854 1.772.711 2.76l-.888 6.908 3.821-3.848c.532-.532 1.243-.831 1.974-.831.731 0 1.442.299 1.974.831.532.532.831 1.243.831 1.974 0 .731-.299 1.442-.831 1.974l-7.164 7.164c-.532.532-1.243.831-1.974.831-.731 0-1.442-.299-1.974-.831L5.229 6.356c-.532-.532-.831-1.243-.831-1.974 0-.731.299-1.442.831-1.974z"/>
    </svg>
  ),
  Git: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
    </svg>
  ),
  Github: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  ),
  Figma: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117v-6.038H8.148zm7.704 0c-2.476 0-4.49 2.014-4.49 4.49s2.014 4.49 4.49 4.49 4.49-2.014 4.49-4.49-2.014-4.49-4.49-4.49zm0 7.509c-1.665 0-3.019-1.355-3.019-3.019s1.354-3.019 3.019-3.019 3.019 1.354 3.019 3.019-1.354 3.019-3.019 3.019z"/>
    </svg>
  ),
  Express: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957c-2.643 1.612-6.923.404-8.699-2.839C.054 14.406-.187 12.787.002 11.576z"/>
    </svg>
  ),
  Stripe: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M13.479 9.883c-1.626-.604-2.512-1.067-2.512-1.803 0-.622.511-.977 1.423-.977 1.667 0 3.379.642 4.558 1.22l.666-4.111c-.935-.446-2.547-1.177-5.49-1.177-1.87 0-3.425.489-4.558 1.401-1.204 1.023-1.825 2.356-1.825 3.886 0 2.516 1.622 3.518 3.514 4.21 1.626.6 2.57 1.112 2.57 1.803 0 .622-.555 1.04-1.517 1.04-2.048 0-3.736-.755-4.963-1.447l-.666 4.111c1.071.535 2.728 1.178 5.8 1.178 1.896 0 3.551-.467 4.684-1.313 1.2-.909 1.812-2.197 1.812-3.886 0-2.515-1.744-3.562-3.695-4.135l-.801-.302zM2.095 6.913l5.291 18.087h5.193L18.016 6.914c-1.78-.335-3.849-.335-5.807 0l.024.335c0 2.516-1.622 3.518-3.514 4.21-1.626.6-2.57 1.112-2.57 1.803 0 .622.555 1.04 1.517 1.04 2.048 0 3.736-.755 4.963-1.447l.666 4.111c-1.071.535-2.728 1.178-5.8 1.178-1.896 0-3.551-.467-4.684-1.313-1.2-.909-1.812-2.197-1.812-3.886 0-2.515 1.744-3.562 3.695-4.135l.801-.302z"/>
    </svg>
  ),
  Vercel: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M12 0L24 20.25H0L12 0z"/>
    </svg>
  ),
  Netlify: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zM9.568 7.918c.555 0 1.005.45 1.005 1.005s-.45 1.005-1.005 1.005-1.005-.45-1.005-1.005.45-1.005 1.005-1.005zm4.864 0c.555 0 1.005.45 1.005 1.005s-.45 1.005-1.005 1.005-1.005-.45-1.005-1.005.45-1.005 1.005-1.005zM12 20.25c-4.549 0-8.25-3.701-8.25-8.25S7.451 3.75 12 3.75s8.25 3.701 8.25 8.25S16.549 20.25 12 20.25z"/>
    </svg>
  ),
  Framer: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M4 0h16v8h-8zM4 8h8l8-8v16h-8zM4 16h8v8z"/>
    </svg>
  ),
  DaisyUI: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M12 0c6.628 0 12 5.373 12 12s-5.372 12-12 12S0 18.627 0 12 5.372 0 12 0zM8.5 6.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm7 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM12 16c-2.485 0-4.5-2.015-4.5-4.5S9.515 7 12 7s4.5 2.015 4.5 4.5S14.485 16 12 16z"/>
    </svg>
  ),
  ReactRouter: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z"/>
    </svg>
  ),
  Swiper: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z"/>
    </svg>
  ),
  AOS: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z"/>
    </svg>
  ),
  Axios: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z"/>
    </svg>
  ),
  JWT: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z"/>
    </svg>
  )
};

const skillCategories = {
  Frontend: [
    { name: "HTML5", icon: <Icons.HTML5 />, color: "#E34F26", level: "Advanced", desc: "Semantic structure & SEO-friendly markup" },
    { name: "CSS3", icon: <Icons.CSS3 />, color: "#1572B6", level: "Advanced", desc: "Responsive & modern design" },
    { name: "JavaScript", icon: <Icons.JavaScript />, color: "#F7DF1E", level: "Advanced", desc: "Core JS, DOM & ES6+" },
    { name: "React", icon: <Icons.React />, color: "#61DAFB", level: "Advanced", desc: "Component-based SPA" },
    { name: "React Router", icon: <Icons.ReactRouter />, color: "#CA4245", level: "Intermediate", desc: "Dynamic routing & nested routes" },
    { name: "Tailwind CSS", icon: <Icons.TailwindCSS />, color: "#06B6D4", level: "Advanced", desc: "Utility-first styling" },
    { name: "DaisyUI", icon: <Icons.DaisyUI />, color: "#FFD500", level: "Advanced", desc: "Prebuilt Tailwind components" },
    { name: "Swiper", icon: <Icons.Swiper />, color: "#6332F6", level: "Intermediate", desc: "Responsive sliders" },
    { name: "Framer Motion", icon: <Icons.Framer />, color: "#0055FF", level: "Intermediate", desc: "Modern animations" },
    { name: "AOS Animation", icon: <Icons.AOS />, color: "#FCA311", level: "Intermediate", desc: "Scroll animation library" },
  ],
  Backend: [
    { name: "Node.js", icon: <Icons.Node />, color: "#339933", level: "Intermediate", desc: "Backend API & scripting" },
    { name: "Express.js", icon: <Icons.Express />, color: "#000000", level: "Intermediate", desc: "RESTful API & middleware" },
    { name: "MongoDB", icon: <Icons.MongoDB />, color: "#47A248", level: "Intermediate", desc: "NoSQL document database" },
    { name: "Firebase", icon: <Icons.Firebase />, color: "#FFCA28", level: "Intermediate", desc: "Auth & hosting" },
    { name: "Axios", icon: <Icons.Axios />, color: "#5A29E4", level: "Intermediate", desc: "Promise-based HTTP client" },
    { name: "JWT", icon: <Icons.JWT />, color: "#000000", level: "Intermediate", desc: "Token-based auth system" },
    { name: "Stripe", icon: <Icons.Stripe />, color: "#635BFF", level: "Beginner", desc: "Secure payment gateway" },
  ],
  Tools: [
    { name: "Git", icon: <Icons.Git />, color: "#F05032", level: "Intermediate", desc: "Version control" },
    { name: "GitHub", icon: <Icons.Github />, color: "#181717", level: "Intermediate", desc: "Code hosting" },
    { name: "Netlify", icon: <Icons.Netlify />, color: "#00C7B7", level: "Intermediate", desc: "Static hosting & CI" },
    { name: "Vercel", icon: <Icons.Vercel />, color: "#000000", level: "Intermediate", desc: "React/Vite hosting" },
    { name: "Figma", icon: <Icons.Figma />, color: "#F24E1E", level: "Intermediate", desc: "UI/UX Design" },
  ],
};

const Skill = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const getLevelColor = (level) => {
    switch (level) {
      case "Advanced":
        return "bg-green-500";
      case "Intermediate":
        return "bg-yellow-500";
      case "Beginner":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getLevelWidth = (level) => {
    switch (level) {
      case "Advanced":
        return "w-5/6";
      case "Intermediate":
        return "w-3/5";
      case "Beginner":
        return "w-2/5";
      default:
        return "w-1/4";
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Skills & Technologies
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore my technical expertise across different domains
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex justify-center mb-10">
          <div className="flex bg-slate-800/50 backdrop-blur-md rounded-full p-2 border border-slate-700">
            {Object.keys(skillCategories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105"
                    : "text-gray-400 hover:text-white hover:bg-slate-700/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {skillCategories[activeCategory].map((skill, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="relative bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-4 hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1">
                {/* Skill Icon */}
                <div className="flex flex-col items-center text-center">
                  <div 
                    className="text-3xl mb-3 transition-all duration-300 group-hover:scale-110"
                    style={{ color: skill.color }}
                  >
                    {skill.icon}
                  </div>
                  
                  {/* Skill Name */}
                  <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {skill.name}
                  </h3>
                  
                  {/* Level Badge */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`w-2 h-2 rounded-full ${getLevelColor(skill.level)}`}></span>
                    <span className="text-xs text-gray-400">{skill.level}</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-slate-700 rounded-full h-1.5 mb-2">
                    <div 
                      className={`h-1.5 rounded-full transition-all duration-700 ${getLevelColor(skill.level)} ${getLevelWidth(skill.level)}`}
                      style={{
                        animation: hoveredSkill === index ? 'pulse 2s infinite' : 'none'
                      }}
                    ></div>
                  </div>
                </div>

                {/* Hover Tooltip */}
                {hoveredSkill === index && (
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-900 border border-slate-600 rounded-lg px-3 py-2 text-xs text-gray-300 whitespace-nowrap z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {skill.desc}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
            <div className="text-3xl font-bold text-blue-400 mb-2">
              {skillCategories[activeCategory].length}
            </div>
            <div className="text-gray-400">Technologies</div>
          </div>
          <div className="text-center bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
            <div className="text-3xl font-bold text-purple-400 mb-2">
              {skillCategories[activeCategory].filter(s => s.level === "Advanced").length}
            </div>
            <div className="text-gray-400">Advanced</div>
          </div>
          <div className="text-center bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
            <div className="text-3xl font-bold text-pink-400 mb-2">
              {Object.values(skillCategories).flat().length}
            </div>
            <div className="text-gray-400">Total Skills</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </section>
  );
};

export default Skill;