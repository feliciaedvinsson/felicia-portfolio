import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Download, Send, Linkedin, Mail, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: { name: form.name, email: form.email, message: form.message },
      });
      if (error) throw error;
      toast({ title: "Meddelande skickat!", description: "Tack för ditt meddelande. Jag återkommer snart." });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Failed to send email:", err);
      toast({ title: "Något gick fel", description: "Kunde inte skicka meddelandet. Försök igen.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="kontakt" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Kontakta mig</h2>
        <p className="text-muted-foreground mb-12">
          Har du ett projekt i åtanke eller vill veta mer? Skicka ett meddelande!
        </p>

        <form onSubmit={handleSubmit} className="space-y-5 text-left">
          <div>
            <Input
              placeholder="Ditt namn"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="rounded-lg bg-white/90 text-gray-900 placeholder:text-gray-500 border-white/30"
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Din e-post"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="rounded-lg bg-white/90 text-gray-900 placeholder:text-gray-500 border-white/30"
            />
          </div>
          <div>
            <Textarea
              placeholder="Ditt meddelande"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              className="rounded-lg resize-none bg-white/90 text-gray-900 placeholder:text-gray-500 border-white/30"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button type="submit" className="rounded-full px-8 gap-2" disabled={sending}>
              {sending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              {sending ? "Skickar..." : "Skicka meddelande"}
            </Button>
            <Button asChild variant="outline" className="rounded-full px-8 gap-2">
              <a href="/CV Felicia Edvinsson.pdf" download="CV Felicia Edvinsson.pdf">
                <Download className="w-4 h-4" />
                Ladda ner CV
              </a>
            </Button>
          </div>
        </form>

        {/* Social icons */}
        <div className="flex justify-center gap-5 mt-14">
          {[
            { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/felicia-edvinsson-9883612aa/" },
            { icon: Mail, label: "Email", href: "mailto:feliciaedvinsson@hotmail.com" },
          ].map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={label === "LinkedIn" ? "_blank" : undefined}
              rel={label === "LinkedIn" ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="w-11 h-11 rounded-full border border-border flex items-center justify-center
                text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-200"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
