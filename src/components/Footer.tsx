import {  InstagramOutlined, TikTokOutlined, YoutubeOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* === Top Section === */}
        <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-y-12 md:gap-x-8">
          {/* Spacer */}
          <div className="hidden md:block md:col-span-1 lg:hidden"></div>

          {/* Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 col-span-1 md:col-span-7 lg:col-span-6 gap-y-12 sm:gap-x-8 md:gap-x-8 lg:gap-x-10">
            {/* Get in Touch */}
            <div>
              <h3 className="text-sm font-normal uppercase tracking-wide text-gray-400 mb-5">
                Get in Touch
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm hover:text-yellow-400 transition-colors">
                    Start a Project
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-sm hover:text-yellow-400 transition-colors">
                    Drop Us a Note
                  </a>
                </li>
              </ul>
            </div>

            {/* See More */}
            <div>
              <h3 className="text-sm font-normal uppercase tracking-wide text-gray-400 mb-5">
                See More
              </h3>
              <ul className="space-y-3">
                {["Home", "Work", "About", "Contact"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm hover:text-yellow-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow Us */}
            <div className="sm:col-span-2 md:col-span-1 lg:col-span-1">
              <h3 className="text-sm font-normal uppercase tracking-wide text-gray-400 mb-5">
                Follow Us
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="flex items-center space-x-2 hover:text-yellow-400 transition-colors">
                    <InstagramOutlined /> <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-2 hover:text-yellow-400 transition-colors">
                    <YoutubeOutlined /> <span>YouTube</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-2 hover:text-yellow-400 transition-colors">
                    <TikTokOutlined /> <span>TikTok</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* === Bottom Section === */}
        <div className="mt-16 pt-6 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-xs text-gray-500 hover:text-yellow-400">
                Sitemap
              </a>
              <a href="#" className="text-xs text-gray-500 hover:text-yellow-400">
                Privacy Policy
              </a>
            </div>
            <div className="text-xs text-gray-500">
              © 2025 <span className="text-yellow-400 font-medium">Yabsra</span> | Designed by <a href="" className="underline text-yellow-400" target="_blank">Kidus surafel</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
