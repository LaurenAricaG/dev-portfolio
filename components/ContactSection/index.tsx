"use client";

import { useState } from "react";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import Container from "../layout/Container";
import Title from "../Tittle";
import { BiMapPin, BiRocket } from "react-icons/bi";
import { sileo } from "sileo";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.subject || !form.message) {
      sileo.error({
        title: "Campos incompletos",
        description: "Por favor completa todos los campos.",
        styles: {
          title: "text-red-500! font-semibold! text-sm!",
          description: "text-red-500! text-xs! text-center!",
          badge: "text-red-500! border!",
        },
        autopilot: { expand: 500, collapse: 5000 },
        roundness: 15,
      });
      return;
    }

    setLoading(true);

    const promise = fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    }).then(async (res) => {
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      return data;
    });

    sileo.promise(promise, {
      loading: {
        title: "Enviando mensaje...",
        description: "Por favor espera un momento.",
        styles: {
          title: "text-neutral-500! font-semibold! text-sm!",
          description: "text-neutral-500! text-xs! text-center!",
          badge: "text-neutral-500!",
        },
        roundness: 15,
      },
      success: {
        title: "¡Mensaje enviado!",
        icon: <BiRocket className="size-3.5" />,
        description: "Gracias por escribirme, te responderé pronto.",
        styles: {
          title: "text-status! font-semibold! text-sm!",
          description: "text-status! text-xs! text-center!",
          badge: "text-status! border!",
        },
        autopilot: { expand: 500, collapse: 5000 },
        roundness: 15,
      },
      error: {
        title: "Algo salió mal",
        description: "No se pudo enviar el mensaje, intenta de nuevo.",
        styles: {
          title: "text-red-500! font-semibold! text-sm!",
          description: "text-red-500! text-xs! text-center!",
          badge: "text-red-500! border!",
        },
        autopilot: { expand: 500, collapse: 5000 },
        roundness: 15,
      },
    });

    try {
      await promise;
      setForm({ name: "", email: "", subject: "", message: "" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="pt-15">
      <Container className="py-10">
        <Title label="contacto" title="Generemos" subtitle="valor juntos" />

        <div className="rounded-2xl border border-background/15 dark:border-white/15 bg-[#f0f0ef] dark:bg-background p-5 md:p-10">
          <h3 className="text-xl font-semibold text-background dark:text-foreground mb-8">
            Envíanos un mensaje
          </h3>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-hero-muted uppercase tracking-wider">
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  className="mt-2 w-full rounded-xl bg-white dark:bg-input-bg border border-background/10 dark:border-foreground/10 px-4 py-3 text-sm text-background dark:text-foreground placeholder:text-black/40 dark:placeholder:text-description focus:outline-none focus:border-status focus:ring-2 focus:ring-status/30 transition"
                />
              </div>

              <div>
                <label className="text-xs text-hero-muted uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className="mt-2 w-full rounded-xl bg-white dark:bg-input-bg border border-background/10 dark:border-foreground/10 px-4 py-3 text-sm text-background dark:text-foreground placeholder:text-black/40 dark:placeholder:text-description focus:outline-none focus:border-status focus:ring-2 focus:ring-status/30 transition"
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-hero-muted uppercase tracking-wider">
                Asunto
              </label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="¿En qué podemos ayudarte?"
                className="mt-2 w-full rounded-xl bg-white dark:bg-input-bg border border-background/10 dark:border-foreground/10 px-4 py-3 text-sm text-background dark:text-foreground placeholder:text-black/40 dark:placeholder:text-description focus:outline-none focus:border-status focus:ring-2 focus:ring-status/30 transition"
              />
            </div>

            <div>
              <label className="text-xs text-hero-muted uppercase tracking-wider">
                Mensaje
              </label>
              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Cuéntanos sobre tu proyecto..."
                className="mt-2 w-full rounded-xl bg-white dark:bg-input-bg border border-background/10 dark:border-foreground/10 px-4 py-3 text-sm text-background dark:text-foreground placeholder:text-black/40 dark:placeholder:text-description focus:outline-none focus:border-status focus:ring-2 focus:ring-status/30 resize-none transition"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="py-3 px-6 rounded-2xl bg-button text-foreground font-medium transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Enviar mensaje
            </button>
          </form>

          <div className="border-t border-background/30 dark:border-white/30 my-8" />

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-black/5 dark:hover:bg-input-bg transition">
              <div className="p-2.5 rounded-md bg-black/5 dark:bg-input-bg border border-background/10 dark:border-foreground/10">
                <MdOutlineMarkEmailUnread className="text-status" size={16} />
              </div>
              <div>
                <p className="text-xs text-hero-muted uppercase tracking-wider">
                  Email
                </p>
                <p className="text-background/80 dark:text-secondary text-xs">
                  laurendavid159@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-black/5 dark:hover:bg-input-bg transition">
              <div className="p-2.5 rounded-md bg-black/5 dark:bg-input-bg border border-background/10 dark:border-foreground/10">
                <BiMapPin className="text-status" size={16} />
              </div>
              <div>
                <p className="text-xs text-hero-muted uppercase tracking-wider">
                  Ubicación
                </p>
                <p className="text-background/80 dark:text-secondary text-xs">
                  Chiclayo, Perú
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
