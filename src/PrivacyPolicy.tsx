import { Button } from '@/components/ui/button';
import {
    ChevronLeft, Shield, Lock, Eye, FileText, Globe, Users,
    MessageSquare, Handshake, Database, RefreshCcw, History, Info
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PrivacyPolicy() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-950 text-white selection:bg-indigo-500/30">
            {/* Background decoration */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
                <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px]" />
                <div className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px]" />
            </div>

            <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <div className="flex items-center h-16">
                        <Button
                            variant="ghost"
                            className="text-slate-400 hover:text-white -ml-4 gap-2 transition-colors"
                            onClick={() => navigate('/')}
                        >
                            <ChevronLeft className="w-4 h-4" />
                            Back to Home
                        </Button>
                    </div>
                </div>
            </nav>

            <main className="pt-32 pb-20 px-4 sm:px-6">
                <article className="max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-full text-xs font-medium mb-6">
                        <Shield className="w-3 h-3" />
                        <span>Last Updated: February 2026</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                        Privacy Policy
                    </h1>
                    <p className="text-xl font-medium text-indigo-400 mb-8">IdeaValidator - AI SaaS Idea Analysis</p>

                    <div className="prose prose-invert max-w-none text-slate-400 leading-relaxed space-y-8 mb-16">
                        <p>
                            IdeaValidator ("we," "us," or "our") respects your privacy and is committed to protecting your personal information. This Privacy Policy describes how we collect, use, and disclose information when you use our mobile application IdeaValidator (the "App").
                        </p>
                        <p>
                            By downloading, accessing, or using IdeaValidator, you consent to the practices described in this Privacy Policy.
                        </p>
                    </div>

                    <div className="space-y-16">
                        {/* 1. Information We Collect */}
                        <section>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700">
                                    <Eye className="w-5 h-5 text-indigo-400" />
                                </div>
                                <h2 className="text-2xl font-bold text-white">1. Information We Collect</h2>
                            </div>
                            <div className="space-y-6 text-slate-400 leading-relaxed pl-13">
                                <div>
                                    <h3 className="text-white font-semibold mb-2">1.1 Account Information</h3>
                                    <p>When you create an account or sign in, we may collect:</p>
                                    <ul className="list-disc pl-5 mt-2 space-y-1">
                                        <li>Email address (for email/password signups)</li>
                                        <li>Display name (from Google or Apple Sign-In)</li>
                                        <li>User ID (unique identifier assigned by Firebase)</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold mb-2">1.2 Device Information</h3>
                                    <ul className="list-disc pl-5 mt-2 space-y-1">
                                        <li>Device identifier (Android ID or iOS IDFV) — hashed using SHA256</li>
                                        <li>Device type and operating system version</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold mb-2">1.3 Usage and Transaction Data</h3>
                                    <ul className="list-disc pl-5 mt-2 space-y-1">
                                        <li>Credit balance and usage</li>
                                        <li>Purchase history processed through app stores</li>
                                    </ul>
                                </div>
                                <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
                                    <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                                        <Info className="w-4 h-4 text-indigo-400" />
                                        Information We Do NOT Collect
                                    </h3>
                                    <ul className="grid sm:grid-cols-2 gap-2 text-sm">
                                        <li>• Payment card details</li>
                                        <li>• Precise location data</li>
                                        <li>• Contacts or address book</li>
                                        <li>• Health or fitness data</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* 2. How We Use Your Information */}
                        <section>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700">
                                    <RefreshCcw className="w-5 h-5 text-purple-400" />
                                </div>
                                <h2 className="text-2xl font-bold text-white">2. How We Use Your Information</h2>
                            </div>
                            <div className="space-y-4 text-slate-400 leading-relaxed pl-13">
                                <p>We use the information we collect to:</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li><strong>Manage Account:</strong> Authenticate identity and maintain profiles.</li>
                                    <li><strong>Process Transactions:</strong> Handle in-app purchases and credit balances.</li>
                                    <li><strong>Improve Services:</strong> Enhanced functionality based on user interaction.</li>
                                    <li><strong>Prevent Fraud:</strong> Protect against abuse of free credit offers.</li>
                                    <li><strong>Communicate:</strong> Send important account or service updates.</li>
                                </ul>
                            </div>
                        </section>

                        {/* 3. How We Share Your Information */}
                        <section>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700">
                                    <Handshake className="w-5 h-5 text-emerald-400" />
                                </div>
                                <h2 className="text-2xl font-bold text-white">3. How We Share Your Information</h2>
                            </div>
                            <div className="space-y-4 text-slate-400 leading-relaxed pl-13">
                                <p>We do not sell your personal information. We share data only with:</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li><strong>Service Providers:</strong> Partners like Firebase and RevenueCat.</li>
                                    <li><strong>Legal Requirements:</strong> If required by law or to protect user safety.</li>
                                    <li><strong>Business Transfers:</strong> In case of merger or acquisition.</li>
                                </ul>
                            </div>
                        </section>

                        {/* 4. Third-Party Services */}
                        <section>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700">
                                    <Globe className="w-5 h-5 text-blue-400" />
                                </div>
                                <h2 className="text-2xl font-bold text-white">4. Third-Party Services</h2>
                            </div>
                            <div className="space-y-4 text-slate-400 leading-relaxed pl-13">
                                <p>We integrate with industry leaders, each with their own policies:</p>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {['Firebase', 'Google Sign-In', 'Apple Sign-In', 'RevenueCat'].map((service) => (
                                        <div key={service} className="p-3 bg-slate-900/50 border border-slate-800 rounded-lg text-sm text-center">
                                            {service}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* 5. Data Storage and Security */}
                        <section>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700">
                                    <Database className="w-5 h-5 text-amber-400" />
                                </div>
                                <h2 className="text-2xl font-bold text-white">5. Data Storage and Security</h2>
                            </div>
                            <div className="space-y-4 text-slate-400 leading-relaxed pl-13">
                                <p><strong>Local:</strong> Analysis history is encrypted locally on your device.</p>
                                <p><strong>Cloud:</strong> Account data is stored in Firebase; credits in RevenueCat.</p>
                                <p><strong>Security:</strong> We use HTTPS, JWT authentication, and SHA256 hashing.</p>
                            </div>
                        </section>

                        {/* 6. Data Retention */}
                        <section>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700">
                                    <History className="w-5 h-5 text-orange-400" />
                                </div>
                                <h2 className="text-2xl font-bold text-white">6. Data Retention</h2>
                            </div>
                            <div className="space-y-4 text-slate-400 leading-relaxed pl-13">
                                <p>Account data is retained until deletion. Idea submissions are processed in real-time and not permanently stored after analysis is complete.</p>
                            </div>
                        </section>

                        {/* 7. Your Rights and Choices */}
                        <section>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700">
                                    <Users className="w-5 h-5 text-pink-400" />
                                </div>
                                <h2 className="text-2xl font-bold text-white">7. Your Rights and Choices</h2>
                            </div>
                            <div className="space-y-4 text-slate-400 leading-relaxed pl-13">
                                <p>You have full control over your data, including account deletion, clearing local history, and opting out of data collection by uninstalling.</p>
                            </div>
                        </section>

                        {/* 8. Children's Privacy */}
                        <section>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700">
                                    <Lock className="w-5 h-5 text-red-400" />
                                </div>
                                <h2 className="text-2xl font-bold text-white">8. Children's Privacy</h2>
                            </div>
                            <div className="space-y-4 text-slate-400 leading-relaxed pl-13">
                                <p>IdeaValidator is not directed toward children under 13. We do not knowingly collect information from children. If you believe we have inadvertently collected such data, please contact us.</p>
                            </div>
                        </section>

                        {/* 9. International Data Transfers */}
                        <section>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700">
                                    <Globe className="w-5 h-5 text-teal-400" />
                                </div>
                                <h2 className="text-2xl font-bold text-white">9. International Data Transfers</h2>
                            </div>
                            <div className="space-y-4 text-slate-400 leading-relaxed pl-13">
                                <p>Your information may be processed in countries like the United States where our providers operate, with appropriate safeguards in place.</p>
                            </div>
                        </section>

                        {/* 10. Changes to Policy */}
                        <section>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700">
                                    <FileText className="w-5 h-5 text-cyan-400" />
                                </div>
                                <h2 className="text-2xl font-bold text-white">10. Changes to This Privacy Policy</h2>
                            </div>
                            <div className="space-y-4 text-slate-400 leading-relaxed pl-13">
                                <p>We may update this policy periodically. Material changes will be notified within the App or via app store update notes.</p>
                            </div>
                        </section>
                    </div>

                    {/* 11. Contact Us */}
                    <div className="mt-32 pt-12 border-t border-slate-800 text-center">
                        <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700 mx-auto mb-6 shadow-lg shadow-indigo-500/10">
                            <MessageSquare className="w-8 h-8 text-indigo-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">11. Contact Us</h3>
                        <p className="text-slate-400 mb-8 max-w-sm mx-auto">Have questions or requests regarding your data? Our team is available to help.</p>
                        <Button
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 h-12 rounded-full font-semibold transition-all hover:scale-105"
                            onClick={() => window.location.href = 'mailto:bernardo.studios.dev@gmail.com'}
                        >
                            Contact Support
                        </Button>
                        <p className="mt-4 text-xs text-slate-500">bernardo.studios.dev@gmail.com</p>
                    </div>
                </article>
            </main>

            <footer className="py-12 px-4 border-t border-slate-900 bg-slate-950">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-sm text-slate-600">
                        © 2026 IdeaValidator. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
