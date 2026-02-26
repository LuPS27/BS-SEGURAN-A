import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contato" className="py-16 lg:py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-black text-bs-green uppercase">Fale Conosco</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                        Tem alguma dúvida ou precisa de um orçamento? Preencha o formulário abaixo ou entre em contato pelos nossos canais.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Contact Info */}
                    <div className="bg-bs-green p-8 lg:p-12 text-white overflow-hidden">
                        <h3 className="text-2xl font-bold mb-8">Informações de Contato</h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-white/10 p-3 rounded-lg flex-shrink-0">
                                    <Phone className="w-6 h-6 text-bs-green" />
                                </div>
                                <div className="min-w-0">
                                    <p className="font-bold text-bs-silver">Telefone / WhatsApp</p>
                                    <a
                                        href={`https://api.whatsapp.com/send?phone=${SITE_CONFIG.whatsappNumber}`}
                                        className="hover:text-bs-silver transition-colors break-words"
                                    >
                                        {SITE_CONFIG.phone}
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-white/10 p-3 rounded-lg flex-shrink-0">
                                    <Mail className="w-6 h-6 text-bs-green" />
                                </div>
                                <div className="min-w-0 overflow-hidden">
                                    <p className="font-bold text-bs-silver">E-mail</p>
                                    <a
                                        href="mailto:contato@bsseguranca.com.br"
                                        className="hover:text-bs-silver transition-colors break-all"
                                    >
                                        contato@bsseguranca.com.br
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-white/10 p-3 rounded-lg flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-bs-green" />
                                </div>
                                <div className="min-w-0">
                                    <p className="font-bold text-bs-silver">Localização</p>
                                    <p>Pará de Minas - MG</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 p-6 bg-white/10 rounded-xl">
                            <h4 className="font-bold text-lg mb-2">Nossa Missão</h4>
                            <p className="text-sm italic break-words">
                                &ldquo;Garantir a segurança jurídica e operacional de nossos clientes através de uma gestão técnica de excelência.&rdquo;
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="p-8 lg:p-12">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Nome Completo</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-bs-green focus:ring-1 focus:ring-bs-green transition-all"
                                    placeholder="Seu nome"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">E-mail</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-bs-green focus:ring-1 focus:ring-bs-green transition-all"
                                    placeholder="exemplo@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">WhatsApp / Telefone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-bs-green focus:ring-1 focus:ring-bs-green transition-all"
                                    placeholder="(31) 99999-9999"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Como podemos ajudar?</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-bs-green focus:ring-1 focus:ring-bs-green transition-all resize-none"
                                    placeholder="Descreva brevemente sua necessidade..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-bs-red text-white font-bold py-4 rounded-lg hover:bg-red-700 transition-colors duration-300 flex items-center justify-center gap-2"
                            >
                                <Send className="w-5 h-5" />
                                Enviar Mensagem
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
