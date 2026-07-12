import { footerLinks } from "./FooterData";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">


          {/* Brand */}
          <div>

            <h2 className="text-2xl font-bold">
              NdarilaAI
            </h2>

            <p className="text-cyan-400 font-medium">
              Career Copilot
            </p>


            <p className="mt-4 text-slate-400">
              AI-powered career intelligence helping
              professionals improve CVs, interviews,
              skills and job opportunities.
            </p>

          </div>


          {/* Links */}
          {footerLinks.map((section) => (

            <div key={section.title}>

              <h3 className="font-semibold mb-4">
                {section.title}
              </h3>


              <ul className="space-y-3">

                {section.links.map((link) => (

                  <li
                    key={link}
                    className="text-slate-400 hover:text-cyan-400 cursor-pointer transition"
                  >
                    {link}
                  </li>

                ))}

              </ul>

            </div>

          ))}


        </div>


        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-500">

          © 2026 James Ndarila Wanjala

        </div>


      </div>


    </footer>
  );
}