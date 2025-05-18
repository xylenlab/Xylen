"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail } from "lucide-react"

export function ContactSection() {
  const { t } = useLanguage()

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-purple-600" />,
      title: t("contact.address"),
      details: "123 Business Ave, Suite 100, New York, NY 10001",
    },
    {
      icon: <Phone className="h-6 w-6 text-purple-600" />,
      title: t("contact.phone"),
      details: "+1 (555) 123-4567",
    },
    {
      icon: <Mail className="h-6 w-6 text-purple-600" />,
      title: t("contact.email.label"),
      details: "info@xylenlab.com",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("contact.title")}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{t("contact.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      {t("contact.name")}
                    </label>
                    <Input id="name" placeholder={t("contact.name")} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      {t("contact.email")}
                    </label>
                    <Input id="email" type="email" placeholder={t("contact.email")} />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      {t("contact.message")}
                    </label>
                    <Textarea id="message" placeholder={t("contact.message")} rows={4} />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600"
                  >
                    {t("contact.submit")}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="mr-4 mt-1">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{item.details}</p>
                </div>
              </div>
            ))}

            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573162764!2d-73.98784492404045!3d40.75790083608371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1710349480543!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: "0.5rem" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Xylen Lab Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
