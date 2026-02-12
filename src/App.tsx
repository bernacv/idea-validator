import { Button } from '@/components/ui/button';
import { Smartphone, Star, Zap, Shield, Download } from 'lucide-react';
import { Routes, Route, Link } from 'react-router-dom';
import PrivacyPolicy from './PrivacyPolicy';
import './App.css';

function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-white">YourApp</span>
            </div>
            <div className="hidden sm:flex items-center gap-6">
              <a href="#features" className="text-slate-400 hover:text-white transition-colors">Features</a>
              <a href="#download" className="text-slate-400 hover:text-white transition-colors">Download</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4" />
                <span>Now Available on App Store & Play Store</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Your App
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
                  Tagline Here
                </span>
              </h1>
              <p className="text-lg text-slate-400 mb-8 max-w-lg mx-auto lg:mx-0">
                Describe what your app does in a compelling way. This is your chance to grab attention and explain the value proposition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-white text-slate-950 hover:bg-slate-200 gap-3 h-14 px-6 w-full sm:w-48 flex justify-start sm:justify-center"
                  onClick={() => window.open('https://apps.apple.com', '_blank')}
                >
                  <svg viewBox="0 0 384 512" className="w-6 h-6 shrink-0 fill-current">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 21.8-88.5 21.8-11.4 0-51.1-20.8-83.6-20.1-42.9.6-82.7 25-104.7 63-45.1 77.7-11.5 191.9 31.6 254.1 21.4 30.7 46.8 65.1 80.2 63.9 32.3-1.2 44.4-20.8 83.4-20.8 38.8 0 50.1 20.8 83.9 20.1 34.3-.6 56.4-30.8 77.5-61.4 24.3-35.4 34.3-69.8 34.7-71.5-1-.5-66.7-25.6-66.8-102.4zM245.8 81.3c21.5-26 35.8-62.1 31.8-98.3-31.2 1.3-69.2 20.9-91.5 47-19.9 23.2-37.3 60.1-32.6 95.1 34.7 2.7 69.8-17.7 92.3-43.8z" />
                  </svg>
                  <div className="text-left leading-tight">
                    <div className="text-[10px] uppercase tracking-wider opacity-70">Download on the</div>
                    <div className="text-sm font-bold">App Store</div>
                  </div>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-700 bg-slate-900/50 text-white hover:bg-slate-800 gap-3 h-14 px-6 w-full sm:w-48 flex justify-start sm:justify-center"
                  onClick={() => window.open('https://play.google.com', '_blank')}
                >
                  <svg viewBox="0 0 512 512" className="w-5 h-5 shrink-0 fill-current">
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 58.9-34.1c18-10.3 25.5-30.3 25.5-48.7s-7.5-38.4-25.5-48.7zm-268.6 273.4l280.8-161.2-60.1-60.1-220.7 221.3z" />
                  </svg>
                  <div className="text-left leading-tight">
                    <div className="text-[10px] uppercase tracking-wider opacity-70">Get it on</div>
                    <div className="text-sm font-bold">Google Play</div>
                  </div>
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-4 justify-center lg:justify-start text-sm text-slate-500">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 border-2 border-slate-950" />
                  ))}
                </div>
                <span>Join 10,000+ happy users</span>
              </div>
            </div>
            <div className="relative">
              <div className="relative mx-auto w-72 sm:w-80">
                {/* Phone Mockup */}
                <div className="relative bg-slate-900 rounded-[3rem] p-3 shadow-2xl shadow-indigo-500/10 border border-slate-800">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl" />
                  <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] overflow-hidden aspect-[9/19] border border-slate-700/50">
                    <div className="p-6 h-full flex flex-col">
                      <div className="mt-8 text-center">
                        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-indigo-500/20">
                          <Smartphone className="w-8 h-8 text-white" />
                        </div>
                        <div className="font-bold text-white text-lg">YourApp</div>
                        <div className="text-slate-500 text-sm">Welcome back!</div>
                      </div>
                      <div className="mt-8 space-y-3">
                        <div className="h-12 bg-slate-700/50 rounded-xl border border-slate-600/30" />
                        <div className="h-12 bg-slate-700/50 rounded-xl border border-slate-600/30" />
                        <div className="h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl" />
                      </div>
                      <div className="mt-auto grid grid-cols-3 gap-2">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="aspect-square bg-slate-700/30 rounded-xl border border-slate-600/20" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl opacity-30 blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full opacity-30 blur-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Everything You Need
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Discover the powerful features that make our app stand out from the rest.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-6 h-6 text-amber-400" />,
                title: 'Lightning Fast',
                description: 'Experience blazing fast performance with our optimized engine.',
                gradient: 'from-amber-500/10 to-orange-500/10',
                border: 'border-amber-500/20'
              },
              {
                icon: <Shield className="w-6 h-6 text-emerald-400" />,
                title: 'Secure & Private',
                description: 'Your data is protected with enterprise-grade encryption.',
                gradient: 'from-emerald-500/10 to-teal-500/10',
                border: 'border-emerald-500/20'
              },
              {
                icon: <Download className="w-6 h-6 text-indigo-400" />,
                title: 'Easy to Use',
                description: 'Intuitive interface designed for everyone, no learning curve.',
                gradient: 'from-indigo-500/10 to-purple-500/10',
                border: 'border-indigo-500/20'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl bg-gradient-to-br ${feature.gradient} border ${feature.border} hover:border-opacity-50 transition-all hover:shadow-lg hover:shadow-indigo-500/5`}
              >
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center border border-slate-700 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section id="download" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-indigo-100 text-lg mb-8 max-w-xl mx-auto">
                Download the app now and join thousands of users who are already enjoying the benefits.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-indigo-600 hover:bg-indigo-50 gap-3 h-14 px-6 w-full sm:w-48 flex justify-start sm:justify-center"
                  onClick={() => window.open('https://apps.apple.com', '_blank')}
                >
                  <svg viewBox="0 0 384 512" className="w-6 h-6 shrink-0 fill-current">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 21.8-88.5 21.8-11.4 0-51.1-20.8-83.6-20.1-42.9.6-82.7 25-104.7 63-45.1 77.7-11.5 191.9 31.6 254.1 21.4 30.7 46.8 65.1 80.2 63.9 32.3-1.2 44.4-20.8 83.4-20.8 38.8 0 50.1 20.8 83.9 20.1 34.3-.6 56.4-30.8 77.5-61.4 24.3-35.4 34.3-69.8 34.7-71.5-1-.5-66.7-25.6-66.8-102.4zM245.8 81.3c21.5-26 35.8-62.1 31.8-98.3-31.2 1.3-69.2 20.9-91.5 47-19.9 23.2-37.3 60.1-32.6 95.1 34.7 2.7 69.8-17.7 92.3-43.8z" />
                  </svg>
                  <div className="text-left leading-tight">
                    <div className="text-[10px] uppercase tracking-wider opacity-70">Download on the</div>
                    <div className="text-sm font-bold">App Store</div>
                  </div>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 gap-3 h-14 px-6 w-full sm:w-48 flex justify-start sm:justify-center"
                  onClick={() => window.open('https://play.google.com', '_blank')}
                >
                  <svg viewBox="0 0 512 512" className="w-5 h-5 shrink-0 fill-current">
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 58.9-34.1c18-10.3 25.5-30.3 25.5-48.7s-7.5-38.4-25.5-48.7zm-268.6 273.4l280.8-161.2-60.1-60.1-220.7 221.3z" />
                  </svg>
                  <div className="text-left leading-tight">
                    <div className="text-[10px] uppercase tracking-wider opacity-70">Get it on</div>
                    <div className="text-sm font-bold">Google Play</div>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-white">YourApp</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
            <div className="text-sm text-slate-600">
              © 2025 YourApp. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
    </Routes>
  );
}

export default App;

