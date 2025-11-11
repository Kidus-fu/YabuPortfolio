import React from 'react';

const Service: React.FC = () => {
  return (
    <div className="bg-gray-950">
      <section
        id="features"
        className="relative block px-6 py-10 md:py-20 md:px-10 bg-gray-950"
      >
        <div className="relative mx-auto max-w-5xl text-center">
          <span className="text-gray-400 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="block w-full bg-linear-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
            Bring Your Story to Life With Stunning Video Edits
          </h2>
          <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
            We transform your raw footage into professional, cinematic quality
            videos that capture attention, emotion, and imagination.
          </p>
        </div>

        <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 */}
          <div className="rounded-md border border-amber-600/20 bg-neutral-900/50 p-8 text-center shadow">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-yellow-400 border">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-video"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M7 15l4 -4l-4 -4v8z" />
              </svg>
            </div>
            <h3 className="mt-6 text-gray-400">Creative Storytelling</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
              Every cut, transition, and sound effect is chosen to tell your
              story powerfully and emotionally.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="rounded-md border border-amber-600/20 bg-neutral-900/50 p-8 text-center shadow">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-yellow-400 border">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-bolt"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3" />
              </svg>
            </div>
            <h3 className="mt-6 text-gray-400">Fast Delivery</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
              We understand your deadlines. Get your professionally edited
              videos delivered quickly without sacrificing quality.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="rounded-md border border-amber-600/20 bg-neutral-900/50 p-8 text-center shadow">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-yellow-400 border">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-adjustments-alt"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="6" cy="10" r="2" />
                <line x1="6" y1="4" x2="6" y2="8" />
                <line x1="6" y1="12" x2="6" y2="20" />
                <circle cx="12" cy="16" r="2" />
                <line x1="12" y1="4" x2="12" y2="14" />
                <line x1="12" y1="18" x2="12" y2="20" />
                <circle cx="18" cy="7" r="2" />
                <line x1="18" y1="4" x2="18" y2="5" />
                <line x1="18" y1="9" x2="18" y2="20" />
              </svg>
            </div>
            <h3 className="mt-6 text-gray-400">Professional Tools</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
              Edited using industry-standard tools like Premiere Pro, After
              Effects, and DaVinci Resolve for cinematic precision.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"></div>
        <div className="absolute bottom-0 right-0 z-0 h-1/3 w-full"></div>
      </section>
    </div>
  );
};

export default Service;
