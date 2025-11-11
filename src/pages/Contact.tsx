import React from 'react'

const ContactPage: React.FC = () => {
  return (
    <section className="bg-black min-h-screen py-16 sm:mt-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-b from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Contact Me
          </h2>
          <p className="mt-3 text-gray-400 max-w-xl mx-auto">
            I’m available for freelance work, collaborations, and questions. Drop a line and I’ll respond soon.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Form */}
          <form className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-6 shadow">
            <div className="mb-4">
              <label className="block font-medium mb-2 text-yellow-400" htmlFor="contact-name">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                className="w-full rounded-md bg-neutral-900 text-white px-3 py-2 border-none focus:outline-none"
                placeholder="Your name"
                style={{ boxShadow: 'none', border: 'none' }}
              />
            </div>

            <div className="mb-4">
              <label className="block font-medium mb-2 text-yellow-400" htmlFor="contact-email">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                className="w-full rounded-md bg-neutral-900 text-white px-3 py-2 border-none focus:outline-none"
                placeholder="you@example.com"
                style={{ boxShadow: 'none', border: 'none' }}
              />
            </div>

            <div className="mb-6">
              <label className="block font-medium mb-2 text-yellow-400" htmlFor="contact-message">
                Message
              </label>
              <textarea
                id="contact-message"
                className="w-full rounded-md bg-neutral-900 text-white px-3 py-2 h-32 border-none focus:outline-none"
                placeholder="Tell me about your project..."
                style={{ boxShadow: 'none', border: 'none' }}
              />
            </div>

            <button
              type="button"
              className="w-full rounded-lg bg-yellow-500 text-black font-semibold px-6 py-3 hover:bg-yellow-600 transition-colors"
            >
              Send Message
            </button>
          </form>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            {[
              { title: 'Yabu Zeke', email: 'yabuzeke049@gmail.com', phone: '+251987386477' },
              { title: 'Bug Report', email: 'kidussurafeldev@gmial.com', phone: '+251930980499' },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-6 shadow">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md p-4 text-yellow-400 bg-neutral-800">
                      {/* Simple icon placeholder */}
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7v5l3 3" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="mb-1 font-bold text-white">{item.title}</p>
                    <a href={`mailto:${item.email}`} className="text-yellow-400 hover:underline">
                      {item.email}
                    </a>
                    <p className="text-gray-400">{item.phone}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage