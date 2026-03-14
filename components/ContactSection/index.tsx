import { MdOutlineMarkEmailUnread } from "react-icons/md";
import Container from "../layout/Container";
import Title from "../Tittle";
import { BiMapPin } from "react-icons/bi";

const ContactSection = () => {
  return (
    <section id="contact" className="pt-15">
      <Container className="py-10">
        <Title label="contacto" title="Generemos" subtitle="valor juntos" />

        <div className="rounded-2xl border border-background/15 dark:border-white/15 bg-[#f0f0ef] dark:bg-background p-5 md:p-10">
          <h3 className="text-xl font-semibold text-background dark:text-foreground mb-8">
            Envíanos un mensaje
          </h3>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-hero-muted uppercase tracking-wider">
                  Nombre
                </label>

                <input
                  type="text"
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
                placeholder="Cuéntanos sobre tu proyecto..."
                className="mt-2 w-full rounded-xl bg-white dark:bg-input-bg border border-background/10 dark:border-foreground/10 px-4 py-3 text-sm text-background dark:text-foreground placeholder:text-black/40 dark:placeholder:text-description focus:outline-none focus:border-status focus:ring-2 focus:ring-status/30 resize-none transition"
              />
            </div>

            <button
              type="submit"
              className="py-3 px-6 rounded-2xl bg-button text-foreground font-medium transition-all hover:scale-[1.02] active:scale-[0.98]"
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
